'use client'
import { useState } from 'react'

type Result = {
  primary: string
  primaryColor: string
  primaryBg: string
  primaryIcon: string
  primaryDesc: string
  costMin: number
  costMax: number
  alternatives: { name: string; reason: string; cost: string }[]
  notSuitable: string[]
  nextSteps: string[]
  urgency: string
}

export default function LasikRecommender() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    age: '', city: '',
    rightSph: '', rightCyl: '', rightAxis: '',
    leftSph: '', leftCyl: '', leftAxis: '',
    dryEyes: '', sports: '', previousSurgery: '', cornea: '', priority: '',
  })
  const [result, setResult] = useState<Result | null>(null)
  const [phone, setPhone] = useState('')
  const [leadSent, setLeadSent] = useState(false)

  const cities = ['Delhi','Gurugram','Noida','Faridabad','Mumbai','Bangalore','Chennai','Hyderabad','Pune','Kochi','Ahmedabad','Lucknow','Indore','Coimbatore','Madurai','Vizag','Other']

  const cityBase: Record<string, number> = {
    Delhi:40000,Gurugram:42000,Noida:40000,Faridabad:40000,Mumbai:45000,
    Bangalore:42000,Chennai:40000,Hyderabad:40000,Pune:42000,Kochi:40000,
    Ahmedabad:40000,Lucknow:40000,Indore:40000,Coimbatore:40000,Madurai:40000,Vizag:40000,Other:40000
  }

  const upd = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const getResult = (): Result => {
    const age = parseInt(form.age) || 25
    const rs = parseFloat(form.rightSph) || 0
    const ls = parseFloat(form.leftSph) || 0
    const rc = parseFloat(form.rightCyl) || 0
    const lc = parseFloat(form.leftCyl) || 0
    const maxPow = Math.max(Math.abs(rs), Math.abs(ls))
    const maxCyl = Math.max(Math.abs(rc), Math.abs(lc))
    const maxPlus = Math.max(rs > 0 ? rs : 0, ls > 0 ? ls : 0)
    const hasDry = form.dryEyes === 'yes' || form.dryEyes === 'sometimes'
    const hasSports = form.sports === 'yes'
    const thinCornea = form.cornea === 'thin'
    const base = cityBase[form.city] || 40000

    if (age < 18) return {
      primary: 'Not Yet Eligible', primaryColor: '#dc2626', primaryBg: '#fef2f2', primaryIcon: '⏳',
      primaryDesc: 'You need to be at least 18 years old for LASIK. Your prescription should also be stable for 12 months. Most surgeons recommend waiting until 20-21.',
      costMin: 0, costMax: 0,
      alternatives: [{ name: 'Spectacles / Contact Lenses', reason: 'Best until age 18 with stable prescription', cost: 'Until eligible' }],
      notSuitable: ['Any laser eye surgery — minimum age is 18'],
      nextSteps: ['Continue glasses or contacts', 'Book free consultation when you turn 18', 'Get annual eye check to track prescription stability'],
      urgency: 'Come back when you turn 18'
    }

    if (maxPlus > 6) return {
      primary: 'ICL (Implantable Collamer Lens)', primaryColor: '#374151', primaryBg: '#f9fafb', primaryIcon: '🔵',
      primaryDesc: 'Your far-sightedness (+' + maxPlus.toFixed(2) + 'D) is too high for standard laser procedures. ICL implants a thin lens inside the eye without removing corneal tissue — reversible and excellent results.',
      costMin: base + 40000, costMax: base + 110000,
      alternatives: [{ name: 'Contoura Vision', reason: 'If power is between +4D to +6D and cornea is thick enough', cost: 'Rs ' + (base + 10000).toLocaleString('en-IN') + ' – Rs ' + (base + 60000).toLocaleString('en-IN') + ' per eye' }],
      notSuitable: ['Standard LASIK', 'SMILE / SILK (cannot correct high hyperopia)', 'PRK for very high plus power'],
      nextSteps: ['Book comprehensive eye evaluation including corneal mapping', 'ICL takes 20 minutes, is fully reversible', 'Call MySurgery at 8588967050 for ICL specialists in ' + form.city],
      urgency: 'Schedule evaluation at your convenience'
    }

    if (maxPow > 9 || thinCornea) return {
      primary: 'ICL (Implantable Collamer Lens)', primaryColor: '#374151', primaryBg: '#f9fafb', primaryIcon: '🔵',
      primaryDesc: thinCornea ? 'Your cornea may be too thin for safe laser correction. ICL is safer as it does not remove any corneal tissue. Final decision after detailed pre-evaluation.' : 'Your myopia (-' + maxPow.toFixed(2) + 'D) is very high — ICL gives better and safer results than laser at this power level.',
      costMin: base + 40000, costMax: base + 110000,
      alternatives: [
        { name: 'SMILE', reason: 'If power is -8D to -10D and cornea permits', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 40000).toLocaleString('en-IN') + ' per eye' },
        { name: 'PRK / LASEK', reason: 'For thin corneas with moderate power — no flap needed', cost: 'Rs 40,000 – Rs 60,000 per eye' },
      ],
      notSuitable: ['Standard LASIK (unsafe at this power/corneal thickness)', 'Bladeless LASIK'],
      nextSteps: ['Pachymetry (corneal thickness) and topography at pre-evaluation', 'ICL is reversible — lens can be removed if needed', 'Call MySurgery at 8588967050 for ICL specialists in ' + form.city],
      urgency: 'Book evaluation soon'
    }

    if (form.priority === 'latest') return {
      primary: 'SILK', primaryColor: '#dc2626', primaryBg: '#fef2f2', primaryIcon: '✨',
      primaryDesc: 'SILK (Johnson & Johnson Elita) is the newest generation of flapless laser surgery. Smoother lenticule edges than SMILE, faster delivery, lowest dry eye risk. Available at select premium centres in ' + form.city + '.',
      costMin: base + 10000, costMax: base + 70000,
      alternatives: [
        { name: 'SMILE', reason: 'Same flapless benefit, more widely available', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 40000).toLocaleString('en-IN') + ' per eye' },
        { name: 'Contoura Vision', reason: 'If best visual quality is priority', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 60000).toLocaleString('en-IN') + ' per eye' },
      ],
      notSuitable: maxPlus > 0 ? ['SILK cannot correct hyperopia (+ power)'] : [],
      nextSteps: ['Confirm SILK availability in ' + form.city + ' — limited centres have Elita platform', 'Pre-evaluation confirms eligibility', 'Call MySurgery at 8588967050'],
      urgency: 'Schedule pre-evaluation at a SILK-equipped centre'
    }

    if (hasDry || hasSports) return {
      primary: 'SMILE', primaryColor: '#b45309', primaryBg: '#fefce8', primaryIcon: '🔬',
      primaryDesc: (hasDry ? 'Since you have dry eyes, SMILE is strongly preferred — it cuts fewer corneal nerves and has the lowest dry eye risk. ' : '') + (hasSports ? 'Since you play contact sports, SMILE is ideal — no flap means zero risk of flap dislodgement. ' : '') + 'Available at leading eye centres in ' + form.city + '.',
      costMin: base, costMax: base + 40000,
      alternatives: [
        { name: 'SILK', reason: 'Newer flapless technology with smoother results', cost: 'Rs ' + (base + 10000).toLocaleString('en-IN') + ' – Rs ' + (base + 70000).toLocaleString('en-IN') + ' per eye' },
        { name: 'Contoura Vision', reason: 'If astigmatism is high and best vision quality is priority', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 60000).toLocaleString('en-IN') + ' per eye' },
      ],
      notSuitable: maxPlus > 0 ? ['SMILE cannot correct hyperopia (+ power) — consider Contoura'] : [],
      nextSteps: ['Avoid contact lenses 1-2 weeks before evaluation', 'Pre-evaluation at a Zeiss VisuMax SMILE centre', 'Call MySurgery at 8588967050 for SMILE centres in ' + form.city],
      urgency: 'Book pre-evaluation — available within 1 week'
    }

    if (form.priority === 'vision' || maxCyl >= 2.0) return {
      primary: 'Contoura Vision', primaryColor: '#7c3aed', primaryBg: '#faf5ff', primaryIcon: '🗺',
      primaryDesc: (maxCyl >= 2.0 ? 'You have significant astigmatism (' + maxCyl.toFixed(2) + 'D) — Contoura maps 22,000 points on your cornea and corrects both your power AND corneal irregularities. ' : '') + (form.priority === 'vision' ? 'Since best visual quality is your priority, Contoura frequently gives patients better vision than their previous glasses. ' : '') + 'Available on WaveLight EX500 at premium centres in ' + form.city + '.',
      costMin: base, costMax: base + 60000,
      alternatives: [
        { name: 'SMILE', reason: 'If dry eyes are a concern — flapless with lower dry eye risk', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 40000).toLocaleString('en-IN') + ' per eye' },
        { name: 'Bladeless LASIK', reason: 'Good results at lower cost for moderate astigmatism', cost: 'Rs 40,000 – Rs ' + (base + 20000).toLocaleString('en-IN') + ' per eye' },
      ],
      notSuitable: [],
      nextSteps: ['Corneal topography during pre-evaluation confirms eligibility', 'Stop contact lenses 1-2 weeks before evaluation', 'Call MySurgery at 8588967050 for Contoura centres in ' + form.city],
      urgency: 'Book pre-evaluation — available within 1 week'
    }

    return {
      primary: 'Bladeless LASIK (Femto-LASIK)', primaryColor: '#16a34a', primaryBg: '#f0fdf4', primaryIcon: '⚡',
      primaryDesc: 'Based on your profile, Bladeless Femtosecond LASIK is an excellent choice. Your prescription is within the standard treatable range. Bladeless LASIK uses a femtosecond laser (no blade) for precision flap creation with same-day recovery. Available at multiple centres in ' + form.city + '.',
      costMin: base, costMax: base + 20000,
      alternatives: [
        { name: 'Contoura Vision', reason: 'If you want the best possible visual quality', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 60000).toLocaleString('en-IN') + ' per eye' },
        { name: 'SMILE', reason: 'If you want flapless with lowest dry eye risk', cost: 'Rs ' + base.toLocaleString('en-IN') + ' – Rs ' + (base + 40000).toLocaleString('en-IN') + ' per eye' },
      ],
      notSuitable: [],
      nextSteps: ['Stop soft contact lenses 1 week before evaluation', 'Pre-LASIK evaluation takes 45 minutes', 'Call MySurgery at 8588967050 for Bladeless LASIK centres in ' + form.city],
      urgency: 'Ready to proceed — evaluation available within days'
    }
  }

  const handleSubmit = () => { setResult(getResult()); setStep(4) }

  const handleLead = async () => {
    if (!phone || !result) return
    try {
      await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'LASIK Recommender', phone, procedure: 'LASIK — ' + result.primary, city: form.city, sourcePage: typeof window !== 'undefined' ? window.location.href : '/lasik-recommender',
          notes: 'Age:' + form.age + ' R:' + form.rightSph + '/' + form.rightCyl + ' L:' + form.leftSph + '/' + form.leftCyl + ' DryEyes:' + form.dryEyes + ' Sports:' + form.sports
        })
      })
      setLeadSent(true)
    } catch {}
  }

  const inp: React.CSSProperties = { width:'100%', border:'1px solid #e5e7eb', borderRadius:'8px', padding:'11px 14px', fontSize:'15px', outline:'none', boxSizing:'border-box', fontFamily:'inherit' }
  const lbl: React.CSSProperties = { fontSize:'13px', fontWeight:500, color:'#374151', display:'block', marginBottom:'5px' }
  const btn = (active: boolean, col = '#1d4ed8'): React.CSSProperties => ({
    padding:'10px 16px', borderRadius:'8px', border: active ? '2px solid '+col : '1px solid #e5e7eb',
    background: active ? col : 'white', color: active ? 'white' : '#374151',
    cursor:'pointer', fontSize:'14px', fontWeight: active ? 600 : 400, fontFamily:'inherit'
  })

  const steps = ['Your Details','Eye Power','Lifestyle','Your Result']

  return (
    <div style={{fontFamily:'system-ui,-apple-system,sans-serif', minHeight:'100vh', background:'#f9fafb'}}>

      <div style={{background:'linear-gradient(135deg,#0f1f35 0%,#1d4ed8 100%)', padding:'48px 24px 36px', textAlign:'center'}}>
        <p style={{fontSize:'12px', fontWeight:600, color:'#93c5fd', textTransform:'uppercase', letterSpacing:'0.1em', margin:'0 0 10px'}}>Free Tool</p>
        <h1 style={{fontSize:'32px', fontWeight:700, color:'white', margin:'0 0 10px', lineHeight:'1.2'}}>LASIK Surgery Recommender</h1>
        <p style={{color:'#93c5fd', fontSize:'15px', margin:0}}>Enter your eye power and get a personalised recommendation in 2 minutes</p>
      </div>

      <div style={{background:'white', borderBottom:'1px solid #e5e7eb', padding:'16px 24px'}}>
        <div style={{maxWidth:'600px', margin:'0 auto', display:'flex', gap:'8px', alignItems:'center'}}>
          {steps.map((s, i) => (
            <div key={s} style={{display:'flex', alignItems:'center', flex: i < steps.length-1 ? 1 : 'none'}}>
              <div style={{display:'flex', alignItems:'center', gap:'6px', flexShrink:0}}>
                <div style={{width:'28px', height:'28px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', background: step > i+1 ? '#16a34a' : step === i+1 ? '#1d4ed8' : '#e5e7eb', color: step >= i+1 ? 'white' : '#6b7280', fontSize:'12px', fontWeight:700, flexShrink:0}}>
                  {step > i+1 ? '✓' : i+1}
                </div>
                <span style={{fontSize:'12px', fontWeight: step===i+1?600:400, color: step===i+1?'#1d4ed8':'#6b7280', whiteSpace:'nowrap'}}>{s}</span>
              </div>
              {i < steps.length-1 && <div style={{flex:1, height:'2px', background: step>i+1?'#16a34a':'#e5e7eb', margin:'0 8px'}} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{maxWidth:'600px', margin:'0 auto', padding:'32px 24px 80px'}}>

        {step === 1 && (
          <div style={{background:'white', borderRadius:'16px', padding:'28px', border:'1px solid #e5e7eb'}}>
            <h2 style={{fontSize:'20px', fontWeight:700, color:'#111827', marginBottom:'20px'}}>Your Basic Details</h2>
            <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
              <div>
                <label style={lbl}>Your Age *</label>
                <input type="number" value={form.age} onChange={e => upd('age',e.target.value)} placeholder="e.g. 25" style={inp} min="15" max="70" />
                <p style={{fontSize:'12px', color:'#9ca3af', margin:'4px 0 0'}}>Minimum age for LASIK is 18 years</p>
              </div>
              <div>
                <label style={lbl}>Your City *</label>
                <select value={form.city} onChange={e => upd('city',e.target.value)} style={inp}>
                  <option value="">Select your city</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{...lbl, marginBottom:'10px'}}>Previous eye surgery?</label>
                <div style={{display:'flex', gap:'10px'}}>
                  {['No','Yes'].map(o => <button key={o} onClick={() => upd('previousSurgery',o.toLowerCase())} style={btn(form.previousSurgery===o.toLowerCase())}>{o}</button>)}
                </div>
              </div>
              <button onClick={() => setStep(2)} disabled={!form.age || !form.city}
                style={{background:!form.age||!form.city?'#e5e7eb':'#1d4ed8', color:!form.age||!form.city?'#9ca3af':'white', fontWeight:700, padding:'14px', borderRadius:'10px', border:'none', fontSize:'15px', cursor:!form.age||!form.city?'not-allowed':'pointer', fontFamily:'inherit'}}>
                Next — Enter Eye Power →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{background:'white', borderRadius:'16px', padding:'28px', border:'1px solid #e5e7eb'}}>
            <h2 style={{fontSize:'20px', fontWeight:700, color:'#111827', marginBottom:'6px'}}>Your Eye Power</h2>
            <p style={{fontSize:'14px', color:'#6b7280', marginBottom:'16px'}}>From your latest spectacle or contact lens prescription. Negative SPH = short-sightedness. Positive SPH = long-sightedness.</p>
            <div style={{background:'#eff6ff', borderRadius:'10px', padding:'12px 14px', marginBottom:'20px'}}>
              <p style={{fontSize:'12px', fontWeight:600, color:'#1e3a8a', margin:'0 0 3px'}}>Sample prescription</p>
              <p style={{fontSize:'13px', color:'#1e3a8a', margin:0, fontFamily:'monospace'}}>R.E: -3.50 / -1.25 × 180 | L.E: -2.75 / -0.75 × 170</p>
            </div>
            {[{label:'Right Eye (R.E / O.D)', px:'right'},{label:'Left Eye (L.E / O.S)', px:'left'}].map(eye => (
              <div key={eye.px} style={{marginBottom:'20px'}}>
                <p style={{fontWeight:600, color:'#374151', marginBottom:'12px', fontSize:'15px'}}>👁 {eye.label}</p>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
                  {[['Sph','SPH (Sphere)','-3.50'],['Cyl','CYL (Cylinder)','-1.25'],['Axis','AXIS','180']].map(([k,l,ph]) => (
                    <div key={k}>
                      <label style={lbl}>{l}</label>
                      <input type="number" step={k==='Axis'?'1':'0.25'} value={(form as any)[eye.px+k]} onChange={e => upd(eye.px+k, e.target.value)} placeholder={ph} style={inp} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{marginBottom:'20px'}}>
              <label style={{...lbl, marginBottom:'10px'}}>Corneal thickness (if known)</label>
              <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
                {[['normal','Normal / Not checked'],['thin','Thin (below 490 microns)'],['thick','Thick (above 530 microns)']].map(([v,l]) => (
                  <button key={v} onClick={() => upd('cornea',v)} style={btn(form.cornea===v)}>{l}</button>
                ))}
              </div>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
              <button onClick={() => setStep(1)} style={{flex:1, background:'white', color:'#374151', border:'1px solid #e5e7eb', padding:'13px', borderRadius:'10px', cursor:'pointer', fontSize:'14px', fontFamily:'inherit'}}>← Back</button>
              <button onClick={() => setStep(3)} style={{flex:2, background:'#1d4ed8', color:'white', fontWeight:700, padding:'13px', borderRadius:'10px', border:'none', fontSize:'15px', cursor:'pointer', fontFamily:'inherit'}}>Next — Lifestyle →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{background:'white', borderRadius:'16px', padding:'28px', border:'1px solid #e5e7eb'}}>
            <h2 style={{fontSize:'20px', fontWeight:700, color:'#111827', marginBottom:'6px'}}>Lifestyle & Preferences</h2>
            <p style={{fontSize:'14px', color:'#6b7280', marginBottom:'24px'}}>This helps us recommend the safest and most suitable procedure for you.</p>
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
              <div>
                <label style={{...lbl, marginBottom:'10px'}}>Do you have dry eyes, use AC a lot, or stare at screens for long hours?</label>
                <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
                  {[['no','No dry eyes'],['sometimes','Occasionally'],['yes','Yes, regularly']].map(([v,l]) => (
                    <button key={v} onClick={() => upd('dryEyes',v)} style={btn(form.dryEyes===v,'#b45309')}>{l}</button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{...lbl, marginBottom:'10px'}}>Do you play contact sports? (cricket, boxing, swimming, martial arts, gym)</label>
                <div style={{display:'flex', gap:'10px'}}>
                  {[['no','No'],['yes','Yes']].map(([v,l]) => (
                    <button key={v} onClick={() => upd('sports',v)} style={btn(form.sports===v,'#b45309')}>{l}</button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{...lbl, marginBottom:'10px'}}>What matters most to you?</label>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                  {[['vision','🏆 Best possible vision'],['cost','💰 Best value for money'],['safety','🛡 Safest option'],['latest','✨ Latest technology']].map(([v,l]) => (
                    <button key={v} onClick={() => upd('priority',v)} style={{...btn(form.priority===v), textAlign:'left'}}>{l}</button>
                  ))}
                </div>
              </div>
              <div style={{display:'flex', gap:'10px'}}>
                <button onClick={() => setStep(2)} style={{flex:1, background:'white', color:'#374151', border:'1px solid #e5e7eb', padding:'13px', borderRadius:'10px', cursor:'pointer', fontSize:'14px', fontFamily:'inherit'}}>← Back</button>
                <button onClick={handleSubmit} disabled={!form.dryEyes||!form.priority}
                  style={{flex:2, background:!form.dryEyes||!form.priority?'#e5e7eb':'#1d4ed8', color:!form.dryEyes||!form.priority?'#9ca3af':'white', fontWeight:700, padding:'13px', borderRadius:'10px', border:'none', fontSize:'15px', cursor:!form.dryEyes||!form.priority?'not-allowed':'pointer', fontFamily:'inherit'}}>
                  Get My Recommendation →
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && result && (
          <div>
            <div style={{background:result.primaryBg, border:'2px solid '+result.primaryColor+'40', borderRadius:'16px', padding:'28px', marginBottom:'20px'}}>
              <p style={{fontSize:'12px', fontWeight:600, color:result.primaryColor, textTransform:'uppercase', letterSpacing:'0.08em', margin:'0 0 8px'}}>Best Option for You</p>
              <div style={{display:'flex', gap:'14px', alignItems:'flex-start', marginBottom:'16px', flexWrap:'wrap'}}>
                <span style={{fontSize:'48px', flexShrink:0}}>{result.primaryIcon}</span>
                <div style={{flex:1}}>
                  <h2 style={{fontSize:'24px', fontWeight:700, color:result.primaryColor, margin:'0 0 8px'}}>{result.primary}</h2>
                  <p style={{fontSize:'14px', color:'#374151', lineHeight:'1.7', margin:0}}>{result.primaryDesc}</p>
                </div>
              </div>
              {result.costMin > 0 && (
                <div style={{background:'white', borderRadius:'10px', padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'10px'}}>
                  <div>
                    <p style={{fontSize:'12px', color:'#6b7280', margin:'0 0 2px'}}>Estimated cost in {form.city}</p>
                    <p style={{fontSize:'22px', fontWeight:700, color:result.primaryColor, margin:0}}>
                      Rs {result.costMin.toLocaleString('en-IN')} – Rs {result.costMax.toLocaleString('en-IN')}
                    </p>
                    <p style={{fontSize:'11px', color:'#9ca3af', margin:'2px 0 0'}}>Per eye · Both eyes ≈ 1.8x this amount</p>
                  </div>
                  <span style={{fontSize:'12px', background:result.primaryBg, color:result.primaryColor, padding:'5px 12px', borderRadius:'20px', border:'1px solid '+result.primaryColor+'40', fontWeight:600}}>{result.urgency}</span>
                </div>
              )}
            </div>

            <div style={{background:'white', border:'1px solid #e5e7eb', borderRadius:'12px', padding:'18px', marginBottom:'16px'}}>
              <p style={{fontWeight:600, color:'#374151', margin:'0 0 10px', fontSize:'14px'}}>Your Prescription</p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                {[{e:'Right Eye',s:form.rightSph,c:form.rightCyl,a:form.rightAxis},{e:'Left Eye',s:form.leftSph,c:form.leftCyl,a:form.leftAxis}].map(eye => (
                  <div key={eye.e} style={{background:'#f9fafb', borderRadius:'8px', padding:'12px'}}>
                    <p style={{fontSize:'12px', fontWeight:600, color:'#6b7280', margin:'0 0 4px', textTransform:'uppercase'}}>{eye.e}</p>
                    <p style={{fontSize:'14px', fontWeight:600, color:'#111827', margin:0, fontFamily:'monospace'}}>{eye.s||'0.00'} / {eye.c||'0.00'} × {eye.a||'—'}</p>
                  </div>
                ))}
              </div>
            </div>

            {result.alternatives.length > 0 && (
              <div style={{background:'white', border:'1px solid #e5e7eb', borderRadius:'12px', padding:'18px', marginBottom:'16px'}}>
                <p style={{fontWeight:600, color:'#374151', margin:'0 0 12px', fontSize:'14px'}}>Also Suitable — Alternatives</p>
                {result.alternatives.map(a => (
                  <div key={a.name} style={{background:'#f9fafb', borderRadius:'8px', padding:'12px', marginBottom:'8px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'6px', marginBottom:'3px'}}>
                      <span style={{fontWeight:600, color:'#111827', fontSize:'14px'}}>{a.name}</span>
                      <span style={{fontSize:'12px', color:'#1d4ed8', fontWeight:500}}>{a.cost}</span>
                    </div>
                    <p style={{fontSize:'13px', color:'#6b7280', margin:0}}>{a.reason}</p>
                  </div>
                ))}
              </div>
            )}

            {result.notSuitable.length > 0 && (
              <div style={{background:'#fef2f2', border:'1px solid #fca5a5', borderRadius:'12px', padding:'16px', marginBottom:'16px'}}>
                <p style={{fontWeight:600, color:'#dc2626', margin:'0 0 8px', fontSize:'14px'}}>⚠️ Not Recommended for You</p>
                {result.notSuitable.map(n => <p key={n} style={{fontSize:'13px', color:'#374151', margin:'0 0 4px'}}>• {n}</p>)}
              </div>
            )}

            <div style={{background:'#f0fdf4', border:'1px solid #86efac', borderRadius:'12px', padding:'18px', marginBottom:'20px'}}>
              <p style={{fontWeight:600, color:'#16a34a', margin:'0 0 10px', fontSize:'14px'}}>✓ Your Next Steps</p>
              {result.nextSteps.map((s,i) => (
                <div key={i} style={{display:'flex', gap:'10px', marginBottom:'6px', alignItems:'flex-start'}}>
                  <span style={{background:'#16a34a', color:'white', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:700, flexShrink:0}}>{i+1}</span>
                  <p style={{fontSize:'13px', color:'#374151', margin:0, lineHeight:'1.5'}}>{s}</p>
                </div>
              ))}
            </div>

            <div style={{background:'linear-gradient(135deg,#0f1f35 0%,#1d4ed8 100%)', borderRadius:'16px', padding:'28px', marginBottom:'16px'}}>
              <h3 style={{fontSize:'18px', fontWeight:700, color:'white', marginBottom:'8px'}}>Book Free Consultation in {form.city}</h3>
              <p style={{color:'#93c5fd', fontSize:'14px', marginBottom:'18px'}}>Our eye specialist will review your prescription and confirm the best option. Callback within 30 minutes.</p>
              {!leadSent ? (
                <div style={{display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'12px'}}>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number"
                    style={{flex:1, minWidth:'180px', border:'none', borderRadius:'8px', padding:'11px 14px', fontSize:'14px', outline:'none', boxSizing:'border-box'}} />
                  <button onClick={handleLead} style={{background:'#22c55e', color:'white', fontWeight:700, padding:'11px 20px', borderRadius:'8px', border:'none', fontSize:'14px', cursor:'pointer', fontFamily:'inherit'}}>Get Free Callback</button>
                </div>
              ) : (
                <div style={{background:'rgba(255,255,255,0.15)', borderRadius:'8px', padding:'12px 16px', marginBottom:'12px'}}>
                  <p style={{color:'#86efac', fontWeight:600, margin:0}}>✓ We will call you within 30 minutes!</p>
                </div>
              )}
              <a href={'https://wa.me/918588967050?text=Hi+I+used+LASIK+Recommender.+Result:+' + encodeURIComponent(result.primary) + '+City:+' + encodeURIComponent(form.city)}
                target="_blank" rel="noopener noreferrer"
                style={{display:'block', background:'#22c55e', color:'white', textAlign:'center', fontWeight:600, padding:'12px', borderRadius:'8px', textDecoration:'none', fontSize:'14px'}}>
                WhatsApp Us with Your Prescription
              </a>
            </div>

            <p style={{fontSize:'12px', color:'#9ca3af', lineHeight:'1.6', marginBottom:'20px'}}>
              <strong style={{color:'#6b7280'}}>Disclaimer:</strong> This recommendation is for guidance only. Final eligibility is determined by a comprehensive pre-LASIK evaluation by a qualified ophthalmologist.
            </p>

            <div style={{display:'flex', gap:'10px'}}>
              <button onClick={() => { setStep(1); setResult(null); setForm({age:'',city:'',rightSph:'',rightCyl:'',rightAxis:'',leftSph:'',leftCyl:'',leftAxis:'',dryEyes:'',sports:'',previousSurgery:'',cornea:'',priority:''}); setPhone(''); setLeadSent(false) }}
                style={{flex:1, background:'white', color:'#374151', border:'1px solid #e5e7eb', padding:'12px', borderRadius:'10px', cursor:'pointer', fontSize:'14px', fontFamily:'inherit'}}>
                ← Start Over
              </button>
              <a href="/lasik-comparison" style={{flex:1, background:'white', color:'#1d4ed8', border:'1px solid #1d4ed8', padding:'12px', borderRadius:'10px', textDecoration:'none', fontSize:'14px', fontWeight:500, textAlign:'center'}}>
                Full Comparison →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
