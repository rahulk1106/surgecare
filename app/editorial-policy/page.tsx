import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Policy | MySurgery',
  description: 'MySurgery editorial policy — how we research, write, review, and update medical content on our platform.',
  alternates: { canonical: '/editorial-policy' },
}

export default function EditorialPolicyPage() {
  const sections = [
    {
      title: 'Our Mission',
      body: `MySurgery's editorial mission is to provide accurate, clear, and actionable information about surgical procedures to help patients in India make informed healthcare decisions. We believe every patient deserves to understand their surgical options, costs, and expected outcomes — in plain language.`,
    },
    {
      title: 'Editorial Independence',
      body: `MySurgery maintains strict editorial independence. Our medical content is written and reviewed solely on the basis of medical accuracy and patient utility. We do not allow advertising relationships, referral partnerships, or commercial interests to influence the content of our procedure guides, blog articles, or cost information.\n\nHospitals and doctors listed on our platform do not pay for editorial coverage or rankings. Sponsored content, if any, is clearly labelled as 'Sponsored' or 'Paid Partnership'.`,
    },
    {
      title: 'Who Writes Our Content',
      body: `MySurgery content is written by:\n\nMedical Writers: Trained health writers with backgrounds in life sciences, pharmacy, or healthcare journalism who research procedures using peer-reviewed literature and medical guidelines.\n\nDoctor Contributors: Registered medical practitioners including general surgeons, urologists, gynaecologists, orthopaedic surgeons, and ophthalmologists who review and contribute to procedure-specific content.\n\nAll contributors are identified by name and qualification in their articles.`,
    },
    {
      title: 'Medical Review Process',
      body: `All clinical content on MySurgery goes through the following review process:\n\nStep 1 — Research: The writer researches the procedure using primary sources including Indian and international medical guidelines, peer-reviewed journal articles, and NMC-approved medical textbooks.\n\nStep 2 — Draft: The writer prepares a draft in clear, patient-friendly language, avoiding unnecessary jargon.\n\nStep 3 — Medical Review: A registered medical practitioner with relevant specialisation reviews the draft for clinical accuracy.\n\nStep 4 — Edit: The editorial team ensures clarity, completeness, and consistency.\n\nStep 5 — Publish: The article is published with the author name, reviewer name, and publication date.\n\nStep 6 — Update: Articles are reviewed and updated at least every 12 months, or sooner if new medical guidelines are published.`,
    },
    {
      title: 'Cost Information',
      body: `Cost ranges on MySurgery are based on:\n\n- Market research across NABH-accredited hospitals in major Indian cities\n- Publicly available hospital price lists\n- Information provided by patients and doctors on our platform\n- Regular updates from our care coordination team\n\nImportant: Cost ranges are approximate and for general guidance only. Actual costs depend on the patient's specific condition, city, hospital category, surgeon seniority, implant choice, insurance coverage, and other factors. Always get a formal written estimate from your hospital before proceeding.`,
    },
    {
      title: 'Community Content',
      body: `MySurgery hosts a patient community forum where users post questions and answers about surgical procedures. Community content is:\n\n- Posted by real users (patients, caregivers, and medical professionals)\n- Moderated by our editorial team for accuracy and appropriateness\n- Clearly labelled to distinguish between patient experiences and expert medical opinions\n- Not a substitute for professional medical advice\n\nWe label answers from medical professionals with a 'Doctor / Expert' badge. We cannot independently verify the credentials of all community contributors and advise patients to consult a registered doctor for medical decisions.`,
    },
    {
      title: 'Sources We Use',
      body: `Our content is based on the following types of sources:\n\nPrimary Sources: Peer-reviewed medical journal articles (PubMed, Cochrane Library, Indian Journal of Surgery, Journal of Minimal Access Surgery).\n\nOfficial Guidelines: National Medical Commission (NMC), Ministry of Health and Family Welfare India, WHO guidelines.\n\nTextbooks: Standard Indian and international medical textbooks.\n\nHospital Data: Published hospital websites and public price lists.\n\nWe do not use Wikipedia, unverified blogs, or non-peer-reviewed sources as primary references.`,
    },
    {
      title: 'Corrections Policy',
      body: `MySurgery is committed to accuracy. If you find an error in our content, please email us at info.mysurgery@gmail.com with:\n\n- The URL of the page containing the error\n- A description of the error\n- A suggested correction with a credible source\n\nWe will review all correction requests within 7 business days and make corrections where warranted. Significant corrections will be noted at the bottom of the relevant article.`,
    },
    {
      title: 'Sensitive Health Topics',
      body: `MySurgery covers sensitive medical topics including MTP (abortion), reproductive health, sexual health, and mental health implications of surgery. Our approach to sensitive topics:\n\n- Use medically accurate, non-judgmental language\n- Provide complete legal information relevant to Indian patients\n- Always direct readers to qualified medical professionals for personal advice\n- Protect patient privacy and dignity in all content\n\nFor MTP content specifically, we follow the guidance of the MTP Act India 2021 and do not promote or discourage termination of pregnancy. We provide factual information to help patients make informed legal choices.`,
    },
    {
      title: 'Advertising and Conflicts of Interest',
      body: `MySurgery may display advertisements on the platform. Advertisements are clearly identified and do not influence editorial content. Our editorial team operates independently of our commercial team.\n\nMySurgery may receive referral fees from hospitals when patients book appointments through our platform. This commercial relationship does not affect our editorial coverage — hospitals that pay referral fees are not given better editorial positioning than those that do not.\n\nWe disclose all material conflicts of interest in relevant articles.`,
    },
    {
      title: 'Contact the Editorial Team',
      body: `For editorial queries, corrections, or to contribute as a medical expert:\n\nEmail: info.mysurgery@gmail.com\nSubject line: 'Editorial Query' or 'Correction Request'\n\nWe welcome contributions from registered medical professionals. Please include your NMC registration number and area of specialisation.`,
    },
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '40px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '10px'}}>Editorial Policy</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px'}}>Last updated: April 2026</p>
        <p style={{fontSize: '15px', color: '#4b5563', maxWidth: '640px', lineHeight: '1.7', marginTop: '16px'}}>MySurgery is committed to publishing accurate, evidence-based, and patient-centred medical information. This policy explains how we create, review, and maintain our content.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px'}}>
        {[
          ['✓ Doctor Reviewed', 'All clinical content reviewed by registered specialists'],
          ['✓ Evidence Based', 'Sourced from peer-reviewed literature and NMC guidelines'],
          ['✓ Editorially Independent', 'Commercial relationships never influence content'],
          ['✓ Regularly Updated', 'Content reviewed and updated every 12 months'],
        ].map(([title, desc]) => (
          <div key={title} style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '16px'}}>
            <p style={{fontWeight: 600, color: '#16a34a', fontSize: '14px', margin: '0 0 4px'}}>{title}</p>
            <p style={{fontSize: '13px', color: '#374151', margin: 0, lineHeight: '1.5'}}>{desc}</p>
          </div>
        ))}
      </div>

      {sections.map((section, i) => (
        <div key={i} style={{marginBottom: '36px', paddingBottom: '36px', borderBottom: i < sections.length - 1 ? '1px solid #f3f4f6' : 'none'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '14px'}}>{section.title}</h2>
          <div style={{fontSize: '15px', color: '#374151', lineHeight: '1.8'}}>
            {section.body.split('\n\n').map((para, j) => (
              para.trim() ? <p key={j} style={{margin: '0 0 14px', whiteSpace: 'pre-line'}}>{para}</p> : null
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}