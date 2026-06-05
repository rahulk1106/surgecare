'use client'
import { useState } from 'react'

export default function PartnerRegister() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', referralType: 'individual' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) { setError('Name and phone are required'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/partner/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (data.error) setError(data.error)
      else setResult(data)
    } catch { setError('Something went wrong. Please try again.') }
    setLoading(false)
  }

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <div style={{width: '100%', maxWidth: '480px'}}>
        <div style={{textAlign: 'center', marginBottom: '28px'}}>
          <a href='/' style={{display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '16px'}}>
            <div style={{width: '36px', height: '36px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#1d4ed8', fontSize: '18px'}}>M</div>
            <span style={{color: 'white', fontWeight: 700, fontSize: '20px'}}>MySurgery</span>
          </a>
          <h1 style={{fontSize: '28px', fontWeight: 700, color: 'white', margin: '0 0 8px'}}>Join as Referral Partner</h1>
          <p style={{color: '#93c5fd', fontSize: '15px', margin: 0}}>Refer patients and earn Rs 500 to Rs 5,000 per converted lead</p>
        </div>

        {!result ? (
          <div style={{background: 'white', borderRadius: '16px', padding: '32px'}}>
            {/* EARNINGS INFO */}
            <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '16px', marginBottom: '24px'}}>
              <p style={{fontWeight: 700, color: '#16a34a', margin: '0 0 8px', fontSize: '15px'}}>💰 How much can you earn?</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: '#374151'}}>
                {[['General Surgery (Piles, Hernia, Gallbladder)', 'Rs 500 per conversion'], ['Urology (Kidney, Circumcision)', 'Rs 750 per conversion'], ['Orthopaedics (Knee Replacement)', 'Rs 2,000 per conversion'], ['Gynecology (MTP, Fibroid)', 'Rs 1,000 per conversion'], ['Transplant / Cardiac Surgery', 'Rs 5,000 per conversion']].map(([cat, earn]) => (
                  <div key={cat} style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #dcfce7'}}>
                    <span>{cat}</span>
                    <span style={{fontWeight: 600, color: '#16a34a'}}>{earn}</span>
                  </div>
                ))}
              </div>
            </div>

            {error && <div style={{background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px'}}><p style={{color: '#dc2626', margin: 0, fontSize: '14px'}}>⚠ {error}</p></div>}

            <form onSubmit={handleSubmit}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Full Name *</label>
                  <input type='text' value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder='Your full name' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} required />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Phone Number *</label>
                  <input type='tel' value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder='10-digit mobile number' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} required />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Email (optional)</label>
                  <input type='email' value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder='your@email.com' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>City</label>
                  <input type='text' value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder='Your city' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>I am a...</label>
                  <select value={form.referralType} onChange={e => setForm({...form, referralType: e.target.value})} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', background: 'white', boxSizing: 'border-box'}}>
                    <option value='individual'>Individual (friend/family referral)</option>
                    <option value='doctor'>Doctor / Healthcare Professional</option>
                    <option value='pharmacy'>Pharmacist / Medical Shop</option>
                    <option value='lab'>Diagnostic Lab / Pathology</option>
                    <option value='insurance'>Insurance Agent</option>
                    <option value='corporate'>Corporate / HR Professional</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <button type='submit' disabled={loading} style={{background: loading ? '#93c5fd' : '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer'}}>
                  {loading ? 'Registering...' : 'Register as Partner →'}
                </button>
              </div>
            </form>
            <p style={{textAlign: 'center', fontSize: '13px', color: '#6b7280', marginTop: '16px'}}>Already registered? <a href='/partner' style={{color: '#1d4ed8', fontWeight: 500}}>Login here</a></p>
          </div>
        ) : (
          <div style={{background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center'}}>
            <div style={{fontSize: '48px', marginBottom: '16px'}}>🎉</div>
            <h2 style={{fontSize: '22px', fontWeight: 700, color: '#111827', marginBottom: '8px'}}>Welcome to MySurgery Partner Program!</h2>
            <p style={{color: '#4b5563', marginBottom: '24px'}}>Your account is ready. Save your credentials below.</p>
            <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '20px', marginBottom: '20px', textAlign: 'left'}}>
              <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>Your Referral Code</p>
              <p style={{fontSize: '28px', fontWeight: 700, color: '#16a34a', margin: '0 0 16px', letterSpacing: '0.05em'}}>{result.code}</p>
              <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>Your PIN (keep this secret)</p>
              <p style={{fontSize: '28px', fontWeight: 700, color: '#1d4ed8', margin: 0, letterSpacing: '0.1em'}}>{result.pin}</p>
            </div>
            <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '10px', padding: '14px', marginBottom: '20px', textAlign: 'left'}}>
              <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 4px', fontSize: '14px'}}>⚠ Important — Save your credentials</p>
              <p style={{fontSize: '13px', color: '#78350f', margin: 0}}>Your referral code is <strong>{result.code}</strong> and PIN is <strong>{result.pin}</strong>. You will need these to login. Screenshot this page.</p>
            </div>
            <a href='/partner' style={{display: 'block', background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Go to Partner Dashboard →</a>
          </div>
        )}
      </div>
    </div>
  )
}