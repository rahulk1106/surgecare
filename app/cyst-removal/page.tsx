import type { Metadata } from 'next'
import BlogCTA from '@/components/forms/BlogCTA'

export const metadata: Metadata = {
  title: 'Cyst Removal Surgery India 2026 — Sebaceous, Pilonidal & Ovarian Cyst Cost | MySurgery',
  description: 'Cyst removal surgery in India costs Rs 10,000 to Rs 80,000. Sebaceous cyst, pilonidal sinus cyst, ganglion cyst removal. Local anaesthesia, same-day discharge. Free consultation.',
  alternates: { canonical: '/cyst-removal' },
  keywords: ['cyst removal surgery India', 'sebaceous cyst removal cost', 'pilonidal cyst surgery India', 'ganglion cyst removal', 'cyst surgery Delhi'],
}

const cystTypes = [
  { name: 'Sebaceous Cyst', icon: '🔵', where: 'Skin anywhere — face, neck, scalp, back, scrotum', feel: 'Soft, smooth, dome-shaped lump under skin. May have a visible central punctum (pore).', cause: 'Blocked sebaceous gland or hair follicle. Common in men aged 20-50.', treatment: 'Surgical excision under local anaesthesia. Must remove entire sac to prevent recurrence.', cost: 'Rs 10,000 – Rs 35,000', urgent: false },
  { name: 'Pilonidal Sinus Cyst', icon: '🔴', where: 'Tailbone area (top of buttock crease)', feel: 'Painful swelling near the tailbone. May have a small opening with hair/discharge.', cause: 'Ingrown hair in the skin near tailbone. Very common in young men with dense body hair.', treatment: 'Surgical excision. Wide excision or pit picking technique. General anaesthesia usually required.', cost: 'Rs 35,000 – Rs 90,000', urgent: true },
  { name: 'Ganglion Cyst', icon: '🟡', where: 'Wrist (most common), hand, foot, ankle', feel: 'Firm, round cyst near a joint or tendon. Size fluctuates. May be painful under pressure.', cause: 'Fluid leaks from a joint or tendon sheath. More common in young adults.', treatment: 'Aspiration (drainage) or surgical excision. Surgery preferred for recurrence prevention.', cost: 'Rs 15,000 – Rs 40,000', urgent: false },
  { name: 'Epidermoid Cyst', icon: '🟢', where: 'Face, trunk, neck, genitals', feel: 'Slow-growing, firm lump under skin. Cheesy white material if squeezed (do not squeeze!).', cause: 'Skin cells trapped under skin surface. Very common benign cysts.', treatment: 'Surgical excision under local anaesthesia. Best removed when not infected.', cost: 'Rs 10,000 – Rs 30,000', urgent: false },
  { name: 'Cystic Acne / Dermal Cyst', icon: '🟠', where: 'Face, jaw, chin area', feel: 'Deep painful lump under skin. Does not come to a head easily.', cause: 'Severe acne with infected sebaceous glands deep in skin.', treatment: 'Dermatological treatment first. Surgical drainage or excision for persistent cysts.', cost: 'Rs 5,000 – Rs 25,000', urgent: false },
  { name: 'Ovarian Cyst (Female)', icon: '🔵', where: 'Ovary (women only)', feel: 'May cause pelvic pain, bloating, or irregular periods. Often found on ultrasound.', cause: 'Functional cysts (hormonal), endometriosis, PCOS, or benign ovarian growths.', treatment: 'Laparoscopic cystectomy. Small functional cysts may resolve on their own.', cost: 'Rs 45,000 – Rs 1,20,000', urgent: false },
]

