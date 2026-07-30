import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LASIK vs SMILE vs SILK vs Contoura vs PRK — Complete Comparison 2026 | MySurgery',
  description: 'Compare all laser eye surgery types in India — LASIK, SMILE, SILK, Contoura Vision, PRK, LASEK, ICL. Cost, eligibility, pros and cons. Find the best option for your eyes.',
  alternates: { canonical: '/lasik-comparison' },
  keywords: ['LASIK vs SMILE', 'SILK eye surgery India', 'Contoura Vision vs LASIK', 'best laser eye surgery India 2026', 'SMILE vs LASIK cost India'],
}

const treatments = [
  {
    name: 'Standard LASIK',
    fullName: 'Laser-Assisted In Situ Keratomileusis',
    icon: '👁',
    tag: 'Most Common',
    tagColor: '#1d4ed8',
    tagBg: '#eff6ff',
    costMin: 15000,
    costMax: 35000,
    techLevel: 2,
    dryEyeRisk: 'Medium',
    recovery: '24 hours',
    flap: true,
    suitable: ['Myopia up to -12D', 'Hyperopia up to +6D', 'Astigmatism up to 6D', 'Cornea above 500 microns'],
    notSuitable: ['Thin corneas', 'Severe dry eyes', 'Contact sports players', 'Keratoconus'],
    pros: ['Most affordable', 'Well-established 30+ year track record', 'Very fast recovery', 'Available everywhere in India', 'Can treat high powers'],
    cons: ['Creates corneal flap (risk of flap complications)', 'Higher dry eye risk than SMILE/SILK', 'Not suitable for contact sports', 'Blade used in some centres'],
    hospitals: ['Available at all eye centres'],
    about: 'Standard LASIK is the original laser vision correction procedure. A microkeratome blade or femtosecond laser creates a thin flap in the cornea, an excimer laser reshapes the underlying tissue, and the flap is repositioned. Rapid recovery with good results for most patients.',
  },
  {
    name: 'Bladeless LASIK',
    fullName: 'Femtosecond LASIK (Femto-LASIK)',
    icon: '⚡',
    tag: 'Best Value',
    tagColor: '#16a34a',
    tagBg: '#f0fdf4',
    costMin: 25000,
    costMax: 60000,
    techLevel: 3,
    dryEyeRisk: 'Medium',
    recovery: '24 hours',
    flap: true,
    suitable: ['Myopia up to -12D', 'Hyperopia up to +6D', 'Astigmatism up to 6D', 'Standard refractive errors'],
    notSuitable: ['Thin corneas', 'Severe dry eyes', 'Contact sports players'],
    pros: ['No blade — femtosecond laser creates flap', 'More precise flap than blade LASIK', 'Current standard of care at quality centres', 'Better safety profile than blade LASIK', 'Good value for money'],
    cons: ['Still creates a flap', 'Higher dry eye risk than SMILE/SILK', 'Not ideal for contact sports'],
    hospitals: ['Fortis FMRI', 'Medanta', 'Apollo Hospitals', 'Max Hospital', 'Sharp Sight Centres'],
    about: 'Bladeless LASIK uses a femtosecond laser (instead of a blade) to create the corneal flap — offering higher precision. The excimer laser then reshapes the cornea. This is now the standard of care at reputable centres and represents the best combination of cost and safety.',
  },
  {
    name: 'Contoura Vision',
    fullName: 'Topography-Guided LASIK',
    icon: '🗺',
    tag: 'Best Visual Quality',
    tagColor: '#7c3aed',
    tagBg: '#faf5ff',
    costMin: 40000,
    costMax: 100000,
    techLevel: 4,
    dryEyeRisk: 'Medium',
    recovery: '24-48 hours',
    flap: true,
    suitable: ['Myopia up to -10D', 'Astigmatism (especially irregular)', 'Patients wanting better than glasses vision', 'Corneal irregularities'],
    notSuitable: ['Hyperopia above +4D (less effective)', 'Very thin corneas', 'Severe dry eyes'],
    pros: ['Maps 22,000 corneal elevation points', 'Treats corneal irregularities beyond spectacle power', 'Many patients achieve better than 6/6 vision', 'Best for astigmatism', 'Personalised to your unique cornea', 'FDA approved'],
    cons: ['More expensive than standard LASIK', 'Still creates a flap', 'Not for hyperopia above +4D', 'Available only at select centres'],
    hospitals: ['Centre for Sight Delhi', 'Sankara Nethralaya Chennai', 'Narayana Nethralaya Bangalore', 'LV Prasad Hyderabad'],
    about: 'Contoura Vision (WaveLight EX500) is topography-guided LASIK that maps 22,000 individual points on your cornea. It corrects not just your spectacle power but also the microscopic irregularities in your corneal shape. Result: many patients see better after Contoura than they ever did with glasses. The gold standard for visual quality.',
  },
  {
    name: 'SMILE',
    fullName: 'Small Incision Lenticule Extraction',
    icon: '🔬',
    tag: 'Flapless — Best for Dry Eyes',
    tagColor: '#b45309',
    tagBg: '#fefce8',
    costMin: 35000,
    costMax: 80000,
    techLevel: 4,
    dryEyeRisk: 'Low',
    recovery: '24-48 hours',
    flap: false,
    suitable: ['Myopia up to -10D', 'Astigmatism up to 5D', 'Dry eye prone patients', 'Contact sports players', 'Defence / aviation personnel', 'Active lifestyle'],
    notSuitable: ['Hyperopia (not available for + power)', 'Very thin corneas', 'Keratoconus'],
    pros: ['No flap — zero flap complication risk', 'Lowest dry eye risk of all laser procedures', 'Fewer corneal nerves cut', 'Stronger cornea post-procedure', 'Ideal for contact sports and active people', 'Single laser step'],
    cons: ['Cannot correct hyperopia (+ power)', 'Slightly slower visual recovery than LASIK', 'Enhancement done with PRK not LASIK', 'More expensive than LASIK', 'Available only on Zeiss VisuMax platform'],
    hospitals: ['Narayana Nethralaya Bangalore', 'Centre for Sight Delhi', 'Medanta Gurugram', 'Aravind Eye Hospital', 'Dr Agarwals Eye Hospital'],
    about: 'SMILE (Zeiss VisuMax) is the most advanced flapless laser procedure. A femtosecond laser creates a small lenticule inside the cornea which is removed through a tiny 4mm incision — no flap is created. The cornea is biomechanically stronger, dry eye risk is lowest of all laser procedures, and there is zero risk of flap dislodgement. Ideal for patients with dry eyes, active lifestyles, or contact sports.',
  },
  {
    name: 'SILK',
    fullName: 'Smooth Incision Lenticule Keratomileusis',
    icon: '✨',
    tag: 'Newest Technology',
    tagColor: '#dc2626',
    tagBg: '#fef2f2',
    costMin: 50000,
    costMax: 110000,
    techLevel: 5,
    dryEyeRisk: 'Lowest',
    recovery: '24 hours',
    flap: false,
    suitable: ['Myopia up to -10D', 'Astigmatism', 'Dry eye prone patients', 'Active lifestyle', 'Patients wanting latest technology'],
    notSuitable: ['Hyperopia', 'Currently limited availability in India', 'Very thin corneas'],
    pros: ['Latest generation flapless technology', 'Smoother lenticule edges than SMILE', 'Faster laser delivery than SMILE', 'Even lower dry eye risk than SMILE', 'Better surface smoothness', 'Excellent biomechanical stability'],
    cons: ['Very new — limited long-term data', 'Most expensive option', 'Available only at select centres in India', 'Cannot correct hyperopia', 'Limited centres have the Elita laser platform'],
    hospitals: ['Selected premium centres in Delhi, Mumbai, Bangalore', 'Centres with Johnson & Johnson Elita platform'],
    about: 'SILK is the newest generation of flapless laser eye surgery, performed on the Johnson & Johnson Vision Elita platform. It improves on SMILE with smoother lenticule edges, faster laser delivery, and potentially better surface quality. Very new in India — limited long-term data available but early results are excellent. The most advanced option currently available.',
  },
  {
    name: 'PRK / LASEK',
    fullName: 'Photorefractive Keratectomy / Laser Epithelial Keratomileusis',
    icon: '🔷',
    tag: 'For Thin Corneas',
    tagColor: '#0891b2',
    tagBg: '#ecfeff',
    costMin: 15000,
    costMax: 40000,
    techLevel: 2,
    dryEyeRisk: 'Medium',
    recovery: '5-7 days',
    flap: false,
    suitable: ['Thin corneas not suitable for LASIK', 'Myopia up to -10D', 'Previous LASIK enhancement', 'Patients who cannot have flap'],
    notSuitable: ['Patients needing fast recovery', 'High hyperopia'],
    pros: ['No flap — suitable for thin corneas', 'Well-established technique', 'Suitable when cornea too thin for LASIK', 'Used for LASIK enhancement after SMILE', 'Lower cost'],
    cons: ['Slower recovery (5-7 days of blurred vision)', 'More post-operative discomfort than LASIK', 'Risk of corneal haze (rare with mitomycin C)', 'Vision stabilisation takes longer'],
    hospitals: ['Available at most eye centres across India'],
    about: 'PRK removes the surface epithelium and directly ablates the corneal surface without creating a flap. Slower recovery than LASIK but suitable for patients with thinner corneas who cannot undergo LASIK or SMILE. LASEK is a variant that uses alcohol to loosen the epithelium. PRK is also used for enhancements after SMILE.',
  },
  {
    name: 'ICL',
    fullName: 'Implantable Collamer Lens (Phakic IOL)',
    icon: '🔵',
    tag: 'Not Laser — For High Powers',
    tagColor: '#374151',
    tagBg: '#f9fafb',
    costMin: 80000,
    costMax: 150000,
    techLevel: 5,
    dryEyeRisk: 'None',
    recovery: '24-48 hours',
    flap: false,
    suitable: ['Very high myopia above -10D', 'Thin corneas not suitable for any laser', 'Dry eye patients', 'Reversible option preferred', 'Age 21-45'],
    notSuitable: ['Shallow anterior chamber', 'Glaucoma', 'Previous eye surgery in some cases'],
    pros: ['No corneal tissue removed — completely reversible', 'Excellent for very high powers', 'No dry eye as cornea untouched', 'Often better quality vision than laser for high powers', 'Can be combined with LASIK for residual power'],
    cons: ['Surgical implant — more invasive than laser', 'Higher cost than all laser options', 'Rare risk of cataract', 'Requires adequate anterior chamber depth', 'Annual check-up recommended'],
    hospitals: ['Apollo Hospitals', 'Medanta', 'Sankara Nethralaya', 'LV Prasad Eye Institute', 'Centre for Sight'],
    about: 'ICL (EVO Visian ICL) is not a laser procedure — it involves implanting a thin collamer lens inside the eye between the iris and natural lens. No corneal tissue is removed making it completely reversible. Ideal for very high powers or thin corneas where no laser procedure is safe. The EVO version has a central port eliminating the need for a peripheral iridotomy.',
  },
]

