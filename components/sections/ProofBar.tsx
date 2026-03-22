export default function ProofBar() {
  return (
    <div
      style={{
        padding: "48px",
        textAlign: "center",
        borderTop: "1px solid var(--gray-100)",
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "var(--black)",
          marginBottom: 24,
        }}
      >
        Confiance de +20 fondateurs et consultants B2B · 100% organique · Résultats en 90 jours
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          alignItems: "center",
          flexWrap: "wrap",
          opacity: 0.4,
        }}
      >
        {["HOSTLYFT", "CLIENT 2", "CLIENT 3", "CLIENT 4", "CLIENT 5"].map(
          (name, i) => (
            <span
              key={i}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--gray-dark)",
                letterSpacing: "0.5px",
              }}
            >
              {name}
            </span>
          )
        )}
      </div>
    </div>
  );
}
