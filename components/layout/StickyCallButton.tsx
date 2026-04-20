'use client'

export default function StickyCallButton() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) { .sticky-bar { display: none !important; } }
        .sticky-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 50; }
      `}</style>

      <div
        className="sticky-bar"
        style={{
          padding: "10px 12px",
          background: "white",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          gap: "8px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Call Button */}
        <a
          href="tel:+918588807050"
          style={{
            flex: 1,
            background: "white",
            color: "#1d4ed8",
            border: "1.5px solid #1d4ed8",
            fontWeight: 600,
            padding: "11px 8px",
            borderRadius: "10px",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "13px",
            display: "block",
          }}
        >
          📞 Call
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918588807050?text=Hi%2C%20I%20want%20a%20free%20surgery%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            background: "#22c55e",
            color: "white",
            fontWeight: 600,
            padding: "11px 8px",
            borderRadius: "10px",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "13px",
            display: "block",
          }}
        >
          WhatsApp
        </a>

        {/* Free Consult Button */}
        <a
          href="/contact"
          style={{
            flex: 2,
            background: "#1d4ed8",
            color: "white",
            fontWeight: 600,
            padding: "11px 8px",
            borderRadius: "10px",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "13px",
            display: "block",
          }}
        >
          Free Consult
        </a>
      </div>
    </>
  )
}