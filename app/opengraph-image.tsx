import { ImageResponse } from "next/og";

export const alt =
  "Owrites — Contenus B2B qui convertissent pour les entreprises francophones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #5139e6 0%, #8b5cf6 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>Owrites</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Du contenu B2B qui convertit vos prospects en clients
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.85)" }}>
            Articles · Pages web · Emails · LinkedIn — en français
          </div>
        </div>

        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.8)" }}>
          Belgique · Suisse · France
        </div>
      </div>
    ),
    { ...size }
  );
}
