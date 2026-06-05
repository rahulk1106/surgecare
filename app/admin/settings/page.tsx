'use client'
import { useState, useEffect } from 'react'

const CATEGORIES = ['Proctology','Laparoscopy','General Surgery','Urology','Gynecology','Orthopaedics','Ophthalmology','ENT','Aesthetics','Cardiac Surgery','Oncology','Other']
const TIERS = ['silver','gold','diamond'] as const
type Tier = typeof TIERS[number]

const TIER_META = {
  silver:  { icon: '🥈', label: 'Silver',  color: '#6b7280', bg: '#f9fafb',  border: '#e5e7eb' },
  gold:    { icon: '🥇', label: 'Gold',    color: '#b45309', bg: '#fefce8',  border: '#fcd34d' },
  diamond: { icon: '💎', label: 'Diamond', color: '#1d4ed8', bg: '#eff6ff',  border: '#bfdbfe' },
}

const DEFAULT_COMMISSIONS = {
  silver:  { Proctology:500, Laparoscopy:500, 'General Surgery':500, Urology:750, ENT:500, Ophthalmology:500, Aesthetics:750, Gynecology:1000, Orthopaedics:2000, 'Cardiac Surgery':5000, Oncology:3000, Other:500 },
  gold:    { Proctology:750, Laparoscopy:750, 'General Surgery':750, Urology:1000, ENT:750, Ophthalmology:750, Aesthetics:1000, Gynecology:1500, Orthopaedics:3000, 'Cardiac Surgery':7000, Oncology:4500, Other:750 },
  diamond: { Proctology:1000, Laparoscopy:1000, 'General Surgery':1000, Urology:1500, ENT:1000, Ophthalmology:1000, Aesthetics:1500, Gynecology:2000, Orthopaedics:5000, 'Cardiac Surgery':10000, Oncology:6000, Other:1000 },
}

const DEFAULT_TIERS = {
  silver:  { label:'Silver',  minLeads:0,  minConverted:0,  color:'#6b7280', bg:'#f9fafb', description:'Starting tier for all new partners' },
  gold:    { label:'Gold',    minLeads:10, minConverted:3,  color:'#b45309', bg:'#fefce8', description:'10+ leads submitted, 3+ converted' },
  diamond: { label:'Diamond', minLeads:25, minConverted:10, color:'#1d4ed8', bg:'#eff6ff', description:'25+ leads submitted, 10+ converted' },
}

