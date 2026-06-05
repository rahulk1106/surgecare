/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const countries = [
      'uae', 'saudi-arabia', 'oman', 'kuwait', 'bahrain', 'qatar',
      'nigeria', 'kenya', 'ethiopia', 'ghana', 'tanzania', 'uganda',
    ]
    return countries.map(country => ({
      source: '/' + country,
      destination: '/medical-tourism/' + country,
      permanent: true, // 301 redirect — passes link equity to the real page
    }))
  },
}
export default nextConfig
