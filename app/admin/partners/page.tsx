'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const COMMISSION_RATES: Record<string, number> = {
  'Proctology': 500, 'Laparoscopy': 500, 'General Surgery': 500,
  'Urology': 750, 'ENT': 500, 'Ophthalmology': 500, 'Aesthetics': 750,
  'Gynecology': 1000, 'Orthopaedics': 2000,
  'Cardiac Surgery': 5000, 'Oncology': 3000, 'Other': 500,
}

const LEAD_STATUS = ['pending', 'contacted', 'qualified', 'converted', 'not-interested']
const STATUS_STYLE: Record<string, {bg: string, text: string}> = {
  pending: {bg: '#eff6ff', text: '#1d4ed8'},
  contacted: {bg: '#fefce8', text: '#b45309'},
  qualified: {bg: '#f0fdf4', text: '#16a34a'},
  converted: {bg: '#dcfce7', text: '#15803d'},
  'not-interested': {bg: '#fef2f2', text: '#dc2626'},
}

export default function AdminPartners() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [partners, setPartners] = useState<any[]>([])
  const [partnerLeads, setPartnerLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState<'leads'|'partners'>('leads')
  const [msg, setMsg] = useState('')
  const [editingLead, setEditingLead] = useState<any>(null)
  const [saving, setSaving] = useState(false)
  const [filterPartner, setFilterPartner] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const H = { 'Content-Type': 'application/json', 'x-admin-password': password }

  const flash = (text: string) => { setMsg(text); setTimeout(() => setMsg(''), 3000) }

  const handleLogin = async () => {
    const res = await fetch('/api/admin/partner', { headers: { 'x-admin-password': password } })
    if (res.status === 401) { setAuthError('Wrong password'); return }
    setAuthed(true)
  }

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/partner', { headers: H })
      const data = await res.json()
      setPartners(data.partners || [])
      setPartnerLeads(data.partnerLeads || [])
    } catch {}
    setLoading(false)
  }, [password])

  useEffect(() => { if (authed) fetchData() }, [authed, fetchData])

  const updateLead = async (lead: any, updates: any) => {
    setSaving(true)
    const res = await fetch('/api/admin/partner', {
      method: 'PATCH',
      headers: H,
      body: JSON.stringify({ _id: lead._id, ...updates })
    })
    if (res.ok) { flash('Updated!'); fetchData(); setEditingLead(null) }
    else flash('Error updating')
    setSaving(false)
  }

  const filteredLeads = partnerLeads.filter(l => {
    if (filterPartner !== 'all' && l.partnerCode !== filterPartner) return false
    if (filterStatus !== 'all' && l.status !== filterStatus) return false
    return true
  })

  const partnerStats = partners.map(p => ({
    ...p,
    leads: partnerLeads.filter(l => l.partnerCode === p.code).length,
    converted: partnerLeads.filter(l => l.partnerCode === p.code && l.status === 'converted').length,
    pendingPayout: partnerLeads.filter(l => l.partnerCode === p.code && l.status === 'converted' && !l.paid).reduce((s: number, l: any) => s + (l.commission || 0), 0),
    totalPaid: partnerLeads.filter(l => l.partnerCode === p.code && l.paid).reduce((s: number, l: any) => s + (l.commission || 0), 0),
  }))

  if (!authed) return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', fontFamily: 'system-ui'}}>
      <div style={{background: 'white', borderRadius: '16px', padding: '36px', width: '360px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)'}}>
        <h1 style={{fontSize: '20px', fontWeight: 700, marginBottom: '20px', textAlign: 'center'}}>Partner Management</h1>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} placeholder='Admin password' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '10px'}} autoFocus />
        {authError && <p style={{color: '#dc2626', fontSize: '13px', marginBottom: '8px'}}>⚠ {authError}</p>}
        <button onClick={handleLogin} style={{width: '100%', background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px'}}>Login →</button>
        <a href='/admin' style={{display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#6b7280'}}>← Back to Lead Dashboard</a>
      </div>
    </div>
  )

  return (
    <div style={{minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      {/* HEADER */}
      <div style={{background: '#0f1f35', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '32px', height: '32px', background: '#1d4ed8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700}}>M</div>
          <span style={{color: 'white', fontWeight: 700}}>Partner Management</span>
          {msg && <span style={{fontSize: '13px', color: '#22c55e', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px'}}>{msg}</span>}
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          <a href='/admin' style={{background: 'transparent', color: '#93c5fd', border: '1px solid #374151', padding: '8px 14px', borderRadius: '8px', fontSize: '13px', textDecoration: 'none'}}>← Lead Dashboard</a>
          <button onClick={() => setAuthed(false)} style={{background: 'transparent', color: '#93c5fd', border: '1px solid #374151', padding: '8px 14px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer'}}>Logout</button>
        </div>
      </div>

      <div style={{maxWidth: '1300px', margin: '0 auto', padding: '24px'}}>

        {/* SUMMARY STATS */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '24px'}}>
          {[
            {label: 'Total Partners', value: partners.length, color: '#1d4ed8'},
            {label: 'Total Leads', value: partnerLeads.length, color: '#b45309'},
            {label: 'Converted', value: partnerLeads.filter(l => l.status === 'converted').length, color: '#15803d'},
            {label: 'Total Payable', value: 'Rs ' + partnerLeads.filter(l => l.status === 'converted' && !l.paid).reduce((s: number, l: any) => s + (l.commission || 0), 0).toLocaleString('en-IN'), color: '#7c3aed'},
            {label: 'Total Paid', value: 'Rs ' + partnerLeads.filter(l => l.paid).reduce((s: number, l: any) => s + (l.commission || 0), 0).toLocaleString('en-IN'), color: '#16a34a'},
          ].map(s => (
            <div key={s.label} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '14px', textAlign: 'center'}}>
              <p style={{fontSize: '20px', fontWeight: 700, color: s.color, margin: '0 0 4px'}}>{s.value}</p>
              <p style={{fontSize: '11px', color: '#6b7280', margin: 0, textTransform: 'uppercase'}}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div style={{display: 'flex', gap: '8px', marginBottom: '16px'}}>
          <button onClick={() => setTab('leads')} style={{padding: '9px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: tab === 'leads' ? '#1d4ed8' : 'white', color: tab === 'leads' ? 'white' : '#374151', border: tab === 'leads' ? 'none' : '1px solid #e5e7eb'}}>
            Partner Leads ({partnerLeads.length})
          </button>
          <button onClick={() => setTab('partners')} style={{padding: '9px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: tab === 'partners' ? '#1d4ed8' : 'white', color: tab === 'partners' ? 'white' : '#374151', border: tab === 'partners' ? 'none' : '1px solid #e5e7eb'}}>
            Partners ({partners.length})
          </button>
        </div>

        {/* PARTNER LEADS TAB */}
        {tab === 'leads' && (
          <div>
            {/* FILTERS */}
            <div style={{display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap'}}>
              <select value={filterPartner} onChange={e => setFilterPartner(e.target.value)} style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 12px', fontSize: '13px', outline: 'none', background: 'white'}}>
                <option value='all'>All Partners</option>
                {partners.map(p => <option key={p.code} value={p.code}>{p.name} ({p.code})</option>)}
              </select>
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 12px', fontSize: '13px', outline: 'none', background: 'white'}}>
                <option value='all'>All Status</option>
                {LEAD_STATUS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
              </select>
              <button onClick={fetchData} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', cursor: 'pointer'}}>↻ Refresh</button>
              <span style={{fontSize: '13px', color: '#6b7280', alignSelf: 'center'}}>{filteredLeads.length} leads</span>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden'}}>
              <div style={{overflowX: 'auto'}}>
                <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                  <thead>
                    <tr style={{background: '#f9fafb', borderBottom: '1px solid #e5e7eb'}}>
                      {['Date', 'Partner', 'Patient Name', 'Phone', 'Procedure', 'City', 'Status', 'Commission', 'Paid', 'Actions'].map(h => (
                        <th key={h} style={{padding: '10px 12px', textAlign: 'left', fontWeight: 600, color: '#374151', fontSize: '11px', textTransform: 'uppercase', whiteSpace: 'nowrap'}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={10} style={{padding: '40px', textAlign: 'center', color: '#6b7280'}}>Loading...</td></tr>
                    ) : filteredLeads.length === 0 ? (
                      <tr><td colSpan={10} style={{padding: '40px', textAlign: 'center', color: '#6b7280'}}>No leads found</td></tr>
                    ) : filteredLeads.map((lead, i) => {
                      const ss = STATUS_STYLE[lead.status] || STATUS_STYLE.pending
                      return (
                        <tr key={lead._id} style={{borderBottom: '1px solid #f3f4f6', background: i % 2 === 0 ? 'white' : '#fafafa'}}>
                          <td style={{padding: '10px 12px', color: '#6b7280', whiteSpace: 'nowrap', fontSize: '12px'}}>{lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-IN') : '—'}</td>
                          <td style={{padding: '10px 12px', whiteSpace: 'nowrap'}}>
                            <p style={{fontWeight: 600, color: '#111827', margin: '0 0 2px', fontSize: '13px'}}>{lead.partnerName}</p>
                            <p style={{fontSize: '11px', color: '#6b7280', margin: 0}}>{lead.partnerCode}</p>
                          </td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{lead.patientName || '—'}</td>
                          <td style={{padding: '10px 12px', color: '#1d4ed8', fontWeight: 500}}>{lead.patientPhone}</td>
                          <td style={{padding: '10px 12px', color: '#374151', maxWidth: '130px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{lead.procedure || '—'}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{lead.city || '—'}</td>
                          <td style={{padding: '10px 12px'}}>
                            <select value={lead.status} onChange={async e => {
                              const newStatus = e.target.value
                              const commission = newStatus === 'converted' ? (COMMISSION_RATES[lead.category || 'Other'] || 500) : lead.commission || 0
                              await updateLead(lead, { status: newStatus, commission })
                            }}
                              style={{fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px', border: 'none', background: ss.bg, color: ss.text, cursor: 'pointer', outline: 'none'}}>
                              {LEAD_STATUS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
                            </select>
                          </td>
                          <td style={{padding: '10px 12px'}}>
                            {lead.status === 'converted' ? (
                              <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                                <span style={{fontWeight: 700, color: '#16a34a', fontSize: '13px'}}>Rs {(lead.commission || 0).toLocaleString('en-IN')}</span>
                                <button onClick={() => setEditingLead(lead)} style={{fontSize: '10px', padding: '2px 6px', borderRadius: '4px', border: '1px solid #e5e7eb', background: '#f9fafb', cursor: 'pointer', color: '#6b7280'}}>Edit</button>
                              </div>
                            ) : <span style={{color: '#9ca3af', fontSize: '12px'}}>—</span>}
                          </td>
                          <td style={{padding: '10px 12px'}}>
                            {lead.status === 'converted' && (
                              <button onClick={() => updateLead(lead, { paid: !lead.paid })}
                                style={{fontSize: '11px', padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600, background: lead.paid ? '#dcfce7' : '#fef3c7', color: lead.paid ? '#15803d' : '#92400e'}}>
                                {lead.paid ? '✓ Paid' : 'Mark Paid'}
                              </button>
                            )}
                          </td>
                          <td style={{padding: '10px 12px'}}>
                            <a href={'tel:+91'+lead.patientPhone} style={{fontSize: '11px', padding: '4px 8px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#eff6ff', color: '#1d4ed8', textDecoration: 'none'}}>📞</a>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PARTNERS TAB */}
        {tab === 'partners' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            {partnerStats.map((p: any) => (
              <div key={p.code} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '20px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'start'}}>
                  <div>
                    <p style={{fontWeight: 700, color: '#111827', fontSize: '16px', margin: '0 0 4px'}}>{p.name}</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 2px'}}>📱 {p.phone}</p>
                    {p.email && <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 2px'}}>✉ {p.email}</p>}
                    {p.city && <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 6px'}}>📍 {p.city}</p>}
                    <span style={{fontSize: '11px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px', fontWeight: 600}}>{p.referralType || 'individual'}</span>
                  </div>
                  <div>
                    <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.04em'}}>Referral Code</p>
                    <p style={{fontSize: '22px', fontWeight: 700, color: '#1d4ed8', margin: '0 0 4px', letterSpacing: '0.05em'}}>{p.code}</p>
                    <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Joined {p.createdAt ? new Date(p.createdAt).toLocaleDateString('en-IN') : '—'}</p>
                  </div>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                    {[
                      {label: 'Total Leads', value: p.leads, color: '#1d4ed8'},
                      {label: 'Converted', value: p.converted, color: '#15803d'},
                      {label: 'Pending Payout', value: 'Rs ' + (p.pendingPayout || 0).toLocaleString('en-IN'), color: '#7c3aed'},
                      {label: 'Total Paid', value: 'Rs ' + (p.totalPaid || 0).toLocaleString('en-IN'), color: '#16a34a'},
                    ].map(s => (
                      <div key={s.label} style={{background: '#f9fafb', borderRadius: '8px', padding: '10px'}}>
                        <p style={{fontSize: '16px', fontWeight: 700, color: s.color, margin: '0 0 2px'}}>{s.value}</p>
                        <p style={{fontSize: '11px', color: '#6b7280', margin: 0}}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <a href={'tel:+91'+p.phone} style={{display: 'block', textAlign: 'center', background: '#eff6ff', color: '#1d4ed8', padding: '9px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 500}}>📞 Call Partner</a>
                    <a href={'https://wa.me/91'+p.phone+'?text=Hi+'+encodeURIComponent(p.name)+',+your+MySurgery+referral+update'} target='_blank' rel='noopener noreferrer' style={{display: 'block', textAlign: 'center', background: '#f0fdf4', color: '#16a34a', padding: '9px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 500}}>WhatsApp Partner</a>
                    {p.pendingPayout > 0 && (
                      <button onClick={async () => {
                        if (!confirm('Mark all pending leads as paid for ' + p.name + '?')) return
                        const pending = partnerLeads.filter(l => l.partnerCode === p.code && l.status === 'converted' && !l.paid)
                        for (const lead of pending) {
                          await fetch('/api/admin/partner', { method: 'PATCH', headers: H, body: JSON.stringify({ _id: lead._id, paid: true, commission: lead.commission }) })
                        }
                        flash('All payouts marked as paid for ' + p.name)
                        fetchData()
                      }} style={{background: '#7c3aed', color: 'white', fontWeight: 600, padding: '9px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '13px'}}>
                        Mark All Paid (Rs {p.pendingPayout.toLocaleString('en-IN')})
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {partners.length === 0 && !loading && (
              <div style={{background: 'white', borderRadius: '12px', padding: '48px', textAlign: 'center', border: '1px solid #e5e7eb'}}>
                <p style={{fontSize: '32px', margin: '0 0 8px'}}>👥</p>
                <p style={{fontWeight: 600, color: '#374151', marginBottom: '6px'}}>No partners yet</p>
                <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '16px'}}>Share the partner registration link to get started</p>
                <div style={{background: '#f9fafb', borderRadius: '8px', padding: '12px', fontFamily: 'monospace', fontSize: '14px', color: '#1d4ed8'}}>mysurgery.in/partner/register</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* EDIT COMMISSION MODAL */}
      {editingLead && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px'}}>
          <div style={{background: 'white', borderRadius: '16px', padding: '28px', width: '100%', maxWidth: '400px'}}>
            <h2 style={{fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '16px'}}>Edit Commission</h2>
            <div style={{background: '#f9fafb', borderRadius: '10px', padding: '14px', marginBottom: '16px'}}>
              <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>Partner: <strong style={{color: '#111827'}}>{editingLead.partnerName}</strong></p>
              <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>Patient: <strong style={{color: '#111827'}}>{editingLead.patientPhone}</strong></p>
              <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>Procedure: <strong style={{color: '#111827'}}>{editingLead.procedure || 'Not specified'}</strong></p>
            </div>
            <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Commission Amount (Rs)</label>
            <input type='number' defaultValue={editingLead.commission || 0} id='commissionInput'
              style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '16px', outline: 'none', boxSizing: 'border-box', marginBottom: '8px'}} />
            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px'}}>
              {[500, 750, 1000, 2000, 3000, 5000].map(amt => (
                <button key={amt} onClick={() => { const el = document.getElementById('commissionInput') as HTMLInputElement; if(el) el.value = String(amt) }}
                  style={{fontSize: '12px', padding: '5px 10px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#f9fafb', cursor: 'pointer'}}>
                  Rs {amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              <button onClick={() => {
                const el = document.getElementById('commissionInput') as HTMLInputElement
                const amt = parseInt(el?.value || '0')
                updateLead(editingLead, { commission: amt })
              }} disabled={saving} style={{flex: 1, background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '12px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '14px'}}>
                {saving ? 'Saving...' : 'Save Commission'}
              </button>
              <button onClick={() => setEditingLead(null)} style={{flex: 1, background: '#f9fafb', color: '#374151', border: '1px solid #e5e7eb', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px'}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}