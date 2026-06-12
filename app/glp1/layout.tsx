import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GLP-1 Drugs in India 2026 — Ozempic, Wegovy, Mounjaro & Generic Prices',
  description: 'Everything about GLP-1 medicines in India 2026: Ozempic, Wegovy, Mounjaro, Rybelsus and 20+ generic semaglutide brands. Prices, eligibility, side effects and research.',
  keywords: [
    'GLP-1 drugs India',
    'Ozempic price India',
    'generic semaglutide India',
    'Wegovy India',
    'Mounjaro India',
    'Rybelsus India',
    'GLP-1 injection price',
    'semaglutide patent expiry India',
  ],
  alternates: { canonical: '/glp1' },
}

export default function GLP1Layout({ children }: { children: React.ReactNode }) {
  return children
}
