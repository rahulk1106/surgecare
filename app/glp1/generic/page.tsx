import type { Metadata } from 'next'
import Link from 'next/link'
import { genericBrands } from '@/lib/glp1'

export const metadata: Metadata = {
  title: 'Generic Semaglutide in India 2026 — All Brands, Prices & Comparison | MySurgery',
  description: 'Complete guide to generic semaglutide in India 2026. 20+ brands from Natco, Sun Pharma, Glenmark, Dr Reddy\'s compared by price, form, and availability. From ₹325/week.',
  alternates: { canonical: '/glp1/generic' },
}

const nav = [
  { label: 'Overview', href: '/glp1' }, { label: 'Ozempic', href: '/glp1/ozempic' }, { label: 'Wegovy', href: '/glp1/wegovy' },
  { label: 'Mounjaro', href: '/glp1/mounjaro' }, { label: 'Generics', href: '/glp1/generic' }, { label: 'Cost', href: '/glp1/cost' },
  { label: 'Research', href: '/glp1/research' }, { label: 'Side Effects', href: '/glp1/side-effects' }, { label: 'vs Surgery', href: '/glp1/vs-bariatric' },
]

export default function GenericPage() {
  return (
    <div style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: '#f8fafc' }}>
      <div style={{ background: '#0f172a', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 500, color: n.href === '/glp1/generic' ? '#38bdf8' : '#94a3b8', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: n.href === '/glp1/generic' ? '2px solid #38bdf8' : '2px solid transparent' }}>{n.label}</Link>)}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #14532d, #15803d)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href='/glp1' style={{ fontSize: '13px', color: '#86efac', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to GLP-1 Hub</Link>
          <h1 style={{ fontSize: 'clamp(28px,5vw,46px)', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Generic Semaglutide in India</h1>
          <p style={{ fontSize: '18px', color: '#86efac', marginBottom: '20px' }}>20+ brands from Indian pharma giants — from ₹325/week after patent expiry March 2026</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[['March 20, 2026', 'Patent expiry date'], ['20+', 'Brands launched'], ['₹325/week', 'Lowest available price'], ['40+', 'Companies expected by Dec 2026']].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'white' }}>{n}</div>
                <div style={{ fontSize: '12px', color: '#86efac', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', fontSize: '14px', color: '#713f12' }}>
          <strong>Important:</strong> Generic semaglutide contains the same active molecule as Ozempic. CDSCO-approved generics from established Indian pharma companies meet bioequivalence standards. Always buy from a licensed pharmacy with a valid prescription from an endocrinologist.
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>All Generic Semaglutide Brands — Price Comparison</h2>
        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#f0fdf4' }}>
                  {['Brand', 'Company', 'Form', 'Price/Week', 'Price/Month', 'Status'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, color: '#15803d', fontSize: '12px', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {genericBrands.map((b, i) => (
                  <tr key={b.brand} style={{ background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0f172a' }}>{b.brand}</td>
                    <td style={{ padding: '12px 16px', color: '#374151' }}>{b.company}</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>{b.form}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#15803d' }}>₹{b.pricePerWeek}</td>
                    <td style={{ padding: '12px 16px', color: '#64748b' }}>₹{(b.pricePerWeek * 4).toLocaleString()}</td>
                    <td style={{ padding: '12px 16px' }}><span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>Available</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Vial vs Pen — Which Should You Choose?</h3>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontWeight: 700, color: '#15803d', marginBottom: '8px', fontSize: '14px' }}>Vial (e.g. GLIPIQ, Semanat)</div>
              <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>Cheapest option (₹325–400/week). Requires drawing the correct dose with a syringe. Better for patients with medical support. Risk of dosing error if not done correctly. Requires insulin syringes.</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: '8px', fontSize: '14px' }}>Pen (e.g. Noveltreat, Obeda, Semafull)</div>
              <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>Easier to use. Pre-filled, dose-dialled pen. Lower error risk. Costs ₹800–1,125/week — more expensive than vials but more convenient. Recommended for self-administration.</div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Generic vs Ozempic — Are They the Same?</h3>
            <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7 }}>
              <p style={{ marginTop: 0 }}>The active molecule is identical — semaglutide. CDSCO-approved generics must pass bioequivalence testing to confirm similar absorption and effect.</p>
              <p>However, the pen device, excipients, and manufacturing quality vary by brand. Established companies (Sun Pharma, Dr Reddy&apos;s, Natco) have strong track records. Newer or lesser-known brands carry more uncertainty.</p>
              <p style={{ marginBottom: 0 }}>Recommendation: Choose a generic from a listed top-10 Indian pharma company. Avoid unknown brands or unverified online sellers.</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #14532d, #15803d)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Need help choosing the right GLP-1 option?</h3>
          <p style={{ color: '#86efac', marginBottom: '20px', fontSize: '14px' }}>Our endocrinology team can recommend the right drug, dose, and brand based on your health profile.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href='/contact' style={{ background: 'white', color: '#15803d', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>Book Free Consultation</Link>
            <a href='https://wa.me/918588967050?text=Hi+I+want+to+know+about+generic+semaglutide+in+India' target='_blank' rel='noopener noreferrer' style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
