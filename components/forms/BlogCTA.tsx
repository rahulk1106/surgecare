'use client'
import { useState } from "react"

export default function BlogCTA({ procedure }: { procedure?: string }) {
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) return
    setLoading(true)
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Blog Lead", phone, procedure: procedure || "Not specified", city: "Not specified" }),
      })
      const data = await res.json()
      if (data.success) setStatus("success")
    } catch {}
    setLoading(false)
  }

  if (status === "success") {
    return (
      <div style={{background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "12px", padding: "24px", textAlign: "center", margin: "32px 0"}}>
        <p style={{fontSize: "20px", marginBottom: "8px"}}>✓</p>
        <p style={{fontWeight: 600, color: "#16a34a", margin: "0 0 4px"}}>We will call you within 30 minutes!</p>
        <p style={{fontSize: "14px", color: "#4b5563", margin: 0}}>A specialist will answer all your questions for free.</p>
      </div>
    )
  }

  return (
    <div style={{background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "24px", margin: "32px 0"}}>
      <p style={{fontSize: "13px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px"}}>Free Consultation</p>
      <h3 style={{fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "4px"}}>Have questions about {procedure || "this surgery"}?</h3>
      <p style={{fontSize: "14px", color: "#4b5563", marginBottom: "16px"}}>Enter your phone number — a specialist calls you back in 30 minutes. Free, no commitment.</p>
      <form onSubmit={handleSubmit} style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="+91 9XXXXXXXXX"
          required
          style={{flex: 1, minWidth: "200px", border: "1px solid #bfdbfe", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", outline: "none", boxSizing: "border-box"}}
        />
        <button
          type="submit"
          disabled={loading}
          style={{background: loading ? "#93c5fd" : "#1d4ed8", color: "white", fontWeight: 600, padding: "11px 20px", borderRadius: "8px", border: "none", fontSize: "14px", cursor: loading ? "not-allowed" : "pointer", whiteSpace: "nowrap"}}
        >
          {loading ? "..." : "Get Free Callback →"}
        </button>
      </form>
      <p style={{fontSize: "11px", color: "#6b7280", marginTop: "8px", marginBottom: 0}}>🔒 Confidential · No spam · 10,000+ patients helped</p>
    </div>
  )
}
