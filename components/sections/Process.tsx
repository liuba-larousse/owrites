"use client";

import Link from "next/link";

const steps = [
  {
    number: "1",
    color: "orange" as const,
    title: "Positionnement & capture de voix",
    description:
      "On comprend votre expertise, votre audience cible et votre style. Votre contenu LinkedIn sonnera comme vous.",
  },
  {
    number: "2",
    color: "blue" as const,
    title: "Création & validation",
    description:
      "Publications stratégiques rédigées selon votre positionnement. Vous validez tout avant publication.",
  },
  {
    number: "3",
    color: "black" as const,
    title: "Visibilité & leads",
    description:
      "Votre présence LinkedIn devient claire et crédible. Les opportunités inbound arrivent naturellement.",
  },
];

const numColors = {
  orange: { bg: "var(--orange-glow-strong)", color: "var(--orange)" },
  blue: { bg: "var(--blue-glow)", color: "var(--blue)" },
  black: { bg: "rgba(23,23,23,0.06)", color: "var(--black)" },
};

export default function Process() {
  return (
    <section
      id="methode"
      style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 48px 100px" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .process-steps { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .process-section { padding: 80px 20px 60px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div className="section-tag">Notre méthode</div>
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
          3 étapes. Du contenu qui{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            vous ressemble
          </em>
          .
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--gray-mid)",
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          Un accompagnement stratégique simple, transparent et efficace.
        </p>
      </div>

      {/* Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 48,
        }}
        className="process-steps"
      >
        {steps.map((step) => {
          const c = numColors[step.color];
          return (
            <div
              key={step.number}
              style={{
                background: "var(--off-white)",
                borderRadius: "var(--r-lg)",
                padding: "36px 30px",
                transition: "all 0.35s",
                border: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "#fff";
                el.style.borderColor = "var(--orange)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.05)";
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
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 800,
                  marginBottom: 20,
                  background: c.bg,
                  color: c.color,
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: "var(--black)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--gray-mid)",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <Link
          href="https://calendly.com/olaniyanolaide/discovery-call"
          target="_blank"
          rel="noopener"
          className="btn-primary"
        >
          Démarrer l&apos;accompagnement{" "}
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
