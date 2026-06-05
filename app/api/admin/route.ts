import { NextRequest, NextResponse } from "next/server"
import { MongoClient, ObjectId } from "mongodb"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "mysurgery@2026"
let cachedClient: MongoClient | null = null

async function getClient() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI not set")
  if (cachedClient) return cachedClient
  const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
  await client.connect()
  cachedClient = client
  return client
}

function auth(req: NextRequest) {
  return req.headers.get("x-admin-password") === ADMIN_PASSWORD
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status")
    const search = searchParams.get("search")
    const city = searchParams.get("city")
    const dateFrom = searchParams.get("dateFrom")
    const dateTo = searchParams.get("dateTo")
    const page = parseInt(searchParams.get("page") || "1")
    const download = searchParams.get("download")
    const limit = download ? 10000 : 20

    const query: any = {}
    if (status && status !== "all") query.status = status
    if (city && city !== "all") query.city = { $regex: city, $options: "i" }
    if (search) query.$or = [
      { name: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
      { procedure: { $regex: search, $options: "i" } },
      { city: { $regex: search, $options: "i" } },
    ]
    if (dateFrom || dateTo) {
      query.createdAt = {}
      if (dateFrom) query.createdAt.$gte = new Date(dateFrom)
      if (dateTo) { const d = new Date(dateTo); d.setHours(23,59,59,999); query.createdAt.$lte = d }
    }

    const client = await getClient()
    const col = client.db("mysurgery").collection("leads")
    const total = await col.countDocuments(query)
    const leads = await col.find(query).sort({ createdAt: -1 }).skip(download ? 0 : (page-1)*limit).limit(limit).toArray()

    if (download === "csv") {
      const headers = ["Date", "Name", "Phone", "Procedure", "City", "Status", "Notes", "Source"]
      const rows = leads.map(l => [
        l.createdAt ? new Date(l.createdAt).toLocaleDateString("en-IN") : "",
        l.name || "",
        l.phone || "",
        l.procedure || "",
        l.city || "",
        l.status || "",
        (l.notes || "").replace(/,/g, ";").replace(/\n/g, " "),
        l.source || "web",
      ].map(v => `"${v}"`).join(","))
      const csv = [headers.join(","), ...rows].join("\n")
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="mysurgery-leads-${new Date().toISOString().slice(0,10)}.csv"`,
        }
      })
    }

    // Get unique cities for filter
    const cities = await col.distinct("city", {})

    return NextResponse.json({ leads, total, page, pages: Math.ceil(total / limit), cities: cities.filter(Boolean).sort() })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const body = await req.json()
    const { _id, ...update } = body
    if (!_id) return NextResponse.json({ error: "ID required" }, { status: 400 })
    update.updatedAt = new Date()
    const client = await getClient()
    await client.db("mysurgery").collection("leads").updateOne({ _id: new ObjectId(_id) }, { $set: update })
    // Sync status to partner_leads if this is a partner referral lead
    const lead = await client.db("mysurgery").collection("leads").findOne({ _id: new ObjectId(_id) })
    if (lead && lead.source === "partner-referral" && lead.partnerCode && update.status) {
      const COMMISSION_RATES: Record<string, number> = {
        "Proctology": 500, "Laparoscopy": 500, "General Surgery": 500,
        "Urology": 750, "ENT": 500, "Ophthalmology": 500, "Aesthetics": 750,
        "Gynecology": 1000, "Orthopaedics": 2000,
        "Cardiac Surgery": 5000, "Oncology": 3000, "Other": 500,
      }
      const commission = update.status === "converted" ? (COMMISSION_RATES[lead.category || "Other"] || 500) : undefined
      const partnerUpdate: any = { status: update.status, updatedAt: new Date() }
      if (commission) partnerUpdate.commission = commission
      await client.db("mysurgery").collection("partner_leads").updateOne(
        { patientPhone: lead.phone, partnerCode: lead.partnerCode },
        { $set: partnerUpdate }
      )
      // Update partner stats on conversion
      if (update.status === "converted" && commission) {
        await client.db("mysurgery").collection("partners").updateOne(
          { code: lead.partnerCode },
          { $inc: { convertedLeads: 1, totalEarnings: commission, pendingEarnings: commission } }
        )
      }
    }
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })
    const client = await getClient()
    await client.db("mysurgery").collection("leads").deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const contentType = req.headers.get("content-type") || ""

    // CSV bulk upload
    if (contentType.includes("text/plain") || contentType.includes("text/csv")) {
      const text = await req.text()
      const lines = text.split("\n").filter(Boolean)
      const headerLine = lines[0].toLowerCase()
      const isHeader = headerLine.includes("name") || headerLine.includes("phone")
      const dataLines = isHeader ? lines.slice(1) : lines
      const client = await getClient()
      const col = client.db("mysurgery").collection("leads")
      let inserted = 0
      for (const line of dataLines) {
        const cols = line.split(",").map(c => c.trim().replace(/^"|"$/g, ""))
        if (!cols[0] && !cols[1]) continue
        // Auto-detect columns: try name,phone,procedure,city,status or phone,name,...
        const phone = cols.find(c => /^[6-9]\d{9}$/.test(c.replace(/\s/g, ""))) || cols[1] || cols[0]
        const nameIdx = cols.indexOf(phone) === 0 ? 1 : 0
        if (!phone) continue
        const lead = {
          name: cols[nameIdx] || "CSV Import",
          phone: phone.replace(/\s/g, ""),
          procedure: cols[2] || "",
          city: cols[3] || "",
          status: cols[4] || "new",
          notes: cols[5] || "",
          source: "csv-upload",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        const exists = await col.findOne({ phone: lead.phone })
        if (!exists) { await col.insertOne(lead); inserted++ }
      }
      return NextResponse.json({ success: true, inserted, total: dataLines.length })
    }

    // Single lead JSON
    const body = await req.json()
    const { name, phone, procedure, city, status, notes } = body
    if (!phone) return NextResponse.json({ error: "Phone required" }, { status: 400 })
    const lead = { name: name || "Manual Entry", phone, procedure: procedure || "", city: city || "", status: status || "new", notes: notes || "", createdAt: new Date(), updatedAt: new Date(), source: "manual" }
    const client = await getClient()
    const result = await client.db("mysurgery").collection("leads").insertOne(lead)
    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
