import Link from "next/link";

const audiences = [
  {
    emoji: "🚀",
    title: "Fondateurs B2B",
    description: "Vous avez bâti quelque chose de solide. LinkedIn est le canal pour faire connaître votre vision, recruter des clients et attirer des partenaires — sans y passer vos soirées.",
    items: ["CEOs de startups B2B", "Dirigeants de scale-ups", "Fondateurs de cabinets"],
  },
  {
    emoji: "💡",
    title: "Consultants & coachs",
    description: "Votre expertise est votre actif. Nous la mettons en valeur sur LinkedIn pour que vos futurs clients vous trouvent avant même que vous les cherchiez.",
    items: ["Consultants stratégie", "Coachs business", "Formateurs B2B"],
  },
  {
    emoji: "🎯",
    title: "Prestataires de services",
    description: "Agences, freelances senior, experts en ESN — votre personal branding LinkedIn est le meilleur outil de développement commercial que vous avez.",
    items: ["Agences B2B", "Freelances experts", "Responsables développement"],
  },
];

export default function Audience() {
  return (
    <section id="audience" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag mx-auto justify-center">Pour qui</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-2"
            style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
          >
            Pour les professionnels B2B qui{" "}
            <span style={{ color: "var(--orange)" }}>vendent leur expertise</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{audience.emoji}</div>
              <h3
                className="text-xl font-serif font-bold mb-3"
                style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
              >
                {audience.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {audience.description}
              </p>
              <ul className="space-y-1.5 text-left">
                {audience.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span style={{ color: "var(--orange)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Je veux développer mon LinkedIn →
          </Link>
        </div>
      </div>
    </section>
  );
}
