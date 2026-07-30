'use client'
import { useState } from 'react'

export default function BlogCTA({ procedure }: { procedure?: string }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async () => {
    if (!phone) return
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Blog Lead',
          phone,
          procedure: procedure || 'Not specified',
          city: 'Not specified',
          sourcePage: window.location.href,
        }),
      })
      const data = await res.json()
      if (data.success) setDone(true)
    } catch {}
    setLoading(false)
  }

  if (done) {
    return (
      <div style={{background: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '14px', padding: '24px', textAlign: 'center', margin: '32px 0'}}>
        <div style={{fontSize: '40px', marginBottom: '10px'}}>&#x2705;</div>
        <p style={{fontWeight: 700, color: '#16a34a', fontSize: '18px', margin: '0 0 6px'}}>We will call you within 30 minutes!</p>
        <p style={{fontSize: '14px', color: '#4b5563', margin: 0}}>Our care coordinator will help you with {procedure || 'your surgery'} options.</p>
      </div>
    )
  }

  return (
    <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1e3a5f 100%)', borderRadius: '16px', padding: '24px', margin: '32px 0'}}>
      <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px'}}>
        <div style={{width: '44px', height: '44px', background: '#1d4ed8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '20px'}}>
          &#x1F4DE;
        </div>
        <div>
          <p style={{fontWeight: 700, color: 'white', fontSize: '17px', margin: '0 0 4px'}}>
            Get Free Expert Consultation
          </p>
          <p style={{color: '#93c5fd', fontSize: '13px', margin: 0}}>
            {procedure ? 'Speak to a ' + procedure + ' specialist' : 'Speak to a surgery specialist'} — callback in 30 minutes
          </p>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name (optional)"
          style={{border: 'none', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', background: 'rgba(255,255,255,0.1)', color: 'white'}}
        />
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Your phone number *"
          style={{border: '2px solid #60a5fa', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', background: 'white', fontWeight: 500}}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !phone}
          style={{background: !phone ? '#374151' : '#2563eb', color: 'white', fontWeight: 700, padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', cursor: !phone ? 'not-allowed' : 'pointer', fontFamily: 'inherit', width: '100%'}}
        >
          {loading ? 'Connecting...' : 'Get Free Callback'}
        </button>
        <a
          href={'https://wa.me/918588967050?text=Hi+I+want+consultation+for+' + encodeURIComponent(procedure || 'surgery')}
          target="_blank"
          rel="noopener noreferrer"
          style={{display: 'block', background: '#22c55e', color: 'white', fontWeight: 600, padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', textAlign: 'center', width: '100%', boxSizing: 'border-box'}}
        >
          WhatsApp Instead
        </a>
      </div>
      <div style={{display: 'flex', gap: '16px', marginTop: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
        {['Free consultation', 'No spam', '30 min callback', 'Confidential'].map(b => (
          <span key={b} style={{fontSize: '11px', color: '#93c5fd'}}>&#x2713; {b}</span>
        ))}
      </div>
    </div>
  )
}
