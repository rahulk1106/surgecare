import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laser Circumcision India: ₹15,000–45,000 · No Stitches · Same Day | MySurgery',
  description: 'Painless laser & ZSR circumcision from ₹15,000. No stitches, no general anaesthesia, same-day discharge. 20 min procedure. 20+ cities. Free confidential consultation — callback in 30 mins.',
  keywords: 'laser circumcision india, ZSR circumcision cost, painless circumcision, adult circumcision india, phimosis treatment, circumcision near me, laser circumcision delhi gurugram mumbai',
  alternates: { canonical: '/circumcision' },
}

export default function CircumcisionPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the cost of laser circumcision in India?', acceptedAnswer: { '@type': 'Answer', text: 'Laser circumcision in India costs Rs 15,000 to Rs 45,000 depending on city, hospital, and technique. ZSR circumcision costs Rs 18,000 to Rs 40,000.' } },
      { '@type': 'Question', name: 'Is laser circumcision painful?', acceptedAnswer: { '@type': 'Answer', text: 'No. Laser circumcision is performed under local anaesthesia. There is no pain during the procedure. Mild discomfort for 2-3 days after surgery is managed with oral painkillers.' } },
      { '@type': 'Question', name: 'Is the procedure confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. MySurgery maintains complete confidentiality for all circumcision consultations and procedures.' } },
    ],
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)', padding: '60px 24px 48px'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h1 style={{fontSize: '42px', fontWeight: 700, color: '#0f1f35', lineHeight: '1.2', marginBottom: '16px'}}>Laser & ZSR Circumcision in India</h1>
          <p style={{fontSize: '18px', color: '#4b5563', lineHeight: '1.7', marginBottom: '28px', maxWidth: '700px'}}>Painless, no-stitch circumcision by experienced urologists. Same-day discharge. Complete confidentiality. Available in 20+ cities across India.</p>
          <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', display: 'inline-block'}}>
            <p style={{color: '#1e3a8a', fontWeight: 500, margin: 0}}>Laser circumcision cost in India: <strong>Rs 15,000 – Rs 45,000</strong> · Same-day discharge · No stitches · 100% confidential</p>
          </div>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Confidential Consultation</a>
            <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+laser+circumcision' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
          <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
            {['No stitches', 'Same-day discharge', '100% confidential', 'Local anaesthesia'].map(t => (
              <span key={t} style={{fontSize: '13px', color: '#374151', display: 'flex', alignItems: 'center', gap: '5px'}}><span style={{color: '#22c55e', fontWeight: 700}}>✓</span>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px'}}>

        {/* QUICK FACTS */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '48px'}}>
          {[['Rs 15,000–45,000', 'Cost range'], ['20–30 min', 'Procedure time'], ['Same day', 'Discharge'], ['2–3 days', 'Return to work'], ['4–6 weeks', 'Full recovery'], ['Local', 'Anaesthesia']].map(([n, l]) => (
            <div key={l} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', textAlign: 'center'}}>
              <p style={{fontWeight: 700, color: '#1d4ed8', fontSize: '16px', margin: '0 0 4px'}}>{n}</p>
              <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>{l}</p>
            </div>
          ))}
        </div>

        {/* LASER VS ZSR */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '24px'}}>Laser vs ZSR vs Conventional — Which Is Best?</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
              <thead>
                <tr style={{background: '#0f1f35', color: 'white'}}>
                  {['Feature', 'Laser Circumcision', 'ZSR (Stapler)', 'Conventional Surgery'].map(h => (
                    <th key={h} style={{padding: '14px 16px', textAlign: 'left', fontWeight: 600}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pain', 'Minimal', 'Minimal', 'Moderate'],
                  ['Bleeding', 'None', 'Very little', 'Some'],
                  ['Stitches', 'No', 'Dissolving staples', 'Yes (dissolving)'],
                  ['Procedure time', '20–25 min', '10–15 min', '30–45 min'],
                  ['Recovery', '2–3 days', '2–3 days', '5–7 days'],
                  ['Cosmetic result', 'Excellent', 'Very good', 'Good'],
                  ['Cost', 'Rs 20,000–45,000', 'Rs 18,000–40,000', 'Rs 12,000–25,000'],
                  ['Recommendation', '⭐ Best overall', '⭐ Fastest', '✓ Budget option'],
                ].map((row, i) => (
                  <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f9fafb'}}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: j === 0 ? 600 : 400, color: j === 0 ? '#374151' : cell.includes('⭐') ? '#16a34a' : '#374151'}}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* WHEN IS CIRCUMCISION NEEDED */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>When Is Circumcision Recommended?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px'}}>
            {[
              { title: 'Phimosis', desc: 'Tight foreskin that cannot be retracted. Causes pain, difficulty urinating, and recurrent infections. Circumcision is the permanent cure.', icon: '⚕️' },
              { title: 'Recurrent Balanitis', desc: 'Repeated infection of the glans (head of penis). Circumcision eliminates the moist environment where bacteria multiply.', icon: '🦠' },
              { title: 'Paraphimosis', desc: 'Emergency — foreskin stuck behind the glans and cannot return to normal position. Requires immediate treatment.', icon: '🚨' },
              { title: 'BXO (Lichen Sclerosus)', desc: 'Scarring condition of the foreskin that causes progressive tightening. Circumcision is the definitive treatment.', icon: '🔬' },
              { title: 'Religious / Cultural', desc: 'Circumcision for religious practice (Islam, Judaism) or cultural reasons. Performed with full confidentiality.', icon: '🕌' },
              { title: 'Personal Preference', desc: 'Many adults choose circumcision for hygiene, aesthetics, or partner preference. All reasons are valid and respected.', icon: '✓' },
            ].map(item => (
              <div key={item.title} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px'}}>
                <span style={{fontSize: '28px'}}>{item.icon}</span>
                <h3 style={{fontSize: '15px', fontWeight: 700, color: '#111827', margin: '10px 0 8px'}}>{item.title}</h3>
                <p style={{fontSize: '13px', color: '#4b5563', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COST BY CITY */}
        <section style={{marginBottom: '48px', background: '#f9fafb', borderRadius: '16px', padding: '28px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Circumcision Cost by City</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px'}}>
            {[['Delhi', '20,000–40,000'], ['Gurugram', '20,000–45,000'], ['Noida', '18,000–38,000'], ['Mumbai', '22,000–45,000'], ['Bangalore', '20,000–42,000'], ['Kochi', '18,000–38,000'], ['Chennai', '18,000–40,000'], ['Pune', '18,000–38,000'], ['Ahmedabad', '15,000–35,000'], ['Lucknow', '15,000–32,000'], ['Indore', '14,000–30,000'], ['Patna', '12,000–28,000']].map(([city, cost]) => (
              <a key={city} href={'/treatment/circumcision/cost-' + city.toLowerCase()} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', textDecoration: 'none', display: 'block'}}>
                <p style={{fontWeight: 700, color: '#111827', margin: '0 0 4px', fontSize: '15px'}}>{city}</p>
                <p style={{fontSize: '14px', color: '#1d4ed8', fontWeight: 600, margin: 0}}>Rs {cost}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Frequently Asked Questions</h2>
          {[
            ['What is the cost of laser circumcision in India?', 'Laser circumcision in India costs Rs 15,000 to Rs 45,000 depending on city, hospital, and technique. ZSR circumcision costs Rs 18,000 to Rs 40,000. Conventional circumcision is Rs 12,000 to Rs 25,000. MySurgery provides transparent pricing before the procedure.'],
            ['Is laser circumcision painful?', 'No. The procedure is done under local anaesthesia. You feel no pain during the procedure. There is mild discomfort for 2–3 days after surgery which is easily managed with oral painkillers.'],
            ['Is adult circumcision safe?', 'Yes. Adult circumcision is a common and safe procedure performed under local anaesthesia. Complication rates are less than 2% at experienced centres. The key is choosing a qualified urologist.'],
            ['How long does recovery take?', 'Return to desk work in 2–3 days. Avoid strenuous exercise for 2 weeks. Sexual activity can resume after 4–6 weeks once fully healed.'],
            ['Is the procedure confidential?', 'Yes. MySurgery maintains complete confidentiality. No information is shared with anyone. You can also choose hospitals away from your home or workplace.'],
            ['What is phimosis and does circumcision cure it?', 'Phimosis is a condition where the foreskin is too tight to retract. Laser or ZSR circumcision permanently resolves phimosis. A less radical option is preputioplasty which widens the foreskin opening while preserving it.'],
            ['Is circumcision covered by insurance?', 'Yes, when medically indicated — for phimosis, recurrent balanitis, paraphimosis, or BXO. Elective circumcision is generally not covered. MySurgery helps check your policy.'],
          ].map(([q, a], i) => (
            <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px 20px', marginBottom: '10px'}}>
              <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
            </div>
          ))}
        </section>

        {/* CHECKER CTA */}
      <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', padding: '22px', margin: '0 0 32px'}}>
        <p style={{fontWeight: 700, color: '#1e3a8a', fontSize: '17px', margin: '0 0 6px'}}>Not sure if you need circumcision?</p>
        <p style={{fontSize: '14px', color: '#1e3a8a', margin: '0 0 14px'}}>Take our 5-question assessment to find out if circumcision is right for your condition — completely confidential.</p>
        <a href='/circumcision-checker' style={{display: 'inline-block', background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '11px 22px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'}}>Take Assessment — Confidential →</a>
      </div>

      {/* CTA */}
        <div style={{background: '#0f1f35', borderRadius: '16px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Book Confidential Circumcision Consultation</h2>
          <p style={{color: '#93c5fd', marginBottom: '32px', fontSize: '16px'}}>Free consultation · Experienced urologists · 20+ cities · Same-day appointments available</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+laser+circumcision' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}