import { getDoctorsByCity, getAllDoctors } from '@/lib/doctors'
import { getCityBySlug, cities } from '@/lib/diseases'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const citySlugs = [...new Set(getAllDoctors().map(d => d.citySlug))]
  return citySlugs.map(city => ({ city }))
}

export async function generateMetadata(props: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await props.params
  const city = getCityBySlug(citySlug)
  if (!city) return {}
  return {
    title: 'Best Surgeons in ' + city.name + ' — Find Top Specialists | MySurgery',
    description: 'Find top surgeons and specialists in ' + city.name + '. Verified profiles with experience, hospital affiliations, and free consultation booking.',
    alternates: { canonical: '/doctors/city/' + citySlug },
  }
}

export default async function CityDoctorsPage(props: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await props.params
  const city = getCityBySlug(citySlug)
  if (!city) notFound()
  const doctors = getDoctorsByCity(citySlug)

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <div style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)', padding: '48px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px'}}>
            <a href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> &rsaquo; <a href='/doctors' style={{color: '#6b7280', textDecoration: 'none'}}>Doctors</a> &rsaquo; <span style={{color: '#1d4ed8'}}>{city.name}</span>
          </div>
          <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>Best Surgeons in {city.name}</h1>
          <p style={{fontSize: '17px', color: '#4b5563', marginBottom: '24px'}}>Find top surgeons and specialists in {city.name}, {city.state}. All profiles verified from public hospital records.</p>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <div style={{background: 'white', borderRadius: '10px', padding: '16px 24px', textAlign: 'center'}}>
              <p style={{fontSize: '24px', fontWeight: 700, color: '#1d4ed8', margin: '0 0 4px'}}>{doctors.length}+</p>
              <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>Verified Doctors</p>
            </div>
            <div style={{background: 'white', borderRadius: '10px', padding: '16px 24px', textAlign: 'center'}}>
              <p style={{fontSize: '24px', fontWeight: 700, color: '#1d4ed8', margin: '0 0 4px'}}>Free</p>
              <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>Consultation</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '48px 24px'}}>
        {doctors.length === 0 ? (
          <div style={{textAlign: 'center', padding: '60px 24px'}}>
            <p style={{fontSize: '18px', color: '#6b7280', marginBottom: '24px'}}>No doctors listed in {city.name} yet.</p>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: 600}}>Find a Surgeon in {city.name}</a>
          </div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '48px'}}>
            {doctors.map(doc => (
              <div key={doc.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', position: 'relative'}}>
                {!doc.claimed && (
                  <div style={{position: 'absolute', top: '16px', right: '16px', fontSize: '11px', background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '4px'}}>Unclaimed</div>
                )}
                <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px'}}>
                  <div style={{width: '56px', height: '56px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1d4ed8', fontSize: '20px', flexShrink: 0}}>
                    {doc.name.split(' ').slice(1, 2).join('').charAt(0)}
                  </div>
                  <div>
                    <h3 style={{fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 4px'}}>{doc.name}</h3>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>{doc.designation}</p>
                    <p style={{fontSize: '12px', color: '#1d4ed8', margin: 0}}>{doc.qualifications}</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px'}}>
                  <span style={{fontSize: '12px', background: '#f0fdf4', color: '#16a34a', padding: '3px 8px', borderRadius: '4px'}}>{doc.experience} yrs exp</span>
                  <span style={{fontSize: '12px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px'}}>{doc.speciality}</span>
                </div>
                <p style={{fontSize: '13px', color: '#374151', marginBottom: '16px'}}>🏥 {doc.hospital}</p>
                <div style={{display: 'flex', gap: '6px'}}>
                  <a href={'/doctors/' + doc.slug} style={{flex: 1, textAlign: 'center', background: '#1d4ed8', color: 'white', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600}}>View Profile</a>
                  <a href='/contact' style={{flex: 1, textAlign: 'center', background: '#f9fafb', color: '#374151', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', border: '1px solid #e5e7eb'}}>Book Consult</a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{background: '#0f1f35', borderRadius: '16px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Can't find the right surgeon in {city.name}?</h2>
          <p style={{color: '#93c5fd', marginBottom: '28px'}}>Talk to our care coordinator. We'll match you with the best surgeon for your condition in {city.name} within 30 minutes.</p>
          <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Get Free Surgeon Match</a>
        </div>
      </div>
    </div>
  )
}