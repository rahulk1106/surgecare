import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Community — Ask Surgery Questions | MySurgery',
  description: 'Ask questions about piles, hernia, circumcision, LASIK, knee replacement. Get answers from doctors and patients.',
  alternates: { canonical: '/community' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
