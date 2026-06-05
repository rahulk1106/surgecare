// ─────────────────────────────────────────────────────────────────────────────
// GLP-1 MASTER DATA — Single source of truth for all GLP-1 content
// ─────────────────────────────────────────────────────────────────────────────

export type GLP1Drug = {
  slug: string
  name: string
  genericName: string
  manufacturer: string
  type: 'branded' | 'generic'
  indication: ('diabetes' | 'weight-loss' | 'both')[]
  approvedInIndia: boolean
  approvalDate: string
  form: string
  doses: { strength: string; pricePerWeek: number; pricePerMonth: number }[]
  mechanism: string
  weightLoss: string
  hba1cReduction: string
  cardioProtection: boolean
  tagline: string
  color: string
  pros: string[]
  cons: string[]
}

export type GLP1Research = {
  id: string
  title: string
  finding: string
  type: 'benefit' | 'risk' | 'neutral'
  source: string
  year: number
  category: string
}

export type GLP1Controversy = {
  id: string
  title: string
  concern: string
  verdict: 'confirmed' | 'likely' | 'disputed' | 'debunked'
  detail: string
  verdictColor: string
}

export type GenericBrand = {
  brand: string
  company: string
  form: string
  pricePerWeek: number
  available: boolean
}

// ── DRUGS ─────────────────────────────────────────────────────────────────────

export const glp1Drugs: GLP1Drug[] = [
  {
    slug: 'ozempic',
    name: 'Ozempic',
    genericName: 'Semaglutide 0.5mg / 1mg / 2mg',
    manufacturer: 'Novo Nordisk',
    type: 'branded',
    indication: ['diabetes', 'weight-loss'],
    approvedInIndia: true,
    approvalDate: 'December 2025',
    form: 'Weekly injection (pen)',
    doses: [
      { strength: '0.25mg (starter)', pricePerWeek: 708, pricePerMonth: 2832 },
      { strength: '0.5mg', pricePerWeek: 1415, pricePerMonth: 5660 },
      { strength: '1mg', pricePerWeek: 1415, pricePerMonth: 5660 },
      { strength: '2mg', pricePerWeek: 2000, pricePerMonth: 8000 },
    ],
    mechanism: 'GLP-1 receptor agonist — stimulates insulin release, suppresses glucagon, slows gastric emptying, reduces appetite',
    weightLoss: '10–15% body weight over 68 weeks',
    hba1cReduction: '1.5–2.0%',
    cardioProtection: true,
    tagline: 'The original. Gold-standard GLP-1 for diabetes with proven cardiovascular benefits.',
    color: '#1d4ed8',
    pros: ['Proven 5+ year safety data', 'SUSTAIN trials show cardiovascular protection', 'Once weekly — easy to use', 'Now available in India (Dec 2025)', 'Price cut 36% in April 2026'],
    cons: ['Still expensive (₹5,660+/month)', 'No insurance coverage in India', 'Nausea common in first 4–8 weeks', 'Requires prescription from endocrinologist'],
  },
  {
    slug: 'wegovy',
    name: 'Wegovy',
    genericName: 'Semaglutide 2.4mg',
    manufacturer: 'Novo Nordisk',
    type: 'branded',
    indication: ['weight-loss'],
    approvedInIndia: true,
    approvalDate: 'June 2025',
    form: 'Weekly injection (pen)',
    doses: [
      { strength: '0.25mg (starter)', pricePerWeek: 1415, pricePerMonth: 5660 },
      { strength: '0.5mg', pricePerWeek: 1800, pricePerMonth: 7200 },
      { strength: '1.0mg', pricePerWeek: 2200, pricePerMonth: 8800 },
      { strength: '1.7mg', pricePerWeek: 3000, pricePerMonth: 12000 },
      { strength: '2.4mg (maintenance)', pricePerWeek: 3500, pricePerMonth: 14000 },
    ],
    mechanism: 'Higher-dose semaglutide specifically approved for chronic weight management',
    weightLoss: '15–17% body weight over 68 weeks (STEP trials)',
    hba1cReduction: '1.8–2.2%',
    cardioProtection: true,
    tagline: 'Highest approved semaglutide dose. Maximum weight loss. FDA-approved for obesity.',
    color: '#7c3aed',
    pros: ['Highest weight loss of any semaglutide (15–17%)', 'First semaglutide specifically approved for obesity in India', 'SELECT trial: 20% reduction in cardiovascular events', 'Price cut 48% in April 2026'],
    cons: ['Most expensive branded option (₹5,660–14,000/month)', 'Higher dose = more GI side effects', 'Weight regain common after stopping', 'No insurance coverage in India'],
  },
  {
    slug: 'mounjaro',
    name: 'Mounjaro',
    genericName: 'Tirzepatide 2.5mg–15mg',
    manufacturer: 'Eli Lilly',
    type: 'branded',
    indication: ['diabetes', 'weight-loss'],
    approvedInIndia: true,
    approvalDate: 'August 2025',
    form: 'Weekly injection (KwikPen)',
    doses: [
      { strength: '2.5mg (starter)', pricePerWeek: 3281, pricePerMonth: 13125 },
      { strength: '5mg', pricePerWeek: 4102, pricePerMonth: 16406 },
      { strength: '7.5mg', pricePerWeek: 5156, pricePerMonth: 20625 },
      { strength: '10mg', pricePerWeek: 5156, pricePerMonth: 20625 },
      { strength: '12.5mg', pricePerWeek: 6445, pricePerMonth: 25781 },
      { strength: '15mg (max)', pricePerWeek: 6445, pricePerMonth: 25781 },
    ],
    mechanism: 'Dual GIP + GLP-1 receptor agonist — activates TWO incretin receptors for greater effect',
    weightLoss: '20–22% body weight over 72 weeks (SURMOUNT trials)',
    hba1cReduction: '2.0–2.5%',
    cardioProtection: true,
    tagline: 'Dual GIP+GLP-1 agonist. The most powerful weight loss drug approved anywhere in the world.',
    color: '#0891b2',
    pros: ['Most powerful weight loss: 20–22% body weight', 'Dual mechanism (GIP + GLP-1) for superior results', 'Best HbA1c reduction for diabetes', 'SURMOUNT-1 trial: 22.5% weight loss at max dose', 'Cardiovascular protection (SURPASS-CVOT)'],
    cons: ['Most expensive (₹13,125–25,781/month)', 'No generic available yet in India', 'Newer drug — less long-term safety data', 'Higher rate of GI side effects at higher doses'],
  },
]

