import { getDiseaseBySlug, getAllDiseaseSlugs, cities } from '@/lib/diseases'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllDiseaseSlugs().map(slug => ({ disease: slug }))
}

export async function generateMetadata(props: { params: Promise<{ disease: string }> }): Promise<Metadata> {
  const { disease: slug } = await props.params
  const d = getDiseaseBySlug(slug)
  if (!d) return {}
  return {
    title: d.name + ' Cost Breakdown 2026 — OT, Doctor, Medicine, Lab Charges | MySurgery',
    description: 'Complete cost breakdown for ' + d.name + ' surgery in India 2026. OT charges, doctor fees, anaesthesia, consumables, lab tests, RMO charges, medicine costs explained.',
    alternates: { canonical: '/treatment/' + slug + '/cost-analysis' },
  }
}

export default async function CostAnalysisPage(props: { params: Promise<{ disease: string }> }) {
  const { disease: slug } = await props.params
  const d = getDiseaseBySlug(slug)
  if (!d) notFound()

  const min = d.costMin
  const max = d.costMax
  const mid = Math.round((min + max) / 2)

  // Cost breakdown percentages based on typical Indian hospital billing
  const breakdown = [
    { item: 'Surgeon Fee', percent: 25, description: 'Primary surgeon consultation and surgical charges. Varies by seniority and hospital.', min: Math.round(min * 0.22), max: Math.round(max * 0.28), color: '#1d4ed8', icon: '👨‍⚕️' },
    { item: 'OT Charges', percent: 20, description: 'Operation Theatre charges including OT time, OT staff, equipment sterilisation, and OT consumables.', min: Math.round(min * 0.17), max: Math.round(max * 0.23), color: '#7c3aed', icon: '🏥' },
    { item: 'Anaesthesia Charges', percent: 12, description: 'Anaesthesiologist fee and anaesthesia drugs. Varies by type — local, spinal, or general anaesthesia.', min: Math.round(min * 0.10), max: Math.round(max * 0.14), color: '#0891b2', icon: '💉' },
    { item: 'Hospital Room / Bed Charges', percent: 15, description: 'Room charges for day care or inpatient stay. General ward is cheapest, private room most expensive.', min: Math.round(min * 0.10), max: Math.round(max * 0.20), color: '#059669', icon: '🛏️' },
    { item: 'Consumables', percent: 10, description: 'Surgical consumables like gloves, drapes, sutures, staples, mesh (for hernia), trocars, energy devices, and disposable instruments.', min: Math.round(min * 0.08), max: Math.round(max * 0.15), color: '#d97706', icon: '🧴' },
    { item: 'Medicines', percent: 7, description: 'Pre-operative and post-operative medicines including antibiotics, painkillers, IV fluids, and prescribed medications.', min: Math.round(min * 0.05), max: Math.round(max * 0.09), color: '#dc2626', icon: '💊' },
    { item: 'Lab Investigations', percent: 5, description: 'Pre-operative blood tests (CBC, LFT, KFT, blood group), ECG, chest X-ray, and procedure-specific tests like ultrasound or CT scan.', min: Math.round(min * 0.04), max: Math.round(max * 0.08), color: '#7c3aed', icon: '🔬' },
    { item: 'RMO / Nursing Charges', percent: 4, description: 'Resident Medical Officer and nursing charges for post-operative care, monitoring, dressing changes, and discharge preparation.', min: Math.round(min * 0.03), max: Math.round(max * 0.06), color: '#0284c7', icon: '👩‍⚕️' },
    { item: 'Implant / Prosthesis', percent: 0, description: 'Applicable for procedures like hernia (mesh), knee replacement (implant), penile implant, or IOL for cataract. Biggest cost variable.', min: 0, max: 0, color: '#374151', icon: '🔩' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the total cost of ' + d.name + ' in India?', acceptedAnswer: { '@type': 'Answer', text: d.name + ' surgery costs ' + d.costRange + ' in India depending on the city, hospital type, and procedure complexity.' } },
      { '@type': 'Question', name: 'What are the main components of ' + d.name + ' cost?', acceptedAnswer: { '@type': 'Answer', text: 'The main cost components are: Surgeon fee (22-28%), OT charges (17-23%), Anaesthesia (10-14%), Hospital room (10-20%), Consumables (8-15%), Medicines (5-9%), Lab tests (4-8%), and Nursing charges (3-6%).' } },
      { '@type': 'Question', name: 'Does insurance cover ' + d.name + '?', acceptedAnswer: { '@type': 'Answer', text: d.insuranceCovered ? 'Yes. ' + d.name + ' is covered by all major health insurance policies in India. MySurgery helps with cashless claims at partner hospitals.' : 'This procedure is generally not covered by standard health insurance. MySurgery provides transparent pricing and EMI options.' } },
    ],
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)', padding: '60px 24px 48px'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px'}}>
            <a href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> &rsaquo; <a href={'/treatment/' + slug} style={{color: '#6b7280', textDecoration: 'none'}}>{d.name}</a> &rsaquo; <span style={{color: '#1d4ed8'}}>Cost Analysis</span>
          </div>
          <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>{d.name} — Complete Cost Breakdown (2026)</h1>
          <p style={{fontSize: '17px', color: '#4b5563', marginBottom: '24px'}}>Understand exactly what you pay for. Every cost component explained in detail.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px'}}>
            {[['Min Cost', 'Rs ' + min.toLocaleString('en-IN')], ['Max Cost', 'Rs ' + max.toLocaleString('en-IN')], ['Avg Cost', 'Rs ' + mid.toLocaleString('en-IN')], ['Insurance', d.insuranceCovered ? 'Covered' : 'Not covered']].map(([label, value]) => (
              <div key={label} style={{background: 'white', borderRadius: '12px', padding: '16px 20px'}}>
                <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 4px'}}>{label}</p>
                <p style={{fontSize: '20px', fontWeight: 700, color: '#1d4ed8', margin: 0}}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px'}}>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Detailed Cost Breakdown</h2>
          <p style={{color: '#6b7280', marginBottom: '24px', fontSize: '15px'}}>Based on average costs across NABH-accredited hospitals in Delhi, Mumbai, and Bangalore.</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            {breakdown.map(item => (
              <div key={item.item} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '8px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <span style={{fontSize: '24px'}}>{item.icon}</span>
                    <div>
                      <p style={{fontWeight: 700, color: '#111827', margin: '0 0 2px', fontSize: '16px'}}>{item.item}</p>
                      <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>{item.percent > 0 ? item.percent + '% of total cost' : 'Varies by procedure'}</p>
                    </div>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <p style={{fontWeight: 700, color: item.color, fontSize: '16px', margin: '0 0 2px'}}>
                      {item.min > 0 ? 'Rs ' + item.min.toLocaleString('en-IN') + ' – Rs ' + item.max.toLocaleString('en-IN') : 'Ask your hospital'}
                    </p>
                    <p style={{fontSize: '12px', color: '#9ca3af', margin: 0}}>estimated range</p>
                  </div>
                </div>
                <div style={{background: '#f3f4f6', borderRadius: '6px', height: '6px', marginBottom: '10px'}}>
                  <div style={{background: item.color, borderRadius: '6px', height: '6px', width: item.percent + '%'}}></div>
                </div>
                <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.6'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: '48px', background: '#fef3c7', borderRadius: '16px', padding: '28px'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#92400e', marginBottom: '16px'}}>What Makes Costs Vary?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px'}}>
            {[
              ['Hospital Type', 'Corporate hospitals charge 30-50% more than standalone nursing homes. NABH-accredited hospitals ensure quality and safety.'],
              ['City', 'Mumbai and Delhi cost 20-30% more than Tier-2 cities like Indore, Patna, or Ranchi for the same procedure.'],
              ['Surgeon Seniority', 'Senior consultants and directors charge higher fees. However, their experience often means faster recovery.'],
              ['Anaesthesia Type', 'Local anaesthesia is cheapest. Spinal anaesthesia costs more. General anaesthesia is most expensive.'],
              ['Implant Brand', 'For procedures requiring implants — Indian brands cost 40-60% less than imported brands with similar outcomes.'],
              ['Insurance vs Cash', 'Insurance patients pay negotiated rates. Cash patients can negotiate discounts of 10-20% at most hospitals.'],
            ].map(([title, desc]) => (
              <div key={title} style={{background: 'white', borderRadius: '10px', padding: '16px'}}>
                <p style={{fontWeight: 600, color: '#92400e', fontSize: '14px', margin: '0 0 6px'}}>{title}</p>
                <p style={{fontSize: '13px', color: '#374151', margin: 0, lineHeight: '1.6'}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>Cost by City</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px'}}>
            {cities.filter(c => d.cities.includes(c.slug)).map(city => (
              <a key={city.slug} href={'/treatment/' + slug + '/cost-' + city.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px', textDecoration: 'none', display: 'block'}}>
                <p style={{fontWeight: 700, color: '#111827', margin: '0 0 4px'}}>{city.name}</p>
                <p style={{fontSize: '14px', color: '#1d4ed8', fontWeight: 600, margin: '0 0 4px'}}>{d.costRange}</p>
                <p style={{fontSize: '12px', color: '#1d4ed8', margin: 0}}>View detailed cost →</p>
              </a>
            ))}
          </div>
        </section>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Frequently Asked Questions</h2>
          {[
            ['What is the total cost of ' + d.name + ' in India?', d.name + ' surgery costs ' + d.costRange + ' in India. The exact cost depends on city, hospital type, surgeon seniority, and whether insurance is used.'],
            ['What are the main components of ' + d.name + ' surgery cost?', 'The main cost components are surgeon fee (22-28%), OT charges (17-23%), anaesthesia (10-14%), hospital room (10-20%), consumables (8-15%), medicines (5-9%), lab tests (4-8%), and nursing charges (3-6%).'],
            ['Does insurance cover ' + d.name + '?', d.insuranceCovered ? 'Yes. ' + d.name + ' is covered by all major health insurance policies in India including Star Health, HDFC Ergo, Bajaj Allianz, and ICICI Lombard. MySurgery helps with cashless claims.' : 'This procedure is generally not covered by standard health insurance. MySurgery provides transparent pricing and EMI options.'],
            ['How can I reduce the cost of ' + d.name + ' surgery?', 'Choose NABH hospitals in Tier-2 cities, use health insurance for cashless treatment, choose Indian implant brands where applicable, and book through MySurgery for negotiated rates.'],
            ['Can I pay for ' + d.name + ' surgery in EMI?', 'Yes. Many hospitals offer EMI options through credit cards and healthcare finance companies like Bajaj Finserv, CareEdge, and Arogya Finance. MySurgery helps arrange EMI for patients without insurance.'],
          ].map(([q, a], i) => (
            <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px 20px', marginBottom: '10px'}}>
              <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
            </div>
          ))}
        </section>

        <div style={{background: '#0f1f35', borderRadius: '16px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Get an Exact Cost Estimate for {d.name}</h2>
          <p style={{color: '#93c5fd', marginBottom: '28px', fontSize: '15px'}}>Free consultation. Transparent pricing. Insurance handled. No surprises.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Get Free Cost Estimate</a>
            <a href='https://wa.me/918588967050' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}