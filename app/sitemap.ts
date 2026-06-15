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
  'glp1-weight-loss-plateau-india-june-2026']

const doctors = ['dr-ashish-bhanot-proctologist-delhi', 'dr-mir-asif-proctologist-gurugram', 'dr-anil-sharma-proctologist-gurugram', 'dr-sunil-kumar-proctologist-noida', 'dr-rajan-babu-proctologist-kochi', 'dr-vikram-sharma-proctologist-mumbai', 'dr-krishna-iyer-proctologist-chennai', 'dr-rahul-gupta-proctologist-lucknow', 'dr-nitin-jha-laparoscopic-noida', 'dr-rakesh-kumar-laparoscopic-gurugram', 'dr-priya-nair-laparoscopic-gurugram', 'dr-lokendra-kumar-laparoscopic-noida', 'dr-vs-chauhan-laparoscopic-noida', 'dr-nitin-gupta-laparoscopic-noida', 'dr-arun-prasad-laparoscopic-delhi', 'dr-faisal-mumtaz-laparoscopic-delhi', 'dr-roji-philip-laparoscopic-mumbai', 'dr-ashok-borisa-laparoscopic-mumbai', 'dr-jagdish-chander-laparoscopic-noida', 'dr-manish-nigam-laparoscopic-noida', 'dr-rajiv-tandon-urologist-delhi', 'dr-avinash-koul-urologist-noida', 'dr-amit-khanna-urologist-noida', 'dr-sandeep-nunia-urologist-delhi', 'dr-anant-kumar-urologist-delhi', 'dr-rajan-menon-urologist-kochi', 'dr-dilip-raja-urologist-chennai', 'dr-suresh-patankar-urologist-pune', 'dr-sanjay-gogoi-urologist-mumbai', 'dr-meera-krishnan-gynaecologist-kochi', 'dr-sarah-thomas-gynaecologist-kochi', 'dr-nandita-palshetkar-gynaecologist-mumbai', 'dr-geeta-chadha-gynaecologist-delhi', 'dr-meenakshi-ahuja-gynaecologist-delhi', 'dr-shobha-gupta-gynaecologist-delhi', 'dr-rekha-wadhwani-gynaecologist-gurugram', 'dr-aruna-muralidhar-gynaecologist-bangalore', 'dr-suresh-malhotra-orthopaedic-delhi', 'dr-anoop-jhurani-orthopaedic-delhi', 'dr-gurinder-bedi-orthopaedic-delhi', 'dr-rajan-menon-orthopaedic-kochi', 'dr-subhash-jangid-orthopaedic-delhi', 'dr-ashok-rajgopal-orthopaedic-gurugram', 'dr-jayant-arora-orthopaedic-delhi', 'dr-pradeep-sharma-orthopaedic-pune', 'dr-kavita-rao-ophthalmologist-gurugram', 'dr-mahipal-sachdev-ophthalmologist-delhi', 'dr-anita-sethi-ophthalmologist-delhi', 'dr-anil-kulkarni-ophthalmologist-pune', 'dr-rajesh-venkatesh-ophthalmologist-bangalore', 'dr-kim-ramasamy-ophthalmologist-madurai', 'dr-rajat-gupta-aesthetic-delhi', 'dr-vivek-kumar-aesthetic-delhi', 'dr-debraj-shome-aesthetic-mumbai', 'dr-priti-shukla-aesthetic-bangalore', 'dr-rajesh-bharat-ent-delhi', 'dr-milind-kirtane-ent-mumbai', 'dr-smt-pillai-ent-kochi', 'dr-kiran-bala-ent-delhi', 'dr-satish-jain-ent-gurugram', 'dr-ashok-borisa-laparoscopic-pune', 'dr-kishore-raj-laparoscopic-bangalore', 'dr-ravi-shankar-laparoscopic-chennai', 'dr-sanjay-pandya-laparoscopic-ahmedabad', 'dr-saurabh-shrivastava-laparoscopic-indore', 'dr-sunita-varma-gynaecologist-lucknow', 'dr-kavitha-reddy-gynaecologist-vijayawada', 'dr-ramesh-babu-orthopaedic-vizag', 'dr-prakash-narayanan-ent-trivandrum', 'dr-sudarshan-ophthalmologist-coimbatore', 'dr-rajiv-kumar-laparoscopic-patna', 'dr-sanjay-gupta-laparoscopic-ranchi', 'dr-prashant-mishra-laparoscopic-raipur', 'dr-srikant-sahoo-laparoscopic-bhubaneswar']