// ── GENERIC BRANDS ────────────────────────────────────────────────────────────

export const genericBrands: GenericBrand[] = [
  { brand: 'GLIPIQ', company: 'Glenmark', form: 'Vial', pricePerWeek: 325, available: true },
  { brand: 'Semanat', company: 'Natco Pharma', form: 'Vial', pricePerWeek: 325, available: true },
  { brand: 'Semafull', company: 'Natco Pharma', form: 'Pen', pricePerWeek: 1125, available: true },
  { brand: 'Noveltreat', company: 'Sun Pharma', form: 'Pen', pricePerWeek: 900, available: true },
  { brand: 'Obeda', company: 'Dr. Reddy\'s', form: 'Pen', pricePerWeek: 850, available: true },
  { brand: 'Usema', company: 'USV', form: 'Vial', pricePerWeek: 400, available: true },
  { brand: 'Semaglyn', company: 'Zydus', form: 'Pen', pricePerWeek: 950, available: true },
  { brand: 'Semasize', company: 'Alkem', form: 'Pen', pricePerWeek: 880, available: true },
  { brand: 'Semabest', company: 'MSN Labs', form: 'Pen', pricePerWeek: 800, available: true },
  { brand: 'Samakind', company: 'Mankind', form: 'Pen', pricePerWeek: 920, available: true },
  { brand: 'Semalix', company: 'Torrent', form: 'Pen + Oral', pricePerWeek: 1000, available: true },
  { brand: 'Sembolic', company: 'Torrent', form: 'Oral tablet', pricePerWeek: 600, available: true },
]

// ── RESEARCH ──────────────────────────────────────────────────────────────────

