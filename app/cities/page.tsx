import { cities } from '@/lib/diseases'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Surgery in All Cities — Find Expert Surgeons Near You | MySurgery',
  description: 'MySurgery connects patients with expert surgeons in 20+ cities across India including Delhi, Mumbai, Bangalore, Chennai, Kochi, Pune, Ahmedabad, and more.',
  alternates: { canonical: '/cities' },
}

const cityRegions = {
  'North India': ['delhi', 'gurugram', 'noida', 'faridabad', 'lucknow', 'patna', 'ranchi', 'raipur'],
  'West India': ['mumbai', 'pune', 'ahmedabad', 'indore'],
  'South India': ['bangalore', 'kochi', 'trivandrum', 'coimbatore', 'madurai', 'chennai', 'vijayawada', 'vizag'],
  'East India': ['bhubaneswar'],
}

export default function CitiesListPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', padding: '60px 24px', textAlign: 'center'}}>
        <h1 style={{fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Find Expert Surgeons Near You</h1>
        <p style={{fontSize: '18px', color: '#93c5fd'}}>MySurgery operates in 20+ cities across India</p>
      </div>
      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '48px 24px'}}>
        {Object.entries(cityRegions).map(([region, slugs]) => (
          <div key={region} style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #e5e7eb'}}>{region}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px'}}>
              {slugs.map(slug => {
                const city = cities.find(c => c.slug === slug)
                if (!city) return null
                return (
                  <a key={slug} href={'/cities/' + slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', textDecoration: 'none', display: 'block', transition: 'all 0.2s'}}>
                    <p style={{fontWeight: 700, color: '#111827', fontSize: '16px', margin: '0 0 4px'}}>{city.name}</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 12px'}}>{city.state}</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <span style={{fontSize: '12px', color: '#1d4ed8', fontWeight: 500}}>View surgeons →</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        ))}
        <div style={{background: '#0f1f35', borderRadius: '16px', padding: '48px', textAlign: 'center', marginTop: '24px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Your city not listed?</h2>
          <p style={{color: '#93c5fd', marginBottom: '24px'}}>We are expanding rapidly. Call us and we will connect you with the best surgeon near you.</p>
          <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Find a Surgeon Near You</a>
        </div>
      </div>
    </div>
  )
}