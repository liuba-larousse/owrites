"use client";

import Link from "next/link";

const results = [
  { icon: "👁️", bg: "var(--orange-glow-strong)", num: "+95", suffix: "%", label: "Impressions en hausse" },
  { icon: "🔥", bg: "var(--blue-glow)", num: "6 000", suffix: "+", label: "Impressions top post" },
  { icon: "👤", bg: "var(--orange-glow-strong)", num: "312", suffix: "", label: "Vues de profil" },
  { icon: "🔍", bg: "var(--blue-glow)", num: "94", suffix: "", label: "Apparitions en recherche" },
];

export default function Results() {
  return (
    <section
      id="resultats"
      style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .results-section { padding: 60px 20px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          className="section-tag"
          style={{ justifyContent: "center", display: "inline-flex" }}
        >
          Résultats organiques LinkedIn
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
          Des métriques de performance{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            concrètes
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
          Pas de pub. Pas d&apos;automatisation. Juste du positionnement clair et du
          contenu stratégique.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginBottom: 48,
        }}
        className="results-grid"
      >
        {results.map((r) => (
          <div
            key={r.label}
            style={{
              background: "var(--off-white)",
              borderRadius: "var(--r-lg)",
              padding: "36px 24px",
              textAlign: "center",
              transition: "all 0.3s",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "#fff";
              el.style.borderColor = "var(--gray-200)";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "var(--off-white)";
              el.style.borderColor = "transparent";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                background: r.bg,
              }}
            >
              {r.icon}
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "var(--black)",
                letterSpacing: "-1px",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {r.num}
              <span style={{ color: "var(--orange)" }}>{r.suffix}</span>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--gray-light)",
                fontWeight: 500,
              }}
            >
              {r.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <Link
          href="https://calendly.com/josephcopy/discovery-call"
          target="_blank"
          rel="noopener"
          className="btn-primary"
        >
          Obtenir ces résultats pour mon profil{" "}
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
    </section>
  );
}
