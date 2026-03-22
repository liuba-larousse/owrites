"use client";

import Image from "next/image";
import Link from "next/link";

const Arrow = () => (
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
);

export default function Hero() {
  return (
    <section
      style={{
        padding: "140px 48px 80px",
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: 64,
        alignItems: "center",
      }}
      className="hero-grid"
    >
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding-left: 20px !important; padding-right: 20px !important; }
          .hero-visual-wrap { order: -1; max-width: 480px; margin: 0 auto; width: 100%; }
        }
        @media (max-width: 768px) {
          .hero-grid { padding-top: 100px !important; padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>

      {/* Left column */}
      <div>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 28,
          }}
        >
          <div style={{ display: "flex" }}>
            {[
              { bg: "#F97316", label: "O" },
              { bg: "#3B82F6", label: "W" },
              { bg: "#171717", label: "→" },
            ].map((av, i) => (
              <span
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  marginLeft: i === 0 ? 0 : -8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  background: av.bg,
                }}
              >
                {av.label}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--gray-dark)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Ghostwriter LinkedIn B2B
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(40px, 5vw, 62px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
            color: "var(--black)",
            fontFamily: "var(--font-sans)",
          }}
        >
          Votre LinkedIn ne reflète pas votre{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            expertise
          </em>{" "}
          ?
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 17,
            color: "var(--gray-mid)",
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: 36,
            fontWeight: 400,
          }}
        >
          Ghostwriting LinkedIn, optimisation de profil et stratégie de contenu
          pour fondateurs et consultants B2B. Des leads qualifiés en inbound,
          sans publier vous-même.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="https://calendly.com/josephcopy/discovery-call"
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Réserver un appel gratuit <Arrow />
          </Link>
          <Link href="#services" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 40,
                height: 40,
                border: "2px solid var(--gray-200)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Arrow />
            </span>
            Découvrir
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid var(--gray-200)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "var(--black)",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              2–5×
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--gray-light)",
                fontWeight: 500,
                marginTop: 4,
              }}
            >
              Impressions
            </div>
          </div>
          <div
            style={{
              width: 1,
              background: "var(--gray-200)",
              alignSelf: "stretch",
            }}
          />
          <div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "var(--black)",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              +70%
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--gray-light)",
                fontWeight: 500,
                marginTop: 4,
              }}
            >
              Vues profil
            </div>
          </div>
        </div>
      </div>

      {/* Right column — hero image */}
      <div
        className="hero-visual-wrap"
        style={{ position: "relative", aspectRatio: "4/3", minHeight: 360, borderRadius: "var(--r-xl)", overflow: "hidden" }}
      >
        <Image
          src="/hero.png"
          alt="Olaide Olaniyan, ghostwriter LinkedIn B2B"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
}
