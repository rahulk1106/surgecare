'use client'
import LeadForm from './LeadForm'

export default function BlogCTA({ procedure }: { procedure?: string }) {
  return (
    <div style={{margin: '32px 0'}}>
      <LeadForm
        procedure={procedure}
        dark={true}
        title={'Get Free ' + (procedure || 'Surgery') + ' Consultation'}
        subtitle={'Speak to a specialist — callback within 30 minutes. Free, confidential.'}
      />
    </div>
  )
}
