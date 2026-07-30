import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import BlogCTA from "@/components/forms/BlogCTA"

export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title + " | MySurgery",
    description: post.quickAnswer.slice(0, 155),
    alternates: { canonical: "/blog/" + slug },
    openGraph: { title: post.title, description: post.quickAnswer.slice(0, 155), type: "article" },
  }
}

// Map categories to Unsplash images
const categoryImages: Record<string, string> = {
  "Gynecology": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  "Urology": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  "General Surgery": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  "Laparoscopy": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  "Orthopaedics": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
  "Ophthalmology": "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
  "Patient Guide": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  "default": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  const allPosts = await getAllBlogPosts()
  const related = allPosts
    .filter(p => p.slug !== slug && (p.category === post.category || p.procedure === post.procedure))
    .slice(0, 3)

  const heroImage = categoryImages[post.category] || categoryImages["default"]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.quickAnswer,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author, jobTitle: post.authorTitle },
    publisher: { "@type": "Organization", name: "MySurgery", url: "https://mysurgery.in" },
    mainEntityOfPage: "https://mysurgery.in/blog/" + slug,
    keywords: post.keywords.join(", "),
    image: heroImage,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{ "@type": "Question", name: post.title, acceptedAnswer: { "@type": "Answer", text: post.quickAnswer } }],
  }

  // Split body into paragraphs, inject CTAs every ~6 paragraphs
  const paragraphs = post.body.split("\n\n").filter(p => p.trim())
  const elements: Array<{type: string; content: string; index: number}> = []
  paragraphs.forEach((para, i) => {
    elements.push({type: 'para', content: para, index: i})
    if ((i + 1) % 6 === 0 && i < paragraphs.length - 2) {
      elements.push({type: 'cta', content: '', index: i})
    }
  })

  return (
    <div style={{fontFamily: 'system-ui,-apple-system,sans-serif'}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO IMAGE */}
      <div style={{height: '320px', overflow: 'hidden', position: 'relative', background: '#0f1f35'}}>
        <img src={heroImage} alt={post.title} style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45}} />
        <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 24px', background: 'linear-gradient(to top, rgba(15,31,53,0.95) 0%, transparent 100%)'}}>
          <div style={{maxWidth: '768px', margin: '0 auto', width: '100%'}}>
            <span style={{fontSize: '11px', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.08em'}}>{post.category}</span>
            <h1 style={{fontSize: '28px', fontWeight: 700, color: 'white', lineHeight: '1.3', margin: '8px 0'}}>{post.title}</h1>
            <p style={{fontSize: '13px', color: '#93c5fd', margin: 0}}>By {post.author} · {post.authorTitle} · {post.readTime}</p>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '768px', margin: '0 auto', padding: '0 24px 64px'}}>

        {/* BREADCRUMB */}
        <div style={{fontSize: '13px', color: '#6b7280', padding: '16px 0'}}>
          <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Home</a> › <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a> › <span style={{color: '#1d4ed8'}}>{post.category}</span>
        </div>

        {/* QUICK ANSWER BOX */}
        <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px 24px', margin: '16px 0 32px'}}>
          <p style={{fontSize: '11px', fontWeight: 600, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px'}}>Quick Answer</p>
          <p style={{color: '#1e3a8a', lineHeight: '1.7', margin: 0, fontSize: '15px'}}>{post.quickAnswer}</p>
        </div>

        {/* TOP CTA — inline phone form */}
        <BlogCTA procedure={post.procedure} />

        {/* ARTICLE BODY with injected mid-CTAs */}
        <div style={{fontSize: '16px', color: '#374151', lineHeight: '1.85'}}>
          {elements.map((el, i) => {
            if (el.type === 'cta') {
              return <BlogCTA key={'cta-' + i} procedure={post.procedure} />
            }
            const para = el.content
            if (!para.trim()) return null
            // Detect heading: starts with ## or is short with no period and not first para
            if (para.startsWith('## ')) {
              return <h2 key={i} style={{fontSize: '22px', fontWeight: 700, color: '#111827', margin: '36px 0 14px'}}>{para.replace('## ', '')}</h2>
            }
            if (para.startsWith('# ')) {
              return <h2 key={i} style={{fontSize: '24px', fontWeight: 700, color: '#111827', margin: '36px 0 14px'}}>{para.replace('# ', '')}</h2>
            }
            const isHeading = el.index > 0 && para.length < 80 && !para.includes('.') && !para.includes(',')
            if (isHeading) {
              return <h2 key={i} style={{fontSize: '22px', fontWeight: 700, color: '#111827', margin: '36px 0 14px'}}>{para}</h2>
            }
            return <p key={i} style={{marginBottom: '20px'}}>{para}</p>
          })}
        </div>

        {/* DOCTOR CREDIT */}
        <div style={{background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', margin: '32px 0', display: 'flex', gap: '14px', alignItems: 'center'}}>
          <div style={{width: '48px', height: '48px', borderRadius: '50%', background: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '18px', flexShrink: 0}}>
            {post.author.split(' ').pop()?.charAt(0) || 'D'}
          </div>
          <div>
            <p style={{fontWeight: 600, color: '#111827', margin: '0 0 2px'}}>{post.author}</p>
            <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>{post.authorTitle}</p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{background: 'linear-gradient(135deg, #0f1f35 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '40px', textAlign: 'center', margin: '32px 0'}}>
          <h2 style={{fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '10px'}}>Have questions about {post.procedure}?</h2>
          <p style={{color: '#93c5fd', marginBottom: '24px', fontSize: '15px'}}>Free consultation. Expert doctors. Callback in 30 minutes.</p>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/contact" style={{background: 'white', color: '#1d4ed8', fontWeight: 700, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>Book Free Consultation</a>
            <a href="https://wa.me/918588967050" target="_blank" rel="noopener noreferrer" style={{background: '#22c55e', color: 'white', fontWeight: 600, padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px'}}>WhatsApp Us</a>
          </div>
        </div>

        {/* RELATED POSTS */}
        {related.length > 0 && (
          <div style={{marginTop: '48px', borderTop: '1px solid #e5e7eb', paddingTop: '32px'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '20px'}}>Related Articles</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px'}}>
              {related.map(rp => (
                <a key={rp.slug} href={"/blog/" + rp.slug} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', display: 'block'}}>
                  <div style={{height: '120px', overflow: 'hidden', background: '#f0f7ff'}}>
                    <img src={categoryImages[rp.category] || categoryImages["default"]} alt={rp.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div style={{padding: '14px'}}>
                    <span style={{fontSize: '10px', fontWeight: 600, color: '#1d4ed8', textTransform: 'uppercase'}}>{rp.category}</span>
                    <p style={{fontSize: '14px', fontWeight: 600, color: '#111827', margin: '4px 0 6px', lineHeight: '1.4'}}>{rp.title.slice(0, 65)}{rp.title.length > 65 ? '…' : ''}</p>
                    <p style={{fontSize: '12px', color: '#1d4ed8', margin: 0}}>Read article →</p>
                  </div>
                </a>
              ))}
            </div>
            <a href="/blog" style={{display: 'inline-block', marginTop: '20px', fontSize: '14px', color: '#1d4ed8', textDecoration: 'none', fontWeight: 500}}>← View all articles</a>
          </div>
        )}
      {/* INTERNAL LINKS TO TREATMENT PAGES */}
        <div style={{background: '#f9fafb', borderRadius: '14px', padding: '24px', marginTop: '32px'}}>
          <h3 style={{fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '14px'}}>See Also — Treatment Guides</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px'}}>
            {[
              {name: 'Piles Treatment', slug: 'piles'},
              {name: 'Hernia Surgery', slug: 'hernia'},
              {name: 'Circumcision', slug: 'circumcision'},
              {name: 'LASIK Eye Surgery', slug: 'lasik'},
              {name: 'Knee Replacement', slug: 'knee-replacement'},
              {name: 'MTP / Abortion', slug: 'mtp-abortion'},
              {name: 'Gallstones Surgery', slug: 'gallstones'},
              {name: 'Kidney Stones', slug: 'kidney-stones'},
            ].map(t => (
              <a key={t.slug} href={'/treatment/' + t.slug}
                style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', textDecoration: 'none', fontSize: '13px', fontWeight: 500, color: '#1d4ed8', display: 'block'}}>
                {t.name} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
