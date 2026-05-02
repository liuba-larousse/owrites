"use client";

import Link from "next/link";

const services = [
  {
    icon: "✍️",
    iconBg: "orange" as const,
    title: "Ghostwriting LinkedIn",
    description:
      "Publications rédigées avec votre voix et votre expertise. Stratégie de contenu alignée sur vos objectifs business.",
    items: [
      "Posts hebdomadaires dans votre ton",
      "Stratégie alignée sur vos objectifs",
      "Validation avant chaque publication",
    ],
  },
  {
    icon: "👤",
    iconBg: "blue" as const,
    title: "Optimisation de profil LinkedIn",
    description:
      "Profil réécrit pour expliquer clairement qui vous aidez, ce que vous faites et pourquoi on devrait vous faire confiance.",
    items: [
      "Titre et résumé optimisés SEO",
      "Positionnement expert clair",
      "Profil qui convertit les visiteurs",
    ],
  },
  {
    icon: "📐",
    iconBg: "orange" as const,
    title: "Stratégie de contenu LinkedIn",
    description:
      "Ligne éditoriale, piliers de contenu et calendrier de publication pour une visibilité LinkedIn constante.",
    items: [
      "Piliers de contenu & angles messages",
      "Calendrier éditorial mensuel",
      "Structure simple et reproductible",
    ],
  },
  {
    icon: "📈",
    iconBg: "blue" as const,
    title: "Génération de leads LinkedIn",
    description:
      "Transformez votre visibilité LinkedIn en conversations qualifiées. Des leads entrants sans prospection froide.",
    items: [
      "Contenu aligné sur l'intention d'achat",
      "Social selling stratégique",
      "Leads inbound sans cold outreach",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "var(--off-white)", padding: "100px 48px" }}
    >
      <style>{`
        @media (max-width: 768px) {
          .services-inner { padding: 60px 20px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="services-inner">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag" style={{ justifyContent: "center", display: "inline-flex" }}>
            Nos services
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
            Ghostwriting, personal branding &{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--orange)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              génération de leads B2B
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
            Contenu LinkedIn stratégique qui construit votre autorité et génère
            des leads qualifiés en inbound.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: -24, marginBottom: 32, flexWrap: "wrap" }}>
          <Link
            href="/consulting"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--orange)", textDecoration: "none" }}
          >
            En savoir plus sur nos formations social selling →
          </Link>
          <Link
            href="/tarifs"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--orange)", textDecoration: "none" }}
          >
            Voir nos tarifs ghostwriting LinkedIn →
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
          className="services-grid"
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              style={{
                background: "#fff",
                borderRadius: "var(--r-lg)",
                padding: "40px 36px",
                border: "1px solid var(--gray-100)",
                transition: "all 0.35s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--orange)";
                el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.06)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--gray-100)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  fontSize: 24,
                  background:
                    svc.iconBg === "orange"
                      ? "var(--orange-glow-strong)"
                      : "var(--blue-glow)",
                }}
              >
                {svc.icon}
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 10,
                  letterSpacing: "-0.3px",
                  color: "var(--black)",
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--gray-mid)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {svc.description}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {svc.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 13.5,
                      color: "var(--black)",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--orange)",
                        fontWeight: 800,
                        fontSize: 12,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
