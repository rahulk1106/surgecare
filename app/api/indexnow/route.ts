import { NextResponse } from "next/server"

// IndexNow key — submit to indexnow.org
export const dynamic = 'force-dynamic'

export async function GET() {
  return new NextResponse("a1b2c3d4e5f6mysurgery2026", {
    headers: { "Content-Type": "text/plain" }
  })
}
