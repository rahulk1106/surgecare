'use client'
import { useState } from 'react'

export default function DataDeletionPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', reason: '', type: 'deletion' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.phone && !form.email) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name || 'Data Request',
          phone: form.phone || 'Email only',
          procedure: 'DPDP Data Request — ' + form.type,
          city: 'N/A',
          notes: 'Request type: ' + form.type + ' | Reason: ' + form.reason + ' | Email: ' + form.email,
          sourcePage: typeof window !== 'undefined' ? window.location.href : '/data-deletion-request',
        }),
      })
      setSubmitted(true)
    } catch {}
    setLoading(false)
  }

  const inp: React.CSSProperties = { width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }
  const lbl: React.CSSProperties = { fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px' }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '680px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '8px', fontSize: '13px', color: '#6b7280'}}>
        <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> {' › '}
        <a href="/privacy-policy" style={{color: '#6b7280', textDecoration: 'none'}}>Privacy Policy</a> {' › '}
        <span>Data Request</span>
      </div>

      <h1 style={{fontSize: '30px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px', marginTop: '16px'}}>Data Deletion & Rights Request</h1>
      <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '24px'}}>Under India's Digital Personal Data Protection Act (DPDP Act), 2023</p>

      <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '18px 22px', marginBottom: '24px'}}>
        <p style={{fontWeight: 600, color: '#1e3a8a', margin: '0 0 8px', fontSize: '15px'}}>🔒 Your Rights under DPDP Act, 2023</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
          {[
            ['Right to Access', 'Get a summary of all personal data we hold about you'],
            ['Right to Correction', 'Correct inaccurate or incomplete personal data'],
            ['Right to Erasure', 'Request deletion of your personal data from our systems'],
            ['Right to Withdraw Consent', 'Stop us from processing your data going forward'],
            ['Right to Grievance', 'Raise a complaint about our data practices'],
          ].map(([right, desc]) => (
            <div key={right} style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
              <span style={{color: '#1d4ed8', fontWeight: 700, flexShrink: 0}}>✓</span>
              <div>
                <span style={{fontWeight: 600, color: '#1e3a8a', fontSize: '13px'}}>{right}: </span>
                <span style={{fontSize: '13px', color: '#374151'}}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!submitted ? (
        <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '28px'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>Submit Your Data Request</h2>
          <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '20px'}}>We will process your request within 30 days as required by the DPDP Act, 2023.</p>

          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div>
                <label style={lbl}>Request Type *</label>
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} style={inp}>
                  <option value="deletion">Data Deletion — Delete all my personal data</option>
                  <option value="access">Data Access — Send me all data you hold about me</option>
                  <option value="correction">Data Correction — Correct my personal data</option>
                  <option value="withdraw">Withdraw Consent — Stop processing my data</option>
                  <option value="grievance">Grievance — Raise a complaint about data use</option>
                </select>
              </div>
              <div>
                <label style={lbl}>Your Name</label>
                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name as registered with us" style={inp} />
              </div>
              <div>
                <label style={lbl}>Phone Number *</label>
                <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Phone number used when interacting with MySurgery" style={inp} />
                <p style={{fontSize: '12px', color: '#9ca3af', margin: '4px 0 0'}}>Used to identify your data in our systems</p>
              </div>
              <div>
                <label style={lbl}>Email Address</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" style={inp} />
              </div>
              <div>
                <label style={lbl}>Reason / Additional Details</label>
                <textarea value={form.reason} onChange={e => setForm({...form, reason: e.target.value})} rows={3} placeholder="Please describe your request in detail..." style={{...inp, resize: 'vertical'}} />
              </div>
              <button type="submit" disabled={loading || (!form.phone && !form.email)}
                style={{background: !form.phone && !form.email ? '#e5e7eb' : '#1d4ed8', color: !form.phone && !form.email ? '#9ca3af' : 'white', fontWeight: 700, padding: '14px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: !form.phone && !form.email ? 'not-allowed' : 'pointer', fontFamily: 'inherit'}}>
                {loading ? 'Submitting...' : 'Submit Data Request →'}
              </button>
            </div>
          </form>

          <p style={{fontSize: '12px', color: '#9ca3af', textAlign: 'center', marginTop: '16px'}}>
            You can also email your request directly to <a href="mailto:info.mysurgery@gmail.com" style={{color: '#1d4ed8'}}>info.mysurgery@gmail.com</a> with subject "DPDP Data Request"
          </p>
        </div>
      ) : (
        <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '16px', padding: '36px', textAlign: 'center'}}>
          <p style={{fontSize: '48px', margin: '0 0 16px'}}>✅</p>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#16a34a', marginBottom: '8px'}}>Request Submitted Successfully</h2>
          <p style={{fontSize: '15px', color: '#374151', marginBottom: '16px', lineHeight: '1.7'}}>
            We have received your <strong>{form.type}</strong> request. Our Data Protection team will process it within <strong>30 days</strong> as required by the DPDP Act, 2023.
          </p>
          <p style={{fontSize: '14px', color: '#4b5563', marginBottom: '20px'}}>
            You will receive a confirmation and response at the contact details you provided.
          </p>
          <div style={{background: 'white', borderRadius: '10px', padding: '14px', fontSize: '13px', color: '#374151'}}>
            <p style={{margin: '0 0 4px'}}><strong>Reference:</strong> DPDP-{Date.now().toString().slice(-6)}</p>
            <p style={{margin: 0}}><strong>Contact:</strong> info.mysurgery@gmail.com | 8588967050</p>
          </div>
        </div>
      )}

      <div style={{marginTop: '32px', padding: '20px', background: '#f9fafb', borderRadius: '12px'}}>
        <h3 style={{fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '10px'}}>What happens after you submit?</h3>
        {[
          ['Within 3 days', 'Our Data Protection team reviews your request and sends an acknowledgement'],
          ['Within 15 days', 'We verify your identity and begin processing your request'],
          ['Within 30 days', 'Your request is fully processed and you are notified of the outcome'],
          ['Data Deletion', 'All your personal data is permanently deleted from our systems and our technology partners are notified'],
        ].map(([time, action]) => (
          <div key={time} style={{display: 'flex', gap: '12px', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
            <span style={{fontSize: '12px', fontWeight: 700, color: '#1d4ed8', minWidth: '90px', flexShrink: 0}}>{time}</span>
            <span style={{fontSize: '13px', color: '#374151'}}>{action}</span>
          </div>
        ))}
      </div>

      <div style={{marginTop: '20px', textAlign: 'center'}}>
        <a href="/privacy-policy" style={{fontSize: '14px', color: '#1d4ed8'}}>← Read our Privacy Policy</a>
        <span style={{color: '#e5e7eb', margin: '0 12px'}}>|</span>
        <a href="/terms-and-conditions" style={{fontSize: '14px', color: '#1d4ed8'}}>Terms and Conditions →</a>
      </div>
    </div>
  )
}
