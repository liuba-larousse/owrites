"use client";

const tags = ["Ghostwriting LinkedIn", "Personal Branding", "100% Organique"];
const stats = [
  { num: "+95%", label: "Impressions en hausse" },
  { num: "312", label: "Vues de profil" },
  { num: "90j", label: "Premiers résultats" },
];

export default function Why() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "100px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}
      className="why-grid"
    >
      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .why-img-wrap { max-width: 480px; margin: 0 auto; width: 100%; }
        }
        @media (max-width: 768px) {
          .why-grid { padding: 60px 20px !important; }
        }
      `}</style>

      {/* Text column */}
      <div>
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
          Pourquoi Owrites{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            reste le choix
          </em>{" "}
          des experts B2B
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--gray-mid)",
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: 28,
          }}
        >
          Positionnement stratégique, contenu authentique et visibilité
          organique durable pour les professionnels qui vendent leur expertise.
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            margin: "28px 0 36px",
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "10px 22px",
                border: "1.5px solid var(--gray-200)",
                borderRadius: "var(--r-full)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--gray-dark)",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.borderColor = "var(--orange)";
                el.style.color = "var(--orange)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.borderColor = "var(--gray-200)";
                el.style.color = "var(--gray-dark)";
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {stats.map((s) => (
            <div key={s.num}>
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  color: "var(--black)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--gray-light)",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image placeholder */}
      <div
        className="why-img-wrap img-placeholder"
        style={{ aspectRatio: "4/3", minHeight: 320, position: "relative" }}
        role="img"
        aria-label="Dashboard LinkedIn analytics montrant la croissance des impressions et des vues de profil"
      >
        <span className="ph-icon">📸</span>
        <span className="ph-label">
          IMAGE: Screenshot d&apos;un tableau de bord LinkedIn analytics montrant une
          courbe ascendante d&apos;impressions et de vues de profil. Format 4:3.
        </span>
        <span
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "#fff",
            padding: "8px 18px",
            borderRadius: "var(--r-full)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--black)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          LinkedIn B2B
        </span>
      </div>
    </section>
  );
}
