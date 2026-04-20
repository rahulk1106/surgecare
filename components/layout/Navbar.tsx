'use client'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { categories } from '@/lib/diseases'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCat, setMobileCat] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onEnter = (slug: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setActiveDropdown(slug)
  }

  const onLeave = () => {
    timerRef.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  return (
    <nav style={{position:'sticky',top:0,zIndex:1000,background:'white',boxShadow:'0 1px 8px rgba(0,0,0,0.08)',fontFamily:'system-ui,-apple-system,sans-serif'}}>
      <style>{`
        @media (max-width: 768px) { .ms-desktop { display: none !important; } .ms-hamburger { display: flex !important; } }
        @media (min-width: 769px) { .ms-hamburger { display: none !important; } .ms-mobile-menu { display: none !important; } }
      `}</style>

      {/* TOP BAR */}
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 20px',display:'flex',alignItems:'center',height:'64px',gap:'12px'}}>
        <Link href='/' style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',flexShrink:0}}>
          <div style={{width:'34px',height:'34px',background:'#1d4ed8',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700,fontSize:'16px'}}>M</div>
          <span style={{fontWeight:700,color:'#0f1f35',fontSize:'20px'}}>MySurgery</span>
        </Link>
        <div className='ms-desktop' style={{flex:1,maxWidth:'380px',display:'flex',alignItems:'center',background:'#f3f4f6',borderRadius:'10px',padding:'9px 14px',gap:'8px',marginLeft:'8px'}}>
          <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='#9ca3af' strokeWidth='2'><circle cx='11' cy='11' r='8'/><path d='m21 21-4.35-4.35'/></svg>
          <input type='text' placeholder='Search treatments, diseases...' style={{border:'none',background:'transparent',outline:'none',fontSize:'14px',color:'#374151',width:'100%'}}/>
        </div>
        <div className='ms-desktop' style={{display:'flex',alignItems:'center',gap:'10px',marginLeft:'auto'}}>
          <a href='tel:+918588807050' style={{fontSize:'13px',color:'#374151',textDecoration:'none',fontWeight:500,whiteSpace:'nowrap'}}>📞 8588807050</a>
          <a href='https://wa.me/918588807050?text=Hi+I+want+a+free+surgery+consultation' target='_blank' rel='noopener noreferrer' style={{fontSize:'13px',color:'#16a34a',fontWeight:600,textDecoration:'none',background:'#f0fdf4',border:'1px solid #86efac',padding:'7px 12px',borderRadius:'8px',whiteSpace:'nowrap'}}>WhatsApp</a>
          <Link href='/contact' style={{fontSize:'13px',color:'white',fontWeight:600,textDecoration:'none',background:'#1d4ed8',padding:'9px 16px',borderRadius:'10px',whiteSpace:'nowrap'}}>Book Free Consult</Link>
        </div>
        <div className='ms-hamburger' style={{display:'none',alignItems:'center',gap:'8px',marginLeft:'auto'}}>
          <a href='tel:+918588807050' style={{fontSize:'13px',color:'#1d4ed8',fontWeight:600,textDecoration:'none'}}>📞 Call</a>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{background:'none',border:'none',cursor:'pointer',padding:'4px'}}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#374151' strokeWidth='2'>
              {mobileOpen ? <><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></> : <><line x1='3' y1='6' x2='21' y2='6'/><line x1='3' y1='12' x2='21' y2='12'/><line x1='3' y1='18' x2='21' y2='18'/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className='ms-desktop' style={{borderTop:'1px solid #f0f0f0',background:'white'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 20px',display:'flex',alignItems:'center',gap:'2px'}}>
          {categories.filter(cat => cat.slug !== 'orthopedics').map(cat => (
            <div key={cat.slug}
              style={{position:'relative',flexShrink:0}}
            >
              <button
                onMouseEnter={() => onEnter(cat.slug)}
                onMouseLeave={onLeave}
                style={{display:'flex',alignItems:'center',gap:'5px',padding:'13px 14px',background:'none',border:'none',borderBottom: activeDropdown===cat.slug ? '2px solid #1d4ed8' : '2px solid transparent',cursor:'pointer',fontSize:'13.5px',fontWeight:500,color: activeDropdown===cat.slug ? '#1d4ed8' : '#374151',whiteSpace:'nowrap',fontFamily:'inherit'}}>
                {cat.name}
                <svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'><polyline points='6 9 12 15 18 9'/></svg>
              </button>
              {activeDropdown === cat.slug && (
                <div
                  onMouseEnter={() => onEnter(cat.slug)}
                  onMouseLeave={onLeave}
                  style={{position:'absolute',top:'100%',left:0,background:'white',border:'1px solid #e5e7eb',borderRadius:'12px',boxShadow:'0 8px 32px rgba(0,0,0,0.15)',padding:'8px',minWidth:'240px',zIndex:9999}}
                >
                  {cat.diseases.map(d => (
                    <Link key={d.slug} href={'/treatment/'+d.slug}
                      style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'9px 14px',fontSize:'14px',color:'#374151',textDecoration:'none',borderRadius:'8px'}}
                      onMouseEnter={e => (e.currentTarget.style.background='#eff6ff')}
                      onMouseLeave={e => (e.currentTarget.style.background='transparent')}
                    >
                      <span>{d.name}</span>
                      <span style={{fontSize:'11px',color:'#9ca3af'}}>{d.costRange.split('–')[0].trim()}</span>
                    </Link>
                  ))}
                  <div style={{borderTop:'1px solid #f0f0f0',margin:'4px 0'}}/>
                  <Link href='/treatments'
                    style={{display:'block',padding:'9px 14px',fontSize:'13px',color:'#1d4ed8',fontWeight:500,textDecoration:'none',borderRadius:'8px'}}
                    onMouseEnter={e => (e.currentTarget.style.background='#eff6ff')}
                    onMouseLeave={e => (e.currentTarget.style.background='transparent')}
                  >
                    View all {cat.name} →
                  </Link>
                </div>
              )}
            </div>
          ))}
          <Link href='/community' style={{padding:'13px 14px',fontSize:'13.5px',fontWeight:500,color:'#374151',textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>Community</Link>
          <Link href='/medical-tourism' style={{padding:'13px 14px',fontSize:'13.5px',fontWeight:600,color:'#1d4ed8',textDecoration:'none',whiteSpace:'nowrap',flexShrink:0,borderBottom:'2px solid #1d4ed8'}}>🌍 International</Link>
          <Link href='/blog' style={{padding:'13px 14px',fontSize:'13.5px',fontWeight:500,color:'#374151',textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>Blog</Link>
          <Link href='/about' style={{padding:'13px 14px',fontSize:'13.5px',fontWeight:500,color:'#374151',textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>About</Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className='ms-mobile-menu' style={{background:'white',borderTop:'1px solid #f0f0f0',maxHeight:'80vh',overflowY:'auto'}}>
          <div style={{padding:'12px 16px'}}>
            {categories.filter(cat => cat.slug !== 'orthopedics').map(cat => (
              <div key={cat.slug} style={{borderBottom:'1px solid #f0f0f0'}}>
                <button onClick={() => setMobileCat(mobileCat===cat.slug ? null : cat.slug)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'13px 4px',background:'none',border:'none',cursor:'pointer',fontSize:'14px',fontWeight:500,color:'#111827',fontFamily:'inherit'}}>
                  <span>{cat.name}</span>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' style={{transform:mobileCat===cat.slug?'rotate(180deg)':'rotate(0)',transition:'transform 0.2s'}}><polyline points='6 9 12 15 18 9'/></svg>
                </button>
                {mobileCat === cat.slug && (
                  <div style={{paddingLeft:'12px',paddingBottom:'8px'}}>
                    {cat.diseases.map(d => (
                      <Link key={d.slug} href={'/treatment/'+d.slug} onClick={() => setMobileOpen(false)} style={{display:'flex',justifyContent:'space-between',padding:'9px 4px',fontSize:'14px',color:'#374151',textDecoration:'none',borderBottom:'1px solid #f8f8f8'}}>
                        <span>{d.name}</span>
                        <span style={{fontSize:'12px',color:'#6b7280'}}>{d.costRange.split('–')[0].trim()}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href='/community' onClick={() => setMobileOpen(false)} style={{display:'block',padding:'13px 4px',fontSize:'14px',fontWeight:500,color:'#111827',textDecoration:'none',borderBottom:'1px solid #f0f0f0'}}>Community</Link>
            <Link href='/medical-tourism' onClick={() => setMobileOpen(false)} style={{display:'block',padding:'13px 4px',fontSize:'14px',fontWeight:600,color:'#1d4ed8',textDecoration:'none',borderBottom:'1px solid #f0f0f0'}}>🌍 International Patients</Link>
            <Link href='/blog' onClick={() => setMobileOpen(false)} style={{display:'block',padding:'13px 4px',fontSize:'14px',fontWeight:500,color:'#111827',textDecoration:'none',borderBottom:'1px solid #f0f0f0'}}>Blog</Link>
            <Link href='/about' onClick={() => setMobileOpen(false)} style={{display:'block',padding:'13px 4px',fontSize:'14px',fontWeight:500,color:'#111827',textDecoration:'none',borderBottom:'1px solid #f0f0f0'}}>About</Link>
            <div style={{display:'flex',gap:'10px',padding:'16px 0'}}>
              <a href='tel:+918588807050' style={{flex:1,textAlign:'center',padding:'12px',background:'white',border:'1.5px solid #1d4ed8',color:'#1d4ed8',fontWeight:600,borderRadius:'10px',textDecoration:'none',fontSize:'13px'}}>📞 Call</a>
              <a href='https://wa.me/918588807050' target='_blank' rel='noopener noreferrer' style={{flex:1,textAlign:'center',padding:'12px',background:'#22c55e',color:'white',fontWeight:600,borderRadius:'10px',textDecoration:'none',fontSize:'13px'}}>WhatsApp</a>
              <Link href='/contact' onClick={() => setMobileOpen(false)} style={{flex:2,textAlign:'center',padding:'12px',background:'#1d4ed8',color:'white',fontWeight:600,borderRadius:'10px',textDecoration:'none',fontSize:'13px'}}>Free Consult</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
