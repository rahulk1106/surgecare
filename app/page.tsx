import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'World-Class Surgery in India — Save 60-90% | MySurgery',
  description: 'World-class surgery in India at 60-80% lower cost than UAE, Saudi Arabia, UK, USA. Kidney transplant, knee replacement, bypass surgery, cancer treatment. Free consultation for international patients.',
  alternates: { canonical: '/' },
  keywords: 'medical tourism india, surgery india international patients, kidney transplant india cost, knee replacement india, bypass surgery india, medical visa india, best hospitals india international patients',
}

const countries = [
  { slug: 'uae', name: 'UAE', flag: '🇦🇪', region: 'Middle East', patients: '12,000+', saving: '65%', currency: 'AED', popular: ['Knee Replacement', 'Bypass Surgery', 'Kidney Transplant', 'Spine Surgery'] },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East', patients: '9,500+', saving: '70%', currency: 'SAR', popular: ['Cancer Treatment', 'Bypass Surgery', 'Knee Replacement', 'Liver Transplant'] },
  { slug: 'oman', name: 'Oman', flag: '🇴🇲', region: 'Middle East', patients: '4,200+', saving: '68%', currency: 'OMR', popular: ['Kidney Transplant', 'Knee Replacement', 'Cardiac Surgery', 'Spine Surgery'] },
  { slug: 'kuwait', name: 'Kuwait', flag: '🇰🇼', region: 'Middle East', patients: '3,800+', saving: '72%', currency: 'KWD', popular: ['Bypass Surgery', 'Knee Replacement', 'Cancer Treatment', 'Bariatric Surgery'] },
  { slug: 'bahrain', name: 'Bahrain', flag: '🇧🇭', region: 'Middle East', patients: '2,600+', saving: '66%', currency: 'BHD', popular: ['Knee Replacement', 'Cardiac Surgery', 'Spine Surgery', 'Cancer Treatment'] },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', region: 'Middle East', patients: '2,200+', saving: '63%', currency: 'QAR', popular: ['Kidney Transplant', 'Bypass Surgery', 'Knee Replacement', 'Liver Transplant'] },
  { slug: 'nigeria', name: 'Nigeria', flag: '🇳🇬', region: 'Africa', patients: '8,000+', saving: '75%', currency: 'NGN', popular: ['Kidney Transplant', 'Cancer Treatment', 'Cardiac Surgery', 'Spine Surgery'] },
  { slug: 'kenya', name: 'Kenya', flag: '🇰🇪', region: 'Africa', patients: '5,500+', saving: '72%', currency: 'KES', popular: ['Cancer Treatment', 'Kidney Transplant', 'Knee Replacement', 'Bypass Surgery'] },
  { slug: 'ethiopia', name: 'Ethiopia', flag: '🇪🇹', region: 'Africa', patients: '3,200+', saving: '78%', currency: 'ETB', popular: ['Cancer Treatment', 'Cardiac Surgery', 'Kidney Transplant', 'Spine Surgery'] },
  { slug: 'ghana', name: 'Ghana', flag: '🇬🇭', region: 'Africa', patients: '2,800+', saving: '74%', currency: 'GHS', popular: ['Kidney Transplant', 'Cancer Treatment', 'Bypass Surgery', 'Knee Replacement'] },
  { slug: 'tanzania', name: 'Tanzania', flag: '🇹🇿', region: 'Africa', patients: '2,400+', saving: '76%', currency: 'TZS', popular: ['Cancer Treatment', 'Kidney Transplant', 'Cardiac Surgery', 'Bariatric Surgery'] },
  { slug: 'uganda', name: 'Uganda', flag: '🇺🇬', region: 'Africa', patients: '1,900+', saving: '77%', currency: 'UGX', popular: ['Cancer Treatment', 'Kidney Transplant', 'Spine Surgery', 'Cardiac Surgery'] },
]

