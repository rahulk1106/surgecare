export const metadata = {
  title: 'Claim Your Doctor Profile | MySurgery',
  description: 'Are you a surgeon or specialist? Claim your free profile on MySurgery and reach thousands of patients in your city.',
}

export default function ClaimPage() {
  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif', maxWidth: '600px', margin: '0 auto', padding: '60px 24px'}}>
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <div style={{fontSize: '48px', marginBottom: '16px'}}>👨‍⚕️</div>
        <h1 style={{fontSize: '32px', fontWeight: 700, color: '#0f1f35', marginBottom: '12px'}}>Claim Your Profile on MySurgery</h1>
        <p style={{fontSize: '16px', color: '#4b5563', lineHeight: '1.7'}}>MySurgery lists publicly available doctor information as a directory service. If you are the doctor listed, you can claim your profile to update information, add photos, and connect directly with patients.</p>
      </div>
      <div style={{background: '#f9fafb', borderRadius: '16px', padding: '32px', marginBottom: '32px'}}>
        <h2 style={{fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '20px'}}>Benefits of claiming your profile</h2>
        {['Update your profile with accurate information', 'Add your photo and contact details', 'Receive patient enquiries directly', 'Get featured in search results', 'Free — no subscription required'].map(b => (
          <div key={b} style={{display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
            <span style={{color: '#22c55e', fontWeight: 700}}>✓</span>
            <span style={{fontSize: '14px', color: '#374151'}}>{b}</span>
          </div>
        ))}
      </div>
      <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '32px'}}>
        <h2 style={{fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '20px'}}>Request Profile Claim</h2>
        <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '20px'}}>Send us an email or WhatsApp with your name, registration number, and hospital. We will verify and transfer the profile to you within 24 hours.</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <a href='mailto:info.mysurgery@gmail.com?subject=Profile Claim Request' style={{display: 'block', background: '#1d4ed8', color: 'white', textAlign: 'center', fontWeight: 600, padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>Email Us to Claim Profile</a>
          <a href='https://wa.me/918588967050?text=Hi+I+want+to+claim+my+doctor+profile+on+MySurgery' target='_blank' rel='noopener noreferrer' style={{display: 'block', background: '#22c55e', color: 'white', textAlign: 'center', fontWeight: 600, padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px'}}>WhatsApp to Claim Profile</a>
        </div>
        <p style={{fontSize: '12px', color: '#9ca3af', textAlign: 'center', marginTop: '16px'}}>Or call us at 8588967050 · Available 9am – 9pm</p>
      </div>
    </div>
  )
}