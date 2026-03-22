import Link from "next/link";

const inbound = [
  "Contenu stratégique qui attire les prospects",
  "Personal branding qui construit la confiance",
  "Leads qualifiés qui viennent à vous",
  "Visibilité organique durable",
  "Autorité qui se capitalise avec le temps",
];

const outbound = [
  "Messages froids, taux de réponse bas",
  "Aucun positionnement construit",
  "Résultats qui s'arrêtent avec le budget",
  "Dépendance à la publicité payante",
  "Aucune autorité durable construite",
];

export default function Compare() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--orange) 50%, var(--blue) 50%)",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .compare-grid { grid-template-columns: 1fr !important; }
          .compare-vs { margin: 0 auto !important; margin-top: 0 !important; }
        }
        @media (max-width: 768px) {
          .compare-section { padding: 60px 20px !important; background: linear-gradient(180deg, var(--orange) 50%, var(--blue) 50%) !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-1px",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            Inbound vs Outbound : pourquoi le personal branding LinkedIn gagne
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 16,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Arrêtez la prospection froide. Construisez une autorité qui attire les bons clients.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 32,
            alignItems: "start",
          }}
          className="compare-grid"
        >
          {/* Inbound */}
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              borderRadius: "var(--r-xl)",
              padding: "40px 32px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              🧲 Inbound (Owrites)
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {inbound.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 14,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ flexShrink: 0, fontSize: 16, marginTop: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* VS */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#fff",
              background: "rgba(255,255,255,0.15)",
              width: 60,
              height: 60,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 60,
              border: "2px solid rgba(255,255,255,0.3)",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
            }}
            className="compare-vs"
          >
            VS
          </div>

          {/* Outbound */}
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              borderRadius: "var(--r-xl)",
              padding: "40px 32px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              📢 Outbound classique
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {outbound.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 14,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ flexShrink: 0, fontSize: 16, marginTop: 1 }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link
            href="#contact"
            className="btn-white"
          >
            Passer à l&apos;inbound avec Owrites{" "}
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