const treatments = [
  {
    name: 'Kidney Transplant',
    icon: '🫘',
    indiaMin: 7,
    indiaMax: 15,
    indiaUnit: 'Lakh',
    uaeMin: 50,
    uaeMax: 90,
    ukMin: 200,
    ukMax: 300,
    usaMin: 300,
    usaMax: 500,
    saving: '75-85%',
    successRate: '95%+',
    stay: '4-6 weeks',
    hospitals: ['Fortis Memorial Research Institute', 'Apollo Hospitals Delhi', 'Medanta The Medicity', 'Max Hospital'],
    about: 'India is one of the world best destinations for kidney transplant surgery, offering NABH-accredited hospitals with experienced transplant teams and 24x7 post-operative care at a fraction of the cost in the West or Middle East.',
  },
  {
    name: 'Bypass Surgery (CABG)',
    icon: '❤️',
    indiaMin: 2.5,
    indiaMax: 5,
    indiaUnit: 'Lakh',
    uaeMin: 20,
    uaeMax: 40,
    ukMin: 30,
    ukMax: 60,
    usaMin: 70,
    usaMax: 120,
    saving: '80-90%',
    successRate: '98%+',
    stay: '10-14 days',
    hospitals: ['Escorts Heart Institute Delhi', 'Apollo Hospitals', 'Narayana Health Bangalore', 'Medanta'],
    about: 'India has performed over 100,000 bypass surgeries annually with success rates matching the best cardiac centres in the world. Narayana Health performs more cardiac surgeries than most hospitals globally.',
  },
  {
    name: 'Knee Replacement',
    icon: '🦵',
    indiaMin: 1.5,
    indiaMax: 3.5,
    indiaUnit: 'Lakh',
    uaeMin: 12,
    uaeMax: 25,
    ukMin: 15,
    ukMax: 25,
    usaMin: 30,
    usaMax: 60,
    saving: '70-80%',
    successRate: '97%+',
    stay: '7-10 days',
    hospitals: ['Medanta Gurugram', 'Max Hospital Delhi', 'Fortis Hospital', 'Apollo Hospitals'],
    about: 'India performs over 200,000 knee replacements annually. Robotic-assisted knee replacement using Mako and other systems is available at top centres at costs 70-80% lower than the UAE or UK.',
  },
  {
    name: 'Hip Replacement',
    icon: '🦴',
    indiaMin: 1.5,
    indiaMax: 3,
    indiaUnit: 'Lakh',
    uaeMin: 14,
    uaeMax: 28,
    ukMin: 14,
    ukMax: 22,
    usaMin: 35,
    usaMax: 65,
    saving: '70-80%',
    successRate: '97%+',
    stay: '7-10 days',
    hospitals: ['Medanta', 'Max Hospital', 'Apollo Hospitals', 'Fortis Hospital'],
    about: 'Total and partial hip replacement at world-class centres in India using international-standard implants from Zimmer, Stryker, and DePuy at 70-80% lower cost than the West.',
  },
  {
    name: 'Liver Transplant',
    icon: '🫀',
    indiaMin: 20,
    indiaMax: 35,
    indiaUnit: 'Lakh',
    uaeMin: 100,
    uaeMax: 200,
    ukMin: 100,
    ukMax: 150,
    usaMin: 200,
    usaMax: 400,
    saving: '75-85%',
    successRate: '90%+',
    stay: '4-6 weeks',
    hospitals: ['Medanta Gurugram', 'Apollo Hospitals', 'Global Hospital Mumbai', 'Fortis Hospital'],
    about: 'India has some of Asia most experienced liver transplant teams. Medanta Gurugram performs over 600 liver transplants annually — one of the highest volumes in Asia.',
  },
  {
    name: 'Cancer Treatment',
    icon: '🔬',
    indiaMin: 3,
    indiaMax: 20,
    indiaUnit: 'Lakh',
    uaeMin: 30,
    uaeMax: 100,
    ukMin: 50,
    ukMax: 150,
    usaMin: 100,
    usaMax: 500,
    saving: '70-90%',
    successRate: 'Varies by type',
    stay: '4-8 weeks',
    hospitals: ['Tata Memorial Mumbai', 'Apollo Cancer Centre', 'Rajiv Gandhi Cancer Institute', 'HCG Bangalore'],
    about: 'India has internationally accredited cancer centres offering chemotherapy, radiation, immunotherapy, targeted therapy, and cancer surgery at 70-90% lower costs than the West or Middle East.',
  },
  {
    name: 'Spine Surgery',
    icon: '🦷',
    indiaMin: 2,
    indiaMax: 8,
    indiaUnit: 'Lakh',
    uaeMin: 20,
    uaeMax: 50,
    ukMin: 20,
    ukMax: 40,
    usaMin: 50,
    usaMax: 150,
    saving: '70-85%',
    successRate: '95%+',
    stay: '10-14 days',
    hospitals: ['Medanta', 'Max Hospital', 'Apollo Hospitals', 'Kokilaben Hospital Mumbai'],
    about: 'Minimally invasive spine surgery, disc replacement, spinal fusion, and deformity correction by internationally trained neurosurgeons and orthopedic spine specialists.',
  },
  {
    name: 'Bariatric Surgery',
    icon: '⚕️',
    indiaMin: 2.5,
    indiaMax: 5,
    indiaUnit: 'Lakh',
    uaeMin: 15,
    uaeMax: 30,
    ukMin: 10,
    ukMax: 20,
    usaMin: 20,
    usaMax: 50,
    saving: '70-80%',
    successRate: '98%+',
    stay: '5-7 days',
    hospitals: ['Apollo Hospitals', 'Fortis Hospital', 'Medanta', 'Max Hospital'],
    about: 'Laparoscopic sleeve gastrectomy, gastric bypass, and mini-gastric bypass for weight loss at internationally accredited centres with comprehensive pre and post-operative care.',
  },
]

