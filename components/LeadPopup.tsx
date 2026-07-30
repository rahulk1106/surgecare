'use client'
import { useState, useEffect } from 'react'

const POPUP_DELAY = 7000
const POPUP_KEY = 'ms_popup_shown'
const POPUP_COOLDOWN = 24 * 60 * 60 * 1000

export default function LeadPopup() {
  const [show, setShow] = useState(false)
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const path = window.location.pathname
    if (path.startsWith('/admin') || path.startsWith('/partner') || path.startsWith('/api')) return
    setCurrentPage(window.location.href)

    // Show popup after 7 seconds OR after scrolling 40% of page
    let shown = false
    const showPopup = () => {
      if (!shown) { shown = true; setShow(true) }
    }

    const timer = setTimeout(showPopup, POPUP_DELAY)

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (scrolled > 0.4) showPopup()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Popup Lead',
          phone,
          procedure: 'Not specified',
          city: 'Not specified',
          sourcePage: currentPage,
          source: 'popup',
        }),
      })
      setSubmitted(true)
    } catch {}
    setLoading(false)
  }

  if (!show) return null

  const inp: React.CSSProperties = {
    border: '1px solid #e5e7eb', borderRadius: '10px', padding: '11px 14px',
    fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit'
  }

  return (
    <div>
      <div
        onClick={() => setShow(false)}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 9998 }}
      />
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, padding: '16px' }}>
        <div style={{ background: 'white', borderRadius: '20px', maxWidth: '480px', margin: '0 auto', boxShadow: '0 -8px 40px rgba(0,0,0,0.2)', overflow: 'hidden' }}>

          <div style={{ background: 'linear-gradient(135deg,#0f1f35 0%,#1d4ed8 100%)', padding: '18px 20px 16px', position: 'relative' }}>
            <button onClick={() => setShow(false)} style={{ position: 'absolute', top: '12px', right: '14px', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '16px', fontFamily: 'inherit' }}>x</button>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '36px' }}>��</span>
              <div>
                <p style={{ color: '#93c5fd', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 3px' }}>Free Consultation</p>
                <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0, lineHeight: '1.3' }}>Get a Free Callback from a Specialist</h3>
              </div>
            </div>
          </div>

          <div style={{ padding: '18px 20px 20px' }}>
            {!submitted ? (
              <div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: '0 0 14px', lineHeight: '1.55' }}>
                  Our care coordinator will call you within <strong>30 minutes</strong> to help find the right doctor and get a cost estimate.
                </p>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  {['Free consultation', 'No spam calls', 'Callback in 30 min'].map(b => (
                    <span key={b} style={{ fontSize: '11px', background: '#f0fdf4', color: '#16a34a', padding: '3px 8px', borderRadius: '20px', fontWeight: 500 }}>{'✓ ' + b}</span>
                  ))}
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name (optional)" style={inp} />
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number *" required style={{ ...inp, border: '2px solid #1d4ed8' }} />
                    <button type="submit" disabled={loading || !phone} style={{ background: !phone ? '#e5e7eb' : '#1d4ed8', color: !phone ? '#9ca3af' : 'white', fontWeight: 700, padding: '13px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: !phone ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
                      {loading ? 'Sending...' : 'Get Free Callback'}
                    </button>
                  </div>
                </form>
                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  <a href="https://wa.me/918588967050?text=Hi+I+want+a+free+surgery+consultation" target="_blank" rel="noopener noreferrer" style={{ flex: 1, background: '#22c55e', color: 'white', fontWeight: 600, padding: '11px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', textAlign: 'center' }}>WhatsApp Us</a>
                  <button onClick={() => setShow(false)} style={{ flex: 1, background: 'white', color: '#6b7280', border: '1px solid #e5e7eb', padding: '11px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}>Maybe Later</button>
                </div>
                <p style={{ fontSize: '11px', color: '#9ca3af', textAlign: 'center', margin: '10px 0 0' }}>
                  By clicking, you consent to us sharing your details with Healthcare Partners.
                </p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <p style={{ fontSize: '40px', margin: '0 0 12px' }}>✅</p>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>We will call you shortly!</h3>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: '0 0 16px' }}>Our care coordinator will call within 30 minutes. Please keep your phone handy.</p>
                <button onClick={() => setShow(false)} style={{ background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '11px 28px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}>Continue Browsing</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
