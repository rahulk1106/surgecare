import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact MySurgery — Free Surgery Consultation | MySurgery',
  description: 'Contact MySurgery for a free surgery consultation. Call 8588967050 or WhatsApp. Callback within 30 minutes.',
  alternates: { canonical: '/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
