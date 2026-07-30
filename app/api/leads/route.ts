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

// Convert raw URL into a human-readable label for Rahul
function buildSourceLabel(rawSource: string): string {
  try {
    const url = new URL(rawSource)
    const path = url.pathname
    if (path === '/' || path === '') return 'Homepage (International)'
    if (path.startsWith('/glp1/ozempic')) return 'GLP-1 → Ozempic page'
    if (path.startsWith('/glp1/wegovy')) return 'GLP-1 → Wegovy page'
    if (path.startsWith('/glp1/mounjaro')) return 'GLP-1 → Mounjaro page'
    if (path.startsWith('/glp1/generic')) return 'GLP-1 → Generics page'
    if (path.startsWith('/glp1/cost')) return 'GLP-1 → Cost Calculator'
    if (path.startsWith('/glp1/research')) return 'GLP-1 → Research Hub'
    if (path.startsWith('/glp1/side-effects')) return 'GLP-1 → Side Effects page'
    if (path.startsWith('/glp1/vs-bariatric')) return 'GLP-1 → vs Bariatric Surgery'
    if (path.startsWith('/glp1')) return 'GLP-1 Hub (overview)'
    if (path.startsWith('/treatment/') && path.includes('/cost-')) {
      const parts = path.split('/')
      return `Treatment → ${parts[2]} → ${parts[3].replace('cost-', '')} cost page`
    }
    if (path.startsWith('/treatment/')) return `Treatment → ${path.split('/')[2]} page`
    if (path.startsWith('/blog/')) return `Blog → ${path.split('/')[2]}`
    if (path.startsWith('/medical-tourism/')) return `International → ${path.split('/')[2]} patients page`
    if (path.startsWith('/cities/')) return `City page → ${path.split('/')[2]}`
    if (path.startsWith('/doctors/')) return `Doctor profile → ${path.split('/')[2]}`
    if (path.startsWith('/contact')) return 'Contact page (direct)'
    if (path.startsWith('/piles-symptoms-checker')) return 'Piles Symptoms Checker'
    if (path.startsWith('/circumcision-checker')) return 'Circumcision Assessment Tool'
    if (path.startsWith('/lasik-recommender')) return 'LASIK Recommender Tool'
    if (path.startsWith('/lasik-comparison')) return 'LASIK Comparison Page'
    if (path.startsWith('/piles-home-remedies')) return 'Piles Home Remedies Page'
    if (path.startsWith('/india')) return 'India Homepage'
    if (path === '/') return 'Homepage (International)'
    if (path.startsWith('/partner')) return 'Partner Portal'
    if (path.startsWith('/mtp-abortion')) return 'MTP / Abortion page'
    if (path.startsWith('/circumcision')) return 'Circumcision page'
    if (path.startsWith('/community/')) return `Community → ${path.split('/')[2]}`
    return path
  } catch {
    return rawSource || 'Direct'
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, procedure, city, message, sourcePage } = body
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    // Use explicit sourcePage from form, fall back to referer header
    // Get source — try sourcePage first, then referer, then construct from headers
    const referer = req.headers.get("referer") || ""
    const rawSource = sourcePage || referer || "Direct (No Referer)"
    // Add source hint if it came from popup
    const sourceHint = body.source === 'popup' ? ' [Popup Form]' : ''
    
    const sourceLabel = buildSourceLabel(rawSource) + sourceHint

    const lead = {
      name,
      phone,
      procedure: procedure || "Not specified",
      city: city || "Not specified",
      message: message || "",
      source: sourceLabel,
      sourceUrl: rawSource,
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

    // WhatsApp — now includes source page
    const waMsg = [
      "🔔 New Lead on MySurgery!",
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Procedure: " + (procedure || "Not specified"),
      "City: " + (city || "Not specified"),
      "📍 From: " + sourceLabel,
      message ? "Message: " + message : "",
      "",
      "⏰ Call within 30 minutes!",
      "Admin: mysurgery.in/admin",
    ].filter(Boolean).join("\n")

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

    // Email — now includes source page with highlighted styling
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: { user: process.env.GMAIL_USER!, pass: process.env.GMAIL_PASS! },
      })
      const emailBody = `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
          <h2 style="color:#1d4ed8;margin-bottom:4px">🔔 New Lead!</h2>
          <p style="color:#64748b;font-size:13px;margin-top:0">mysurgery.in — ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
            <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:10px 0;color:#64748b;font-size:13px;width:120px">Name</td><td style="padding:10px 0;font-weight:600;color:#0f172a">${name}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:10px 0;color:#64748b;font-size:13px">Phone</td><td style="padding:10px 0;font-weight:700;color:#1d4ed8;font-size:16px">${phone}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:10px 0;color:#64748b;font-size:13px">Procedure</td><td style="padding:10px 0;color:#0f172a">${procedure || "Not specified"}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0"><td style="padding:10px 0;color:#64748b;font-size:13px">City</td><td style="padding:10px 0;color:#0f172a">${city || "Not specified"}</td></tr>
            ${message ? `<tr style="border-bottom:1px solid #f0f0f0"><td style="padding:10px 0;color:#64748b;font-size:13px">Message</td><td style="padding:10px 0;color:#0f172a">${message}</td></tr>` : ''}
            ${body.notes ? `<tr style="border-bottom:1px solid #f0f0f0"><td style="padding:10px 0;color:#64748b;font-size:13px">Notes</td><td style="padding:10px 0;color:#0f172a">${body.notes}</td></tr>` : ''}
          </table>

          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:16px">
            <div style="font-size:11px;color:#3b82f6;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">📍 Lead Source</div>
            <div style="font-weight:700;color:#1e40af;font-size:15px">${sourceLabel}</div>
            <div style="font-size:11px;color:#93c5fd;margin-top:4px">${rawSource}</div>
          </div>

          <div style="background:#fef9c3;border:1px solid #fde047;border-radius:10px;padding:14px 16px;margin-bottom:16px;font-weight:600;color:#713f12">
            ⏰ Call within 30 minutes for best conversion!
          </div>

          <a href="https://www.mysurgery.in/admin" style="display:inline-block;background:#1d4ed8;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">
            View in Admin Panel →
          </a>
        </div>
      `
      await transporter.sendMail({
        from: process.env.GMAIL_USER!,
        to: process.env.GMAIL_USER!,
        subject: `🔔 New Lead: ${name} | ${procedure || "No Procedure"} | ${sourceLabel}`,
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
