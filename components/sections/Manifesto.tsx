const values = [
  {
    title: "Clarté > Volume",
    description: "Un post pertinent vaut mille posts vides. Nous préférons moins publier, mais mieux.",
  },
  {
    title: "Constance > Viralité",
    description: "La régularité construit l'autorité. La viralité est un accident, pas une stratégie.",
  },
  {
    title: "Confiance > Tactiques",
    description: "Les hacks LinkedIn disparaissent. La confiance que vous inspirez, non.",
  },
  {
    title: "Positionnement d'abord",
    description: "Avant de créer du contenu, on sait exactement pourquoi vous, pour qui et comment.",
  },
  {
    title: "Votre voix",
    description: "Nous n'avons pas de style générique. Chaque client a une voix unique — la vôtre.",
  },
  {
    title: "Vision long-terme",
    description: "LinkedIn est un actif qui se construit sur des années. Nous pensons en mois, pas en jours.",
  },
];

export default function Manifesto() {
  return (
    <section className="section-py" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — quote */}
          <div>
            <span className="section-tag" style={{ color: "var(--orange)" }}>Notre philosophie</span>
            <h2
              className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Le manifeste Owrites
            </h2>

            <blockquote
              className="text-xl leading-relaxed text-white/85 italic border-l-4 pl-6 mb-8"
              style={{
                borderColor: "var(--orange)",
                fontFamily: "var(--font-serif)",
              }}
            >
              &ldquo;L&apos;autorité ne se construit pas en publiant plus. Elle se construit en publiant juste — avec une voix claire, une position définie, et la patience de laisser la confiance s&apos;installer.&rdquo;
            </blockquote>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "linear-gradient(135deg, var(--orange), var(--orange-light))" }}
              >
                O
              </div>
              <div>
                <p className="text-sm font-semibold text-white">— Olaide Olaniyan</p>
                <p className="text-xs text-white/50">Fondatrice d&apos;Owrites</p>
              </div>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl p-5 border border-white/10 hover:border-orange/40 transition-colors"
                style={{ backgroundColor: "var(--navy-light)" }}
              >
                <h4
                  className="text-sm font-bold text-white mb-2"
                  style={{ color: "var(--orange-light)" }}
                >
                  {value.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
