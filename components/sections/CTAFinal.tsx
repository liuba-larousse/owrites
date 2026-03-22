import Link from "next/link";

export default function CTAFinal() {
  return (
    <section
      style={{
        background: "var(--blue)",
        padding: "100px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
          top: -200,
          left: -200,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            fontFamily: "var(--font-sans)",
          }}
        >
          Votre expertise mérite d&apos;être vue sur LinkedIn
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 17,
            marginBottom: 36,
            lineHeight: 1.7,
          }}
        >
          Ghostwriting LinkedIn, personal branding et génération de leads B2B
          pour fondateurs et consultants. Rejoignez les professionnels qui ont
          transformé leur LinkedIn avec Owrites.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="https://calendly.com/josephcopy/discovery-call"
            target="_blank"
            rel="noopener"
            className="btn-white"
          >
            Réserver un appel gratuit{" "}
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
          <a
            href="https://www.olaidewrites.com/projects/linkedin-lead-generation-case-study"
            target="_blank"
            rel="noopener"
            className="btn-dark"
          >
            Voir l&apos;étude de cas Hostlyft
          </a>
        </div>
      </div>
    </section>
  );
}
