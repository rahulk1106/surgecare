'use client'
import LeadForm from './LeadForm'

export default function CityLeadForm({ procedure, city, sourcePage }: { procedure: string; city: string; sourcePage: string }) {
  return (
    <LeadForm
      procedure={procedure}
      city={city}
      title={'Get Exact Cost in ' + city}
      subtitle={'Free callback in 30 minutes. Transparent pricing. No hidden charges.'}
    />
  )
}
