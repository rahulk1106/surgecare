'use client'
import { useState, useEffect } from 'react'
import type { Metadata } from 'next'

const seedQAs: Record<string, any> = {
  "is-laser-piles-surgery-painful-recovery": {
    "title": "Is laser piles surgery painful? What is the recovery like?",
    "body": "I have Grade 2 piles and my doctor has recommended laser surgery. I am worried about pain during and after the procedure. How painful is it really? How many days off work will I need?",
    "category": "Piles & Proctology",
    "name": "Ramesh K",
    "city": "Delhi",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Anil Sharma, MS Surgery, 15 yrs exp",
        "isDoctor": true,
        "body": "Laser piles surgery (LHP) is done under local or spinal anaesthesia \u2014 you feel zero pain during the procedure. After surgery most patients describe discomfort as 2-3 out of 10, easily managed with paracetamol for 2-3 days.\n\nFor desk work you can return in 2-3 days. Heavy lifting should wait 2-3 weeks. Grade 2 piles have excellent outcomes with laser \u2014 most patients are completely symptom-free within 1-2 weeks.\n\nKey tip: high-fibre diet and plenty of water after surgery significantly reduces discomfort during bowel movements in the first week.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Suresh V",
        "designation": "",
        "isDoctor": false,
        "body": "I had laser piles surgery 3 months ago. Much easier than I expected. Went home same evening. Mild soreness for 3 days then completely fine. Back at desk job on day 3. Wish I had not delayed it for 2 years out of fear.",
        "city": "Gurugram"
      },
      {
        "expert": false,
        "name": "Priya S",
        "designation": "",
        "isDoctor": false,
        "body": "Mine was done under spinal anaesthesia. Woke up with mild cramping. Doctor prescribed sitz baths twice daily which helped a lot. By day 5 I was completely normal.",
        "city": "Noida"
      }
    ]
  },
  "mtp-without-husband-permission-india-legal": {
    "title": "Can I get MTP done without my husband knowing? Is it legal?",
    "body": "I need to know if I can get an MTP done without my husband or family knowing about it. Is this legally allowed? Will the hospital inform him?",
    "category": "MTP & Gynecology",
    "name": "Anonymous",
    "city": "Gurugram",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Shobha Gupta, MD OBG, 26 yrs exp",
        "isDoctor": true,
        "body": "Yes, completely legal. Under the MTP Act India 2021, only YOUR OWN informed consent is required. Your husband has absolutely no legal right to be informed, and hospitals are legally prohibited from disclosing your medical information to anyone without your explicit consent.\n\nYou can get MTP done without your husband or family knowing. You can also choose a hospital in a different area for additional privacy.\n\nMySurgery handles all MTP consultations with absolute confidentiality. Call us at 8588967050 or WhatsApp \u2014 your privacy is our highest priority.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Anonymous",
        "designation": "",
        "isDoctor": false,
        "body": "I was in the same situation. MySurgery arranged everything confidentially. Went alone, no one asked about family. Doctor was a kind female gynaecologist. Everything was private and professional.",
        "city": "Delhi"
      }
    ]
  },
  "hernia-surgery-recovery-time-desk-job": {
    "title": "How many days off work needed after laparoscopic hernia surgery?",
    "body": "I have an inguinal hernia and am considering laparoscopic repair. I have a desk job. How many days will I need to take off?",
    "category": "Hernia",
    "name": "Sunil M",
    "city": "Noida",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Nitin Jha, Director Surgery, Fortis Noida",
        "isDoctor": true,
        "body": "For a desk job, most patients return to work in 5-7 days after laparoscopic hernia repair. Some people are back at 3-4 days if they feel comfortable.\n\nTimeline: Day 1-2 rest at home. Day 3-5 light movement around the house. Day 5-7 return to desk work. Week 3-4 return to driving. Week 6 return to gym and heavy lifting.\n\nAvoid lifting anything over 5kg for 4 weeks. The mesh needs 6 weeks to fully integrate.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Mohan D",
        "designation": "",
        "isDoctor": false,
        "body": "I was back at my desk job in 5 days after laparoscopic hernia surgery. The first 2 days were uncomfortable but after that it was quite manageable. Just avoid sitting for too long without breaks.",
        "city": "Delhi"
      },
      {
        "expert": false,
        "name": "Kavita R",
        "designation": "",
        "isDoctor": false,
        "body": "My husband had the surgery on Friday and was back at his IT job Monday morning working from home. By the following week he was commuting to office. Listen to your body though.",
        "city": "Bangalore"
      }
    ]
  },
  "laser-circumcision-adult-recovery-time": {
    "title": "I am 35 years old \u2014 how long is recovery after laser circumcision?",
    "body": "I am considering laser circumcision for phimosis. I am 35 years old. What is the realistic recovery timeline for an adult?",
    "category": "Circumcision & Urology",
    "name": "Anonymous",
    "city": "Mumbai",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Rajiv Tandon, MCh Urology, Apollo Delhi",
        "isDoctor": true,
        "body": "Age 35 is completely normal for laser circumcision and recovery is the same as for younger adults.\n\nRealistic timeline: Day 1-3 mild to moderate soreness, take prescribed painkillers regularly. Day 3-5 significant improvement, manageable discomfort. Week 1-2 swelling reduces, wound healing cleanly. Week 3-4 mostly healed, light activity okay. Week 4-6 full healing, sexual activity can resume.\n\nReturn to desk work: 2-3 days. Driving: 3-4 days. Gym: 3-4 weeks. Sexual activity: 4-6 weeks after full healing confirmed by doctor.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Anonymous",
        "designation": "",
        "isDoctor": false,
        "body": "Had it done at 38 for phimosis. Recovery was straightforward. Was back at work in 3 days. The 4-6 week wait for full activity is real though \u2014 do not rush it. Very glad I had it done.",
        "city": "Pune"
      }
    ]
  },
  "mtp-pills-vs-surgical-which-better": {
    "title": "Medical abortion pills vs surgical \u2014 which is safer?",
    "body": "I am about 7 weeks pregnant and considering my options. Is medical abortion (pills) safer than surgical abortion? What are the pros and cons of each?",
    "category": "MTP & Gynecology",
    "name": "Anonymous",
    "city": "Chennai",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Meera Krishnan, MS OBG, Aster Medcity",
        "isDoctor": true,
        "body": "At 7 weeks, both methods are safe and effective. Here is the comparison:\n\nMedical abortion (pills): Non-invasive, done at home after consultation, 95%+ effective at 7 weeks, takes 1-3 days to complete, some cramping and bleeding expected. Requires follow-up ultrasound at 2 weeks.\n\nSurgical S&E: 15-minute procedure under local anaesthesia, 99%+ effective, complete same day, less cramping than medical method, immediate confirmation of completion.\n\nAt 7 weeks I generally recommend medical abortion first as it avoids any procedure. However if you prefer certainty and immediate completion, S&E is excellent. The choice is yours \u2014 both are equally safe.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Anonymous",
        "designation": "",
        "isDoctor": false,
        "body": "I had medical abortion at 6 weeks. The process was manageable \u2014 took the medicines, had cramping for about 4 hours, then lighter bleeding for a week. The follow-up confirmed it was complete. If I had to do it again I would choose the same.",
        "city": "Bangalore"
      }
    ]
  },
  "piles-grade-3-laser-or-stapler": {
    "title": "I have Grade 3 piles \u2014 laser or stapler surgery?",
    "body": "My doctor confirmed Grade 3 piles with prolapse. He is recommending either laser haemorrhoidoplasty or stapler (MIPH) surgery. Which is better for Grade 3?",
    "category": "Piles & Proctology",
    "name": "Arun R",
    "city": "Hyderabad",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Ashish Bhanot, Senior Proctologist, Fortis Delhi",
        "isDoctor": true,
        "body": "For Grade 3 piles with prolapse, both laser and stapler (MIPH/PPH) are appropriate. Here is how to decide:\n\nLaser (LHP): Better for Grade 2-3 without significant prolapse. Precise, no cuts, minimal pain, same-day discharge, slightly longer recovery of 2-3 weeks.\n\nStapler (MIPH/PPH): Better for Grade 3-4 with significant mucosal prolapse. Removes excess tissue, faster procedure, same-day discharge, recurrence rate slightly lower for high-grade prolapse.\n\nFor Grade 3 with prolapse I lean towards stapler (MIPH) as it addresses the prolapse more effectively. Discuss with your surgeon what grade of prolapse you have \u2014 that is the key deciding factor.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Venkat S",
        "designation": "",
        "isDoctor": false,
        "body": "Had Grade 3 piles treated with stapler surgery (MIPH) last year. Recovery was about 1 week. No recurrence so far at 8 months. My doctor said stapler is better for Grade 3 with prolapse which matched what the MySurgery team said.",
        "city": "Chennai"
      }
    ]
  },
  "zsr-vs-laser-circumcision-difference": {
    "title": "What is the actual difference between ZSR and laser circumcision?",
    "body": "My urologist offers both ZSR and laser circumcision at different prices. What is actually different between the two? Which gives better results?",
    "category": "Circumcision & Urology",
    "name": "Anonymous",
    "city": "Pune",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Amit Khanna, MCh Urology, Jaypee Hospital",
        "isDoctor": true,
        "body": "Great question \u2014 both are excellent modern techniques, much better than conventional surgery.\n\nZSR (Zing Surgical Ring): Uses a circular stapling device. 10-15 minutes. Dissolving staples fall off at 7-10 days. Very fast, uniform cut, minimal bleeding. Slightly lower cost.\n\nLaser circumcision: Uses laser energy to cut and seal simultaneously. 20-25 minutes. No stitches or staples at all. Slightly more precise cosmetic result. Marginally more expensive.\n\nBoth have: same recovery time (2-3 days to work), same complication rates (<2%), same patient satisfaction. The difference is small. If cost matters, ZSR is slightly cheaper with equally good results. If you want zero hardware on the wound, laser has a slight edge.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Rajesh K",
        "designation": "",
        "isDoctor": false,
        "body": "Had ZSR 6 months ago. The staples were a bit uncomfortable for the first week but dissolved completely by day 10. Very happy with the result. Surgeon said ZSR is faster which reduces time under anaesthesia.",
        "city": "Mumbai"
      },
      {
        "expert": false,
        "name": "Anonymous",
        "designation": "",
        "isDoctor": false,
        "body": "I chose laser over ZSR because I did not want any staples at all. Both my friends who had each procedure are equally satisfied. Cost was about Rs 3000 more for laser at my hospital.",
        "city": "Delhi"
      }
    ]
  },
  "hernia-mesh-imported-vs-indian-difference": {
    "title": "Is imported hernia mesh really better than Indian? Worth the extra cost?",
    "body": "My surgeon is recommending an imported polypropylene mesh for Rs 15,000 vs Indian mesh for Rs 4,000. Is the imported one really worth it?",
    "category": "Hernia",
    "name": "Mohan D",
    "city": "Delhi",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Rakesh Kumar, Director Surgery, Fortis Gurugram",
        "isDoctor": true,
        "body": "Honest answer: for most routine inguinal hernias, good quality Indian mesh performs equally to imported mesh. Studies show similar recurrence rates at 5 years.\n\nWhere imported mesh has an advantage: complex or large hernias, recurrent hernias (previous repair failed), obese patients, very active patients who return to heavy work. Lighter-weight and partially absorbable meshes from brands like Bard, Covidien, or Ethicon may offer slight advantages in these cases.\n\nFor a primary inguinal hernia in a healthy person: Indian mesh from reputed manufacturers like Healtheon or Hridayam is perfectly adequate. The Rs 11,000 difference is not always justified. Ask your surgeon specifically why he recommends imported for your case.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Pradeep M",
        "designation": "",
        "isDoctor": false,
        "body": "My surgeon was very clear that for my straightforward inguinal hernia, Indian mesh was identical in outcome. I am 18 months post-surgery with no issues. Saved Rs 12,000.",
        "city": "Noida"
      }
    ]
  },
  "knee-replacement-insurance-waiting-period": {
    "title": "My Star Health policy is 3 years old \u2014 is knee replacement covered?",
    "body": "I have Star Health Comprehensive policy for 3 years. I need a total knee replacement. My doctor says I need surgery. Will my insurance cover it?",
    "category": "Insurance & Cost",
    "name": "Anita S",
    "city": "Bangalore",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "MySurgery Insurance Team",
        "isDoctor": true,
        "body": "Good news \u2014 Star Health Comprehensive has a 2-year waiting period for joint replacement surgery, so at 3 years you are fully eligible.\n\nCoverage details for Star Comprehensive: Total knee replacement is covered including implant cost, surgeon fee, anaesthesia, OT, and room charges up to your sum insured.\n\nImportant: Check your policy for implant sub-limits. Some Star plans cap implant at Rs 50,000-1,00,000. If your surgeon recommends a premium implant above this limit you pay the difference.\n\nProcess: Ask your surgeon for a pre-surgery estimate. We at MySurgery will submit pre-authorisation to Star Health. Approval typically in 4-8 hours. Then proceed with cashless treatment. Call us at 8588967050 for help with the claim.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Ramesh N",
        "designation": "",
        "isDoctor": false,
        "body": "Had knee replacement covered under Star Health Comprehensive at 4 years. The claim was smooth. MySurgery team helped with all paperwork. Only paid Rs 8,000 out of pocket for a Rs 2,20,000 surgery.",
        "city": "Hyderabad"
      }
    ]
  },
  "cataract-surgery-multifocal-lens-worth-it": {
    "title": "Is multifocal lens worth the extra cost for cataract surgery?",
    "body": "My ophthalmologist is recommending multifocal IOL for Rs 50,000 per eye vs monofocal for Rs 8,000 per eye. Is the multifocal really worth the extra Rs 42,000 per eye?",
    "category": "Cataract & Eyes",
    "name": "Vijay P",
    "city": "Kochi",
    "answers": [
      {
        "expert": true,
        "name": "MySurgery Medical Team",
        "designation": "Reviewed by Dr. Kavita Rao, MS Ophthalmology, Medanta",
        "isDoctor": true,
        "body": "This depends entirely on your lifestyle and how much you value spectacle independence.\n\nMonofocal IOL (Rs 8,000-15,000): Excellent distance or near vision (you choose the focus). You will need reading glasses for near work. Proven technology, very predictable outcomes. Most patients over 65 choose this.\n\nMultifocal IOL (Rs 40,000-70,000 per eye): Aims for independence from glasses at all distances. Works well in 80-85% of patients. In 10-15% there are halos and glare especially at night which can bother some people.\n\nMy honest assessment: If you drive a lot at night, have significant astigmatism, or are very sensitive to visual disturbances, monofocal is safer. If you are active, want to read without glasses, and can accept occasional night halos, multifocal is worth it. Age matters too \u2014 younger cataract patients benefit more from multifocal.",
        "city": ""
      },
      {
        "expert": false,
        "name": "Shalini K",
        "designation": "",
        "isDoctor": false,
        "body": "Chose multifocal at 58 years for both eyes. Best decision ever \u2014 completely glasses-free for 2 years. Some night halos for first 3 months but they faded. The extra cost was worth it for my active lifestyle.",
        "city": "Mumbai"
      },
      {
        "expert": false,
        "name": "George T",
        "designation": "",
        "isDoctor": false,
        "body": "Chose monofocal at 70. No regrets. I wear reading glasses for near work which does not bother me. Saved Rs 85,000 for the pair and have crystal clear distance vision.",
        "city": "Kochi"
      }
    ]
  }
}

