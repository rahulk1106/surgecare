import CityLeadForm from "@/components/forms/CityLeadForm"
import { getDiseaseBySlug, getAllDiseaseSlugs, getCityBySlug, cities, getAllCitySlugs } from "@/lib/diseases"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const slugs = getAllDiseaseSlugs()
  const citySlugs = getAllCitySlugs()
  const params: { disease: string; city: string }[] = []
  slugs.forEach(disease => {
    const d = getDiseaseBySlug(disease)
    if (!d) return
    citySlugs.forEach(city => {
      if (d.cities.includes(city)) params.push({ disease, city: "cost-" + city })
    })
  })
  return params
}

export async function generateMetadata(props: { params: Promise<{ disease: string; city: string }> }): Promise<Metadata> {
  const { disease: slug, city: rawCity } = await props.params
  const citySlug = rawCity.startsWith('cost-') ? rawCity.replace('cost-', '') : rawCity
  const disease = getDiseaseBySlug(slug)
  const city = getCityBySlug(citySlug)
  if (!disease || !city) return {}
  const needsSurgery = !disease.name.includes('Surgery') && !disease.name.includes('Repair')
  return {
    title: disease.name + (needsSurgery ? " Surgery" : "") + " Cost in " + city.name + " 2026 | Best Hospitals & Doctors",
    description: disease.name + " surgery cost in " + city.name + " is " + disease.costRange + ". Insurance cashless at top NABH hospitals. Same-day discharge available. Free expert consultation — callback in 30 mins.",
    alternates: { canonical: "/treatment/" + slug + "/cost-" + citySlug },
  }
}

