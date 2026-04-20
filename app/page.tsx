import { treatments } from "@/lib/treatments"
import { cities } from "@/lib/cities"
import { cities as allCities } from "@/lib/diseases"

export const metadata = {
  title: "MySurgery — Trusted Surgery Facilitation in Delhi-NCR",
  description: "MySurgery connects patients with expert surgeons and top hospitals in Delhi, Gurugram, Noida and Faridabad. Free consultation, insurance support, same-day discharge.",
}

const treatmentIcons: Record<string, {icon: string; label: string; color: string; text: string}> = {
  "piles-laser-treatment": { icon: "🩸", label: "Proctology", color: "#fff0f0", text: "#c0392b" },
  "hernia-repair-surgery": { icon: "🫁", label: "General Surgery", color: "#f0fff4", text: "#16a34a" },
  "knee-replacement-surgery": { icon: "🦵", label: "Orthopaedics", color: "#f0f7ff", text: "#1d4ed8" },
  "cataract-surgery": { icon: "👁️", label: "Ophthalmology", color: "#fefce8", text: "#b45309" },
  "gallbladder-removal": { icon: "🫀", label: "General Surgery", color: "#fffbeb", text: "#b45309" },
}

const cityImages: Record<string, string> = {
  "gurugram": "https://images.unsplash.com/photo-1587474260584-136574297aa5?w=300&q=70",
  "delhi": "https://unsplash.com/photos/brown-concrete-arch-under-blue-sky-during-daytime-XjKaPInYVCM",
  "noida": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&q=70",
  "faridabad": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&q=70",
}

