import Link from "next/link";

const results = [
  {
    emoji: "📈",
    value: "+95%",
    label: "d'impressions organiques",
    description: "En moyenne sur les 90 premiers jours d'accompagnement.",
  },
  {
    emoji: "👥",
    value: "6 000+",
    label: "abonnés qualifiés gagnés",
    description: "Des abonnés dans votre cible B2B, pas des chiffres vides.",
  },
  {
    emoji: "💼",
    value: "312",
    label: "leads générés en 2025",
    description: "Pour l'ensemble de nos clients actifs sur l'année.",
  },
  {
    emoji: "⭐",
    value: "94",
    label: "score SSI LinkedIn moyen",
    description: "Social Selling Index — dans le top 10% de votre secteur.",
  },
];

export default function Results() {
  return (
    <section id="resultats" className="section-py" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag mx-auto justify-center">Résultats organiques LinkedIn</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-2"
            style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
          >
            Des métriques de performance{" "}
            <span style={{ color: "var(--orange)" }}>concrètes</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result) => (
            <div
              key={result.value}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{result.emoji}</div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: "var(--font-serif)", color: "var(--orange)" }}
              >
                {result.value}
              </div>
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--navy)" }}
              >
                {result.label}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Obtenir ces résultats →
          </Link>
        </div>
      </div>
    </section>
  );
}
