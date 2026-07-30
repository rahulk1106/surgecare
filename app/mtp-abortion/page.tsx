import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MTP Abortion in India from ₹3,000 · Same Day · Confidential | MySurgery',
  description: 'Safe & legal MTP in India costs ₹3,000–₹25,000. Medical abortion pills up to 9 weeks. D&C/S&E up to 20 weeks. Female doctors. No family permission needed. Free confidential consultation.',
  keywords: 'mtp abortion india, safe abortion india, medical termination pregnancy, abortion pills india, dnc surgery, safe abortion clinic delhi mumbai bangalore, mtp cost india 2026',
  alternates: { canonical: '/mtp-abortion' },
  openGraph: { title: 'Safe & Legal MTP Abortion in India | MySurgery', description: 'Confidential MTP services by registered gynaecologists across India. Free consultation.', type: 'website' },
}

export default function MTPPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is abortion legal in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Abortion is completely legal in India under the MTP Act 1971, amended in 2021. A woman can terminate a pregnancy up to 20 weeks with one registered doctor approval. You do not need permission from your husband or family.' } },
      { '@type': 'Question', name: 'What is the cost of abortion in India?', acceptedAnswer: { '@type': 'Answer', text: 'Medical abortion pills cost Rs 3,000 to Rs 8,000. Surgical abortion (S&E or D&C) costs Rs 8,000 to Rs 25,000 depending on gestational age, city, and hospital.' } },
      { '@type': 'Question', name: 'Is the procedure confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. MySurgery maintains absolute confidentiality. Your information is never shared with anyone. All procedures are at registered hospitals by qualified gynaecologists.' } },
      { '@type': 'Question', name: 'Do I need husband permission for abortion in India?', acceptedAnswer: { '@type': 'Answer', text: 'No. Under MTP Act India 2021, a woman does not need consent from her husband or family. Only your own informed consent is required.' } },
    ],
  }

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Medical Termination of Pregnancy (MTP)',
    description: 'Safe and legal termination of pregnancy up to 20 weeks by registered gynaecologists in India',
    procedureType: 'SurgicalProcedure',
    legalStatus: 'Legal in India under MTP Act 1971 amended 2021',
    recognizingAuthority: { '@type': 'Organization', name: 'Ministry of Health and Family Welfare, Government of India' },
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #fdf2f8 0%, #f0f7ff 100%)', padding: '60px 24px 48px', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '14px 20px', marginBottom: '24px', display: 'inline-block'}}>
            <p style={{color: '#16a34a', fontWeight: 600, margin: 0, fontSize: '14px'}}>✓ Legal in India under MTP Act 2021 &nbsp;·&nbsp; ✓ No husband permission required &nbsp;·&nbsp; ✓ 100% Confidential</p>
          </div>
          <h1 style={{fontSize: '42px', fontWeight: 700, color: '#0f1f35', lineHeight: '1.2', marginBottom: '16px'}}>Safe & Legal Abortion in India</h1>
          <p style={{fontSize: '18px', color: '#4b5563', lineHeight: '1.7', marginBottom: '28px', maxWidth: '680px'}}>MySurgery connects you with registered female gynaecologists for confidential MTP across 20+ cities. Medical abortion pills up to 9 weeks. Surgical termination up to 20 weeks.</p>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Speak to a Female Doctor — Free</a>
            <a href='https://wa.me/918588967050?text=Hi+I+need+confidential+MTP+consultation' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Confidentially</a>
          </div>
          <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
            {['Free confidential consultation', 'Female gynaecologists available', 'No family permission needed', 'Same-day procedures available'].map(t => (
              <span key={t} style={{fontSize: '13px', color: '#374151', display: 'flex', alignItems: 'center', gap: '5px'}}><span style={{color: '#22c55e', fontWeight: 700}}>✓</span>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px'}}>

        {/* LEGAL BOX */}
        <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', padding: '24px', marginBottom: '48px'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, color: '#1e3a8a', marginBottom: '12px'}}>Your Legal Rights Under MTP Act India 2021</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px'}}>
            {[
              ['Up to 20 weeks', 'Any woman can terminate with one doctor approval. No reason needed.'],
              ['Up to 24 weeks', 'Survivors of assault, minors, women with disabilities, foetal abnormalities.'],
              ['No consent needed', 'You do not need husband, partner, or family permission. Only your consent matters.'],
              ['Registered doctors', 'Procedure must be performed by a registered medical practitioner at an approved facility.'],
            ].map(([title, desc]) => (
              <div key={title} style={{background: 'white', borderRadius: '8px', padding: '14px'}}>
                <p style={{fontWeight: 700, color: '#1d4ed8', fontSize: '14px', margin: '0 0 6px'}}>{title}</p>
                <p style={{fontSize: '13px', color: '#374151', margin: 0, lineHeight: '1.6'}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OPTIONS */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Which Method Is Right for You?</h2>
          <p style={{color: '#6b7280', marginBottom: '24px', fontSize: '15px'}}>The right method depends on how many weeks pregnant you are. Your gynaecologist will confirm after an ultrasound.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'}}>
            {[
              { title: 'Medical Abortion (Pills)', weeks: 'Up to 9 weeks', icon: '💊', color: '#eff6ff', border: '#bfdbfe', steps: ['Take mifepristone tablet (Day 1)', 'Take misoprostol tablets (Day 2-3)', 'Bleeding and cramping begins', 'Follow-up ultrasound at 2 weeks'], pros: ['Non-invasive — no surgery', 'Can be done at home after consultation', 'Success rate 95%+ up to 7 weeks', 'Private and discreet'], cost: 'Rs 3,000 – Rs 8,000' },
              { title: 'Suction & Evacuation (S&E)', weeks: 'Up to 12 weeks', icon: '🏥', color: '#f0fdf4', border: '#86efac', steps: ['Brief ultrasound to confirm gestation', 'Local anaesthesia administered', 'Gentle suction empties uterus', 'Procedure complete in 10-15 minutes'], pros: ['Quick and highly effective (99%+)', 'Minimal pain with anaesthesia', 'Same-day discharge', 'Immediate confirmation of completion'], cost: 'Rs 8,000 – Rs 18,000' },
              { title: 'D&C (Dilation & Curettage)', weeks: 'Up to 20 weeks', icon: '⚕️', color: '#fef3c7', border: '#fcd34d', steps: ['Pre-operative tests and consent', 'Cervix dilated under anaesthesia', 'Uterine contents removed with curette', 'Recovery room monitoring 1-2 hours'], pros: ['Available up to 20 weeks', 'Complete and effective', 'Managed at registered hospitals', 'Post-procedure care included'], cost: 'Rs 12,000 – Rs 25,000' },
            ].map(option => (
              <div key={option.title} style={{background: option.color, border: '1px solid ' + option.border, borderRadius: '16px', padding: '24px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px'}}>
                  <div>
                    <span style={{fontSize: '28px'}}>{option.icon}</span>
                    <h3 style={{fontSize: '18px', fontWeight: 700, color: '#111827', margin: '8px 0 4px'}}>{option.title}</h3>
                    <span style={{fontSize: '12px', background: '#1d4ed8', color: 'white', padding: '3px 8px', borderRadius: '4px', fontWeight: 500}}>{option.weeks}</span>
                  </div>
                </div>
                <div style={{marginBottom: '14px'}}>
                  <p style={{fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px'}}>What happens:</p>
                  {option.steps.map((step, i) => (
                    <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px'}}>
                      <span style={{fontSize: '11px', background: '#1d4ed8', color: 'white', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px'}}>{i+1}</span>
                      <span style={{fontSize: '13px', color: '#374151', lineHeight: '1.5'}}>{step}</span>
                    </div>
                  ))}
                </div>
                <div style={{borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '12px'}}>
                  <p style={{fontSize: '15px', fontWeight: 700, color: '#1d4ed8', margin: '0 0 4px'}}>{option.cost}</p>
                  <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>approximate cost across India</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONFIDENTIALITY SECTION */}
        <section style={{marginBottom: '48px', background: '#0f1f35', borderRadius: '16px', padding: '36px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '8px'}}>Your Privacy is Sacred to Us</h2>
          <p style={{color: '#93c5fd', marginBottom: '24px', fontSize: '15px'}}>We understand the sensitivity of this decision. Here is how we protect your privacy at every step.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px'}}>
            {[
              ['🔒 Zero Data Sharing', 'Your name, phone, and medical details are never shared with anyone — not your family, employer, or insurance company.'],
              ['👩‍⚕️ Female Doctors', 'We always connect you with a female gynaecologist if you prefer. Just mention this when you call or WhatsApp.'],
              ['🏥 Discreet Hospitals', 'You can choose hospitals away from your home or workplace. We will arrange everything.'],
              ['📞 Confidential Calls', 'All calls to MySurgery are strictly confidential. We never call back on numbers you have not approved.'],
            ].map(([title, desc]) => (
              <div key={title} style={{background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px'}}>
                <p style={{fontWeight: 600, color: 'white', fontSize: '14px', margin: '0 0 8px'}}>{title}</p>
                <p style={{fontSize: '13px', color: '#93c5fd', margin: 0, lineHeight: '1.6'}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COST BY CITY */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>MTP Cost Across India</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
              <thead>
                <tr style={{background: '#1d4ed8', color: 'white'}}>
                  {['City', 'Medical Abortion (Pills)', 'Surgical S&E', 'D&C'].map(h => (
                    <th key={h} style={{padding: '12px 16px', textAlign: 'left', fontWeight: 600}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Delhi / Gurugram / Noida', 'Rs 3,000 – Rs 8,000', 'Rs 8,000 – Rs 18,000', 'Rs 12,000 – Rs 22,000'],
                  ['Mumbai / Pune', 'Rs 4,000 – Rs 10,000', 'Rs 10,000 – Rs 20,000', 'Rs 14,000 – Rs 25,000'],
                  ['Bangalore / Chennai', 'Rs 3,500 – Rs 9,000', 'Rs 9,000 – Rs 18,000', 'Rs 12,000 – Rs 22,000'],
                  ['Kochi / Trivandrum', 'Rs 3,000 – Rs 8,000', 'Rs 8,000 – Rs 16,000', 'Rs 11,000 – Rs 20,000'],
                  ['Lucknow / Indore / Patna', 'Rs 2,500 – Rs 6,000', 'Rs 6,000 – Rs 14,000', 'Rs 9,000 – Rs 18,000'],
                  ['Vizag / Vijayawada', 'Rs 2,500 – Rs 6,000', 'Rs 6,000 – Rs 13,000', 'Rs 9,000 – Rs 17,000'],
                ].map((row, i) => (
                  <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f9fafb'}}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding: '12px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: j === 0 ? 600 : 400, color: j === 0 ? '#111827' : '#374151'}}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Frequently Asked Questions</h2>
          {[
            ['Is abortion legal in India?', 'Yes. Abortion is completely legal in India under the MTP Act 1971, amended in 2021. A woman can terminate a pregnancy up to 20 weeks with one registered doctor approval. You do not need permission from your husband or family. It is entirely your right.'],
            ['Do I need my husband or family permission?', 'No. Under the MTP Act India 2021, only your own informed consent is required. Your husband, partner, or family have no legal say in this decision.'],
            ['Is it safe?', 'Yes. Abortion performed by a qualified gynaecologist at a registered facility is one of the safest medical procedures in the world. Serious complications occur in less than 1% of cases. Always choose a registered gynaecologist — avoid unregistered providers.'],
            ['Will anyone find out?', 'No. MySurgery and our partner hospitals maintain absolute confidentiality. No information is shared with your family, employer, insurance company, or anyone else.'],
            ['What is the maximum weeks for abortion in India?', 'Up to 20 weeks for any woman with one doctor approval. Up to 24 weeks for survivors of assault, minors, women with disabilities, change in marital status, and foetal abnormalities. Beyond 24 weeks only for severe foetal abnormalities with Medical Board approval.'],
            ['Will it affect my future fertility?', 'No. A properly performed abortion by a qualified doctor does not affect your fertility. You can conceive again when you choose to. Fertility returns as soon as your menstrual cycle resumes.'],
            ['Can I get abortion pills online in India?', 'No. Taking abortion pills without medical supervision is dangerous and illegal. Pills should only be taken after an ultrasound confirms gestational age and rules out ectopic pregnancy. MySurgery connects you with registered doctors who prescribe and supervise medical abortion safely.'],
            ['How soon can I get an appointment?', 'MySurgery offers same-day or next-day appointments in all major cities. Call 8588967050 or WhatsApp us for the fastest response.'],
          ].map(([q, a], i) => (
            <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px 20px', marginBottom: '10px'}}>
              <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <div style={{background: 'linear-gradient(135deg, #1d4ed8 0%, #0f1f35 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>You Are Not Alone</h2>
          <p style={{color: '#93c5fd', marginBottom: '32px', fontSize: '16px', maxWidth: '500px', margin: '0 auto 32px'}}>Speak to a female doctor today. Free, confidential, and non-judgmental. We are here to help you make the right decision for you.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '15px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Speak to a Female Doctor — Free</a>
            <a href='https://wa.me/918588967050?text=Hi+I+need+confidential+MTP+consultation' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '15px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Confidentially</a>
          </div>
          <p style={{color: '#64748b', fontSize: '13px', marginTop: '20px'}}>Available 9am – 9pm · All calls confidential · Female doctors available</p>
        </div>
      </div>

      {/* CITY LINKS — helps Google index all MTP city pages */}
      <div style={{maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px'}}>
        <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px', textAlign: 'center'}}>MTP / Abortion Cost by City</h2>
        <p style={{fontSize: '15px', color: '#6b7280', textAlign: 'center', marginBottom: '24px'}}>Find MTP cost, doctors, and hospitals in your city</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '32px'}}>
          {[
            {city: 'Delhi', slug: 'delhi', cost: 'Rs 3,500 – Rs 18,000'},
            {city: 'Gurugram', slug: 'gurugram', cost: 'Rs 4,000 – Rs 20,000'},
            {city: 'Noida', slug: 'noida', cost: 'Rs 3,500 – Rs 18,000'},
            {city: 'Mumbai', slug: 'mumbai', cost: 'Rs 5,000 – Rs 22,000'},
            {city: 'Bangalore', slug: 'bangalore', cost: 'Rs 4,500 – Rs 20,000'},
            {city: 'Chennai', slug: 'chennai', cost: 'Rs 4,000 – Rs 18,000'},
            {city: 'Kochi', slug: 'kochi', cost: 'Rs 3,500 – Rs 16,000'},
            {city: 'Pune', slug: 'pune', cost: 'Rs 4,000 – Rs 18,000'},
            {city: 'Hyderabad', slug: 'hyderabad', cost: 'Rs 4,000 – Rs 18,000'},
            {city: 'Lucknow', slug: 'lucknow', cost: 'Rs 3,000 – Rs 15,000'},
            {city: 'Ahmedabad', slug: 'ahmedabad', cost: 'Rs 3,500 – Rs 16,000'},
            {city: 'Indore', slug: 'indore', cost: 'Rs 3,000 – Rs 14,000'},
            {city: 'Patna', slug: 'patna', cost: 'Rs 2,500 – Rs 12,000'},
            {city: 'Ranchi', slug: 'ranchi', cost: 'Rs 2,500 – Rs 12,000'},
            {city: 'Bhubaneswar', slug: 'bhubaneswar', cost: 'Rs 3,000 – Rs 14,000'},
            {city: 'Raipur', slug: 'raipur', cost: 'Rs 2,500 – Rs 12,000'},
            {city: 'Vizag', slug: 'vizag', cost: 'Rs 3,000 – Rs 14,000'},
            {city: 'Vijayawada', slug: 'vijayawada', cost: 'Rs 3,000 – Rs 14,000'},
            {city: 'Coimbatore', slug: 'coimbatore', cost: 'Rs 3,000 – Rs 14,000'},
            {city: 'Madurai', slug: 'madurai', cost: 'Rs 2,500 – Rs 12,000'},
            {city: 'Trivandrum', slug: 'trivandrum', cost: 'Rs 3,000 – Rs 15,000'},
          ].map(c => (
            <a key={c.slug} href={'/treatment/mtp-abortion/' + c.slug}
              style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '14px 16px', textDecoration: 'none', display: 'block'}}>
              <p style={{fontWeight: 600, color: '#111827', margin: '0 0 4px', fontSize: '14px'}}>{c.city}</p>
              <p style={{fontSize: '12px', color: '#1d4ed8', margin: 0}}>{c.cost}</p>
            </a>
          ))}
        </div>

        {/* Related blog posts */}
        <h3 style={{fontSize: '20px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>MTP / Abortion Guides</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px'}}>
          {[
            {title: 'MTP Act India 2021 — Your Legal Rights', slug: 'mtp-act-india-2021-womens-rights'},
            {title: 'Abortion Without Husband Permission — Is It Legal?', slug: 'abortion-without-husband-permission-india'},
            {title: 'Medical Abortion Pills India 2026', slug: 'medical-abortion-pills-india-2026'},
            {title: 'MTP First vs Second Trimester — Difference', slug: 'mtp-first-trimester-vs-second-trimester'},
            {title: 'MTP Recovery — What to Expect', slug: 'mtp-recovery-what-to-expect'},
            {title: 'Abortion After Rape — Legal Rights India', slug: 'abortion-after-rape-india-legal-rights'},
            {title: 'MTP for Minors in India', slug: 'mtp-abortion-for-minors-india'},
            {title: 'Is MTP Covered by Insurance?', slug: 'mtp-insurance-coverage-india-2026'},
            {title: 'Fertility After Abortion', slug: 'mtp-fertility-future-pregnancy-after-abortion'},
          ].map(post => (
            <a key={post.slug} href={'/blog/' + post.slug}
              style={{background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', textDecoration: 'none', display: 'block'}}>
              <p style={{fontSize: '14px', fontWeight: 500, color: '#1d4ed8', margin: 0, lineHeight: '1.5'}}>{post.title} →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}