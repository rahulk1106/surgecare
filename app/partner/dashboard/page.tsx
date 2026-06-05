'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const DEFAULT_COMMISSIONS: Record<string, number> = {
  'Proctology': 500, 'Laparoscopy': 500, 'General Surgery': 500,
  'Urology': 750, 'ENT': 500, 'Ophthalmology': 500, 'Aesthetics': 750,
  'Gynecology': 1000, 'Orthopaedics': 2000,
  'Cardiac Surgery': 5000, 'Oncology': 3000, 'Other': 500,
}

const TIER_META: Record<string, {icon: string, label: string, color: string, bg: string}> = {
  silver:  { icon: '🥈', label: 'Silver',  color: '#6b7280', bg: '#f9fafb' },
  gold:    { icon: '🥇', label: 'Gold',    color: '#b45309', bg: '#fefce8' },
  diamond: { icon: '💎', label: 'Diamond', color: '#1d4ed8', bg: '#eff6ff' },
}

const STATUS_STYLE: Record<string, {bg: string, text: string, label: string}> = {
  pending: {bg: '#eff6ff', text: '#1d4ed8', label: 'Pending Review'},
  contacted: {bg: '#fefce8', text: '#b45309', label: 'MySurgery Contacted'},
  qualified: {bg: '#f0fdf4', text: '#16a34a', label: 'Qualified Lead'},
  converted: {bg: '#dcfce7', text: '#15803d', label: '✓ Converted — Earning!'},
  'not-interested': {bg: '#fef2f2', text: '#dc2626', label: 'Not Interested'},
}

