import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LASIK Surgery Recommender — Find Best Option for Your Eyes | MySurgery',
  description: 'Enter your eye power, age and city to get a personalised LASIK recommendation. LASIK, SMILE, SILK, Contoura, ICL — find out which is right for you. Free tool.',
  alternates: { canonical: '/lasik-recommender' },
  keywords: ['which LASIK is best for me', 'LASIK recommender India', 'SMILE vs LASIK which better', 'laser eye surgery recommendation'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
