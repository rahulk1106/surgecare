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
    const body = await req.json().catch(() => null)
    if (!body) return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    const { title, body: questionBody, category, name, city } = body
    if (!title?.trim()) return NextResponse.json({ error: "Question title is required" }, { status: 400 })
    if (!questionBody?.trim()) return NextResponse.json({ error: "Question details are required" }, { status: 400 })

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80) + "-" + Date.now()
    const question = {
      title: title.trim(),
      body: questionBody.trim(),
      category: category || "General Surgery",
      name: (name?.trim()) || "Anonymous",
      city: (city?.trim()) || "",
      slug,
      createdAt: new Date(),
      answers: 0,
      views: 0,
    }

    const client = await getClient()
    await client.db("mysurgery").collection("community").insertOne(question)
    return NextResponse.json({ success: true, slug }, { status: 201 })
  } catch (e: any) {
    console.error("Community POST error:", e)
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")
    const client = await getClient()
    const query: any = {}
    if (category && category !== "All") query.category = category
    const questions = await client.db("mysurgery").collection("community")
      .find(query).sort({ createdAt: -1 }).limit(100).toArray()
    return NextResponse.json({ questions })
  } catch (e: any) {
    console.error("Community GET error:", e)
    return NextResponse.json({ questions: [] }, { status: 200 })
  }
}
