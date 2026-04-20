import { getAllBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Health Blog — Surgery Guides, Costs and Recovery Tips | MySurgery",
  description: "Expert articles on surgery costs, recovery tips, insurance guides and patient stories. Written by experienced surgeons and the MySurgery team.",
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  return (
    <div style={{maxWidth: "1152px", margin: "0 auto", padding: "48px 16px"}}>
      <p style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px"}}>Health Blog</p>
      <h1 style={{fontSize: "30px", fontWeight: 700, color: "#111827", marginBottom: "12px"}}>Surgery Guides, Costs and Recovery Tips</h1>
      <p style={{color: "#6b7280", fontSize: "18px", marginBottom: "40px"}}>Expert articles written by experienced surgeons and the MySurgery team to help you make informed decisions.</p>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "48px"}}>
        {posts.map((post) => (
          <a key={post.slug} href={"/blog/" + post.slug} style={{border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden", display: "block", textDecoration: "none", transition: "all 0.2s"}}>
            <div style={{background: "#eff6ff", padding: "32px", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <span style={{fontSize: "12px", fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.08em"}}>{post.category}</span>
            </div>
            <div style={{padding: "24px"}}>
              <p style={{fontSize: "11px", color: "#6b7280", marginBottom: "8px"}}>{post.category}</p>
              <h2 style={{fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "10px", lineHeight: "1.4"}}>{post.title}</h2>
              <p style={{fontSize: "14px", color: "#6b7280", marginBottom: "16px", lineHeight: "1.6"}}>{post.excerpt}</p>
              <div style={{display: "flex", gap: "12px", fontSize: "13px", color: "#9ca3af"}}>
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div style={{background: "#1d4ed8", borderRadius: "12px", padding: "48px", textAlign: "center"}}>
        <h2 style={{fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "8px"}}>Have a surgery question?</h2>
        <p style={{color: "#bfdbfe", marginBottom: "24px"}}>Talk to our care coordinator. Free, no commitment, callback in 30 minutes.</p>
        <a href="/contact" style={{display: "inline-block", background: "white", color: "#1d4ed8", fontWeight: 600, padding: "12px 32px", borderRadius: "8px", textDecoration: "none"}}>Book Free Consultation</a>
      </div>
    </div>
  )
}
