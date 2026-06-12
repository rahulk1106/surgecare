import React from 'react'

export type FAQItem = { q: string; a: string }

/**
 * Reusable FAQ section with FAQPage JSON-LD schema for rich results.
 * Server-compatible (no hooks) — uses native <details> for expand/collapse.
 */
export default function GLP1FAQ({ faqs, accent = '#1d4ed8' }: { faqs: FAQItem[]; accent?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section style={{ background: 'white', borderRadius: '16px', padding: '32px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {faqs.map(f => (
          <details key={f.q} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px 18px' }}>
            <summary style={{ fontSize: '15px', fontWeight: 700, color: accent, cursor: 'pointer' }}>{f.q}</summary>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, marginTop: '10px', marginBottom: 0 }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
