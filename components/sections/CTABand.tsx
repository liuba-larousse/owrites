import Link from "next/link";

interface CTABandProps {
  message?: string;
  sub?: string;
}

export default function CTABand({
  message = "Prêt à générer des leads qualifiés via LinkedIn ?",
  sub = "Réservez un appel stratégique gratuit de 30 minutes. Sans engagement.",
}: CTABandProps) {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
      <style>{`
        @media (max-width: 1024px) {
          .cta-band-inner { grid-template-columns: 1fr !important; text-align: center; }
          .cta-band-actions { justify-content: center !important; }
        }
        @media (max-width: 768px) {
          .cta-band-wrap { padding: 0 20px !important; }
          .cta-band-inner { padding: 40px 28px !important; }
        }
      `}</style>
      <div
        style={{
          background: "var(--blue)",
          borderRadius: "var(--r-xl)",
          padding: "56px 64px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 48,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="cta-band-inner"
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1), transparent)",
            top: -150,
            right: -100,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Text */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontSize: "clamp(24px, 2.8vw, 34px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            {message}
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}>{sub}</p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
            justifyContent: "flex-end",
          }}
          className="cta-band-actions"
        >
          <Link
            href="https://calendly.com/olaniyanolaide/discovery-call"
            target="_blank"
            rel="noopener"
            className="btn-dark"
          >
            Réserver mon appel{" "}
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
          <Link href="#etude-de-cas" className="btn-white">
            Études de cas
          </Link>
        </div>
      </div>
    </div>
  );
}
