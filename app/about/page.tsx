import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MySurgery — Surgical Care Facilitation Delhi-NCR',
  description: 'MySurgery is a surgical care facilitation company based in Gurugram. We connect patients with expert surgeons and top hospitals across Delhi-NCR for all types of surgeries.',
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About MySurgery</h1>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
        <p className="text-blue-900 leading-relaxed">
          MySurgery is a surgical care facilitation company based in Gurugram, Haryana.
          We connect patients across Delhi-NCR with expert surgeons and NABH-accredited hospitals
          for elective and essential surgical procedures — with full insurance support,
          transparent pricing, and a dedicated care coordinator for every patient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What We Do</h2>
          <ul className="space-y-2">
            {[
              'Free surgical consultation and second opinions',
              'Match patients with specialist surgeons',
              'Insurance pre-authorisation and cashless claims',
              'Appointment scheduling and care coordination',
              'Post-operative follow-up support',
              'Transparent cost estimates before surgery',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cities We Serve</h2>
          <ul className="space-y-2">
            {[
              'Gurugram, Haryana',
              'Delhi (NCR)',
              'Noida, Uttar Pradesh',
              'Faridabad, Haryana',
            ].map((city, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">◉</span>
                <span className="text-sm text-gray-600">{city}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">Surgical Specialties</h2>
          <ul className="space-y-2">
            {[
              'General Surgery — Piles, Hernia, Gallbladder',
              'Orthopaedic Surgery — Knee and Hip Replacement',
              'Ophthalmology — Cataract and LASIK',
              'Urology — Kidney Stone, Hydrocele',
              'Gynaecology — Hysterectomy, Fibroid',
            ].map((spec, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">◉</span>
                <span className="text-sm text-gray-600">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center mb-10">
        <div className="bg-white border rounded-lg p-5">
          <div className="text-2xl font-bold text-blue-700">15+</div>
          <div className="text-sm text-gray-500 mt-1">Partner Hospitals</div>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <div className="text-2xl font-bold text-blue-700">40+</div>
          <div className="text-sm text-gray-500 mt-1">Specialist Surgeons</div>
        </div>
        <div className="bg-white border rounded-lg p-5">
          <div className="text-2xl font-bold text-blue-700">5</div>
          <div className="text-sm text-gray-500 mt-1">Surgical Specialties</div>
        </div>
      </div>

      <div className="bg-blue-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Talk to Us Today</h2>
        <p className="text-blue-100 mb-6">Free consultation. No commitment. Callback within 30 minutes.</p>
        <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition">
          Book Free Consultation
        </a>
      </div>
    </main>
  )
}