const communityPages = ['is-laser-piles-surgery-painful-recovery', 'mtp-without-husband-permission-india-legal', 'hernia-surgery-recovery-time-desk-job', 'laser-circumcision-adult-recovery-time', 'knee-replacement-insurance-waiting-period', 'cataract-surgery-multifocal-lens-worth-it', 'mtp-pills-vs-surgical-which-better', 'piles-grade-3-laser-or-stapler', 'zsr-vs-laser-circumcision-difference', 'hernia-mesh-imported-vs-indian-difference']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = []

  // Static pages
  const statics: Array<[string, number, MetadataRoute.Sitemap[0]['changeFrequency']]> = [
    [BASE, 1.0, 'weekly'],
    [BASE + '/contact', 0.95, 'monthly'],
    [BASE + '/mtp-abortion', 0.95, 'weekly'],
    [BASE + '/circumcision', 0.95, 'weekly'],
    [BASE + '/doctors', 0.9, 'weekly'],
    [BASE + '/community', 0.9, 'daily'],
    [BASE + '/blog', 0.85, 'weekly'],
    [BASE + '/cities', 0.8, 'monthly'],
    [BASE + '/about', 0.6, 'monthly'],
    [BASE + '/doctors/claim', 0.7, 'monthly'],
  ]
  statics.forEach(([url, priority, changeFrequency]) =>
    urls.push({ url, lastModified: now, changeFrequency, priority })
  )

  // Disease main pages
  diseases.forEach(slug =>
    urls.push({ url: BASE + '/treatment/' + slug, lastModified: now, changeFrequency: 'weekly', priority: 0.9 })
  )

  // Disease cost-analysis pages
  diseases.forEach(slug =>
    urls.push({ url: BASE + '/treatment/' + slug + '/cost-analysis', lastModified: now, changeFrequency: 'weekly', priority: 0.85 })
  )

  // Disease x city cost pages
  diseases.forEach(slug =>
    cities.forEach(city =>
      urls.push({ url: BASE + '/treatment/' + slug + '/cost-' + city, lastModified: now, changeFrequency: 'weekly', priority: 0.85 })
    )
  )

  // City pages
  cities.forEach(city =>
    urls.push({ url: BASE + '/cities/' + city, lastModified: now, changeFrequency: 'weekly', priority: 0.8 })
  )

  // Doctor city pages
  cities.forEach(city =>
    urls.push({ url: BASE + '/doctors/city/' + city, lastModified: now, changeFrequency: 'weekly', priority: 0.75 })
  )

  // Blog posts
  blogs.forEach(slug =>
    urls.push({ url: BASE + '/blog/' + slug, lastModified: now, changeFrequency: 'monthly', priority: 0.75 })
  )

  // Doctor profiles
  doctors.forEach(slug =>
    urls.push({ url: BASE + '/doctors/' + slug, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
  )

  // Community Q&A pages
  // Legal and policy pages
  urls.push({ url: BASE + '/privacy-policy', lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 })
  urls.push({ url: BASE + '/terms-and-conditions', lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 })
  urls.push({ url: BASE + '/editorial-policy', lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 })

  // India homepage
  urls.push({ url: BASE + '/india', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 })

  // GLP-1 hub
  const glp1Pages = ['', '/ozempic', '/wegovy', '/mounjaro', '/generic', '/cost', '/research', '/side-effects', '/vs-bariatric']
  glp1Pages.forEach(p =>
    urls.push({ url: BASE + '/glp1' + p, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.95 })
  )

  // Symptom checkers and tools
  urls.push({ url: BASE + '/piles-symptoms-checker', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 })
  urls.push({ url: BASE + '/circumcision-checker', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 })
  urls.push({ url: BASE + '/piles-home-remedies', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })

  // Medical tourism pages
  urls.push({ url: BASE + '/medical-tourism', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 })
  const tourismCountries = ['uae', 'saudi-arabia', 'oman', 'kuwait', 'bahrain', 'qatar', 'nigeria', 'kenya', 'ethiopia', 'ghana', 'tanzania', 'uganda']
  tourismCountries.forEach(country =>
    urls.push({ url: BASE + '/medical-tourism/' + country, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 })
  )

  communityPages.forEach(slug =>
    urls.push({ url: BASE + '/community/' + slug, lastModified: now, changeFrequency: 'weekly', priority: 0.75 })
  )

  return urls
}
