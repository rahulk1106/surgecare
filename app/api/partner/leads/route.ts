import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

let cachedClient: MongoClient | null = null
async function getClient() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI not set")
  if (cachedClient) return cachedClient
  const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
  await client.connect()
  cachedClient = client
  return client
}

async function getPartner(req: NextRequest, db: any) {
  const code = req.headers.get("x-partner-code")
  const phone = req.headers.get("x-partner-phone")
  if (!code || !phone) return null
  return await db.collection("partners").findOne({ code, phone })
}

export async function GET(req: NextRequest) {
  try {
    const client = await getClient()
    const db = client.db("mysurgery")
    const partner = await getPartner(req, db)
    if (!partner) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    const leads = await db.collection("partner_leads")
      .find({ partnerCode: partner.code })
      .sort({ createdAt: -1 })
      .toArray()
    const stats = {
      totalLeads: leads.length,
      pendingLeads: leads.filter((l:any) => l.status === "pending").length,
      contactedLeads: leads.filter((l:any) => l.status === "contacted").length,
      convertedLeads: leads.filter((l:any) => l.status === "converted").length,
      totalEarnings: leads.filter((l:any) => l.status === "converted").reduce((sum:number, l:any) => sum + (l.commission || 0), 0),
      pendingEarnings: leads.filter((l:any) => l.status === "converted" && !l.paid).reduce((sum:number, l:any) => sum + (l.commission || 0), 0),
    }
    return NextResponse.json({ leads: leads.map((l:any) => ({...l, _id: l._id.toString()})), stats })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const client = await getClient()
    const db = client.db("mysurgery")
    const partner = await getPartner(req, db)
    if (!partner) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    const body = await req.json()
    const { patientName, patientPhone, procedure, city, notes } = body
    if (!patientPhone) return NextResponse.json({ error: "Patient phone required" }, { status: 400 })
    // Check duplicate
    const exists = await db.collection("partner_leads").findOne({ patientPhone, partnerCode: partner.code })
    if (exists) return NextResponse.json({ error: "You already submitted a lead with this phone number" }, { status: 409 })
    const lead = {
      partnerCode: partner.code,
      partnerName: partner.name,
      partnerPhone: partner.phone,
      patientName: patientName || "Not provided",
      patientPhone,
      procedure: procedure || "",
      city: city || "",
      notes: notes || "",
      status: "pending",
      commission: 0,
      paid: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    await db.collection("partner_leads").insertOne(lead)
    // Also add to main leads collection
    await db.collection("leads").insertOne({
      name: patientName || "Referral Lead",
      phone: patientPhone,
      procedure: procedure || "",
      city: city || "",
      status: "new",
      notes: "Referred by partner: " + partner.name + " (" + partner.code + ")" + (notes ? ". " + notes : ""),
      source: "partner-referral",
      partnerCode: partner.code,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    // Update partner lead count
    await db.collection("partners").updateOne({ code: partner.code }, { $inc: { totalLeads: 1 } })
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
