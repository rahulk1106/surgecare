import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | MySurgery',
  description: 'Terms and Conditions for using MySurgery — the healthcare information and facilitation platform.',
  alternates: { canonical: '/terms-and-conditions' },
}

export default function TermsPage() {
  const sections = [
    {
      title: '1. About MySurgery',
      body: `MySurgery (www.mysurgery.in) is an online healthcare information platform and search engine operated by Retaingrow Technologies LLP. MySurgery provides:\n\n- General information about surgical procedures, their costs, risks, and recovery\n- A directory of doctors and hospitals sourced from publicly available information\n- A community Q&A platform for patient education\n- Facilitation services to help patients connect with healthcare providers\n\nMySurgery is NOT a hospital, clinic, or medical service provider. We do NOT provide medical advice, diagnosis, or treatment. All medical decisions must be made by qualified registered medical practitioners.`,
    },
    {
      title: '2. Acceptance of Terms',
      body: `By accessing or using mysurgery.in, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform.\n\nThese Terms constitute a legally binding agreement between you and MySurgery Technologies under the laws of India including the Information Technology Act 2000, Consumer Protection Act 2019, and Digital Personal Data Protection Act 2023.`,
    },
    {
      title: '3. Doctor and Hospital Directory — Disclaimer',
      body: `IMPORTANT — PLEASE READ CAREFULLY:\n\nDoctor and hospital profiles on MySurgery are compiled from publicly available sources including hospital websites, NMC (National Medical Commission) records, professional directories, and other public databases. This information is displayed in the public interest as an information and directory service.\n\nMySurgery expressly states that:\n\n(a) Doctors listed on MySurgery are NOT employees, consultants, partners, agents, or affiliates of MySurgery unless explicitly stated in writing.\n\n(b) Listing of a doctor or hospital does NOT imply any endorsement, recommendation, or approval by MySurgery, nor does it imply endorsement of MySurgery by the doctor or hospital.\n\n(c) MySurgery does NOT verify the current practice status, credentials, qualifications, or any other information about listed doctors. The information displayed is sourced from public records and may not be current or accurate.\n\n(d) Patients must independently verify a doctor's credentials, registration, and current practice status with the National Medical Commission (NMC) at nmc.org.in before proceeding with any medical treatment.\n\n(e) Any doctor or hospital listed on MySurgery may request removal of their profile by contacting info.mysurgery@gmail.com. We will process such requests within 7 business days.\n\n(f) MySurgery is not responsible for any act, omission, negligence, or misconduct by any doctor or hospital listed on the platform.`,
    },
    {
      title: '4. No Medical Advice',
      body: `All content on MySurgery including procedure descriptions, cost estimates, recovery timelines, FAQ answers, blog articles, and community Q&A is provided for general informational and educational purposes only.\n\nThis content does NOT constitute:\n- Medical advice\n- Diagnosis of any condition\n- Recommendation for any specific treatment or procedure\n- A second opinion\n\nCost information on MySurgery is approximate and based on general market data. Actual costs vary significantly depending on the patient's condition, hospital, surgeon, city, implants used, insurance coverage, and other factors.\n\nAlways consult a qualified, registered medical practitioner before making any medical or surgical decision. Never disregard professional medical advice or delay seeking it because of something you read on MySurgery.`,
    },
    {
      title: '5. Facilitation Services',
      body: `MySurgery offers free facilitation services to help patients connect with healthcare providers. This includes:\n\n- Callback service: Our care coordinators will call you back to understand your requirements and suggest suitable doctors or hospitals.\n- Appointment assistance: We can help schedule consultations at partner hospitals.\n- Insurance guidance: General guidance on health insurance claims (not financial advice).\n\nFacilitation services are provided free of charge to patients. MySurgery may receive referral fees from partner hospitals, which does not affect the objectivity of our information content.\n\nMySurgery is not responsible for the quality, outcome, or cost of medical treatment received at any hospital or from any doctor, whether or not referred through our platform.`,
    },
    {
      title: '6. Community Forum',
      body: `MySurgery operates a community Q&A forum where users can post health-related questions and answers. By posting content, you agree that:\n\n(a) You will not post false, misleading, or harmful medical information.\n(b) You will not impersonate a doctor or medical professional without disclosing your actual qualification.\n(c) You will not post personal attacks, abusive language, or content that violates others' privacy.\n(d) You grant MySurgery a non-exclusive, royalty-free licence to display your posted content on the platform.\n\nMySurgery reserves the right to remove any content that violates these terms without notice. Community answers are not a substitute for professional medical advice.`,
    },
    {
      title: '7. Intellectual Property',
      body: `All original content on MySurgery — including but not limited to procedure guides, blog articles, cost analyses, and editorial content — is the intellectual property of Retaingrow Technologies and is protected by Indian copyright law.\n\nYou may not reproduce, republish, or commercially use MySurgery content without written permission. Brief quotations with attribution and a link to the source are permitted for non-commercial purposes.\n\nDoctor and hospital information sourced from public records is not claimed as exclusive intellectual property of MySurgery.`,
    },
    {
      title: '8. Limitation of Liability',
      body: `To the maximum extent permitted by Indian law, Retaingrow Technologies shall not be liable for:\n\n(a) Any medical outcome, complication, death, or adverse event resulting from treatment by any doctor or hospital, whether listed on MySurgery or not.\n(b) Inaccuracy of doctor or hospital information sourced from public records.\n(c) Loss of data, business interruption, or technical failures.\n(d) Any reliance on cost estimates, procedure information, or community answers on the platform.\n\nMySurgery's total liability for any claim shall not exceed the amount paid by you to MySurgery (which is zero for most users, as our services are free to patients).`,
    },
    {
      title: '9. User Obligations',
      body: `By using MySurgery, you agree to:\n\n(a) Provide accurate information when submitting consultation requests.\n(b) Not use the platform for any illegal purpose.\n(c) Not attempt to scrape, copy, or systematically extract data from the platform.\n(d) Not post spam, advertisements, or irrelevant content in the community forum.\n(e) Not misrepresent your identity or professional qualifications.\n(f) Comply with all applicable Indian laws.`,
    },
    {
      title: '10. Privacy',
      body: `Our collection and use of your personal information is governed by our Privacy Policy, available at mysurgery.in/privacy-policy. By using MySurgery, you consent to the collection and use of your information as described in the Privacy Policy.`,
    },
    {
      title: '11. Third-Party Links',
      body: `MySurgery may contain links to third-party websites including hospital websites, government health portals, and reference sources. These links are provided for convenience only. MySurgery does not endorse, control, or take responsibility for the content of any third-party website. Accessing third-party links is at your own risk.`,
    },
    {
      title: '12. Modifications to Terms',
      body: `MySurgery reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with the revision date. Continued use of MySurgery after changes constitutes acceptance of the updated terms.`,
    },
    {
      title: '13. Governing Law and Disputes',
      body: `These Terms are governed by the laws of India. Any disputes arising from use of MySurgery shall be subject to the exclusive jurisdiction of the courts of Delhi, India.\n\nFor grievances or disputes, please first contact our Grievance Officer at info.mysurgery@gmail.com. We will attempt to resolve disputes within 30 days.`,
    },
    {
      title: '14. Contact',
      body: `Retaingrow Technologies\nEmail: info.mysurgery@gmail.com\nPhone: 8588807050\nWebsite: www.mysurgery.in\n\nFor doctor/hospital removal requests: Email info.mysurgery@gmail.com with subject line "Profile Removal Request" and your NMC registration number.`,
    },
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '40px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '10px'}}>Terms and Conditions</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px'}}>Last updated: April 2026</p>
        <p style={{fontSize: '14px', color: '#6b7280'}}>Governing law: Republic of India</p>
      </div>

      <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '18px 22px', marginBottom: '40px'}}>
        <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 4px', fontSize: '15px'}}>⚠️ Key Notice — Doctor Listings</p>
        <p style={{color: '#92400e', fontSize: '14px', lineHeight: '1.6', margin: 0}}>Doctors listed on MySurgery are NOT affiliated with or employed by MySurgery. Profiles are compiled from publicly available sources. MySurgery operates as an information search engine and directory. Doctors may request removal at any time by emailing info.mysurgery@gmail.com.</p>
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