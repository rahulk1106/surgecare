'use client'
import { useState } from 'react'

export default function CityLeadForm({ procedure, city, sourcePage }: { procedure: string; city: string; sourcePage: string }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async () => {
    if (!phone) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'City Page Lead',
          phone,
          procedure,
          city,
          sourcePage: typeof window !== 'undefined' ? window.location.href : sourcePage,
        }),
      })
      setDone(true)
    } catch {}
    setLoading(false)
  }

  if (done) {
    return (
      <div style={{background: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '14px', padding: '24px', textAlign: 'center', marginTop: '16px'}}>
        <div style={{fontSize: '40px', marginBottom: '10px'}}>✅</div>
        <p style={{fontWeight: 700, color: '#16a34a', fontSize: '18px', margin: '0 0 6px'}}>We will call you in 30 minutes!</p>
        <p style={{fontSize: '14px', color: '#4b5563', margin: 0}}>Keep your phone handy. Our coordinator will discuss {procedure.split('—')[0].trim()} options in {city}.</p>
      </div>
    )
  }

  return (
    <div style={{background: 'white', border: '2px solid #1d4ed8', borderRadius: '14px', padding: '20px', marginTop: '16px', boxShadow: '0 4px 20px rgba(29,78,216,0.1)'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px'}}>
        <div style={{width: '36px', height: '36px', background: '#1d4ed8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
          <span style={{color: 'white', fontSize: '16px'}}>📞</span>
        </div>
        <div>
          <p style={{fontWeight: 700, color: '#111827', fontSize: '16px', margin: 0}}>Get Free Callback in 30 Minutes</p>
          <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Speak to a specialist about {city} options</p>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name (optional)"
          style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit'}}
        />
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="📱 Your phone number *"
          style={{border: '1.5px solid #1d4ed8', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', fontWeight: 500}}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !phone}
          style={{background: !phone ? '#cbd5e1' : loading ? '#3b82f6' : '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', cursor: !phone ? 'not-allowed' : 'pointer', fontFamily: 'inherit', width: '100%', transition: 'background 0.2s'}}
        >
          {loading ? 'Connecting you...' : 'Get Free Callback →'}
        </button>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div style={{flex: 1, height: '1px', background: '#e5e7eb'}} />
          <span style={{fontSize: '12px', color: '#9ca3af'}}>or</span>
          <div style={{flex: 1, height: '1px', background: '#e5e7eb'}} />
        </div>
        
        <a
          href={'https://wa.me/918588967050?text=Hi+I+want+cost+for+' + encodeURIComponent(procedure) + '+in+' + encodeURIComponent(city)}
          target="_blank"
          rel="noopener noreferrer"
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', width: '100%', boxSizing: 'border-box'}}
        >
          <span style={{fontSize: '18px'}}>💬</span> WhatsApp Us
        </a>
      </div>
      <p style={{fontSize: '11px', color: '#9ca3af', textAlign: 'center', margin: '10px 0 0'}}>
        🔒 Confidential · No spam · Callback within 30 min
      </p>
    </div>
  )
}
