import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCTA from '@/components/forms/BlogCTA'

export const metadata: Metadata = {
  title: 'Piles Home Remedies — What Works, What Does Not, When to See a Doctor',
  description: 'Effective home remedies for piles including sitz bath, high-fibre diet, witch hazel, and more. When home treatment is not enough and surgery is needed.',
  alternates: { canonical: '/piles-home-remedies' },
}

export default function PilesHomeRemediesPage() {
  const remediesList = [
    { name: 'Sitz Bath', works: true, howTo: 'Sit in warm water (not hot) for 15-20 minutes, 2-3 times a day especially after bowel movements. Add a handful of rock salt for added relief.', effectiveness: 'High for Grade 1-2', time: 'Relief in 24-48 hours', icon: '🛁' },
    { name: 'High-Fibre Diet', works: true, howTo: 'Add fruits (papaya, guava, banana), vegetables (spinach, broccoli), whole grains (brown rice, oats), and pulses (dal) to every meal. Target 25-30g fibre daily.', effectiveness: 'High — addresses root cause', time: 'Improvement in 1-2 weeks', icon: '🥗' },
    { name: 'Water Intake', works: true, howTo: 'Drink 8-10 glasses of water daily. Dehydration hardens stools and worsens piles. Start the day with 2 glasses of warm water.', effectiveness: 'Medium — prevents worsening', time: 'Ongoing daily habit', icon: '💧' },
    { name: 'Witch Hazel', works: true, howTo: 'Apply witch hazel extract directly to the external haemorrhoid using a cotton ball. Repeat 2-3 times daily. Available at pharmacies.', effectiveness: 'Medium for external piles', time: 'Reduces swelling in 3-5 days', icon: '🌿' },
    { name: 'Cold Compress', works: true, howTo: 'Apply an ice pack wrapped in cloth to the anal area for 15 minutes to reduce swelling and numb pain. Do not apply ice directly to skin.', effectiveness: 'Medium for acute pain relief', time: 'Immediate pain relief', icon: '🧊' },
    { name: 'Coconut Oil', works: true, howTo: 'Apply a small amount of pure coconut oil to the affected area. Has anti-inflammatory properties. Avoid if you have active infection.', effectiveness: 'Low-Medium', time: 'Mild relief in 3-5 days', icon: '🥥' },
    { name: 'Psyllium Husk (Isabgol)', works: true, howTo: 'Take 1 teaspoon of isabgol in a glass of warm water or buttermilk at bedtime. Softens stools and reduces straining — the most common aggravator of piles.', effectiveness: 'High for preventing worsening', time: 'Softer stools in 1-2 days', icon: '🌾' },
    { name: 'Petroleum Jelly (Vaseline)', works: true, howTo: 'Apply a small amount around the anal opening before bowel movements to reduce friction and pain. Helps with external haemorrhoids.', effectiveness: 'Medium for pain during BM', time: 'Immediate comfort', icon: '💊' },
  ]

  const notWork = [
    { name: 'Garlic suppositories', reason: 'Can cause severe burning and irritation. Not medically recommended. Can worsen symptoms.' },
    { name: 'Very spicy food during flare-up', reason: 'Spicy food irritates the anal area during a flare-up. Reduce or eliminate during active symptoms.' },
    { name: 'Sitting on the toilet for long', reason: 'Using mobile on the toilet is a major contributor to piles. Limit bathroom time to under 5 minutes.' },
    { name: 'Straining during bowel movements', reason: 'Never strain. If stool does not pass easily, try again later, increase water intake, or take a mild laxative.' },
  ]

  const whenToSee = [
    'Bleeding is heavy or happens without bowel movements',
    'A lump does not go back on its own after bowel movement',
    'Pain is severe and not manageable with home treatment',
    'Symptoms have not improved after 2 weeks of home treatment',
    'You have Grade 3 or 4 piles — home treatment will not cure these',
    'You notice dark or tarry stools (this may indicate a more serious condition)',
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '768px', margin: '0 auto', padding: '40px 24px 80px'}}>
      <div style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px'}}>
        <Link href='/' style={{color: '#6b7280', textDecoration: 'none'}}>Home</Link> › <Link href='/treatment/piles' style={{color: '#6b7280', textDecoration: 'none'}}>Piles</Link> › Home Remedies
      </div>
      <p style={{fontSize: '11px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>Piles Treatment</p>
      <h1 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px', lineHeight: '1.3'}}>Piles Home Remedies — What Actually Works</h1>
      <p style={{fontSize: '15px', color: '#4b5563', lineHeight: '1.7', marginBottom: '8px'}}>By MySurgery Medical Team · Reviewed by Dr. Ashish Bhanot, Senior Proctologist · April 2026</p>

      <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '18px 22px', marginBottom: '32px'}}>
        <p style={{fontSize: '13px', fontWeight: 600, color: '#1e3a8a', margin: '0 0 4px'}}>Quick Answer</p>
        <p style={{color: '#1e3a8a', lineHeight: '1.7', margin: 0, fontSize: '15px'}}>Home remedies work well for Grade 1-2 piles. Sitz baths, high-fibre diet, isabgol, and plenty of water can significantly reduce symptoms. Grade 3-4 piles require medical treatment — home remedies will not cure them.</p>
      </div>

      <BlogCTA procedure='Piles Treatment' />

      <h2 style={{fontSize: '24px', fontWeight: 700, color: '#111827', margin: '32px 0 20px'}}>8 Home Remedies That Actually Work</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px'}}>
        {remediesList.map((r, i) => (
          <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '14px', padding: '20px', background: 'white'}}>
            <div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '10px'}}>
              <span style={{fontSize: '28px', flexShrink: 0}}>{r.icon}</span>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px'}}>
                  <h3 style={{fontSize: '17px', fontWeight: 700, color: '#111827', margin: 0}}>{r.name}</h3>
                  <span style={{fontSize: '11px', fontWeight: 600, color: '#16a34a', background: '#f0fdf4', padding: '3px 8px', borderRadius: '4px'}}>✓ Works</span>
                </div>
                <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.65', margin: '0 0 10px'}}>{r.howTo}</p>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  <span style={{fontSize: '12px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px'}}>Effectiveness: {r.effectiveness}</span>
                  <span style={{fontSize: '12px', background: '#f9fafb', color: '#374151', padding: '3px 8px', borderRadius: '4px'}}>{r.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogCTA procedure='Piles Treatment' />

      <h2 style={{fontSize: '24px', fontWeight: 700, color: '#111827', margin: '40px 0 16px'}}>Things That Do NOT Help (Avoid These)</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px'}}>
        {notWork.map((item, i) => (
          <div key={i} style={{background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '14px 16px'}}>
            <p style={{fontWeight: 600, color: '#dc2626', fontSize: '14px', margin: '0 0 4px'}}>✗ {item.name}</p>
            <p style={{fontSize: '13px', color: '#374151', margin: 0, lineHeight: '1.5'}}>{item.reason}</p>
          </div>
        ))}
      </div>

      <h2 style={{fontSize: '24px', fontWeight: 700, color: '#111827', margin: '40px 0 16px'}}>When Home Treatment Is Not Enough — See a Doctor If:</h2>
      <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '14px', padding: '20px 22px', marginBottom: '40px'}}>
        {whenToSee.map((item, i) => (
          <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '8px 0', borderBottom: i < whenToSee.length - 1 ? '1px solid #fcd34d' : 'none'}}>
            <span style={{color: '#b45309', fontWeight: 700, fontSize: '16px', flexShrink: 0}}>⚠</span>
            <p style={{fontSize: '14px', color: '#374151', margin: 0, lineHeight: '1.6'}}>{item}</p>
          </div>
        ))}
      </div>

      <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px'}}>
        <Link href='/piles-symptoms-checker' style={{flex: 1, minWidth: '200px', background: '#1d4ed8', color: 'white', fontWeight: 600, padding: '14px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', textAlign: 'center'}}>Check Your Piles Grade →</Link>
        <Link href='/treatment/piles' style={{flex: 1, minWidth: '200px', background: '#f9fafb', color: '#374151', border: '1px solid #e5e7eb', fontWeight: 500, padding: '14px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', textAlign: 'center'}}>Learn About Laser Treatment</Link>
      </div>

      <BlogCTA procedure='Piles Treatment' />
    </div>
  )
}
