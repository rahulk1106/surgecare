import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import StickyCallButton from '@/components/layout/StickyCallButton'
import Footer from '@/components/layout/Footer'
import LeadPopup from '@/components/LeadPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mysurgery.in'),
  title: {
    default: 'MySurgery — Find Best Surgeons & Surgery Cost in India',
    template: '%s | MySurgery',
  },
  description: 'MySurgery connects patients with top surgeons and NABH-accredited hospitals across India. Free consultation, insurance support, same-day discharge.',
  keywords: [
    'surgery in India', 'best surgeons India', 'laser piles surgery',
    'hernia surgery India', 'knee replacement India', 'LASIK eye surgery India',
    'circumcision surgery India', 'MTP abortion India', 'free surgery consultation',
    'NABH hospital India', 'laparoscopic surgery India', 'surgery cost India',
    'medical tourism India', 'surgery near me', 'piles treatment Delhi',
  ],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'MySurgery' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  alternates: { canonical: 'https://www.mysurgery.in' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'LocalBusiness'],
  name: 'MySurgery',
  description: 'MySurgery connects patients with top surgeons and NABH-accredited hospitals across India for piles, hernia, knee replacement, MTP, circumcision, cataract and more. Free consultation, insurance support, same-day discharge.',
  url: 'https://www.mysurgery.in',
  telephone: '+91-8588967050',
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
        <LeadPopup />
      </body>
    </html>
  )
}
