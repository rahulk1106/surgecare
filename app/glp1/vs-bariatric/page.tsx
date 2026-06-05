import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GLP-1 vs Bariatric Surgery India 2026 — Which is Right for You? | MySurgery',
  description: 'Complete comparison of GLP-1 drugs vs bariatric surgery in India 2026. Weight loss outcomes, cost, risks, and which option is right based on your BMI and health profile.',
  alternates: { canonical: '/glp1/vs-bariatric' },
}

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

const comparison = [
  { metric: 'Weight Loss', glp1: '15–22% of body weight', bariatric: '25–35% of body weight', winner: 'bariatric' },
  { metric: 'Invasiveness', glp1: 'Non-invasive (injection)', bariatric: 'Surgical procedure under GA', winner: 'glp1' },
  { metric: 'Cost in India', glp1: '₹15,000–1,70,000/year (ongoing)', bariatric: '₹3,00,000–6,00,000 (one-time)', winner: 'context' },
  { metric: 'Weight Regain', glp1: 'High if drug stopped (50–70%)', bariatric: 'Low (10–20% in 5 years)', winner: 'bariatric' },
  { metric: 'Cardiovascular benefit', glp1: 'Yes — 20% reduction in events', bariatric: 'Yes — significant reduction', winner: 'both' },
  { metric: 'Diabetes remission', glp1: 'Controls but rarely remits T2D', bariatric: 'Remission in 50–80% cases', winner: 'bariatric' },
  { metric: 'Recovery time', glp1: 'None', bariatric: '5–7 days hospital, 2–4 weeks full', winner: 'glp1' },
  { metric: 'Reversiblity', glp1: 'Fully reversible — stop the drug', bariatric: 'Permanent (sleeve/bypass)', winner: 'glp1' },
  { metric: 'Nutrient deficiency', glp1: 'Minimal risk', bariatric: 'B12, iron, calcium supplements lifelong', winner: 'glp1' },
  { metric: 'Surgical risk', glp1: 'None', bariatric: 'Anaesthesia + surgical risks (low but real)', winner: 'glp1' },
  { metric: 'Insurance in India', glp1: 'Not covered for obesity', bariatric: 'Covered if BMI ≥35 with comorbidities', winner: 'bariatric' },
  { metric: 'Long-term commitment', glp1: 'Lifelong drug use likely needed', bariatric: 'One-time procedure', winner: 'bariatric' },
]

const winnerColor = (w: string) => w === 'glp1' ? '#1d4ed8' : w === 'bariatric' ? '#7c3aed' : '#64748b'

