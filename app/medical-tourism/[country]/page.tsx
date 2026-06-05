import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type CountryInfo = {
  name: string
  flag: string
  currency: string
  city: string
  language: string
  flight: string
  patients: string
  saving: string
  hospitals: string[]
  popular: string[]
  visa: string
  arabicSupport: boolean
  halalFood: boolean
}

const countryData: Record<string, CountryInfo> = {
  uae: { name: "UAE", flag: "🇦🇪", currency: "AED", city: "Dubai / Abu Dhabi", language: "Arabic, English", flight: "3-4 hours", patients: "12,000+", saving: "65%", hospitals: ["Medanta Gurugram", "Fortis Memorial Research Institute", "Apollo Hospitals Delhi", "Max Super Speciality Hospital"], popular: ["Knee Replacement", "Bypass Surgery", "Kidney Transplant", "Spine Surgery", "Cancer Treatment", "Liver Transplant"], visa: "Indian Medical Visa available at Indian Embassy Dubai and Abu Dhabi. Typically processed in 3-5 business days.", arabicSupport: true, halalFood: true },
  "saudi-arabia": { name: "Saudi Arabia", flag: "🇸🇦", currency: "SAR", city: "Riyadh / Jeddah", language: "Arabic, English", flight: "4-5 hours", patients: "9,500+", saving: "70%", hospitals: ["Medanta Gurugram", "Apollo Hospitals", "Fortis Hospital", "Narayana Health"], popular: ["Cancer Treatment", "Bypass Surgery", "Knee Replacement", "Liver Transplant", "Bariatric Surgery"], visa: "Indian Medical Visa available at Indian Embassy Riyadh and Consulate Jeddah. Processed in 3-7 business days.", arabicSupport: true, halalFood: true },
  oman: { name: "Oman", flag: "🇴🇲", currency: "OMR", city: "Muscat", language: "Arabic, English", flight: "3-4 hours", patients: "4,200+", saving: "68%", hospitals: ["Medanta Gurugram", "Apollo Hospitals", "Max Hospital", "Fortis Hospital"], popular: ["Kidney Transplant", "Knee Replacement", "Cardiac Surgery", "Spine Surgery", "Cancer Treatment"], visa: "Indian Medical Visa available at Indian Embassy Muscat. Processed in 3-5 business days.", arabicSupport: true, halalFood: true },
  kuwait: { name: "Kuwait", flag: "🇰🇼", currency: "KWD", city: "Kuwait City", language: "Arabic, English", flight: "4-5 hours", patients: "3,800+", saving: "72%", hospitals: ["Medanta", "Apollo Hospitals", "Fortis Hospital", "Max Hospital"], popular: ["Bypass Surgery", "Knee Replacement", "Cancer Treatment", "Bariatric Surgery", "Kidney Transplant"], visa: "Indian Medical Visa available at Indian Embassy Kuwait City. Processed in 3-5 business days.", arabicSupport: true, halalFood: true },
  bahrain: { name: "Bahrain", flag: "🇧🇭", currency: "BHD", city: "Manama", language: "Arabic, English", flight: "3-4 hours", patients: "2,600+", saving: "66%", hospitals: ["Medanta", "Fortis Hospital", "Apollo Hospitals", "Max Hospital"], popular: ["Knee Replacement", "Cardiac Surgery", "Spine Surgery", "Cancer Treatment", "Kidney Transplant"], visa: "Indian Medical Visa available at Indian Embassy Manama.", arabicSupport: true, halalFood: true },
  qatar: { name: "Qatar", flag: "🇶🇦", currency: "QAR", city: "Doha", language: "Arabic, English", flight: "4-5 hours", patients: "2,200+", saving: "63%", hospitals: ["Medanta", "Apollo Hospitals", "Fortis Hospital", "Kokilaben Hospital"], popular: ["Kidney Transplant", "Bypass Surgery", "Knee Replacement", "Liver Transplant", "Cancer Treatment"], visa: "Indian Medical Visa available at Indian Embassy Doha.", arabicSupport: true, halalFood: true },
  nigeria: { name: "Nigeria", flag: "��🇬", currency: "NGN", city: "Lagos / Abuja", language: "English", flight: "8-9 hours", patients: "8,000+", saving: "75%", hospitals: ["Apollo Hospitals", "Medanta", "Fortis Hospital", "Tata Memorial"], popular: ["Kidney Transplant", "Cancer Treatment", "Cardiac Surgery", "Spine Surgery", "Sickle Cell Treatment"], visa: "Indian Medical Visa available at Indian High Commission Lagos and Abuja.", arabicSupport: false, halalFood: true },
  kenya: { name: "Kenya", flag: "🇰🇪", currency: "KES", city: "Nairobi / Mombasa", language: "English, Swahili", flight: "6-7 hours", patients: "5,500+", saving: "72%", hospitals: ["Apollo Hospitals", "Medanta", "Fortis Hospital", "Narayana Health"], popular: ["Cancer Treatment", "Kidney Transplant", "Knee Replacement", "Bypass Surgery", "Liver Transplant"], visa: "Indian Medical Visa available at Indian High Commission Nairobi.", arabicSupport: false, halalFood: false },
  ethiopia: { name: "Ethiopia", flag: "🇪🇹", currency: "ETB", city: "Addis Ababa", language: "Amharic, English", flight: "6-7 hours", patients: "3,200+", saving: "78%", hospitals: ["Apollo Hospitals", "Medanta", "Fortis Hospital", "AIIMS Delhi"], popular: ["Cancer Treatment", "Cardiac Surgery", "Kidney Transplant", "Spine Surgery", "Bariatric Surgery"], visa: "Indian Medical Visa available at Indian Embassy Addis Ababa.", arabicSupport: false, halalFood: false },
  ghana: { name: "Ghana", flag: "🇬🇭", currency: "GHS", city: "Accra", language: "English", flight: "9-10 hours", patients: "2,800+", saving: "74%", hospitals: ["Apollo Hospitals", "Medanta", "Fortis Hospital", "Max Hospital"], popular: ["Kidney Transplant", "Cancer Treatment", "Bypass Surgery", "Knee Replacement"], visa: "Indian Medical Visa available at Indian High Commission Accra.", arabicSupport: false, halalFood: false },
  tanzania: { name: "Tanzania", flag: "🇹🇿", currency: "TZS", city: "Dar es Salaam", language: "Swahili, English", flight: "7-8 hours", patients: "2,400+", saving: "76%", hospitals: ["Apollo Hospitals", "Medanta", "Fortis Hospital", "Narayana Health"], popular: ["Cancer Treatment", "Kidney Transplant", "Cardiac Surgery", "Bariatric Surgery"], visa: "Indian Medical Visa available at Indian High Commission Dar es Salaam.", arabicSupport: false, halalFood: false },
  uganda: { name: "Uganda", flag: "🇺🇬", currency: "UGX", city: "Kampala", language: "English, Swahili", flight: "7-8 hours", patients: "1,900+", saving: "77%", hospitals: ["Apollo Hospitals", "Medanta", "Fortis Hospital", "AIIMS Delhi"], popular: ["Cancer Treatment", "Kidney Transplant", "Spine Surgery", "Cardiac Surgery"], visa: "Indian Medical Visa available at Indian High Commission Kampala.", arabicSupport: false, halalFood: false },
}

