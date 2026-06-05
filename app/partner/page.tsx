'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PartnerLogin() {
  const router = useRouter()
  const [form, setForm] = useState({ phone: '', pin: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.phone || !form.pin) { setError('Phone and PIN required'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/partner/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (data.error) { setError(data.error); setLoading(false); return }
      localStorage.setItem('partner', JSON.stringify(data.partner))
      router.push('/partner/dashboard')
    } catch { setError('Something went wrong. Please try again.'); setLoading(false) }
  }

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <div style={{width: '100%', maxWidth: '420px'}}>
        <div style={{textAlign: 'center', marginBottom: '24px'}}>
          <a href='/' style={{display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '16px'}}>
            <div style={{width: '36px', height: '36px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1d4ed8', fontSize: '18px'}}>M</div>
            <span style={{color: 'white', fontWeight: 700, fontSize: '20px'}}>MySurgery</span>
          </a>
          <h1 style={{fontSize: '26px', fontWeight: 700, color: 'white', margin: '0 0 6px'}}>Partner Login</h1>
          <p style={{color: '#93c5fd', fontSize: '14px', margin: 0}}>Enter your phone and PIN to access your dashboard</p>
        </div>
        <div style={{background: 'white', borderRadius: '16px', padding: '32px'}}>
          {error && <div style={{background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px'}}><p style={{color: '#dc2626', margin: 0, fontSize: '14px'}}>⚠ {error}</p></div>}
          <form onSubmit={handleLogin}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Phone Number</label>
                <input type='tel' value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder='Registered mobile number' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} autoFocus />
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>4-digit PIN</label>
                <input type='password' value={form.pin} onChange={e => setForm({...form, pin: e.target.value})} placeholder='Your PIN' maxLength={4} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
              </div>
              <button type='submit' disabled={loading} style={{background: loading ? '#93c5fd' : '#1d4ed8', color: 'white', fontWeight: 700, padding: '13px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer'}}>
                {loading ? 'Logging in...' : 'Login →'}
              </button>
            </div>
          </form>
          <p style={{textAlign: 'center', fontSize: '13px', color: '#6b7280', marginTop: '16px'}}>Not registered? <a href='/partner/register' style={{color: '#1d4ed8', fontWeight: 500}}>Join as Partner</a></p>
          <p style={{textAlign: 'center', fontSize: '13px', color: '#6b7280', marginTop: '8px'}}>Forgot PIN? Call <a href='tel:+918588967050' style={{color: '#1d4ed8'}}>8588967050</a></p>
        </div>
      </div>
    </div>
  )
}