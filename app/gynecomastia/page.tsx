import type { Metadata } from 'next'
import BlogCTA from '@/components/forms/BlogCTA'

export const metadata: Metadata = {
  title: 'Gynecomastia Surgery in India 2026 — Male Breast Reduction Cost, Grade & Treatment | MySurgery',
  description: 'Gynecomastia (male breast reduction) surgery costs Rs 55,000 to Rs 1,20,000 in India. Grade 1, 2, 3 treatment options. Liposuction + gland excision. Same-day discharge. Free consultation.',
  alternates: { canonical: '/gynecomastia' },
  keywords: ['gynecomastia surgery cost India', 'male breast reduction Delhi', 'gynecomastia treatment 2026', 'gynecomastia grade 2 surgery', 'chest flattening surgery India'],
}

const grades = [
  {
    grade: 'Grade 1',
    label: 'Minor Enlargement',
    color: '#16a34a', bg: '#f0fdf4', border: '#86efac',
    desc: 'Small amount of breast tissue around the nipple. No excess skin. Often seen in teenagers and resolves on its own.',
    treatment: 'Observation (if recent) or Liposuction alone',
    surgery: false,
    cost: 'Rs 45,000 – Rs 70,000',
    recovery: '3-5 days to desk work',
    icon: '🟢',
  },
  {
    grade: 'Grade 2',
    label: 'Moderate Enlargement',
    color: '#b45309', bg: '#fefce8', border: '#fcd34d',
    desc: 'Breast tissue extends beyond the areola. No excess skin. Most common grade in adults. Surgery gives excellent results.',
    treatment: 'Liposuction + Gland Excision (recommended)',
    surgery: true,
    cost: 'Rs 55,000 – Rs 95,000',
    recovery: '5-7 days to desk work',
    icon: '🟡',
  },
  {
    grade: 'Grade 3',
    label: 'Significant Enlargement',
    color: '#dc2626', bg: '#fef2f2', border: '#fca5a5',
    desc: 'Moderate enlargement with some excess skin. Breast tissue clearly visible through clothing. Causes psychological distress.',
    treatment: 'Liposuction + Gland Excision + Skin tightening',
    surgery: true,
    cost: 'Rs 70,000 – Rs 1,10,000',
    recovery: '7-10 days to desk work',
    icon: '🔴',
  },
  {
    grade: 'Grade 4',
    label: 'Severe Enlargement',
    color: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff',
    desc: 'Severe enlargement with significant excess skin. Resembles female breast tissue. Requires more extensive surgical correction.',
    treatment: 'Extensive excision + Skin reduction + Areola repositioning',
    surgery: true,
    cost: 'Rs 90,000 – Rs 1,50,000',
    recovery: '10-14 days to desk work',
    icon: '🟣',
  },
]

const techniques = [
  {
    name: 'Liposuction alone',
    icon: '💉',
    best: 'Grade 1 — Pure fatty gynecomastia',
    how: 'A thin cannula removes excess fat through tiny 3-4mm incisions. No visible scarring. 30-45 minutes under local anaesthesia.',
    pros: ['Minimal scarring', 'Fastest recovery', 'Best for Grade 1 fat-dominant gynecomastia'],
    cons: ['Does not remove glandular tissue', 'May need gland excision if hard tissue present'],
    cost: 'Rs 45,000 – Rs 70,000',
  },
  {
    name: 'Gland Excision + Liposuction',
    icon: '✂️',
    best: 'Grade 2 & 3 — Most common technique',
    how: 'Small incision at the edge of the areola (nearly invisible). Glandular tissue is removed. Liposuction removes surrounding fat. 1-2 hours under general anaesthesia.',
    pros: ['Removes both fat and glandular tissue', 'Permanent results', 'Minimal visible scar at areola border', 'Best results for most patients'],
    cons: ['Requires general anaesthesia', 'Slightly longer recovery than liposuction alone'],
    cost: 'Rs 55,000 – Rs 1,10,000',
  },
  {
    name: 'Skin Reduction Surgery',
    icon: '🏥',
    best: 'Grade 3 & 4 — With excess skin',
    how: 'Combines gland excision and liposuction with removal of excess skin and possible areola repositioning. 2-3 hours under general anaesthesia.',
    pros: ['Best result for severe gynecomastia', 'Completely flat chest', 'Repositions nipple if needed'],
    cons: ['Longer scar (usually well hidden)', 'Longer recovery', 'Higher cost'],
    cost: 'Rs 90,000 – Rs 1,50,000',
  },
]

