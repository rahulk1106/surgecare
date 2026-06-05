'use client'
import Link from 'next/link'
import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: "Can you fully retract your foreskin over the head of the penis?",
    options: [
      { text: "Yes, easily and completely", score: 1 },
      { text: "Yes but with some effort or mild discomfort", score: 2 },
      { text: "Partially — only halfway", score: 3 },
      { text: "Not at all — it is very tight", score: 4 },
    ]
  },
  {
    id: 2,
    question: "Do you experience pain during erection or sexual activity?",
    options: [
      { text: "No pain at all", score: 1 },
      { text: "Mild tightness but manageable", score: 2 },
      { text: "Moderate pain that affects sexual activity", score: 3 },
      { text: "Severe pain — I avoid sexual activity", score: 4 },
    ]
  },
  {
    id: 3,
    question: "Have you had recurrent infections under the foreskin (balanitis)?",
    options: [
      { text: "Never", score: 1 },
      { text: "Once or twice", score: 2 },
      { text: "3 or more times in the past year", score: 4 },
      { text: "Currently have an active infection", score: 4 },
    ]
  },
  {
    id: 4,
    question: "Do you have difficulty urinating due to foreskin tightness?",
    options: [
      { text: "No difficulty at all", score: 1 },
      { text: "Occasionally slow stream", score: 2 },
      { text: "Frequent difficulty, weak stream", score: 3 },
      { text: "Foreskin balloons during urination", score: 4 },
    ]
  },
  {
    id: 5,
    question: "What is your reason for considering circumcision?",
    options: [
      { text: "Religious or cultural practice", score: 2 },
      { text: "Personal hygiene preference", score: 2 },
      { text: "Medical problem (phimosis, infection)", score: 4 },
      { text: "Partner preference or aesthetics", score: 2 },
    ]
  },
]

const getResult = (score: number, religiousReason: boolean) => {
  if (religiousReason && score <= 8) return {
    title: "Religious / Cultural Circumcision",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
    recommendation: "You are considering circumcision for religious or cultural reasons. This is completely valid and respected. Laser or ZSR circumcision gives excellent results with same-day discharge and return to normal in 2-3 days.",
    treatment: "Laser or ZSR Circumcision",
    detail: "Both laser and ZSR are excellent for religious circumcision. ZSR is faster (10-15 min) with dissolving staples. Laser takes 20-25 min with no stitches. Both give the same excellent outcome.",
    urgency: "Schedule at your convenience",
  }
  if (score <= 8) return {
    title: "Mild Phimosis / Personal Preference",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#86efac",
    recommendation: "Your symptoms suggest mild phimosis or you are considering circumcision for personal reasons. Steroid creams and gentle stretching exercises can help mild phimosis. Circumcision is also a valid permanent solution.",
    treatment: "Try conservative treatment first",
    detail: "Clobetasol cream applied for 6-8 weeks resolves mild phimosis in 70% of cases. If that fails or you prefer a permanent solution, laser circumcision is an excellent option.",
    urgency: "Not urgent — consult a urologist",
  }
  if (score <= 14) return {
    title: "Moderate Phimosis",
    color: "#b45309",
    bg: "#fefce8",
    border: "#fcd34d",
    recommendation: "Your symptoms suggest moderate phimosis that is affecting your quality of life. At this level, steroid cream may help but surgical treatment (circumcision or preputioplasty) is often the most effective solution.",
    treatment: "Circumcision or Preputioplasty Recommended",
    detail: "Laser or ZSR circumcision is the permanent cure. If you prefer to preserve the foreskin, preputioplasty (widening the foreskin opening) is an option for moderate phimosis. Your urologist will advise.",
    urgency: "Consult a urologist within 2-4 weeks",
  }
  return {
    title: "Severe Phimosis / Recurrent Infection",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fca5a5",
    recommendation: "Your symptoms suggest severe phimosis or recurrent infections that require treatment. Circumcision is strongly recommended and will permanently resolve your condition. Do not delay — untreated severe phimosis can cause complications.",
    treatment: "Circumcision Strongly Recommended",
    detail: "Laser or ZSR circumcision permanently resolves severe phimosis, recurrent balanitis, and BXO. The procedure takes 20-30 minutes under local anaesthesia with same-day discharge. Return to work in 2-3 days.",
    urgency: "See a urologist this week",
  }
}

