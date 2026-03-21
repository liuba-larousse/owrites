import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Positionnement & capture de voix",
    description: "On commence par un appel de découverte approfondi. On capture votre façon de penser, vos anecdotes, vos convictions — tout ce qui vous rend unique dans votre secteur.",
    tags: ["Appel 90 min", "Questionnaire expert", "Veille sectorielle"],
  },
  {
    number: "2",
    title: "Création & validation",
    description: "Notre équipe rédige les posts, les soumet pour votre validation. Vous gardez le contrôle total sur chaque mot publié sous votre nom.",
    tags: ["2 tours de révision", "Délai 48h", "Votre approbation finale"],
  },
  {
    number: "3",
    title: "Visibilité & leads",
    description: "Publication optimisée, engagement suivi, performance analysée. On ajuste la stratégie chaque mois selon les résultats pour maximiser vos leads.",
    tags: ["Rapport mensuel", "Ajustements continus", "Suivi des leads"],
  },
];

export default function Process() {
  return (
    <section id="methode" className="section-py" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag mx-auto justify-center">Notre méthode</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-2"
            style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
          >
            3 étapes. Du contenu{" "}
            <span style={{ color: "var(--orange)" }}>qui vous ressemble.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl border border-gray-200 p-8">
              {/* Step number */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-6"
                style={{ backgroundColor: "var(--orange)", fontFamily: "var(--font-sans)" }}
              >
                {step.number}
              </div>

              {/* Connector line (between cards) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-14 -right-3 w-6 h-0.5 z-10"
                  style={{ backgroundColor: "var(--orange)", opacity: 0.4 }}
                />
              )}

              <h3
                className="text-lg font-serif font-bold mb-3"
                style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
              >
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "var(--orange-glow)", color: "var(--orange)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Démarrer ma stratégie LinkedIn →
          </Link>
        </div>
      </div>
    </section>
  );
}