export default function CommissionSettings() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [commissions, setCommissions] = useState<any>(DEFAULT_COMMISSIONS)
  const [tiers, setTiers] = useState<any>(DEFAULT_TIERS)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [activeTab, setActiveTab] = useState<'commissions'|'tiers'>('commissions')
  const [activeTier, setActiveTier] = useState<Tier>('silver')

  const H = { 'Content-Type': 'application/json', 'x-admin-password': password }

  const flash = (text: string) => { setMsg(text); setTimeout(() => setMsg(''), 3000) }

  const handleLogin = async () => {
    const res = await fetch('/api/admin', { headers: { 'x-admin-password': password } })
    if (res.status === 401) { setAuthError('Wrong password'); return }
    setAuthed(true)
    loadSettings()
  }

  const loadSettings = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/settings')
      const data = await res.json()
      if (data.settings?.commissions) setCommissions(data.settings.commissions)
      if (data.settings?.tiers) setTiers(data.settings.tiers)
    } catch {}
    setLoading(false)
  }

  const handleSave = async () => {
    setSaving(true)
    const res = await fetch('/api/admin/settings', {
      method: 'POST',
      headers: H,
      body: JSON.stringify({ commissions, tiers }),
    })
    if (res.ok) flash('Settings saved successfully!')
    else flash('Error saving settings')
    setSaving(false)
  }

  const updateCommission = (tier: Tier, category: string, value: number) => {
    setCommissions((prev: any) => ({ ...prev, [tier]: { ...prev[tier], [category]: value } }))
  }

  const updateTier = (tier: Tier, field: string, value: any) => {
    setTiers((prev: any) => ({ ...prev, [tier]: { ...prev[tier], [field]: value } }))
  }

  const applyMultiplier = (tier: Tier, multiplier: number) => {
    const base = commissions.silver
    const updated = Object.fromEntries(Object.entries(base).map(([k, v]) => [k, Math.round((v as number) * multiplier / 50) * 50]))
    setCommissions((prev: any) => ({ ...prev, [tier]: updated }))
  }

  if (!authed) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f9fafb',fontFamily:'system-ui'}}>
      <div style={{background:'white',borderRadius:'16px',padding:'36px',width:'360px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
        <div style={{textAlign:'center',marginBottom:'20px'}}>
          <p style={{fontSize:'32px',margin:'0 0 8px'}}>⚙️</p>
          <h1 style={{fontSize:'20px',fontWeight:700,margin:'0 0 4px'}}>Commission Settings</h1>
          <p style={{fontSize:'13px',color:'#6b7280',margin:0}}>Admin access required</p>
        </div>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key==='Enter' && handleLogin()} placeholder='Admin password' style={{width:'100%',border:'1px solid #e5e7eb',borderRadius:'8px',padding:'11px 14px',fontSize:'14px',outline:'none',boxSizing:'border-box',marginBottom:'10px'}} autoFocus />
        {authError && <p style={{color:'#dc2626',fontSize:'13px',marginBottom:'8px'}}>⚠ {authError}</p>}
        <button onClick={handleLogin} style={{width:'100%',background:'#1d4ed8',color:'white',fontWeight:600,padding:'12px',borderRadius:'8px',border:'none',cursor:'pointer',fontSize:'14px'}}>Login →</button>
        <div style={{display:'flex',gap:'8px',marginTop:'12px',justifyContent:'center'}}>
          <a href='/admin' style={{fontSize:'13px',color:'#6b7280'}}>Lead Dashboard</a>
          <span style={{color:'#d1d5db'}}>·</span>
          <a href='/admin/partners' style={{fontSize:'13px',color:'#6b7280'}}>Partner Management</a>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{minHeight:'100vh',background:'#f9fafb',fontFamily:'system-ui,-apple-system,sans-serif'}}>

      {/* HEADER */}
      <div style={{background:'#0f1f35',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'10px',position:'sticky',top:0,zIndex:100}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{width:'32px',height:'32px',background:'#1d4ed8',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700}}>M</div>
          <span style={{color:'white',fontWeight:700}}>Commission & Tier Settings</span>
          {msg && <span style={{fontSize:'13px',color:'#22c55e',background:'rgba(255,255,255,0.1)',padding:'4px 10px',borderRadius:'6px'}}>{msg}</span>}
        </div>
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
          <button onClick={handleSave} disabled={saving} style={{background:'#22c55e',color:'white',fontWeight:600,padding:'8px 20px',borderRadius:'8px',border:'none',cursor:'pointer',fontSize:'13px'}}>
            {saving ? 'Saving...' : '�� Save All Settings'}
          </button>
          <a href='/admin/partners' style={{background:'transparent',color:'#93c5fd',border:'1px solid #374151',padding:'8px 14px',borderRadius:'8px',fontSize:'13px',textDecoration:'none'}}>Partners</a>
          <a href='/admin' style={{background:'transparent',color:'#93c5fd',border:'1px solid #374151',padding:'8px 14px',borderRadius:'8px',fontSize:'13px',textDecoration:'none'}}>← Leads</a>
        </div>
      </div>

      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'24px'}}>

        {/* TABS */}
        <div style={{display:'flex',gap:'8px',marginBottom:'24px'}}>
          <button onClick={() => setActiveTab('commissions')} style={{padding:'10px 24px',borderRadius:'10px',cursor:'pointer',fontWeight:600,fontSize:'14px',background:activeTab==='commissions'?'#1d4ed8':'white',color:activeTab==='commissions'?'white':'#374151',border:activeTab==='commissions'?'none':'1px solid #e5e7eb'}}>
            💰 Commission Rates
          </button>
          <button onClick={() => setActiveTab('tiers')} style={{padding:'10px 24px',borderRadius:'10px',cursor:'pointer',fontWeight:600,fontSize:'14px',background:activeTab==='tiers'?'#1d4ed8':'white',color:activeTab==='tiers'?'white':'#374151',border:activeTab==='tiers'?'none':'1px solid #e5e7eb'}}>
            🏆 Partner Tiers
          </button>
        </div>

        {/* COMMISSION RATES TAB */}
        {activeTab === 'commissions' && (
          <div>
            <div style={{background:'#eff6ff',border:'1px solid #bfdbfe',borderRadius:'12px',padding:'16px 20px',marginBottom:'20px'}}>
              <p style={{fontWeight:600,color:'#1e3a8a',margin:'0 0 4px',fontSize:'15px'}}>ℹ️ How commission rates work</p>
              <p style={{fontSize:'13px',color:'#374151',margin:0,lineHeight:'1.6'}}>Set commission amounts per disease category for each partner tier. When a lead is converted, the commission is automatically set based on the partner's tier and procedure category. Partners can see these rates on their dashboard.</p>
            </div>

            {/* TIER SELECTOR */}
            <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}>
              {TIERS.map(tier => {
                const tm = TIER_META[tier]
                return (
                  <button key={tier} onClick={() => setActiveTier(tier)} style={{flex:1,padding:'14px',borderRadius:'12px',border:activeTier===tier?'2px solid '+tm.color:'1px solid #e5e7eb',background:activeTier===tier?tm.bg:'white',cursor:'pointer',textAlign:'center'}}>
                    <p style={{fontSize:'24px',margin:'0 0 4px'}}>{tm.icon}</p>
                    <p style={{fontWeight:700,color:tm.color,margin:'0 0 2px',fontSize:'15px'}}>{tm.label}</p>
                    <p style={{fontSize:'11px',color:'#6b7280',margin:0}}>{tiers[tier]?.description || ''}</p>
                  </button>
                )
              })}
            </div>

            {/* QUICK MULTIPLIER BUTTONS */}
            {activeTier !== 'silver' && (
              <div style={{display:'flex',gap:'8px',marginBottom:'16px',alignItems:'center',flexWrap:'wrap'}}>
                <span style={{fontSize:'13px',color:'#6b7280'}}>Quick set from Silver:</span>
                {[['1.5x', 1.5],['2x', 2.0],['Custom','custom']].map(([label, mult]) => (
                  <button key={String(label)} onClick={() => typeof mult === 'number' && applyMultiplier(activeTier, mult)}
                    style={{fontSize:'12px',padding:'6px 12px',borderRadius:'6px',border:'1px solid #e5e7eb',background:'white',cursor:'pointer',fontWeight:500}}>
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* COMMISSION TABLE */}
            <div style={{background:'white',border:'1px solid #e5e7eb',borderRadius:'14px',overflow:'hidden'}}>
              <div style={{padding:'16px 20px',borderBottom:'1px solid #e5e7eb',display:'flex',justifyContent:'space-between',alignItems:'center',background:TIER_META[activeTier].bg}}>
                <h2 style={{fontSize:'17px',fontWeight:700,color:TIER_META[activeTier].color,margin:0}}>{TIER_META[activeTier].icon} {TIER_META[activeTier].label} Partner Commissions</h2>
                <span style={{fontSize:'13px',color:TIER_META[activeTier].color,fontWeight:500}}>Edit amounts below and click Save</span>
              </div>
              <div style={{padding:'4px 0'}}>
                {CATEGORIES.map((cat, i) => (
                  <div key={cat} style={{display:'flex',alignItems:'center',padding:'12px 20px',background:i%2===0?'white':'#fafafa',borderBottom:'1px solid #f3f4f6'}}>
                    <div style={{flex:1}}>
                      <p style={{fontWeight:600,color:'#111827',margin:'0 0 2px',fontSize:'14px'}}>{cat}</p>
                      {activeTier !== 'silver' && (
                        <p style={{fontSize:'12px',color:'#9ca3af',margin:0}}>Silver: Rs {(commissions.silver?.[cat] || 0).toLocaleString('en-IN')}</p>
                      )}
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                      <span style={{fontSize:'14px',color:'#374151',fontWeight:500}}>Rs</span>
                      <input
                        type='number'
                        value={commissions[activeTier]?.[cat] || 0}
                        onChange={e => updateCommission(activeTier, cat, parseInt(e.target.value) || 0)}
                        style={{width:'100px',border:'1px solid #e5e7eb',borderRadius:'8px',padding:'8px 12px',fontSize:'15px',fontWeight:600,outline:'none',textAlign:'right',color:TIER_META[activeTier].color}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{padding:'16px 20px',background:'#f9fafb',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:'13px',color:'#6b7280'}}>Total potential earnings per converted lead: Rs {(Object.values(commissions[activeTier] || {}) as number[]).reduce((s, v) => s + v, 0).toLocaleString('en-IN') }(sum of all categories)</span>
                <button onClick={handleSave} disabled={saving} style={{background:TIER_META[activeTier].color,color:'white',fontWeight:600,padding:'10px 24px',borderRadius:'8px',border:'none',cursor:'pointer',fontSize:'13px'}}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>

            {/* COMPARISON TABLE */}
            <div style={{background:'white',border:'1px solid #e5e7eb',borderRadius:'14px',overflow:'hidden',marginTop:'20px'}}>
              <div style={{padding:'14px 20px',borderBottom:'1px solid #e5e7eb'}}>
                <h3 style={{fontSize:'15px',fontWeight:700,color:'#111827',margin:0}}>Commission Comparison — All Tiers</h3>
              </div>
              <div style={{overflowX:'auto'}}>
                <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
                  <thead>
                    <tr style={{background:'#f9fafb'}}>
                      <th style={{padding:'10px 16px',textAlign:'left',fontWeight:600,color:'#374151',borderBottom:'1px solid #e5e7eb'}}>Category</th>
                      {TIERS.map(t => <th key={t} style={{padding:'10px 16px',textAlign:'right',fontWeight:600,color:TIER_META[t].color,borderBottom:'1px solid #e5e7eb'}}>{TIER_META[t].icon} {TIER_META[t].label}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {CATEGORIES.map((cat, i) => (
                      <tr key={cat} style={{background:i%2===0?'white':'#fafafa'}}>
                        <td style={{padding:'10px 16px',fontWeight:500,color:'#374151',borderBottom:'1px solid #f3f4f6'}}>{cat}</td>
                        {TIERS.map(t => (
                          <td key={t} style={{padding:'10px 16px',textAlign:'right',fontWeight:600,color:TIER_META[t].color,borderBottom:'1px solid #f3f4f6'}}>
                            Rs {(commissions[t]?.[cat] || 0).toLocaleString('en-IN')}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TIER SETTINGS TAB */}
        {activeTab === 'tiers' && (
          <div>
            <div style={{background:'#fef3c7',border:'1px solid #fcd34d',borderRadius:'12px',padding:'16px 20px',marginBottom:'20px'}}>
              <p style={{fontWeight:600,color:'#92400e',margin:'0 0 4px'}}>🏆 About Partner Tiers</p>
              <p style={{fontSize:'13px',color:'#78350f',margin:0,lineHeight:'1.6'}}>Partners are automatically promoted to higher tiers based on their total leads submitted and conversions. Higher tiers earn more commission per converted lead. This is visible to all partners on their dashboard.</p>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'16px'}}>
              {TIERS.map(tier => {
                const tm = TIER_META[tier]
                const t = tiers[tier] || {}
                return (
                  <div key={tier} style={{background:'white',border:'2px solid '+tm.border,borderRadius:'16px',overflow:'hidden'}}>
                    <div style={{background:tm.bg,padding:'20px',textAlign:'center',borderBottom:'1px solid '+tm.border}}>
                      <p style={{fontSize:'40px',margin:'0 0 8px'}}>{tm.icon}</p>
                      <h2 style={{fontSize:'22px',fontWeight:700,color:tm.color,margin:0}}>{tm.label} Partner</h2>
                    </div>
                    <div style={{padding:'20px',display:'flex',flexDirection:'column',gap:'14px'}}>
                      <div>
                        <label style={{fontSize:'12px',fontWeight:600,color:'#6b7280',textTransform:'uppercase',display:'block',marginBottom:'5px'}}>Tier Description</label>
                        <input type='text' value={t.description || ''} onChange={e => updateTier(tier, 'description', e.target.value)} style={{width:'100%',border:'1px solid #e5e7eb',borderRadius:'8px',padding:'9px 12px',fontSize:'14px',outline:'none',boxSizing:'border-box'}} />
                      </div>
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                        <div>
                          <label style={{fontSize:'12px',fontWeight:600,color:'#6b7280',textTransform:'uppercase',display:'block',marginBottom:'5px'}}>Min Leads Required</label>
                          <input type='number' value={t.minLeads || 0} onChange={e => updateTier(tier, 'minLeads', parseInt(e.target.value)||0)} disabled={tier==='silver'} style={{width:'100%',border:'1px solid #e5e7eb',borderRadius:'8px',padding:'9px 12px',fontSize:'15px',fontWeight:700,outline:'none',boxSizing:'border-box',color:tm.color,background:tier==='silver'?'#f9fafb':'white'}} />
                        </div>
                        <div>
                          <label style={{fontSize:'12px',fontWeight:600,color:'#6b7280',textTransform:'uppercase',display:'block',marginBottom:'5px'}}>Min Conversions</label>
                          <input type='number' value={t.minConverted || 0} onChange={e => updateTier(tier, 'minConverted', parseInt(e.target.value)||0)} disabled={tier==='silver'} style={{width:'100%',border:'1px solid #e5e7eb',borderRadius:'8px',padding:'9px 12px',fontSize:'15px',fontWeight:700,outline:'none',boxSizing:'border-box',color:tm.color,background:tier==='silver'?'#f9fafb':'white'}} />
                        </div>
                      </div>
                      <div style={{background:tm.bg,borderRadius:'10px',padding:'14px'}}>
                        <p style={{fontSize:'13px',fontWeight:600,color:tm.color,margin:'0 0 8px'}}>Commission Rates for {tm.label}</p>
                        {['Proctology','Urology','Gynecology','Orthopaedics','Cardiac Surgery'].map(cat => (
                          <div key={cat} style={{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:'1px solid '+tm.border,fontSize:'13px'}}>
                            <span style={{color:'#374151'}}>{cat}</span>
                            <span style={{fontWeight:600,color:tm.color}}>Rs {(commissions[tier]?.[cat]||0).toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                        <p style={{fontSize:'12px',color:'#6b7280',margin:'8px 0 0'}}>Edit all rates in Commission Rates tab</p>
                      </div>
                      {tier === 'silver' && <p style={{fontSize:'12px',color:'#6b7280',margin:0,textAlign:'center'}}>All new partners start at Silver tier</p>}
                      {tier !== 'silver' && (
                        <div style={{background:'#f0fdf4',borderRadius:'8px',padding:'12px',fontSize:'13px',color:'#16a34a'}}>
                          ✓ Auto-promoted when partner submits {t.minLeads}+ leads and converts {t.minConverted}+
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{marginTop:'20px',textAlign:'center'}}>
              <button onClick={handleSave} disabled={saving} style={{background:'#1d4ed8',color:'white',fontWeight:700,padding:'14px 40px',borderRadius:'12px',border:'none',cursor:'pointer',fontSize:'15px'}}>
                {saving ? 'Saving...' : '💾 Save Tier Settings'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}