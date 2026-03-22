"use client";

export default function VideoSection() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "60px 48px 100px",
        textAlign: "center",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .video-section-inner { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
      <div
        style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}
        className="video-section-inner"
      >
        <a
          href="https://calendly.com/josephcopy/discovery-call"
          target="_blank"
          rel="noopener"
          style={{
            display: "block",
            background: "var(--black)",
            borderRadius: "var(--r-xl)",
            aspectRatio: "16/9",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            textDecoration: "none",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          aria-label="Regarder la vidéo de présentation d'Owrites"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1.01)";
            el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1)";
            el.style.boxShadow = "none";
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,82,2,0.15), rgba(59,130,246,0.1))",
              pointerEvents: "none",
            }}
          />

          {/* Play button */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                background: "var(--orange)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(255,82,2,0.4)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#fff"
                style={{ marginLeft: 4 }}
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Découvrez comment Owrites transforme votre LinkedIn — 60 secondes
            </span>
          </div>
        </a>
        <p
          style={{
            fontSize: 12,
            color: "var(--gray-light)",
            fontStyle: "italic",
            marginTop: 16,
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          VIDEO PLACEHOLDER: Vidéo 60 secondes, Olaide face caméra, expliquant
          le service. Sous-titres FR.
        </p>
      </div>
    </section>
  );
}
