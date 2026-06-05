'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

const STATUSES = ['new', 'contacted', 'qualified', 'converted', 'not-interested', 'follow-up', 'sent-to-partner']
const CATEGORIES = ['Proctology', 'Laparoscopy', 'Urology', 'Gynecology', 'Orthopaedics', 'Ophthalmology', 'ENT', 'Aesthetics', 'General Surgery', 'Cardiac Surgery', 'Oncology', 'Other']
const STATUS_COLORS: Record<string, {bg: string, text: string}> = {
  new: {bg: '#eff6ff', text: '#1d4ed8'},
  contacted: {bg: '#fefce8', text: '#b45309'},
  qualified: {bg: '#f0fdf4', text: '#16a34a'},
  converted: {bg: '#dcfce7', text: '#15803d'},
  'not-interested': {bg: '#fef2f2', text: '#dc2626'},
  'follow-up': {bg: '#faf5ff', text: '#7c3aed'},
  'sent-to-partner': {bg: '#fff7ed', text: '#c2410c'},
}

type Lead = {
  _id: string
  name: string
  phone: string
  procedure: string
  city: string
  status: string
  notes: string
  createdAt: string
  source: string
  partnerName?: string
  category?: string
}

const EMPTY_LEAD = { name: '', phone: '', procedure: '', city: '', status: 'new', notes: '', partnerName: '', category: '' }

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [cities, setCities] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [cityFilter, setCityFilter] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [editing, setEditing] = useState<Lead | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [newLead, setNewLead] = useState({ ...EMPTY_LEAD })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [msgColor, setMsgColor] = useState('#22c55e')
  const [uploading, setUploading] = useState(false)
  const [uploadResult, setUploadResult] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const H = { 'Content-Type': 'application/json', 'x-admin-password': password }

  const buildParams = useCallback(() => {
    const p = new URLSearchParams({ page: String(page), status: statusFilter, city: cityFilter })
    if (search) p.set('search', search)
    if (dateFrom) p.set('dateFrom', dateFrom)
    if (dateTo) p.set('dateTo', dateTo)
    return p
  }, [page, statusFilter, cityFilter, search, dateFrom, dateTo])

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin?' + buildParams(), { headers: H })
      if (res.status === 401) { setAuthed(false); return }
      const data = await res.json()
      setLeads(data.leads || [])
      setTotal(data.total || 0)
      setPages(data.pages || 1)
      if (data.cities) setCities(data.cities)
    } catch {}
    setLoading(false)
  }, [buildParams, password])

  useEffect(() => { if (authed) fetchLeads() }, [authed, fetchLeads])

  const flash = (text: string, color = '#22c55e') => {
    setMsg(text); setMsgColor(color)
    setTimeout(() => setMsg(''), 4000)
  }

  const handleLogin = async () => {
    setAuthError('')
    const res = await fetch('/api/admin', { headers: { 'x-admin-password': password } })
    if (res.status === 401) { setAuthError('Wrong password'); return }
    setAuthed(true)
  }

  const handleUpdate = async () => {
    if (!editing) return
    setSaving(true)
    const res = await fetch('/api/admin', { method: 'PATCH', headers: H, body: JSON.stringify(editing) })
    if (res.ok) { flash('Saved!'); setEditing(null); fetchLeads() } else flash('Error saving', '#dc2626')
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this lead?')) return
    await fetch('/api/admin?id=' + id, { method: 'DELETE', headers: H })
    flash('Deleted')
    fetchLeads()
  }

  const handleAdd = async () => {
    if (!newLead.phone) return
    setSaving(true)
    const res = await fetch('/api/admin', { method: 'POST', headers: H, body: JSON.stringify(newLead) })
    if (res.ok) { flash('Lead added!'); setShowAdd(false); setNewLead({ ...EMPTY_LEAD }); fetchLeads() }
    setSaving(false)
  }

  const quickPatch = async (id: string, update: Record<string, string>) => {
    await fetch('/api/admin', { method: 'PATCH', headers: H, body: JSON.stringify({ _id: id, ...update }) })
    setLeads(prev => prev.map(l => l._id === id ? { ...l, ...update } : l))
  }

  const handleDownload = () => {
    const params = buildParams()
    params.set('download', 'csv')
    fetch('/api/admin?' + params, { headers: { 'x-admin-password': password } })
      .then(r => r.blob())
      .then(blob => {
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = 'mysurgery-leads-' + new Date().toISOString().slice(0, 10) + '.csv'
        a.click()
      })
  }

  const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setUploadResult('')
    const text = await file.text()
    const res = await fetch('/api/admin', { method: 'POST', headers: { 'Content-Type': 'text/csv', 'x-admin-password': password }, body: text })
    const data = await res.json()
    if (data.success) { setUploadResult('Imported ' + data.inserted + ' new leads out of ' + data.total + ' rows'); fetchLeads() }
    else setUploadResult('Error: ' + (data.error || 'Upload failed'))
    setUploading(false)
    if (fileRef.current) fileRef.current.value = ''
  }

  const resetFilters = () => { setSearch(''); setStatusFilter('all'); setCityFilter('all'); setDateFrom(''); setDateTo(''); setPage(1) }

  const isPhone = (s: string) => s.trim().length === 10 && !isNaN(Number(s.trim()))

  // ── LOGIN ────────────────────────────────────────────────────────────────────
  if (!authed) return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '380px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)'}}>
        <div style={{textAlign: 'center', marginBottom: '28px'}}>
          <div style={{width: '52px', height: '52px', background: '#1d4ed8', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', color: 'white', fontWeight: 700, fontSize: '22px'}}>M</div>
          <h1 style={{fontSize: '22px', fontWeight: 700, color: '#111827', margin: '0 0 4px'}}>MySurgery Admin</h1>
          <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Lead Management Dashboard</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} placeholder='Admin password' style={{border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px 14px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box'}} autoFocus />
          {authError && <p style={{color: '#dc2626', fontSize: '13px', margin: 0}}>⚠ {authError}</p>}
          <button onClick={handleLogin} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '13px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: 'pointer'}}>Login →</button>
        </div>
      </div>
    </div>
  )

  // ── DASHBOARD ────────────────────────────────────────────────────────────────
  const COLS = ['Date', 'Name', 'Phone', 'Procedure', 'Category', 'City', 'Status', 'Partner', 'Remarks', 'Source', 'Actions']

  return (
    <div style={{minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      {/* HEADER */}
      <div style={{background: '#0f1f35', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{width: '32px', height: '32px', background: '#1d4ed8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700}}>M</div>
          <span style={{color: 'white', fontWeight: 700, fontSize: '16px'}}>MySurgery Admin</span>
          <span style={{color: '#93c5fd', fontSize: '13px'}}>{total} leads</span>
        </div>
        <div style={{display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap'}}>
          {msg && <span style={{fontSize: '13px', color: msgColor, fontWeight: 500, background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px'}}>{msg}</span>}
          <button onClick={() => setShowUpload(true)} style={{background: '#7c3aed', color: 'white', fontWeight: 600, padding: '8px 14px', borderRadius: '8px', border: 'none', fontSize: '13px', cursor: 'pointer'}}>⬆ Upload CSV</button>
          <button onClick={handleDownload} style={{background: '#16a34a', color: 'white', fontWeight: 600, padding: '8px 14px', borderRadius: '8px', border: 'none', fontSize: '13px', cursor: 'pointer'}}>⬇ Download CSV</button>
          <button onClick={() => { setNewLead({ ...EMPTY_LEAD }); setShowAdd(true) }} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '8px 14px', borderRadius: '8px', border: 'none', fontSize: '13px', cursor: 'pointer'}}>+ Add Lead</button>
          <a href='/admin/partners' style={{background: '#7c3aed', color: 'white', fontWeight: 600, padding: '8px 14px', borderRadius: '8px', fontSize: '13px', textDecoration: 'none'}}>👥 Partners</a>
          <a href='/admin/settings' style={{background: '#b45309', color: 'white', fontWeight: 600, padding: '8px 14px', borderRadius: '8px', fontSize: '13px', textDecoration: 'none'}}>⚙️ Settings</a>
          <button onClick={() => setAuthed(false)} style={{background: 'transparent', color: '#93c5fd', border: '1px solid #374151', padding: '8px 12px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer'}}>Logout</button>
        </div>
      </div>

      <div style={{maxWidth: '1400px', margin: '0 auto', padding: '20px 24px'}}>

        {/* STATS */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px', marginBottom: '20px'}}>
          <div onClick={() => { setStatusFilter('all'); setPage(1) }} style={{background: 'white', border: statusFilter === 'all' ? '2px solid #1d4ed8' : '1px solid #e5e7eb', borderRadius: '10px', padding: '12px', cursor: 'pointer', textAlign: 'center'}}>
            <p style={{fontSize: '20px', fontWeight: 700, color: '#1d4ed8', margin: '0 0 2px'}}>{total}</p>
            <p style={{fontSize: '11px', color: '#6b7280', margin: 0, textTransform: 'uppercase'}}>Total</p>
          </div>
          {STATUSES.map(s => {
            const sc = STATUS_COLORS[s] || {bg: '#f9fafb', text: '#374151'}
            const cnt = leads.filter(l => l.status === s).length
            return (
              <div key={s} onClick={() => { setStatusFilter(s); setPage(1) }} style={{background: statusFilter === s ? sc.bg : 'white', border: statusFilter === s ? '2px solid ' + sc.text : '1px solid #e5e7eb', borderRadius: '10px', padding: '12px', cursor: 'pointer', textAlign: 'center'}}>
                <p style={{fontSize: '18px', fontWeight: 700, color: sc.text, margin: '0 0 2px'}}>{cnt}</p>
                <p style={{fontSize: '10px', color: '#6b7280', margin: 0, textTransform: 'uppercase'}}>{s.replace(/-/g, ' ')}</p>
              </div>
            )
          })}
        </div>

        {/* FILTERS */}
        <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', marginBottom: '16px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', alignItems: 'end'}}>
            <div>
              <label style={{fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '5px'}}>Search</label>
              <input type='text' value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} placeholder='Name, phone, procedure...' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box'}} />
            </div>
            <div>
              <label style={{fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '5px'}}>Status</label>
              <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1) }} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', outline: 'none', background: 'white', boxSizing: 'border-box'}}>
                <option value='all'>All Status</option>
                {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '5px'}}>City</label>
              <select value={cityFilter} onChange={e => { setCityFilter(e.target.value); setPage(1) }} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', outline: 'none', background: 'white', boxSizing: 'border-box'}}>
                <option value='all'>All Cities</option>
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '5px'}}>From Date</label>
              <input type='date' value={dateFrom} onChange={e => { setDateFrom(e.target.value); setPage(1) }} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box'}} />
            </div>
            <div>
              <label style={{fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '5px'}}>To Date</label>
              <input type='date' value={dateTo} onChange={e => { setDateTo(e.target.value); setPage(1) }} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box'}} />
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
              <button onClick={fetchLeads} style={{flex: 1, background: '#1d4ed8', color: 'white', border: 'none', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', cursor: 'pointer', fontWeight: 600}}>Apply</button>
              <button onClick={resetFilters} style={{flex: 1, background: 'white', color: '#374151', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '9px 12px', fontSize: '13px', cursor: 'pointer'}}>Reset</button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px'}}>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
              <thead>
                <tr style={{background: '#f9fafb', borderBottom: '1px solid #e5e7eb'}}>
                  {COLS.map(h => (
                    <th key={h} style={{padding: '10px 12px', textAlign: 'left', fontWeight: 600, color: '#374151', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={11} style={{padding: '40px', textAlign: 'center', color: '#6b7280'}}>Loading...</td></tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={11} style={{padding: '48px 24px', textAlign: 'center'}}>
                      <p style={{fontSize: '32px', margin: '0 0 8px'}}>🔍</p>
                      <p style={{color: '#374151', fontWeight: 600, fontSize: '16px', marginBottom: '6px'}}>No leads found</p>
                      <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '20px'}}>
                        {search ? 'No lead found for "' + search + '"' : 'No leads match the selected filters'}
                      </p>
                      {search && (
                        <button
                          onClick={() => {
                            const phone = isPhone(search) ? search.trim() : ''
                            setNewLead({ ...EMPTY_LEAD, phone })
                            setShowAdd(true)
                          }}
                          style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: 'pointer'}}
                        >
                          + Add New Lead{isPhone(search) ? ' (' + search + ')' : ''}
                        </button>
                      )}
                    </td>
                  </tr>
                ) : leads.map((lead, i) => (
                  <tr key={lead._id} style={{borderBottom: '1px solid #f3f4f6', background: i % 2 === 0 ? 'white' : '#fafafa'}}>
                    <td style={{padding: '10px 12px', color: '#6b7280', whiteSpace: 'nowrap', fontSize: '12px'}}>{lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-IN') : '—'}</td>
                    <td style={{padding: '10px 12px', fontWeight: 600, color: '#111827', whiteSpace: 'nowrap', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{lead.name || '—'}</td>
                    <td style={{padding: '10px 12px', whiteSpace: 'nowrap'}}><a href={'tel:+91' + lead.phone} style={{color: '#1d4ed8', textDecoration: 'none', fontWeight: 500}}>{lead.phone}</a></td>
                    <td style={{padding: '10px 12px', color: '#374151', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{lead.procedure || '—'}</td>
                    <td style={{padding: '10px 12px', whiteSpace: 'nowrap'}}>
                      {lead.category ? (
                        <span style={{fontSize: '11px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '6px', fontWeight: 500}}>{lead.category}</span>
                      ) : (
                        <select defaultValue='' onChange={e => { if (e.target.value) quickPatch(lead._id, { category: e.target.value }) }}
                          style={{fontSize: '11px', padding: '3px 6px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#f9fafb', color: '#6b7280', cursor: 'pointer', outline: 'none'}}>
                          <option value=''>Set...</option>
                          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      )}
                    </td>
                    <td style={{padding: '10px 12px', color: '#374151', whiteSpace: 'nowrap'}}>{lead.city || '—'}</td>
                    <td style={{padding: '10px 12px'}}>
                      <select value={lead.status || 'new'} onChange={e => quickPatch(lead._id, { status: e.target.value })}
                        style={{fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px', border: 'none', background: (STATUS_COLORS[lead.status] || STATUS_COLORS.new).bg, color: (STATUS_COLORS[lead.status] || STATUS_COLORS.new).text, cursor: 'pointer', outline: 'none'}}>
                        {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')}</option>)}
                      </select>
                    </td>
                    <td style={{padding: '10px 12px', whiteSpace: 'nowrap'}}>
                      {lead.partnerName ? (
                        <span style={{fontSize: '12px', background: '#fff7ed', color: '#c2410c', padding: '3px 8px', borderRadius: '6px', fontWeight: 500}}>{lead.partnerName}</span>
                      ) : <span style={{color: '#d1d5db', fontSize: '12px'}}>—</span>}
                    </td>
                    <td style={{padding: '10px 12px', fontSize: '12px', maxWidth: '180px'}}>
                      {lead.notes ? (
                        <div style={{background: '#fefce8', border: '1px solid #fcd34d', borderRadius: '6px', padding: '3px 8px', color: '#92400e', lineHeight: '1.4', wordBreak: 'break-word'}}>{lead.notes}</div>
                      ) : <span style={{color: '#d1d5db'}}>—</span>}
                    </td>
                    <td style={{padding: '10px 12px', fontSize: '11px', color: '#9ca3af', whiteSpace: 'nowrap'}}>{lead.source || 'web'}</td>
                    <td style={{padding: '10px 12px', whiteSpace: 'nowrap'}}>
                      <div style={{display: 'flex', gap: '5px'}}>
                        <button onClick={() => setEditing({ ...lead })} style={{fontSize: '11px', padding: '5px 9px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#eff6ff', color: '#1d4ed8', cursor: 'pointer'}}>Edit</button>
                        <a href={'https://wa.me/91' + lead.phone} target='_blank' rel='noopener noreferrer' style={{fontSize: '11px', padding: '5px 9px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#f0fdf4', color: '#16a34a', textDecoration: 'none'}}>WA</a>
                        <button onClick={() => handleDelete(lead._id)} style={{fontSize: '11px', padding: '5px 9px', borderRadius: '6px', border: '1px solid #fca5a5', background: '#fef2f2', color: '#dc2626', cursor: 'pointer'}}>✕</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PAGINATION */}
        {pages > 1 && (
          <div style={{display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', marginBottom: '24px'}}>
            <button onClick={() => setPage(1)} disabled={page === 1} style={{padding: '7px 12px', border: '1px solid #e5e7eb', borderRadius: '7px', background: 'white', cursor: page === 1 ? 'not-allowed' : 'pointer', color: page === 1 ? '#9ca3af' : '#374151', fontSize: '13px'}}>«</button>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{padding: '7px 14px', border: '1px solid #e5e7eb', borderRadius: '7px', background: 'white', cursor: page === 1 ? 'not-allowed' : 'pointer', color: page === 1 ? '#9ca3af' : '#374151', fontSize: '13px'}}>‹ Prev</button>
            <span style={{padding: '7px 14px', fontSize: '13px', color: '#374151', background: 'white', border: '1px solid #e5e7eb', borderRadius: '7px'}}>Page {page} of {pages}</span>
            <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages} style={{padding: '7px 14px', border: '1px solid #e5e7eb', borderRadius: '7px', background: 'white', cursor: page === pages ? 'not-allowed' : 'pointer', color: page === pages ? '#9ca3af' : '#374151', fontSize: '13px'}}>Next ›</button>
            <button onClick={() => setPage(pages)} disabled={page === pages} style={{padding: '7px 12px', border: '1px solid #e5e7eb', borderRadius: '7px', background: 'white', cursor: page === pages ? 'not-allowed' : 'pointer', color: page === pages ? '#9ca3af' : '#374151', fontSize: '13px'}}>»</button>
          </div>
        )}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px'}}>
          <div style={{background: 'white', borderRadius: '16px', padding: '28px', width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '20px'}}>Edit Lead</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              {(['Name', 'Phone', 'Procedure', 'City'] as const).map(label => {
                const field = label.toLowerCase() as 'name' | 'phone' | 'procedure' | 'city'
                return (
                  <div key={label}>
                    <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>{label}</label>
                    <input type='text' value={editing[field] || ''} onChange={e => setEditing({ ...editing, [field]: e.target.value })} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                  </div>
                )
              })}
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Disease Category</label>
                <select value={editing.category || ''} onChange={e => setEditing({ ...editing, category: e.target.value })} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', background: 'white'}}>
                  <option value=''>Select category</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Status</label>
                <select value={editing.status || 'new'} onChange={e => setEditing({ ...editing, status: e.target.value })} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', background: 'white'}}>
                  {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Partner Name</label>
                <input type='text' value={editing.partnerName || ''} onChange={e => setEditing({ ...editing, partnerName: e.target.value })} placeholder='e.g. Dr. Anil Sharma / Fortis Hospital' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Remarks</label>
                <textarea value={editing.notes || ''} onChange={e => setEditing({ ...editing, notes: e.target.value })} rows={3} placeholder='Follow-up date, remarks...' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'}} />
              </div>
            </div>
            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
              <button onClick={handleUpdate} disabled={saving} style={{flex: 1, background: saving ? '#93c5fd' : '#1d4ed8', color: 'white', fontWeight: 600, padding: '12px', borderRadius: '10px', border: 'none', fontSize: '14px', cursor: saving ? 'not-allowed' : 'pointer'}}>{saving ? 'Saving...' : 'Save Changes'}</button>
              <button onClick={() => setEditing(null)} style={{flex: 1, background: '#f9fafb', color: '#374151', border: '1px solid #e5e7eb', padding: '12px', borderRadius: '10px', fontSize: '14px', cursor: 'pointer'}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ADD LEAD MODAL */}
      {showAdd && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px'}}>
          <div style={{background: 'white', borderRadius: '16px', padding: '28px', width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '20px'}}>Add New Lead</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              {(['Name', 'Phone', 'Procedure', 'City'] as const).map(label => {
                const field = label.toLowerCase() as 'name' | 'phone' | 'procedure' | 'city'
                return (
                  <div key={label}>
                    <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>{label}{field === 'phone' ? ' *' : ''}</label>
                    <input type='text' value={(newLead as any)[field] || ''} onChange={e => setNewLead({ ...newLead, [field]: e.target.value })} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                  </div>
                )
              })}
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Disease Category</label>
                <select value={(newLead as any).category || ''} onChange={e => setNewLead({ ...newLead, category: e.target.value } as any)} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', background: 'white'}}>
                  <option value=''>Select category</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Status</label>
                <select value={newLead.status} onChange={e => setNewLead({ ...newLead, status: e.target.value })} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', background: 'white'}}>
                  {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Partner Name</label>
                <input type='text' value={(newLead as any).partnerName || ''} onChange={e => setNewLead({ ...newLead, partnerName: e.target.value } as any)} placeholder='e.g. Dr. Anil Sharma / Fortis Hospital' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
              </div>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '5px'}}>Remarks</label>
                <textarea value={newLead.notes} onChange={e => setNewLead({ ...newLead, notes: e.target.value })} rows={2} placeholder='Source, follow-up date, remarks...' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'}} />
              </div>
            </div>
            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
              <button onClick={handleAdd} disabled={saving || !newLead.phone} style={{flex: 1, background: !newLead.phone ? '#e5e7eb' : '#1d4ed8', color: !newLead.phone ? '#9ca3af' : 'white', fontWeight: 600, padding: '12px', borderRadius: '10px', border: 'none', fontSize: '14px', cursor: !newLead.phone ? 'not-allowed' : 'pointer'}}>{saving ? 'Adding...' : 'Add Lead'}</button>
              <button onClick={() => setShowAdd(false)} style={{flex: 1, background: '#f9fafb', color: '#374151', border: '1px solid #e5e7eb', padding: '12px', borderRadius: '10px', fontSize: '14px', cursor: 'pointer'}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* CSV UPLOAD MODAL */}
      {showUpload && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px'}}>
          <div style={{background: 'white', borderRadius: '16px', padding: '28px', width: '100%', maxWidth: '500px'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>Upload Leads CSV</h2>
            <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '20px'}}>Format: name, phone, procedure, city, status, notes</p>
            <div style={{border: '2px dashed #e5e7eb', borderRadius: '12px', padding: '32px', textAlign: 'center', marginBottom: '16px', cursor: 'pointer'}} onClick={() => fileRef.current?.click()}>
              <p style={{fontSize: '32px', margin: '0 0 8px'}}>📂</p>
              <p style={{fontWeight: 600, color: '#374151', margin: '0 0 4px'}}>Click to select CSV file</p>
              <input ref={fileRef} type='file' accept='.csv,text/csv' onChange={handleCSVUpload} style={{display: 'none'}} />
            </div>
            {uploading && <p style={{textAlign: 'center', color: '#1d4ed8', fontSize: '14px'}}>Processing...</p>}
            {uploadResult && <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '12px', marginBottom: '12px'}}><p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>{uploadResult}</p></div>}
            <button onClick={() => { setShowUpload(false); setUploadResult('') }} style={{width: '100%', background: '#f9fafb', color: '#374151', border: '1px solid #e5e7eb', padding: '12px', borderRadius: '10px', fontSize: '14px', cursor: 'pointer'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
