import type { Metadata } from 'next'
import Link from 'next/link'
import { glp1Controversies } from '@/lib/glp1'

export const metadata: Metadata = {
  title: 'GLP-1 Side Effects, Risks & Controversies — Complete India Guide 2026',
  description: 'Complete, balanced guide to GLP-1 drug side effects in India 2026. Nausea, muscle loss, thyroid cancer risk, weight regain, compounding drugs — the full picture.',
  keywords: [
    'GLP-1 side effects India',
    'Ozempic side effects India',
    'semaglutide nausea India',
    'semaglutide muscle loss',
    'Ozempic thyroid cancer risk India',
    'GLP-1 weight regain after stopping',
    'semaglutide risks India',
    'GLP-1 safety India 2026',
  ],
  alternates: { canonical: '/glp1/side-effects' },
}

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

const sideEffectGroups = [
  {
    group: 'Gastrointestinal (Most Common)',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    effects: [
      { name: 'Nausea', freq: 'Very common (40–44%)', tip: 'Take with food. Avoid fatty meals. Usually resolves after 4–8 weeks.' },
      { name: 'Vomiting', freq: 'Common (15–24%)', tip: 'Slow dose escalation reduces risk. Stay hydrated.' },
      { name: 'Diarrhoea', freq: 'Common (20–30%)', tip: 'Usually early. BRAT diet helps. Maintain fluid intake.' },
      { name: 'Constipation', freq: 'Common (11–24%)', tip: 'High fibre diet and adequate water. Can persist.' },
      { name: 'Abdominal pain', freq: 'Common (5–10%)', tip: 'Usually mild and transient. Severe pain needs medical review.' },
    ],
  },
  {
    group: 'Serious (Rare but Important)',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
    effects: [
      { name: 'Pancreatitis', freq: 'Rare (<0.5%)', tip: 'Stop drug immediately if severe upper abdominal pain occurs. Seek emergency care.' },
      { name: 'Gallstones / Cholecystitis', freq: 'Uncommon (1.5–2%)', tip: 'Risk increases with rapid weight loss. Ultrasound recommended if right upper abdominal pain develops.' },
      { name: 'Acute kidney injury', freq: 'Rare', tip: 'Usually due to dehydration from GI side effects. Stay well hydrated.' },
      { name: 'Bowel obstruction (ileus)', freq: 'Very rare', tip: 'Stop GLP-1 before surgery. Inform all doctors you are on GLP-1.' },
    ],
  },
  {
    group: 'Metabolic & Long-Term',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#d8b4fe',
    effects: [
      { name: 'Muscle loss (sarcopenia)', freq: 'Common — 25–40% of weight lost', tip: 'Resistance training and protein intake 1.2–1.6g/kg/day are essential. Without these, muscle loss is significant.' },
      { name: 'Bone density reduction', freq: 'Possible with long-term use', tip: 'DEXA scan recommended after 12 months. Adequate calcium and vitamin D important.' },
      { name: 'Weight regain after stopping', freq: 'Very common (50–70% regain within 2 years)', tip: 'Lifestyle changes must accompany drug therapy. Do not stop abruptly.' },
      { name: 'Medullary thyroid cancer', freq: 'Unknown — FDA black box warning', tip: 'Contraindicated if personal or family history of MTC or MEN2. Not confirmed in human studies.' },
    ],
  },
  {
    group: 'Eye & Nerve',
    color: '#0891b2',
    bg: '#f0f9ff',
    border: '#bae6fd',
    effects: [
      { name: 'Diabetic retinopathy worsening', freq: 'Uncommon in rapid glucose lowering', tip: 'Retinal screening before starting GLP-1 recommended for all diabetic patients. Rapid HbA1c reduction can temporarily worsen retinopathy.' },
      { name: 'Headache', freq: 'Common early (11%)', tip: 'Usually self-limiting. Adequate hydration helps.' },
    ],
  },
]

const verdictLabel: Record<string, string> = { confirmed: '⚠️ Confirmed', likely: '🔶 Likely', disputed: '🔍 Disputed', debunked: '✅ Debunked' }

export default function SideEffectsPage() {
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/side-effects' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/side-effects' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #450a0a, #7f1d1d)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#fca5a5', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>GLP-1 Side Effects & Controversies</h1>
          <p style={{ fontSize: '18px', color: '#fca5a5', marginBottom: '16px' }}>The complete, honest picture — common side effects, serious risks, and the controversies the internet doesn&apos;t explain well.</p>
          <p style={{ fontSize: '13px', color: '#fecaca', marginBottom: '16px' }}>Last updated: June 2026 · Reviewed by the <Link href='/editorial-policy' style={{ color: '#fecaca' }}>MySurgery editorial team</Link></p>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 18px', fontSize: '13px', color: '#fecaca', maxWidth: '600px' }}>
            This page presents evidence-based information. GLP-1 drugs have real benefits and real risks. The goal is to help you have an informed conversation with your doctor — not to replace medical advice.
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        {sideEffectGroups.map(g => (
          <section key={g.group} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: g.color, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '24px', background: g.color, display: 'inline-block', borderRadius: '2px' }} />
              {g.group}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {g.effects.map(e => (
                <div key={e.name} style={{ background: g.bg, border: `1px solid ${g.border}`, borderRadius: '12px', padding: '16px 20px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: '16px', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '4px' }}>{e.name}</div>
                    <div style={{ fontSize: '12px', color: g.color, fontWeight: 600 }}>{e.freq}</div>
                  </div>
                  <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>
                    <span style={{ fontWeight: 600 }}>Tip: </span>{e.tip}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>The Big Controversies — Balanced Verdicts</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {glp1Controversies.map(c => (
              <div key={c.id} style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: c.verdictColor, background: c.verdictColor + '15', padding: '4px 12px', borderRadius: '6px' }}>{verdictLabel[c.verdict]}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{c.title}</h3>
                </div>
                <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>{c.concern}</p>
                <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>India-Specific Safety Warning — April 2026</h2>
          <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, marginBottom: '12px' }}>The Ministry of Health and Family Welfare issued guidance in April 2026 confirming:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['GLP-1 drugs are prescription-only medicines — they cannot legally be dispensed without a prescription', 'Should be prescribed only by endocrinologists for appropriate patients', 'Serious adverse events reported in India include pancreatitis, acute kidney injury, bowel obstruction, gallstones, and medullary thyroid cancer association', 'Self-medication or online purchase without prescription is dangerous and illegal', 'The Indian Medical Association (IMA) has called for stricter enforcement after hospitalisations in early 2026'].map(p => (
              <div key={p} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '13px', color: '#374151', padding: '10px', background: '#fef2f2', borderRadius: '8px' }}>
                <span style={{ color: '#dc2626', flexShrink: 0 }}>⚠️</span>{p}
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Talk to an endocrinologist before starting GLP-1 therapy</h3>
          <p style={{ color: '#93c5fd', marginBottom: '20px', fontSize: '14px' }}>A proper evaluation catches contraindications and creates a monitoring plan to minimise side effects.</p>
          <Link href='/contact' style={{ display: 'inline-block', background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Free Consultation</Link>
        </div>
      </div>
    </div>
  )
}