export default function VsBariatricPage() {
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/vs-bariatric' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/vs-bariatric' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #3730a3)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#a5b4fc', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>GLP-1 vs Bariatric Surgery</h1>
          <p style={{ fontSize: '18px', color: '#a5b4fc', marginBottom: '16px' }}>The most important decision in obesity treatment. A complete, honest comparison for Indian patients in 2026.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(29,78,216,0.3)', border: '1px solid rgba(29,78,216,0.5)', borderRadius: '10px', padding: '12px 20px', color: '#93c5fd', fontSize: '14px', fontWeight: 600 }}>💊 GLP-1: 15–22% weight loss</div>
            <div style={{ background: 'rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.5)', borderRadius: '10px', padding: '12px 20px', color: '#c4b5fd', fontSize: '14px', fontWeight: 600 }}>🔪 Bariatric: 25–35% weight loss</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

        {/* COMPARISON TABLE */}
        <section style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ padding: '16px 20px', fontWeight: 700, color: '#64748b', fontSize: '13px', textTransform: 'uppercase' }}>Factor</div>
            <div style={{ padding: '16px 20px', fontWeight: 700, color: '#1d4ed8', fontSize: '13px', textAlign: 'center', background: '#eff6ff' }}>💊 GLP-1 Drugs</div>
            <div style={{ padding: '16px 20px', fontWeight: 700, color: '#7c3aed', fontSize: '13px', textAlign: 'center', background: '#faf5ff' }}>🔪 Bariatric Surgery</div>
          </div>
          {comparison.map((r, i) => (
            <div key={r.metric} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < comparison.length - 1 ? '1px solid #f0f0f0' : 'none', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
              <div style={{ padding: '14px 20px', fontWeight: 600, color: '#374151', fontSize: '13px' }}>{r.metric}</div>
              <div style={{ padding: '14px 20px', fontSize: '13px', color: r.winner === 'glp1' ? '#1d4ed8' : '#374151', fontWeight: r.winner === 'glp1' ? 700 : 400, background: r.winner === 'glp1' ? '#eff6ff' : 'transparent', textAlign: 'center' }}>
                {r.winner === 'glp1' && <span style={{ marginRight: '6px' }}>✅</span>}{r.glp1}
              </div>
              <div style={{ padding: '14px 20px', fontSize: '13px', color: r.winner === 'bariatric' ? '#7c3aed' : '#374151', fontWeight: r.winner === 'bariatric' ? 700 : 400, background: r.winner === 'bariatric' ? '#faf5ff' : 'transparent', textAlign: 'center' }}>
                {r.winner === 'bariatric' && <span style={{ marginRight: '6px' }}>✅</span>}{r.bariatric}
              </div>
            </div>
          ))}
        </section>

        {/* WHO SHOULD CHOOSE WHAT */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: '#eff6ff', borderRadius: '16px', padding: '28px', border: '2px solid #bfdbfe' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1d4ed8', marginBottom: '16px' }}>💊 Choose GLP-1 if you:</h3>
            {['Have BMI 27–39 with comorbidities', 'Want to avoid surgery entirely', 'Have cardiovascular disease — GLP-1 has proven heart protection', 'Have Type 2 diabetes to manage alongside weight', 'Want to try medication before committing to surgery', 'Cannot undergo surgery due to anaesthesia risk', 'Are willing to take a daily/weekly injection lifelong'].map(p => (
              <div key={p} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#1e40af', marginBottom: '8px' }}>
                <span style={{ color: '#2563eb', flexShrink: 0 }}>✓</span>{p}
              </div>
            ))}
          </div>
          <div style={{ background: '#faf5ff', borderRadius: '16px', padding: '28px', border: '2px solid #d8b4fe' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#7c3aed', marginBottom: '16px' }}>🔪 Choose Bariatric Surgery if you:</h3>
            {['Have BMI ≥40, or BMI ≥35 with serious comorbidities', 'Want maximum, sustained weight loss (25–35%)', 'Want possible Type 2 diabetes remission (50–80%)', 'Don\'t want to take medication lifelong', 'Are willing to accept permanent anatomical change', 'Have tried GLP-1 or other methods without success', 'Can afford one-time surgical cost vs ongoing drug cost'].map(p => (
              <div key={p} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#6d28d9', marginBottom: '8px' }}>
                <span style={{ color: '#7c3aed', flexShrink: 0 }}>✓</span>{p}
              </div>
            ))}
          </div>
        </section>

        {/* COST OVER TIME */}
        <section style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Total Cost Over Time — India 2026</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  {['Option', '1 Year', '3 Years', '5 Years', '10 Years'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: '#64748b', fontSize: '12px', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Generic semaglutide (cheapest)', color: '#15803d', costs: ['₹15,500', '₹46,500', '₹77,500', '₹1,55,000'] },
                  { name: 'Ozempic (0.5mg maintenance)', color: '#1d4ed8', costs: ['₹67,920', '₹2,03,760', '₹3,39,600', '₹6,79,200'] },
                  { name: 'Wegovy (1.7mg maintenance)', color: '#7c3aed', costs: ['₹1,44,000', '₹4,32,000', '₹7,20,000', '₹14,40,000'] },
                  { name: 'Mounjaro (10mg)', color: '#0891b2', costs: ['₹2,47,500', '₹7,42,500', '₹12,37,500', '₹24,75,000'] },
                  { name: 'Bariatric Surgery (one-time)', color: '#dc2626', costs: ['₹3–6 Lakh', '₹3–6 Lakh', '₹3–6 Lakh', '₹3–6 Lakh'] },
                ].map((r, i) => (
                  <tr key={r.name} style={{ background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: r.color }}>{r.name}</td>
                    {r.costs.map((c, j) => <td key={j} style={{ padding: '12px 16px', color: '#374151' }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>Bariatric surgery breakeven vs branded GLP-1: approximately 2–3 years. vs generic semaglutide: approximately 15–20 years.</p>
        </section>

        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #3730a3)', borderRadius: '16px', padding: '32px', color: 'white' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Not sure which option is right for you?</h3>
          <p style={{ color: '#a5b4fc', marginBottom: '20px', fontSize: '14px' }}>MySurgery connects you with both endocrinologists (for GLP-1) and bariatric surgeons (for surgery) for a free initial consultation to help you decide.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#1e1b4b', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Free Consultation</Link>
            <Link href='/treatment/bariatric' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Bariatric Surgery Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
