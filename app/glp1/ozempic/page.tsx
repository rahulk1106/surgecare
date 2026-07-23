import type { Metadata } from 'next'
import Link from 'next/link'
import GLP1FAQ from '@/components/glp1/GLP1FAQ'

export const metadata: Metadata = {
  title: 'Ozempic in India 2026 — Price, Availability, Dosing & Side Effects',
  description: 'Complete guide to Ozempic (semaglutide) in India 2026. Current price after April 2026 cut, availability, dosing schedule, and how to get a prescription.',
  keywords: [
    'Ozempic price India 2026',
    'Ozempic India',
    'semaglutide injection India',
    'Ozempic cost per month India',
    'Ozempic 1mg price India',
    'buy Ozempic India',
    'Ozempic availability India',
    'semaglutide India 2026',
  ],
  alternates: { canonical: '/glp1/ozempic' },
}

const nav = [
  { label: 'Overview', href: '/glp1' },
  { label: 'Ozempic', href: '/glp1/ozempic' },
  { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' },
  { label: 'Generics', href: '/glp1/generic' },
  { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' },
  { label: 'Side Effects', href: '/glp1/side-effects' },
  { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

const doses = [
  { strength: '0.25mg', weeks: 'Weeks 1–4 (starter)', priceWeek: 708, priceMonth: 2832, purpose: 'Tolerance building — no therapeutic effect' },
  { strength: '0.5mg', weeks: 'Weeks 5–8', priceWeek: 1415, priceMonth: 5660, purpose: 'First therapeutic dose for diabetes' },
  { strength: '1mg', weeks: 'Week 9 onwards', priceWeek: 1415, priceMonth: 5660, purpose: 'Standard maintenance dose' },
  { strength: '2mg', weeks: 'If needed', priceWeek: 2000, priceMonth: 8000, purpose: 'Maximum dose for better glycaemic control' },
]

const sideEffects = [
  { name: 'Nausea', frequency: 'Very common (40–44%)', severity: 'mild', when: 'First 4–8 weeks, usually subsides' },
  { name: 'Vomiting', frequency: 'Common (15–24%)', severity: 'mild', when: 'First 4–8 weeks' },
  { name: 'Diarrhoea', frequency: 'Common (20–30%)', severity: 'mild', when: 'Variable, usually early' },
  { name: 'Constipation', frequency: 'Common (11–24%)', severity: 'mild', when: 'Can persist' },
  { name: 'Abdominal pain', frequency: 'Common (5–10%)', severity: 'mild', when: 'Usually early' },
  { name: 'Pancreatitis', frequency: 'Rare (<0.5%)', severity: 'serious', when: 'Any time — stop drug' },
  { name: 'Gallstones', frequency: 'Uncommon (1.5–2%)', severity: 'moderate', when: 'With rapid weight loss' },
  { name: 'Medullary thyroid cancer', frequency: 'Unknown — FDA black box', severity: 'serious', when: 'Contraindicated in MTC family history' },
]

export default function OzempicPage() {
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/ozempic' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/ozempic' ? '2px solid #38bdf8' : '2px solid transparent' }}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#93c5fd', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '12px' }}>Novo Nordisk · CDSCO Approved Dec 2025</div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Ozempic in India</h1>
              <p style={{ fontSize: '18px', color: '#93c5fd', marginBottom: '24px' }}>Semaglutide 0.5mg / 1mg / 2mg — Weekly injection for Type 2 diabetes and weight loss</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href='/contact' style={{ background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Consultation</Link>
                <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+Ozempic+in+India' target='_blank' rel='noopener noreferrer' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>WhatsApp Us</a>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', minWidth: '220px' }}>
              {[['Launched in India', 'December 2025'],['April 2026 price cut', '36% reduction'],['Starting price', '₹708/week (0.25mg)'],['Maintenance price', '₹1,415/week (0.5–1mg)'],['Form', 'Weekly prefilled pen'],['Approved for', 'Type 2 Diabetes + Weight Loss']].map(([l, v]) => (
                <div key={l} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '11px', color: '#93c5fd', fontWeight: 600 }}>{l}</div>
                  <div style={{ fontSize: '13px', color: 'white', fontWeight: 600 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

        {/* WHAT IS */}
        <section style={{ background: 'white', borderRadius: '16px', padding: '32px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>What is Ozempic?</h2>
          <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, marginBottom: '16px' }}>Ozempic (semaglutide) is a GLP-1 receptor agonist developed by Novo Nordisk. It mimics the naturally occurring GLP-1 hormone, which is released after eating. By activating GLP-1 receptors, Ozempic:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
            {['Stimulates insulin release when blood sugar is high', 'Suppresses glucagon (which raises blood sugar)', 'Slows gastric emptying — you feel full longer', 'Reduces appetite signals in the brain', 'Promotes weight loss of 10–15% of body weight'].map(p => (
              <div key={p} style={{ background: '#eff6ff', borderRadius: '8px', padding: '12px', fontSize: '13px', color: '#1e40af', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#2563eb', flexShrink: 0 }}>✓</span>{p}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '12px' }}>Ozempic was approved in India by CDSCO in September 2025 and officially launched by Novo Nordisk in December 2025. Novo Nordisk cut prices by 36% in April 2026 in response to Indian generic competition.</p>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>Novo Nordisk also sells Ozempic as <strong>Extensior</strong> through Abbott India, and Wegovy as <strong>Poviztra</strong> through Emcure, for wider pharmacy availability. The same molecule is available as a daily tablet called <strong>Rybelsus</strong> (₹3,000–5,000/month, Type 2 diabetes only) — note that the April 2026 price cut applies only to the injectable forms.</p>
        </section>

        {/* DOSING */}
        <section style={{ background: 'white', borderRadius: '16px', padding: '32px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Dosing Schedule & Cost in India (2026)</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Prices reflect April 2026 Novo Nordisk price reduction. Always start at 0.25mg and escalate slowly.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#eff6ff' }}>
                  {['Dose', 'When', 'Per Week', 'Per Month', 'Purpose'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#1e40af', fontSize: '12px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doses.map((d, i) => (
                  <tr key={d.strength} style={{ background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#1d4ed8' }}>{d.strength}</td>
                    <td style={{ padding: '12px 16px', color: '#374151' }}>{d.weeks}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#0f172a' }}>₹{d.priceWeek.toLocaleString()}</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>₹{d.priceMonth.toLocaleString()}</td>
                    <td style={{ padding: '12px 16px', color: '#64748b', fontSize: '13px' }}>{d.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '10px', padding: '14px 18px', marginTop: '16px', fontSize: '13px', color: '#713f12' }}>
            ⚠️ No health insurance in India covers Ozempic for obesity. For Type 2 diabetes, check if your policy covers injectable diabetes medications.
          </div>
        </section>

        {/* SIDE EFFECTS */}
        <section style={{ background: 'white', borderRadius: '16px', padding: '32px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Side Effects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sideEffects.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px', borderRadius: '10px', background: s.severity === 'serious' ? '#fef2f2' : s.severity === 'moderate' ? '#fffbeb' : '#f8fafc', border: `1px solid ${s.severity === 'serious' ? '#fecaca' : s.severity === 'moderate' ? '#fde68a' : '#e2e8f0'}` }}>
                <div style={{ minWidth: '120px' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>{s.name}</div>
                  <div style={{ fontSize: '11px', marginTop: '2px', fontWeight: 600, color: s.severity === 'serious' ? '#dc2626' : s.severity === 'moderate' ? '#d97706' : '#64748b' }}>{s.severity.toUpperCase()}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', color: '#374151' }}>{s.frequency}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{s.when}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO GET */}
        <section style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', borderRadius: '16px', padding: '32px', marginBottom: '24px', color: 'white' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>How to Get Ozempic in India</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {['Consult an endocrinologist (required — prescription only)', 'Get evaluated for eligibility (BMI, HbA1c, comorbidities)', 'Receive prescription for appropriate dose', 'Purchase from pharmacy — available at major chains', 'Follow up every 4 weeks in first 3 months'].map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '16px' }}>
                <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>{i + 1}</div>
                <div style={{ fontSize: '13px', lineHeight: 1.5 }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Consultation</Link>
            <a href='https://wa.me/918588967050' target='_blank' rel='noopener noreferrer' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>WhatsApp Us</a>
          </div>
        </section>

        {/* FAQ */}
        <GLP1FAQ faqs={[
          { q: 'What is the price of Ozempic in India after the April 2026 price cut?', a: 'After Novo Nordisk’s 36% price cut effective April 2026, Ozempic starts at ₹708/week (₹2,832/month) for the 0.25mg starter dose. The 0.5mg and 1mg maintenance doses cost around ₹1,415/week (₹5,660/month). Exact MRPs can vary slightly between pharmacies.' },
          { q: 'Is generic semaglutide cheaper than Ozempic?', a: 'Yes. CDSCO-approved generic semaglutide contains the identical molecule and starts from ₹325/week in vial form (Glenmark GLIPIQ, Natco Semanat) and ₹800–1,125/week in pen form — significantly cheaper than branded Ozempic even after the April 2026 cut.' },
          { q: 'Do I need a prescription for Ozempic in India?', a: 'Yes. Ozempic is a prescription-only medicine. Per Ministry of Health guidance issued in April 2026, GLP-1 drugs should be prescribed by qualified specialists such as endocrinologists. Buying without a prescription is illegal and unsafe.' },
          { q: 'Can Ozempic be used for weight loss in India?', a: 'Ozempic is approved in India for Type 2 diabetes and is used off-label for weight loss under medical supervision. Wegovy — the same molecule at a higher 2.4mg dose — is the version specifically approved for chronic weight management.' },
          { q: 'What is Rybelsus and how is it different from Ozempic?', a: 'Rybelsus is the daily oral tablet form of semaglutide, for people who prefer pills over injections. It costs roughly ₹3,000–5,000/month in India, is approved for Type 2 diabetes only, and produces less weight loss (5–10%) than the weekly injection. No generic oral semaglutide exists yet.' },
          { q: 'What is Extensior?', a: 'Extensior is a second brand of Ozempic (semaglutide) sold by Novo Nordisk through Abbott India to widen distribution. The molecule and dosing are the same as Ozempic.' },
        ]} />

        {/* COMPARE */}
        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[{href:'/glp1/wegovy', label:'Compare with Wegovy →'}, {href:'/glp1/mounjaro', label:'Compare with Mounjaro →'}, {href:'/glp1/generic', label:'Cheaper generic options →'}, {href:'/glp1/cost', label:'Full cost calculator →'}].map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'white', border: '1px solid #e2e8f0', color: '#1d4ed8', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
