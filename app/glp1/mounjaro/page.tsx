import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mounjaro in India 2026 — Price, Dosing & 22% Weight Loss Results | MySurgery',
  description: 'Complete guide to Mounjaro (tirzepatide) in India 2026. Dual GIP+GLP-1 mechanism, 20–22% weight loss, current price, availability, and how to get a prescription.',
  alternates: { canonical: '/glp1/mounjaro' },
}

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

const doses = [
  { strength: '2.5mg', schedule: 'Weeks 1–4 (starter)', weekly: 3281, monthly: 13125 },
  { strength: '5mg', schedule: 'Weeks 5–8', weekly: 4102, monthly: 16406 },
  { strength: '7.5mg', schedule: 'Weeks 9–12', weekly: 5156, monthly: 20625 },
  { strength: '10mg', schedule: 'Weeks 13–16', weekly: 5156, monthly: 20625 },
  { strength: '12.5mg', schedule: 'Weeks 17–20', weekly: 6445, monthly: 25781 },
  { strength: '15mg', schedule: 'Week 21+ (max dose)', weekly: 6445, monthly: 25781 },
]

export default function MounjaroPage() {
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/mounjaro' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/mounjaro' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #0c4a6e, #0891b2)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#7dd3fc', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '12px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', marginBottom: '12px' }}>Eli Lilly · Launched India August 2025 · Dual GIP+GLP-1</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Mounjaro in India</h1>
          <p style={{ fontSize: '18px', color: '#7dd3fc', marginBottom: '16px' }}>Tirzepatide — the world&apos;s most powerful approved weight loss drug. Dual GIP+GLP-1 receptor agonist.</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {[['20–22%', 'Weight loss at max dose'], ['2.5%', 'HbA1c reduction'], ['Dual', 'GIP + GLP-1 mechanism'], ['No generic', 'Available yet in India']].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 18px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'white' }}>{n}</div>
                <div style={{ fontSize: '11px', color: '#7dd3fc', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#0891b2', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Consultation</Link>
            <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+Mounjaro+in+India' target='_blank' rel='noopener noreferrer' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>What makes Mounjaro different?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '20px' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#0891b2', marginBottom: '12px', fontSize: '15px' }}>💊 GLP-1 drugs (Ozempic, Wegovy)</div>
              <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7 }}>Activate only GLP-1 receptors. Excellent for diabetes and weight loss. 10–17% body weight loss depending on dose.</div>
            </div>
            <div style={{ borderLeft: '2px solid #e2e8f0', paddingLeft: '20px' }}>
              <div style={{ fontWeight: 700, color: '#0891b2', marginBottom: '12px', fontSize: '15px' }}>🚀 Mounjaro (tirzepatide)</div>
              <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7 }}>Activates BOTH GIP receptors AND GLP-1 receptors. GIP enhances insulin secretion and works synergistically with GLP-1 for greater metabolic effect. Result: 20–22% weight loss — approaching bariatric surgery outcomes.</div>
            </div>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SURMOUNT Trials — What the Data Shows</h2>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>The SURMOUNT clinical trial programme is the most comprehensive weight loss trial ever conducted.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '12px' }}>
            {[
              { trial: 'SURMOUNT-1', result: '22.5% weight loss at 15mg in non-diabetic patients over 72 weeks' },
              { trial: 'SURMOUNT-2', result: '15.7% weight loss at 15mg in patients with Type 2 diabetes' },
              { trial: 'SURPASS-CVOT', result: '14% reduction in major cardiovascular events vs semaglutide' },
              { trial: 'SURMOUNT-OSA', result: '63% reduction in sleep apnea severity at 15mg' },
            ].map(t => (
              <div key={t.trial} style={{ background: '#f0f9ff', borderRadius: '10px', padding: '16px' }}>
                <div style={{ fontWeight: 700, color: '#0891b2', marginBottom: '8px', fontSize: '13px' }}>{t.trial}</div>
                <div style={{ fontSize: '12px', color: '#374151', lineHeight: 1.6 }}>{t.result}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Mounjaro Dose Schedule & Cost in India (2026)</h2>
          <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', fontSize: '12px', color: '#713f12' }}>
            No generic tirzepatide is available in India yet. The tirzepatide patent is in force. Expect generic launch in 2029–2030.
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f0f9ff' }}>
                  {['Dose', 'Schedule', '₹/Week', '₹/Month'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#0891b2', fontSize: '12px', textTransform: 'uppercase' }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {doses.map((d, i) => (
                  <tr key={d.strength} style={{ background: d.strength === '15mg' ? '#f0f9ff' : i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0891b2' }}>{d.strength}{d.strength === '15mg' && ' ★'}</td>
                    <td style={{ padding: '12px 16px', color: '#374151' }}>{d.schedule}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0f172a' }}>₹{d.weekly.toLocaleString()}</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>₹{d.monthly.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>★ Maximum dose shown in trials to produce 22.5% weight loss</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '16px', marginBottom: '24px' }}>
          <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '20px', border: '1px solid #86efac' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#14532d', marginBottom: '12px' }}>Who should consider Mounjaro?</h3>
            {['BMI ≥30 who want maximum weight loss', 'Type 2 diabetes with BMI ≥27 — best HbA1c reduction', 'Patients who failed Ozempic or Wegovy', 'Those willing to pay premium for better outcomes', 'Patients with concurrent sleep apnea (SURMOUNT-OSA)'].map(p => (
              <div key={p} style={{ fontSize: '12px', color: '#166534', marginBottom: '6px', display: 'flex', gap: '6px' }}><span>✓</span>{p}</div>
            ))}
          </div>
          <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '20px', border: '1px solid #fecaca' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#7f1d1d', marginBottom: '12px' }}>Mounjaro cautions</h3>
            {['Most expensive GLP-1 in India (₹13,000–26,000/month)', 'Newer drug — less than 4 years post-approval safety data', 'Higher rate of GI side effects at higher doses', 'No generic available — no price reduction expected until 2029', 'Contraindicated in MTC history and MEN2 syndrome'].map(p => (
              <div key={p} style={{ fontSize: '12px', color: '#991b1b', marginBottom: '6px', display: 'flex', gap: '6px' }}><span>⚠️</span>{p}</div>
            ))}
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #0c4a6e, #0891b2)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Is Mounjaro worth the cost for you?</h3>
          <p style={{ color: '#7dd3fc', marginBottom: '20px', fontSize: '14px' }}>Our endocrinology team assesses whether Mounjaro&apos;s additional weight loss justifies the premium over Ozempic or generics for your specific case.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#0891b2', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Free Consultation</Link>
            <Link href='/glp1/vs-bariatric' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Mounjaro vs Bariatric Surgery →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
