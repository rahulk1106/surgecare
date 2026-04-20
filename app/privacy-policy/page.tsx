import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MySurgery',
  description: 'Privacy Policy for MySurgery — how we collect, use, and protect your personal and medical information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. About MySurgery',
      body: `MySurgery (mysurgery.in) is a healthcare information and facilitation platform operated by Retaingrow Technologies LLP. We are a search engine and directory service for surgical procedures, hospitals, and doctors across India. MySurgery does NOT provide medical services, treatment, or diagnosis. We connect patients with information and facilitate appointments with registered medical practitioners and hospitals.`,
    },
    {
      title: '2. Information We Collect',
      body: `We collect the following categories of information:\n\nContact Information: Name, phone number, and email address when you submit a consultation request or register on the platform.\n\nMedical Information: General information about the surgical procedure or condition you are inquiring about, provided voluntarily by you.\n\nUsage Data: Pages visited, time spent on pages, browser type, device type, and approximate location (city level) through cookies and analytics tools.\n\nCommunity Content: Questions, answers, and comments posted in the MySurgery community forum.\n\nWe do not collect your Aadhaar number, PAN, financial details, or any government identification unless explicitly required and consented to.`,
    },
    {
      title: '3. How We Use Your Information',
      body: `We use your information for the following purposes:\n\nFacilitation: To connect you with registered doctors, hospitals, and healthcare providers based on your inquiry.\n\nCommunication: To call or WhatsApp you in response to your consultation request. We will only contact you on the number you provide.\n\nService Improvement: To understand how users interact with the platform and improve our content and services.\n\nMarketing: With your consent, to send you relevant health information, procedure updates, and promotional communications. You may opt out at any time.\n\nLegal Compliance: To comply with applicable Indian laws and regulations including the Information Technology Act 2000 and its amendments.`,
    },
    {
      title: '4. Doctor and Hospital Directory — Important Disclaimer',
      body: `MySurgery operates as a public directory and search engine. Doctor profiles and hospital information displayed on MySurgery are compiled from publicly available sources including hospital websites, NMC (National Medical Commission) records, and other public databases.\n\nIMPORTANT: Doctors and hospitals listed on MySurgery are NOT employees, agents, partners, or affiliates of MySurgery unless explicitly stated. They have not necessarily endorsed, approved, or authorised their listing on this platform.\n\nMySurgery displays publicly available information about medical professionals as a directory service, similar to how search engines display publicly available web content. If you are a doctor listed on MySurgery and wish to update or remove your profile, please contact us at info.mysurgery@gmail.com or call 8588807050. We will process removal requests within 7 business days.\n\nMySurgery does not verify the current credentials, qualifications, or practice status of listed doctors. Patients are strongly advised to independently verify a doctor's credentials with the National Medical Commission (NMC) at nmc.org.in before proceeding with any medical treatment.`,
    },
    {
      title: '5. Sharing of Your Information',
      body: `We share your information only in the following limited circumstances:\n\nWith Healthcare Providers: When you request a consultation, your name and phone number are shared with the relevant hospital or doctor's office to facilitate the appointment.\n\nWith Service Providers: We use third-party services including MongoDB (database), Twilio (SMS/WhatsApp), Google Analytics, and Vercel (hosting). These providers process data on our behalf under confidentiality agreements.\n\nLegal Requirements: We may disclose information if required by law, court order, or government authority.\n\nWe do NOT sell, rent, or trade your personal information to any third party for their marketing purposes. We do NOT share your information with insurance companies, pharmaceutical companies, or advertisers without your explicit consent.`,
    },
    {
      title: '6. Confidentiality for Sensitive Procedures',
      body: `MySurgery provides information about sensitive medical procedures including MTP (abortion), circumcision, penile implant, and reproductive health. We treat all inquiries related to these procedures with the highest level of confidentiality.\n\nFor sensitive procedure inquiries:\n- We will only call you on the number you provide\n- We will not reveal the nature of your inquiry to anyone else\n- We do not store detailed medical history beyond what is necessary for the consultation\n- Our care coordinators are trained in confidentiality protocols\n\nWe never share sensitive procedure inquiry details with your family members, employer, or any third party.`,
    },
    {
      title: '7. Cookies and Tracking',
      body: `We use cookies and similar technologies to:\n- Remember your preferences\n- Analyse website traffic (Google Analytics)\n- Improve user experience\n\nYou can disable cookies in your browser settings. Disabling cookies may affect some features of the website. We do not use cookies to track your medical searches for advertising purposes.`,
    },
    {
      title: '8. Data Security',
      body: `We implement industry-standard security measures to protect your data including SSL encryption for all data transmission, secure MongoDB Atlas database with access controls, and regular security audits.\n\nHowever, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data. In the event of a data breach that affects your personal information, we will notify you within 72 hours as required by applicable law.`,
    },
    {
      title: '9. Your Rights',
      body: `Under Indian law including the Digital Personal Data Protection Act 2023 (DPDPA), you have the following rights:\n\nRight to Access: Request a copy of the personal data we hold about you.\n\nRight to Correction: Request correction of inaccurate personal data.\n\nRight to Erasure: Request deletion of your personal data, subject to legal obligations.\n\nRight to Withdraw Consent: Withdraw consent for marketing communications at any time.\n\nRight to Grievance Redressal: Raise a complaint about data processing.\n\nTo exercise any of these rights, contact our Grievance Officer at info.mysurgery@gmail.com. We will respond within 30 days.`,
    },
    {
      title: '10. Medical Information Disclaimer',
      body: `All medical information on MySurgery is provided for general informational purposes only and does NOT constitute medical advice, diagnosis, or treatment recommendations.\n\nThe cost ranges, procedure descriptions, recovery timelines, and other medical information on this website are approximate and may vary significantly based on individual patient factors, hospital policies, and other variables.\n\nAlways consult a qualified, registered medical practitioner before making any medical decisions. MySurgery is not responsible for any medical decisions made based on information found on this website.`,
    },
    {
      title: "11. Children's Privacy",
      body: `MySurgery does not knowingly collect personal information from children under 18 without parental consent. For procedures involving minors, we require a parent or legal guardian to provide consent. If you believe we have inadvertently collected information from a minor without consent, please contact us immediately.`,
    },
    {
      title: '12. Changes to This Policy',
      body: `We may update this Privacy Policy from time to time. The updated policy will be posted on this page with the revision date. Continued use of MySurgery after changes constitutes acceptance of the updated policy. For significant changes, we will notify registered users by email.`,
    },
    {
      title: '13. Contact and Grievance Officer',
      body: `For privacy-related queries, data requests, or complaints:\n\nRetaingrow Technologies\nEmail: info.mysurgery@gmail.com\nPhone: 8588807050\nWebsite: www.mysurgery.in\n\nGrievance Officer: MySurgery Data Protection Team\nResponse time: Within 30 days of receipt of complaint.`,
    },
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '40px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '10px'}}>Privacy Policy</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px'}}>Last updated: April 2026</p>
        <p style={{fontSize: '14px', color: '#6b7280'}}>Effective date: January 2024</p>
      </div>

      <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '18px 22px', marginBottom: '40px'}}>
        <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 4px', fontSize: '15px'}}>⚠️ Important Notice About Doctor Listings</p>
        <p style={{color: '#92400e', fontSize: '14px', lineHeight: '1.6', margin: 0}}>Doctors and hospitals listed on MySurgery are sourced from publicly available information. They are NOT employed by, partnered with, or affiliated with MySurgery unless explicitly stated. MySurgery operates as an information directory and search engine. Doctors may request removal of their profile at any time by contacting info.mysurgery@gmail.com.</p>
      </div>

      {sections.map((section, i) => (
        <div key={i} style={{marginBottom: '36px', paddingBottom: '36px', borderBottom: i < sections.length - 1 ? '1px solid #f3f4f6' : 'none'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '14px'}}>{section.title}</h2>
          <div style={{fontSize: '15px', color: '#374151', lineHeight: '1.8'}}>
            {section.body.split('\n\n').map((para, j) => (
              para.trim() ? <p key={j} style={{margin: '0 0 14px'}}>{para}</p> : null
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}