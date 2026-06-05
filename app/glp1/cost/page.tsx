'use client'
import { useState } from 'react'
import Link from 'next/link'
import { glp1Drugs, genericBrands } from '@/lib/glp1'

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

export default function CostPage() {
  const [months, setMonths] = useState(6)
  const [drug, setDrug] = useState('generic')

  const calcCost = () => {
    if (drug === 'generic') return genericBrands[0].pricePerWeek * 4 * months
    const d = glp1Drugs.find(d => d.slug === drug)
    if (!d) return 0
    return d.doses[1].pricePerMonth * months
  }

  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/cost' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/cost' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1c1917, #292524)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#d6d3d1', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>GLP-1 Cost in India 2026</h1>
          <p style={{ fontSize: '18px', color: '#d6d3d1', marginBottom: '8px' }}>Every drug. Every dose. Every brand. After April 2026 price cuts and generic launch.</p>
          <p style={{ fontSize: '14px', color: '#a8a29e' }}>No insurance covers GLP-1 for obesity in India. Understanding costs before starting is critical.</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

        {/* CALCULATOR */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', borderRadius: '20px', padding: '36px', marginBottom: '32px', color: 'white' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>💰 Cost Calculator</h2>
          <p style={{ color: '#a5b4fc', fontSize: '14px', marginBottom: '24px' }}>Estimate your total GLP-1 treatment cost in India</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '16px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#a5b4fc', fontWeight: 600, marginBottom: '8px' }}>Drug</label>
              <select value={drug} onChange={e => setDrug(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(165,180,252,0.3)', background: '#1e1b4b', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}>
                <option value='generic'>Generic Semaglutide (cheapest)</option>
                <option value='ozempic'>Ozempic (Novo Nordisk)</option>
                <option value='wegovy'>Wegovy (Novo Nordisk)</option>
                <option value='mounjaro'>Mounjaro (Eli Lilly)</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#a5b4fc', fontWeight: 600, marginBottom: '8px' }}>Duration: {months} months</label>
              <input type='range' min={1} max={24} value={months} onChange={e => setMonths(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#6366f1' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#a5b4fc', marginTop: '4px' }}><span>1 month</span><span>24 months</span></div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: '#a5b4fc', marginBottom: '8px' }}>Estimated total cost for {months} month{months > 1 ? 's' : ''}</div>
            <div style={{ fontSize: '42px', fontWeight: 800, color: 'white' }}>₹{calcCost().toLocaleString()}</div>
            <div style={{ fontSize: '12px', color: '#a5b4fc', marginTop: '8px' }}>₹{Math.round(calcCost() / months).toLocaleString()}/month · No insurance coverage available</div>
          </div>
        </div>

        {/* ALL DRUG COSTS */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>All GLP-1 Drug Costs in India — Full Comparison</h2>

        {glp1Drugs.map(d => (
          <div key={d.slug} style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: d.color, margin: '0 0 4px' }}>{d.name}</h3>
                <div style={{ fontSize: '13px', color: '#64748b' }}>{d.genericName} · {d.manufacturer}</div>
              </div>
              <Link href={`/glp1/${d.slug}`} style={{ background: d.color, color: 'white', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>Full Guide →</Link>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    {['Dose', 'Per Week', 'Per Month', '3 Months', '6 Months', '12 Months'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#64748b', fontSize: '11px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.doses.map((dose, i) => (
                    <tr key={dose.strength} style={{ background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: '#0f172a' }}>{dose.strength}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 700, color: d.color }}>₹{dose.pricePerWeek.toLocaleString()}</td>
                      <td style={{ padding: '10px 14px', color: '#374151' }}>₹{dose.pricePerMonth.toLocaleString()}</td>
                      <td style={{ padding: '10px 14px', color: '#64748b' }}>₹{(dose.pricePerMonth * 3).toLocaleString()}</td>
                      <td style={{ padding: '10px 14px', color: '#64748b' }}>₹{(dose.pricePerMonth * 6).toLocaleString()}</td>
                      <td style={{ padding: '10px 14px', color: '#64748b' }}>₹{(dose.pricePerMonth * 12).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* GENERICS TABLE */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '28px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#15803d', marginBottom: '4px' }}>Generic Semaglutide — All Brands</h3>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>Post patent expiry March 2026. Prices for lowest available dose.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f0fdf4' }}>
                  {['Brand', 'Company', 'Form', '/Week', '/Month', '/Year'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#15803d', fontSize: '11px', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {genericBrands.map((b, i) => (
                  <tr key={b.brand} style={{ background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '10px 14px', fontWeight: 700, color: '#0f172a' }}>{b.brand}</td>
                    <td style={{ padding: '10px 14px', color: '#374151' }}>{b.company}</td>
                    <td style={{ padding: '10px 14px', color: '#64748b' }}>{b.form}</td>
                    <td style={{ padding: '10px 14px', fontWeight: 700, color: '#15803d' }}>₹{b.pricePerWeek}</td>
                    <td style={{ padding: '10px 14px', color: '#374151' }}>₹{(b.pricePerWeek * 4).toLocaleString()}</td>
                    <td style={{ padding: '10px 14px', color: '#64748b' }}>₹{(b.pricePerWeek * 52).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', fontSize: '14px', color: '#713f12' }}>
          <strong>No insurance coverage:</strong> As of June 2026, no IRDAI-regulated health insurance policy in India covers GLP-1 medications for obesity. For Type 2 diabetes indication, some policies may cover injectable diabetes medications — check your policy document.
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1c1917, #292524)', borderRadius: '16px', padding: '28px', color: 'white', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Need help choosing the most cost-effective GLP-1 option?</h3>
          <Link href='/contact' style={{ display: 'inline-block', marginTop: '12px', background: 'white', color: '#1c1917', fontWeight: 700, padding: '12px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Free Consultation</Link>
        </div>
      </div>
    </div>
  )
}
