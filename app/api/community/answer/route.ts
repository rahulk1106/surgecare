import { NextRequest, NextResponse } from "next/server"
import { MongoClient, ObjectId } from "mongodb"

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
    if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    const { questionSlug, answerBody, name, city, isDoctor, qualification } = body
    if (!questionSlug?.trim()) return NextResponse.json({ error: "Question slug required" }, { status: 400 })
    if (!answerBody?.trim()) return NextResponse.json({ error: "Answer text required" }, { status: 400 })

    const answer = {
      body: answerBody.trim(),
      name: name?.trim() || "Anonymous",
      city: city?.trim() || "",
      isDoctor: !!isDoctor,
      qualification: qualification?.trim() || "",
      expert: false,
      createdAt: new Date(),
    }

    const client = await getClient()
    const db = client.db("mysurgery")

    // Push answer into question document and increment answers count
    const result = await db.collection("community").findOneAndUpdate(
      { slug: questionSlug },
      {
        $push: { answers: answer } as any,
        $inc: { answerCount: 1 } as any,
      },
      { returnDocument: "after" }
    )

    if (!result) {
      // Question might be a seed question not in DB — create it
      await db.collection("community_answers").insertOne({ questionSlug, ...answer })
    }

    return NextResponse.json({ success: true })
  } catch (e: any) {
    console.error("Answer POST error:", e)
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const questionSlug = searchParams.get("slug")
    if (!questionSlug) return NextResponse.json({ answers: [] })
    const client = await getClient()
    const db = client.db("mysurgery")

    // Get answers from standalone collection (for seed questions)
    const answers = await db.collection("community_answers")
      .find({ questionSlug })
      .sort({ createdAt: 1 })
      .toArray()

    // Also get from question doc if exists
    const question = await db.collection("community").findOne({ slug: questionSlug })
    const docAnswers = question?.answers || []

    return NextResponse.json({ answers: [...docAnswers, ...answers] })
  } catch (e: any) {
    return NextResponse.json({ answers: [] })
  }
}