const faqs = [
  { q: 'Is gynecomastia surgery permanent?', a: 'Yes. Once the glandular tissue is surgically removed, gynecomastia does not return. The results are permanent as long as you maintain a healthy lifestyle and avoid steroids or medications that caused it. Pure fatty gynecomastia treated with liposuction alone may return with significant weight gain.' },
  { q: 'At what age can gynecomastia surgery be done?', a: 'Surgery is recommended after 18 years when the condition is fully developed. For teenagers with pubertal gynecomastia, doctors usually wait 1-2 years as it may resolve naturally. If it persists beyond age 17-18 or causes significant psychological distress, surgery is considered.' },
  { q: 'How long does recovery take after gynecomastia surgery?', a: 'Most patients return to desk work in 3-5 days. A compression vest is worn for 4-6 weeks to reduce swelling. Light exercise resumes at 2-3 weeks. Gym and heavy lifting at 4-6 weeks. Final results are seen at 3-6 months as swelling fully resolves.' },
  { q: 'Is gynecomastia surgery covered by insurance?', a: 'Usually not. Gynecomastia surgery is considered cosmetic/elective and is excluded by most health insurance policies. However if gynecomastia is caused by a medical condition (like liver disease or medication side effects), some policies may consider coverage. MySurgery can check your specific policy.' },
  { q: 'What causes gynecomastia in men?', a: 'Common causes include hormonal imbalance (high oestrogen relative to testosterone), puberty, obesity, steroids and bodybuilding supplements, alcohol, certain medications (antidepressants, blood pressure drugs), kidney disease, and liver disease. In many cases no specific cause is found (idiopathic gynecomastia).' },
  { q: 'How do I know if I have Grade 2 or Grade 3 gynecomastia?', a: 'Grade 2 has breast tissue extending beyond the areola border without excess skin. Grade 3 has similar tissue extension but with some excess skin that causes the breast to droop. A physical examination by an experienced plastic surgeon confirms the grade and recommends the right technique.' },
  { q: 'Will there be a visible scar after gynecomastia surgery?', a: 'For liposuction alone — the 3-4mm entry points are nearly invisible. For gland excision — the incision is made at the lower border of the areola where it meets skin, making it almost invisible. For severe Grade 4 — there may be a larger scar but it is placed in natural skin folds.' },
  { q: 'Can gynecomastia be treated without surgery?', a: 'Grade 1 pubertal gynecomastia may resolve on its own in 1-2 years. Addressing the underlying cause (stopping steroids, changing medication) can help. Medications (tamoxifen, raloxifene) have limited evidence and are rarely used in India. For Grade 2 and above, surgery is the only reliable permanent solution.' },
]

