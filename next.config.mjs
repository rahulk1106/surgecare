/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const countries = [
      'uae', 'saudi-arabia', 'oman', 'kuwait', 'bahrain', 'qatar',
      'nigeria', 'kenya', 'ethiopia', 'ghana', 'tanzania', 'uganda',
    ]

    const countryRedirects = countries.map(country => ({
      source: '/' + country,
      destination: '/medical-tourism/' + country,
      permanent: true,
    }))

    const otherRedirects = [
      // Gynecomastia dedicated page
      { source: '/treatment/gynecomastia', destination: '/gynecomastia', permanent: false },

      // Doctor claim pages — redirect to main claim page
      { source: '/doctors/claim/:slug', destination: '/doctors/claim', permanent: true },

      // Doctor speciality pages — redirect to doctors page
      { source: '/doctors/speciality/:slug', destination: '/doctors', permanent: true },
      { source: '/doctors/specialty/:slug', destination: '/doctors', permanent: true },

      // Country pages without /medical-tourism/ prefix
      { source: '/uae', destination: '/medical-tourism/uae', permanent: true },
      { source: '/saudi-arabia', destination: '/medical-tourism/saudi-arabia', permanent: true },
      { source: '/kenya', destination: '/medical-tourism/kenya', permanent: true },
      { source: '/nigeria', destination: '/medical-tourism/nigeria', permanent: true },
      { source: '/oman', destination: '/medical-tourism/oman', permanent: true },
      { source: '/kuwait', destination: '/medical-tourism/kuwait', permanent: true },
      { source: '/bahrain', destination: '/medical-tourism/bahrain', permanent: true },
      { source: '/qatar', destination: '/medical-tourism/qatar', permanent: true },
      { source: '/ethiopia', destination: '/medical-tourism/ethiopia', permanent: true },
      { source: '/ghana', destination: '/medical-tourism/ghana', permanent: true },
      { source: '/tanzania', destination: '/medical-tourism/tanzania', permanent: true },
      { source: '/uganda', destination: '/medical-tourism/uganda', permanent: true },

      // /treatments/* old URLs
      { source: '/treatments', destination: '/treatment/piles', permanent: true },
      { source: '/treatments/piles-laser-treatment', destination: '/treatment/piles', permanent: true },
      { source: '/treatments/hernia-repair-surgery', destination: '/treatment/hernia', permanent: true },
      { source: '/treatments/gallbladder-removal', destination: '/treatment/gallstones', permanent: true },
      { source: '/treatments/cataract-surgery', destination: '/treatment/cataract', permanent: true },
      { source: '/treatments/knee-replacement-surgery', destination: '/treatment/knee-replacement', permanent: true },
      { source: '/treatments/mtp-abortion-treatment', destination: '/treatment/mtp-abortion', permanent: true },
      { source: '/treatments/:slug', destination: '/treatment/:slug', permanent: true },

      // Old treatment URLs that may have changed
      { source: '/treatment/piles/cost', destination: '/treatment/piles/cost-analysis', permanent: true },
      { source: '/treatment/hernia/cost', destination: '/treatment/hernia/cost-analysis', permanent: true },
      { source: '/treatment/circumcision/cost', destination: '/treatment/circumcision/cost-analysis', permanent: true },
      { source: '/treatment/lasik/cost', destination: '/treatment/lasik/cost-analysis', permanent: true },
      { source: '/treatment/knee-replacement/cost', destination: '/treatment/knee-replacement/cost-analysis', permanent: true },
      { source: '/treatment/mtp-abortion/cost', destination: '/treatment/mtp-abortion/cost-analysis', permanent: true },
      { source: '/treatment/gallstones/cost', destination: '/treatment/gallstones/cost-analysis', permanent: true },
      { source: '/treatment/kidney-stones/cost', destination: '/treatment/kidney-stones/cost-analysis', permanent: true },

      // Old blog URL formats
      { source: '/blog/piles-laser-surgery-cost-gurugram-2025', destination: '/blog/piles-laser-surgery-cost-gurugram-2026', permanent: true },
      { source: '/blog/gallbladder-surgery-cost-delhi-2025', destination: '/blog/hernia-surgery-cost-delhi-2026', permanent: true },
      { source: '/blog/cataract-surgery-cost-gurugram-2025', destination: '/blog/lasik-eye-surgery-cost-gurugram-2026', permanent: true },
      { source: '/blog/appendix-surgery-cost-noida-2025', destination: '/treatment/appendix/noida', permanent: true },
      { source: '/blog/hernia-surgery-faridabad-2025', destination: '/treatment/hernia/faridabad', permanent: true },

      // Old doctor/hospital pages
      { source: '/hospitals', destination: '/doctors', permanent: true },
      { source: '/surgeons', destination: '/doctors', permanent: true },
      { source: '/find-doctor', destination: '/doctors', permanent: true },
      { source: '/book-appointment', destination: '/contact', permanent: true },
      { source: '/consultation', destination: '/contact', permanent: true },
      { source: '/free-consultation', destination: '/contact', permanent: true },

      // Old disease name variations
      { source: '/treatment/piles-surgery', destination: '/treatment/piles', permanent: true },
      { source: '/treatment/hemorrhoids', destination: '/treatment/piles', permanent: true },
      { source: '/treatment/haemorrhoids', destination: '/treatment/piles', permanent: true },
      { source: '/treatment/abortion', destination: '/treatment/mtp-abortion', permanent: true },
      { source: '/treatment/cataract-surgery', destination: '/treatment/cataract', permanent: true },
      { source: '/treatment/lasik-surgery', destination: '/treatment/lasik', permanent: true },
      { source: '/treatment/knee-surgery', destination: '/treatment/knee-replacement', permanent: true },
      { source: '/treatment/gallbladder', destination: '/treatment/gallstones', permanent: true },
      { source: '/treatment/gall-bladder', destination: '/treatment/gallstones', permanent: true },
      { source: '/treatment/kidney-stone', destination: '/treatment/kidney-stones', permanent: true },

      // Medical tourism old URLs
      { source: '/medical-tourism', destination: '/', permanent: false },
      { source: '/international', destination: '/', permanent: true },
      { source: '/international-patients', destination: '/', permanent: true },

      // Partner old URLs
      { source: '/refer', destination: '/partner/register', permanent: true },
      { source: '/referral', destination: '/partner/register', permanent: true },
      { source: '/partner-program', destination: '/partner/register', permanent: true },

      // Misc
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/sitemap', destination: '/sitemap.xml', permanent: true },
    ]

    return [...countryRedirects, ...otherRedirects]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static pages for 1 hour
        source: '/treatment/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
      {
        source: '/blog/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
    ]
  },
}
export default nextConfig
