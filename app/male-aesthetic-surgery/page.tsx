import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Male Aesthetic Surgery India 2026 — Gynecomastia, Lipoma, Cyst Removal | MySurgery',
  description: 'Aesthetic surgery for men in India. Gynecomastia (male breast reduction), lipoma removal, cyst removal, liposuction. Expert plastic surgeons. Same-day discharge. Free consultation.',
  alternates: { canonical: '/male-aesthetic-surgery' },
  keywords: ['male aesthetic surgery India', 'gynecomastia surgery', 'lipoma removal men', 'cyst removal surgery', 'male plastic surgery India 2026'],
}

const procedures = [
  { name: 'Gynecomastia', slug: 'gynecomastia', icon: '💪', desc: 'Male breast reduction. Grade 1-4 classification. Liposuction + gland excision. Permanent flat chest.', cost: 'Rs 55,000 – Rs 1,20,000', time: '1-2 hrs', tag: 'Most Popular', tagColor: '#1d4ed8', tagBg: '#eff6ff', concerns: ['Chest enlargement', 'Nipple sensitivity', 'Steroid-related', 'Pubertal gynecomastia'] },
  { name: 'Lipoma Removal', slug: 'lipoma', icon: '🔵', desc: 'Fatty lump removal from back, neck, arms, thighs. Surgical excision or liposuction. Minimal scar.', cost: 'Rs 15,000 – Rs 60,000', time: '20-45 min', tag: 'Day Procedure', tagColor: '#16a34a', tagBg: '#f0fdf4', concerns: ['Lump on back', 'Multiple lipomas', 'Neck lipoma', 'Painful lipoma'] },
  { name: 'Cyst Removal', slug: 'cyst-removal', icon: '🟡', desc: 'Sebaceous cyst, pilonidal sinus, ganglion cyst, epidermoid cyst removal. Local anaesthesia.', cost: 'Rs 10,000 – Rs 90,000', time: '20-60 min', tag: 'Same Day', tagColor: '#b45309', tagBg: '#fefce8', concerns: ['Sebaceous cyst', 'Pilonidal sinus', 'Cyst on face', 'Cyst near tailbone'] },
  { name: 'Liposuction (Men)', slug: 'liposuction', icon: '⚡', desc: 'Body contouring for men. Abdomen, flanks, chest, chin. VASER and power-assisted liposuction.', cost: 'Rs 60,000 – Rs 1,80,000', time: '2-4 hrs', tag: 'Body Contouring', tagColor: '#7c3aed', tagBg: '#faf5ff', concerns: ['Belly fat', 'Love handles', 'Double chin', 'Chest fat'] },
]

const concerns = [
  { concern: 'I have a lump on my chest that feels like breast tissue', answer: 'Gynecomastia', link: '/gynecomastia', urgency: 'Book consultation' },
  { concern: 'I have a soft movable fatty lump on my back/neck/arm', answer: 'Lipoma', link: '/lipoma', urgency: 'Elective — anytime' },
  { concern: 'I have a cyst near my tailbone that keeps getting infected', answer: 'Pilonidal Sinus', link: '/cyst-removal', urgency: 'Prompt treatment needed' },
  { concern: 'I have a dome-shaped lump on my scalp/face/body', answer: 'Sebaceous Cyst', link: '/cyst-removal', urgency: 'Elective — anytime' },
  { concern: 'I have excess chest fat from steroids or obesity', answer: 'Gynecomastia or Liposuction', link: '/gynecomastia', urgency: 'Book consultation' },
  { concern: 'I have a lump on my wrist that hurts sometimes', answer: 'Ganglion Cyst', link: '/cyst-removal', urgency: 'Elective — when symptomatic' },
  { concern: 'I have multiple lumps appearing on different body parts', answer: 'Multiple Lipomas', link: '/lipoma', urgency: 'See a doctor — multiple same session' },
  { concern: 'I have stubborn belly or flank fat despite exercise', answer: 'Liposuction', link: '/treatment/liposuction', urgency: 'Elective — anytime' },
]

