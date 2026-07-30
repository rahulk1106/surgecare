import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | MySurgery by Gravity Labs',
  description: 'Refund Policy for MySurgery — our facilitation services are free for patients. Refund terms for any paid services.',
  alternates: { canonical: '/refund-policy' },
}

export default function RefundPolicyPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '860px', margin: '0 auto', padding: '48px 24px 80px'}}>
      <div style={{marginBottom: '32px'}}>
        <h1 style={{fontSize: '36px', fontWeight: 700, color: '#0f1f35', marginBottom: '8px'}}>Refund Policy</h1>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '2px'}}>Last updated: July 2026</p>
        <p style={{fontSize: '14px', color: '#6b7280'}}>Gravity Labs (Proprietorship) operating as MySurgery</p>
      </div>

      <div style={{background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '18px 22px', marginBottom: '32px'}}>
        <p style={{fontWeight: 600, color: '#16a34a', margin: '0 0 6px', fontSize: '15px'}}>✓ Our Patient Facilitation Services Are FREE</p>
        <p style={{color: '#374151', fontSize: '14px', lineHeight: '1.7', margin: 0}}>MySurgery does not charge patients for lead generation, appointment facilitation, consultation guidance, or care manager support. Our services to patients are completely free of charge.</p>
      </div>

      {[
        {
          title: '1. Nature of MySurgery Services',
          body: `Gravity Labs (MySurgery) operates as a Health Tech lead generation and patient facilitation company. Our core services to patients — including care manager consultations, appointment booking assistance, and treatment guidance — are provided FREE OF CHARGE.

We earn revenue through affiliate partnerships and business development fees from our partner Healthcare Service Providers (hospitals and doctors), not from patients.`,
        },
        {
          title: '2. No Charges to Patients',
          body: `MySurgery does not currently charge patients for:
- Consultation with our care managers
- Appointment facilitation and booking assistance
- Treatment cost estimates and hospital recommendations
- Follow-up support and guidance
- Use of our online tools (LASIK recommender, piles checker, etc.)

Since no payment is collected from patients for these services, no refund is applicable for facilitation services.`,
        },
        {
          title: '3. Healthcare Partner Fees — Not Our Responsibility',
          body: `Any fees you pay directly to hospitals, doctors, diagnostic labs, or other Healthcare Partners for medical consultations, procedures, or treatments are governed entirely by those partners' own fee, refund, and cancellation policies.

Gravity Labs / MySurgery has NO control over, and NO liability for:
- Hospital or doctor consultation fees
- Surgery or procedure costs
- Advance deposits collected by Healthcare Partners
- Cancellation or rescheduling charges by Healthcare Partners

For refunds on payments made to Healthcare Partners, contact the respective hospital or doctor directly.`,
        },
        {
          title: '4. If MySurgery Introduces Paid Services',
          body: `If Gravity Labs (MySurgery) introduces any paid services in the future (premium listings, priority consultations, etc.), the following refund policy will apply:

Full Refund: If the service has not been delivered within the promised timeframe, a full refund will be provided within 7 business days.

Partial Refund: If the service has been partially delivered, a refund proportional to the undelivered portion will be provided.

No Refund: If the service has been fully delivered as described.

Refund requests must be made within 7 days of the transaction by emailing info.mysurgery@gmail.com with the transaction details.`,
        },
        {
          title: '5. Referral Partner Commission Refund',
          body: `For registered referral partners:

Commission payments are made within 7 business days of lead conversion confirmation. Once commission is paid, it is non-refundable.

If a commission is paid in error (e.g. duplicate payment), Gravity Labs reserves the right to recover the excess amount from future commission payments.

Disputes regarding commission payments must be raised within 30 days of the payment date by emailing info.mysurgery@gmail.com.`,
        },
        {
          title: '6. Contact for Refund Queries',
          body: `For any refund-related queries:

Gravity Labs (Proprietorship) operating as MySurgery
Email: info.mysurgery@gmail.com
Phone: 8588967050
Website: www.mysurgery.in

We will respond to all refund queries within 7 business days.`,
        },
      ].map((section, i) => (
        <div key={i} style={{marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid #f3f4f6'}}>
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
