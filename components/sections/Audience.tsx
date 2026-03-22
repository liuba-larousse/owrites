"use client";

import Link from "next/link";

const audiences = [
  {
    emoji: "🚀",
    bg: "var(--orange-glow-strong)",
    title: "Fondateurs B2B",
    description:
      "Attirez clients, partenaires et opportunités stratégiques avec un profil et du contenu qui communiquent clairement votre valeur.",
  },
  {
    emoji: "💡",
    bg: "var(--blue-glow)",
    title: "Consultants & coachs",
    description:
      "Des leads entrants réguliers sans publier tous les jours. Positionnement clair et visibilité constante.",
  },
  {
    emoji: "🎯",
    bg: "rgba(23,23,23,0.06)",
    title: "Prestataires de services",
    description:
      "Transformez LinkedIn en canal d'acquisition. Rendez votre expertise immédiatement compréhensible.",
  },
];

export default function Audience() {
  return (
    <section
      id="audience"
      style={{ background: "var(--off-white)", padding: "100px 48px" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .audience-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .audience-section { padding: 60px 20px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            className="section-tag"
            style={{ justifyContent: "center", display: "inline-flex" }}
          >
            Pour qui
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
            Pour les professionnels B2B qui vendent{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--orange)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              leur expertise
            </em>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--gray-mid)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Fondateurs, consultants, prestataires : LinkedIn peut devenir votre
            premier canal d'acquisition.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 48,
          }}
          className="audience-grid"
        >
          {audiences.map((aud) => (
            <div
              key={aud.title}
              style={{
                background: "#fff",
                borderRadius: "var(--r-lg)",
                padding: "40px 32px",
                textAlign: "center",
                border: "1px solid var(--gray-100)",
                transition: "all 0.35s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--orange)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--gray-100)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  background: aud.bg,
                }}
              >
                {aud.emoji}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "var(--black)",
                }}
              >
                {aud.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--gray-mid)",
                  lineHeight: 1.7,
                }}
              >
                {aud.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="https://calendly.com/olaniyanolaide/discovery-call"
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Ça me correspond → je réserve un appel{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