export default function CircumcisionChecker() {
  const [answers, setAnswers] = useState<Record<number, {score: number, idx: number}>>({})
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState('')
  const [leadSent, setLeadSent] = useState(false)

  const totalScore = Object.values(answers).reduce((a, b) => a + b.score, 0)
  const religiousReason = answers[5]?.idx === 0
  const result = submitted ? getResult(totalScore, religiousReason) : null
  const answered = Object.keys(answers).length
  const allAnswered = answered === questions.length

  const handleLead = async () => {
    if (!phone) return
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Circumcision Checker Lead', phone, procedure: 'Circumcision — ' + (result?.title || ''), city: 'Not specified' }),
      })
      setLeadSent(true)
    } catch {}
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '680px', margin: '0 auto', padding: '40px 24px 80px'}}>
      <div style={{marginBottom: '8px', fontSize: '13px', color: '#6b7280'}}>
        <Link href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</Link> › <Link href='/circumcision' style={{color: '#6b7280', textDecoration: 'none'}}>Circumcision</Link> › <span style={{color: '#1d4ed8'}}>Do I Need Surgery?</span>
      </div>

      <div style={{background: '#0f1f35', borderRadius: '14px', padding: '18px 20px', marginBottom: '24px'}}>
        <p style={{color: '#93c5fd', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 4px'}}>100% Confidential</p>
        <p style={{color: 'white', fontSize: '15px', margin: 0}}>This assessment is completely private. We will never share your information.</p>
      </div>

      <h1 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px', lineHeight: '1.3'}}>Circumcision Assessment</h1>
      <p style={{fontSize: '15px', color: '#4b5563', marginBottom: '28px'}}>Answer 5 questions to find out if circumcision is right for you.</p>

      {!submitted ? (
        <div>
          <div style={{display: 'flex', gap: '6px', marginBottom: '28px'}}>
            {questions.map((q) => (
              <div key={q.id} style={{flex: 1, height: '6px', borderRadius: '3px', background: answers[q.id] ? '#1d4ed8' : '#e5e7eb'}} />
            ))}
          </div>
          {questions.map((q, qi) => (
            <div key={q.id} style={{marginBottom: '28px', opacity: qi > 0 && !answers[questions[qi-1].id] ? 0.4 : 1, pointerEvents: qi > 0 && !answers[questions[qi-1].id] ? 'none' : 'auto'}}>
              <p style={{fontWeight: 600, color: '#111827', fontSize: '16px', marginBottom: '12px', lineHeight: '1.4'}}>
                <span style={{color: '#1d4ed8', marginRight: '8px'}}>{q.id}.</span>{q.question}
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                {q.options.map((opt, oi) => (
                  <button key={oi} onClick={() => setAnswers({...answers, [q.id]: {score: opt.score, idx: oi}})}
                    style={{textAlign: 'left', padding: '12px 16px', borderRadius: '10px', border: answers[q.id]?.idx === oi ? '2px solid #1d4ed8' : '1px solid #e5e7eb', background: answers[q.id]?.idx === oi ? '#eff6ff' : 'white', color: answers[q.id]?.idx === oi ? '#1d4ed8' : '#374151', fontSize: '14px', cursor: 'pointer', fontWeight: answers[q.id]?.idx === oi ? 600 : 400, fontFamily: 'inherit'}}>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => setSubmitted(true)} disabled={!allAnswered}
            style={{width: '100%', background: allAnswered ? '#1d4ed8' : '#e5e7eb', color: allAnswered ? 'white' : '#9ca3af', fontWeight: 700, padding: '16px', borderRadius: '12px', border: 'none', fontSize: '16px', cursor: allAnswered ? 'pointer' : 'not-allowed', fontFamily: 'inherit'}}>
            {allAnswered ? 'Get My Results →' : `Answer all questions (${answered}/5 done)`}
          </button>
        </div>
      ) : result && (
        <div>
          <div style={{background: result.bg, border: '1px solid ' + result.border, borderRadius: '16px', padding: '28px', marginBottom: '20px'}}>
            <p style={{fontSize: '13px', fontWeight: 600, color: result.color, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 8px'}}>Assessment Result</p>
            <h2 style={{fontSize: '22px', fontWeight: 700, color: result.color, margin: '0 0 12px'}}>{result.title}</h2>
            <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 16px'}}>{result.recommendation}</p>
            <div style={{background: 'white', borderRadius: '10px', padding: '14px 16px'}}>
              <p style={{fontWeight: 600, color: '#111827', fontSize: '14px', margin: '0 0 4px'}}>{result.treatment}</p>
              <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.6'}}>{result.detail}</p>
            </div>
          </div>

          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', marginBottom: '16px'}}>
            <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>Confidential Consultation — Free</h3>
            <p style={{fontSize: '14px', color: '#4b5563', marginBottom: '14px'}}>Our urologist will call you back within 30 minutes. Completely confidential.</p>
            {!leadSent ? (
              <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" style={{flex: 1, minWidth: '180px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                <button onClick={handleLead} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '11px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap'}}>Get Free Callback</button>
              </div>
            ) : (
              <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '12px'}}>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>✓ We will call you within 30 minutes. Call is completely confidential.</p>
              </div>
            )}
            <div style={{display: 'flex', gap: '10px', marginTop: '12px'}}>
              <a href="https://wa.me/918588967050?text=Hi+I+just+completed+circumcision+assessment" target="_blank" rel="noopener noreferrer" style={{flex: 1, textAlign: 'center', background: '#22c55e', color: 'white', padding: '11px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600}}>WhatsApp Confidentially</a>
              <Link href="/contact" style={{flex: 1, textAlign: 'center', background: '#f9fafb', color: '#374151', padding: '11px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', border: '1px solid #e5e7eb'}}>Book Consultation</Link>
            </div>
          </div>
          <button onClick={() => { setSubmitted(false); setAnswers({}); setPhone(''); setLeadSent(false) }}
            style={{width: '100%', background: 'white', color: '#6b7280', border: '1px solid #e5e7eb', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit'}}>
            ← Retake Assessment
          </button>
        </div>
      )}
    </div>
  )
}
