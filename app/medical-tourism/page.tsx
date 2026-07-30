import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Tourism in India 2026 — Surgery for International Patients | MySurgery',
  description: 'World-class surgery in India at 60-80% lower cost than UAE, UK, USA. Kidney transplant, bypass surgery, knee replacement, cancer treatment. Free consultation.',
  alternates: { canonical: '/medical-tourism' },
}

import { redirect } from 'next/navigation'

export default function MedicalTourismRedirect() {
  redirect('/')
}
