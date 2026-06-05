'use client'
import { useState } from 'react'
import Link from 'next/link'
import { glp1Drugs, glp1Research, glp1Controversies, genericBrands } from '@/lib/glp1'

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

const verdictLabel: Record<string, string> = {
  confirmed: '⚠️ Confirmed',
  likely: '🔶 Likely',
  disputed: '🔍 Disputed',
  debunked: '✅ Debunked',
}

export default function GLP1Hub() {
  const [activeTab, setActiveTab] = useState(0)
  const [bmi, setBmi] = useState('')
  const [condition, setCondition] = useState('')
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null)
  const [expandedControversy, setExpandedControversy] = useState<string | null>(null)
  const [researchFilter, setResearchFilter] = useState<'all' | 'benefit' | 'risk'>('all')

  const checkEligibility = () => {
    const bmiNum = parseFloat(bmi)
    if (!bmi || isNaN(bmiNum)) { setEligibilityResult('Please enter your BMI'); return }
    if (condition === 'diabetes') {
      setEligibilityResult('✅ You may be eligible for GLP-1 therapy for Type 2 diabetes management. Consult an endocrinologist to confirm.')
    } else if (bmiNum >= 30) {
      setEligibilityResult('✅ With BMI ≥30, you may be eligible for GLP-1 therapy for weight loss. Book a free consultation to confirm.')
    } else if (bmiNum >= 27 && condition) {
      setEligibilityResult('✅ With BMI ≥27 and a weight-related condition, you may be eligible. An endocrinologist can assess your case.')
    } else if (bmiNum >= 27) {
      setEligibilityResult('⚠️ BMI ≥27 qualifies only with at least one comorbidity (diabetes, hypertension, or heart disease). Select your condition above.')
    } else {
      setEligibilityResult('ℹ️ GLP-1 drugs are typically indicated for BMI ≥27 with comorbidities or BMI ≥30. Speak to an endocrinologist for personalised advice.')
    }
  }

  const filteredResearch = glp1Research.filter(r => researchFilter === 'all' || r.type === researchFilter)
  const drug = glp1Drugs[activeTab]

  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>

      {/* SUB-NAV */}
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '0' }}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1' ? '2px solid #38bdf8' : '2px solid transparent' }}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)', padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', background: '#38bdf8', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 600 }}>India&apos;s most comprehensive GLP-1 resource</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '20px', maxWidth: '700px' }}>
            GLP-1 Medicines in India<br />
            <span style={{ color: '#38bdf8' }}>Everything You Need to Know</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '36px', maxWidth: '600px' }}>
            Ozempic. Wegovy. Mounjaro. 20+ generics. Real research. Real controversies. Costs, eligibility, and what Indian patients need to know in 2026.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px' }}>
              Book GLP-1 Consultation
            </Link>
            <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+GLP-1+medicines+in+India' target='_blank' rel='noopener noreferrer' style={{ background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', border: '1px solid rgba(255,255,255,0.2)' }}>
              WhatsApp Us
            </a>
          </div>

          {/* STAT PILLS */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[
              ['20+', 'Generic brands in India'],
              ['₹325/week', 'Lowest available cost'],
              ['22%', 'Max weight loss (Mounjaro)'],
              ['Mar 2026', 'Patent expiry date'],
            ].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '16px 20px' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#38bdf8' }}>{n}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DRUG COMPARISON TABS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Compare GLP-1 Drugs Available in India</h2>
        <p style={{ color: '#64748b', marginBottom: '24px' }}>All three branded drugs are now officially available in India. Select to compare.</p>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '0', flexWrap: 'wrap' }}>
          {glp1Drugs.map((d, i) => (
            <button key={d.slug} onClick={() => setActiveTab(i)}
              style={{ padding: '12px 24px', borderRadius: '10px 10px 0 0', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px', fontFamily: 'inherit', background: activeTab === i ? 'white' : '#e2e8f0', color: activeTab === i ? d.color : '#64748b', boxShadow: activeTab === i ? '0 -2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.15s', borderBottom: activeTab === i ? `3px solid ${d.color}` : 'none' }}>
              {d.name}
            </button>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: '0 12px 12px 12px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '32px' }}>
            <div>
              <div style={{ display: 'inline-block', background: drug.color + '15', color: drug.color, fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', textTransform: 'uppercase' }}>
                {drug.manufacturer}
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{drug.name}</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>{drug.genericName}</p>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, marginBottom: '20px' }}>{drug.tagline}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {drug.indication.map(ind => (
                  <span key={ind} style={{ background: '#f0f9ff', color: '#0369a1', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                    {ind === 'diabetes' ? '💉 Diabetes' : ind === 'weight-loss' ? '⚖️ Weight Loss' : '💉⚖️ Both'}
                  </span>
                ))}
                <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                  ✓ CDSCO Approved {drug.approvalDate}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  ['Weight Loss', drug.weightLoss],
                  ['HbA1c Reduction', drug.hba1cReduction],
                  ['Form', drug.form],
                  ['Heart Protection', drug.cardioProtection ? '✅ Yes' : '❌ No'],
                ].map(([label, val]) => (
                  <div key={label} style={{ background: '#f8fafc', borderRadius: '8px', padding: '12px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Cost in India (2026)</h4>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f8fafc', padding: '10px 16px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  <span>Dose</span><span>Per Week</span><span>Per Month</span>
                </div>
                {drug.doses.map(d => (
                  <div key={d.strength} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '10px 16px', fontSize: '13px', borderTop: '1px solid #f0f0f0' }}>
                    <span style={{ color: '#374151' }}>{d.strength}</span>
                    <span style={{ fontWeight: 600, color: drug.color }}>₹{d.pricePerWeek.toLocaleString()}</span>
                    <span style={{ color: '#64748b' }}>₹{d.pricePerMonth.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#15803d', marginBottom: '8px' }}>✅ Pros</div>
                  {drug.pros.map(p => <div key={p} style={{ fontSize: '12px', color: '#374151', marginBottom: '6px', paddingLeft: '12px', borderLeft: '2px solid #86efac' }}>{p}</div>)}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#dc2626', marginBottom: '8px' }}>⚠️ Cons</div>
                  {drug.cons.map(c => <div key={c} style={{ fontSize: '12px', color: '#374151', marginBottom: '6px', paddingLeft: '12px', borderLeft: '2px solid #fca5a5' }}>{c}</div>)}
                </div>
              </div>

              <Link href={`/glp1/${drug.slug}`} style={{ display: 'block', textAlign: 'center', background: drug.color, color: 'white', fontWeight: 700, padding: '13px', borderRadius: '10px', textDecoration: 'none', marginTop: '20px', fontSize: '14px' }}>
                Full {drug.name} Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* GENERICS STRIP */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 0' }}>
        <div style={{ background: 'linear-gradient(135deg, #ecfdf5, #f0fdf4)', border: '1px solid #86efac', borderRadius: '16px', padding: '28px 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#14532d', margin: '0 0 4px' }}>Generic Semaglutide in India — from ₹325/week</h3>
              <p style={{ color: '#166534', fontSize: '14px', margin: 0 }}>20+ brands from Natco, Sun Pharma, Glenmark, Dr Reddy&apos;s & more after patent expiry March 2026</p>
            </div>
            <Link href='/glp1/generic' style={{ background: '#15803d', color: 'white', fontWeight: 600, padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Compare all generics →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px' }}>
            {genericBrands.slice(0, 6).map(b => (
              <div key={b.brand} style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid #bbf7d0' }}>
                <div style={{ fontWeight: 700, color: '#14532d', fontSize: '14px' }}>{b.brand}</div>
                <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>{b.company}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#15803d' }}>₹{b.pricePerWeek}/week</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>{b.form}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LATEST RESEARCH */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Latest Research</h2>
            <p style={{ color: '#64748b', margin: 0 }}>Updated June 2026 — from NEJM, The Lancet, ASCO, and NIH</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['all', 'benefit', 'risk'] as const).map(f => (
              <button key={f} onClick={() => setResearchFilter(f)}
                style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '13px', fontFamily: 'inherit', background: researchFilter === f ? (f === 'benefit' ? '#15803d' : f === 'risk' ? '#dc2626' : '#1d4ed8') : '#e2e8f0', color: researchFilter === f ? 'white' : '#64748b' }}>
                {f === 'all' ? 'All' : f === 'benefit' ? '✅ Benefits' : '⚠️ Risks'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {filteredResearch.map(r => (
            <div key={r.id} style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: `1px solid ${r.type === 'benefit' ? '#bbf7d0' : r.type === 'risk' ? '#fecaca' : '#e2e8f0'}`, borderLeft: `4px solid ${r.type === 'benefit' ? '#16a34a' : r.type === 'risk' ? '#dc2626' : '#64748b'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '12px' }}>
                <span style={{ fontSize: '11px', background: r.type === 'benefit' ? '#f0fdf4' : r.type === 'risk' ? '#fef2f2' : '#f8fafc', color: r.type === 'benefit' ? '#15803d' : r.type === 'risk' ? '#dc2626' : '#64748b', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  {r.type === 'benefit' ? '✅ Benefit' : r.type === 'risk' ? '⚠️ Risk' : '🔬 Neutral'}
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8', whiteSpace: 'nowrap' }}>{r.category}</span>
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{r.title}</h4>
              <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 12px' }}>{r.finding}</p>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>{r.source} · {r.year}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link href='/glp1/research' style={{ display: 'inline-block', background: '#0f172a', color: 'white', fontWeight: 600, padding: '12px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>
            View full research hub →
          </Link>
        </div>
      </div>

      {/* CONTROVERSIES */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Controversies & Open Questions</h2>
        <p style={{ color: '#64748b', marginBottom: '24px' }}>The debates that matter. Balanced, evidence-based verdicts.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {glp1Controversies.map(c => (
            <div key={c.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <button onClick={() => setExpandedControversy(expandedControversy === c.id ? null : c.id)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer', gap: '16px', fontFamily: 'inherit' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left', flex: 1 }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: c.verdictColor, background: c.verdictColor + '15', padding: '4px 10px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
                    {verdictLabel[c.verdict]}
                  </span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{c.title}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>{c.concern}</div>
                  </div>
                </div>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' strokeWidth='2' style={{ flexShrink: 0, transform: expandedControversy === c.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><polyline points='6 9 12 15 18 9' /></svg>
              </button>
              {expandedControversy === c.id && (
                <div style={{ padding: '0 24px 20px', borderTop: '1px solid #f0f0f0' }}>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '16px 0 0' }}>{c.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href='/glp1/side-effects' style={{ display: 'inline-block', background: '#f8fafc', border: '1px solid #e2e8f0', color: '#374151', fontWeight: 600, padding: '12px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>
            Full side effects & safety guide →
          </Link>
        </div>
      </div>

      {/* ELIGIBILITY CHECKER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 0' }}>
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', borderRadius: '20px', padding: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Am I Eligible for GLP-1 Therapy?</h2>
          <p style={{ color: '#a5b4fc', marginBottom: '28px', fontSize: '14px' }}>Quick eligibility check — not a substitute for medical advice</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#a5b4fc', fontWeight: 600, marginBottom: '8px' }}>Your BMI</label>
              <input type='number' placeholder='e.g. 32' value={bmi} onChange={e => setBmi(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(165,180,252,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#a5b4fc', fontWeight: 600, marginBottom: '8px' }}>Health Condition</label>
              <select value={condition} onChange={e => setCondition(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(165,180,252,0.3)', background: '#1e1b4b', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}>
                <option value=''>Select condition</option>
                <option value='diabetes'>Type 2 Diabetes</option>
                <option value='hypertension'>High Blood Pressure</option>
                <option value='heart'>Heart Disease</option>
                <option value='none'>None of the above</option>
              </select>
            </div>
          </div>

          <button onClick={checkEligibility}
            style={{ background: '#6366f1', color: 'white', fontWeight: 700, padding: '13px 32px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '15px', fontFamily: 'inherit' }}>
            Check My Eligibility
          </button>

          {eligibilityResult && (
            <div style={{ marginTop: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 20px', fontSize: '14px', color: 'white', lineHeight: 1.6 }}>
              {eligibilityResult}
              <div style={{ marginTop: '12px' }}>
                <Link href='/contact' style={{ display: 'inline-block', background: '#6366f1', color: 'white', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>
                  Book Free Consultation →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* QUICK LINKS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Explore the GLP-1 Hub</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
          {[
            { href: '/glp1/cost', label: '💰 Cost Calculator', desc: 'Compare all drug costs month by month' },
            { href: '/glp1/research', label: '🔬 Research Hub', desc: 'Latest clinical trials and findings' },
            { href: '/glp1/side-effects', label: '⚠️ Side Effects', desc: 'Complete safety and controversy guide' },
            { href: '/glp1/vs-bariatric', label: '⚖️ vs Bariatric Surgery', desc: 'Which is right for you?' },
            { href: '/glp1/generic', label: '💊 Generic Guide', desc: '20+ Indian brands compared' },
            { href: '/glp1/ozempic', label: '🩺 Ozempic Guide', desc: 'India price, dosing, and availability' },
            { href: '/glp1/wegovy', label: '🩺 Wegovy Guide', desc: 'Highest dose semaglutide for weight loss' },
            { href: '/glp1/mounjaro', label: '🩺 Mounjaro Guide', desc: 'Dual GIP+GLP-1 — most powerful' },
            { href: '/blog/bypass-surgery-insurance-india-2026', label: '📋 Surgery & Insurance India', desc: 'Does insurance cover weight-loss or cardiac surgery in India?' },
            { href: '/blog/kidney-transplant-india-nigerian-patients', label: '🫘 Kidney Transplant Guide', desc: 'For African patients considering surgery in India' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', textDecoration: 'none', display: 'block', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1d4ed8'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(29,78,216,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{l.label}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
