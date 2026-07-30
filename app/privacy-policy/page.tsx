import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MySurgery by Gravity Labs',
  description: 'Privacy Policy for MySurgery by Gravity Labs — DPDP Act 2023 compliant. How we collect, use, share, and protect your personal data.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. About Us',
      body: `MySurgery (www.mysurgery.in) is operated by Gravity Labs (Proprietorship). We are a Health Tech company engaged in lead generation, patient facilitation, and business development services leveraging AI and technology to connect patients with India's leading hospitals and Healthcare Partners.

This Privacy Policy explains how we collect, use, share, and protect your personal data in compliance with India's Digital Personal Data Protection Act (DPDP Act), 2023 and other applicable Indian laws.

Data Fiduciary: Gravity Labs (Proprietorship)
Contact: info.mysurgery@gmail.com | 8588967050`,
    },
    {
      title: '2. Information We Collect',
      body: `We collect the following personal data:

Contact Information: Name, phone number, and email address when you submit a consultation form, call us, WhatsApp us, or interact with any of our advertisements on social media platforms.

Medical Information: General information about the surgical procedure or condition you are enquiring about, voluntarily provided by you or shared during conversation with our care managers.

Communication Data: Records of calls, WhatsApp messages, and form submissions for quality and training purposes.

Usage Data: Pages visited, browser type, device type, and approximate location through cookies and analytics.

Referral Partner Data: If you register as a referral partner — name, phone, city, and bank/UPI details for commission payments.

We do NOT collect Aadhaar numbers, PAN cards, financial account details, or government identification unless explicitly required and consented to.`,
    },
    {
      title: '3. Lawful Basis and Consent under DPDP Act, 2023',
      body: `Under the Digital Personal Data Protection Act (DPDP Act), 2023, we process your personal data on the following lawful bases:

(a) CONSENT (Primary Basis — Section 6, DPDP Act): By interacting with our website, social media ads, care managers via call/WhatsApp/form, you give your free, informed, specific, and unambiguous consent to:
- Collection of your personal data by Gravity Labs / MySurgery
- Processing of your data for patient facilitation and appointment booking
- Sharing of your data with Healthcare Partners for treatment facilitation

(b) LEGITIMATE USE (Section 7, DPDP Act): Processing necessary for the specific service you have requested — connecting you with a Healthcare Partner.

Your consent is recorded at the point of data submission. You may withdraw consent at any time by emailing info.mysurgery@gmail.com.`,
    },
    {
      title: '4. How We Use Your Information',
      body: `We use your personal data for the following purposes:

Patient Facilitation (Primary Purpose): Our care managers call you to understand your medical requirements and connect you with suitable Healthcare Partners — partner hospitals and doctors.

Appointment Booking: To facilitate booking of consultations and follow-up appointments at partner hospitals and with partner doctors.

Data Sharing with Healthcare Partners: Your name, phone, city, and general medical enquiry are shared with one or more Healthcare Partners to enable them to provide better treatment to you.

Service Improvement: To improve our platform, content, and care manager services using AI and technology.

Marketing Communications: With your consent, to send relevant health information and promotional messages. You may opt out at any time.

Call Recording: Calls with our care managers may be recorded for quality assurance and training. By continuing a call, you consent to recording.

Legal Compliance: To comply with applicable Indian laws including the DPDP Act, 2023 and IT Act, 2000.`,
    },
    {
      title: '5. Sharing of Your Data with Healthcare Partners',
      body: `IMPORTANT — DATA SHARING IS CORE TO OUR SERVICE:

When you interact with MySurgery and request a consultation or appointment, your personal data (name, phone number, city, and medical enquiry) is shared with one or more of our partner hospitals and partner doctors to facilitate your medical consultation and treatment.

This data sharing is:
- Covered by your consent given at the time of interaction
- Necessary for the service you have requested
- Limited to Healthcare Partners who are bound by confidentiality obligations

We also share data with:
- Technology Service Providers: MongoDB Atlas (database, India region), Twilio (communications), Google Analytics, Vercel (hosting)
- Legal Authorities: If required by court order or government directive

We do NOT sell your personal data to third parties for advertising purposes.

You indemnify Gravity Labs from any claim arising from the data practices of Healthcare Partners with whom your data has been shared.`,
    },
    {
      title: '6. Your Rights under DPDP Act, 2023',
      body: `Under India's Digital Personal Data Protection Act (DPDP Act), 2023, you have the following rights:

Right to Access (Section 11): Request a summary of personal data processed by us and the purposes for which it is processed.

Right to Correction and Erasure (Section 12): Request correction of inaccurate or incomplete personal data, or erasure of data where the purpose of processing is no longer valid.

Right to Grievance Redressal (Section 13): Raise complaints with our Grievance Officer. We will respond within 30 days.

Right to Nominate (Section 14): Nominate another individual to exercise your rights on your behalf in the event of death or incapacity.

Right to Withdraw Consent (Section 6): Withdraw your consent for data processing at any time. Withdrawal will prevent further facilitation services.

Right to Data Deletion: Request deletion of all your personal data from our systems. Use our Data Deletion Request form at mysurgery.in/data-deletion-request.

To exercise any of the above rights, email info.mysurgery@gmail.com with subject "DPDP Rights Request" or use our data deletion portal.`,
    },
    {
      title: '7. Data Security and Storage',
      body: `We implement industry-standard security measures:

- SSL/TLS encryption for all data transmission
- MongoDB Atlas database (Mumbai, India) with role-based access controls
- Limited staff access to personal data on need-to-know basis
- Regular security reviews and access audits
- Data stored in India in compliance with data localisation requirements

Data Retention: We retain personal data for as long as necessary for the stated purpose — typically 3 years from last interaction — or as required by applicable law. After this period, data is deleted or anonymised.

Breach Notification: In the event of a data breach, we will notify affected users and the Data Protection Board of India within the timeframe required by the DPDP Act, 2023.`,
    },
    {
      title: '8. Confidentiality for Sensitive Medical Enquiries',
      body: `MySurgery handles enquiries about sensitive medical procedures — including MTP (abortion), circumcision, reproductive health, sexual health, and mental health — with the highest level of confidentiality.

For sensitive enquiries:
- We only call on the number you provide
- We do not reveal the nature of your enquiry to anyone without your consent
- Care managers are trained in confidentiality protocols
- We never share sensitive enquiry details with family, employer, or third parties without your explicit consent`,
    },
    {
      title: '9. Cookies and Tracking',
      body: `We use cookies and similar technologies to:
- Remember your preferences and improve user experience
- Analyse website traffic via Google Analytics
- Track campaign performance from social media advertisements

You can disable non-essential cookies in your browser settings. We do not use cookies to track your medical searches for advertising to third parties.`,
    },
    {
      title: '10. Children Privacy',
      body: `MySurgery does not knowingly collect personal data from children under 18 without parental or guardian consent. For procedures involving minors, we require a parent or legal guardian to provide consent and data.

If you believe we have inadvertently collected data from a minor without consent, please contact us immediately at info.mysurgery@gmail.com.`,
    },
    {
      title: '11. Changes to This Policy',
      body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with the revision date. Continued use of MySurgery after changes constitutes acceptance.`,
    },
    {
      title: '12. Grievance Officer / Data Protection Officer',
      body: `For privacy queries, DPDP Act rights requests, data deletion, or complaints:

Gravity Labs (Proprietorship) operating as MySurgery
Email: info.mysurgery@gmail.com
Phone: 8588967050
Website: www.mysurgery.in

Grievance Officer / Data Protection Officer: Compliance Team, Gravity Labs
Response time: Within 30 days.

Data Deletion Requests: mysurgery.in/data-deletion-request
Doctor/Hospital Profile Removal: Email with subject "Profile Removal Request"`,
    },
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '32px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Privacy Policy</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '2px'}}>Last updated: July 2026 · DPDP Act 2023 Compliant</p>
        <p style={{fontSize: '14px', color: '#6b7280'}}>Gravity Labs (Proprietorship) operating as MySurgery</p>
      </div>

      <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '18px 22px', marginBottom: '20px'}}>
        <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 6px', fontSize: '15px'}}>⚠️ How We Use Your Data — Summary</p>
        <p style={{color: '#92400e', fontSize: '14px', lineHeight: '1.7', margin: '0 0 6px'}}>When you submit your details on MySurgery — through forms, calls, WhatsApp, or social media ads — your name, phone, and medical enquiry are shared with our partner hospitals and doctors to arrange your consultation. This is our core service.</p>
        <p style={{color: '#92400e', fontSize: '13px', margin: 0}}>MySurgery is a Health Tech lead generation company operated by Gravity Labs — not a medical company. Healthcare Partners are independent entities.</p>
      </div>

      <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px 20px', marginBottom: '40px'}}>
        <p style={{fontWeight: 600, color: '#1e3a8a', margin: '0 0 4px', fontSize: '14px'}}>🔒 DPDP Act 2023 Compliant</p>
        <p style={{color: '#1e3a8a', fontSize: '13px', margin: 0}}>Your data rights under India's Digital Personal Data Protection Act, 2023 are protected. Request data deletion at <a href="/data-deletion-request" style={{color: '#1d4ed8'}}>mysurgery.in/data-deletion-request</a>.</p>
      </div>

      {sections.map((section, i) => (
        <div key={i} style={{marginBottom: '36px', paddingBottom: '36px', borderBottom: i < sections.length - 1 ? '1px solid #f3f4f6' : 'none'}}>
          <h2 style={{fontSize: '19px', fontWeight: 700, color: '#111827', marginBottom: '14px'}}>{section.title}</h2>
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