export const glp1Research: GLP1Research[] = [
  {
    id: 'cardio-1',
    title: 'Major cardiovascular protection',
    finding: 'GLP-1 drugs reduce risk of heart attack and stroke by 14–20% in people with cardiovascular disease. The SELECT trial (Wegovy) showed 20% reduction in major cardiovascular events.',
    type: 'benefit',
    source: 'NEJM / SELECT Trial 2024',
    year: 2024,
    category: 'Heart & Cardiovascular',
  },
  {
    id: 'kidney-1',
    title: 'Kidney protection in diabetes',
    finding: 'GLP-1 receptor agonists reduce albuminuria and risk of end-stage kidney disease. FLOW trial showed semaglutide reduced kidney failure risk by 24% in people with Type 2 diabetes and chronic kidney disease.',
    type: 'benefit',
    source: 'FLOW Trial / NEJM 2024',
    year: 2024,
    category: 'Kidney',
  },
  {
    id: 'addiction-1',
    title: 'Reduces addiction — alcohol, opioids, gambling',
    finding: 'Multiple observational studies show GLP-1 users have significantly lower rates of alcohol use disorder, opioid overdose, and gambling disorder. GLP-1 receptors in the brain\'s reward circuit may reduce addictive cravings.',
    type: 'benefit',
    source: 'Nature Medicine / ScienceDaily 2026',
    year: 2026,
    category: 'Brain & Mental Health',
  },
  {
    id: 'dementia-1',
    title: 'Possible protection against Alzheimer\'s',
    finding: 'Early research suggests GLP-1 drugs may improve brain blood flow and reduce amyloid protein buildup associated with Alzheimer\'s. Clinical trials are underway. Results expected 2026–2028.',
    type: 'benefit',
    source: 'The Lancet / eClinicalMedicine 2025',
    year: 2025,
    category: 'Brain & Mental Health',
  },
  {
    id: 'cancer-1',
    title: 'Reduced breast cancer incidence',
    finding: 'GLP-1 receptor agonists were associated with a modest but statistically significant reduction in hormone receptor-positive breast cancer incidence. ASCO 2026 research confirms the finding in non-diabetic women with BMI 25–35.',
    type: 'benefit',
    source: 'ASCO 2026 / CancerNetwork',
    year: 2026,
    category: 'Cancer',
  },
  {
    id: 'liver-1',
    title: 'Reverses fatty liver disease (NASH)',
    finding: 'Semaglutide and tirzepatide both show significant improvement in NASH (Non-Alcoholic Steatohepatitis). ESSENCE trial showed semaglutide resolved NASH in 62% of patients vs 34% on placebo.',
    type: 'benefit',
    source: 'ESSENCE Trial / NEJM 2024',
    year: 2024,
    category: 'Liver',
  },
  {
    id: 'lung-1',
    title: 'Improved lung health in obesity',
    finding: 'GLP-1 drugs reduce airway inflammation and oxidative stress, potentially benefiting patients with obesity-related asthma and sleep apnea. Studies show significant reduction in sleep apnea severity.',
    type: 'benefit',
    source: 'MedicalXpress / SURMOUNT-OSA Trial 2026',
    year: 2026,
    category: 'Lung & Respiratory',
  },
  {
    id: 'thyroid-1',
    title: 'Medullary thyroid cancer risk',
    finding: 'FDA black box warning: GLP-1 drugs caused medullary thyroid carcinoma in animal studies. Human evidence is mixed — no confirmed causal link in humans but the risk cannot be ruled out. Contraindicated in people with personal or family history of MTC.',
    type: 'risk',
    source: 'FDA Warning / NCM PMC 2023',
    year: 2023,
    category: 'Thyroid & Endocrine',
  },
  {
    id: 'muscle-1',
    title: 'Significant muscle loss with rapid weight loss',
    finding: 'Up to 25–40% of weight lost on GLP-1 drugs can be muscle mass, not fat. This is a concern especially for older adults. Resistance training and high protein intake (1.2–1.6g/kg) can significantly reduce muscle loss.',
    type: 'risk',
    source: 'AAOS 2026 / NCM PMC 2025',
    year: 2025,
    category: 'Muscle & Bone',
  },
  {
    id: 'regain-1',
    title: 'Weight regain after stopping',
    finding: 'Systematic review shows patients regain 50–70% of lost weight within 1–2 years of stopping GLP-1 drugs. The drug does not cure obesity — it controls it. Lifelong use may be necessary for sustained benefit.',
    type: 'risk',
    source: 'medrxiv Systematic Review 2025',
    year: 2025,
    category: 'Weight Management',
  },
  {
    id: 'bone-1',
    title: 'Possible bone density concerns',
    finding: 'GLP-1 drugs may be associated with increased risk of osteoporosis, gout, and osteomalacia with long-term use, especially when significant muscle mass is lost. DEXA scan recommended for patients on long-term therapy.',
    type: 'risk',
    source: 'AAOS Annual Meeting 2026',
    year: 2026,
    category: 'Muscle & Bone',
  },
  {
    id: 'pancreatitis-1',
    title: 'Pancreatitis risk — largely debunked',
    finding: 'Early concerns about acute pancreatitis have been largely dispelled by long-term clinical trials. The absolute risk increase, if any, is very small. Caution in patients with prior pancreatitis history.',
    type: 'neutral',
    source: 'NCM PMC 2026 Umbrella Review',
    year: 2026,
    category: 'Gastrointestinal',
  },
]

// ── CONTROVERSIES ─────────────────────────────────────────────────────────────

