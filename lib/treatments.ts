export type FAQ = {
  question: string
  answer: string
}

export type Treatment = {
  slug: string
  name: string
  specialty: string
  bodyLocation: string
  seoTitle: string
  seoDesc: string
  directAnswer: string
  description: string
  preparation: string
  howPerformed: string
  followup: string
  costRange: string
  duration: string
  stayDuration: string
  faqs: FAQ[]
  cities: string[]
  relatedTreatments: string[]
}

export const treatments: Treatment[] = [
  {
    slug: 'piles-laser-treatment',
    name: 'Piles Laser Treatment',
    specialty: 'General Surgery',
    bodyLocation: 'Rectum and Anus',
    seoTitle: 'Piles Laser Treatment in Delhi-NCR — Cost, Recovery and Top Surgeons | MySurgery',
    seoDesc: 'Piles laser treatment in Gurugram and Delhi costs 40000 to 80000 rupees. Painless 30-minute procedure, same-day discharge, covered by most insurance policies.',
    directAnswer: 'Piles laser treatment in Gurugram and Delhi costs 40000 to 80000 rupees depending on the grade of piles and hospital. The procedure takes 30 minutes and 95% of patients go home the same day.',
    description: 'Piles are swollen blood vessels in or around the rectum. Laser treatment shrinks the haemorrhoid tissue using a focused laser beam, with no cuts, no stitches, and minimal bleeding.',
    preparation: 'Fasting for 4 to 6 hours before surgery. Blood tests and a pre-operative consultation with the surgeon.',
    howPerformed: 'A laser probe is inserted into the haemorrhoid and delivers precise energy to shrink and close the blood vessels. No incisions are made.',
    followup: 'Patients go home within 4 to 6 hours. Return to desk work in 2 to 3 days, full recovery in 1 to 2 weeks.',
    costRange: 'Rs 40000 to Rs 80000',
    duration: '30 to 45 minutes',
    stayDuration: 'Same-day discharge',
    cities: ['gurugram', 'delhi', 'noida', 'faridabad'],
    relatedTreatments: ['hernia-repair-surgery', 'gallbladder-removal'],
    faqs: [
      {
        question: 'How much does piles laser surgery cost in Gurugram?',
        answer: 'Piles laser surgery in Gurugram costs between 40000 and 80000 rupees depending on the grade of piles and the hospital chosen.',
      },
      {
        question: 'Is piles laser treatment painful?',
        answer: 'No. The procedure is performed under anaesthesia. Most patients experience mild discomfort for 2 to 3 days after surgery.',
      },
      {
        question: 'Is piles laser surgery covered by health insurance in India?',
        answer: 'Yes. Covered by most policies including Star Health, HDFC Ergo, Bajaj Allianz, and ICICI Lombard.',
      },
      {
        question: 'How long is recovery after piles laser treatment?',
        answer: 'Return to desk work in 2 to 3 days. Full recovery takes 1 to 2 weeks.',
      },
      {
        question: 'Will piles come back after laser surgery?',
        answer: 'Recurrence rates are below 5% when combined with dietary changes after surgery.',
      },
      {
        question: 'Can piles be treated without surgery?',
        answer: 'Grade 1 and 2 piles may be managed with lifestyle changes. Grade 3 and 4 require surgery for permanent cure.',
      },
      {
        question: 'Which hospitals in Gurugram offer piles laser treatment?',
        answer: 'MySurgery partners with Narayana Hospital Gurugram, Medanta, Fortis Gurugram, and Apollo Miracle.',
      },
      {
        question: 'How do I book a free piles consultation in Gurugram?',
        answer: 'Call MySurgery or fill the consultation form. A care coordinator will call you within 30 minutes.',
      },
    ],
  },
  {
    slug: 'hernia-repair-surgery',
    name: 'Hernia Repair Surgery',
    specialty: 'General Surgery',
    bodyLocation: 'Abdomen',
    seoTitle: 'Hernia Repair Surgery in Delhi-NCR — Laparoscopic, Cost and Recovery | MySurgery',
    seoDesc: 'Laparoscopic hernia surgery in Delhi and Gurugram costs 45000 to 120000 rupees. Minimally invasive, same-day or next-day discharge. Expert surgeons, insurance supported.',
    directAnswer: 'Laparoscopic hernia repair in Delhi and Gurugram costs 45000 to 120000 rupees. The procedure takes 45 to 90 minutes and patients return to work in 5 to 7 days.',
    description: 'A hernia occurs when an organ pushes through a weak spot in surrounding muscle. Laparoscopic repair uses 3 small incisions and a mesh patch for faster healing and lower recurrence.',
    preparation: 'Fasting 6 hours before. Pre-op blood tests and ECG if above 40 years.',
    howPerformed: 'Under general anaesthesia, 3 small incisions of 5 to 10mm are made. The herniated tissue is pushed back and a mesh is placed to reinforce the muscle wall.',
    followup: 'Discharge within 12 to 24 hours. Return to desk work in 5 to 7 days. Avoid heavy lifting for 4 to 6 weeks.',
    costRange: 'Rs 45000 to Rs 120000',
    duration: '45 to 90 minutes',
    stayDuration: '1 night or same-day',
    cities: ['gurugram', 'delhi', 'noida', 'faridabad'],
    relatedTreatments: ['piles-laser-treatment', 'gallbladder-removal'],
    faqs: [
      {
        question: 'How much does laparoscopic hernia surgery cost in Delhi?',
        answer: 'Laparoscopic hernia repair in Delhi costs 45000 to 120000 rupees depending on hernia type and hospital.',
      },
      {
        question: 'Is laparoscopic hernia surgery better than open surgery?',
        answer: 'Yes for most patients. Smaller scars, less pain, and faster return to work in 5 to 7 days versus 3 to 4 weeks for open surgery.',
      },
      {
        question: 'Is hernia surgery covered by health insurance?',
        answer: 'Yes. Covered by all major insurance policies after the waiting period which is usually 2 years for hernia.',
      },
      {
        question: 'Can a hernia heal without surgery?',
        answer: 'No. A hernia does not heal on its own and will grow larger over time. Surgery is the only permanent cure.',
      },
      {
        question: 'How long does hernia surgery recovery take?',
        answer: 'Desk work in 5 to 7 days, driving in 1 to 2 weeks, gym in 4 to 6 weeks.',
      },
      {
        question: 'What are signs a hernia needs emergency surgery?',
        answer: 'Severe pain, nausea, vomiting, or a bulge that cannot be pushed back indicates strangulation. Seek emergency care immediately.',
      },
      {
        question: 'How many types of hernia are there?',
        answer: 'Common types are inguinal in the groin, umbilical at the belly button, hiatal in the upper stomach, and incisional at a surgery scar.',
      },
      {
        question: 'Will hernia come back after laparoscopic repair?',
        answer: 'Recurrence rates after laparoscopic mesh repair are below 2 to 5 percent.',
      },
    ],
  },
  {
    slug: 'knee-replacement-surgery',
    name: 'Knee Replacement Surgery',
    specialty: 'Orthopaedic Surgery',
    bodyLocation: 'Knee Joint',
    seoTitle: 'Knee Replacement Surgery in Delhi-NCR — Cost, Recovery and Best Surgeons | MySurgery',
    seoDesc: 'Knee replacement surgery in Delhi and Gurugram costs 150000 to 350000 rupees. Robotic-assisted options available. Insurance covered. Free consultation.',
    directAnswer: 'Knee replacement surgery in Delhi and Gurugram costs 150000 to 350000 rupees per knee. The procedure takes 1 to 2 hours and patients walk within 24 hours.',
    description: 'Knee replacement removes damaged cartilage and bone and replaces it with metal and plastic components. Over 95% of patients report significant pain relief.',
    preparation: 'Pre-op physiotherapy. Blood tests, ECG, chest X-ray. Stop blood thinners as advised by surgeon.',
    howPerformed: 'Under spinal or general anaesthesia, damaged knee surfaces are replaced with a prosthetic implant. Robotic-assisted surgery improves precision.',
    followup: 'Walking with support within 24 hours. Discharge in 3 to 5 days. Physiotherapy for 6 to 12 weeks.',
    costRange: 'Rs 150000 to Rs 350000',
    duration: '1 to 2 hours',
    stayDuration: '3 to 5 days',
    cities: ['gurugram', 'delhi', 'noida', 'faridabad'],
    relatedTreatments: ['hernia-repair-surgery'],
    faqs: [
      {
        question: 'How much does knee replacement cost in Gurugram?',
        answer: 'Knee replacement in Gurugram costs 150000 to 350000 rupees per knee depending on implant type and hospital.',
      },
      {
        question: 'Is knee replacement covered by insurance in India?',
        answer: 'Yes. Covered by most health insurance policies. Some have a 2 to 4 year waiting period for joint replacement.',
      },
      {
        question: 'How long is knee replacement recovery?',
        answer: 'Walk with support in 24 hours. Desk work in 4 to 6 weeks. Full recovery in 3 to 6 months.',
      },
      {
        question: 'What is the right age for knee replacement surgery?',
        answer: 'Most done for patients aged 60 to 80 but severity of pain and daily life impact matters more than age.',
      },
      {
        question: 'How long do knee implants last?',
        answer: 'Modern implants last 15 to 25 years. High-quality imported implants generally have longer survival rates.',
      },
    ],
  },
  {
    slug: 'cataract-surgery',
    name: 'Cataract Surgery',
    specialty: 'Ophthalmology',
    bodyLocation: 'Eye',
    seoTitle: 'Cataract Surgery in Delhi-NCR — Cost, Procedure and Recovery | MySurgery',
    seoDesc: 'Cataract surgery in Delhi and Gurugram costs 25000 to 60000 rupees per eye. Blade-free procedure. Same-day. Insurance covered.',
    directAnswer: 'Cataract surgery in Delhi and Gurugram costs 25000 to 60000 rupees per eye. The procedure takes 15 to 20 minutes and vision improves within 24 to 48 hours.',
    description: 'A cataract is a clouding of the natural lens. Phacoemulsification removes the cloudy lens using ultrasound and replaces it with a clear artificial lens. Success rate is over 99%.',
    preparation: 'Eye drops for 3 days before surgery. Fasting for 4 hours. No driving on the day of surgery.',
    howPerformed: 'Under local anaesthesia from eye drops, a tiny 2.2mm incision is made. The cloudy lens is removed and an artificial lens is inserted. No stitches required.',
    followup: 'Eye shield for first night. Eye drops for 4 weeks. Vision stabilises in 1 to 7 days. Avoid water in eyes for 2 weeks.',
    costRange: 'Rs 25000 to Rs 60000 per eye',
    duration: '15 to 20 minutes per eye',
    stayDuration: 'Same-day, no admission',
    cities: ['gurugram', 'delhi', 'noida', 'faridabad'],
    relatedTreatments: ['hernia-repair-surgery'],
    faqs: [
      {
        question: 'How much does cataract surgery cost in Delhi?',
        answer: 'Cataract surgery in Delhi costs 25000 to 60000 rupees per eye depending on the lens type chosen.',
      },
      {
        question: 'Is cataract surgery painful?',
        answer: 'No. Performed under local anaesthesia using eye drops. You are awake but feel no pain.',
      },
      {
        question: 'Is cataract surgery covered by insurance?',
        answer: 'Yes. Covered by all major health insurance policies in India.',
      },
      {
        question: 'When should I get cataract surgery?',
        answer: 'When the cataract affects daily activities like reading, driving at night, or recognising faces.',
      },
      {
        question: 'Can both eyes be done the same day?',
        answer: 'Generally recommended to operate one eye at a time with a 1 to 2 week gap between eyes.',
      },
    ],
  },
  {
    slug: 'gallbladder-removal',
    name: 'Gallbladder Removal Surgery',
    specialty: 'General Surgery',
    bodyLocation: 'Abdomen',
    seoTitle: 'Gallbladder Removal Surgery Delhi-NCR — Laparoscopic, Cost and Recovery | MySurgery',
    seoDesc: 'Laparoscopic gallbladder removal in Delhi and Gurugram costs 50000 to 90000 rupees. Same-day or next-day discharge. Covered by insurance.',
    directAnswer: 'Laparoscopic gallbladder removal in Delhi and Gurugram costs 50000 to 90000 rupees. The procedure takes 45 to 60 minutes and most patients go home the same day.',
    description: 'When gallstones form they cause severe pain and infection. Laparoscopic cholecystectomy removes the gallbladder through 3 to 4 tiny incisions. You can live a completely normal life without a gallbladder.',
    preparation: 'Fasting for 6 to 8 hours. Blood tests, ultrasound, surgeon consultation.',
    howPerformed: 'Under general anaesthesia, 3 to 4 small incisions of 5 to 10mm are made. The gallbladder is clipped and removed through one of the incisions.',
    followup: 'Most patients go home the same evening. Return to desk work in 5 to 7 days. Normal diet within 2 weeks.',
    costRange: 'Rs 50000 to Rs 90000',
    duration: '45 to 60 minutes',
    stayDuration: 'Same-day or 1 night',
    cities: ['gurugram', 'delhi', 'noida', 'faridabad'],
    relatedTreatments: ['hernia-repair-surgery', 'piles-laser-treatment'],
    faqs: [
      {
        question: 'How much does gallbladder removal cost in Delhi?',
        answer: 'Laparoscopic gallbladder removal in Delhi costs 50000 to 90000 rupees depending on the hospital.',
      },
      {
        question: 'Can I live normally without a gallbladder?',
        answer: 'Yes. The liver produces bile continuously and flows directly to the small intestine. Most people live completely normally after removal.',
      },
      {
        question: 'Is gallbladder surgery covered by insurance?',
        answer: 'Yes. Covered by all major health insurance policies in India.',
      },
      {
        question: 'What happens if gallstones are left untreated?',
        answer: 'Untreated gallstones can lead to cholecystitis, pancreatitis, jaundice, and rarely gallbladder cancer.',
      },
      {
        question: 'How long after surgery can I eat normally?',
        answer: 'Soft foods within 24 hours. Normal diet within 1 to 2 weeks. Avoid fatty foods for 4 to 6 weeks.',
      },
    ],
  },
  {
    slug: "mtp-abortion-treatment",
    name: "MTP and Abortion Treatment",
    specialty: "Gynecology",
    bodyLocation: "Uterus",
    seoTitle: "MTP Abortion Treatment in Delhi-NCR and Kochi — Medical and Surgical | MySurgery",
    seoDesc: "Safe and confidential MTP in Delhi, Gurugram, Noida and Kochi. Medical abortion pills and surgical procedures D&C and S&E. Free consultation with experienced gynaecologist.",
    directAnswer: "MTP (Medical Termination of Pregnancy) in Delhi-NCR costs Rs 5000 to Rs 25000 depending on weeks of pregnancy and method. Medical abortion pills are available up to 9 weeks. Surgical procedures D&C and S&E are available up to 20 weeks as per MTP Act India.",
    description: "MTP (Medical Termination of Pregnancy) is a safe and legal procedure in India under the MTP Act. MySurgery provides confidential access to experienced gynaecologists for both medical abortion using pills and surgical procedures including D&C and S&E.",
    preparation: "Ultrasound to confirm gestational age. Blood group and Rh factor test. Haemoglobin test. Doctor consultation to determine best method based on weeks of pregnancy.",
    howPerformed: "Medical abortion uses mifepristone and misoprostol pills taken under medical supervision up to 9 weeks. Surgical abortion uses suction and evacuation S&E or dilation and curettage D&C under local or general anaesthesia completed in 10 to 15 minutes.",
    followup: "Follow-up ultrasound after 2 weeks to confirm complete termination. Rest for 1 to 2 days. Normal activities resume within 2 to 3 days. Menstrual cycle returns in 4 to 6 weeks.",
    costRange: "Rs 5000 to Rs 25000",
    duration: "10 to 30 minutes surgical or 1 to 3 days medical",
    stayDuration: "Same-day discharge",
    cities: ["gurugram", "delhi", "noida", "faridabad", "kochi"],
    relatedTreatments: ["hernia-repair-surgery"],
    faqs: [
      {
        question: "Is abortion legal in India?",
        answer: "Yes. Abortion is legal in India under the MTP Act 1971 amended in 2021. A woman can terminate a pregnancy up to 20 weeks with one doctor approval. MySurgery connects patients with registered gynaecologists for safe and legal MTP.",
      },
      {
        question: "What is the cost of abortion in Delhi and Gurugram?",
        answer: "Medical abortion pills cost Rs 5000 to Rs 10000. Surgical abortion D&C or S&E costs Rs 10000 to Rs 25000 depending on gestational age and hospital. MySurgery provides transparent pricing before the procedure.",
      },
      {
        question: "What is the difference between medical and surgical abortion?",
        answer: "Medical abortion uses pills and is available up to 9 weeks. It is non-invasive but takes 1 to 3 days to complete. Surgical abortion D&C or S&E is a quick 10 to 15 minute procedure done under anaesthesia and is available up to 20 weeks.",
      },
      {
        question: "Is the procedure confidential?",
        answer: "Yes. MySurgery maintains complete confidentiality. Patient information is never shared with anyone. All procedures are performed at registered hospitals by qualified gynaecologists in a safe and private environment.",
      },
      {
        question: "What is D&C Dilation and Curettage?",
        answer: "D&C is a surgical procedure where the cervix is dilated and a curette removes the contents of the uterus. It is performed under local or general anaesthesia and takes 10 to 15 minutes.",
      },
      {
        question: "What is S&E Suction and Evacuation?",
        answer: "S&E uses gentle suction to empty the uterus. It is the preferred surgical method for early termination up to 12 weeks. It is safer than sharp curettage and takes 5 to 10 minutes under local anaesthesia.",
      },
      {
        question: "How many weeks of pregnancy can be terminated?",
        answer: "Medical abortion with pills is available up to 9 weeks. Surgical abortion is available up to 20 weeks with one registered doctor approval as per MTP Act India 2021.",
      },
      {
        question: "Is MTP covered by health insurance in India?",
        answer: "Some health insurance policies cover MTP when medically indicated. Coverage varies by policy. MySurgery helps patients check their insurance coverage and explore payment options.",
      },
    ],
  },
]

export async function getTreatmentBySlug(slug: string): Promise<Treatment | undefined> {
  return treatments.find((t) => t.slug === slug)
}

export async function getAllTreatmentSlugs(): Promise<string[]> {
  return treatments.map((t) => t.slug)
}

export async function getTreatmentsByCity(city: string): Promise<Treatment[]> {
  return treatments.filter((t) => t.cities.includes(city))
}

export async function getRelatedTreatments(slugs: string[]): Promise<Treatment[]> {
  return treatments.filter((t) => slugs.includes(t.slug))
}