export default function HomePage() {
  return (
    <main style={{fontFamily: "system-ui, -apple-system, sans-serif"}}>

      {/* HERO */}
      <section style={{background: "linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 60%, #f5faf8 100%)", padding: "80px 24px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start"}}>

          {/* LEFT — text */}
          <div style={{paddingTop: "40px"}}>
            <div style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "white", border: "1px solid #e0ecff", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", color: "#1d4ed8", fontWeight: 500, marginBottom: "24px"}}>
              <span style={{width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%", display: "inline-block"}}></span>
              50,000+ Successful Surgeries
            </div>
            <h1 style={{fontSize: "48px", fontWeight: 700, color: "#0f1f35", lineHeight: "1.15", marginBottom: "20px", letterSpacing: "-0.02em"}}>
              Surgery Care,<br />
              <span style={{color: "#1d4ed8"}}>Done Right</span>
            </h1>
            <p style={{fontSize: "18px", color: "#4b5563", lineHeight: "1.7", marginBottom: "32px"}}>
              Expert surgeons, top hospitals, insurance handled — all in one place. Get a free consultation today and know everything before you decide.
            </p>
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px"}}>
              <a href="/contact" style={{background: "#1d4ed8", color: "white", fontWeight: 600, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "15px"}}>
                Book Free Consultation
              </a>
              <a href="/treatments" style={{background: "white", color: "#1d4ed8", border: "1.5px solid #1d4ed8", fontWeight: 600, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "15px"}}>
                View Treatments
              </a>
            </div>
            <div style={{display: "flex", gap: "24px", flexWrap: "wrap"}}>
              {["No hidden fees", "Insurance accepted", "Same-day discharge"].map((item) => (
                <div key={item} style={{display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6b7280"}}>
                  <span style={{color: "#22c55e", fontWeight: 700}}>✓</span> {item}
                </div>
              ))}
            </div>

            {/* STATS ROW */}
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "48px"}}>
              {[
                { num: "50,000+", label: "Surgeries" },
                { num: "400+", label: "Surgeons" },
                { num: "4.8★", label: "Rating" },
              ].map((s) => (
                <div key={s.label} style={{background: "white", borderRadius: "12px", padding: "16px", textAlign: "center", border: "1px solid #e0ecff"}}>
                  <p style={{fontSize: "22px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 4px"}}>{s.num}</p>
                  <p style={{fontSize: "12px", color: "#6b7280", margin: 0}}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form only */}
          <div style={{background: "white", borderRadius: "20px", padding: "36px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1px solid #f0f0f0"}}>
            <p style={{fontSize: "11px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px"}}>Free Consultation</p>
            <h3 style={{fontSize: "22px", fontWeight: 700, color: "#111827", marginBottom: "8px"}}>Talk to a Surgeon Today</h3>
            <p style={{fontSize: "14px", color: "#6b7280", marginBottom: "24px"}}>No commitment. Expert advice. Callback in 30 minutes.</p>
            <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
              <div>
                <label style={{fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px"}}>Your Name</label>
                <input type="text" placeholder="e.g. Rahul Sharma" style={{width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", outline: "none", boxSizing: "border-box"}} />
              </div>
              <div>
                <label style={{fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px"}}>Phone Number</label>
                <input type="tel" placeholder="+91 9XXXXXXXXX" style={{width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", outline: "none", boxSizing: "border-box"}} />
              </div>
              <div>
                <label style={{fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px"}}>Surgery / Concern</label>
                <select style={{width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", outline: "none", background: "white", boxSizing: "border-box"}}>
                  <option>Select a procedure...</option>
                  <option>Piles Laser Treatment</option>
                  <option>Hernia Repair Surgery</option>
                  <option>Knee Replacement Surgery</option>
                  <option>Gallbladder Removal</option>
                  <option>Cataract Surgery</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label style={{fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px"}}>City</label>
                <select style={{width: "100%", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", outline: "none", background: "white", boxSizing: "border-box"}}>
                  <option>Select city...</option>
                  <option>Gurugram</option>
                  <option>Delhi</option>
                  <option>Noida</option>
                  <option>Faridabad</option>
                </select>
              </div>
              <a href="/contact" style={{display: "block", background: "#1d4ed8", color: "white", textAlign: "center", fontWeight: 600, padding: "14px", borderRadius: "10px", textDecoration: "none", fontSize: "15px", marginTop: "4px"}}>
                Book My Free Consultation →
              </a>
              <p style={{fontSize: "12px", color: "#9ca3af", textAlign: "center", margin: 0}}>🔒 100% confidential · Callback in 30 minutes</p>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{padding: "80px 24px", background: "white"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>How It Works</p>
          <h2 style={{fontSize: "36px", fontWeight: 700, color: "#0f1f35", marginBottom: "48px", letterSpacing: "-0.02em"}}>Surgery made simple in 4 steps</h2>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px"}}>
            {[
              { step: "01", title: "Free Consultation", desc: "Call or fill the form. Our care coordinator calls back in 30 minutes.", icon: "📞" },
              { step: "02", title: "Meet the Surgeon", desc: "We match you with the best surgeon for your condition near you.", icon: "👨‍⚕️" },
              { step: "03", title: "Surgery Day", desc: "We handle pre-op, insurance, admission, and stay with you through it.", icon: "🏥" },
              { step: "04", title: "Full Recovery", desc: "Post-op follow-up, care coordination, and diet guidance included.", icon: "❤️" },
            ].map((item) => (
              <div key={item.step} style={{textAlign: "center"}}>
                <div style={{width: "64px", height: "64px", background: "#eff6ff", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "28px"}}>
                  {item.icon}
                </div>
                <p style={{fontSize: "11px", fontWeight: 600, color: "#1d4ed8", marginBottom: "6px"}}>{item.step}</p>
                <p style={{fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "8px"}}>{item.title}</p>
                <p style={{fontSize: "14px", color: "#6b7280", lineHeight: "1.6", margin: 0}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section style={{padding: "80px 24px", background: "#f9fafb"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px"}}>
            <div>
              <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>Procedures</p>
              <h2 style={{fontSize: "36px", fontWeight: 700, color: "#0f1f35", letterSpacing: "-0.02em", margin: 0}}>Surgery for every condition</h2>
            </div>
            <a href="/treatments" style={{fontSize: "14px", color: "#1d4ed8", fontWeight: 500, textDecoration: "none"}}>View all →</a>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px"}}>
            {treatments.map((t) => (
              <a key={t.slug} href={"/treatments/" + t.slug} style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", overflow: "hidden", display: "block", textDecoration: "none"}}>
                <div style={{height: "140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: treatmentIcons[t.slug] ? treatmentIcons[t.slug].color : "#f0f7ff", gap: "8px"}}>
                  <span style={{fontSize: "48px"}}>{treatmentIcons[t.slug] ? treatmentIcons[t.slug].icon : "🏥"}</span>
                  <span style={{fontSize: "12px", fontWeight: 600, color: treatmentIcons[t.slug] ? treatmentIcons[t.slug].text : "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.06em"}}>{treatmentIcons[t.slug] ? treatmentIcons[t.slug].label : "Surgery"}</span>
                </div>
                <div style={{padding: "20px"}}>
                  <p style={{fontSize: "11px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px"}}>{t.specialty}</p>
                  <p style={{fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "8px"}}>{t.name}</p>
                  <p style={{fontSize: "15px", fontWeight: 600, color: "#1d4ed8", marginBottom: "12px"}}>{t.costRange}</p>
                  <div style={{display: "flex", gap: "8px", flexWrap: "wrap"}}>
                    <span style={{fontSize: "12px", background: "#eff6ff", color: "#1d4ed8", padding: "3px 8px", borderRadius: "4px"}}>{t.duration}</span>
                    <span style={{fontSize: "12px", background: "#f0fdf4", color: "#16a34a", padding: "3px 8px", borderRadius: "4px"}}>{t.stayDuration}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding: "80px 24px", background: "white"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>Patient Stories</p>
          <h2 style={{fontSize: "36px", fontWeight: 700, color: "#0f1f35", marginBottom: "40px", letterSpacing: "-0.02em"}}>Real patients, real results</h2>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px"}}>
            {[
              { name: "Rajesh Kumar", location: "Gurugram", surgery: "Hernia Repair", rating: "★★★★★", text: "I was scared about surgery for 2 years. MySurgery explained everything, found me the best surgeon, and I was home the same evening. Life-changing experience." },
              { name: "Sunita Patel", location: "Delhi", surgery: "Piles Laser Treatment", rating: "★★★★★", text: "The laser treatment was completely painless. My care manager handled all insurance paperwork. I cannot believe how easy the whole process was." },
              { name: "Amit Sharma", location: "Noida", surgery: "Knee Replacement", rating: "★★★★★", text: "After years of knee pain I finally got my replacement done. MySurgery coordinated everything from consultation to physiotherapy. Highly recommended." },
            ].map((t) => (
              <div key={t.name} style={{border: "1px solid #e5e7eb", borderRadius: "16px", padding: "28px"}}>
                <p style={{color: "#f59e0b", fontSize: "20px", marginBottom: "12px", margin: "0 0 12px"}}>{t.rating}</p>
                <p style={{fontSize: "15px", color: "#374151", lineHeight: "1.7", marginBottom: "24px", fontStyle: "italic"}}>"{t.text}"</p>
                <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                  <div style={{width: "44px", height: "44px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#1d4ed8", fontSize: "15px", flexShrink: 0}}>
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p style={{fontSize: "14px", fontWeight: 600, color: "#111827", margin: "0 0 2px"}}>{t.name}</p>
                    <p style={{fontSize: "12px", color: "#6b7280", margin: 0}}>{t.surgery} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section style={{padding: "80px 24px", background: "#f9fafb"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>Our Locations</p>
          <h2 style={{fontSize: "36px", fontWeight: 700, color: "#0f1f35", marginBottom: "8px", letterSpacing: "-0.02em"}}>Available across India</h2>
          <p style={{fontSize: "16px", color: "#6b7280", marginBottom: "32px"}}>MySurgery connects patients with expert surgeons in 20+ cities across India.</p>
          <div style={{display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px"}}>
            {["delhi","gurugram","noida","faridabad","mumbai","bangalore","kochi","chennai","pune","ahmedabad","lucknow","indore","patna","ranchi","raipur","bhubaneswar","trivandrum","coimbatore","madurai","vijayawada","vizag"].slice(0,12).map((slug) => {
              const city = allCities.find((c) => c.slug === slug)
              if (!city) return null
              return (
                <a key={slug} href={"/cities/" + slug} style={{display: "inline-flex", alignItems: "center", gap: "6px", background: "white", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "8px 14px", textDecoration: "none", fontSize: "14px", color: "#374151", fontWeight: 500}}>
                  <span style={{fontSize: "16px"}}>📍</span>{city.name}
                </a>
              )
            })}
            <a href="/cities" style={{display: "inline-flex", alignItems: "center", gap: "6px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "8px", padding: "8px 14px", textDecoration: "none", fontSize: "14px", color: "#1d4ed8", fontWeight: 600}}>
              View all 20+ cities →
            </a>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px"}}>
            {["delhi","gurugram","noida","faridabad","kochi","mumbai"].map((slug) => {
              const city = allCities.find((c) => c.slug === slug)
              if (!city) return null
              return (
                <a key={slug} href={"/cities/" + slug} style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px 20px", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div>
                    <p style={{fontWeight: 700, color: "#111827", margin: "0 0 2px", fontSize: "15px"}}>{city.name}</p>
                    <p style={{fontSize: "12px", color: "#6b7280", margin: 0}}>{city.state}</p>
                  </div>
                  <span style={{fontSize: "12px", color: "#1d4ed8", fontWeight: 500}}>View →</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{padding: "80px 24px", background: "white"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center"}}>
          <div>
            <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>Why MySurgery</p>
            <h2 style={{fontSize: "36px", fontWeight: 700, color: "#0f1f35", marginBottom: "32px", letterSpacing: "-0.02em"}}>The care you deserve</h2>
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
              {[
                { title: "200+ Partner Hospitals", desc: "NABH-accredited hospitals across Delhi-NCR with insurance tie-ups and cashless facilities." },
                { title: "Dedicated Care Coordinator", desc: "A non-clinical coordinator handles everything from booking to discharge so you never feel lost." },
                { title: "Insurance Handled for Free", desc: "We handle pre-auth, cashless claims, and paperwork with all major insurers at no extra charge." },
                { title: "Transparent Pricing", desc: "Know the exact cost before surgery. No surprises, no hidden fees ever." },
              ].map((item) => (
                <div key={item.title} style={{display: "flex", gap: "16px", alignItems: "flex-start"}}>
                  <div style={{width: "28px", height: "28px", background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px"}}>
                    <span style={{color: "#16a34a", fontWeight: 700, fontSize: "13px"}}>✓</span>
                  </div>
                  <div>
                    <p style={{fontWeight: 600, color: "#111827", margin: "0 0 4px"}}>{item.title}</p>
                    <p style={{fontSize: "14px", color: "#6b7280", lineHeight: "1.6", margin: 0}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.1)"}}>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
              alt="Medical team"
              style={{width: "100%", height: "500px", objectFit: "cover", display: "block"}}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background: "#0f1f35", padding: "80px 24px", textAlign: "center"}}>
        <h2 style={{fontSize: "40px", fontWeight: 700, color: "white", marginBottom: "16px", letterSpacing: "-0.02em"}}>Ready to take the first step?</h2>
        <p style={{fontSize: "18px", color: "#93c5fd", marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px"}}>Free consultation. Expert surgeon. Insurance handled. Callback in 30 minutes.</p>
        <div style={{display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap"}}>
          <a href="/contact" style={{background: "#1d4ed8", color: "white", fontWeight: 600, padding: "16px 32px", borderRadius: "10px", textDecoration: "none", fontSize: "16px"}}>
            Book Free Consultation
          </a>
          <a href="tel:+918588807050" style={{background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.3)", fontWeight: 500, padding: "16px 32px", borderRadius: "10px", textDecoration: "none", fontSize: "16px"}}>
            Call 8588807050
          </a>
        </div>
      </section>

    </main>
  )
}
