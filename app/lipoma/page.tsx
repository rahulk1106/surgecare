import type { Metadata } from 'next'
import BlogCTA from '@/components/forms/BlogCTA'

export const metadata: Metadata = {
  title: 'Lipoma Removal Surgery India 2026 — Cost, Types & Treatment | MySurgery',
  description: 'Lipoma removal surgery in India costs Rs 15,000 to Rs 60,000. Minimally invasive liposuction or excision. Same-day discharge. Remove lipoma on back, neck, arm, thigh. Free consultation.',
  alternates: { canonical: '/lipoma' },
  keywords: ['lipoma removal cost India', 'lipoma surgery Delhi', 'lipoma treatment 2026', 'lipoma on back removal', 'fatty lump removal surgery India'],
}

const faqs = [
  { q: 'Is lipoma removal surgery safe?', a: 'Yes. Lipoma removal is a very safe, minor surgical procedure performed under local anaesthesia. Complications are extremely rare. The procedure takes 20-45 minutes and patients go home the same day.' },
  { q: 'Will my lipoma come back after removal?', a: 'If the entire lipoma capsule is removed during surgery, recurrence is rare (less than 5%). Incomplete removal increases recurrence risk. An experienced surgeon ensures complete excision.' },
  { q: 'Can lipoma be removed without surgery?', a: 'Small lipomas can be treated with liposuction (a minimally invasive option leaving no visible scar). Very small lipomas may also be monitored without treatment. Steroid injections can shrink lipomas but do not remove them completely.' },
  { q: 'Is lipoma dangerous or cancerous?', a: 'Standard lipomas are benign (non-cancerous) fatty tumours. They are extremely common and almost never become cancerous. However, rapidly growing lumps, painful lumps, or hard lumps should be evaluated by a doctor to rule out liposarcoma (a rare malignant tumour).' },
  { q: 'How long does lipoma removal take?', a: 'Simple lipoma removal under local anaesthesia takes 20-30 minutes. Larger or deeper lipomas may take 45-60 minutes. You go home the same day in most cases.' },
  { q: 'Will there be a scar after lipoma removal?', a: 'A small linear scar remains at the incision site. For lipomas on visible areas, surgeons minimise scars by making small incisions in natural skin folds. Liposuction technique leaves minimal scarring (3-4mm puncture). Scars fade significantly over 6-12 months.' },
  { q: 'Does lipoma removal hurt?', a: 'Local anaesthesia is injected before the procedure — you feel a brief sting from the injection but no pain during the surgery. After the anaesthesia wears off, mild soreness for 1-3 days managed with standard painkillers.' },
  { q: 'How much does lipoma removal cost in India?', a: 'Lipoma removal costs Rs 15,000 to Rs 60,000 in India depending on the size, depth, location, and number of lipomas. Multiple lipomas can often be removed in one session at a reduced per-unit cost.' },
]

