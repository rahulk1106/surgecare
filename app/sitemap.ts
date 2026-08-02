import { MetadataRoute } from 'next'

const BASE = 'https://www.mysurgery.in'

const diseases = ['piles', 'fissure', 'fistula', 'pilonidal-sinus', 'hernia', 'gallstones', 'appendix', 'lipoma', 'kidney-stones', 'hydrocele', 'circumcision', 'varicocele', 'penile-implant', 'mtp-abortion', 'fibroids', 'ovarian-cyst', 'hysterectomy', 'gynecomastia', 'liposuction', 'tonsils', 'sinusitis', 'septoplasty', 'knee-replacement', 'acl-tear', 'cataract', 'lasik']

const cities = ['delhi', 'gurugram', 'noida', 'faridabad', 'kochi', 'mumbai', 'bangalore', 'patna', 'ranchi', 'raipur', 'bhubaneswar', 'lucknow', 'ahmedabad', 'trivandrum', 'coimbatore', 'madurai', 'vijayawada', 'vizag', 'indore', 'pune', 'chennai']

const blogs = ['piles-laser-surgery-cost-gurugram-2025', 'hernia-surgery-recovery-time-india', 'is-knee-replacement-covered-by-insurance-india', 'gallbladder-surgery-cost-delhi-2025', 'cataract-surgery-cost-gurugram-2025', 'appendix-surgery-cost-noida-2025', 'laser-vs-open-piles-surgery-which-is-better', 'hernia-surgery-faridabad-2025', 'mtp-abortion-cost-delhi-gurugram-2025', 'piles-laser-surgery-cost-delhi-2026', 'hernia-surgery-cost-mumbai-2026', 'mtp-abortion-cost-delhi-2026', 'mtp-abortion-cost-gurugram-2026', 'mtp-abortion-cost-mumbai-2026', 'mtp-abortion-cost-bangalore-2026', 'mtp-abortion-cost-kochi-2026', 'medical-abortion-pills-india-2026', 'dnc-surgery-cost-india-2026', 'mtp-act-india-2021-womens-rights', 'abortion-without-husband-permission-india', 'mtp-abortion-cost-chennai-2026', 'mtp-abortion-cost-hyderabad-2026', 'safe-abortion-after-failed-contraception', 'mtp-first-trimester-vs-second-trimester', 'mtp-abortion-cost-pune-2026', 'mtp-recovery-what-to-expect', 'mtp-abortion-cost-lucknow-2026', 'abortion-after-rape-india-legal-rights', 'mtp-vs-morning-after-pill-difference', 'mtp-abortion-cost-vizag-vijayawada-2026', 'ectopic-pregnancy-india-symptoms-treatment', 'mtp-abortion-cost-indore-ahmedabad-2026', 'choosing-right-doctor-for-mtp-india', 'mtp-insurance-coverage-india-2026', 'mtp-abortion-for-minors-india', 'mtp-abortion-cost-trivandrum-coimbatore-2026', 'mtp-fertility-future-pregnancy-after-abortion', 'mtp-second-trimester-india-12-20-weeks', 'mtp-abortion-cost-patna-ranchi-bhubaneswar', 'mtp-vs-adoption-india-making-the-decision', 'laser-circumcision-cost-delhi-2026', 'laser-circumcision-cost-gurugram-2026', 'zsr-circumcision-india-cost-guide-2026', 'phimosis-treatment-india-cost-options', 'adult-circumcision-india-what-to-expect', 'circumcision-for-religious-reasons-india', 'circumcision-cost-mumbai-bangalore-2026', 'circumcision-cost-kochi-chennai-2026', 'circumcision-cost-pune-ahmedabad-2026', 'circumcision-balanitis-recurrent-infection', 'circumcision-cost-lucknow-indore-patna', 'circumcision-benefits-hygiene-health', 'circumcision-cost-vizag-vijayawada-2026', 'circumcision-bxo-lichen-sclerosus', 'circumcision-child-infant-india-guide', 'circumcision-hygiene-guide-india', 'circumcision-sexual-health-erection-sensitivity', 'circumcision-vs-preputioplasty-india', 'circumcision-insurance-india-when-covered', 'circumcision-cost-trivandrum-coimbatore-madurai', 'circumcision-paraphimosis-emergency', 'traditional-vs-medical-circumcision-india', 'circumcision-ranchi-patna-raipur-bhubaneswar', 'cost-breakdown-circumcision-india-2026', 'hernia-surgery-cost-delhi-2026', 'hernia-surgery-cost-mumbai-2026', 'laparoscopic-vs-open-hernia-surgery-india', 'inguinal-hernia-surgery-cost-india-2026', 'umbilical-hernia-surgery-cost-india-2026', 'hernia-mesh-india-types-cost-complications', 'hernia-surgery-recovery-india-complete-guide', 'hernia-surgery-insurance-india-2026', 'hernia-recurrence-prevention-india', 'hernia-surgery-cost-bangalore-2026', 'hiatal-hernia-india-symptoms-surgery-cost', 'incisional-hernia-india-surgery-cost', 'hernia-surgery-cost-gurugram-noida-2026', 'sports-hernia-india-symptoms-treatment', 'hernia-in-children-india-parents-guide', 'lasik-eye-surgery-cost-delhi-2026', 'lasik-eye-surgery-cost-gurugram-2026', 'lasik-eye-surgery-cost-noida-2026', 'lasik-eye-surgery-cost-mumbai-2026', 'lasik-eye-surgery-cost-bangalore-2026', 'lasik-eye-surgery-cost-chennai-2026', 'lasik-eye-surgery-cost-kochi-2026', 'lasik-eye-surgery-cost-pune-2026', 'lasik-eye-surgery-cost-ahmedabad-2026', 'lasik-eye-surgery-cost-hyderabad-2026', 'lasik-eye-surgery-cost-lucknow-2026', 'lasik-eye-surgery-cost-indore-2026', 'lasik-eye-surgery-cost-coimbatore-2026', 'lasik-eye-surgery-cost-madurai-2026', 'lasik-eye-surgery-cost-vizag-2026', 'lasik-eye-surgery-faq-india-2026', 'lasik-eye-surgery-insurance-coverage-india-2026', 'smile-vs-lasik-vs-contoura-india-2026', 'lasik-eligibility-criteria-india-2026',
  'bypass-surgery-insurance-india-2026',
  'kidney-transplant-insurance-india-2026',
  'cancer-treatment-insurance-india-2026',
  'spine-surgery-insurance-india-2026',
  'hip-replacement-insurance-india-2026',
  'cataract-surgery-insurance-india-2026',
  'bariatric-surgery-insurance-india-2026',
  'liver-transplant-insurance-india-2026',
  'how-to-get-pre-authorization-surgery-india',
  'pre-existing-disease-waiting-period-surgery-india',
  'kidney-transplant-india-nigerian-patients',
  'kidney-transplant-india-kenyan-patients',
  'kidney-transplant-india-uae-patients',
  'kidney-transplant-india-saudi-patients',
  'bypass-surgery-india-nigerian-patients',
  'bypass-surgery-india-uae-patients',
  'heart-surgery-india-african-patients',
  'knee-replacement-india-uae-patients',
  'knee-replacement-india-saudi-patients',
  'knee-hip-replacement-india-african-patients',
  'medical-visa-india-african-patients-guide',
  'medical-visa-india-middle-east-patients-guide',
  'complete-guide-medical-treatment-india-international-patients',
  'glp1-breast-cancer-risk-india-june-2026',
  'glp1-muscle-loss-india-june-2026',
  'glp1-addiction-overdose-risk-india-june-2026',
  'glp1-generic-semaglutide-india-june-2026',
  'glp1-depression-anxiety-india-june-2026',
  'glp1-cancer-progression-asco2026-india-june-2026',
  'glp1-oral-pill-orforglipron-india-june-2026',
  'glp1-compounded-fda-crackdown-india-june-2026',
  'glp1-semaglutide-biological-aging-india-june-2026',
  'glp1-weight-loss-plateau-india-june-2026',
  'glp1-exercise-decline-india-june-2026',
  'glp1-male-fertility-testosterone-india-june-2026',
  'glp1-autoimmune-heart-protection-india-june-2026',
  'glp1-survodutide-fatty-liver-india-june-2026',
  'glp1-mounjaro-tirzepatide-heart-india-july-2026',
  'glp1-stopping-weight-regain-india-july-2026',
  'glp1-peripheral-artery-disease-pad-india-july-2026',
  'glp1-medicare-coverage-india-lessons-july-2026',
  'glp1-biweekly-injection-bofanglutide-india-july-2026',
  'glp1-impulsivity-violence-behavior-india-july-2026',
  'glp1-tirzepatide-vs-semaglutide-weight-loss-india-july-2026',
  'glp1-us-obesity-rate-drop-india-july-2026',
  'glp1-ozempic-dosing-mistakes-poison-control-india-july-2026',
  'glp1-orforglipron-beats-oral-ozempic-lancet-india-july-2026',
  'glp1-pcos-fertility-india-july-2026',
  'glp1-generic-tirzepatide-mounjaro-india-july-2026',
  'glp1-dementia-prevention-protect-cog-india-july-2026',
  'glp1-aleniglipron-oral-pill-india-july-2026',
  'glp1-india-market-2000-crore-tirzepatide-july-2026',
  'glp1-vision-loss-eye-risk-india-july-2026',
  'glp1-semaglutide-fatty-liver-cirrhosis-india-july-2026',
  'glp1-teens-adolescents-obesity-india-july-2026',
  'glp1-brain-reward-craving-oral-india-july-2026',
  'glp1-china-oral-pill-india-affordable-july-2026',
  'glp1-osteoarthritis-knee-joint-pain-india-july-2026',
  'glp1-sleep-apnea-kidney-heart-failure-india-july-2026',
  'glp1-alcohol-addiction-va-trial-india-august-2026',
  'glp1-cancer-progression-prevention-india-august-2026']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = []

  // ── CORE PAGES (highest priority) ──────────────────────────────────────────
  const corePagesHigh = [
    ['/', 1.0],
    ['/india', 0.95],
    ['/contact', 0.9],
    ['/about', 0.8],
    ['/blog', 0.85],
    ['/community', 0.85],
    ['/doctors', 0.8],
    ['/cities', 0.75],
    ['/medical-tourism', 0.85],
  ]
  corePagesHigh.forEach(([url, priority]) =>
    urls.push({ url: BASE + url, lastModified: now, changeFrequency: 'weekly', priority: priority as number })
  )

  // ── LEGAL PAGES ─────────────────────────────────────────────────────────────
  ;['/privacy-policy', '/terms-and-conditions', '/editorial-policy'].forEach(url =>
    urls.push({ url: BASE + url, lastModified: now, changeFrequency: 'yearly', priority: 0.4 })
  )

  // ── SPECIAL PAGES ───────────────────────────────────────────────────────────
  ;['/piles-symptoms-checker', '/circumcision-checker', '/piles-home-remedies',
    '/mtp-abortion', '/circumcision', '/partner/register'].forEach(url =>
    urls.push({ url: BASE + url, lastModified: now, changeFrequency: 'monthly', priority: 0.85 })
  )

  // ── MEDICAL TOURISM COUNTRIES ───────────────────────────────────────────────
  const tourismCountries = ['uae', 'saudi-arabia', 'oman', 'kuwait', 'bahrain', 'qatar', 'nigeria', 'kenya', 'ethiopia', 'ghana', 'tanzania', 'uganda']
  tourismCountries.forEach(country =>
    urls.push({ url: BASE + '/medical-tourism/' + country, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  )

  // ── DISEASE TREATMENT PAGES ─────────────────────────────────────────────────
  diseases.forEach(disease =>
    urls.push({ url: BASE + '/treatment/' + disease, lastModified: now, changeFrequency: 'weekly', priority: 0.9 })
  )

  // ── DISEASE COST ANALYSIS PAGES ─────────────────────────────────────────────
  diseases.forEach(disease =>
    urls.push({ url: BASE + '/treatment/' + disease + '/cost-analysis', lastModified: now, changeFrequency: 'weekly', priority: 0.85 })
  )

  // ── DISEASE + CITY PAGES ────────────────────────────────────────────────────
  diseases.forEach(disease =>
    cities.forEach(city =>
      urls.push({ url: BASE + '/treatment/' + disease + '/' + city, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
    )
  )

  // ── CITY PAGES ──────────────────────────────────────────────────────────────
  urls.push({ url: BASE + '/cities', lastModified: now, changeFrequency: 'monthly', priority: 0.75 })
  cities.forEach(city =>
    urls.push({ url: BASE + '/cities/' + city, lastModified: now, changeFrequency: 'monthly', priority: 0.75 })
  )

  // ── DOCTOR PAGES ────────────────────────────────────────────────────────────
  cities.forEach(city =>
    urls.push({ url: BASE + '/doctors/city/' + city, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
  )
  urls.push({ url: BASE + '/doctors/claim', lastModified: now, changeFrequency: 'yearly', priority: 0.5 })

  // ── BLOG POSTS ──────────────────────────────────────────────────────────────
  blogs.forEach(slug =>
    urls.push({ url: BASE + '/blog/' + slug, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  )

  // ── COMMUNITY PAGES ─────────────────────────────────────────────────────────
  urls.push({ url: BASE + '/community', lastModified: now, changeFrequency: 'daily', priority: 0.85 })

  return urls
}