export default function CystRemovalPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1a3a5c 100%)', padding: '56px 24px 48px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#93c5fd', marginBottom: '12px'}}>
            <a href="/" style={{color: '#93c5fd', textDecoration: 'none'}}>Home</a> {' › '} <span>Cyst Removal</span>
          </div>
          <h1 style={{fontSize: '40px', fontWeight: 700, color: 'white', margin: '8px 0 16px', lineHeight: '1.2'}}>Cyst Removal Surgery India 2026</h1>
          <p style={{color: '#93c5fd', fontSize: '17px', lineHeight: '1.65', marginBottom: '28px', maxWidth: '680px'}}>Sebaceous cyst, pilonidal sinus, ganglion cyst, epidermoid cyst — all types removed safely. Local anaesthesia. Same-day discharge.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '14px', marginBottom: '28px', maxWidth: '600px'}}>
            {[['Rs 10K–90K', 'Cost Range'], ['20–60 min', 'Procedure Time'], ['Same Day', 'Discharge'], ['1–3 Days', 'Back to Work'], ['Local/GA', 'Anaesthesia']].map(([v, l]) => (
              <div key={l} style={{textAlign: 'center'}}>
                <p style={{fontSize: '18px', fontWeight: 700, color: 'white', margin: '0 0 2px'}}>{v}</p>
                <p style={{fontSize: '12px', color: '#93c5fd', margin: 0}}>{l}</p>
              </div>
            ))}
          </div>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <a href="/contact" style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+cyst+removal+consultation" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 80px'}}>

        <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', padding: '20px 24px', marginBottom: '40px'}}>
          <p style={{fontWeight: 600, color: '#1e3a8a', margin: '0 0 8px', fontSize: '16px'}}>Not sure what type of cyst you have?</p>
          <p style={{fontSize: '14px', color: '#374151', margin: '0 0 12px'}}>Our surgeons evaluate your cyst — its location, size, consistency, and history — and recommend the safest removal technique. Free consultation with callback in 30 minutes.</p>
          <a href="/contact" style={{display: 'inline-block', background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'}}>Book Free Evaluation →</a>
        </div>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px', textAlign: 'center'}}>Types of Cysts We Remove</h2>
          <p style={{fontSize: '15px', color: '#6b7280', textAlign: 'center', marginBottom: '28px'}}>Click on your cyst type to understand treatment and cost</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {cystTypes.map((c, i) => (
              <div key={c.name} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '22px', borderLeft: c.urgent ? '4px solid #dc2626' : '4px solid #1d4ed8'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px'}}>
                  <div>
                    <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px'}}>
                      <span style={{fontSize: '24px'}}>{c.icon}</span>
                      <div>
                        <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', margin: 0}}>{c.name}</h3>
                        {c.urgent && <span style={{fontSize: '11px', background: '#fef2f2', color: '#dc2626', padding: '2px 6px', borderRadius: '4px', fontWeight: 600}}>Needs prompt treatment</span>}
                      </div>
                    </div>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}><strong style={{color: '#374151'}}>Location:</strong> {c.where}</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}><strong style={{color: '#374151'}}>How it feels:</strong> {c.feel}</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}><strong style={{color: '#374151'}}>Cause:</strong> {c.cause}</p>
                  </div>
                  <div>
                    <p style={{fontSize: '13px', color: '#374151', margin: '0 0 8px'}}><strong>Treatment:</strong> {c.treatment}</p>
                    <div style={{display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap'}}>
                      <span style={{fontSize: '14px', fontWeight: 700, color: '#1d4ed8'}}>{c.cost}</span>
                      <a href={'/contact'} style={{fontSize: '12px', background: '#1d4ed8', color: 'white', padding: '5px 12px', borderRadius: '6px', textDecoration: 'none', fontWeight: 500}}>Get Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BlogCTA procedure="Cyst Removal" />

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Frequently Asked Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {[
              ['Is it safe to leave a cyst untreated?', 'Small, asymptomatic cysts can be monitored without treatment. However cysts tend to grow over time and can become infected (forming a painful abscess). Once infected, removal becomes more complex and expensive. Removing a cyst while it is uninfected gives the best cosmetic result and lowest recurrence.'],
              ['How do I know if my cyst is infected?', 'Signs of infected cyst: increasing pain, redness and warmth around the cyst, swelling, pus or discharge, fever. An infected cyst should be seen urgently — it may need drainage before definitive removal.'],
              ['Can a cyst be drained instead of removed?', 'Draining a cyst removes the contents but leaves the sac behind. The cyst almost always refills. Surgical excision removing the entire cyst wall is the only permanent solution.'],
              ['How long does cyst removal take?', 'Simple sebaceous or epidermoid cyst removal: 20-30 minutes under local anaesthesia. Pilonidal sinus: 45-60 minutes usually under spinal or general anaesthesia. Ganglion cyst: 30-45 minutes.'],
              ['Will the cyst come back after removal?', 'If the entire cyst capsule is removed, recurrence is rare (under 5%). Incomplete removal has higher recurrence. Pilonidal sinus has the highest recurrence rate (10-20%) and may require wide excision.'],
            ].map(([q, a], i) => (
              <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px 20px'}}>
                <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.75', margin: 0}}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '10px'}}>Get Your Cyst Removed Safely</h2>
          <p style={{color: '#93c5fd', fontSize: '16px', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px'}}>Free consultation. Same-day procedure for most cysts. Expert surgeons across India.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/contact" style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+cyst+removal+surgery+consultation" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
