import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | MySurgery ',
  description: 'Terms and Conditions for MySurgery — a Health Tech lead generation and patient facilitation platform by Gravity Labs Proprietorship. DPDP Act 2023 compliant.',
  alternates: { canonical: '/terms-and-conditions' },
}

export default function TermsPage() {
  const sections = [
    {
      title: '1. About MySurgery and Gravity Labs',
      body: `MySurgery (www.mysurgery.in) is a Health Technology platform operated by Gravity Labs . We are a lead generation, patient facilitation, and business development company leveraging AI and technology to connect patients with India's leading hospitals and healthcare service providers.

IMPORTANT — NATURE OF BUSINESS:

Gravity Labs (operating as MySurgery) is a Health Tech company engaged in:
(a) Lead generation and qualification services for partner hospitals and healthcare providers
(b) Business development consultancy for partner healthcare organisations
(c) AI and technology-powered patient-to-hospital connection services
(d) Affiliate partnership and referral services with partner hospitals and doctors

We work as an affiliate partner and business development consultant to our partner Healthcare Service Providers and hospitals. We are NOT a hospital, clinic, diagnostic centre, or healthcare service provider of any kind.

All actual medical consultations, diagnoses, surgical procedures, treatments, and post-operative care are performed exclusively by independent, registered medical practitioners and hospitals ("Healthcare Partners") who are entirely separate from and not affiliated with Gravity Labs or MySurgery.`,
    },
    {
      title: '2. Acceptance of Terms',
      body: `Please carefully read these Terms and Conditions ("Terms") and our Privacy Policy at mysurgery.in/privacy-policy before accessing the Website or availing our Services.

By accessing or using mysurgery.in in any way — including browsing, submitting a consultation form, calling our care managers, WhatsApp messaging, or interacting with any of our advertisements on social media platforms — you irrevocably accept all terms and conditions in this Agreement and agree to abide by them.

These Terms constitute a legally binding agreement between you ("User" or "Patient") and Gravity Labs (Proprietorship) ("MySurgery", "we", "us", "our") under the laws of India including:
- The Indian Contract Act, 1872
- The Information Technology Act, 2000 and rules thereunder
- The Digital Personal Data Protection Act (DPDP Act), 2023
- The Consumer Protection Act, 2019

If you do not agree with any part of these Terms, please do not use the Website or avail any Services.`,
    },
    {
      title: '3. Our Services — Lead Generation and Patient Facilitation',
      body: `MySurgery provides the following services leveraging AI and technology:

(a) Patient Lead Generation: We collect patient enquiries and connect them with suitable Healthcare Partners based on their medical needs, location, and budget.

(b) Lead Qualification: Our care managers call patients to understand their medical problems, guide them on available treatment options, and recommend suitable partner hospitals and doctors.

(c) Appointment Facilitation: We assist patients in booking consultations and appointments at our partner hospitals and with our partner doctors.

(d) Business Development: We provide business development and affiliate partnership services to our Healthcare Partners, enabling them to reach more patients efficiently.

(e) Health Information: We publish general health information, treatment cost guides, and educational content to help patients make informed decisions.

We connect patients with India's leading hospitals. Our platform uses AI and technology to match patients with the most suitable Healthcare Partner for their specific condition and requirements.`,
    },
    {
      title: '4. User Consent — Communication and Data Sharing',
      body: `IMPORTANT — BY INTERACTING WITH MYSURGERY, YOU CONSENT TO THE FOLLOWING:

When you interact with our website, any of our advertisements on social media platforms (Facebook, Instagram, Google, etc.), or interact with us via text, call, forms, WhatsApp, or any other medium, you give us your express consent and agree that:

(a) Our care managers can call you to understand your medical problems and guide you to book an appointment at our partner hospitals and partner doctors.

(b) We can share your data — which has been provided by you during communication with our care managers or on any of our platforms — with our partner hospitals and partner doctors to help them provide better treatment to you.

(c) We will connect you with our partner hospitals and partner doctors for appointment booking and any follow-up procedures recommended by the doctors.

(d) You agree that we are not in any way responsible for any medical outcomes or treatments prescribed by the doctors and hospitals.

(e) By sharing your phone number on our website or on call, you authorise Gravity Labs (MySurgery) and its representatives to contact you via call, WhatsApp, SMS, or email for consultation guidance and follow-up. This authorisation applies even if your number is registered under DND or DNC services.

(f) You understand that our care managers are patient coordinators and NOT medical professionals. Any guidance provided by care managers is for appointment facilitation only and does not constitute medical advice.`,
    },
    {
      title: '5. Patient Responsibility and Informed Decision-Making',
      body: `The decision to consult a doctor, undergo any medical procedure, or receive any treatment rests entirely with you as the patient.

By using MySurgery's services, you acknowledge and agree that:

(a) You will independently verify the credentials, qualifications, and registration of any doctor or hospital before undergoing any medical procedure at nmc.org.in.

(b) You will conduct your own due diligence regarding the suitability of any recommended Healthcare Partner for your specific medical condition.

(c) You understand all risks associated with any medical procedure and have obtained independent medical advice before proceeding.

(d) Your decision to avail services of any Healthcare Partner connected through MySurgery is made entirely of your own free will, understanding, and volition.

(e) You are solely responsible for evaluating the quality, safety, and appropriateness of medical services provided by any Healthcare Partner.

(f) MySurgery's connection to a Healthcare Partner is not a medical endorsement or quality certification of that provider.`,
    },
    {
      title: '6. Doctor and Hospital Directory — Disclaimer',
      body: `Doctor and hospital profiles on MySurgery are compiled from publicly available sources including hospital websites, NMC records, and professional directories.

MySurgery expressly states that:

(a) Listed doctors and hospitals are NOT employees, partners, agents, or affiliates of MySurgery or Gravity Labs unless explicitly stated in writing.

(b) MySurgery does not verify the current credentials, practice status, or qualifications of all listed doctors. Patients must verify independently at nmc.org.in.

(c) Any doctor or hospital may request removal of their profile by emailing info.mysurgery@gmail.com. Requests processed within 7 business days.

(d) MySurgery is not responsible for any act, omission, negligence, or misconduct by any listed Healthcare Partner.`,
    },
    {
      title: '7. No Medical Advice',
      body: `All content on MySurgery — including procedure descriptions, cost estimates, recovery timelines, blog articles, community Q&A, and care manager guidance — is provided for GENERAL INFORMATIONAL PURPOSES ONLY.

This content does NOT constitute:
- Medical advice or diagnosis
- Recommendation for any specific treatment or procedure
- A second medical opinion
- A substitute for consultation with a qualified, registered medical practitioner

Always consult a qualified, registered medical practitioner before making any medical or surgical decision. The Services are not intended to be a substitute for emergency healthcare. If you face a medical emergency, please contact an ambulance or hospital directly.`,
    },
    {
      title: '8. Complete Indemnification and No Liability for Medical Outcomes',
      body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW:

(a) NO MEDICAL LIABILITY: Gravity Labs / MySurgery shall have ABSOLUTELY NO LIABILITY for any medical outcome, surgical complication, adverse event, death, disability, injury, pain, or any other harm arising from any medical consultation, procedure, or treatment received from any Healthcare Partner connected through MySurgery.

(b) PATIENT INDEMNIFICATION: You agree to fully indemnify, defend, and hold harmless Gravity Labs, MySurgery, its proprietor, employees, agents, and representatives from and against any and all claims, losses, damages, and expenses (including legal fees) arising from:
- Any medical treatment, surgery, or procedure you undergo at a Healthcare Partner
- Any act, omission, negligence, or malpractice by any Healthcare Partner
- Any adverse outcome from medical treatment received via MySurgery's referral
- Your reliance on information on the MySurgery platform

(c) HEALTHCARE PARTNER INDEPENDENCE: All Healthcare Partners are independent entities. They are not employees, agents, or representatives of MySurgery or Gravity Labs.

(d) MAXIMUM LIABILITY: To the extent any liability attaches to MySurgery, total aggregate liability shall not exceed Rs 1,000 (Rupees One Thousand only).`,
    },
    {
      title: '9. Digital Personal Data Protection Act (DPDP Act), 2023 — Compliance',
      body: `Gravity Labs (MySurgery) is committed to full compliance with India's Digital Personal Data Protection Act (DPDP Act), 2023 enacted by the Ministry of Electronics and Information Technology (MeitY).

Under the DPDP Act, 2023, as a Data Fiduciary, we comply with the following:

(a) Consent-Based Processing: We process your personal data only upon obtaining your free, informed, specific, and unambiguous consent as required under Section 6 of the DPDP Act.

(b) Purpose Limitation: Your data is collected and processed only for the specific purpose of connecting you with Healthcare Partners for medical consultation and treatment facilitation.

(c) Data Minimisation: We collect only the data necessary for our facilitation services — name, phone number, city, and general medical enquiry.

(d) Your Rights under DPDP Act, 2023:
- Right to Access: Request information about personal data processed by us (Section 11)
- Right to Correction: Request correction of inaccurate or incomplete personal data (Section 12)
- Right to Erasure: Request erasure of personal data where purpose is fulfilled (Section 12)
- Right to Grievance Redressal: Raise complaints with our Data Protection Officer (Section 13)
- Right to Nominate: Nominate another individual to exercise rights on your behalf (Section 14)
- Right to Withdraw Consent: Withdraw consent at any time (Section 6)

(e) Data Retention: We retain your personal data only as long as necessary for the stated purpose or as required by applicable law.

(f) Data Localisation: All personal data is stored on servers located in India (MongoDB Atlas — Mumbai region).

(g) Breach Notification: In the event of a data breach, we will notify affected users and the Data Protection Board of India as required under Section 8 of the DPDP Act.

To exercise any of your rights under the DPDP Act, contact our Grievance Officer at info.mysurgery@gmail.com.`,
    },
    {
      title: '10. Booking Appointments and Interaction with Healthcare Partners',
      body: `While MySurgery will endeavour to connect you with a suitable Healthcare Partner for consultation or appointment, MySurgery does not guarantee:

(a) That a confirmed appointment will be available with any specific doctor or hospital
(b) That a confirmed appointment will not be cancelled, postponed, or rescheduled by the Healthcare Partner
(c) The quality, outcomes, or costs of medical services provided by any Healthcare Partner

MySurgery and its care managers are NOT responsible for:
- Any wrong medication or treatment quality provided by doctors or hospitals
- Any inconvenience due to doctor unavailability or rescheduling
- Any medical eventualities occurring after using a Healthcare Partner's services
- Any variance in fees charged by Healthcare Partners

If you choose to engage a Healthcare Partner for medical services, you do so at your own risk. We advise you to perform your own investigation and obtain feedback before selecting any doctor or hospital.`,
    },
    {
      title: '11. Content Ownership and Intellectual Property',
      body: `All original content on MySurgery — including procedure guides, blog articles, cost analyses, community content, and editorial content — is the intellectual property of Gravity Labs and protected by Indian copyright law.

Users shall not reproduce, republish, or commercially use MySurgery content without written permission. Brief quotations with attribution for non-commercial purposes are permitted.`,
    },
    {
      title: '12. Limitation of Liability',
      body: `In no event shall Gravity Labs or MySurgery be liable for any direct, indirect, punitive, incidental, special, or consequential damages resulting from:
(a) The use or inability to use the Services
(b) Unauthorized access to User data
(c) Any matter relating to our services

MySurgery's total liability for any claim shall not exceed Rs 1,000 (Rupees One Thousand only) to the extent permitted by applicable law.`,
    },
    {
      title: '13. Refund Policy',
      body: `MySurgery's facilitation services are provided FREE OF CHARGE to patients. We do not charge patients for lead generation, appointment facilitation, or consultation guidance.

For any paid services availed through MySurgery (if applicable), please refer to our Refund Policy at mysurgery.in/refund-policy.

Fees paid directly to Healthcare Partners (hospitals, doctors) are governed by those partners' own refund and cancellation policies. MySurgery has no control over and no liability for refunds from Healthcare Partners.`,
    },
    {
      title: '14. Governing Law and Dispute Resolution',
      body: `These Terms are governed by the laws of the Republic of India. Any dispute arising from use of MySurgery shall be subject to the exclusive jurisdiction of the courts of Delhi, India.

For grievances, please first contact our Grievance Officer at info.mysurgery@gmail.com. We will attempt to resolve disputes amicably within 30 days.

Nothing in these Terms limits your statutory rights under Indian consumer protection laws or the DPDP Act, 2023.`,
    },
    {
      title: '15. Modifications to Terms',
      body: `Gravity Labs reserves the right to modify these Terms at any time. Updated terms will be posted on this page with the revision date. Continued use of MySurgery after changes constitutes acceptance of the updated Terms.`,
    },
    {
      title: '16. Grievance Officer and Contact',
      body: `Gravity Labs (Proprietorship) operating as MySurgery
Email: info.mysurgery@gmail.com
Phone: 8588967050
Website: www.mysurgery.in

Grievance Officer / Data Protection Officer: Compliance Team, Gravity Labs
Response time: Within 30 days of receipt.

For data deletion requests: mysurgery.in/data-deletion-request
For doctor/hospital profile removal: Email info.mysurgery@gmail.com with subject "Profile Removal Request"`,
    },
  ]

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '32px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Terms and Conditions</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '2px'}}>Last updated: July 2026</p>
        <p style={{fontSize: '14px', color: '#6b7280'}}>Gravity Labs (Proprietorship) · Governing law: Republic of India · DPDP Act 2023 Compliant</p>
      </div>

      <div style={{background: '#fef2f2', border: '2px solid #dc2626', borderRadius: '14px', padding: '20px 24px', marginBottom: '20px'}}>
        <p style={{fontWeight: 700, color: '#dc2626', margin: '0 0 8px', fontSize: '16px'}}>🚨 Important — Please Read Before Using MySurgery</p>
        <p style={{color: '#374151', fontSize: '14px', lineHeight: '1.75', margin: '0 0 8px'}}>MySurgery is operated by <strong>Gravity Labs </strong> — a Health Tech company engaged in lead generation and patient facilitation. <strong>We are NOT a hospital, clinic, or healthcare service provider.</strong></p>
        <p style={{color: '#374151', fontSize: '14px', lineHeight: '1.75', margin: '0 0 8px'}}>We Connect with India's leading Hospitals and Healthcare Service Providers leveraging AI and technology. All medical treatment is by independent Healthcare Partners.</p>
        <p style={{color: '#dc2626', fontSize: '14px', fontWeight: 600, margin: 0}}>Gravity Labs / MySurgery has NO liability for any medical outcome, complication, or harm from treatment by any Healthcare Partner.</p>
      </div>

      <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px 20px', marginBottom: '40px'}}>
        <p style={{fontWeight: 600, color: '#1e3a8a', margin: '0 0 6px', fontSize: '14px'}}>🔒 DPDP Act 2023 Compliant</p>
        <p style={{color: '#1e3a8a', fontSize: '13px', margin: 0}}>This platform complies with India's Digital Personal Data Protection Act (DPDP Act), 2023. Your data rights are protected. For data deletion requests visit <a href="/data-deletion-request" style={{color: '#1d4ed8'}}>mysurgery.in/data-deletion-request</a>.</p>
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