export default async function CostCityPage(props: { params: Promise<{ disease: string; city: string }> }) {
  const { disease: slug, city: rawCity } = await props.params
  const citySlug = rawCity.startsWith('cost-') ? rawCity.replace('cost-', '') : rawCity
  const disease = getDiseaseBySlug(slug)
  const city = getCityBySlug(citySlug)
  if (!disease || !city) notFound()
  const d = disease!
  const c = city!

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How much does " + d.name + " cost in " + c.name + "?", acceptedAnswer: { "@type": "Answer", text: d.name + " surgery in " + c.name + " costs " + d.costRange + ". MySurgery provides transparent pricing before you commit." } },
      { "@type": "Question", name: "Is " + d.name + " covered by insurance in " + c.name + "?", acceptedAnswer: { "@type": "Answer", text: d.insuranceCovered ? "Yes. " + d.name + " is covered by all major health insurance policies. MySurgery helps with cashless claims at partner hospitals in " + c.name + "." : "This procedure is usually not covered by insurance. MySurgery provides transparent pricing and EMI options." } },
      ...d.faqs.map(f => ({ "@type": "Question", name: f.question.replace(/\bDelhi(?:-NCR)?\b/g, c.name), acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\bDelhi(?:-NCR)?\b/g, c.name) } })),
    ],
  }

  return (
    <div style={{fontFamily: "system-ui, -apple-system, sans-serif"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{background: "linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)", padding: "60px 24px 48px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <div style={{fontSize: "13px", color: "#6b7280", marginBottom: "12px"}}>
            <a href="/" style={{color: "#6b7280", textDecoration: "none"}}>Home</a> &rsaquo;{" "}
            <a href={"/treatment/" + slug} style={{color: "#6b7280", textDecoration: "none"}}>{d.name}</a> &rsaquo;{" "}
            <span style={{color: "#1d4ed8"}}>Cost in {c.name}</span>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center"}}>
            <div>
              <h1 style={{fontSize: "38px", fontWeight: 700, color: "#0f1f35", lineHeight: "1.2", marginBottom: "16px"}}>{d.name} Cost in {c.name} (2026)</h1>
              <div style={{background: "white", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "20px", marginBottom: "24px"}}>
                <p style={{fontSize: "13px", color: "#6b7280", margin: "0 0 4px"}}>Estimated cost range</p>
                <p style={{fontSize: "32px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 4px"}}>{d.costRange}</p>
                <p style={{fontSize: "13px", color: "#6b7280", margin: 0}}>in {c.name}, {c.state} · 2026</p>
              </div>
              <p style={{fontSize: "16px", color: "#4b5563", lineHeight: "1.7", marginBottom: "24px"}}>{d.name} surgery in {c.name} costs {d.costRange}. The exact cost depends on hospital, surgeon experience, and anaesthesia type. MySurgery provides transparent pricing with no hidden charges.</p>
              <CityLeadForm
                procedure={d.name + " — " + c.name}
                city={c.name}
                sourcePage={"/treatment/" + slug + "/" + rawCity}
              />
            </div>
            <div style={{background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)"}}>
              <p style={{fontSize: "14px", fontWeight: 600, color: "#374151", marginBottom: "16px"}}>Cost breakdown</p>
              {[["Surgeon fee", "Included"], ["Anaesthesia", "Included"], ["OT charges", "Included"], ["Hospital stay", d.stayDuration], ["Pre-op tests", "Rs 3,000 to Rs 8,000"], ["Insurance", d.insuranceCovered ? "Covered" : "Not covered"]].map(([label, value]) => (
                <div key={label} style={{display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #f0f0f0"}}>
                  <span style={{fontSize: "14px", color: "#6b7280"}}>{label}</span>
                  <span style={{fontSize: "14px", fontWeight: 500, color: value === "Covered" ? "#16a34a" : "#111827"}}>{value}</span>
                </div>
              ))}
              <div style={{background: "#fef3c7", borderRadius: "8px", padding: "12px", marginTop: "12px"}}>
                <p style={{fontSize: "13px", color: "#92400e", margin: 0, fontWeight: 500}}>Total: {d.costRange} in {c.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth: "1100px", margin: "0 auto", padding: "48px 24px"}}>

        <section style={{marginBottom: "48px"}}>
          <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>What Affects {d.name} Cost in {c.name}?</h2>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px"}}>
            {["Hospital type (corporate vs private)", "Surgeon experience and qualification", "Type of procedure (" + d.treatments[0] + ")", "Anaesthesia type", "Pre-operative tests", "Insurance vs self-pay"].map(factor => (
              <div key={factor} style={{background: "#f9fafb", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e5e7eb", fontSize: "14px", color: "#374151"}}>
                <span style={{color: "#1d4ed8", marginRight: "8px"}}>●</span>{factor}
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: "48px"}}>
          <h2 style={{fontSize: "26px", fontWeight: 700, color: "#0f1f35", marginBottom: "20px"}}>{d.name} FAQs — {c.name}</h2>
          <div style={{border: "1px solid #e5e7eb", borderRadius: "10px", padding: "18px 20px", marginBottom: "10px"}}>
            <h3 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>How much does {d.name} cost in {c.name}?</h3>
            <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.7", margin: 0}}>{d.name} surgery in {c.name} costs {d.costRange}. MySurgery provides a transparent cost estimate before you commit.</p>
          </div>
          <div style={{border: "1px solid #e5e7eb", borderRadius: "10px", padding: "18px 20px", marginBottom: "10px"}}>
            <h3 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>Is {d.name} covered by insurance in {c.name}?</h3>
            <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.7", margin: 0}}>{d.insuranceCovered ? "Yes. " + d.name + " is covered by all major health insurance policies. MySurgery partner hospitals in " + c.name + " offer cashless treatment." : "This procedure is usually not covered by insurance. MySurgery provides EMI options and transparent pricing."}</p>
          </div>
          {d.faqs.map((faq, i) => {
            const question = faq.question.replace(/\bDelhi(?:-NCR)?\b/g, c.name)
            const answer = faq.answer.replace(/\bDelhi(?:-NCR)?\b/g, c.name)
            return (
              <div key={i} style={{border: "1px solid #e5e7eb", borderRadius: "10px", padding: "18px 20px", marginBottom: "10px"}}>
                <h3 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>{question}</h3>
                <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.7", margin: 0}}>{answer}</p>
              </div>
            )
          })}
        </section>

        <section style={{marginBottom: "48px"}}>
          <h2 style={{fontSize: "22px", fontWeight: 700, color: "#0f1f35", marginBottom: "16px"}}>{d.name} Cost in Other Cities</h2>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px"}}>
            {cities.filter(ct => d.cities.includes(ct.slug) && ct.slug !== citySlug).map(ct => (
              <a key={ct.slug} href={"/treatment/" + slug + "/cost-" + ct.slug} style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "16px", textAlign: "center", textDecoration: "none", display: "block"}}>
                <p style={{fontSize: "15px", fontWeight: 600, color: "#111827", margin: "0 0 4px"}}>{ct.name}</p>
                <p style={{fontSize: "13px", color: "#1d4ed8", margin: 0}}>{d.costRange}</p>
              </a>
            ))}
          </div>
        </section>

        <div style={{background: "#0f1f35", borderRadius: "16px", padding: "48px", textAlign: "center"}}>
          <h2 style={{fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "12px"}}>Get Exact Cost for {d.name} in {c.name}</h2>
          <p style={{color: "#93c5fd", marginBottom: "32px", fontSize: "16px"}}>Free consultation. Transparent pricing. {d.insuranceCovered ? "Insurance handled." : "EMI available."} Callback in 30 minutes.</p>
          <div style={{display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap"}}>
            <a href="/contact" style={{background: "#1d4ed8", color: "white", fontWeight: 600, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "15px"}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050" target="_blank" rel="noopener noreferrer" style={{background: "#22c55e", color: "white", fontWeight: 600, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "15px"}}>WhatsApp Us</a>
          </div>
        </div>
      {/* INLINE LEAD FORM with city pre-filled */}
        <div style={{background: "linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)", borderRadius: "20px", padding: "36px", marginBottom: "48px"}}>
          <h2 style={{fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "8px"}}>Get Exact {d.name} Cost in {c.name}</h2>
          <p style={{color: "#93c5fd", marginBottom: "24px", fontSize: "15px"}}>Free callback within 30 minutes. Transparent pricing. No hidden charges.</p>
          <div style={{maxWidth: "420px"}}>
            <CityLeadForm
              procedure={d.name + " — " + c.name}
              city={c.name}
              sourcePage={"/treatment/" + slug + "/" + rawCity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}