export default function PartnerDashboard() {
  const router = useRouter()
  const [partner, setPartner] = useState<any>(null)
  const [settings, setSettings] = useState<any>(null)
  const [tierInfo, setTierInfo] = useState<any>(null)
  const [leads, setLeads] = useState<any[]>([])
  const [stats, setStats] = useState<any>({})
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ patientName: '', patientPhone: '', procedure: '', city: '', notes: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle'|'success'|'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('partner')
    if (!stored) { router.push('/partner'); return }
    const p = JSON.parse(stored)
    setPartner(p)
    // Fetch commission settings
    fetch('/api/admin/settings').then(r => r.json()).then(data => {
      if (data.settings) {
        setSettings(data.settings)
        const tier = p.tier || 'silver'
        setTierInfo(data.settings.tiers?.[tier])
      }
    }).catch(() => {})
  }, [])

  const fetchLeads = useCallback(async () => {
    if (!partner) return
    setLoading(true)
    try {
      const res = await fetch('/api/partner/leads', {
        headers: { 'x-partner-code': partner.code, 'x-partner-phone': partner.phone }
      })
      if (res.status === 401) { localStorage.removeItem('partner'); router.push('/partner'); return }
      const data = await res.json()
      setLeads(data.leads || [])
      setStats(data.stats || {})
    } catch {}
    setLoading(false)
  }, [partner])

  useEffect(() => { if (partner) fetchLeads() }, [partner, fetchLeads])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.patientPhone) { setSubmitError('Patient phone is required'); return }
    setSubmitting(true); setSubmitError(''); setSubmitStatus('idle')
    try {
      const res = await fetch('/api/partner/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-partner-code': partner.code, 'x-partner-phone': partner.phone },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.error) { setSubmitError(data.error); setSubmitStatus('error') }
      else { setSubmitStatus('success'); setForm({ patientName: '', patientPhone: '', procedure: '', city: '', notes: '' }); setShowForm(false); fetchLeads() }
    } catch { setSubmitError('Network error. Please try again.'); setSubmitStatus('error') }
    setSubmitting(false)
  }

  const logout = () => { localStorage.removeItem('partner'); router.push('/partner') }

  if (!partner) return <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui'}}>Loading...</div>

  return (
    <div style={{minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      {/* HEADER */}
      <div style={{background: '#0f1f35', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{width: '32px', height: '32px', background: '#1d4ed8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700}}>M</div>
          <div>
            <p style={{color: 'white', fontWeight: 700, fontSize: '15px', margin: 0}}>MySurgery Partner</p>
            <p style={{color: '#93c5fd', fontSize: '12px', margin: 0}}>Code: {partner.code}</p>
          </div>
        </div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <button onClick={() => setShowForm(true)} style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '8px 16px', borderRadius: '8px', border: 'none', fontSize: '13px', cursor: 'pointer'}}>+ Submit Lead</button>
          <button onClick={logout} style={{background: 'transparent', color: '#93c5fd', border: '1px solid #374151', padding: '8px 14px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer'}}>Logout</button>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '24px'}}>

        {/* WELCOME */}
        <div style={{background: 'linear-gradient(135deg, #1d4ed8 0%, #0f1f35 100%)', borderRadius: '16px', padding: '24px', marginBottom: '20px', color: 'white'}}>
          <p style={{fontSize: '18px', fontWeight: 700, margin: '0 0 4px'}}>Welcome, {partner.name}! 👋</p>
          <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap'}}>
            <p style={{color: '#93c5fd', margin: 0, fontSize: '14px'}}>Your referral code: <strong style={{color: 'white', fontSize: '18px', letterSpacing: '0.05em'}}>{partner.code}</strong></p>
            {(() => { const tier = partner.tier || 'silver'; const tm = TIER_META[tier]; return (
              <span style={{background: tm.bg, color: tm.color, fontWeight: 700, padding: '4px 12px', borderRadius: '20px', fontSize: '13px'}}>
                {tm.icon} {tm.label} Partner
              </span>
            )})()}
          </div>
          <p style={{color: '#93c5fd', fontSize: '13px', margin: 0}}>Share your referral code with patients. When they convert, you earn!</p>
        </div>

        {/* STATS */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '14px', marginBottom: '24px'}}>
          {[
            {label: 'Total Leads', value: stats.totalLeads || 0, color: '#1d4ed8', bg: '#eff6ff'},
            {label: 'Contacted', value: stats.contactedLeads || 0, color: '#b45309', bg: '#fefce8'},
            {label: 'Converted', value: stats.convertedLeads || 0, color: '#15803d', bg: '#dcfce7'},
            {label: 'Total Earnings', value: 'Rs ' + (stats.totalEarnings || 0).toLocaleString('en-IN'), color: '#15803d', bg: '#f0fdf4'},
            {label: 'Pending Payout', value: 'Rs ' + (stats.pendingEarnings || 0).toLocaleString('en-IN'), color: '#7c3aed', bg: '#faf5ff'},
          ].map(s => (
            <div key={s.label} style={{background: s.bg, border: '1px solid ' + s.color + '30', borderRadius: '12px', padding: '16px', textAlign: 'center'}}>
              <p style={{fontSize: '22px', fontWeight: 700, color: s.color, margin: '0 0 4px'}}>{s.value}</p>
              <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* SUCCESS MESSAGE */}
        {submitStatus === 'success' && (
          <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px', padding: '14px 18px', marginBottom: '16px'}}>
            <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>✓ Lead submitted successfully! MySurgery will contact the patient within 30 minutes.</p>
          </div>
        )}

        {/* COMMISSION TABLE */}
        <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '20px', marginBottom: '24px'}}>
          {settings?.tiers && (() => {
            const tier = partner.tier || 'silver'
            const tm = TIER_META[tier]
            const nextTier = tier === 'silver' ? 'gold' : tier === 'gold' ? 'diamond' : null
            const nextTierInfo = nextTier ? settings.tiers[nextTier] : null
            return (
              <div style={{background: tm.bg, border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', marginBottom: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px'}}>
                  <div>
                    <p style={{fontWeight: 700, color: tm.color, margin: '0 0 4px', fontSize: '16px'}}>{tm.icon} {tm.label} Partner</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>{settings.tiers[tier]?.description || ''}</p>
                  </div>
                  {nextTierInfo && (
                    <div style={{textAlign: 'right'}}>
                      <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 2px'}}>Next tier: {TIER_META[nextTier!].icon} {TIER_META[nextTier!].label}</p>
                      <p style={{fontSize: '12px', color: '#374151', margin: 0}}>
                        Need {nextTierInfo.minLeads - (stats.totalLeads || 0)} more leads & {Math.max(0, nextTierInfo.minConverted - (stats.convertedLeads || 0))} more conversions
                      </p>
                    </div>
                  )}
                  {!nextTier && <span style={{fontSize: '13px', fontWeight: 600, color: '#1d4ed8'}}>🏆 Highest tier achieved!</span>}
                </div>
              </div>
            )
          })()}
          <h2 style={{fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '14px'}}>My Commission Rates ({(() => { const tier = partner.tier || 'silver'; return TIER_META[tier].icon + ' ' + TIER_META[tier].label })()})</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px'}}>
            {Object.entries(((settings?.commissions?.[partner?.tier || 'silver']) || DEFAULT_COMMISSIONS) as Record<string, number>).map(([cat, amount]) => (
              <div key={cat} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                <span style={{fontSize: '13px', color: '#374151'}}>{cat}</span>
                <span style={{fontSize: '13px', fontWeight: 700, color: '#16a34a'}}>Rs {amount.toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <p style={{fontSize: '12px', color: '#6b7280', marginTop: '10px', marginBottom: 0}}>Commission is paid within 7 days of patient converting (surgery booked and deposit paid). Paid via bank transfer or UPI.</p>
        </div>

        {/* LEADS TABLE */}
        <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px'}}>
          <div style={{padding: '16px 20px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 style={{fontSize: '17px', fontWeight: 700, color: '#111827', margin: 0}}>My Submitted Leads</h2>
            <button onClick={fetchLeads} style={{fontSize: '13px', color: '#1d4ed8', background: 'none', border: 'none', cursor: 'pointer'}}>↻ Refresh</button>
          </div>
          {loading ? (
            <div style={{padding: '40px', textAlign: 'center', color: '#6b7280'}}>Loading...</div>
          ) : leads.length === 0 ? (
            <div style={{padding: '40px', textAlign: 'center'}}>
              <p style={{fontSize: '32px', margin: '0 0 8px'}}>📋</p>
              <p style={{color: '#374151', fontWeight: 600, marginBottom: '6px'}}>No leads yet</p>
              <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '16px'}}>Submit your first lead and start earning!</p>
              <button onClick={() => setShowForm(true)} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer'}}>Submit First Lead</button>
            </div>
          ) : (
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                <thead>
                  <tr style={{background: '#f9fafb'}}>
                    {['Date', 'Patient Name', 'Phone', 'Procedure', 'City', 'Status', 'Commission'].map(h => (
                      <th key={h} style={{padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#374151', fontSize: '11px', textTransform: 'uppercase', whiteSpace: 'nowrap', borderBottom: '1px solid #e5e7eb'}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => {
                    const ss = STATUS_STYLE[lead.status] || STATUS_STYLE.pending
                    return (
                      <tr key={lead._id} style={{borderBottom: '1px solid #f3f4f6', background: i % 2 === 0 ? 'white' : '#fafafa'}}>
                        <td style={{padding: '10px 14px', color: '#6b7280', whiteSpace: 'nowrap', fontSize: '12px'}}>{lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-IN') : '—'}</td>
                        <td style={{padding: '10px 14px', fontWeight: 500, color: '#111827'}}>{lead.patientName || '—'}</td>
                        <td style={{padding: '10px 14px', color: '#374151'}}>{lead.patientPhone ? lead.patientPhone.slice(0,6) + 'XXXX' : '—'}</td>
                        <td style={{padding: '10px 14px', color: '#374151'}}>{lead.procedure || '—'}</td>
                        <td style={{padding: '10px 14px', color: '#374151'}}>{lead.city || '—'}</td>
                        <td style={{padding: '10px 14px'}}>
                          <span style={{fontSize: '11px', fontWeight: 600, background: ss.bg, color: ss.text, padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap'}}>{ss.label}</span>
                        </td>
                        <td style={{padding: '10px 14px', fontWeight: 600, color: lead.status === 'converted' ? '#16a34a' : '#9ca3af'}}>
                          {lead.status === 'converted' ? 'Rs ' + (lead.commission || 0).toLocaleString('en-IN') : '—'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* HOW IT WORKS */}
        <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', padding: '20px'}}>
          <h3 style={{fontSize: '16px', fontWeight: 700, color: '#1e3a8a', marginBottom: '14px'}}>How does earning work?</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {[['1', 'Submit a lead', 'Enter patient name, phone, and the surgery they need.'],['2', 'MySurgery contacts them', 'Our team calls the patient within 30 minutes.'],['3', 'Patient books surgery', 'When the patient pays deposit and books surgery, your lead is marked Converted.'],['4', 'You get paid', 'Commission is transferred to your bank/UPI within 7 days of conversion.']].map(([step, title, desc]) => (
              <div key={step} style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <div style={{width: '28px', height: '28px', background: '#1d4ed8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '13px', flexShrink: 0}}>{step}</div>
                <div>
                  <p style={{fontWeight: 600, color: '#1e3a8a', margin: '0 0 2px', fontSize: '14px'}}>{title}</p>
                  <p style={{fontSize: '13px', color: '#374151', margin: 0}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{fontSize: '13px', color: '#4b5563', marginTop: '14px', marginBottom: 0}}>Questions? Call MySurgery at <a href='tel:+918588967050' style={{color: '#1d4ed8', fontWeight: 600}}>8588967050</a></p>
        </div>
      </div>

      {/* SUBMIT LEAD MODAL */}
      {showForm && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px'}}>
          <div style={{background: 'white', borderRadius: '16px', padding: '28px', width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>Submit New Lead</h2>
            <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '20px'}}>Patient phone is required. All other fields optional but help us convert faster.</p>
            {submitError && (
              <div style={{background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '10px 14px', marginBottom: '14px'}}>
                <p style={{color: '#dc2626', fontSize: '13px', margin: 0}}>⚠ {submitError}</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Patient Phone *</label>
                  <input type='tel' value={form.patientPhone} onChange={e => setForm({...form, patientPhone: e.target.value})} placeholder='10-digit mobile number' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} autoFocus />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Patient Name</label>
                  <input type='text' value={form.patientName} onChange={e => setForm({...form, patientName: e.target.value})} placeholder='Patient full name' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Surgery / Procedure</label>
                  <input type='text' value={form.procedure} onChange={e => setForm({...form, procedure: e.target.value})} placeholder='e.g. Piles Surgery, Hernia, Knee Replacement' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>City</label>
                  <input type='text' value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder='Patient city' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Notes (optional)</label>
                  <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder='Any additional information about the patient...' rows={2} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'}} />
                </div>
                <button type='submit' disabled={submitting || !form.patientPhone} style={{background: !form.patientPhone ? '#e5e7eb' : '#1d4ed8', color: !form.patientPhone ? '#9ca3af' : 'white', fontWeight: 700, padding: '13px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: !form.patientPhone ? 'not-allowed' : 'pointer'}}>
                  {submitting ? 'Submitting...' : 'Submit Lead →'}
                </button>
              </div>
            </form>
            <button onClick={() => { setShowForm(false); setSubmitError('') }} style={{width: '100%', background: '#f9fafb', color: '#374151', border: '1px solid #e5e7eb', padding: '11px', borderRadius: '10px', fontSize: '14px', cursor: 'pointer', marginTop: '10px'}}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}