import { getAllDoctors } from '@/lib/doctors'
import { cities } from '@/lib/diseases'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Best Surgeons in Delhi, Gurugram, Noida — Doctor Directory | MySurgery',
  description: 'Find top surgeons and specialists in Delhi, Gurugram, Noida, Kochi, Mumbai and Bangalore. Verified profiles, experience, hospital affiliations, and free consultation.',
  alternates: { canonical: '/doctors' },
}

export default function DoctorsPage() {
  const doctors = getAllDoctors()
  const cityList = ['delhi', 'gurugram', 'noida', 'kochi', 'mumbai', 'bangalore']
  const specialities = [
    { slug: 'proctology', name: 'Proctology' },
    { slug: 'laparoscopy', name: 'Laparoscopy' },
    { slug: 'urology', name: 'Urology' },
    { slug: 'gynecology', name: 'Gynecology' },
    { slug: 'orthopaedics', name: 'Orthopaedics' },
    { slug: 'cataract', name: 'Ophthalmology' },
  ]

  const directorySchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'MySurgery Doctor Directory',
    description: 'Find top surgeons and specialists across India',
    url: 'https://mysurgery.in/doctors',
    medicalSpecialty: ['General Surgery', 'Urology', 'Gynecology', 'Orthopaedics', 'Ophthalmology'],
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(directorySchema) }} />

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', textAlign: 'center'}}>
          <h1 style={{fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '16px', letterSpacing: '-0.02em'}}>Find the Best Surgeon Near You</h1>
          <p style={{fontSize: '18px', color: '#93c5fd', marginBottom: '32px'}}>Verified profiles of top surgeons across Delhi, Gurugram, Noida, Kochi, Mumbai and Bangalore</p>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
            {cityList.map(c => {
              const city = cities.find(ct => ct.slug === c)
              if (!city) return null
              return (
                <a key={c} href={'/doctors/city/' + c} style={{background: 'rgba(255,255,255,0.15)', color: 'white', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.2)'}}>
                  {city.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '48px 24px'}}>

        {/* SPECIALITY FILTER */}
        <div style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '16px'}}>Browse by Speciality</h2>
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            {specialities.map(s => (
              <a key={s.slug} href={'/doctors/speciality/' + s.slug} style={{background: '#eff6ff', color: '#1d4ed8', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: 500, border: '1px solid #bfdbfe'}}>
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* DOCTOR CARDS */}
        <h2 style={{fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '24px'}}>All Doctors ({doctors.length})</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '48px'}}>
          {doctors.map(doc => (
            <div key={doc.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', position: 'relative'}}>
              {!doc.claimed && (
                <div style={{position: 'absolute', top: '16px', right: '16px', fontSize: '11px', background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '4px', fontWeight: 500}}>Unclaimed</div>
              )}
              <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1d4ed8', fontSize: '22px', flexShrink: 0}}>
                  {doc.name.split(' ').slice(1, 2).join('').charAt(0)}
                </div>
                <div>
                  <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 4px'}}>{doc.name}</h3>
                  <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>{doc.designation}</p>
                  <p style={{fontSize: '12px', color: '#1d4ed8', margin: 0, fontWeight: 500}}>{doc.qualifications}</p>
                </div>
              </div>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px'}}>
                <span style={{fontSize: '12px', background: '#f0fdf4', color: '#16a34a', padding: '3px 8px', borderRadius: '4px', fontWeight: 500}}>{doc.experience} yrs exp</span>
                <span style={{fontSize: '12px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px'}}>{doc.speciality}</span>
                <span style={{fontSize: '12px', background: '#f9fafb', color: '#374151', padding: '3px 8px', borderRadius: '4px'}}>{doc.city}</span>
              </div>
              <p style={{fontSize: '13px', color: '#374151', marginBottom: '4px'}}>
                <span style={{color: '#6b7280'}}>🏥 </span>{doc.hospital}
              </p>
              <div style={{display: 'flex', gap: '6px', marginTop: '16px'}}>
                <a href={'/doctors/' + doc.slug} style={{flex: 1, textAlign: 'center', background: '#1d4ed8', color: 'white', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600}}>View Profile</a>
                <a href='/contact' style={{flex: 1, textAlign: 'center', background: '#f9fafb', color: '#374151', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', border: '1px solid #e5e7eb'}}>Book Consult</a>
              </div>
              {!doc.claimed && (
                <a href={'/doctors/claim/' + doc.slug} style={{display: 'block', textAlign: 'center', marginTop: '8px', fontSize: '12px', color: '#1d4ed8', textDecoration: 'none'}}>Are you this doctor? Claim your profile →</a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{background: '#0f1f35', borderRadius: '16px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Are you a surgeon or specialist?</h2>
          <p style={{color: '#93c5fd', marginBottom: '32px', fontSize: '16px'}}>Claim your free profile on MySurgery. Reach thousands of patients looking for expert surgeons in your city.</p>
          <a href='/doctors/claim' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Claim Your Profile — Free</a>
        </div>
      </div>
    </div>
  )
}