const trustItems = [
  "Appel 100% gratuit — sans engagement",
  "Analyse de votre profil LinkedIn actuel",
  "Recommandations personnalisées",
  "Plan d'action concret en fin d'appel",
];

export default function CalendlySection() {
  return (
    <section
      id="contact"
      style={{ background: "var(--off-white)", padding: "100px 48px" }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .calendly-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .calendly-section-wrap { padding: 60px 20px !important; }
          .calendly-embed-frame { height: 560px !important; }
        }
      `}</style>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 64,
          alignItems: "start",
        }}
        className="calendly-grid"
      >
        {/* Text column */}
        <div>
          <div className="section-tag">Passons à l&apos;action</div>
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
            Réservez votre appel{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--orange)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              stratégique gratuit
            </em>
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
            30 minutes pour analyser votre positionnement LinkedIn, identifier
            vos opportunités et définir un plan d&apos;action concret. Sans engagement.
          </p>

          {/* Trust items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 28,
            }}
          >
            {trustItems.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  color: "var(--gray-dark)",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    background: "var(--orange-glow-strong)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "var(--orange)",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Calendly embed */}
        <div
          style={{
            background: "#fff",
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            boxShadow: "0 16px 48px rgba(0,0,0,0.06)",
            border: "1px solid var(--gray-200)",
            minHeight: 660,
          }}
        >
          <iframe
            src="https://calendly.com/josephcopy/discovery-call?hide_gdpr_banner=1&background_color=f9fafb&text_color=171717&primary_color=FF5202"
            title="Réserver un appel stratégique gratuit avec Owrites"
            loading="lazy"
            style={{ width: "100%", height: 660, border: "none" }}
            className="calendly-embed-frame"
          />
        </div>
      </div>
    </section>
  );
}
