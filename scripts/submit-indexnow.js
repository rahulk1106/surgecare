#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// IndexNow Submission Script — submits new/updated pages to Bing, Yandex
// Run: node scripts/submit-indexnow.js
// ─────────────────────────────────────────────────────────────────────────────

const https = require('https')

const KEY = 'mysurgery2026indexnow'
const HOST = 'www.mysurgery.in'

const urls = [
  // GLP-1 Hub
  `https://${HOST}/glp1`,
  `https://${HOST}/glp1/ozempic`,
  `https://${HOST}/glp1/wegovy`,
  `https://${HOST}/glp1/mounjaro`,
  `https://${HOST}/glp1/generic`,
  `https://${HOST}/glp1/cost`,
  `https://${HOST}/glp1/research`,
  `https://${HOST}/glp1/side-effects`,
  `https://${HOST}/glp1/vs-bariatric`,
  // Insurance guides
  `https://${HOST}/blog/bypass-surgery-insurance-india-2026`,
  `https://${HOST}/blog/kidney-transplant-insurance-india-2026`,
  `https://${HOST}/blog/cancer-treatment-insurance-india-2026`,
  `https://${HOST}/blog/spine-surgery-insurance-india-2026`,
  `https://${HOST}/blog/hip-replacement-insurance-india-2026`,
  `https://${HOST}/blog/cataract-surgery-insurance-india-2026`,
  `https://${HOST}/blog/bariatric-surgery-insurance-india-2026`,
  `https://${HOST}/blog/liver-transplant-insurance-india-2026`,
  `https://${HOST}/blog/how-to-get-pre-authorization-surgery-india`,
  `https://${HOST}/blog/pre-existing-disease-waiting-period-surgery-india`,
  // International patient guides
  `https://${HOST}/blog/kidney-transplant-india-nigerian-patients`,
  `https://${HOST}/blog/kidney-transplant-india-kenyan-patients`,
  `https://${HOST}/blog/kidney-transplant-india-uae-patients`,
  `https://${HOST}/blog/kidney-transplant-india-saudi-patients`,
  `https://${HOST}/blog/bypass-surgery-india-nigerian-patients`,
  `https://${HOST}/blog/bypass-surgery-india-uae-patients`,
  `https://${HOST}/blog/heart-surgery-india-african-patients`,
  `https://${HOST}/blog/knee-replacement-india-uae-patients`,
  `https://${HOST}/blog/knee-replacement-india-saudi-patients`,
  `https://${HOST}/blog/knee-hip-replacement-india-african-patients`,
  `https://${HOST}/blog/medical-visa-india-african-patients-guide`,
  `https://${HOST}/blog/medical-visa-india-middle-east-patients-guide`,
  `https://${HOST}/blog/complete-guide-medical-treatment-india-international-patients`,
]

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
})

function submit(apiHost) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: apiHost,
        path: '/indexnow',
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload) },
      },
      res => {
        let body = ''
        res.on('data', d => (body += d))
        res.on('end', () => resolve({ status: res.statusCode, body }))
      }
    )
    req.on('error', reject)
    req.write(payload)
    req.end()
  })
}

async function main() {
  console.log(`\n📡 Submitting ${urls.length} URLs to IndexNow...\n`)

  for (const api of ['api.indexnow.org', 'www.bing.com']) {
    try {
      const { status } = await submit(api)
      const ok = status === 200 || status === 202
      console.log(`${ok ? '✅' : '❌'} ${api} → HTTP ${status} ${ok ? '(accepted)' : '(check key file)'}`)
    } catch (e) {
      console.log(`❌ ${api} → Error: ${e.message}`)
    }
  }

  console.log('\n✓ Done. Pages should appear in Bing within 24–48 hours.')
  console.log('✓ Google does not support IndexNow — use Search Console → URL Inspection to request indexing manually.\n')
}

main()