const comparison_rows = [
  { label: 'Technology Level', key: 'techLevel', type: 'stars' },
  { label: 'Flap Created', key: 'flap', type: 'bool_reverse' },
  { label: 'Dry Eye Risk', key: 'dryEyeRisk', type: 'text' },
  { label: 'Visual Recovery', key: 'recovery', type: 'text' },
  { label: 'Cost (per eye)', key: 'cost', type: 'cost' },
]

export default function LasikComparisonPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1a3a5c 100%)', padding: '60px 24px 48px', textAlign: 'center'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <p style={{fontSize: '12px', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Complete Comparison Guide 2026</p>
          <h1 style={{fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: '1.2'}}>
            LASIK vs SMILE vs SILK vs Contoura<br />
            <span style={{color: '#60a5fa'}}>Which Laser Eye Surgery Is Right for You?</span>
          </h1>
          <p style={{fontSize: '17px', color: '#93c5fd', marginBottom: '32px', maxWidth: '680px', margin: '0 auto 32px', lineHeight: '1.65'}}>
            Compare all 7 types of laser eye surgery available in India — technology, cost, dry eye risk, eligibility, and which one gives the best results for your specific eyes.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/lasik-recommender' style={{background: '#7c3aed', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', display: 'inline-block', marginBottom: '14px'}}>🔬 Find Which Is Best for Your Eyes →</a><br /><a href="/contact" style={{background: '#1d4ed8', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px'}}>Get Free LASIK Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+to+know+which+laser+eye+surgery+is+best+for+me" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px'}}>

        {/* QUICK SELECTOR */}
        <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '16px', padding: '24px 28px', marginBottom: '48px'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, color: '#14532d', marginBottom: '16px'}}>🎯 Quick Selector — Which Is Best for You?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px'}}>
            {[
              {condition: 'I want the best visual quality', answer: '→ Contoura Vision', color: '#7c3aed'},
              {condition: 'I have dry eyes / use AC a lot', answer: '→ SMILE or SILK', color: '#b45309'},
              {condition: 'I play contact sports / very active', answer: '→ SMILE or SILK (flapless)', color: '#b45309'},
              {condition: 'I want the most affordable option', answer: '→ Standard or Bladeless LASIK', color: '#1d4ed8'},
              {condition: 'I want the absolute latest technology', answer: '→ SILK', color: '#dc2626'},
              {condition: 'My cornea is thin / LASIK not suitable', answer: '→ PRK or ICL', color: '#0891b2'},
              {condition: 'I have very high power (above -10D)', answer: '→ ICL (not laser)', color: '#374151'},
              {condition: 'I have high astigmatism', answer: '→ Contoura Vision', color: '#7c3aed'},
            ].map((item, i) => (
              <div key={i} style={{background: 'white', borderRadius: '10px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap'}}>
                <span style={{fontSize: '13px', color: '#374151'}}>{item.condition}</span>
                <span style={{fontSize: '13px', fontWeight: 700, color: item.color, whiteSpace: 'nowrap'}}>{item.answer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px', textAlign: 'center'}}>Side-by-Side Comparison</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '800px'}}>
              <thead>
                <tr style={{background: '#0f1f35'}}>
                  <th style={{padding: '14px 16px', textAlign: 'left', color: '#93c5fd', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', width: '160px'}}>Feature</th>
                  {treatments.map(t => (
                    <th key={t.name} style={{padding: '14px 12px', textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '13px'}}>
                      <div>{t.icon}</div>
                      <div style={{marginTop: '4px'}}>{t.name}</div>
                      <div style={{fontSize: '10px', color: '#93c5fd', fontWeight: 400, marginTop: '2px'}}>{t.tag}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {label: 'Cost per Eye', render: (t: any) => `Rs ${t.costMin.toLocaleString('en-IN')} – ${t.costMax.toLocaleString('en-IN')}`},
                  {label: 'Flap Created', render: (t: any) => t.flap ? '⚠️ Yes' : '✅ No (Flapless)'},
                  {label: 'Dry Eye Risk', render: (t: any) => t.dryEyeRisk === 'Lowest' ? '✅ Lowest' : t.dryEyeRisk === 'Low' ? '✅ Low' : '⚠️ Medium'},
                  {label: 'Vision Recovery', render: (t: any) => t.recovery},
                  {label: 'Tech Level', render: (t: any) => '⭐'.repeat(t.techLevel)},
                  {label: 'Corrects Myopia', render: () => '✅ Yes'},
                  {label: 'Corrects Hyperopia', render: (t: any) => ['SMILE', 'SILK', 'PRK / LASEK'].includes(t.name) ? (t.name === 'PRK / LASEK' ? '⚠️ Limited' : '❌ No') : '✅ Yes'},
                  {label: 'Corrects Astigmatism', render: () => '✅ Yes'},
                  {label: 'Safe for Sports', render: (t: any) => !t.flap ? '✅ Yes' : '⚠️ Caution'},
                ].map((row, i) => (
                  <tr key={row.label} style={{background: i % 2 === 0 ? 'white' : '#f9fafb'}}>
                    <td style={{padding: '12px 16px', fontWeight: 600, color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.03em', borderBottom: '1px solid #f3f4f6'}}>{row.label}</td>
                    {treatments.map(t => (
                      <td key={t.name} style={{padding: '12px 12px', textAlign: 'center', color: '#374151', borderBottom: '1px solid #f3f4f6', fontSize: '13px'}}>{row.render(t)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DETAILED CARDS */}
        <h2 style={{fontSize: '28px', fontWeight: 700, color: '#0f1f35', marginBottom: '24px', textAlign: 'center'}}>Detailed Guide — Each Procedure</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px'}}>
          {treatments.map((t, idx) => (
            <div key={t.name} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '18px', overflow: 'hidden'}}>
              <div style={{background: t.tagBg, padding: '20px 24px', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
                <span style={{fontSize: '40px', flexShrink: 0}}>{t.icon}</span>
                <div style={{flex: 1}}>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
                    <h3 style={{fontSize: '22px', fontWeight: 700, color: '#111827', margin: 0}}>{t.name}</h3>
                    <span style={{fontSize: '12px', fontWeight: 600, background: t.tagBg, color: t.tagColor, padding: '3px 10px', borderRadius: '20px', border: '1px solid ' + t.tagColor + '40'}}>{t.tag}</span>
                  </div>
                  <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 8px'}}>{t.fullName}</p>
                  <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.65', margin: 0}}>{t.about}</p>
                </div>
                <div style={{textAlign: 'right', flexShrink: 0}}>
                  <p style={{fontSize: '12px', color: '#6b7280', margin: '0 0 2px'}}>Cost per eye</p>
                  <p style={{fontSize: '18px', fontWeight: 700, color: t.tagColor, margin: 0}}>Rs {t.costMin.toLocaleString('en-IN')}–{t.costMax.toLocaleString('en-IN')}</p>
                </div>
              </div>
              <div style={{padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px'}}>
                <div>
                  <p style={{fontSize: '12px', fontWeight: 600, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px'}}>✅ Pros</p>
                  {t.pros.map(pro => (
                    <div key={pro} style={{display: 'flex', gap: '8px', marginBottom: '5px'}}>
                      <span style={{color: '#16a34a', fontSize: '13px', flexShrink: 0}}>•</span>
                      <span style={{fontSize: '13px', color: '#374151'}}>{pro}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{fontSize: '12px', fontWeight: 600, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px'}}>⚠️ Cons</p>
                  {t.cons.map(con => (
                    <div key={con} style={{display: 'flex', gap: '8px', marginBottom: '5px'}}>
                      <span style={{color: '#dc2626', fontSize: '13px', flexShrink: 0}}>•</span>
                      <span style={{fontSize: '13px', color: '#374151'}}>{con}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{fontSize: '12px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px'}}>✓ Best For</p>
                  {t.suitable.map(s => (
                    <div key={s} style={{display: 'flex', gap: '8px', marginBottom: '5px'}}>
                      <span style={{color: '#1d4ed8', fontSize: '13px', flexShrink: 0}}>•</span>
                      <span style={{fontSize: '13px', color: '#374151'}}>{s}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '12px'}}>
                    <div style={{background: '#f9fafb', borderRadius: '8px', padding: '10px 14px'}}>
                      <p style={{fontSize: '11px', color: '#6b7280', margin: '0 0 2px'}}>Dry Eye Risk</p>
                      <p style={{fontSize: '14px', fontWeight: 600, color: t.dryEyeRisk === 'Lowest' || t.dryEyeRisk === 'Low' ? '#16a34a' : '#b45309', margin: 0}}>{t.dryEyeRisk}</p>
                    </div>
                    <div style={{background: '#f9fafb', borderRadius: '8px', padding: '10px 14px'}}>
                      <p style={{fontSize: '11px', color: '#6b7280', margin: '0 0 2px'}}>Recovery</p>
                      <p style={{fontSize: '14px', fontWeight: 600, color: '#111827', margin: 0}}>{t.recovery}</p>
                    </div>
                    <div style={{background: '#f9fafb', borderRadius: '8px', padding: '10px 14px'}}>
                      <p style={{fontSize: '11px', color: '#6b7280', margin: '0 0 2px'}}>Flap</p>
                      <p style={{fontSize: '14px', fontWeight: 600, color: t.flap ? '#b45309' : '#16a34a', margin: 0}}>{t.flap ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                  {t.hospitals.length > 0 && (
                    <div>
                      <p style={{fontSize: '11px', color: '#6b7280', margin: '0 0 6px'}}>Available at</p>
                      <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                        {t.hospitals.slice(0,3).map(h => (
                          <span key={h} style={{fontSize: '11px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: '4px'}}>{h}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COST COMPARISON BAR CHART */}
        <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '28px', marginBottom: '48px'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Cost Comparison — Per Eye (India 2026)</h2>
          {treatments.map(t => (
            <div key={t.name} style={{marginBottom: '14px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                <span style={{fontSize: '14px', fontWeight: 500, color: '#374151'}}>{t.icon} {t.name}</span>
                <span style={{fontSize: '14px', fontWeight: 600, color: t.tagColor}}>Rs {t.costMin.toLocaleString('en-IN')} – {t.costMax.toLocaleString('en-IN')}</span>
              </div>
              <div style={{background: '#f3f4f6', borderRadius: '4px', height: '10px', overflow: 'hidden'}}>
                <div style={{background: t.tagColor, height: '100%', width: (t.costMax / 1500) + '%', borderRadius: '4px', opacity: 0.7}} />
              </div>
            </div>
          ))}
          <p style={{fontSize: '12px', color: '#9ca3af', marginTop: '14px', marginBottom: 0}}>* Costs shown are per eye in Indian Rupees. Both eyes typically cost 1.8-2x the per-eye price. ICL is per eye including all charges.</p>
        </div>

        {/* FAQ */}
        <div style={{marginBottom: '48px'}}>
          <h2 style={{fontSize: '26px', fontWeight: 700, color: '#0f1f35', marginBottom: '20px'}}>Frequently Asked Questions</h2>
          {[
            ['What is the difference between SMILE and SILK?', 'Both SMILE and SILK are flapless laser procedures. SILK (Johnson & Johnson Elita) is the newer generation — it creates a smoother lenticule edge than SMILE (Zeiss VisuMax), potentially offering better surface quality and slightly faster delivery. Both have similar outcomes. SILK is newer and has less long-term data but early results are excellent.'],
            ['Which laser eye surgery has the least dry eye risk?', 'SILK has the lowest dry eye risk, followed by SMILE. Both are flapless procedures that preserve more corneal nerves than LASIK. Standard LASIK has the highest dry eye risk. If you already have dry eyes, SMILE or SILK are strongly recommended over LASIK.'],
            ['Is Contoura better than SMILE?', 'They serve different purposes. Contoura gives the best visual quality — many patients see better than they ever did with glasses. SMILE has the lowest dry eye risk and is flapless. Contoura creates a flap while SMILE does not. If visual quality is your priority, choose Contoura. If you have dry eyes or play contact sports, choose SMILE.'],
            ['Can I get SILK laser surgery in India?', 'Yes — SILK is available at select premium eye centres in India, primarily in Delhi, Mumbai, Bangalore, and Chennai. It is the most expensive option (Rs 50,000 to Rs 1,10,000 per eye) and availability is limited compared to SMILE or LASIK.'],
            ['Which laser eye surgery is best for high astigmatism?', 'Contoura Vision is the best option for significant astigmatism as it maps 22,000 corneal points and treats both the spectacle power and corneal irregularities. SMILE also effectively corrects astigmatism up to 5D.'],
            ['Is ICL better than LASIK?', 'For most patients with standard powers, LASIK or SMILE is preferable — they are simpler procedures. ICL is better for very high myopia (above -10D), thin corneas where laser is unsafe, or patients who want a reversible procedure with no corneal tissue removal.'],
            ['How do I choose between all these options?', 'The best procedure depends on your corneal thickness (pachymetry), corneal topography, prescription power, dry eye status, and lifestyle. A comprehensive pre-LASIK evaluation at an experienced centre takes 30-45 minutes and will tell you which procedures you are eligible for. Call MySurgery at 8588967050 for a free consultation.'],
          ].map(([q, a], i) => (
            <div key={i} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '18px 20px', marginBottom: '10px'}}>
              <h3 style={{fontSize: '15px', fontWeight: 600, color: '#111827', marginBottom: '8px'}}>{q}</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.7', margin: 0}}>{a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '20px', padding: '48px', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Not Sure Which Is Right for You?</h2>
          <p style={{color: '#93c5fd', marginBottom: '28px', fontSize: '16px', maxWidth: '500px', margin: '0 auto 28px', lineHeight: '1.6'}}>
            Our eye care specialists will evaluate your corneal profile and recommend the best procedure for your specific eyes and lifestyle. Free consultation.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href='/lasik-recommender' style={{background: '#7c3aed', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', display: 'inline-block', marginBottom: '14px'}}>🔬 Find Which Is Best for Your Eyes →</a><br /><a href="/contact" style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050?text=Hi+I+want+to+know+which+laser+eye+surgery+is+best+for+me" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp Us</a>
          </div>
          <div style={{display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap'}}>
            {[['🏥', 'LASIK city guides →', '/blog/lasik-eye-surgery-cost-delhi-2026'],
              ['📋', 'LASIK FAQ →', '/blog/lasik-eye-surgery-faq-india-2026'],
              ['✓', 'Am I eligible? →', '/blog/lasik-eligibility-criteria-india-2026']].map(([icon, label, href]) => (
              <a key={href} href={href} style={{color: '#93c5fd', fontSize: '14px', textDecoration: 'none'}}>{icon} {label}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
