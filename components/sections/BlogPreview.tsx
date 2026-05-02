import Link from "next/link";

const posts = [
  {
    slug: "cout-ghostwriter-linkedin-2026",
    tag: "Tarifs",
    title: "Combien coûte un ghostwriter LinkedIn en 2026 ?",
    excerpt: "Guide complet des tarifs ghostwriting LinkedIn. Ce que les fondateurs B2B paient vraiment et à quoi s'attendre à chaque niveau.",
    readTime: "8 min",
  },
  {
    slug: "generer-leads-qualifies-linkedin",
    tag: "Lead generation",
    title: "Comment générer des leads qualifiés sur LinkedIn en 2026",
    excerpt: "Stratégie de contenu, optimisation de profil, social selling — le guide pour transformer LinkedIn en canal d'acquisition B2B.",
    readTime: "10 min",
  },
  {
    slug: "ghostwriter-linkedin-voix-authenticite",
    tag: "Voix & Authenticité",
    title: "Un ghostwriter LinkedIn gardera-t-il ma voix ?",
    excerpt: "Comment fonctionne la capture de voix, pourquoi le mauvais ghostwriting sonne faux, et comment préserver votre authenticité.",
    readTime: "7 min",
  },
];

export default function BlogPreview() {
  return (
    <section style={{ background: "var(--off-white)", padding: "100px 48px" }}>
      <style>{`
        @media (max-width: 1024px) {
          .blog-preview-grid { grid-template-columns: 1fr !important; max-width: 520px; margin-left: auto !important; margin-right: auto !important; }
        }
        @media (max-width: 768px) {
          .blog-preview-wrap { padding: 60px 20px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="blog-preview-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag" style={{ justifyContent: "center", display: "inline-flex" }}>
            Blog — Ghostwriting & Lead Generation LinkedIn
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 16,
              color: "var(--black)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Nos derniers{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--orange)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              articles
            </em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--gray-mid)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Ghostwriting, lead generation, personal branding — des conseils concrets pour les fondateurs et consultants B2B.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          className="blog-preview-grid"
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                background: "#fff",
                borderRadius: "var(--r-lg)",
                padding: "32px 28px",
                border: "1px solid var(--gray-100)",
                textDecoration: "none",
                color: "var(--black)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.35s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--orange)";
                el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.05)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--gray-100)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "4px 12px",
                  borderRadius: "var(--r-full)",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  background: "var(--orange-glow-strong)",
                  color: "var(--orange)",
                  marginBottom: 16,
                  width: "fit-content",
                }}
              >
                {post.tag}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: 10 }}>
                {post.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--gray-mid)", lineHeight: 1.7, flexGrow: 1, marginBottom: 16 }}>
                {post.excerpt}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--gray-light)" }}>{post.readTime}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--orange)" }}>
                  Lire →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link
            href="/blog"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--orange)",
              textDecoration: "none",
            }}
          >
            Voir tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