const whyIndia = [
  { icon: '💰', title: '60-90% Cost Savings', desc: 'Same quality surgery at a fraction of the cost in UAE, Saudi Arabia, UK, or USA. Even after flights and accommodation, total savings are substantial.' },
  { icon: '🏥', title: 'World-Class Hospitals', desc: 'India has 30+ JCI-accredited hospitals and 700+ NABH-accredited hospitals — the same international standards as the best hospitals in the world.' },
  { icon: '👨‍⚕️', title: 'Western-Trained Surgeons', desc: 'Most senior Indian surgeons trained at leading institutions in the UK, USA, or Germany. Many have worked at Mayo Clinic, Cleveland Clinic, and Johns Hopkins.' },
  { icon: '🌐', title: 'English-Speaking', desc: 'India is one of the largest English-speaking countries in the world. All major hospitals have dedicated international patient services with interpreters for Arabic, Swahili, and other languages.' },
  { icon: '✈️', title: 'Easy Connectivity', desc: 'Direct flights from Dubai (3 hrs), Nairobi (6 hrs), Lagos (8 hrs), Riyadh (4 hrs). All major Indian cities are well connected internationally.' },
  { icon: '🛂', title: 'Medical Visa', desc: 'India offers a dedicated Medical Visa (MV) for patients and Medical Attendant Visa for 2 accompanying family members. Processed in 3-5 days for most countries.' },
  { icon: '📋', title: 'No Waiting Lists', desc: 'Unlike the UK NHS or Canadian healthcare, there are no waiting lists for surgery in India. Most procedures can be scheduled within 1-2 weeks.' },
  { icon: '🙏', title: 'Cultural Sensitivity', desc: 'Indian hospitals are experienced with patients from Muslim-majority countries in the Middle East and Africa. Halal food, prayer facilities, and female doctors available on request.' },
]

const process = [
  { step: '01', title: 'Send Medical Records', desc: 'Share your medical reports, scans, and history with MySurgery. We will get a treatment plan and cost estimate from the right specialist within 48 hours.' },
  { step: '02', title: 'Get Treatment Plan & Quote', desc: 'Receive a detailed treatment plan with exact costs, hospital options, surgeon profiles, and expected timeline from our medical team.' },
  { step: '03', title: 'Apply for Medical Visa', desc: 'We provide a detailed invitation letter and help you apply for an Indian Medical Visa. Most applications are approved in 3-5 business days.' },
  { step: '04', title: 'Travel and Arrive', desc: 'Our team picks you up from the airport, takes you to your hotel, and accompanies you for all hospital appointments. 24/7 support throughout your stay.' },
  { step: '05', title: 'Treatment and Recovery', desc: 'Receive world-class treatment at your chosen hospital. Our care coordinator stays with you throughout your hospital stay and manages all documentation.' },
  { step: '06', title: 'Return Home with Follow-Up', desc: 'We provide all discharge documents, follow-up instructions, and maintain telemedicine contact with your treating doctor for 6 months after your return.' },
]

