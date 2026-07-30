import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Deletion Request | MySurgery — DPDP Act 2023',
  description: 'Submit your data deletion, access, correction, or consent withdrawal request under India\'s Digital Personal Data Protection Act (DPDP Act), 2023.',
  alternates: { canonical: '/data-deletion-request' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
