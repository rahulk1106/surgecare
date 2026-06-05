'use client'
import { useState, useEffect, useCallback } from 'react'

const CATEGORIES = ['All', 'Piles & Proctology', 'Hernia', 'MTP & Gynecology', 'Circumcision & Urology', 'Knee Replacement', 'Cataract & Eyes', 'General Surgery', 'Insurance & Cost', 'Recovery & Aftercare']

const SEED = [
  { _id: 's1', slug: 'is-laser-piles-surgery-painful-recovery', title: 'Is laser piles surgery painful? What is the recovery like?', category: 'Piles & Proctology', name: 'Ramesh K', city: 'Delhi', createdAt: '2026-03-15', answers: 3, views: 284 },
  { _id: 's2', slug: 'mtp-without-husband-permission-india-legal', title: 'Can I get MTP done without my husband knowing? Is it legal?', category: 'MTP & Gynecology', name: 'Anonymous', city: 'Gurugram', createdAt: '2026-03-18', answers: 2, views: 512 },
  { _id: 's3', slug: 'hernia-surgery-recovery-time-desk-job', title: 'How many days off work needed after laparoscopic hernia surgery?', category: 'Hernia', name: 'Sunil M', city: 'Noida', createdAt: '2026-03-20', answers: 4, views: 198 },
  { _id: 's4', slug: 'laser-circumcision-adult-recovery-time', title: 'I am 35 years old — how long is recovery after laser circumcision?', category: 'Circumcision & Urology', name: 'Anonymous', city: 'Mumbai', createdAt: '2026-03-22', answers: 2, views: 341 },
  { _id: 's5', slug: 'knee-replacement-insurance-waiting-period', title: 'My Star Health policy is 3 years old — is knee replacement covered?', category: 'Insurance & Cost', name: 'Anita S', city: 'Bangalore', createdAt: '2026-03-25', answers: 3, views: 167 },
  { _id: 's6', slug: 'mtp-pills-vs-surgical-which-better', title: 'Medical abortion pills vs surgical — which is safer?', category: 'MTP & Gynecology', name: 'Anonymous', city: 'Chennai', createdAt: '2026-04-01', answers: 3, views: 445 },
  { _id: 's7', slug: 'piles-grade-3-laser-or-stapler', title: 'I have Grade 3 piles — laser or stapler surgery?', category: 'Piles & Proctology', name: 'Arun R', city: 'Hyderabad', createdAt: '2026-04-02', answers: 2, views: 189 },
  { _id: 's8', slug: 'zsr-vs-laser-circumcision-difference', title: 'What is the actual difference between ZSR and laser circumcision?', category: 'Circumcision & Urology', name: 'Anonymous', city: 'Pune', createdAt: '2026-04-03', answers: 3, views: 298 },
  { _id: 's9', slug: 'hernia-mesh-imported-vs-indian-difference', title: 'Is imported hernia mesh really better than Indian?', category: 'Hernia', name: 'Mohan D', city: 'Delhi', createdAt: '2026-04-04', answers: 2, views: 156 },
  { _id: 's10', slug: 'cataract-surgery-multifocal-lens-worth-it', title: 'Is multifocal lens worth the extra cost for cataract surgery?', category: 'Cataract & Eyes', name: 'Vijay P', city: 'Kochi', createdAt: '2026-04-05', answers: 2, views: 223 },
]

type Question = { _id: string; slug: string; title: string; category: string; name: string; city: string; createdAt: string; answers: number; views: number }