export default function MedicalTourismPage() {
  const middleEast = countries.filter(c => c.region === 'Middle East')
  const africa = countries.filter(c => c.region === 'Africa')

  const tourismSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'MySurgery Medical Tourism',
    description: 'World-class surgery in India for international patients from Middle East and Africa',
    url: 'https://www.mysurgery.in/medical-tourism',
    telephone: '+918588967050',
    email: 'info.mysurgery@gmail.com',
    areaServed: ['AE', 'SA', 'OM', 'KW', 'BH', 'QA', 'NG', 'KE', 'ET', 'GH', 'TZ', 'UG'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Surgical Procedures for International Patients',
      itemListElement: treatments.map(t => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'MedicalProcedure', name: t.name },
      }))
    }
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(tourismSchema) }} />

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1a3a5c 50%, #0f1f35 100%)', padding: '72px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(29,78,216,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(29,78,216,0.2) 0%, transparent 50%)'}} />
        <div style={{position: 'relative', maxWidth: '900px', margin: '0 auto'}}>
          <div style={{display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '6px 16px', marginBottom: '20px'}}>
            <span style={{fontSize: '13px', color: '#93c5fd', fontWeight: 500}}>🌍 Trusted by patients from 40+ countries</span>
          </div>
          <h1 style={{fontSize: '48px', fontWeight: 700, color: 'white', lineHeight: '1.15', marginBottom: '20px', letterSpacing: '-0.02em'}}>
            World-Class Surgery in India<br /><span style={{color: '#60a5fa'}}>Save 60–90% vs UAE, UK & USA</span>
          </h1>
          <p style={{fontSize: '19px', color: '#93c5fd', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.65'}}>
            JCI-accredited hospitals. Western-trained surgeons. No waiting lists. Comprehensive care for patients from the Middle East and Africa.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px'}}>
            <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px'}}>Get Free Treatment Plan</a>
            <a href='https://wa.me/918588967050?text=Hi+I+am+an+international+patient+looking+for+treatment+in+India' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px'}}>WhatsApp Us</a>
          </div>
          <div style={{display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap'}}>
            {[['50,000+', 'International Patients'], ['40+', 'Countries Served'], ['98%', 'Satisfaction Rate'], ['48 hrs', 'Treatment Plan']].map(([n, l]) => (
              <div key={l} style={{textAlign: 'center'}}>
                <p style={{fontSize: '28px', fontWeight: 700, color: 'white', margin: '0 0 4px'}}>{n}</p>
                <p style={{fontSize: '13px', color: '#93c5fd', margin: 0}}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>

        {/* WHY INDIA */}
        <section style={{padding: '72px 0 48px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Why Choose India</p>
            <h2 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>Why 50,000+ Patients Choose India Every Year</h2>
            <p style={{fontSize: '17px', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>India combines world-class medical expertise with costs that are 60-90% lower than Western countries or the Middle East.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px'}}>
            {whyIndia.map(item => (
              <div key={item.title} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px'}}>
                <span style={{fontSize: '32px', display: 'block', marginBottom: '12px'}}>{item.icon}</span>
                <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '8px'}}>{item.title}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.65', margin: 0}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW GUIDES */}
        <section style={{padding: '0 0 48px'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>New Guides</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px'}}>
            {[
              { href: '/glp1', icon: '💊', title: 'GLP-1 Weight Loss Drugs in India 2026', desc: 'Ozempic, Wegovy, Mounjaro and 20+ Indian generics — costs from ₹325/week, eligibility, and what patients need to know.' },
              { href: '/blog/kidney-transplant-india-nigerian-patients', icon: '🫘', title: 'Kidney Transplant in India: Guide for Nigerian Patients', desc: 'Costs, top hospitals, legal requirements, and how to plan your kidney transplant in India from Nigeria.' },
              { href: '/blog/bypass-surgery-insurance-india-2026', icon: '❤️', title: 'Does Insurance Cover Bypass Surgery in India? (2026)', desc: 'What Indian and international health insurance covers for CABG surgery in 2026 — and how to claim it.' },
            ].map(g => (
              <a key={g.href} href={g.href} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '22px', textDecoration: 'none', display: 'block'}}>
                <span style={{fontSize: '28px', display: 'block', marginBottom: '10px'}}>{g.icon}</span>
                <h3 style={{fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '8px', lineHeight: '1.4'}}>{g.title}</h3>
                <p style={{fontSize: '13px', color: '#6b7280', lineHeight: '1.65', margin: '0 0 12px'}}>{g.desc}</p>
                <span style={{fontSize: '13px', color: '#1d4ed8', fontWeight: 600}}>Read guide →</span>
              </a>
            ))}
          </div>
        </section>

        {/* TREATMENTS COST COMPARISON */}
        <section style={{padding: '48px 0'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Cost Comparison</p>
            <h2 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>Treatment Costs — India vs UAE vs UK vs USA</h2>
            <p style={{fontSize: '16px', color: '#6b7280'}}>All costs in USD equivalent. India costs include hospital stay, surgery, and basic aftercare.</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {treatments.map(t => (
              <div key={t.name} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '28px', overflow: 'hidden'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start', marginBottom: '20px'}}>
                  <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                    <span style={{fontSize: '36px', flexShrink: 0}}>{t.icon}</span>
                    <div>
                      <h3 style={{fontSize: '20px', fontWeight: 700, color: '#111827', margin: '0 0 4px'}}>{t.name}</h3>
                      <p style={{fontSize: '14px', color: '#4b5563', margin: '0 0 4px', lineHeight: '1.5'}}>{t.about}</p>
                      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '8px'}}>
                        <span style={{fontSize: '12px', background: '#f0fdf4', color: '#16a34a', padding: '3px 10px', borderRadius: '4px', fontWeight: 500}}>✓ {t.successRate} Success Rate</span>
                        <span style={{fontSize: '12px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 10px', borderRadius: '4px'}}>Stay: {t.stay}</span>
                        <span style={{fontSize: '12px', background: '#fef3c7', color: '#92400e', padding: '3px 10px', borderRadius: '4px', fontWeight: 600}}>Save {t.saving}</span>
                      </div>
                    </div>
                  </div>
                  <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', whiteSpace: 'nowrap', flexShrink: 0}}>Get Quote</a>
                </div>
                <div style={{overflowX: 'auto'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '500px'}}>
                    <thead>
                      <tr>
                        {['Country', 'Approx Cost (USD)', 'Savings vs India', 'Notes'].map(h => (
                          <th key={h} style={{textAlign: 'left', padding: '10px 14px', background: '#f9fafb', fontWeight: 600, color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em'}}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { country: '🇮🇳 India', cost: `$${(t.indiaMin * 1200).toLocaleString()} – $${(t.indiaMax * 1200).toLocaleString()}`, saving: '—', note: 'Includes surgery, hospital stay, basic aftercare', highlight: true },
                        { country: '🇦🇪 UAE', cost: `$${(t.uaeMin * 1000).toLocaleString()} – $${(t.uaeMax * 1000).toLocaleString()}`, saving: `${t.saving} cheaper in India`, note: 'Private hospitals in Dubai/Abu Dhabi', highlight: false },
                        { country: '🇬🇧 UK', cost: `$${(t.ukMin * 1000).toLocaleString()} – $${(t.ukMax * 1000).toLocaleString()}`, saving: `${t.saving} cheaper in India`, note: 'Private hospitals; NHS has long waiting lists', highlight: false },
                        { country: '🇺🇸 USA', cost: `$${(t.usaMin * 1000).toLocaleString()} – $${(t.usaMax * 1000).toLocaleString()}`, saving: `${t.saving} cheaper in India`, note: 'Even with insurance out-of-pocket costs are high', highlight: false },
                      ].map((row, i) => (
                        <tr key={i} style={{background: row.highlight ? '#eff6ff' : i % 2 === 0 ? 'white' : '#f9fafb'}}>
                          <td style={{padding: '12px 14px', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? '#1d4ed8' : '#374151', borderBottom: '1px solid #f3f4f6'}}>{row.country}</td>
                          <td style={{padding: '12px 14px', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? '#1d4ed8' : '#374151', borderBottom: '1px solid #f3f4f6'}}>{row.cost}</td>
                          <td style={{padding: '12px 14px', color: row.highlight ? '#6b7280' : '#16a34a', fontWeight: row.highlight ? 400 : 500, borderBottom: '1px solid #f3f4f6'}}>{row.saving}</td>
                          <td style={{padding: '12px 14px', color: '#6b7280', fontSize: '13px', borderBottom: '1px solid #f3f4f6'}}>{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{marginTop: '14px'}}>
                  <p style={{fontSize: '12px', fontWeight: 600, color: '#374151', margin: '0 0 6px'}}>Top hospitals for {t.name} in India:</p>
                  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                    {t.hospitals.map(h => (
                      <span key={h} style={{fontSize: '12px', background: '#f3f4f6', color: '#374151', padding: '4px 10px', borderRadius: '4px'}}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MIDDLE EAST COUNTRIES */}
        <section style={{padding: '48px 0'}}>
          <div style={{textAlign: 'center', marginBottom: '36px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Middle East</p>
            <h2 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35'}}>Patients from the Middle East</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '48px'}}>
            {middleEast.map(country => (
              <a key={country.slug} href={'/medical-tourism/' + country.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '22px', textDecoration: 'none', display: 'block'}}>
                <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px'}}>
                  <span style={{fontSize: '32px'}}>{country.flag}</span>
                  <div>
                    <p style={{fontWeight: 700, color: '#111827', fontSize: '17px', margin: '0 0 2px'}}>{country.name}</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>{country.patients} patients treated in India</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px'}}>
                  <span style={{fontSize: '12px', background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '4px', fontWeight: 600}}>Save up to {country.saving}</span>
                </div>
                <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 6px'}}>Popular treatments:</p>
                <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                  {country.popular.map(p => <span key={p} style={{fontSize: '11px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 7px', borderRadius: '4px'}}>{p}</span>)}
                </div>
                <p style={{fontSize: '13px', color: '#1d4ed8', fontWeight: 500, margin: '14px 0 0'}}>View guide for {country.name} patients →</p>
              </a>
            ))}
          </div>

          {/* AFRICA COUNTRIES */}
          <div style={{textAlign: 'center', marginBottom: '36px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Africa</p>
            <h2 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35'}}>Patients from Africa</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px'}}>
            {africa.map(country => (
              <a key={country.slug} href={'/medical-tourism/' + country.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '22px', textDecoration: 'none', display: 'block'}}>
                <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px'}}>
                  <span style={{fontSize: '32px'}}>{country.flag}</span>
                  <div>
                    <p style={{fontWeight: 700, color: '#111827', fontSize: '17px', margin: '0 0 2px'}}>{country.name}</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>{country.patients} patients treated in India</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px'}}>
                  <span style={{fontSize: '12px', background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '4px', fontWeight: 600}}>Save up to {country.saving}</span>
                </div>
                <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 6px'}}>Popular treatments:</p>
                <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                  {country.popular.map(p => <span key={p} style={{fontSize: '11px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 7px', borderRadius: '4px'}}>{p}</span>)}
                </div>
                <p style={{fontSize: '13px', color: '#1d4ed8', fontWeight: 500, margin: '14px 0 0'}}>View guide for {country.name} patients →</p>
              </a>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{padding: '48px 40px', background: '#f9fafb', borderRadius: '24px', marginBottom: '48px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Simple Process</p>
            <h2 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35'}}>How MySurgery Helps International Patients</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'}}>
            {process.map(step => (
              <div key={step.step} style={{background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid #e5e7eb'}}>
                <div style={{width: '44px', height: '44px', background: '#1d4ed8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px'}}>
                  <span style={{fontSize: '16px', fontWeight: 700, color: 'white'}}>{step.step}</span>
                </div>
                <h3 style={{fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '8px'}}>{step.title}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.65', margin: 0}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MEDICAL VISA */}
        <section style={{padding: '48px 0'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center'}}>
            <div>
              <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Medical Visa India</p>
              <h2 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>Indian Medical Visa — Everything You Need to Know</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {[
                  ['Who can apply?', 'Anyone seeking medical treatment at a recognised hospital in India. No restriction on nationality.'],
                  ['How many attendants?', 'Up to 2 family members can accompany you on Medical Attendant Visa (MX visa).'],
                  ['How long does it take?', '3-5 business days for most Middle East and African countries at Indian embassies.'],
                  ['How long is it valid?', 'Medical visa is typically granted for up to 1 year with triple entry, or for the duration of treatment.'],
                  ['What documents are needed?', 'Passport, passport photo, application form, invitation letter from Indian hospital, medical records, and proof of funds.'],
                  ['Can MySurgery help?', 'Yes. We provide the hospital invitation letter and guide you through the complete visa application process.'],
                ].map(([q, a]) => (
                  <div key={q} style={{background: '#f9fafb', borderRadius: '10px', padding: '14px 16px', border: '1px solid #e5e7eb'}}>
                    <p style={{fontWeight: 600, color: '#111827', fontSize: '14px', margin: '0 0 4px'}}>{q}</p>
                    <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.5'}}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '40px'}}>
              <h3 style={{fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Get Your Free Treatment Plan</h3>
              <p style={{color: '#93c5fd', marginBottom: '24px', lineHeight: '1.6'}}>Share your medical reports with us. Our medical team will prepare a treatment plan, cost estimate, and hospital recommendation within 48 hours.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
                {['Free second opinion from specialist', 'Detailed cost estimate in your currency', 'Hospital and surgeon recommendation', 'Medical visa invitation letter', '24/7 WhatsApp support', 'Airport pickup and local transport'].map(item => (
                  <div key={item} style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <span style={{color: '#22c55e', fontWeight: 700, fontSize: '16px'}}>✓</span>
                    <span style={{fontSize: '14px', color: 'white'}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href='/contact' style={{display: 'block', background: 'white', color: '#1d4ed8', textAlign: 'center', fontWeight: 700, padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', marginBottom: '10px'}}>Send Medical Reports — Free</a>
              <a href='https://wa.me/918588967050?text=Hi+I+am+an+international+patient+looking+for+treatment+in+India' target='_blank' rel='noopener noreferrer' style={{display: 'block', background: '#22c55e', color: 'white', textAlign: 'center', fontWeight: 600, padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us Now</a>
              <p style={{fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '12px'}}>Available in English, Arabic, French, and Hindi</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{padding: '48px 0 72px'}}>
          <h2 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35', marginBottom: '28px', textAlign: 'center'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {[
              ['Is it safe to have surgery in India?', 'Yes. India has 30+ JCI-accredited hospitals (the same international standard as hospitals in the UAE, UK, and USA) and 700+ NABH-accredited hospitals. Senior Indian surgeons are trained at the world best medical institutions. India receives over 500,000 medical tourists annually with an excellent safety record.'],
              ['How do I send my medical records to MySurgery?', 'You can WhatsApp your medical reports to +91 8588967050 or email them to info.mysurgery@gmail.com. We accept reports in any format — PDFs, scanned documents, photos of reports, and DICOM files for scans. Our medical team responds within 24 hours.'],
              ['What is included in the treatment cost quoted by MySurgery?', 'Our cost estimates include surgeon fee, OT charges, anaesthesia, hospital stay, medications, and basic investigations. They do not include international flights, accommodation outside the hospital, and personal expenses. We provide a complete itemised estimate so there are no surprises.'],
              ['How long will I need to stay in India?', 'Stay duration depends on the procedure. Knee or hip replacement: 10-14 days. Bypass surgery: 14-21 days. Kidney transplant: 4-6 weeks. Cancer treatment: depends on protocol. We advise on the minimum required stay and can arrange extended stays if needed.'],
              ['Can I bring my family?', 'Yes. India offers Medical Attendant Visa (MX) for up to 2 accompanying family members. We help arrange accommodation near the hospital for family members. Most hospitals have family-friendly accommodation options within the hospital complex.'],
              ['What languages does MySurgery support?', 'Our care coordinators communicate in English, Hindi, and Arabic. For other languages we arrange interpreters. All major Indian hospitals have international patient departments with multilingual staff and Arabic-speaking coordinators for Middle East patients.'],
              ['Does India have Halal food and prayer facilities?', 'Yes. All major Indian hospitals catering to international patients offer Halal food options. Prayer facilities (Namaz rooms) are available at most hospitals with significant Middle East patient populations. Please mention your requirements when booking and we will ensure they are arranged.'],
            ].map(([q, a], i) => (
              <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px 22px', marginBottom: '12px'}}>
                <h3 style={{fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '10px'}}>{q}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.75', margin: 0}}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}