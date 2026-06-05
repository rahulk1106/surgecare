import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

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

const DEFAULT_SETTINGS = {
  commissions: {
    silver: { Proctology: 500, Laparoscopy: 500, "General Surgery": 500, Urology: 750, ENT: 500, Ophthalmology: 500, Aesthetics: 750, Gynecology: 1000, Orthopaedics: 2000, "Cardiac Surgery": 5000, Oncology: 3000, Other: 500 },
    gold:   { Proctology: 750, Laparoscopy: 750, "General Surgery": 750, Urology: 1000, ENT: 750, Ophthalmology: 750, Aesthetics: 1000, Gynecology: 1500, Orthopaedics: 3000, "Cardiac Surgery": 7000, Oncology: 4500, Other: 750 },
    diamond:{ Proctology: 1000, Laparoscopy: 1000, "General Surgery": 1000, Urology: 1500, ENT: 1000, Ophthalmology: 1000, Aesthetics: 1500, Gynecology: 2000, Orthopaedics: 5000, "Cardiac Surgery": 10000, Oncology: 6000, Other: 1000 },
  },
  tiers: {
    silver:  { label: "Silver", minLeads: 0,  minConverted: 0,  color: "#6b7280", bg: "#f9fafb",  description: "Starting tier for all new partners" },
    gold:    { label: "Gold",   minLeads: 10, minConverted: 3,  color: "#b45309", bg: "#fefce8",  description: "10+ leads submitted, 3+ converted" },
    diamond: { label: "Diamond",minLeads: 25, minConverted: 10, color: "#1d4ed8", bg: "#eff6ff",  description: "25+ leads submitted, 10+ converted" },
  }
}

export async function GET(req: NextRequest) {
  try {
    const client = await getClient()
    const settings = await client.db("mysurgery").collection("settings").findOne({ type: "commission" })
    return NextResponse.json({ settings: settings || DEFAULT_SETTINGS })
  } catch (e: any) {
    return NextResponse.json({ settings: DEFAULT_SETTINGS })
  }
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    const body = await req.json()
    const client = await getClient()
    await client.db("mysurgery").collection("settings").updateOne(
      { type: "commission" },
      { $set: { type: "commission", ...body, updatedAt: new Date() } },
      { upsert: true }
    )
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
