import { getTreatmentBySlug, getAllTreatmentSlugs } from "@/lib/treatments"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const slugs = await getAllTreatmentSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const treatment = await getTreatmentBySlug(params.slug)
  if (!treatment) return {}
  return {
    title: treatment.seoTitle,
    description: treatment.seoDesc,
  }
}

export default async function TreatmentPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const treatment = await getTreatmentBySlug(params.slug)
  if (!treatment) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.description,
    bodyLocation: treatment.bodyLocation,
    preparation: treatment.preparation,
    followup: treatment.followup,
    howPerformed: treatment.howPerformed,
  }

  return (
    <div style={{maxWidth: "896px", margin: "0 auto", padding: "48px 16px"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />

      <div style={{marginBottom: "24px", fontSize: "14px", color: "#6b7280"}}>
        <a href="/" style={{textDecoration: "none", color: "#6b7280"}}>Home</a>
        {" › "}
        <a href="/treatments" style={{textDecoration: "none", color: "#6b7280"}}>Treatments</a>
        {" › "}
        <span>{treatment.name}</span>
      </div>

      <div style={{background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "20px", marginBottom: "32px"}}>
        <p style={{color: "#1e3a8a", lineHeight: "1.7", margin: 0}}>{treatment.directAnswer}</p>
      </div>

      <h1 style={{fontSize: "30px", fontWeight: 700, color: "#111827", marginBottom: "16px"}}>{treatment.name}</h1>
      <p style={{color: "#4b5563", fontSize: "18px", marginBottom: "32px", lineHeight: "1.7"}}>{treatment.description}</p>

      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "40px"}}>
        <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", textAlign: "center"}}>
          <p style={{fontSize: "18px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 4px"}}>{treatment.costRange}</p>
          <p style={{fontSize: "13px", color: "#6b7280", margin: 0}}>Approx Cost</p>
        </div>
        <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", textAlign: "center"}}>
          <p style={{fontSize: "18px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 4px"}}>{treatment.duration}</p>
          <p style={{fontSize: "13px", color: "#6b7280", margin: 0}}>Duration</p>
        </div>
        <div style={{background: "white", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", textAlign: "center"}}>
          <p style={{fontSize: "18px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 4px"}}>{treatment.stayDuration}</p>
          <p style={{fontSize: "13px", color: "#6b7280", margin: 0}}>Hospital Stay</p>
        </div>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "40px"}}>
        <div style={{border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px"}}>
          <h2 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>Preparation</h2>
          <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: 0}}>{treatment.preparation}</p>
        </div>
        <div style={{border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px"}}>
          <h2 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>How It Is Done</h2>
          <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: 0}}>{treatment.howPerformed}</p>
        </div>
        <div style={{border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px"}}>
          <h2 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>Recovery</h2>
          <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: 0}}>{treatment.followup}</p>
        </div>
      </div>

      <h2 style={{fontSize: "24px", fontWeight: 700, color: "#111827", marginBottom: "24px"}}>Frequently Asked Questions</h2>
      <div style={{marginBottom: "40px"}}>
        {treatment.faqs.map((faq, i) => (
          <div key={i} style={{border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", marginBottom: "12px"}}>
            <h3 style={{fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "8px"}}>{faq.question}</h3>
            <p style={{fontSize: "14px", color: "#4b5563", lineHeight: "1.6", margin: 0}}>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div style={{background: "#1d4ed8", borderRadius: "12px", padding: "48px", textAlign: "center"}}>
        <h2 style={{fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "8px"}}>Get a Free Consultation</h2>
        <p style={{color: "#bfdbfe", marginBottom: "24px"}}>Talk to a specialist about {treatment.name}. Free, no commitment, callback in 30 minutes.</p>
        <a href="/contact" style={{display: "inline-block", background: "white", color: "#1d4ed8", fontWeight: 600, padding: "12px 32px", borderRadius: "8px", textDecoration: "none"}}>Book Free Consultation</a>
      </div>
    </div>
  )
}
