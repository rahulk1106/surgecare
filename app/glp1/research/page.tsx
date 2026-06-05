import type { Metadata } from 'next'
import Link from 'next/link'
import { glp1Research } from '@/lib/glp1'

export const metadata: Metadata = {
  title: 'GLP-1 Research Hub 2026 — Latest Clinical Trials, Benefits & Risks | MySurgery',
  description: 'The most comprehensive GLP-1 research summary for Indian patients. Benefits, risks, and open questions from NEJM, The Lancet, ASCO, and NIH updated June 2026.',
  alternates: { canonical: '/glp1/research' },
}

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

const categories = ['Heart & Cardiovascular', 'Kidney', 'Brain & Mental Health', 'Cancer', 'Liver', 'Lung & Respiratory', 'Thyroid & Endocrine', 'Muscle & Bone', 'Weight Management', 'Gastrointestinal']

export default function ResearchPage() {
  const benefits = glp1Research.filter(r => r.type === 'benefit')
  const risks = glp1Research.filter(r => r.type === 'risk')
  const neutral = glp1Research.filter(r => r.type === 'neutral')

  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/research' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/research' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #0c4a6e, #075985)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#7dd3fc', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>GLP-1 Research Hub</h1>
          <p style={{ fontSize: '18px', color: '#7dd3fc', marginBottom: '24px' }}>Every major clinical finding — benefits, risks, and open questions — updated June 2026</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[[benefits.length.toString(), 'Confirmed benefits'], [risks.length.toString(), 'Known risks'], ['5+', 'Major trials cited'], ['2026', 'Last updated']].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 20px' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#38bdf8' }}>{n}</div>
                <div style={{ fontSize: '12px', color: '#7dd3fc', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '32px', background: '#16a34a', borderRadius: '2px' }} />
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>Confirmed Benefits ({benefits.length})</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px,1fr))', gap: '16px' }}>
            {benefits.map(r => (
              <div key={r.id} style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '4px solid #16a34a' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', gap: '8px' }}>
                  <span style={{ fontSize: '11px', background: '#f0fdf4', color: '#15803d', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>✅ {r.category}</span>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>{r.year}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 12px' }}>{r.finding}</p>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>Source: {r.source}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '32px', background: '#dc2626', borderRadius: '2px' }} />
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>Known Risks ({risks.length})</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px,1fr))', gap: '16px' }}>
            {risks.map(r => (
              <div key={r.id} style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '4px solid #dc2626' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', gap: '8px' }}>
                  <span style={{ fontSize: '11px', background: '#fef2f2', color: '#dc2626', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>⚠️ {r.category}</span>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>{r.year}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 12px' }}>{r.finding}</p>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>Source: {r.source}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '32px', background: '#64748b', borderRadius: '2px' }} />
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>Disputed / Evolving Evidence</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px,1fr))', gap: '16px' }}>
            {neutral.map(r => (
              <div key={r.id} style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '4px solid #64748b' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', gap: '8px' }}>
                  <span style={{ fontSize: '11px', background: '#f8fafc', color: '#64748b', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>🔬 {r.category}</span>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>{r.year}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 12px' }}>{r.finding}</p>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>Source: {r.source}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'linear-gradient(135deg, #0c4a6e, #075985)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Want personalised GLP-1 advice based on your health profile?</h3>
          <p style={{ color: '#7dd3fc', marginBottom: '20px', fontSize: '14px' }}>Our endocrinology team can assess whether GLP-1 therapy is right for you.</p>
          <Link href='/contact' style={{ display: 'inline-block', background: 'white', color: '#0c4a6e', fontWeight: 700, padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Free Consultation</Link>
        </div>
      </div>
    </div>
  )
}
