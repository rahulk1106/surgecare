'use client'
import Link from 'next/link'
import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: "How often do you notice bleeding during bowel movements?",
    options: [
      { text: "Rarely or never", score: 1 },
      { text: "Occasionally (once a week)", score: 2 },
      { text: "Frequently (most times)", score: 3 },
      { text: "Every time, with significant blood", score: 4 },
    ]
  },
  {
    id: 2,
    question: "Do you have a lump or swelling near your anus?",
    options: [
      { text: "No lump at all", score: 1 },
      { text: "Small lump that goes back on its own", score: 2 },
      { text: "Lump that I have to push back manually", score: 3 },
      { text: "Permanent lump that cannot be pushed back", score: 4 },
    ]
  },
  {
    id: 3,
    question: "How would you describe your pain or discomfort?",
    options: [
      { text: "No pain at all", score: 1 },
      { text: "Mild itching or discomfort", score: 2 },
      { text: "Moderate pain during and after bowel movements", score: 3 },
      { text: "Severe pain affecting daily activities", score: 4 },
    ]
  },
  {
    id: 4,
    question: "How long have you had these symptoms?",
    options: [
      { text: "Less than 2 weeks", score: 1 },
      { text: "2 weeks to 3 months", score: 2 },
      { text: "3 months to 1 year", score: 3 },
      { text: "More than 1 year", score: 4 },
    ]
  },
  {
    id: 5,
    question: "Have you tried any treatment so far?",
    options: [
      { text: "No treatment yet", score: 1 },
      { text: "Diet changes and home remedies", score: 1 },
      { text: "Creams and medicines — some relief", score: 2 },
      { text: "Medicines — no relief at all", score: 3 },
    ]
  },
]

const getResult = (score: number) => {
  if (score <= 7) return {
    grade: "Grade 1 Piles (Early Stage)",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#86efac",
    recommendation: "Your symptoms suggest early-stage (Grade 1) piles. At this stage, dietary changes, increased water intake, and fibre supplements can often manage the condition without surgery.",
    treatment: "Conservative Treatment Recommended",
    treatmentDetail: "High-fibre diet, plenty of water, sitz baths, and a fibre supplement. Over-the-counter creams can reduce discomfort. A doctor consultation will confirm and rule out other conditions.",
    urgency: "Not urgent — but do see a doctor to confirm",
    urgencyColor: "#16a34a",
    cta: "Get a free consultation to confirm your grade and get a personalised treatment plan.",
  }
  if (score <= 12) return {
    grade: "Grade 2–3 Piles (Moderate)",
    color: "#b45309",
    bg: "#fefce8",
    border: "#fcd34d",
    recommendation: "Your symptoms suggest moderate piles (Grade 2-3). At this stage, conservative treatment may not be enough. Minimally invasive procedures like laser treatment or rubber band ligation are often highly effective.",
    treatment: "Minimally Invasive Procedure Likely Needed",
    treatmentDetail: "Laser piles surgery or rubber band ligation. Both are 30-minute daycare procedures under local anaesthesia with same-day discharge. Success rate over 95%.",
    urgency: "See a doctor within 2 weeks",
    urgencyColor: "#b45309",
    cta: "Book a free consultation — a specialist will examine you and recommend the right procedure.",
  }
  return {
    grade: "Grade 3–4 Piles (Severe)",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fca5a5",
    recommendation: "Your symptoms suggest advanced (Grade 3-4) piles that almost certainly require surgical treatment. Do not delay — untreated Grade 4 piles can lead to complications including strangulation and severe anaemia.",
    treatment: "Surgery Required — Laser or Stapler",
    treatmentDetail: "Laser haemorrhoidoplasty (LHP) or stapler surgery (MIPH/PPH) are the most effective options. Both are daycare procedures with same-day discharge and return to normal in 5-7 days.",
    urgency: "See a doctor within this week",
    urgencyColor: "#dc2626",
    cta: "Get an urgent consultation today. Call or WhatsApp — callback within 30 minutes.",
  }
}

