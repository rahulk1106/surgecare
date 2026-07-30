'use client'
import { useState, useEffect } from 'react'

interface LeadFormProps {
  procedure?: string
  city?: string
  title?: string
  subtitle?: string
  compact?: boolean
  dark?: boolean
}

export default function LeadForm({ procedure, city, title, subtitle, compact = false, dark = false }: LeadFormProps) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [sourcePage, setSourcePage] = useState('')

  useEffect(() => {
    setSourcePage(window.location.href)
  }, [])

  const handleSubmit = async () => {
    if (!phone || phone.length < 10) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Web Lead',
          phone,
          procedure: procedure || 'Not specified',
          city: city || 'Not specified',
          sourcePage,
        }),
      })
      setDone(true)
    } catch {}
    setLoading(false)
  }

  const waText = 'Hi I want consultation for ' + (procedure || 'surgery') + (city ? ' in ' + city : '')
  const waUrl = 'https://wa.me/918588967050?text=' + encodeURIComponent(waText)
  const bg = dark ? '#0f1f35' : 'white'
  const cardBorder = dark ? 'none' : '1px solid #e5e7eb'
  const textColor = dark ? 'white' : '#111827'
  const subtitleColor = dark ? '#93c5fd' : '#6b7280'
  const inputNameBg = dark ? 'rgba(255,255,255,0.08)' : 'white'
  const inputNameColor = dark ? 'white' : '#111827'
  const inputNameBorder = dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e5e7eb'
  const phoneBorder = dark ? '2px solid #60a5fa' : '2px solid #1d4ed8'
  const btnBg = phone.length < 10 ? '#94a3b8' : '#1d4ed8'

  if (done) {
    return (
      <div style={{background: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '14px', padding: compact ? '16px' : '24px', textAlign: 'center'}}>
        <p style={{fontSize: '32px', margin: '0 0 8px'}}>&#10003;</p>
        <p style={{fontWeight: 700, color: '#16a34a', fontSize: '16px', margin: '0 0 4px'}}>Callback confirmed!</p>
        <p style={{fontSize: '13px', color: '#4b5563', margin: 0}}>We will call you within 30 minutes. Keep your phone handy.</p>
      </div>
    )
  }

  return (
    <div style={{background: bg, border: cardBorder, borderRadius: '14px', padding: compact ? '16px' : '24px', boxShadow: dark ? 'none' : '0 4px 20px rgba(0,0,0,0.06)'}}>
      {!compact && (
        <div style={{marginBottom: '16px'}}>
          <p style={{fontWeight: 700, color: textColor, fontSize: '17px', margin: '0 0 4px'}}>
            {title || 'Get Free Expert Consultation'}
          </p>
          <p style={{fontSize: '13px', color: subtitleColor, margin: 0}}>
            {subtitle || (procedure ? 'Speak to a ' + procedure + ' specialist — free, confidential' : 'Callback within 30 minutes — free and confidential')}
          </p>
        </div>
      )}
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name (optional)"
          style={{border: inputNameBorder, borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', background: inputNameBg, color: inputNameColor}}
        />
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Phone number *"
          style={{border: phoneBorder, borderRadius: '8px', padding: '11px 14px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit', background: 'white', fontWeight: 500}}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || phone.length < 10}
          style={{background: btnBg, color: 'white', fontWeight: 700, padding: compact ? '12px' : '14px', borderRadius: '8px', border: 'none', fontSize: '15px', cursor: phone.length < 10 ? 'not-allowed' : 'pointer', fontFamily: 'inherit', width: '100%'}}
        >
          {loading ? 'Connecting...' : 'Get Free Callback'}
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{display: 'block', background: '#22c55e', color: 'white', fontWeight: 600, padding: compact ? '11px' : '13px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', textAlign: 'center', width: '100%', boxSizing: 'border-box'}}
        >
          WhatsApp Instead
        </a>
      </div>
      <p style={{fontSize: '11px', color: dark ? '#64748b' : '#9ca3af', textAlign: 'center', margin: '10px 0 0', lineHeight: '1.5'}}>
        Confidential · No spam · By submitting you consent to our care team calling you
      </p>
    </div>
  )
}
