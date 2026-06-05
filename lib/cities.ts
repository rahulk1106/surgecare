export type City = {
  slug: string
  name: string
  state: string
  phone: string
  hospitalCount: number
  surgeonCount: number
  hospitals: string[]
  treatments: string[]
}

export const cities: City[] = [
  {
    slug: 'gurugram',
    name: 'Gurugram',
    state: 'Haryana',
    phone: '+91-8588967050',
    hospitalCount: 15,
    surgeonCount: 40,
    hospitals: [
      'Narayana Hospital Gurugram',
      'Medanta The Medicity',
      'Fortis Memorial Research Institute',
      'Apollo Miracle Gurugram',
      'Paras Hospital Gurugram',
    ],
    treatments: [
      'piles-laser-treatment',
      'hernia-repair-surgery',
      'knee-replacement-surgery',
      'cataract-surgery',
      'gallbladder-removal',
    ],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    phone: '+91-8588967050',
    hospitalCount: 25,
    surgeonCount: 80,
    hospitals: [
      'Apollo Hospital Delhi',
      'Max Super Speciality Hospital',
      'Fortis Vasant Kunj',
      'BLK-Max Super Speciality Hospital',
      'Sir Ganga Ram Hospital',
    ],
    treatments: [
      'piles-laser-treatment',
      'hernia-repair-surgery',
      'knee-replacement-surgery',
      'gallbladder-removal',
      'cataract-surgery',
    ],
  },
  {
    slug: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    phone: '+91-8588967050',
    hospitalCount: 10,
    surgeonCount: 30,
    hospitals: [
      'Jaypee Hospital Noida',
      'Fortis Hospital Noida',
      'Apollo Hospitals Noida',
      'Felix Hospital Noida',
    ],
    treatments: [
      'piles-laser-treatment',
      'hernia-repair-surgery',
      'cataract-surgery',
      'gallbladder-removal',
    ],
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    state: 'Haryana',
    phone: '+91-8588967050',
    hospitalCount: 8,
    surgeonCount: 20,
    hospitals: [
      'Sarvodaya Hospital Faridabad',
      'Asian Institute of Medical Sciences',
      'Metro Hospital Faridabad',
    ],
    treatments: [
      'piles-laser-treatment',
      'hernia-repair-surgery',
      'gallbladder-removal',
    ],
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    phone: "+91-8588967050",
    hospitalCount: 8,
    surgeonCount: 25,
    hospitals: [
      "Aster Medcity Kochi",
      "Amrita Institute of Medical Sciences",
      "Lakeshore Hospital Kochi",
      "KIMS Hospital Kochi",
      "Medical Trust Hospital Kochi",
    ],
    treatments: [
      "piles-laser-treatment",
      "hernia-repair-surgery",
      "cataract-surgery",
      "gallbladder-removal",
      "mtp-abortion-treatment",
    ],
  },
]

export async function getCityData(slug: string): Promise<City | undefined> {
  return cities.find((c) => c.slug === slug)
}

export async function getAllCitySlugs(): Promise<string[]> {
  return cities.map((c) => c.slug)
}