export default function CommunityPage() {
  const [questions, setQuestions] = useState<Question[]>(SEED)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', body: '', category: 'General Surgery', name: '', city: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle'|'success'|'error'>('idle')
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchQuestions = useCallback(async () => {
    setLoading(true)
    try {
      const url = activeCategory === 'All' ? '/api/community' : `/api/community?category=\${encodeURIComponent(activeCategory)}`
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      if (data.questions && data.questions.length > 0) {
        const merged = [...data.questions, ...SEED.filter(s => !data.questions.find((q: Question) => q.slug === s.slug))]
        setQuestions(merged)
      }
    } catch {
      // silently keep seed questions on fetch failure
    }
    setLoading(false)
  }, [activeCategory])

  useEffect(() => { fetchQuestions() }, [fetchQuestions])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim()) { setSubmitError('Please enter your question.'); return }
    if (!form.body.trim()) { setSubmitError('Please add some details to your question.'); return }
    setSubmitting(true)
    setSubmitError('')
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setSubmitError(data.error || 'Something went wrong. Please try again.')
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        setShowForm(false)
        setForm({ title: '', body: '', category: 'General Surgery', name: '', city: '' })
        // Add new question to top of list optimistically
        if (data.slug) {
          const newQ: Question = {
            _id: 'new-' + Date.now(),
            slug: data.slug,
            title: form.title,
            category: form.category,
            name: form.name || 'Anonymous',
            city: form.city || '',
            createdAt: new Date().toISOString(),
            answers: 0,
            views: 0,
          }
          setQuestions(prev => [newQ, ...prev])
        }
        setTimeout(fetchQuestions, 1500)
      }
    } catch (err: any) {
      setSubmitError('Network error. Please check your connection and try again.')
      setSubmitStatus('error')
    }
    setSubmitting(false)
  }

  const filtered = activeCategory === 'All' ? questions : questions.filter(q => q.category === activeCategory)

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', padding: '48px 24px', textAlign: 'center'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Patient Community Q&A</h1>
        <p style={{color: '#93c5fd', fontSize: '17px', marginBottom: '24px'}}>Ask questions, get expert answers from MySurgery medical team</p>
        <button onClick={() => { setShowForm(!showForm); setSubmitStatus('idle'); setSubmitError('') }} style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '13px 28px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: 'pointer'}}>
          {showForm ? 'Cancel' : 'Ask a Question'}
        </button>
      </div>

      {/* SUCCESS BANNER */}
      {submitStatus === 'success' && (
        <div style={{background: '#f0fdf4', border: '1px solid #86efac', padding: '16px 24px', textAlign: 'center'}}>
          <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>✓ Your question has been submitted! Our experts will answer within 24 hours.</p>
        </div>
      )}

      {/* ASK FORM */}
      {showForm && (
        <div style={{background: '#f9fafb', borderBottom: '1px solid #e5e7eb', padding: '24px'}}>
          <div style={{maxWidth: '700px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #e5e7eb'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>Ask Your Question</h2>
            <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '20px'}}>Our medical team answers within 24 hours. You can post anonymously.</p>

            {submitError && (
              <div style={{background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px'}}>
                <p style={{color: '#dc2626', fontSize: '14px', margin: 0}}>⚠️ {submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Your Question <span style={{color: '#dc2626'}}>*</span></label>
                  <input type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Is laser piles surgery painful?" style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Details <span style={{color: '#dc2626'}}>*</span></label>
                  <textarea value={form.body} onChange={e => setForm({...form, body: e.target.value})} placeholder="Tell us more about your situation, symptoms, or what you want to know..." rows={4} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'}} />
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px'}}>
                  <div>
                    <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Category</label>
                    <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', background: 'white', boxSizing: 'border-box'}}>
                      {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Your Name</label>
                    <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Anonymous" style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                  </div>
                  <div>
                    <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>City</label>
                    <input type="text" value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder="e.g. Delhi" style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                  </div>
                </div>
                <button type="submit" disabled={submitting} style={{background: submitting ? '#93c5fd' : '#1d4ed8', color: 'white', fontWeight: 600, padding: '13px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: submitting ? 'not-allowed' : 'pointer'}}>
                  {submitting ? 'Submitting...' : 'Submit Question →'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '40px 24px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '220px 1fr', gap: '32px', alignItems: 'start'}}>

          {/* Sidebar */}
          <div style={{position: 'sticky', top: '80px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>Filter by category</p>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{display: 'block', width: '100%', textAlign: 'left', padding: '9px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: activeCategory === cat ? 600 : 400, color: activeCategory === cat ? '#1d4ed8' : '#374151', background: activeCategory === cat ? '#eff6ff' : 'transparent', marginBottom: '2px'}}>
                {cat}
              </button>
            ))}
            <div style={{marginTop: '24px', background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb'}}>
              <p style={{fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>Need immediate help?</p>
              <a href="tel:+918588967050" style={{display: 'block', background: '#1d4ed8', color: 'white', textAlign: 'center', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, marginBottom: '8px'}}>📞 Call 8588967050</a>
              <a href="https://wa.me/918588967050" target="_blank" rel="noopener noreferrer" style={{display: 'block', background: '#22c55e', color: 'white', textAlign: 'center', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600}}>WhatsApp</a>
            </div>
          </div>

          {/* Questions */}
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
              <p style={{fontSize: '15px', color: '#6b7280', margin: 0}}>{loading ? 'Loading...' : `${filtered.length} questions${activeCategory !== 'All' ? ' in ' + activeCategory : ''}`}</p>
              <button onClick={() => { setShowForm(true); setSubmitStatus('idle'); setSubmitError('') }} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '9px 18px', borderRadius: '8px', border: 'none', fontSize: '13px', cursor: 'pointer'}}>+ Ask Question</button>
            </div>

            {filtered.length === 0 && !loading && (
              <div style={{textAlign: 'center', padding: '48px 24px', background: '#f9fafb', borderRadius: '12px'}}>
                <p style={{color: '#6b7280', marginBottom: '16px'}}>No questions in this category yet. Be the first to ask!</p>
                <button onClick={() => setShowForm(true)} style={{background: '#1d4ed8', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600}}>Ask First Question</button>
              </div>
            )}

            {filtered.map(q => (
              <a key={q._id} href={`/community/${q.slug}`} style={{display: 'block', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '20px', marginBottom: '12px', textDecoration: 'none'}}>
                <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                  <div style={{flex: 1}}>
                    <span style={{fontSize: '11px', fontWeight: 600, color: '#1d4ed8', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px', display: 'inline-block'}}>{q.category}</span>
                    <h3 style={{fontSize: '16px', fontWeight: 600, color: '#111827', margin: '0 0 8px', lineHeight: '1.4'}}>{q.title}</h3>
                    <div style={{display: 'flex', gap: '14px', fontSize: '12px', color: '#9ca3af', flexWrap: 'wrap'}}>
                      <span>{q.name}{q.city ? ' · ' + q.city : ''}</span>
                      <span>{q.answers} answer{q.answers !== 1 ? 's' : ''}</span>
                      <span>{q.views} views</span>
                    </div>
                  </div>
                  <div style={{textAlign: 'center', background: q.answers > 0 ? '#f0fdf4' : '#f9fafb', borderRadius: '8px', padding: '10px 14px', flexShrink: 0, minWidth: '52px'}}>
                    <p style={{fontSize: '18px', fontWeight: 700, color: q.answers > 0 ? '#16a34a' : '#9ca3af', margin: '0 0 2px'}}>{q.answers}</p>
                    <p style={{fontSize: '10px', color: '#6b7280', margin: 0}}>answers</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
