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

export async function POST(req: NextRequest) {
  try {
    const { phone, pin } = await req.json()
    if (!phone || !pin) return NextResponse.json({ error: "Phone and PIN required" }, { status: 400 })
    const client = await getClient()
    const partner = await client.db("mysurgery").collection("partners").findOne({ phone, pin })
    if (!partner) return NextResponse.json({ error: "Invalid phone or PIN" }, { status: 401 })
    const { pin: _, ...safePartner } = partner
    return NextResponse.json({ success: true, partner: { ...safePartner, _id: safePartner._id.toString() } })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
