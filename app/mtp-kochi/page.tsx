'use client'
import { useState, useEffect } from 'react'

export default function MTPKochiLanding() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [activeTab, setActiveTab] = useState('surgical')

  const handleSubmit = async () => {
    if (!phone || phone.length < 10) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'MTP Kochi Landing',
          phone,
          procedure: 'MTP / Abortion — Kochi',
          city: 'Kochi',
          sourcePage: typeof window !== 'undefined' ? window.location.href : '/mtp-kochi',
        }),
      })
      setDone(true)
    } catch {}
    setLoading(false)
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', minHeight: '100vh', background: '#f8fffe'}}>

      {/* STICKY HEADER */}
      <div style={{position: 'sticky', top: 0, zIndex: 100, background: 'white', borderBottom: '1px solid #e5e7eb', padding: '12px 24px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <img src="/logo-mysurgery.png" alt="MySurgery.in" style={{height: '36px', width: 'auto'}} />
          <a href="tel:+918588967050"
            style={{background: '#007B7F', color: 'white', fontWeight: 700, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px'}}>
            Call Now: 8588967050
          </a>
        </div>
      </div>

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #007B7F 0%, #005F62 100%)', padding: '48px 24px 56px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center'}}>
          <div>
            <div style={{display: 'inline-flex', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '4px 12px', marginBottom: '16px'}}>
              <span style={{fontSize: '12px', fontWeight: 600, color: 'white', letterSpacing: '0.05em'}}>Kochi · Safe · Confidential · Legal</span>
            </div>
            <h1 style={{fontSize: '36px', fontWeight: 800, color: 'white', margin: '0 0 16px', lineHeight: '1.2'}}>
              Safe &amp; Confidential<br />
              <span style={{color: '#7FFFD4'}}>Abortion in Kochi</span>
            </h1>
            <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px'}}>
              Legal MTP (Medical Termination of Pregnancy) at certified hospitals in Kochi. 100% confidential. Same-day appointment available.
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px'}}>
              {[
                '✓ Certified gynaecologists with 10+ years experience',
                '✓ NABH-accredited private hospitals in Kochi',
                '✓ No questions asked — complete confidentiality',
                '✓ MTP Act 2021 compliant — up to 24 weeks',
                '✓ Same-day appointment · Result in 30 minutes',
              ].map(point => (
                <div key={point} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                  <span style={{color: '#7FFFD4', fontSize: '14px', flexShrink: 0}}>{point.slice(0, 1)}</span>
                  <span style={{color: 'white', fontSize: '14px', lineHeight: '1.5'}}>{point.slice(2)}</span>
                </div>
              ))}
            </div>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <a href="tel:+918588967050" style={{background: '#E91E8C', color: 'white', fontWeight: 700, padding: '14px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>
                Call Now — Free Consultation
              </a>
              <a href="https://wa.me/918588967050?text=Hi+I+need+confidential+MTP+consultation+in+Kochi" target="_blank" rel="noopener noreferrer"
                style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* LEAD FORM */}
          <div style={{background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'}}>
            {!done ? (
              <>
                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                  <p style={{fontWeight: 800, color: '#007B7F', fontSize: '20px', margin: '0 0 4px'}}>Book Free Consultation</p>
                  <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>100% confidential · Callback in 30 minutes</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <input type="text" value={name} onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    style={{border: '1px solid #e5e7eb', borderRadius: '10px', padding: '13px 16px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit'}} />
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="Phone number *"
                    style={{border: '2px solid #007B7F', borderRadius: '10px', padding: '13px 16px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', fontWeight: 500}} />
                  <button onClick={handleSubmit} disabled={loading || phone.length < 10}
                    style={{background: phone.length < 10 ? '#94a3b8' : '#007B7F', color: 'white', fontWeight: 700, padding: '15px', borderRadius: '10px', border: 'none', fontSize: '16px', cursor: phone.length < 10 ? 'not-allowed' : 'pointer', fontFamily: 'inherit', width: '100%'}}>
                    {loading ? 'Connecting...' : 'Get Free Callback'}
                  </button>
                  <a href="https://wa.me/918588967050?text=Hi+I+need+MTP+consultation+in+Kochi+confidential"
                    target="_blank" rel="noopener noreferrer"
                    style={{display: 'block', background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', textAlign: 'center', width: '100%', boxSizing: 'border-box'}}>
                    WhatsApp — Instant Reply
                  </a>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '14px', flexWrap: 'wrap'}}>
                  {['Free', 'Confidential', 'No Spam', '30 min callback'].map(b => (
                    <span key={b} style={{fontSize: '11px', color: '#007B7F', fontWeight: 500}}>&#10003; {b}</span>
                  ))}
                </div>
                <p style={{fontSize: '11px', color: '#9ca3af', textAlign: 'center', margin: '10px 0 0', lineHeight: '1.5'}}>
                  By submitting, you consent to our care coordinators calling you. Your data is kept strictly confidential.
                </p>
              </>
            ) : (
              <div style={{textAlign: 'center', padding: '20px 0'}}>
                <p style={{fontSize: '48px', margin: '0 0 12px'}}>&#10003;</p>
                <h3 style={{fontSize: '20px', fontWeight: 700, color: '#007B7F', margin: '0 0 8px'}}>We will call you shortly!</h3>
                <p style={{fontSize: '14px', color: '#4b5563', margin: '0 0 20px', lineHeight: '1.6'}}>Our care coordinator will call within 30 minutes. Everything is kept completely confidential.</p>
                <a href="https://wa.me/918588967050?text=Hi+I+just+submitted+MTP+Kochi+form"
                  target="_blank" rel="noopener noreferrer"
                  style={{display: 'block', background: '#22c55e', color: 'white', fontWeight: 600, padding: '12px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', textAlign: 'center'}}>
                  WhatsApp for Faster Response
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{maxWidth: '900px', margin: '0 auto', padding: '48px 24px'}}>

        {/* TRUST BADGES */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '48px'}}>
          {[
            {icon: '🔒', title: '100% Confidential', desc: 'Your identity is never revealed'},
            {icon: '⚖️', title: 'Legally Certified', desc: 'MTP Act 2021 compliant'},
            {icon: '🏥', title: 'NABH Hospitals', desc: 'Accredited private clinics in Kochi'},
            {icon: '👩‍⚕️', title: 'Expert Doctors', desc: 'Experienced gynaecologists'},
            {icon: '📅', title: 'Same Day', desc: 'Appointment available today'},
            {icon: '💰', title: 'Transparent Cost', desc: 'No hidden charges'},
          ].map(item => (
            <div key={item.title} style={{background: 'white', borderRadius: '14px', padding: '18px', textAlign: 'center', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
              <span style={{fontSize: '28px', display: 'block', marginBottom: '8px'}}>{item.icon}</span>
              <p style={{fontWeight: 700, color: '#007B7F', fontSize: '14px', margin: '0 0 4px'}}>{item.title}</p>
              <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* TREATMENT OPTIONS */}
        <div style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px', textAlign: 'center'}}>MTP Options Available in Kochi</h2>
          <p style={{fontSize: '15px', color: '#6b7280', textAlign: 'center', marginBottom: '24px'}}>Our doctors recommend the safest option based on your weeks of pregnancy</p>

          <div style={{display: 'flex', gap: '8px', marginBottom: '20px', justifyContent: 'center'}}>
            {[['surgical', 'Surgical MTP'], ['medical', 'Medical (Pills)']].map(([tab, label]) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{padding: '10px 24px', borderRadius: '8px', border: '2px solid #007B7F', background: activeTab === tab ? '#007B7F' : 'white', color: activeTab === tab ? 'white' : '#007B7F', fontWeight: 600, cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit'}}>
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'surgical' ? (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px'}}>
              {[
                {weeks: 'Up to 12 weeks', method: 'Suction Evacuation / MVA', time: '10-20 minutes', anaesthesia: 'Local anaesthesia', recovery: 'Same day', cost: 'Rs 35,000 onwards'},
                {weeks: '12 to 20 weeks', method: 'Surgical MTP (Board approval required)', time: '30-60 minutes', anaesthesia: 'General/Spinal', recovery: '1-2 days', cost: 'Rs 50,000 onwards'},
              ].map(opt => (
                <div key={opt.weeks} style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '4px solid #007B7F', borderRadius: '12px', padding: '18px'}}>
                  <p style={{fontWeight: 700, color: '#007B7F', fontSize: '14px', margin: '0 0 10px'}}>{opt.weeks}</p>
                  <p style={{fontWeight: 600, color: '#111827', fontSize: '14px', margin: '0 0 8px'}}>{opt.method}</p>
                  {[['Time', opt.time], ['Anaesthesia', opt.anaesthesia], ['Recovery', opt.recovery], ['Cost in Kochi', opt.cost]].map(([k, v]) => (
                    <div key={k} style={{display: 'flex', gap: '8px', marginBottom: '4px'}}>
                      <span style={{fontSize: '12px', color: '#9ca3af', minWidth: '80px'}}>{k}:</span>
                      <span style={{fontSize: '12px', color: '#374151', fontWeight: 500}}>{v}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px'}}>
              {[
                {weeks: 'Up to 5 weeks', method: 'Mifepristone + Misoprostol (Abortion Pills)', effectiveness: '95-97% effective', howto: 'Pill taken at clinic, second pill at home 24-48 hours later', followup: 'Scan after 2 weeks to confirm', cost: 'Rs 5,000 – Rs 10,000'},
              ].map(opt => (
                <div key={opt.weeks} style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '4px solid #E91E8C', borderRadius: '12px', padding: '18px'}}>
                  <p style={{fontWeight: 700, color: '#E91E8C', fontSize: '14px', margin: '0 0 10px'}}>{opt.weeks}</p>
                  <p style={{fontWeight: 600, color: '#111827', fontSize: '14px', margin: '0 0 8px'}}>{opt.method}</p>
                  {[['Effectiveness', opt.effectiveness], ['Process', opt.howto], ['Follow-up', opt.followup], ['Cost in Kochi', opt.cost]].map(([k, v]) => (
                    <div key={k} style={{display: 'flex', gap: '8px', marginBottom: '4px'}}>
                      <span style={{fontSize: '12px', color: '#9ca3af', minWidth: '80px'}}>{k}:</span>
                      <span style={{fontSize: '12px', color: '#374151', fontWeight: 500}}>{v}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>


        {/* FAQ */}
        <div style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', textAlign: 'center'}}>Common Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {[
              ['Is abortion legal in Kochi / Kerala?', 'Yes. Abortion is fully legal in India up to 20 weeks under the MTP Act. With special medical board approval, it can be done up to 24 weeks in cases of foetal abnormalities or health risk to the mother. Kochi has several certified MTP centres.'],
              ['Can I get abortion without my husband\'s permission?', 'Yes. Under the MTP Act 2021, you do not need your husband\'s or partner\'s consent for abortion. The decision belongs entirely to you. Our doctors and coordinators maintain complete confidentiality.'],
              ['Is abortion painful?', 'Medical abortion (pills) causes cramping similar to heavy periods. Surgical abortion under local or general anaesthesia is painless during the procedure. Post-procedure discomfort is managed with medications.'],
              ['How confidential is it?', '100% confidential. Our care coordinators are trained in privacy protocols. We will only call on the number you provide. Your details are never shared with family, employer, or any third party without your explicit consent.'],
              ['How quickly can I get an appointment in Kochi?', 'Same-day or next-day appointments are usually available. Call or WhatsApp us now — our care coordinator will confirm your appointment within 30 minutes.'],
              ['What documents do I need?', 'ID proof (Aadhaar or any government ID). No consent from partner, family member, or employer is required. For late MTP (above 20 weeks), additional medical documentation may be needed.'],
            ].map(([q, a], i) => (
              <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px 20px', background: 'white'}}>
                <h3 style={{fontSize: '15px', fontWeight: 600, color: '#007B7F', marginBottom: '8px'}}>{q}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.75', margin: 0}}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{background: 'linear-gradient(135deg, #007B7F 0%, #E91E8C 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '10px'}}>Speak to a Doctor Today</h2>
          <p style={{color: 'rgba(255,255,255,0.85)', marginBottom: '24px', fontSize: '15px', maxWidth: '500px', margin: '0 auto 24px', lineHeight: '1.6'}}>
            Free, confidential consultation. Our care coordinator will call within 30 minutes and arrange your appointment at the best clinic in Kochi.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px'}}>
            <a href="tel:+918588967050" style={{background: 'white', color: '#007B7F', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>
              Call: 8588967050
            </a>
            <a href="https://wa.me/918588967050?text=Hi+I+need+MTP+consultation+in+Kochi" target="_blank" rel="noopener noreferrer"
              style={{background: '#22c55e', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>
              WhatsApp Now
            </a>
          </div>
          <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0}}>Available 8 AM – 10 PM · 7 days a week · Complete confidentiality guaranteed</p>
        </div>

        {/* LEGAL DISCLAIMER */}
        <div style={{marginTop: '32px', padding: '16px 20px', background: '#f9fafb', borderRadius: '10px', border: '1px solid #e5e7eb'}}>
          <p style={{fontSize: '11px', color: '#9ca3af', margin: 0, lineHeight: '1.7'}}>
            <strong style={{color: '#6b7280'}}>Disclaimer:</strong> MySurgery is a Health Tech patient facilitation platform operated by Gravity Labs (Proprietorship). We connect patients with certified Healthcare Partners. MTP services are provided by independent registered gynaecologists and NABH-accredited hospitals. MySurgery is not a medical provider. All procedures comply with the Medical Termination of Pregnancy (Amendment) Act, 2021.
          </p>
        </div>
      </div>
    </div>
  )
}
