import { categories, cities } from "@/lib/diseases"

export default function Footer() {
  return (
    <footer style={{background: "#070f1a", padding: "60px 24px 32px", fontFamily: "system-ui,-apple-system,sans-serif"}}>
      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px", marginBottom: "48px"}}>

          {/* Brand */}
          <div style={{gridColumn: "span 1"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px"}}>
              <div style={{width: "32px", height: "32px", background: "#1d4ed8", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "15px"}}>M</div>
              <span style={{fontWeight: 700, color: "white", fontSize: "18px"}}>MySurgery</span>
            </div>
            <p style={{fontSize: "14px", color: "#6b7280", lineHeight: "1.7", marginBottom: "16px"}}>Advanced surgical care across India. Expert surgeons, minimal recovery, maximum outcomes.</p>
            <a href="tel:+918588967050" style={{fontSize: "14px", color: "#93c5fd", textDecoration: "none", display: "block", marginBottom: "6px"}}>📞 8588967050</a>
            <a href="mailto:info.mysurgery@gmail.com" style={{fontSize: "14px", color: "#93c5fd", textDecoration: "none", display: "block", marginBottom: "6px"}}>✉️ info.mysurgery@gmail.com</a>
            <a href="https://wa.me/918588967050" target="_blank" rel="noopener noreferrer" style={{fontSize: "14px", color: "#22c55e", textDecoration: "none", display: "block"}}>WhatsApp Us</a>
          </div>

          {/* Treatments */}
          <div>
            <p style={{fontSize: "12px", fontWeight: 600, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px"}}>Treatments</p>
            {categories.slice(0, 3).flatMap(c => c.diseases.slice(0, 2)).map(d => (
              <a key={d.slug} href={"/treatment/" + d.slug} style={{display: "block", fontSize: "14px", color: "#9ca3af", marginBottom: "8px", textDecoration: "none"}}>{d.name}</a>
            ))}
            <a href="/treatments" style={{display: "block", fontSize: "13px", color: "#1d4ed8", marginTop: "8px", textDecoration: "none"}}>View all →</a>
          </div>

          {/* Categories */}
          <div>
            <p style={{fontSize: "12px", fontWeight: 600, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px"}}>Specialities</p>
            {categories.map(c => (
              <a key={c.slug} href={"/treatments"} style={{display: "block", fontSize: "14px", color: "#9ca3af", marginBottom: "8px", textDecoration: "none"}}>{c.name}</a>
            ))}
          </div>

          {/* Cities */}
          <div>
            <p style={{fontSize: "12px", fontWeight: 600, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px"}}>Cities</p>
            {cities.map(c => (
              <a key={c.slug} href={"/cities/" + c.slug} style={{display: "block", fontSize: "14px", color: "#9ca3af", marginBottom: "8px", textDecoration: "none"}}>{c.name}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{fontSize: "12px", fontWeight: 600, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px"}}>Company</p>
            {[{l: "About Us", h: "/about"}, {l: "Blog", h: "/blog"}, {l: "Contact", h: "/contact"}, {l: "Sitemap", h: "/sitemap.xml"}].map(item => (
              <a key={item.h} href={item.h} style={{display: "block", fontSize: "14px", color: "#9ca3af", marginBottom: "8px", textDecoration: "none"}}>{item.l}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{borderTop: "1px solid #1f2937", paddingTop: "24px"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px"}}>
            <p style={{fontSize: "13px", color: "#4b5563", margin: 0}}>© 2026 MySurgery. All rights reserved.</p>
          </div>
          <div style={{display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "12px"}}>
            <a href="/privacy-policy" style={{fontSize: "13px", color: "#6b7280", textDecoration: "none"}}>Privacy Policy</a>
            <a href="/terms-and-conditions" style={{fontSize: "13px", color: "#6b7280", textDecoration: "none"}}>Terms &amp; Conditions</a>
            <a href="/editorial-policy" style={{fontSize: "13px", color: "#6b7280", textDecoration: "none"}}>Editorial Policy</a>
            <a href="/doctors/claim" style={{fontSize: "13px", color: "#6b7280", textDecoration: "none"}}>Claim Doctor Profile</a>
            <a href="/community" style={{fontSize: "13px", color: "#6b7280", textDecoration: "none"}}>Patient Community</a>
          </div>
          <p style={{fontSize: "12px", color: "#4b5563", margin: 0, lineHeight: "1.6"}}>
            Disclaimer: Doctors listed on MySurgery are sourced from publicly available information and are not employed by or affiliated with MySurgery. MySurgery is an information directory and patient facilitation platform, not a medical service provider. Always consult a registered medical practitioner before making any medical decision.
          </p>
        </div>
      </div>
    </footer>
  )
}
