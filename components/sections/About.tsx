import Image from "next/image";
import Link from "next/link";

const checks = [
  "Ghostwriting LinkedIn authentique",
  "Stratégie de contenu sur-mesure",
  "Génération de leads qualifiés B2B",
];

export default function About() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "100px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: 64,
        alignItems: "center",
      }}
      className="about-grid"
    >
      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-img-wrap { max-width: 480px; margin: 0 auto; width: 100%; }
        }
        @media (max-width: 768px) {
          .about-grid { padding: 60px 20px !important; }
        }
      `}</style>

      {/* Image */}
      <div
        className="about-img-wrap"
        style={{ position: "relative", aspectRatio: "4/3", minHeight: 320, borderRadius: "var(--r-lg)", overflow: "hidden" }}
      >
        <Image
          src="/personal_branding.png"
          alt="Olaide Olaniyan en consultation stratégique LinkedIn avec un client fondateur B2B"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text */}
      <div>
        <div className="section-tag">À propos</div>
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
          Votre partenaire pour le{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            personal branding
          </em>{" "}
          LinkedIn
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
          Owrites accompagne les fondateurs et consultants B2B dans la
          construction de leur autorité sur LinkedIn — grâce au ghostwriting
          stratégique, un positionnement clair et une visibilité constante.
        </p>

        {/* Checklist */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            margin: "0 0 36px",
            padding: 0,
          }}
        >
          {checks.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 15,
                fontWeight: 600,
                color: "var(--black)",
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "var(--blue-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Link href="#services" className="btn-primary">
          Découvrir nos services{" "}
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
