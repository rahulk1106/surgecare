import { getDoctorBySlug, getAllDoctorSlugs } from '@/lib/doctors'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Deterministic "random" numbers seeded by doctor slug for consistent SSR/CSR
function getSocialProof(slug: string) {
  let hash = 0
  for (let i = 0; i < slug.length; i++) { hash = (hash * 31 + slug.charCodeAt(i)) & 0xffffffff }
  const abs = Math.abs(hash)
  const opd = 3 + (abs % 9)           // 3-11 OPD bookings today
  const looking = 12 + (abs % 23)     // 12-34 patients looking
  const exp = ['today','this morning','in last 2 hrs']
  const expLabel = exp[abs % 3]
  return { opd, looking, expLabel }
}

export async function generateStaticParams() {
  return getAllDoctorSlugs().map(slug => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const doc = getDoctorBySlug(slug)
  if (!doc) return {}
  return {
    title: doc.name + ' — ' + doc.speciality + ' in ' + doc.city + ' | MySurgery',
    description: doc.name + ' is a ' + doc.speciality + ' specialist at ' + doc.hospital + ' with ' + doc.experience + ' years of experience. Book a free consultation through MySurgery.',
    alternates: { canonical: '/doctors/' + slug },
  }
}

export default async function DoctorPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const doc = getDoctorBySlug(slug)
  if (!doc) notFound()
  const d = doc!

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: d.name,
    description: d.about,
    medicalSpecialty: d.speciality,
    hasCredential: d.qualifications,
    worksFor: { '@type': 'Hospital', name: d.hospital },
    addressLocality: d.city,
    addressCountry: 'IN',
    url: 'https://mysurgery.in/doctors/' + slug,
    sameAs: d.sourceUrl,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Where does ' + d.name + ' practice?', acceptedAnswer: { '@type': 'Answer', text: d.name + ' practices at ' + d.hospital + ' in ' + d.city + '.' } },
      { '@type': 'Question', name: 'What is ' + d.name + "'s experience?", acceptedAnswer: { '@type': 'Answer', text: d.name + ' has ' + d.experience + ' years of experience in ' + d.speciality + '.' } },
      { '@type': 'Question', name: 'How to book an appointment with ' + d.name + '?', acceptedAnswer: { '@type': 'Answer', text: 'You can book a free consultation with ' + d.name + ' through MySurgery. Call 8588807050 or fill the consultation form.' } },
    ],
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f1fb 100%)', padding: '48px 24px'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#6b7280', marginBottom: '16px'}}>
            <a href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> &rsaquo; <a href='/doctors' style={{color: '#6b7280', textDecoration: 'none'}}>Doctors</a> &rsaquo; <span style={{color: '#1d4ed8'}}>{d.name}</span>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center'}}>
            <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
              <div style={{width: '96px', height: '96px', borderRadius: '50%', background: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '36px', flexShrink: 0}}>
                {d.name.split(' ').slice(1, 2).join('').charAt(0)}
              </div>
              <div>
                <h1 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', margin: '0 0 6px'}}>{d.name}</h1>
                <p style={{fontSize: '15px', color: '#4b5563', margin: '0 0 6px'}}>{d.designation}</p>
                <p style={{fontSize: '13px', color: '#1d4ed8', fontWeight: 500, margin: '0 0 12px'}}>{d.qualifications}</p>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                  <span style={{fontSize: '12px', background: '#f0fdf4', color: '#16a34a', padding: '4px 10px', borderRadius: '4px', fontWeight: 500}}>{d.experience} yrs experience</span>
                  <span style={{fontSize: '12px', background: '#eff6ff', color: '#1d4ed8', padding: '4px 10px', borderRadius: '4px'}}>{d.speciality}</span>
                  <span style={{fontSize: '12px', background: '#f9fafb', color: '#374151', padding: '4px 10px', borderRadius: '4px'}}>{d.city}</span>
                </div>
              </div>
            </div>
            <div style={{background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
              <p style={{fontSize: '14px', color: '#6b7280', margin: '0 0 4px'}}>Currently at</p>
              <p style={{fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 16px'}}>🏥 {d.hospital}</p>
              <a href='/contact' style={{display: 'block', background: '#1d4ed8', color: 'white', textAlign: 'center', fontWeight: 600, padding: '13px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', marginBottom: '10px'}}>Book Free Consultation</a>
              <a href='https://wa.me/918588807050' target='_blank' rel='noopener noreferrer' style={{display: 'block', background: '#22c55e', color: 'white', textAlign: 'center', fontWeight: 600, padding: '13px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', marginBottom: '10px'}}>WhatsApp Us</a>
              <a href='tel:+918588807050' style={{display: 'block', background: 'white', border: '1px solid #e5e7eb', color: '#374151', textAlign: 'center', fontWeight: 500, padding: '11px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>📞 8588807050</a>
              {!d.claimed && (
                <a href={'/doctors/claim/' + slug} style={{display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '12px', color: '#1d4ed8', textDecoration: 'none'}}>Are you {d.name}? Claim this profile →</a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start'}}>
          <div>

            <section style={{marginBottom: '36px'}}>
              <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>About {d.name}</h2>
              <p style={{fontSize: '15px', color: '#4b5563', lineHeight: '1.8'}}>{d.about}</p>
            </section>

            <section style={{marginBottom: '36px'}}>
              <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>Areas of Expertise</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px'}}>
                {d.expertise.map(e => (
                  <div key={e} style={{display: 'flex', alignItems: 'center', gap: '10px', background: '#f9fafb', borderRadius: '8px', padding: '12px 14px', border: '1px solid #e5e7eb'}}>
                    <span style={{color: '#1d4ed8', fontWeight: 700, fontSize: '16px'}}>✓</span>
                    <span style={{fontSize: '14px', color: '#374151'}}>{e}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{marginBottom: '36px'}}>
              <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>Qualifications & Experience</h2>
              <div style={{background: '#f9fafb', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb'}}>
                {[['Qualifications', d.qualifications], ['Experience', d.experience + ' years'], ['Speciality', d.speciality], ['Hospital', d.hospital], ['City', d.city], ['Languages', d.languages.join(', ')]].map(([label, value]) => (
                  <div key={label} style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e5e7eb'}}>
                    <span style={{fontSize: '14px', color: '#6b7280'}}>{label}</span>
                    <span style={{fontSize: '14px', fontWeight: 500, color: '#111827', textAlign: 'right', maxWidth: '60%'}}>{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{marginBottom: '36px'}}>
              <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>Frequently Asked Questions</h2>
              {[
                ['Where does ' + d.name + ' practice?', d.name + ' practices at ' + d.hospital + ' in ' + d.city + '.'],
                ['How many years of experience does ' + d.name + ' have?', d.name + ' has ' + d.experience + ' years of experience in ' + d.speciality + '.'],
                ['How to book an appointment with ' + d.name + '?', 'Call MySurgery at 8588807050 or fill the free consultation form. We will connect you with ' + d.name + ' at ' + d.hospital + '.'],
                ['Does ' + d.name + ' offer teleconsultation?', 'Yes. MySurgery facilitates teleconsultation with ' + d.name + '. Fill the consultation form and our care coordinator will arrange it.'],
              ].map(([q, a], i) => (
                <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px 20px', marginBottom: '10px'}}>
                  <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
                  <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
                </div>
              ))}
            </section>

            <div style={{background: '#fef3c7', borderRadius: '12px', padding: '16px 20px', fontSize: '13px', color: '#92400e'}}>
              <strong>Disclaimer:</strong> This profile is based on publicly available information. MySurgery is not affiliated with {d.name} unless the profile has been claimed. Patients are advised to verify doctor credentials independently.
              {' '}<a href={d.sourceUrl} target='_blank' rel='noopener noreferrer' style={{color: '#92400e'}}>View original source →</a>
            </div>
          </div>

          <div style={{position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', marginBottom: '16px'}}>
              <p style={{fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '12px'}}>Book via MySurgery</p>
              <a href='/contact' style={{display: 'block', background: '#1d4ed8', color: 'white', textAlign: 'center', fontWeight: 600, padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', marginBottom: '8px'}}>Free Consultation</a>
              <a href='https://wa.me/918588807050' target='_blank' rel='noopener noreferrer' style={{display: 'block', background: '#22c55e', color: 'white', textAlign: 'center', fontWeight: 600, padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', marginBottom: '8px'}}>WhatsApp</a>
              <a href='tel:+918588807050' style={{display: 'block', background: 'white', border: '1px solid #e5e7eb', color: '#374151', textAlign: 'center', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px'}}>📞 8588807050</a>
            </div>
            <div style={{background: '#f9fafb', borderRadius: '12px', padding: '16px'}}>
              {[['10,000+', 'Patients helped'], ['30 min', 'Callback time'], ['Free', 'Consultation']].map(([n, l]) => (
                <div key={l} style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0'}}>
                  <span style={{fontWeight: 700, color: '#1d4ed8', fontSize: '16px', minWidth: '60px'}}>{n}</span>
                  <span style={{fontSize: '13px', color: '#6b7280'}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}