export default function QAPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const seed = seedQAs[slug]
  const [qa, setQa] = useState<any>(seed || null)
  const [loading, setLoading] = useState(!seed)
  const [answers, setAnswers] = useState<any[]>(seed?.answers || [])
  const [showAnswerForm, setShowAnswerForm] = useState(false)
  const [form, setForm] = useState({ body: '', name: '', city: '', isDoctor: false, qualification: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle'|'success'|'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    // Fetch extra answers from DB (on top of seeds)
    fetch('/api/community/answer?slug=' + slug)
      .then(r => r.json())
      .then(data => {
        if (data.answers && data.answers.length > 0) {
          setAnswers(prev => {
            const existingBodies = new Set(prev.map((a: any) => a.body.slice(0, 30)))
            const newOnes = data.answers.filter((a: any) => !existingBodies.has(a.body.slice(0, 30)))
            return [...prev, ...newOnes]
          })
        }
      })
      .catch(() => {})
  }, [slug])

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.body.trim()) { setSubmitError('Please write your answer.'); return }
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/community/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionSlug: slug, answerBody: form.body, name: form.name, city: form.city, isDoctor: form.isDoctor, qualification: form.qualification }),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setSubmitError(data.error || 'Something went wrong. Please try again.')
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        setShowAnswerForm(false)
        // Optimistically add answer
        setAnswers(prev => [...prev, {
          body: form.body,
          name: form.name || 'Anonymous',
          city: form.city,
          isDoctor: form.isDoctor,
          qualification: form.qualification,
          expert: false,
          createdAt: new Date().toISOString(),
        }])
        setForm({ body: '', name: '', city: '', isDoctor: false, qualification: '' })
      }
    } catch {
      setSubmitError('Network error. Please try again.')
      setSubmitStatus('error')
    }
    setSubmitting(false)
  }

  if (loading) return <div style={{padding: '80px 24px', textAlign: 'center', color: '#6b7280'}}>Loading...</div>
  if (!qa) return <div style={{padding: '80px 24px', textAlign: 'center'}}><h1 style={{color: '#111827'}}>Question not found</h1><a href='/community' style={{color: '#1d4ed8'}}>← Back to Community</a></div>

  const qaSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: qa.title,
      text: qa.body,
      answerCount: answers.length,
      acceptedAnswer: answers[0] ? { '@type': 'Answer', text: answers[0].body, author: { '@type': 'Organization', name: answers[0].name } } : undefined,
    }
  })

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '800px', margin: '0 auto', padding: '32px 24px 80px'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: qaSchema }} />

      {/* BREADCRUMB */}
      <div style={{fontSize: '13px', color: '#6b7280', marginBottom: '20px'}}>
        <a href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> › <a href='/community' style={{color: '#6b7280', textDecoration: 'none'}}>Community</a> › <span style={{color: '#1d4ed8'}}>{qa.category}</span>
      </div>

      {/* QUESTION */}
      <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '28px', marginBottom: '28px'}}>
        <span style={{fontSize: '11px', fontWeight: 600, color: '#1d4ed8', background: '#eff6ff', padding: '3px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '12px'}}>{qa.category}</span>
        <h1 style={{fontSize: '24px', fontWeight: 700, color: '#0f1f35', marginBottom: '14px', lineHeight: '1.35'}}>{qa.title}</h1>
        {qa.body && <p style={{fontSize: '15px', color: '#4b5563', lineHeight: '1.75', margin: '0 0 14px'}}>{qa.body}</p>}
        <div style={{display: 'flex', gap: '16px', fontSize: '13px', color: '#9ca3af', flexWrap: 'wrap'}}>
          <span>Asked by {qa.name}{qa.city ? ' · ' + qa.city : ''}</span>
          <span>{answers.length} answer{answers.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* ANSWERS HEADER */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
        <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', margin: 0}}>{answers.length} Answer{answers.length !== 1 ? 's' : ''}</h2>
        <button onClick={() => { setShowAnswerForm(!showAnswerForm); setSubmitStatus('idle'); setSubmitError('') }} style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '9px 18px', borderRadius: '8px', border: 'none', fontSize: '13px', cursor: 'pointer'}}>
          {showAnswerForm ? 'Cancel' : 'Write an Answer'}
        </button>
      </div>

      {/* SUCCESS */}
      {submitStatus === 'success' && (
        <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px', padding: '14px 18px', marginBottom: '16px'}}>
          <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>✓ Your answer has been posted! Thank you for helping the community.</p>
        </div>
      )}

      {/* ANSWER FORM */}
      {showAnswerForm && (
        <div style={{background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '24px', marginBottom: '24px'}}>
          <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>Post Your Answer</h3>
          <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '16px'}}>Share your experience or knowledge. Be honest and helpful.</p>
          {submitError && (
            <div style={{background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '10px 14px', marginBottom: '14px'}}>
              <p style={{color: '#dc2626', fontSize: '14px', margin: 0}}>⚠️ {submitError}</p>
            </div>
          )}
          <form onSubmit={handleSubmitAnswer}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              <div>
                <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Your Answer <span style={{color: '#dc2626'}}>*</span></label>
                <textarea value={form.body} onChange={e => setForm({...form, body: e.target.value})} placeholder='Share your experience, knowledge, or advice...' rows={5} style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'}} />
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px'}}>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Your Name</label>
                  <input type='text' value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder='Anonymous' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>City</label>
                  <input type='text' value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder='e.g. Delhi' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <input type='checkbox' id='isDoctor' checked={form.isDoctor} onChange={e => setForm({...form, isDoctor: e.target.checked})} style={{width: '16px', height: '16px', cursor: 'pointer'}} />
                <label htmlFor='isDoctor' style={{fontSize: '14px', color: '#374151', cursor: 'pointer'}}>I am a doctor / medical professional</label>
              </div>
              {form.isDoctor && (
                <div>
                  <label style={{fontSize: '13px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '6px'}}>Qualification / Designation</label>
                  <input type='text' value={form.qualification} onChange={e => setForm({...form, qualification: e.target.value})} placeholder='e.g. MS General Surgery, 12 yrs exp' style={{width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
              )}
              <button type='submit' disabled={submitting} style={{background: submitting ? '#93c5fd' : '#1d4ed8', color: 'white', fontWeight: 600, padding: '13px', borderRadius: '10px', border: 'none', fontSize: '15px', cursor: submitting ? 'not-allowed' : 'pointer'}}>
                {submitting ? 'Posting...' : 'Post Answer →'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ANSWERS LIST */}
      {answers.map((ans: any, i: number) => (
        <div key={i} style={{background: ans.expert || ans.isDoctor ? '#eff6ff' : 'white', border: ans.expert || ans.isDoctor ? '1px solid #bfdbfe' : '1px solid #e5e7eb', borderRadius: '14px', padding: '24px', marginBottom: '14px'}}>
          <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px'}}>
            <div style={{width: '42px', height: '42px', borderRadius: '50%', background: ans.expert || ans.isDoctor ? '#1d4ed8' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: ans.expert || ans.isDoctor ? 'white' : '#6b7280', fontSize: '16px', flexShrink: 0}}>
              {ans.expert || ans.isDoctor ? '✓' : (ans.name?.charAt(0) || 'A')}
            </div>
            <div style={{flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap'}}>
                <p style={{fontWeight: 700, color: '#111827', fontSize: '14px', margin: 0}}>{ans.name || 'Anonymous'}</p>
                {(ans.expert || ans.isDoctor) && <span style={{fontSize: '11px', background: '#1d4ed8', color: 'white', padding: '2px 8px', borderRadius: '4px', fontWeight: 600}}>Doctor / Expert</span>}
              </div>
              {(ans.designation || ans.qualification) && <p style={{fontSize: '12px', color: '#1d4ed8', margin: '2px 0 0', fontWeight: 500}}>{ans.designation || ans.qualification}</p>}
              {ans.city && <p style={{fontSize: '12px', color: '#9ca3af', margin: '2px 0 0'}}>{ans.city}</p>}
            </div>
          </div>
          <div style={{fontSize: '15px', color: '#374151', lineHeight: '1.75'}}>
            {(ans.body || '').split('\n\n').map((para: string, j: number) => <p key={j} style={{margin: '0 0 12px'}}>{para}</p>)}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div style={{background: '#0f1f35', borderRadius: '16px', padding: '32px', textAlign: 'center', marginTop: '32px'}}>
        <h2 style={{fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '8px'}}>Need expert medical advice?</h2>
        <p style={{color: '#93c5fd', marginBottom: '24px', fontSize: '14px'}}>Free consultation with specialist doctors. Callback in 30 minutes.</p>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href='/contact' style={{background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '11px 22px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>Book Free Consultation</a>
          <a href='https://wa.me/918588967050' target='_blank' rel='noopener noreferrer' style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '11px 22px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>WhatsApp Us</a>
          <a href='/community' style={{background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '11px 22px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>More Questions</a>
        </div>
      </div>
    </div>
  )
}