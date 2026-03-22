"use client";

const values = [
  {
    title: "Clarté > Volume",
    description: "Un positionnement clair, pas une avalanche de contenu.",
  },
  {
    title: "Constance > Viralité",
    description: "Une présence régulière, pas des pics d'attention éphémères.",
  },
  {
    title: "Confiance > Tactiques",
    description: "La crédibilité durable, pas les raccourcis.",
  },
  {
    title: "Positionnement d'abord",
    description: "La stratégie précède toujours le contenu.",
  },
  {
    title: "Votre voix",
    description: "Du contenu qui vous ressemble — pas un template IA.",
  },
  {
    title: "Vision long-terme",
    description: "L'autorité se capitalise lentement et puissamment.",
  },
];

export default function Manifesto() {
  return (
    <section
      style={{
        background: "var(--black)",
        color: "#fff",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(255,82,2,0.06), transparent)",
          bottom: -200,
          left: -100,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <style>{`
        @media (max-width: 1024px) {
          .manifesto-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .manifesto-values { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .manifesto-section { padding: 60px 20px !important; }
          .manifesto-values { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 72,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="manifesto-grid"
      >
        {/* Left */}
        <div>
          <div className="section-tag" style={{ color: "var(--orange)" }}>
            Notre philosophie
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 16,
              color: "#fff",
              fontFamily: "var(--font-sans)",
            }}
          >
            Le manifeste{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--orange)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              Owrites
            </em>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            Comment l&apos;autorité devrait se construire sur LinkedIn.
          </p>

          {/* Quote */}
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 22,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5,
              paddingLeft: 20,
              borderLeft: "3px solid var(--orange)",
              marginTop: 28,
            }}
          >
            &ldquo;L&apos;autorité ne se construit pas en publiant plus. Elle se
            construit en disant la bonne chose, avec constance.&rdquo;
          </blockquote>
          <div
            style={{
              marginTop: 14,
              fontSize: 14,
              color: "rgba(255,255,255,0.35)",
              paddingLeft: 20,
            }}
          >
            — Olaide Olaniyan, Fondatrice d&apos;Owrites
          </div>
        </div>

        {/* Right — values grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          className="manifesto-values"
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "var(--r-md)",
                padding: "24px 22px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(255,82,2,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 6,
                }}
              >
                {v.title}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
