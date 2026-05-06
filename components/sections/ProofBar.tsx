"use client";

const proofItems = [
  { num: "100%", label: "Organique — zéro publicité" },
  { num: "90", label: "Jours pour les premiers leads" },
  { num: "20+", label: "Fondateurs & consultants accompagnés" },
  { num: "5×", label: "Plus d'impressions en moyenne" },
];

export default function ProofBar() {
  return (
    <div
      style={{
        background: "var(--off-white)",
        borderTop: "1px solid var(--gray-100)",
        borderBottom: "1px solid var(--gray-100)",
        padding: "40px 48px",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .proof-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; padding: 32px 20px !important; }
        }
        @media (max-width: 480px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div
        className="proof-grid"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}
      >
        {proofItems.map((item) => (
          <div key={item.label}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "var(--orange)",
                letterSpacing: "-1px",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {item.num}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--gray-mid)",
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
