import { treatments } from "@/lib/treatments"

export const metadata = {
  title: "All Surgical Treatments in Delhi-NCR — MySurgery",
  description: "Browse all surgical procedures offered by MySurgery across Delhi, Gurugram, Noida and Faridabad.",
}

export default function TreatmentsPage() {
  return (
    <div style={{maxWidth: "1152px", margin: "0 auto", padding: "48px 16px"}}>
      <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>All Procedures</p>
      <h1 style={{fontSize: "30px", fontWeight: 700, color: "#111827", marginBottom: "12px"}}>Surgical Treatments in Delhi-NCR</h1>
      <p style={{color: "#6b7280", fontSize: "18px", marginBottom: "40px"}}>MySurgery facilitates surgical care across Delhi-NCR. Free consultation, insurance support, and same-day discharge options.</p>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "48px"}}>
        {treatments.map((t) => (
          <a key={t.slug} href={"/treatments/" + t.slug} style={{border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px", display: "block", textDecoration: "none", transition: "all 0.2s"}}>
            <p style={{fontSize: "11px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", marginBottom: "8px"}}>{t.specialty}</p>
            <p style={{fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "8px"}}>{t.name}</p>
            <p style={{fontSize: "14px", color: "#6b7280", marginBottom: "16px", lineHeight: "1.6"}}>{t.description.slice(0, 100)}...</p>
            <div style={{display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px"}}>
              <span style={{fontSize: "12px", background: "#eff6ff", color: "#1d4ed8", padding: "4px 8px", borderRadius: "4px", fontWeight: 500}}>{t.costRange}</span>
              <span style={{fontSize: "12px", background: "#f0fdf4", color: "#15803d", padding: "4px 8px", borderRadius: "4px", fontWeight: 500}}>{t.stayDuration}</span>
              <span style={{fontSize: "12px", background: "#f9fafb", color: "#4b5563", padding: "4px 8px", borderRadius: "4px"}}>{t.duration}</span>
            </div>
            <p style={{fontSize: "14px", color: "#1d4ed8", fontWeight: 500}}>Know more and book consult →</p>
          </a>
        ))}
      </div>

      <div style={{background: "#1d4ed8", borderRadius: "12px", padding: "48px", textAlign: "center"}}>
        <h2 style={{fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "8px"}}>Not sure which surgery you need?</h2>
        <p style={{color: "#bfdbfe", marginBottom: "24px"}}>Talk to our care coordinator. Free, no commitment, callback in 30 minutes.</p>
        <a href="/contact" style={{display: "inline-block", background: "white", color: "#1d4ed8", fontWeight: 600, padding: "12px 32px", borderRadius: "8px", textDecoration: "none"}}>Book Free Consultation</a>
      </div>
    </div>
  )
}
