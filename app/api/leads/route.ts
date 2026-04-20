import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import twilio from "twilio"
import nodemailer from "nodemailer"

let cachedClient: MongoClient | null = null

async function getClient() {
  if (cachedClient) return cachedClient
  const client = new MongoClient(process.env.MONGODB_URI!, { serverSelectionTimeoutMS: 5000 })
  await client.connect()
  cachedClient = client
  return client
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, procedure, city, message } = body
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }
    const lead = {
      name,
      phone,
      procedure: procedure || "Not specified",
      city: city || "Not specified",
      message: message || "",
      source: req.headers.get("referer") || "Direct",
      createdAt: new Date(),
      status: "new",
    }
    let leadId = ""
    try {
      const client = await getClient()
      const result = await client.db("mysurgery").collection("leads").insertOne(lead)
      leadId = result.insertedId.toString()
      console.log("Lead saved:", leadId)
    } catch (e: any) {
      console.error("MongoDB error:", e.message)
      cachedClient = null
    }
    const waMsg = "New Lead on MySurgery!\n\nName: " + name + "\nPhone: " + phone + "\nProcedure: " + (procedure || "Not specified") + "\nCity: " + (city || "Not specified") + (message ? "\nMessage: " + message : "") + "\n\nCall within 30 minutes!"
    try {
      const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)
      await twilioClient.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM!,
        to: process.env.TWILIO_WHATSAPP_TO!,
        body: waMsg,
      })
      console.log("WhatsApp sent")
    } catch (e: any) {
      console.error("WhatsApp error:", e.message)
    }
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: { user: process.env.GMAIL_USER!, pass: process.env.GMAIL_PASS! },
      })
      const emailBody = "<div style=\"font-family:sans-serif;max-width:500px\"><h2 style=\"color:#1d4ed8\">New Lead!</h2><p><b>Name:</b> " + name + "</p><p><b>Phone:</b> " + phone + "</p><p><b>Procedure:</b> " + (procedure || "Not specified") + "</p><p><b>City:</b> " + (city || "Not specified") + "</p>" + (message ? "<p><b>Message:</b> " + message + "</p>" : "") + "<p style=\"background:#fef3c7;padding:12px;border-radius:8px\">Call within 30 minutes!</p></div>"
      await transporter.sendMail({
        from: process.env.GMAIL_USER!,
        to: process.env.GMAIL_USER!,
        subject: "New Lead: " + name + " - " + (procedure || "Surgery"),
        html: emailBody,
      })
      console.log("Email sent")
    } catch (e: any) {
      console.error("Email error:", e.message)
    }
    return NextResponse.json({ success: true, leadId })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}