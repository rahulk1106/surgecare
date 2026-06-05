import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import crypto from "crypto"

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
    const body = await req.json()
    const { name, phone, email, city, referralType } = body
    if (!name || !phone) return NextResponse.json({ error: "Name and phone required" }, { status: 400 })
    const client = await getClient()
    const db = client.db("mysurgery")
    const exists = await db.collection("partners").findOne({ phone })
    if (exists) return NextResponse.json({ error: "Phone already registered. Please login." }, { status: 409 })
    const code = "MS" + Math.random().toString(36).slice(2,6).toUpperCase() + phone.slice(-4)
    const pin = Math.floor(1000 + Math.random() * 9000).toString()
    const partner = {
      name, phone, email: email || "", city: city || "", referralType: referralType || "individual",
      code, pin, status: "active",
      totalLeads: 0, convertedLeads: 0, totalEarnings: 0, pendingEarnings: 0, paidEarnings: 0,
      createdAt: new Date(),
    }
    await db.collection("partners").insertOne(partner)
    return NextResponse.json({ success: true, code, pin, message: "Registration successful! Your referral code is " + code + " and PIN is " + pin })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
