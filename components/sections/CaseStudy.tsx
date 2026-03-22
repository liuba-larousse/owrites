const metrics = [
  { num: "16 900", suffix: "+", label: "Impressions organiques" },
  { num: "1K–6K", suffix: "", label: "Impressions par post" },
  { num: "10", suffix: "+", label: "Leads STR inbound" },
];

const whatWeDid = [
  "Positionnement clair : \"revenue partner\" plutôt que prestataire",
  "Optimisation complète du profil LinkedIn (SEO + conversion)",
  "Stratégie de contenu ciblée sur les propriétaires STR",
  "Ghostwriting de publications LinkedIn hebdomadaires",
  "Système de génération de leads inbound",
];

export default function CaseStudy() {
  return (
    <section
      id="etude-de-cas"
      style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .cs-card { grid-template-columns: 1fr !important; }
          .cs-metrics-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .cs-section { padding: 60px 20px !important; }
          .cs-left { padding: 32px 24px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div className="section-tag">Étude de cas — Hostlyft</div>
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
          Comment le ghostwriting LinkedIn a généré des leads qualifiés en{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            90 jours
          </em>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--gray-mid)",
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          De l&apos;absence de visibilité LinkedIn à un flux constant de conversations
          inbound — sans publicité.
        </p>
      </div>

      {/* Card */}
      <div
        style={{
          background: "var(--off-white)",
          borderRadius: "var(--r-xl)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--gray-100)",
        }}
        className="cs-card"
      >
        {/* Left */}
        <div
          style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          className="cs-left"
        >
          {/* Client tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              background: "var(--orange-glow-strong)",
              borderRadius: "var(--r-full)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--orange)",
              marginBottom: 20,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              width: "fit-content",
            }}
          >
            📍 Hostlyft — Revenue Manager STR
          </div>

          <h3
            style={{
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginBottom: 12,
              color: "var(--black)",
            }}
          >
            D&apos;un profil invisible à un canal d&apos;acquisition LinkedIn performant
          </h3>

          {/* Challenge */}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--orange)",
                marginBottom: 8,
              }}
            >
              ⚡ Le problème
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--gray-mid)",
                lineHeight: 1.6,
              }}
            >
              Publications incohérentes, positionnement flou, aucun lead entrant malgré
              une expertise solide en gestion de revenus pour locations courte durée
              (Airbnb, Booking.com, VRBO).
            </p>
          </div>

          {/* What we did */}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--blue)",
                marginBottom: 8,
              }}
            >
              ✦ Ce que nous avons fait
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {whatWeDid.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 13.5,
                    color: "var(--black)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      color: "var(--blue)",
                      fontWeight: 800,
                      fontSize: 11,
                      marginTop: 3,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginBottom: 28,
            }}
            className="cs-metrics-grid"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "#fff",
                  borderRadius: "var(--r-md)",
                  padding: "20px 16px",
                  textAlign: "center",
                  border: "1px solid var(--gray-200)",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "var(--black)",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                  }}
                >
                  {m.num}
                  <span style={{ color: "var(--orange)" }}>{m.suffix}</span>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--gray-light)",
                    marginTop: 4,
                    fontWeight: 500,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.olaidewrites.com/projects/linkedin-lead-generation-case-study"
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--orange)",
              textDecoration: "none",
              transition: "gap 0.3s",
            }}
          >
            Lire l&apos;étude de cas complète →
          </a>
        </div>

        {/* Right — image placeholders */}
        <div
          style={{
            background: "var(--gray-100)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            gap: 16,
          }}
        >
          {[
            "IMAGE 1: Screenshot du profil LinkedIn optimisé d'Hostlyft — titre SEO, banner professionnel, section \"À propos\" réécrite. Flouter données sensibles.",
            "IMAGE 2: Screenshot d'une publication LinkedIn performante (1K-6K impressions) avec engagement visible. Contenu STR/revenue management.",
            "IMAGE 3: Screenshot LinkedIn analytics — courbe des 16 900+ impressions sur 90 jours. Graphique ascendant en barres.",
          ].map((desc, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                aspectRatio: "16/10",
                background: "#fff",
                borderRadius: "var(--r-md)",
                border: "2px dashed var(--gray-200)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: 16,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 28, opacity: 0.4 }}>📸</span>
              <span
                style={{
                  fontSize: 11,
                  color: "var(--gray-light)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                {desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
