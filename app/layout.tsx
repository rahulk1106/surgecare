import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import StickyCallButton from '@/components/layout/StickyCallButton'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mysurgery.in'),
  title: {
    default: 'MySurgery — Trusted Surgery Facilitation in Delhi-NCR',
    template: '%s | MySurgery',
  },
  description: 'MySurgery connects patients with expert surgeons and top hospitals in Delhi, Gurugram, Noida and Faridabad. Free consultation, insurance support, same-day discharge.',
  keywords: [
    'surgery facilitation Delhi',
    'piles laser treatment Gurugram',
    'hernia surgery Noida',
    'knee replacement Delhi NCR',
    'free surgical consultation',
  ],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'MySurgery' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'LocalBusiness'],
  name: 'MySurgery',
  description: 'MySurgery is a surgical care facilitation company connecting patients with expert surgeons and NABH-accredited hospitals across Delhi-NCR for piles, hernia, knee replacement, cataract and gallbladder surgery.',
  url: 'https://mysurgery.in',
  telephone: '+91-8588807050',
  email: 'info.mysurgery@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122001',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Faridabad' },
  ],
  medicalSpecialty: [
    'General Surgery',
    'Orthopedic Surgery',
    'Ophthalmology',
    'Urology',
    'Gynecology',
  ],
  sameAs: [
    'https://www.linkedin.com/company/mysurgery',
    'https://www.instagram.com/mysurgery',
    'https://www.facebook.com/mysurgery',
  ],
  priceRange: 'Free consultation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