export default function PilesSymptomsChecker() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState('')
  const [leadSent, setLeadSent] = useState(false)

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const result = submitted ? getResult(totalScore) : null
  const answered = Object.keys(answers).length
  const allAnswered = answered === questions.length

  const handleLead = async () => {
    if (!phone) return
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Symptoms Checker Lead', phone, procedure: 'Piles — ' + (result?.grade || ''), city: 'Not specified' }),
      })
      setLeadSent(true)
    } catch {}
  }

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '680px', margin: '0 auto', padding: '40px 24px 80px'}}>

      <div style={{marginBottom: '8px', fontSize: '13px', color: '#6b7280'}}>
        <Link href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</Link> › <Link href='/treatment/piles' style={{color: '#6b7280', textDecoration: 'none'}}>Piles</Link> › <span style={{color: '#1d4ed8'}}>Symptoms Checker</span>
      </div>

      <h1 style={{fontSize: '30px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px', lineHeight: '1.3'}}>Piles Symptoms Checker</h1>
      <p style={{fontSize: '15px', color: '#4b5563', marginBottom: '32px', lineHeight: '1.65'}}>Answer 5 questions to understand the severity of your condition and what treatment you may need.</p>

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
                  <button key={oi} onClick={() => setAnswers({...answers, [q.id]: opt.score})}
                    style={{textAlign: 'left', padding: '12px 16px', borderRadius: '10px', border: answers[q.id] === opt.score ? '2px solid #1d4ed8' : '1px solid #e5e7eb', background: answers[q.id] === opt.score ? '#eff6ff' : 'white', color: answers[q.id] === opt.score ? '#1d4ed8' : '#374151', fontSize: '14px', cursor: 'pointer', fontWeight: answers[q.id] === opt.score ? 600 : 400, transition: 'all 0.15s', fontFamily: 'inherit'}}>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button onClick={() => setSubmitted(true)} disabled={!allAnswered}
            style={{width: '100%', background: allAnswered ? '#1d4ed8' : '#e5e7eb', color: allAnswered ? 'white' : '#9ca3af', fontWeight: 700, padding: '16px', borderRadius: '12px', border: 'none', fontSize: '16px', cursor: allAnswered ? 'pointer' : 'not-allowed'}}>
            {allAnswered ? 'Get My Results →' : `Answer all questions (${answered}/5 done)`}
          </button>
        </div>
      ) : result && (
        <div>
          <div style={{background: result.bg, border: '1px solid ' + result.border, borderRadius: '16px', padding: '28px', marginBottom: '24px'}}>
            <p style={{fontSize: '13px', fontWeight: 600, color: result.color, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 8px'}}>Your Result</p>
            <h2 style={{fontSize: '24px', fontWeight: 700, color: result.color, margin: '0 0 12px'}}>{result.grade}</h2>
            <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 16px'}}>{result.recommendation}</p>
            <div style={{background: 'white', borderRadius: '10px', padding: '14px 16px', marginBottom: '10px'}}>
              <p style={{fontWeight: 600, color: '#111827', fontSize: '14px', margin: '0 0 4px'}}>Recommended treatment</p>
              <p style={{fontSize: '14px', color: result.color, fontWeight: 600, margin: '0 0 4px'}}>{result.treatment}</p>
              <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.6'}}>{result.treatmentDetail}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{fontSize: '13px', fontWeight: 600, color: result.urgencyColor}}>⚡ {result.urgency}</span>
            </div>
          </div>

          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', marginBottom: '20px'}}>
            <h3 style={{fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px'}}>Speak to a Specialist — Free</h3>
            <p style={{fontSize: '14px', color: '#4b5563', marginBottom: '16px'}}>{result.cta}</p>
            {!leadSent ? (
              <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" style={{flex: 1, minWidth: '180px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                <button onClick={handleLead} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '11px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap'}}>Get Free Callback</button>
              </div>
            ) : (
              <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '12px 16px'}}>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>✓ We will call you within 30 minutes!</p>
              </div>
            )}
            <div style={{display: 'flex', gap: '10px', marginTop: '12px'}}>
              <Link href="/contact" style={{flex: 1, textAlign: 'center', background: '#f9fafb', color: '#374151', padding: '11px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', border: '1px solid #e5e7eb'}}>Book Consultation</Link>
              <a href="https://wa.me/918588807050?text=Hi+I+just+took+the+piles+symptoms+checker" target="_blank" rel="noopener noreferrer" style={{flex: 1, textAlign: 'center', background: '#22c55e', color: 'white', padding: '11px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600}}>WhatsApp Us</a>
            </div>
          </div>

          <button onClick={() => { setSubmitted(false); setAnswers({}); setPhone(''); setLeadSent(false) }}
            style={{width: '100%', background: 'white', color: '#6b7280', border: '1px solid #e5e7eb', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit'}}>
            ← Retake Checker
          </button>

          <div style={{marginTop: '24px', padding: '16px', background: '#f9fafb', borderRadius: '10px', fontSize: '12px', color: '#6b7280', lineHeight: '1.6'}}>
            <strong style={{color: '#374151'}}>Disclaimer:</strong> This checker is for informational purposes only and is not a medical diagnosis. Always consult a qualified doctor for proper examination and treatment.
          </div>
        </div>
      )}
    </div>
  )
}
