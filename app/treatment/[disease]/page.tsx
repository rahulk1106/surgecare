import { getDiseaseBySlug, getAllDiseaseSlugs, getCityBySlug, cities } from "@/lib/diseases"
import { getDoctorsForDisease } from "@/lib/doctors"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const slugs = getAllDiseaseSlugs()
  return slugs.map(slug => ({ disease: slug }))
}

export async function generateMetadata(props: { params: Promise<{ disease: string }> }): Promise<Metadata> {
  const { disease: slug } = await props.params
  const disease = getDiseaseBySlug(slug)
  if (!disease) return {}
  const cityList = "Delhi, Gurugram, Noida, Mumbai, Bangalore & more"
  return {
    title: disease.name + " Surgery in India | Cost 2026, Best Doctors & Hospitals | MySurgery",
    description: disease.name + " surgery in India costs " + disease.costRange + ". " + disease.tagline + " NABH-accredited hospitals, insurance cashless, free expert consultation. Available in Delhi, Mumbai, Bangalore & 15+ cities.",
    keywords: disease.seoKeywords.join(", "),
    alternates: { canonical: "/treatment/" + slug },
  }
}

export default async function DiseasePage(props: { params: Promise<{ disease: string }> }) {
  const { disease: slug } = await props.params
  const disease = getDiseaseBySlug(slug)
  if (!disease) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: disease!.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  const d = disease!

  const reviewedDate = "June 2026"
  const reviewedDateISO = "2026-06-01"

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: d.name + " Surgery",
    description: d.description,
    procedureType: "https://schema.org/SurgicalProcedure",
    followup: d.recovery,
    preparation: "Free consultation with MySurgery. Share medical records for a personalised treatment plan.",
    howPerformed: d.treatments.join(". "),
    url: "https://www.mysurgery.in/treatment/" + slug,
    dateModified: reviewedDateISO,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mysurgery.in" },
      { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.mysurgery.in/treatments" },
      { "@type": "ListItem", position: 3, name: d.name, item: "https://www.mysurgery.in/treatment/" + slug },
    ],
  }

  return (
    <div style={{fontFamily: "system-ui, -apple-system, sans-serif"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{background: "linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)", padding: "60px 24px 48px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px"}}>
            <div style={{fontSize: "13px", color: "#6b7280"}}>
              <a href="/" style={{color: "#6b7280", textDecoration: "none"}}>Home</a> &rsaquo; <a href={"/treatment/" + slug} style={{color: "#1d4ed8", textDecoration: "none"}}>{d.name}</a>
            </div>
            <div style={{fontSize: "12px", color: "#6b7280", display: "flex", alignItems: "center", gap: "5px"}}>
              <span style={{color: "#22c55e"}}>✓</span>
              <span>Medically reviewed &amp; updated: <strong>{reviewedDate}</strong></span>
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center"}}>
            <div>
              <div style={{display: "inline-block", background: "#eff6ff", color: "#1d4ed8", fontSize: "12px", fontWeight: 600, padding: "4px 12px", borderRadius: "20px", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em"}}>{d.category}</div>
              <h1 style={{fontSize: "40px", fontWeight: 700, color: "#0f1f35", lineHeight: "1.2", marginBottom: "16px"}}>{d.name} Surgery in India — Cost, Doctors &amp; Hospitals</h1>
              <p style={{fontSize: "18px", color: "#4b5563", lineHeight: "1.7", marginBottom: "24px"}}>{d.tagline}</p>
              <div style={{background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "16px", marginBottom: "24px"}}>
                <p style={{color: "#1e3a8a", fontWeight: 500, margin: 0}}>{d.description}</p>
              </div>
              <div style={{display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px"}}>
                <a href="/contact" style={{background: "#1d4ed8", color: "white", fontWeight: 600, padding: "13px 24px", borderRadius: "10px", textDecoration: "none", fontSize: "15px"}}>Book Free Consultation</a>
                <a href="tel:+918588967050" style={{background: "white", color: "#1d4ed8", border: "1.5px solid #1d4ed8", fontWeight: 600, padding: "12px 24px", borderRadius: "10px", textDecoration: "none", fontSize: "15px"}}>Call 8588967050</a>
              </div>
              <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                {["No hidden fees", d.insuranceCovered ? "Insurance covered" : "Transparent pricing", "Same-day discharge"].map(item => (
                  <span key={item} style={{fontSize: "13px", color: "#4b5563", display: "flex", alignItems: "center", gap: "5px"}}><span style={{color: "#22c55e"}}>checkmark</span>{item}</span>
                ))}
              </div>
            </div>
            <div style={{background: "white", borderRadius: "16px", padding: "28px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)"}}>
              <p style={{fontSize: "11px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px"}}>Quick Facts</p>
              <h3 style={{fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "20px"}}>{d.name}</h3>
              {[
                ["Cost Range", d.costRange],
                ["Duration", d.duration],
                ["Hospital Stay", d.stayDuration],
                ["Recovery", d.recovery.split(".")[0]],
                ["Insurance", d.insuranceCovered ? "Covered" : "Not typically covered"],
              ].map(([label, value]) => (
                <div key={label} style={{display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", gap: "12px"}}>
                  <span style={{fontSize: "13px", color: "#6b7280"}}>{label}</span>
                  <span style={{fontSize: "13px", fontWeight: 600, color: "#111827", textAlign: "right"}}>{value}</span>
                </div>
              ))}
              <a href="/contact" style={{display: "block", background: "#1d4ed8", color: "white", textAlign: "center", fontWeight: 600, padding: "12px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", marginTop: "16px"}}>Get Free Callback</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth: "1100px", margin: "0 auto", padding: "48px 24px"}}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start"}}>
          <div>

            <section style={{marginBottom: "40px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>Symptoms of {d.name}</h2>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px"}}>
                {d.symptoms.map(s => (
                  <div key={s} style={{display: "flex", alignItems: "flex-start", gap: "10px", background: "#f9fafb", borderRadius: "8px", padding: "12px 14px"}}>
                    <span style={{color: "#ef4444", flexShrink: 0}}>●</span>
                    <span style={{fontSize: "14px", color: "#374151"}}>{s}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{marginBottom: "40px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>Causes of {d.name}</h2>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px"}}>
                {d.causes.map(c => (
                  <div key={c} style={{display: "flex", alignItems: "flex-start", gap: "10px", background: "#fffbeb", borderRadius: "8px", padding: "12px 14px"}}>
                    <span style={{color: "#f59e0b", flexShrink: 0}}>●</span>
                    <span style={{fontSize: "14px", color: "#374151"}}>{c}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{marginBottom: "40px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>Treatment Options</h2>
              <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                {d.treatments.map((t, i) => (
                  <div key={t} style={{display: "flex", alignItems: "center", gap: "14px", background: i === 0 ? "#eff6ff" : "white", border: i === 0 ? "1px solid #bfdbfe" : "1px solid #e5e7eb", borderRadius: "10px", padding: "14px 18px"}}>
                    {i === 0 && <span style={{background: "#1d4ed8", color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", whiteSpace: "nowrap"}}>RECOMMENDED</span>}
                    <span style={{fontSize: "15px", color: "#111827", fontWeight: i === 0 ? 600 : 400}}>{t}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{marginBottom: "40px", background: "#f9fafb", borderRadius: "16px", padding: "28px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "8px"}}>{d.name} Cost in India (2026)</h2>
              <p style={{color: "#6b7280", fontSize: "15px", marginBottom: "20px"}}>Cost varies by city, hospital, and method. MySurgery provides transparent pricing before you commit.</p>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "20px"}}>
                {cities.filter(c => d.cities.includes(c.slug)).slice(0, 4).map(city => (
                  <a key={city.slug} href={"/treatment/" + slug + "/cost-" + city.slug} style={{background: "white", borderRadius: "10px", padding: "16px", textAlign: "center", textDecoration: "none", border: "1px solid #e5e7eb", display: "block"}}>
                    <p style={{fontSize: "14px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 4px"}}>{d.costRange}</p>
                    <p style={{fontSize: "13px", color: "#6b7280", margin: 0}}>{city.name}</p>
                  </a>
                ))}
              </div>
              <div style={{background: "#fef3c7", borderRadius: "10px", padding: "14px 18px"}}>
                <p style={{fontSize: "14px", color: "#92400e", margin: 0}}><strong>Tip:</strong> {d.insuranceCovered ? "This procedure is covered by most health insurance policies. MySurgery helps with cashless claims." : "This procedure may not be covered by insurance. MySurgery helps with EMI options."}</p>
              </div>
            </section>

            <section style={{marginBottom: "40px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>Recovery Timeline</h2>
              <div style={{background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "12px", padding: "20px"}}>
                <p style={{fontSize: "15px", color: "#166534", lineHeight: "1.7", margin: 0}}>{d.recovery}</p>
              </div>
            </section>

            {(d.slug === 'piles' || d.slug === 'fissure' || d.slug === 'fistula') && (
              <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', padding: '18px 22px', marginBottom: '28px'}}>
                <p style={{fontWeight: 700, color: '#1e3a8a', fontSize: '15px', margin: '0 0 6px'}}>Not sure what grade your piles are?</p>
                <p style={{fontSize: '13px', color: '#1e3a8a', margin: '0 0 12px'}}>Take our 2-minute symptoms checker to find your grade and get a personalised treatment recommendation.</p>
                <a href='/piles-symptoms-checker' style={{display: 'inline-block', background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px'}}>Check My Symptoms →</a>
              </div>
            )}
            {(d.slug === 'circumcision') && (
              <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '14px', padding: '18px 22px', marginBottom: '28px'}}>
                <p style={{fontWeight: 700, color: '#166534', fontSize: '15px', margin: '0 0 6px'}}>Not sure if you need circumcision?</p>
                <p style={{fontSize: '13px', color: '#166534', margin: '0 0 12px'}}>Take our confidential 5-question assessment to find out what treatment is right for you.</p>
                <a href='/circumcision-checker' style={{display: 'inline-block', background: '#16a34a', color: 'white', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px'}}>Take Assessment →</a>
              </div>
            )}
            <section style={{marginBottom: "40px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>Top Surgeons for {d.name}</h2>
              <p style={{fontSize: "14px", color: "#6b7280", marginBottom: "20px"}}>Verified surgeons affiliated with partner hospitals. <a href="/doctors" style={{color: "#1d4ed8"}}>View all doctors →</a></p>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px"}}>
                {getDoctorsForDisease(d.categorySlug).map(doc => (
                  <div key={doc.slug} style={{border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", background: "white"}}>
                    <div style={{display: "flex", gap: "12px", alignItems: "flex-start"}}>
                      <div style={{width: "48px", height: "48px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#1d4ed8", fontSize: "18px", flexShrink: 0}}>
                        {doc.name.split(" ").slice(1,2).join("").charAt(0)}
                      </div>
                      <div style={{flex: 1}}>
                        <p style={{fontWeight: 700, color: "#111827", fontSize: "14px", margin: "0 0 2px"}}>{doc.name}</p>
                        <p style={{fontSize: "12px", color: "#6b7280", margin: "0 0 4px"}}>{doc.experience} yrs · {doc.city}</p>
                        <p style={{fontSize: "12px", color: "#374151", margin: 0}}>🏥 {doc.hospital}</p>
                      </div>
                    </div>
                    <div style={{display: "flex", gap: "6px", marginTop: "12px"}}>
                      <a href={"/doctors/" + doc.slug} style={{flex: 1, textAlign: "center", background: "#eff6ff", color: "#1d4ed8", padding: "7px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: 500}}>View Profile</a>
                      <a href="/contact" style={{flex: 1, textAlign: "center", background: "#1d4ed8", color: "white", padding: "7px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: 600}}>Book Consult</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{marginBottom: "40px"}}>
              <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "20px"}}>Frequently Asked Questions</h2>
              {d.faqs.map((faq, i) => (
                <div key={i} style={{border: "1px solid #e5e7eb", borderRadius: "10px", padding: "18px 20px", marginBottom: "10px"}}>
                  <h3 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>{faq.question}</h3>
                  <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.7", margin: 0}}>{faq.answer}</p>
                </div>
              ))}
            </section>
          </div>

          <div style={{position: "sticky", top: "80px"}}>
            {d.relatedDiseases && d.relatedDiseases.length > 0 && (
              <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "20px", marginBottom: "16px"}}>
                <p style={{fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "12px"}}>Related Treatments</p>
                {d.relatedDiseases.map(relSlug => (
                  <a key={relSlug} href={"/treatment/" + relSlug} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #f0f0f0", textDecoration: "none"}}>
                    <span style={{fontSize: "14px", color: "#374151", textTransform: "capitalize"}}>{relSlug.replace(/-/g, " ")}</span>
                    <span style={{fontSize: "12px", color: "#1d4ed8"}}>Learn more →</span>
                  </a>
                ))}
              </div>
            )}
            <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px", marginBottom: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)"}}>
              <p style={{fontSize: "11px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px"}}>Free Consultation</p>
              <h3 style={{fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "16px"}}>Talk to an expert today</h3>
              <a href="/contact" style={{display: "block", background: "#1d4ed8", color: "white", textAlign: "center", fontWeight: 600, padding: "13px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", marginBottom: "10px"}}>Book Free Consultation</a>
              <a href="https://wa.me/918588967050" target="_blank" rel="noopener noreferrer" style={{display: "block", background: "#22c55e", color: "white", textAlign: "center", fontWeight: 600, padding: "13px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", marginBottom: "10px"}}>WhatsApp Us</a>
              <a href="tel:+918588967050" style={{display: "block", background: "white", border: "1px solid #e5e7eb", color: "#374151", textAlign: "center", fontWeight: 500, padding: "11px", borderRadius: "10px", textDecoration: "none", fontSize: "14px"}}>Call 8588967050</a>
              <p style={{fontSize: "11px", color: "#9ca3af", textAlign: "center", marginTop: "10px", marginBottom: 0}}>Confidential · Callback in 30 mins</p>
            </div>
            <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "20px", marginBottom: "16px"}}>
              <p style={{fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "12px"}}>Available in your city</p>
              {cities.filter(c => d.cities.includes(c.slug)).map(city => (
                <a key={city.slug} href={"/treatment/" + slug + "/cost-" + city.slug} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #f0f0f0", textDecoration: "none"}}>
                  <span style={{fontSize: "14px", color: "#374151"}}>{city.name}</span>
                  <span style={{fontSize: "12px", color: "#1d4ed8"}}>View cost</span>
                </a>
              ))}
            </div>
            <div style={{background: "#f9fafb", borderRadius: "12px", padding: "16px"}}>
              {[["10,000+", "Patients helped"], ["30 min", "Callback time"], ["200+", "Partner hospitals"], ["Free", "Consultation"]].map(([n, l]) => (
                <div key={l} style={{display: "flex", alignItems: "center", gap: "12px", padding: "6px 0"}}>
                  <span style={{fontWeight: 700, color: "#1d4ed8", fontSize: "16px", minWidth: "60px"}}>{n}</span>
                  <span style={{fontSize: "13px", color: "#6b7280"}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}