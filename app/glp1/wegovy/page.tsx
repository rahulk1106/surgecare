import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wegovy in India 2026 — Price, Dosing & Weight Loss Results | MySurgery',
  description: 'Complete guide to Wegovy (semaglutide 2.4mg) in India 2026. Current price after 48% April cut, dosing schedule, 15–17% weight loss results, and how to get a prescription.',
  alternates: { canonical: '/glp1/wegovy' },
}

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

const doses = [
  { strength: '0.25mg', schedule: 'Weeks 1–4', weekly: 1415, monthly: 5660 },
  { strength: '0.5mg', schedule: 'Weeks 5–8', weekly: 1800, monthly: 7200 },
  { strength: '1.0mg', schedule: 'Weeks 9–12', weekly: 2200, monthly: 8800 },
  { strength: '1.7mg', schedule: 'Weeks 13–16', weekly: 3000, monthly: 12000 },
  { strength: '2.4mg', schedule: 'Week 17+ (maintenance)', weekly: 3500, monthly: 14000 },
]

export default function WegovyPage() {
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/wegovy' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/wegovy' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #4c1d95, #7c3aed)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#c4b5fd', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <div style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', width: 'fit-content' }}>Novo Nordisk · Launched India June 2025 · Price cut 48% April 2026</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Wegovy in India</h1>
          <p style={{ fontSize: '18px', color: '#c4b5fd', marginBottom: '16px' }}>Semaglutide 2.4mg — the highest dose, specifically approved for chronic weight management</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {[['15–17%', 'Average weight loss'], ['2.4mg', 'Maximum weekly dose'], ['₹5,660/mo', 'Starting dose cost'], ['₹14,000/mo', 'Maintenance dose cost']].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 18px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'white' }}>{n}</div>
                <div style={{ fontSize: '11px', color: '#c4b5fd', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#7c3aed', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Consultation</Link>
            <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+Wegovy+in+India' target='_blank' rel='noopener noreferrer' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '20px', marginBottom: '28px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>What makes Wegovy different from Ozempic?</h2>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, marginBottom: '12px' }}>Both are semaglutide — but Wegovy is dosed at 2.4mg weekly vs Ozempic&apos;s maximum of 2mg. The higher dose produces greater appetite suppression and more weight loss.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['15–17% body weight loss (vs 10–15% with Ozempic)', 'Specifically approved for obesity — not just diabetes', 'SELECT trial: 20% reduction in cardiovascular events', 'Approved in India June 2025 — first in India for obesity', 'Price cut 48% in April 2026 vs initial launch price'].map(p => (
                <div key={p} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#374151' }}>
                  <span style={{ color: '#7c3aed', flexShrink: 0 }}>✓</span>{p}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Who is Wegovy for?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['BMI ≥30 (obese)', 'BMI ≥27 with at least one weight-related condition (diabetes, hypertension, heart disease)', 'Patients who want maximum weight loss from a GLP-1 drug', 'Patients at high cardiovascular risk who also need weight management', 'Note: Prescription from endocrinologist required. MoH April 2026 guidelines apply.'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#374151', padding: '8px', background: i < 4 ? '#faf5ff' : '#fef9c3', borderRadius: '6px' }}>
                  <span style={{ color: i < 4 ? '#7c3aed' : '#d97706', flexShrink: 0 }}>{i < 4 ? '✓' : '⚠️'}</span>{p}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Dose Escalation Schedule & Cost in India (After April 2026 Cut)</h2>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>Wegovy must be escalated slowly over 16 weeks to minimise GI side effects. Do not rush the escalation.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#faf5ff' }}>
                  {['Dose', 'Schedule', '₹/Week', '₹/Month'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#7c3aed', fontSize: '12px', textTransform: 'uppercase' }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {doses.map((d, i) => (
                  <tr key={d.strength} style={{ background: d.strength === '2.4mg' ? '#faf5ff' : i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#7c3aed' }}>{d.strength}{d.strength === '2.4mg' && ' ★'}</td>
                    <td style={{ padding: '12px 16px', color: '#374151' }}>{d.schedule}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0f172a' }}>₹{d.weekly.toLocaleString()}</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>₹{d.monthly.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '12px', fontSize: '12px', color: '#94a3b8' }}>★ Maintenance dose. Total escalation period: 16 weeks minimum before reaching 2.4mg maintenance.</div>
        </div>

        <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', fontSize: '14px', color: '#713f12' }}>
          <strong>The weight regain concern:</strong> STEP trial data shows patients regain ~60% of lost weight within 1 year of stopping Wegovy. This means Wegovy is likely a lifelong treatment for most patients. Factor this into your cost planning.
        </div>

        <div style={{ background: 'linear-gradient(135deg, #4c1d95, #7c3aed)', borderRadius: '16px', padding: '32px', color: 'white' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Ready to start Wegovy in India?</h3>
          <p style={{ color: '#c4b5fd', marginBottom: '20px', fontSize: '14px' }}>Our endocrinology team provides a full assessment, prescription, and ongoing monitoring plan.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#7c3aed', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Consultation</Link>
            <Link href='/glp1/vs-bariatric' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Wegovy vs Bariatric Surgery →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
