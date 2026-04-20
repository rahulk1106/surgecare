'use client'
import { useState } from "react"

export default function ContactPage() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) { setStatus("error"); return }
    setLoading(true)
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, procedure: "Not specified", city: "Not specified" }),
      })
      const data = await res.json()
      if (data.success) setStatus("success")
      else setStatus("error")
    } catch { setStatus("error") }
    setLoading(false)
  }

  return (
    <main style={{maxWidth: "520px", margin: "0 auto", padding: "48px 24px"}}>
      <h1 style={{fontSize: "30px", fontWeight: 700, color: "#111827", marginBottom: "8px"}}>Book Free Consultation</h1>
      <p style={{color: "#6b7280", marginBottom: "32px"}}>Our care coordinator will call you back within 30 minutes.</p>

      {status === "success" ? (
        <div style={{background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "16px", padding: "40px", textAlign: "center"}}>
          <div style={{fontSize: "48px", marginBottom: "16px"}}>✓</div>
          <h2 style={{fontSize: "22px", fontWeight: 700, color: "#16a34a", marginBottom: "8px"}}>You are all set!</h2>
          <p style={{color: "#4b5563"}}>We will call you within 30 minutes.</p>
        </div>
      ) : (
        <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"}}>
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "16px"}}>
              <label style={{fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px"}}>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                style={{width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "12px 14px", fontSize: "15px", outline: "none", boxSizing: "border-box"}}
              />
            </div>
            <div style={{marginBottom: "20px"}}>
              <label style={{fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px"}}>Phone Number <span style={{color: "#dc2626"}}>*</span></label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+91 9XXXXXXXXX"
                style={{width: "100%", border: status === "error" ? "1px solid #dc2626" : "1px solid #e5e7eb", borderRadius: "8px", padding: "12px 14px", fontSize: "15px", outline: "none", boxSizing: "border-box"}}
              />
              {status === "error" && <p style={{color: "#dc2626", fontSize: "12px", marginTop: "4px"}}>Please enter your phone number</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{width: "100%", background: loading ? "#93c5fd" : "#1d4ed8", color: "white", fontWeight: 700, padding: "15px", borderRadius: "10px", border: "none", fontSize: "16px", cursor: loading ? "not-allowed" : "pointer"}}
            >
              {loading ? "Calling you soon..." : "Get Free Callback →"}
            </button>
            <p style={{fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "12px"}}>🔒 Confidential · No spam · Callback in 30 mins</p>
          </form>

          <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginTop: "24px"}}>
            {[["10,000+","Patients helped"],["30 min","Callback time"],["Free","Consultation"]].map(([n,l]) => (
              <div key={l} style={{textAlign: "center", background: "#f9fafb", borderRadius: "8px", padding: "12px"}}>
                <p style={{fontWeight: 700, color: "#1d4ed8", fontSize: "16px", margin: "0 0 2px"}}>{n}</p>
                <p style={{fontSize: "11px", color: "#6b7280", margin: 0}}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{marginTop: "24px", textAlign: "center"}}>
        <p style={{fontSize: "14px", color: "#6b7280", marginBottom: "8px"}}>Prefer to call directly?</p>
        <a href="tel:+918588807050" style={{fontSize: "24px", fontWeight: 700, color: "#1d4ed8", textDecoration: "none"}}>�� 8588807050</a>
      </div>
    </main>
  )
}