export async function generateStaticParams() {
  return Object.keys(countryData).map(country => ({ country }))
}

export async function generateMetadata(props: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await props.params
  const c = countryData[country]
  if (!c) return {}
  return {
    title: c.name + ' Patients — Surgery in India 2026 — Save ' + c.saving + ' | MySurgery',
    description: 'Complete guide for patients from ' + c.name + ' seeking treatment in India. Save up to ' + c.saving + ' on kidney transplant, bypass surgery, knee replacement and more. Free consultation.',
    alternates: { canonical: '/medical-tourism/' + country },
  }
}

export default async function CountryPage(props: { params: Promise<{ country: string }> }) {
  const { country } = await props.params
  const c = countryData[country]
  if (!c) notFound()

  const quickInfo: [string, string][] = [
    ['Flight Time', c.flight + ' to Delhi'],
    ['Patients Annually', c.patients],
    ['Cost Saving', 'Up to ' + c.saving],
    ['Language', c.language],
  ]
  if (c.halalFood) quickInfo.push(['Halal Food', 'Available at all hospitals'])
  if (c.arabicSupport) quickInfo.push(['Arabic Support', 'Available at partner hospitals'])

  const visaItems: [string, string][] = [
    ['Visa Type', 'Medical Visa (MV)'],
    ['Family', 'Up to 2 attendants on MX Visa'],
    ['Validity', 'Up to 1 year'],
    ['MySurgery Help', 'We provide invitation letter'],
  ]

  const whatsappMsg = 'Hi+I+am+from+' + c.name.replace(' ', '+') + '+looking+for+medical+treatment+in+India'

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', padding: '60px 24px 48px'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#93c5fd', marginBottom: '12px'}}>
            <a href='/' style={{color: '#93c5fd', textDecoration: 'none'}}>Home</a>
            {' › '}
            <a href='/medical-tourism' style={{color: '#93c5fd', textDecoration: 'none'}}>Medical Tourism</a>
            {' › '}
            <span>{c.name}</span>
          </div>
          <div style={{display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap'}}>
            <span style={{fontSize: '52px'}}>{c.flag}</span>
            <div>
              <h1 style={{fontSize: '34px', fontWeight: 700, color: 'white', margin: '0 0 6px', lineHeight: '1.2'}}>
                Medical Tourism from {c.name} to India
              </h1>
              <p style={{color: '#93c5fd', fontSize: '16px', margin: 0}}>
                Save up to {c.saving} &nbsp;·&nbsp; {c.patients} patients treated &nbsp;·&nbsp; {c.flight} flight
              </p>
            </div>
          </div>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>
              Get Free Treatment Plan
            </a>
            <a href={'https://wa.me/918588967050?text=' + whatsappMsg} target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 72px'}}>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px', marginBottom: '48px'}}>
          {quickInfo.map(([label, value]) => (
            <div key={label} style={{background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px'}}>
              <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 4px'}}>{label}</p>
              <p style={{fontSize: '14px', fontWeight: 600, color: '#111827', margin: 0}}>{value}</p>
            </div>
          ))}
        </div>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>
            Popular Treatments for Patients from {c.name}
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px'}}>
            {c.popular.map(treatment => (
              <div key={treatment} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', display: 'flex', gap: '10px', alignItems: 'center'}}>
                <span style={{color: '#1d4ed8', fontWeight: 700, fontSize: '16px'}}>✓</span>
                <span style={{fontSize: '14px', fontWeight: 500, color: '#111827'}}>{treatment}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>
            Recommended Hospitals
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px'}}>
            {c.hospitals.map(hospital => (
              <div key={hospital} style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px'}}>
                <p style={{fontWeight: 600, color: '#1e3a8a', margin: '0 0 4px', fontSize: '14px'}}>{hospital}</p>
                <p style={{fontSize: '12px', color: '#1d4ed8', margin: 0}}>JCI / NABH Accredited</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: '48px', background: '#fef3c7', borderRadius: '16px', padding: '28px'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#92400e', marginBottom: '12px'}}>
            Medical Visa for {c.name} Citizens
          </h2>
          <p style={{fontSize: '15px', color: '#78350f', lineHeight: '1.7', marginBottom: '16px'}}>{c.visa}</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px'}}>
            {visaItems.map(([label, value]) => (
              <div key={label} style={{background: 'white', borderRadius: '8px', padding: '12px'}}>
                <p style={{fontSize: '12px', color: '#92400e', margin: '0 0 2px'}}>{label}</p>
                <p style={{fontSize: '14px', fontWeight: 600, color: '#111827', margin: 0}}>{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>
            Frequently Asked Questions
          </h2>
          {[
            ['Is surgery in India safe for ' + c.name + ' patients?', 'Yes. India has 30+ JCI-accredited hospitals meeting the same international standards as hospitals in the UAE, UK, and USA. Over 500,000 international patients travel to India for treatment every year with an excellent safety record.'],
            ['How do I get started?', 'Send your medical reports to MySurgery via WhatsApp (+91 8588967050) or email (info.mysurgery@gmail.com). We will prepare a free treatment plan and cost estimate within 48 hours.'],
            ['How long will I need to stay in India?', 'Duration depends on the procedure. Knee or hip replacement: 10-14 days. Bypass surgery: 14-21 days. Kidney transplant: 4-6 weeks. Cancer treatment: depends on protocol. We advise on minimum required stay.'],
            ['Will I have language support in India?', 'Yes. Major hospitals have international patient departments with English-speaking staff and coordinators. MySurgery communicates in English and can arrange Arabic-language support for Middle East patients.'],
            ['Can MySurgery help with the Medical Visa invitation letter?', 'Yes. MySurgery provides the official hospital invitation letter required for your Medical Visa application at no charge.'],
          ].map(([q, a], i) => (
            <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px 20px', marginBottom: '10px'}}>
              <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
            </div>
          ))}
        </section>

        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>
            Ready to Travel from {c.name} for Treatment?
          </h2>
          <p style={{color: '#93c5fd', marginBottom: '28px', fontSize: '16px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: '1.6'}}>
            Free treatment plan, cost estimate in your currency, and Medical Visa invitation letter.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/contact' style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>
              Send Medical Reports — Free
            </a>
            <a href={'https://wa.me/918588967050?text=' + whatsappMsg} target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}