export default function GynecomastiaPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1a3a5c 100%)', padding: '56px 24px 48px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#93c5fd', marginBottom: '12px'}}>
            <a href="/" style={{color: '#93c5fd', textDecoration: 'none'}}>Home</a> › <a href="/treatment/gynecomastia" style={{color: '#93c5fd', textDecoration: 'none'}}>Aesthetics</a> › Gynecomastia Surgery
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center'}}>
            <div>
              <span style={{fontSize: '12px', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Male Breast Reduction</span>
              <h1 style={{fontSize: '38px', fontWeight: 700, color: 'white', margin: '8px 0 16px', lineHeight: '1.2'}}>
                Gynecomastia Surgery India 2026
              </h1>
              <p style={{color: '#93c5fd', fontSize: '17px', lineHeight: '1.65', marginBottom: '24px'}}>
                Flat chest. Permanent results. Day surgery. Expert plastic surgeons across 21 cities in India.
              </p>
              <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px'}}>
                <a href="/contact" style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>Book Free Consultation</a>
                <a href="https://wa.me/918588967050?text=Hi+I+want+consultation+for+gynecomastia+surgery" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>WhatsApp Us</a>
              </div>
              <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
                {[['Rs 55K–1.2L', 'Cost Range'], ['1–2 hrs', 'Surgery Time'], ['Same Day', 'Discharge'], ['3–5 Days', 'Back to Work']].map(([val, label]) => (
                  <div key={label}>
                    <p style={{fontSize: '20px', fontWeight: 700, color: 'white', margin: '0 0 2px'}}>{val}</p>
                    <p style={{fontSize: '12px', color: '#93c5fd', margin: 0}}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {/* Visual grade illustration */}
              <div style={{background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px'}}>
                <p style={{color: '#93c5fd', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', margin: '0 0 12px'}}>Gynecomastia Grades</p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                  {grades.map(g => (
                    <div key={g.grade} style={{background: g.bg, borderRadius: '10px', padding: '12px', border: '1px solid ' + g.border}}>
                      <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px'}}>
                        <span style={{fontSize: '18px'}}>{g.icon}</span>
                        <span style={{fontWeight: 700, color: g.color, fontSize: '14px'}}>{g.grade}</span>
                      </div>
                      <p style={{fontSize: '12px', color: '#374151', margin: '0 0 4px'}}>{g.label}</p>
                      <p style={{fontSize: '12px', fontWeight: 600, color: g.color, margin: 0}}>{g.cost}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 80px'}}>

        {/* WHAT IS GYNECOMASTIA */}
        <section style={{marginBottom: '56px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'start'}}>
            <div>
              <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>What Is It?</p>
              <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>What Is Gynecomastia?</h2>
              <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.8', marginBottom: '14px'}}>
                Gynecomastia is the benign enlargement of male breast tissue caused by an imbalance between oestrogen and testosterone. It affects 40-60% of men at some point in their life and can occur at any age — from newborns to elderly men.
              </p>
              <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.8', marginBottom: '14px'}}>
                It is important to distinguish true gynecomastia (glandular tissue) from pseudogynecomastia (pure fat) as treatment differs. A surgeon can determine this on examination.
              </p>
              <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.8'}}>
                Surgery permanently removes the excess tissue giving a flat, masculine chest contour. Over 95% of patients report significantly improved confidence and quality of life after surgery.
              </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{background: '#fef3c7', borderRadius: '14px', padding: '20px', border: '1px solid #fcd34d'}}>
                <p style={{fontWeight: 700, color: '#92400e', margin: '0 0 12px', fontSize: '15px'}}>⚠️ True Gynecomastia vs Pseudogynecomastia</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <div style={{background: 'white', borderRadius: '8px', padding: '10px 12px'}}>
                    <p style={{fontWeight: 600, color: '#111827', margin: '0 0 3px', fontSize: '14px'}}>True Gynecomastia</p>
                    <p style={{fontSize: '13px', color: '#4b5563', margin: 0}}>Firm glandular tissue under the nipple. Feels like a disc. Cannot be reduced by diet or exercise alone.</p>
                  </div>
                  <div style={{background: 'white', borderRadius: '8px', padding: '10px 12px'}}>
                    <p style={{fontWeight: 600, color: '#111827', margin: '0 0 3px', fontSize: '14px'}}>Pseudogynecomastia</p>
                    <p style={{fontSize: '13px', color: '#4b5563', margin: 0}}>Soft fatty tissue. Can be partly reduced with weight loss. Treated with liposuction alone.</p>
                  </div>
                </div>
              </div>
              <div style={{background: '#eff6ff', borderRadius: '14px', padding: '20px', border: '1px solid #bfdbfe'}}>
                <p style={{fontWeight: 700, color: '#1e3a8a', margin: '0 0 10px', fontSize: '15px'}}>👥 How Common Is It?</p>
                {[['40-60%', 'of men affected at some point'], ['Puberty', 'most common trigger (usually self-resolves)'], ['40s-50s', 'second peak — hormonal changes'], ['Steroids', 'major cause in gym-going men']].map(([val, label]) => (
                  <div key={val} style={{display: 'flex', gap: '10px', padding: '6px 0', borderBottom: '1px solid #dbeafe'}}>
                    <span style={{fontWeight: 700, color: '#1d4ed8', fontSize: '13px', minWidth: '60px'}}>{val}</span>
                    <span style={{fontSize: '13px', color: '#374151'}}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section style={{marginBottom: '48px'}}>
          <div style={{textAlign: 'center', marginBottom: '24px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>Visual Guide</p>
            <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Understanding Gynecomastia — Visual Guide</h2>
            <p style={{fontSize: '15px', color: '#6b7280'}}>Educational images to help you understand the condition and surgical techniques</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px'}}>

            {/* Image 3 — Compression vest / Recovery */}
            <div style={{borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', maxWidth: '400px', margin: '0 auto'}}>
              <div style={{position: 'relative', background: '#f9fafb'}}>
                <img
                  src="https://m.media-amazon.com/images/I/61k5SxHo-EL._AC_UX679_.jpg"
                  alt="Compression vest worn after gynecomastia surgery for recovery"
                  style={{width: '100%', height: '260px', objectFit: 'contain', display: 'block', background: '#f9fafb', padding: '10px'}}
                />
                <div style={{position: 'absolute', top: '10px', left: '10px', background: '#7c3aed', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px'}}>Post-Surgery Recovery</div>
              </div>
              <div style={{padding: '16px', background: 'white'}}>
                <h3 style={{fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 6px'}}>Compression Vest After Surgery</h3>
                <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.6'}}>A medical-grade compression vest is worn for 4-6 weeks after surgery. It reduces swelling, supports healing, and helps the skin conform to your new flat chest contour. Included in surgery package.</p>
              </div>
            </div>
          </div>

          {/* Before/After note */}
          <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '16px 20px', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
            <span style={{fontSize: '20px', flexShrink: 0}}>📸</span>
            <div>
              <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 4px', fontSize: '14px'}}>Want to see actual before/after results?</p>
              <p style={{fontSize: '13px', color: '#78350f', margin: 0}}>Our surgeons share their portfolio during the consultation. Book a free consultation to see results specific to your grade and body type. <a href="/contact" style={{color: '#1d4ed8', fontWeight: 500}}>Book now →</a></p>
            </div>
          </div>
        </section>

        <BlogCTA procedure="Gynecomastia Surgery" />

        {/* GRADES */}
        <section style={{marginBottom: '56px'}}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>Classification</p>
            <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '10px'}}>Gynecomastia Grades — Which Grade Are You?</h2>
            <p style={{fontSize: '16px', color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>Gynecomastia is classified into 4 grades. Treatment and cost depend on your grade. A surgeon determines your grade on examination.</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {grades.map(g => (
              <div key={g.grade} style={{background: 'white', border: '1px solid ' + g.border, borderLeft: '4px solid ' + g.color, borderRadius: '14px', padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', alignItems: 'center'}}>
                <div>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px'}}>
                    <span style={{fontSize: '28px'}}>{g.icon}</span>
                    <div>
                      <p style={{fontWeight: 700, color: g.color, fontSize: '18px', margin: '0 0 2px'}}>{g.grade}</p>
                      <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>{g.label}</p>
                    </div>
                  </div>
                  <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0}}>{g.desc}</p>
                </div>
                <div>
                  <p style={{fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', margin: '0 0 6px'}}>Recommended Treatment</p>
                  <p style={{fontSize: '14px', color: '#111827', fontWeight: 500, margin: '0 0 10px'}}>{g.treatment}</p>
                  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                    <span style={{fontSize: '12px', background: g.bg, color: g.color, padding: '4px 10px', borderRadius: '6px', fontWeight: 600}}>Cost: {g.cost}</span>
                    <span style={{fontSize: '12px', background: '#f9fafb', color: '#374151', padding: '4px 10px', borderRadius: '6px'}}>{g.recovery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '16px 20px', marginTop: '16px', display: 'flex', gap: '12px', alignItems: 'center'}}>
            <span style={{fontSize: '24px'}}>🔍</span>
            <div>
              <p style={{fontWeight: 600, color: '#16a34a', margin: '0 0 3px'}}>Not sure what grade you have?</p>
              <p style={{fontSize: '14px', color: '#374151', margin: 0}}>Book a free consultation — our surgeon will examine and grade your gynecomastia and recommend the right technique. Takes 15 minutes. <a href="/contact" style={{color: '#1d4ed8', fontWeight: 500}}>Book now →</a></p>
            </div>
          </div>
        </section>

        {/* TECHNIQUES */}
        <section style={{marginBottom: '56px'}}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>Surgical Techniques</p>
            <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35'}}>Surgery Options — How It Is Done</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'}}>
            {techniques.map((t, i) => (
              <div key={t.name} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden'}}>
                {i === 1 && <div style={{background: '#1d4ed8', color: 'white', fontSize: '12px', fontWeight: 600, textAlign: 'center', padding: '6px', letterSpacing: '0.05em'}}>MOST RECOMMENDED</div>}
                <div style={{padding: '22px'}}>
                  <span style={{fontSize: '32px', display: 'block', marginBottom: '12px'}}>{t.icon}</span>
                  <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '6px'}}>{t.name}</h3>
                  <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', marginBottom: '10px'}}>Best for: {t.best}</p>
                  <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.65', marginBottom: '14px'}}>{t.how}</p>
                  <div style={{marginBottom: '12px'}}>
                    <p style={{fontSize: '12px', fontWeight: 600, color: '#16a34a', margin: '0 0 6px'}}>Pros</p>
                    {t.pros.map(p => <p key={p} style={{fontSize: '13px', color: '#374151', margin: '0 0 4px'}}>✓ {p}</p>)}
                  </div>
                  <div style={{marginBottom: '14px'}}>
                    <p style={{fontSize: '12px', fontWeight: 600, color: '#dc2626', margin: '0 0 6px'}}>Cons</p>
                    {t.cons.map(c => <p key={c} style={{fontSize: '13px', color: '#374151', margin: '0 0 4px'}}>• {c}</p>)}
                  </div>
                  <p style={{fontSize: '14px', fontWeight: 700, color: '#1d4ed8', margin: 0}}>Cost: {t.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCEDURE PHOTOS */}
        <section style={{marginBottom: '48px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px'}}>
            <div style={{borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'white'}}>
              <img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=500&q=80" alt="Plastic surgeon performing gynecomastia surgery" style={{width: '100%', height: '180px', objectFit: 'cover', display: 'block'}} />
              <div style={{padding: '14px'}}>
                <p style={{fontWeight: 600, color: '#111827', margin: '0 0 4px', fontSize: '14px'}}>Expert Plastic Surgeons</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>MySurgery partners with MCh-qualified plastic surgeons with 10+ years experience</p>
              </div>
            </div>
            <div style={{borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'white'}}>
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80" alt="Modern operation theatre for gynecomastia surgery" style={{width: '100%', height: '180px', objectFit: 'cover', display: 'block'}} />
              <div style={{padding: '14px'}}>
                <p style={{fontWeight: 600, color: '#111827', margin: '0 0 4px', fontSize: '14px'}}>NABH-Accredited Hospitals</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Surgery done at accredited hospitals with modern OTs and anaesthesia teams</p>
              </div>
            </div>
            <div style={{borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'white'}}>
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80" alt="Patient consultation with doctor before gynecomastia surgery" style={{width: '100%', height: '180px', objectFit: 'cover', display: 'block'}} />
              <div style={{padding: '14px'}}>
                <p style={{fontWeight: 600, color: '#111827', margin: '0 0 4px', fontSize: '14px'}}>Free Pre-Surgery Consultation</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Surgeon examines, grades your condition, and gives a transparent cost estimate</p>
              </div>
            </div>
            <div style={{borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'white'}}>
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80" alt="Patient recovering after gynecomastia surgery at hospital" style={{width: '100%', height: '180px', objectFit: 'cover', display: 'block'}} />
              <div style={{padding: '14px'}}>
                <p style={{fontWeight: 600, color: '#111827', margin: '0 0 4px', fontSize: '14px'}}>Same-Day Discharge</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Most gynecomastia surgeries are done under day care — home the same evening</p>
              </div>
            </div>
          </div>
        </section>

        <BlogCTA procedure="Gynecomastia Surgery" />

        {/* RECOVERY TIMELINE */}
        <section style={{marginBottom: '56px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '24px', textAlign: 'center'}}>Recovery Timeline — Day by Day</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px'}}>
            {[
              {period: 'Day of Surgery', icon: '🏥', points: ['Same-day discharge in most cases', 'Compression vest applied immediately', 'Mild soreness — controlled with painkillers', 'Rest at home']},
              {period: 'Day 1-3', icon: '🛋', points: ['Mild to moderate swelling and bruising', 'Take prescribed painkillers', 'Short walks around home', 'No lifting or exertion']},
              {period: 'Day 3-7', icon: '💻', points: ['Return to desk work for most patients', 'Swelling reduces significantly', 'Compression vest worn 24/7', 'Short drives possible']},
              {period: 'Week 2-3', icon: '🚶', points: ['Light activity and walking', 'Swelling continues to reduce', 'Compression vest during day', 'No gym or sports yet']},
              {period: 'Week 4-6', icon: '🏃', points: ['Return to light gym', 'Most swelling resolved', 'Results becoming visible', 'Cleared by surgeon at follow-up']},
              {period: '3-6 Months', icon: '✨', points: ['Final results visible', 'All swelling completely gone', 'Flat masculine chest achieved', 'Scars fading significantly']},
            ].map(item => (
              <div key={item.period} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '18px'}}>
                <span style={{fontSize: '28px', display: 'block', marginBottom: '10px'}}>{item.icon}</span>
                <p style={{fontWeight: 700, color: '#111827', margin: '0 0 10px', fontSize: '14px'}}>{item.period}</p>
                {item.points.map(pt => <p key={pt} style={{fontSize: '13px', color: '#4b5563', margin: '0 0 4px', lineHeight: '1.5'}}>• {pt}</p>)}
              </div>
            ))}
          </div>
        </section>

        {/* CAUSES */}
        <section style={{marginBottom: '56px', background: '#f9fafb', borderRadius: '20px', padding: '36px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', textAlign: 'center'}}>Common Causes of Gynecomastia</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px'}}>
            {[
              {cause: 'Puberty', icon: '🧒', desc: 'Most common. 50-70% of teenage boys experience it. Usually resolves in 1-2 years.', common: true},
              {cause: 'Anabolic Steroids', icon: '💪', desc: 'Steroids and prohormones convert to oestrogen causing significant gynecomastia.', common: true},
              {cause: 'Obesity', icon: '⚖️', desc: 'Fat tissue produces oestrogen. Weight loss helps but does not remove glandular tissue.', common: true},
              {cause: 'Medications', icon: '💊', desc: 'Antidepressants, blood pressure drugs, antifungals, and some antibiotics can cause it.', common: false},
              {cause: 'Hormonal Imbalance', icon: '🧬', desc: 'Low testosterone or high oestrogen from any cause including hypogonadism.', common: false},
              {cause: 'Liver Disease', icon: '🫀', desc: 'Liver processes hormones. Liver disease can lead to oestrogen excess.', common: false},
              {cause: 'Alcohol', icon: '🍺', desc: 'Chronic alcohol use affects hormone metabolism and can cause gynecomastia.', common: false},
              {cause: 'Idiopathic', icon: '❓', desc: 'In many cases no specific cause is found. Surgery is still effective regardless.', common: false},
            ].map(item => (
              <div key={item.cause} style={{background: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb'}}>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px'}}>
                  <span style={{fontSize: '24px'}}>{item.icon}</span>
                  <div>
                    <p style={{fontWeight: 600, color: '#111827', margin: 0, fontSize: '14px'}}>{item.cause}</p>
                    {item.common && <span style={{fontSize: '10px', background: '#fef3c7', color: '#92400e', padding: '1px 6px', borderRadius: '4px', fontWeight: 600}}>COMMON</span>}
                  </div>
                </div>
                <p style={{fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.5'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COST */}
        <section style={{marginBottom: '56px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', textAlign: 'center'}}>Gynecomastia Surgery Cost in India 2026</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
              <thead>
                <tr style={{background: '#0f1f35'}}>
                  {['City', 'Grade 1-2', 'Grade 2-3', 'Grade 3-4', 'Insurance'].map(h => (
                    <th key={h} style={{padding: '12px 14px', color: 'white', textAlign: 'left', fontWeight: 600, fontSize: '13px'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Delhi', 'Rs 55,000 – 80,000', 'Rs 70,000 – 1,00,000', 'Rs 90,000 – 1,30,000', 'Usually not covered'],
                  ['Gurugram', 'Rs 60,000 – 85,000', 'Rs 75,000 – 1,05,000', 'Rs 95,000 – 1,35,000', 'Usually not covered'],
                  ['Mumbai', 'Rs 65,000 – 95,000', 'Rs 80,000 – 1,15,000', 'Rs 1,00,000 – 1,50,000', 'Usually not covered'],
                  ['Bangalore', 'Rs 55,000 – 85,000', 'Rs 70,000 – 1,05,000', 'Rs 90,000 – 1,30,000', 'Usually not covered'],
                  ['Noida', 'Rs 50,000 – 75,000', 'Rs 65,000 – 95,000', 'Rs 85,000 – 1,20,000', 'Usually not covered'],
                  ['Chennai', 'Rs 50,000 – 78,000', 'Rs 65,000 – 95,000', 'Rs 85,000 – 1,20,000', 'Usually not covered'],
                ].map(([city, ...costs], i) => (
                  <tr key={city} style={{background: i % 2 === 0 ? 'white' : '#f9fafb', borderBottom: '1px solid #f3f4f6'}}>
                    <td style={{padding: '12px 14px', fontWeight: 600, color: '#1d4ed8'}}>{city}</td>
                    {costs.map((c, j) => <td key={j} style={{padding: '12px 14px', color: j === 3 ? '#9ca3af' : '#374151', fontSize: '13px'}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize: '12px', color: '#9ca3af', marginTop: '10px'}}>Costs include surgeon fee, OT charges, anaesthesia, compression vest, and post-op medicines. May vary based on clinic and extent of surgery.</p>
        </section>

        {/* FAQ */}
        <section style={{marginBottom: '56px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '24px', textAlign: 'center'}}>Frequently Asked Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {faqs.map((faq, i) => (
              <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px 20px'}}>
                <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{faq.q}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.75', margin: 0}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <BlogCTA procedure="Gynecomastia Surgery" />

        {/* CTA */}
        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '10px'}}>Ready for a Flat Chest?</h2>
          <p style={{color: '#93c5fd', fontSize: '16px', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: '1.6'}}>Free consultation with an experienced plastic surgeon. Find out your grade and get a transparent cost estimate. Callback within 30 minutes.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'}}>
            <a href="/contact" style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+consultation+for+gynecomastia+surgery" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            {[['✓', 'Free consultation'], ['✓', 'Transparent pricing'], ['✓', 'Same-day discharge'], ['✓', 'Permanent results']].map(([tick, label]) => (
              <span key={label} style={{fontSize: '13px', color: '#93c5fd'}}>{tick} {label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
