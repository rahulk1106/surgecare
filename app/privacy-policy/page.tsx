import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MySurgery by Retaingrow Technologies',
  description: 'Privacy Policy for MySurgery — how Retaingrow Technologies collects, uses, shares, and protects your personal and medical information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. About MySurgery and Retaingrow Technologies',
      body: `MySurgery (mysurgery.in) is operated by Retaingrow Technologies LLP. We are a marketing and lead facilitation company — NOT a medical company, hospital, or healthcare service provider.

We connect patients with independent registered Healthcare Partners (doctors, hospitals, and clinics) through referral and facilitation services. All medical treatment is provided by independent Healthcare Partners, not by MySurgery or Retaingrow Technologies.

This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our platform.`,
    },
    {
      title: '2. Information We Collect',
      body: `We collect the following categories of information:

Contact Information: Name, phone number, and email address when you submit a consultation request or register on the platform.

Medical Information: General information about the surgical procedure or condition you are enquiring about, provided voluntarily by you. We do not collect detailed medical records unless you choose to share them.

Usage Data: Pages visited, time spent, browser type, device type, and approximate location (city level) through cookies and analytics tools.

Community Content: Questions, answers, and comments posted in the MySurgery community forum.

Partner Referral Data: If you register as a referral partner, we collect your name, phone, city, and bank/UPI details for commission payments.

We do NOT collect your Aadhaar number, PAN card, financial account details, or government identification unless explicitly required and consented to.`,
    },
    {
      title: '3. How We Use Your Information',
      body: `We use your information for the following purposes:

Facilitation: To connect you with registered Healthcare Partners based on your medical inquiry. This is our primary purpose.

Communication: To call or WhatsApp you in response to your consultation request. We will only contact you on the number you provide.

Data Sharing with Healthcare Partners: Your name, phone number, and general medical inquiry will be shared with one or more Healthcare Partners as necessary to facilitate your consultation. See Section 5 for full details.

Service Improvement: To understand how users interact with the platform and improve our content and services.

Marketing Communications: With your consent, to send relevant health information, procedure updates, and promotional messages. You may opt out at any time.

Legal Compliance: To comply with applicable Indian laws including the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023.`,
    },
    {
      title: '4. Your Consent to Data Collection and Sharing',
      body: `By submitting any form, calling, WhatsApp messaging, or otherwise providing your information on MySurgery, you expressly consent to:

(a) Collection of your personal and medical information by Retaingrow Technologies / MySurgery.

(b) Sharing of your name, phone number, city, and medical inquiry with MySurgery's Healthcare Partners for the purpose of facilitating your medical consultation.

(c) Healthcare Partners contacting you directly by phone or WhatsApp to discuss your medical requirements.

You understand that:
— MySurgery may share your information with more than one Healthcare Partner to find the most suitable provider
— Healthcare Partners are independent entities responsible for their own data protection practices
— You indemnify Retaingrow Technologies from any harm, misuse, or breach of data by Healthcare Partners

You may withdraw consent at any time by emailing info.mysurgery@gmail.com. Withdrawal will prevent further facilitation services from being provided.`,
    },
    {
      title: '5. Sharing of Your Information',
      body: `We share your information in the following circumstances:

With Healthcare Partners: When you request a consultation, your name, phone number, city, and general medical inquiry are shared with relevant Healthcare Partners (hospitals, clinics, and doctors) to facilitate your appointment. This is the primary purpose for which your data is collected.

With Service Providers: We use third-party technology services including MongoDB Atlas (database), Twilio (SMS/WhatsApp notifications), Google Analytics (usage analytics), and Vercel (website hosting). These providers process data on our behalf.

With Referral Partners: If you were referred to MySurgery by a registered partner, we may confirm conversion status (without sharing your detailed medical information) to facilitate commission payment.

For Legal Requirements: We may disclose information if required by a court order, law enforcement, or government authority.

We do NOT sell, rent, or trade your personal information to third parties for their own marketing purposes. We do NOT share your information with insurance companies or pharmaceutical companies without your explicit consent.`,
    },
    {
      title: '6. Doctor and Hospital Directory — Data Sources',
      body: `Doctor profiles and hospital information displayed on MySurgery are compiled from publicly available sources including hospital websites, NMC (National Medical Commission) records, and professional directories.

Important:
— Listed doctors and hospitals are NOT employees or affiliates of MySurgery
— They have not necessarily authorised or approved their listing
— MySurgery does not verify current credentials or practice status
— Doctors may request removal by emailing info.mysurgery@gmail.com (processed within 7 business days)

MySurgery displays this information as a public directory service, similar to how search engines index publicly available information.`,
    },
    {
      title: '7. Confidentiality for Sensitive Procedures',
      body: `MySurgery handles enquiries about sensitive medical procedures — including MTP (abortion), circumcision, penile implant, reproductive health, and mental health — with the highest level of confidentiality.

For sensitive procedure enquiries:
— We only call on the number you provide
— We do not reveal the nature of your enquiry to anyone without your consent
— We do not store detailed medical history beyond what is necessary for the consultation
— Our care coordinators are trained in confidentiality protocols

We never share sensitive procedure enquiry details with your family, employer, or any third party without your explicit consent.`,
    },
    {
      title: '8. Data Security',
      body: `We implement industry-standard security measures including:
— SSL/TLS encryption for all data transmission
— Secure MongoDB Atlas database with role-based access controls
— Limited staff access to personal data on a need-to-know basis
— Regular security reviews

However, no internet transmission is 100% secure. We cannot guarantee absolute security. In the event of a data breach affecting your personal information, we will notify you within 72 hours as required by applicable law.`,
    },
    {
      title: '9. Your Rights Under Indian Law',
      body: `Under the Digital Personal Data Protection Act 2023 (DPDPA) and other applicable Indian laws, you have the following rights:

Right to Access: Request a copy of the personal data we hold about you.
Right to Correction: Request correction of inaccurate personal data.
Right to Erasure: Request deletion of your personal data, subject to legal obligations.
Right to Withdraw Consent: Withdraw consent for data processing at any time.
Right to Grievance Redressal: Raise a complaint about how your data is processed.
Right to Nominate: Nominate another person to exercise these rights on your behalf in the event of death or incapacity.

To exercise any of these rights, contact our Grievance Officer at info.mysurgery@gmail.com. We will respond within 30 days.`,
    },
    {
      title: '10. No Liability for Healthcare Partner Data Practices',
      body: `When your information is shared with Healthcare Partners, those partners become independent data controllers for the information they receive.

Retaingrow Technologies / MySurgery has no control over, and no liability for, the data protection practices of Healthcare Partners. You should review the privacy policies of any Healthcare Partner before sharing additional personal or medical information directly with them.

You expressly indemnify Retaingrow Technologies from any claim, loss, or harm arising from the data practices of any Healthcare Partner with whom your information has been shared.`,
    },
    {
      title: '11. Cookies and Tracking',
      body: `We use cookies and similar technologies to remember your preferences, analyse website traffic via Google Analytics, and improve user experience.

You can disable cookies in your browser settings. We do not use cookies to track your medical searches for advertising purposes.`,
    },
    {
      title: '12. Medical Information Disclaimer',
      body: `All medical information on MySurgery is for general informational purposes only. It does NOT constitute medical advice, diagnosis, or treatment recommendation.

Cost ranges and procedure information are approximate. Always consult a qualified registered medical practitioner before making medical decisions. MySurgery is not responsible for any decisions made based on information found on this website.`,
    },
    {
      title: '13. Children\'s Privacy',
      body: `MySurgery does not knowingly collect personal information from children under 18 without parental or guardian consent. For procedures involving minors, we require a parent or legal guardian to provide consent.

If you believe we have inadvertently collected information from a minor without consent, please contact us immediately at info.mysurgery@gmail.com.`,
    },
    {
      title: '14. Changes to This Policy',
      body: `We may update this Privacy Policy from time to time. The updated policy will be posted on this page with the revision date. Continued use of MySurgery after changes constitutes acceptance of the updated policy.`,
    },
    {
      title: '15. Contact and Grievance Officer',
      body: `For privacy-related queries, data requests, or complaints:

Retaingrow Technologies LLP (operating as MySurgery)
Email: info.mysurgery@gmail.com
Phone: 8588967050
Website: www.mysurgery.in

Grievance Officer: Data Protection and Compliance Team
Response time: Within 30 days of receipt of complaint.`,
    },
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '32px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Privacy Policy</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '2px'}}>Last updated: May 2026</p>
        <p style={{fontSize: '14px', color: '#6b7280'}}>Effective date: January 2024 · Operated by Retaingrow Technologies LLP</p>
      </div>

      {/* KEY NOTICE */}
      <div style={{background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '12px', padding: '18px 22px', marginBottom: '20px'}}>
        <p style={{fontWeight: 600, color: '#92400e', margin: '0 0 6px', fontSize: '15px'}}>⚠️ How We Use Your Data — Summary</p>
        <p style={{color: '#92400e', fontSize: '14px', lineHeight: '1.7', margin: '0 0 6px'}}>
          When you submit your details on MySurgery, your name, phone, and medical enquiry are shared with independent Healthcare Partners (hospitals and doctors) to arrange your consultation. This is our core service.
        </p>
        <p style={{color: '#92400e', fontSize: '13px', margin: 0}}>
          MySurgery is a marketing company — not a medical company. Healthcare Partners are independent entities. Read Sections 4 and 5 for full details on data sharing.
        </p>
      </div>

      <div style={{background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '12px', padding: '16px 20px', marginBottom: '40px'}}>
        <p style={{fontWeight: 600, color: '#0c4a6e', margin: '0 0 4px', fontSize: '14px'}}>🔒 Doctor Listing Notice</p>
        <p style={{color: '#0c4a6e', fontSize: '13px', lineHeight: '1.6', margin: 0}}>Doctor profiles are compiled from publicly available information. Listed doctors are NOT affiliated with MySurgery. Any doctor may request removal by emailing info.mysurgery@gmail.com.</p>
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