export default function LipomaPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1a3a5c 100%)', padding: '56px 24px 48px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{fontSize: '13px', color: '#93c5fd', marginBottom: '12px'}}>
            <a href="/" style={{color: '#93c5fd', textDecoration: 'none'}}>Home</a> {' › '}
            <span>Lipoma Removal</span>
          </div>
          <span style={{fontSize: '12px', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Fatty Lump Removal</span>
          <h1 style={{fontSize: '40px', fontWeight: 700, color: 'white', margin: '8px 0 16px', lineHeight: '1.2'}}>
            Lipoma Removal Surgery India 2026
          </h1>
          <p style={{color: '#93c5fd', fontSize: '17px', lineHeight: '1.65', marginBottom: '28px', maxWidth: '680px'}}>
            Safe, minimally invasive lipoma removal. Local anaesthesia. Same-day discharge. Expert surgeons across India.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px', marginBottom: '32px', maxWidth: '600px'}}>
            {[['Rs 15K–60K', 'Cost Range'], ['20–45 min', 'Procedure Time'], ['Same Day', 'Discharge'], ['1–2 Days', 'Back to Work'], ['Local', 'Anaesthesia']].map(([val, label]) => (
              <div key={label} style={{textAlign: 'center'}}>
                <p style={{fontSize: '20px', fontWeight: 700, color: 'white', margin: '0 0 2px'}}>{val}</p>
                <p style={{fontSize: '12px', color: '#93c5fd', margin: 0}}>{label}</p>
              </div>
            ))}
          </div>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <a href="/contact" style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+to+remove+a+lipoma" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 80px'}}>

        {/* WHAT IS LIPOMA */}
        <section style={{marginBottom: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'start'}}>
          <div>
            <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>What Is It?</p>
            <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '16px'}}>What Is a Lipoma?</h2>
            <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.8', marginBottom: '14px'}}>A lipoma is a benign (non-cancerous) soft lump of fatty tissue that grows slowly under the skin. They are the most common soft tissue tumour in adults, affecting 1 in 100 people. Lipomas are usually painless, soft to touch, and move easily when pressed.</p>
            <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.8', marginBottom: '14px'}}>They can appear anywhere on the body but are most common on the neck, shoulders, back, arms, thighs, and abdomen. Most lipomas are harmless but cause cosmetic concern and sometimes discomfort when pressing on nerves.</p>
            <p style={{fontSize: '15px', color: '#374151', lineHeight: '1.8'}}>Lipomas do not disappear on their own. Surgery or liposuction is the only permanent solution.</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', padding: '20px'}}>
              <p style={{fontWeight: 700, color: '#1e3a8a', margin: '0 0 12px', fontSize: '15px'}}>📍 Common Locations</p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                {[['Upper back', '🔴 Very common'], ['Neck & shoulders', '🔴 Very common'], ['Upper arms', '🟡 Common'], ['Thighs', '🟡 Common'], ['Abdomen', '🟡 Common'], ['Forehead', '🟢 Less common'], ['Chest', '🟢 Less common'], ['Deep tissue', '⚠️ Needs MRI']].map(([loc, freq]) => (
                  <div key={loc} style={{background: 'white', borderRadius: '8px', padding: '8px 10px'}}>
                    <p style={{fontSize: '13px', fontWeight: 500, color: '#111827', margin: '0 0 2px'}}>{loc}</p>
                    <p style={{fontSize: '11px', color: '#6b7280', margin: 0}}>{freq}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '16px'}}>
              <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 8px', fontSize: '14px'}}>⚠️ When to See a Doctor Urgently</p>
              {['Lump is growing rapidly', 'Lump is hard or fixed (not soft/movable)', 'Lump is painful or tender', 'Skin over the lump is discoloured', 'You have multiple lumps appearing quickly'].map(s => (
                <p key={s} style={{fontSize: '13px', color: '#374151', margin: '0 0 4px'}}>• {s}</p>
              ))}
            </div>
          </div>
        </section>

        <BlogCTA procedure="Lipoma Removal" />

        {/* TREATMENT OPTIONS */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '24px', textAlign: 'center'}}>Treatment Options</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px'}}>
            {[
              { name: 'Surgical Excision', icon: '✂️', tag: 'Most Complete', tagColor: '#1d4ed8', tagBg: '#eff6ff', cost: 'Rs 15,000 – Rs 50,000', time: '20-40 min', anaesthesia: 'Local', scar: 'Small linear scar', recurrence: 'Very low', best: 'All sizes. Best for complete removal.', how: 'A small incision is made over the lipoma. The entire capsule is carefully dissected and removed. Wound closed with sutures (removed in 7-10 days). Best for complete, permanent removal with lowest recurrence.' },
              { name: 'Liposuction', icon: '💉', tag: 'Minimal Scarring', tagColor: '#16a34a', tagBg: '#f0fdf4', cost: 'Rs 20,000 – Rs 60,000', time: '30-45 min', anaesthesia: 'Local', scar: 'Tiny 3-4mm puncture only', recurrence: 'Low-moderate', best: 'Soft, fatty lipomas. Cosmetically sensitive areas.', how: 'A tiny cannula is inserted through a 3-4mm incision. Fat is suctioned out. No large scar. Best for soft fatty lipomas on cosmetically sensitive areas like the face, neck, and arms. Slightly higher recurrence than excision as capsule is not removed.' },
              { name: 'Minimal Excision', icon: '🔬', tag: 'Tiny Scar', tagColor: '#7c3aed', tagBg: '#faf5ff', cost: 'Rs 15,000 – Rs 40,000', time: '15-30 min', anaesthesia: 'Local', scar: '3-5mm micro-incision', recurrence: 'Low', best: 'Small to medium lipomas under 3cm.', how: 'A 3-5mm incision is made and the lipoma is squeezed out through the small opening. Combines benefits of excision and liposuction. Minimal scar. Increasingly popular for lipomas under 3cm.' },
            ].map((t, i) => (
              <div key={t.name} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden'}}>
                {i === 0 && <div style={{background: '#1d4ed8', color: 'white', fontSize: '12px', fontWeight: 600, textAlign: 'center', padding: '6px', letterSpacing: '0.05em'}}>MOST RECOMMENDED FOR PERMANENT REMOVAL</div>}
                <div style={{padding: '22px'}}>
                  <span style={{fontSize: '32px', display: 'block', marginBottom: '12px'}}>{t.icon}</span>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap'}}>
                    <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', margin: 0}}>{t.name}</h3>
                    <span style={{fontSize: '11px', background: t.tagBg, color: t.tagColor, padding: '2px 8px', borderRadius: '20px', fontWeight: 600}}>{t.tag}</span>
                  </div>
                  <p style={{fontSize: '13px', color: '#4b5563', lineHeight: '1.65', marginBottom: '14px'}}>{t.how}</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px'}}>
                    {[['Cost', t.cost], ['Time', t.time], ['Anaesthesia', t.anaesthesia], ['Scar', t.scar], ['Best for', t.best]].map(([k, v]) => (
                      <div key={k} style={{display: 'flex', gap: '8px', fontSize: '13px'}}>
                        <span style={{color: '#9ca3af', minWidth: '80px', flexShrink: 0}}>{k}:</span>
                        <span style={{color: '#374151', fontWeight: 500}}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COST TABLE */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', textAlign: 'center'}}>Lipoma Removal Cost in India 2026</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
              <thead>
                <tr style={{background: '#0f1f35'}}>
                  {['City', 'Small (under 3cm)', 'Medium (3-5cm)', 'Large (above 5cm)', 'Multiple Lipomas'].map(h => (
                    <th key={h} style={{padding: '12px 14px', color: 'white', textAlign: 'left', fontWeight: 600, fontSize: '13px'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Delhi', 'Rs 15,000 – 25,000', 'Rs 25,000 – 40,000', 'Rs 40,000 – 60,000', 'Discounted package'],
                  ['Gurugram', 'Rs 18,000 – 28,000', 'Rs 28,000 – 45,000', 'Rs 45,000 – 65,000', 'Discounted package'],
                  ['Mumbai', 'Rs 20,000 – 32,000', 'Rs 32,000 – 50,000', 'Rs 50,000 – 70,000', 'Discounted package'],
                  ['Bangalore', 'Rs 18,000 – 28,000', 'Rs 28,000 – 45,000', 'Rs 45,000 – 62,000', 'Discounted package'],
                  ['Noida', 'Rs 15,000 – 24,000', 'Rs 24,000 – 38,000', 'Rs 38,000 – 55,000', 'Discounted package'],
                  ['Chennai', 'Rs 15,000 – 25,000', 'Rs 25,000 – 40,000', 'Rs 40,000 – 58,000', 'Discounted package'],
                ].map(([city, ...costs], i) => (
                  <tr key={city} style={{background: i % 2 === 0 ? 'white' : '#f9fafb', borderBottom: '1px solid #f3f4f6'}}>
                    <td style={{padding: '12px 14px', fontWeight: 600, color: '#1d4ed8'}}>{city}</td>
                    {costs.map((c, j) => <td key={j} style={{padding: '12px 14px', color: '#374151', fontSize: '13px'}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <BlogCTA procedure="Lipoma Removal" />

        {/* FAQ */}
        <section style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '24px', textAlign: 'center'}}>Frequently Asked Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {faqs.map((f, i) => (
              <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px 20px'}}>
                <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{f.q}</h3>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.75', margin: 0}}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '10px'}}>Get Your Lipoma Removed Today</h2>
          <p style={{color: '#93c5fd', fontSize: '16px', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: '1.6'}}>Same-day procedure. Local anaesthesia. No hospitalisation. Free consultation with an experienced surgeon.</p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/contact" style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+lipoma+removal+consultation" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
