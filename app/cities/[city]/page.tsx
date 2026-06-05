import { getDoctorsByCity } from '@/lib/doctors'
import { cities, getAllDiseases } from '@/lib/diseases'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }))
}

export async function generateMetadata(props: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await props.params
  const city = cities.find(c => c.slug === citySlug)
  if (!city) return {}
  return {
    title: 'Best Surgeons & Surgery in ' + city.name + ' 2026 — Free Consultation | MySurgery',
    description: 'Find top surgeons and best hospitals for surgery in ' + city.name + ', ' + city.state + '. Piles, hernia, knee replacement, cataract, MTP and more. Free consultation.',
    alternates: { canonical: '/cities/' + citySlug },
  }
}

export default async function CityPage(props: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await props.params
  const city = cities.find(c => c.slug === citySlug)
  if (!city) notFound()
  const doctors = getDoctorsByCity(citySlug)
  const allDiseases = getAllDiseases()
  const cityDiseases = allDiseases.filter(d => d.cities.includes(citySlug)).slice(0, 8)

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    name: 'MySurgery ' + city.name,
    description: 'MySurgery provides surgical care facilitation in ' + city.name + '.',
    url: 'https://mysurgery.in/cities/' + citySlug,
    telephone: '+91-8588967050',
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressRegion: city.state, addressCountry: 'IN' },
    areaServed: { '@type': 'City', name: city.name },
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <div style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)', padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px'}}>
            <a href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> &rsaquo; <a href='/cities' style={{color: '#6b7280', textDecoration: 'none'}}>Cities</a> &rsaquo; <span style={{color: '#1d4ed8'}}>{city.name}</span>
          </div>
          <h1 style={{fontSize: '38px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>Surgery in {city.name} — Expert Care, Zero Hassle</h1>
          <p style={{fontSize: '17px', color: '#4b5563', marginBottom: '32px'}}>MySurgery connects patients in {city.name}, {city.state} with top surgeons at NABH-accredited hospitals. Free consultation, insurance support, same-day discharge.</p>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href='https://wa.me/918588967050' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '48px 24px'}}>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Popular Surgeries in {city.name}</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px'}}>
            {cityDiseases.map(d => (
              <a key={d.slug} href={'/treatment/' + d.slug + '/cost-' + citySlug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px', textDecoration: 'none', display: 'block'}}>
                <p style={{fontWeight: 600, color: '#111827', margin: '0 0 4px', fontSize: '15px'}}>{d.name}</p>
                <p style={{fontSize: '14px', color: '#1d4ed8', fontWeight: 600, margin: '0 0 8px'}}>{d.costRange}</p>
                <p style={{fontSize: '12px', color: '#16a34a', margin: 0}}>{d.stayDuration} · {d.duration}</p>
              </a>
            ))}
          </div>
        </section>

        {doctors.length > 0 && (
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Top Surgeons in {city.name}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px'}}>
              {doctors.slice(0, 4).map(doc => (
                <div key={doc.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px'}}>
                  <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px'}}>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1d4ed8', fontSize: '18px', flexShrink: 0}}>
                      {doc.name.split(' ').slice(1,2).join('').charAt(0)}
                    </div>
                    <div>
                      <p style={{fontWeight: 700, color: '#111827', fontSize: '15px', margin: '0 0 2px'}}>{doc.name}</p>
                      <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 2px'}}>{doc.experience} yrs · {doc.speciality}</p>
                      <p style={{fontSize: '12px', color: '#374151', margin: 0}}>🏥 {doc.hospital}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '6px'}}>
                    <a href={'/doctors/' + doc.slug} style={{flex: 1, textAlign: 'center', background: '#eff6ff', color: '#1d4ed8', padding: '8px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 500}}>View Profile</a>
                    <a href='/contact' style={{flex: 1, textAlign: 'center', background: '#1d4ed8', color: 'white', padding: '8px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 600}}>Book Consult</a>
                  </div>
                </div>
              ))}
            </div>
            <a href={'/doctors/city/' + citySlug} style={{display: 'inline-block', marginTop: '16px', fontSize: '14px', color: '#1d4ed8', textDecoration: 'none', fontWeight: 500}}>View all doctors in {city.name} →</a>
          </section>
        )}

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Frequently Asked Questions</h2>
          {[
            ['How to find the best surgeon in ' + city.name + '?', 'MySurgery partners with NABH-accredited hospitals in ' + city.name + '. Call 8588967050 or fill the consultation form and our care coordinator will match you with the best surgeon for your condition.'],
            ['Does MySurgery help with insurance in ' + city.name + '?', 'Yes. MySurgery handles cashless pre-authorisation and claim filing at all partner hospitals in ' + city.name + ' at no extra charge.'],
            ['Is free consultation available in ' + city.name + '?', 'Yes. MySurgery offers free consultation in ' + city.name + '. Call 8588967050 or WhatsApp us. Callback within 30 minutes.'],
          ].map(([q, a], i) => (
            <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px 20px', marginBottom: '10px'}}>
              <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
            </div>
          ))}
        </section>

        <div style={{background: '#0f1f35', borderRadius: '16px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Free Consultation in {city.name}</h2>
          <p style={{color: '#93c5fd', marginBottom: '28px'}}>Talk to a specialist today. Callback within 30 minutes.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href='https://wa.me/918588967050' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}