export default function MaleAestheticPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1a3a5c 100%)', padding: '60px 24px 48px', textAlign: 'center'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <p style={{fontSize: '12px', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>For Men</p>
          <h1 style={{fontSize: '42px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: '1.2'}}>
            Male Aesthetic Surgery India 2026
          </h1>
          <p style={{color: '#93c5fd', fontSize: '18px', lineHeight: '1.65', marginBottom: '32px'}}>
            Expert surgical solutions for gynecomastia, lipoma, cysts, and body contouring — designed specifically for men. Confidential. Same-day discharge.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px'}}>
            <a href="/contact" style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+male+aesthetic+surgery+consultation" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp — Confidential</a>
          </div>
          <div style={{display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap'}}>
            {[['100%', 'Confidential'], ['Same Day', 'Discharge'], ['Local Anaesthesia', 'For most procedures'], ['Expert Surgeons', 'MCh qualified']].map(([n, l]) => (
              <div key={l} style={{textAlign: 'center'}}>
                <p style={{fontSize: '18px', fontWeight: 700, color: 'white', margin: '0 0 2px'}}>{n}</p>
                <p style={{fontSize: '12px', color: '#93c5fd', margin: 0}}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 80px'}}>

        {/* FIND YOUR CONCERN */}
        <section style={{marginBottom: '56px'}}>
          <div style={{textAlign: 'center', marginBottom: '28px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>What Is Your Concern?</h2>
            <p style={{fontSize: '16px', color: '#6b7280'}}>Find the right treatment for your specific problem</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {concerns.map((c, i) => (
              <a key={i} href={c.link} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px 20px', textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'center'}}>
                <div>
                  <p style={{fontSize: '15px', color: '#374151', margin: '0 0 4px'}}>{c.concern}</p>
                  <p style={{fontSize: '13px', fontWeight: 600, color: '#1d4ed8', margin: 0}}>→ {c.answer}</p>
                </div>
                <span style={{fontSize: '11px', background: c.urgency.includes('Prompt') ? '#fef2f2' : '#f0fdf4', color: c.urgency.includes('Prompt') ? '#dc2626' : '#16a34a', padding: '4px 10px', borderRadius: '20px', fontWeight: 600, whiteSpace: 'nowrap'}}>{c.urgency}</span>
              </a>
            ))}
          </div>
        </section>

        {/* PROCEDURES */}
        <section style={{marginBottom: '56px'}}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Our Male Aesthetic Procedures</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px'}}>
            {procedures.map(p => (
              <a key={p.name} href={'/' + p.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', textDecoration: 'none', display: 'block', transition: 'box-shadow 0.2s'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <span style={{fontSize: '36px'}}>{p.icon}</span>
                  <span style={{fontSize: '11px', background: p.tagBg, color: p.tagColor, padding: '3px 10px', borderRadius: '20px', fontWeight: 600}}>{p.tag}</span>
                </div>
                <h3 style={{fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px'}}>{p.name}</h3>
                <p style={{fontSize: '13px', color: '#4b5563', lineHeight: '1.6', marginBottom: '14px'}}>{p.desc}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f3f4f6'}}>
                  <div>
                    <p style={{fontSize: '14px', fontWeight: 700, color: '#1d4ed8', margin: '0 0 2px'}}>{p.cost}</p>
                    <p style={{fontSize: '12px', color: '#9ca3af', margin: 0}}>{p.time}</p>
                  </div>
                  <span style={{fontSize: '13px', color: '#1d4ed8', fontWeight: 500}}>Learn more →</span>
                </div>
                <div style={{marginTop: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                  {p.concerns.map(c => <span key={c} style={{fontSize: '11px', background: '#f9fafb', color: '#6b7280', padding: '2px 7px', borderRadius: '4px'}}>{c}</span>)}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* WHY MYSURGERY FOR MEN */}
        <section style={{marginBottom: '48px', background: '#f9fafb', borderRadius: '20px', padding: '36px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', textAlign: 'center'}}>Why Men Choose MySurgery</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px'}}>
            {[
              { icon: '🔒', title: '100% Confidential', desc: 'Your consultation and surgery details are never shared. Private room, private coordinator.' },
              { icon: '🏥', title: 'Same-Day Discharge', desc: 'Most male aesthetic procedures are done under local anaesthesia with same-day discharge.' },
              { icon: '👨‍⚕️', title: 'MCh Plastic Surgeons', desc: 'Only experienced plastic and general surgeons with specialised aesthetic training.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. All-inclusive quotes. EMI available for procedures above Rs 30,000.' },
              { icon: '📱', title: 'WhatsApp First', desc: 'Start with a WhatsApp consultation. Share photos of your concern. Get a response within 2 hours.' },
              { icon: '🗓', title: 'Weekend Slots', desc: 'Saturday and Sunday procedure slots available — no need to take leave from work.' },
            ].map(item => (
              <div key={item.title} style={{background: 'white', borderRadius: '12px', padding: '18px'}}>
                <span style={{fontSize: '28px', display: 'block', marginBottom: '10px'}}>{item.icon}</span>
                <h3 style={{fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>{item.title}</h3>
                <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.6'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '10px'}}>Start with a Confidential Consultation</h2>
          <p style={{color: '#93c5fd', marginBottom: '28px', fontSize: '16px', maxWidth: '500px', margin: '0 auto 28px'}}>WhatsApp us or call — our male health coordinators understand your concerns and handle everything confidentially.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="https://wa.me/918588967050?text=Hi+I+want+confidential+consultation+for+male+aesthetic+surgery" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp — Confidential</a>
            <a href="/contact" style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Online</a>
          </div>
          <p style={{color: '#64748b', fontSize: '13px', marginTop: '16px'}}>Available 9 AM – 8 PM · Callback within 30 minutes</p>
        </div>
      </div>
    </div>
  )
}