export const glp1Controversies: GLP1Controversy[] = [
  {
    id: 'regain',
    title: 'The weight regain problem',
    concern: 'Patients regain most weight after stopping the drug',
    verdict: 'confirmed',
    verdictColor: '#dc2626',
    detail: 'Multiple studies confirm 50–70% weight regain within 1–2 years of stopping. This raises the question: is this a lifelong medication? The cost and side effect burden of lifetime use is significant. Critics argue GLP-1 companies benefit from creating permanent customers.',
  },
  {
    id: 'muscle',
    title: 'Muscle wasting — the hidden danger',
    concern: 'GLP-1 drugs cause significant muscle loss, not just fat loss',
    verdict: 'confirmed',
    verdictColor: '#dc2626',
    detail: 'Up to 25–40% of weight lost on GLP-1 drugs is muscle, not fat. In older adults, this muscle loss (sarcopenia) can increase fall risk, weaken immune function, and worsen long-term metabolic health. The drug\'s label does not warn about this prominently.',
  },
  {
    id: 'thyroid',
    title: 'Thyroid cancer — real risk or animal data?',
    concern: 'GLP-1 drugs may cause thyroid cancer',
    verdict: 'disputed',
    verdictColor: '#d97706',
    detail: 'The FDA black box warning is based on rodent studies where doses were much higher than human doses. Human epidemiological data has not confirmed increased papillary or follicular thyroid cancer. Medullary thyroid cancer risk in humans remains under study. Currently contraindicated if you have personal or family history of MTC.',
  },
  {
    id: 'compounding',
    title: 'The compounding drug crisis',
    concern: 'Unregulated compounded GLP-1 drugs are flooding the market globally',
    verdict: 'confirmed',
    verdictColor: '#dc2626',
    detail: 'During global shortages of Ozempic and Wegovy, compounding pharmacies began making semaglutide copies. The FDA has found hundreds of adverse events and some deaths linked to compounded products. In India, the generic market launched after patent expiry is regulated by CDSCO, but the quality gap between brands varies significantly.',
  },
  {
    id: 'india-prescribing',
    title: 'India\'s prescribing controversy',
    concern: 'GLP-1 drugs being prescribed without proper medical supervision in India',
    verdict: 'confirmed',
    verdictColor: '#dc2626',
    detail: 'The Indian Medical Association (IMA) raised concerns in early 2026 about GLP-1 drugs being prescribed by non-specialists and even dispensed without prescriptions. The Ministry of Health issued guidance in April 2026 confirming GLP-1 drugs are prescription-only and should be prescribed only by endocrinologists for appropriate patients.',
  },
  {
    id: 'equity',
    title: 'The affordability crisis',
    concern: 'GLP-1 drugs are out of reach for most Indians despite being made in India',
    verdict: 'confirmed',
    verdictColor: '#dc2626',
    detail: 'Even with generics at ₹325/week (₹1,290/month), long-term GLP-1 use costs ₹15,500+ per year — unaffordable for most Indians. Branded versions cost ₹60,000–1,70,000 per year. No health insurance in India covers GLP-1 for obesity. The drugs are largely accessible only to upper-middle-class urban patients.',
  },
  {
    id: 'bariatric',
    title: 'GLP-1 vs bariatric surgery — which is better?',
    concern: 'Do GLP-1 drugs make bariatric surgery obsolete?',
    verdict: 'disputed',
    verdictColor: '#d97706',
    detail: 'GLP-1 drugs achieve 15–22% weight loss vs 25–35% for bariatric surgery. Surgery is a one-time cost vs lifetime drug cost. Surgery has no weight regain issue. However, GLP-1 drugs are non-invasive and have fewer immediate risks. For patients with BMI 35–40, GLP-1 may be a valid alternative. For BMI 40+, surgery still has superior outcomes.',
  },
]

// ── ELIGIBILITY CRITERIA ──────────────────────────────────────────────────────

export const glp1Eligibility = {
  diabetes: {
    bmi: 'Any BMI with Type 2 diabetes',
    hba1c: 'HbA1c above 7% despite other medications',
    conditions: ['Type 2 diabetes', 'Pre-diabetes with high cardiovascular risk'],
    contraindications: ['Type 1 diabetes', 'Personal/family history of medullary thyroid cancer', 'MEN2 syndrome', 'Pancreatitis history (caution)', 'Pregnancy'],
  },
  weightLoss: {
    bmi: 'BMI ≥30, or BMI ≥27 with at least one weight-related comorbidity',
    conditions: ['Obesity (BMI ≥30)', 'Overweight (BMI ≥27) with diabetes, hypertension, or heart disease'],
    contraindications: ['Personal/family history of medullary thyroid cancer', 'MEN2 syndrome', 'Pregnancy', 'Severe GI disease'],
  },
}

// ── INDIA MARKET DATA ─────────────────────────────────────────────────────────

export const indiaMarketData = {
  marketSize: '₹2,000 crore by 2027 (projected)',
  genericBrandsLaunched: '20+',
  patentExpiry: 'March 20, 2026',
  regulatoryBody: 'CDSCO (Central Drugs Standard Control Organisation)',
  prescribingGuidelines: 'Ministry of Health & Family Welfare, April 2026 — prescription only by endocrinologists',
  insuranceCoverage: 'None — no IRDAI-regulated policy covers GLP-1 for obesity as of June 2026',
  priceRange: {
    generic: '₹325–1,000/week',
    branded: '₹1,415–6,445/week',
  },
}
