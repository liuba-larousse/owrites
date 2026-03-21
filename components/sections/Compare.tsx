const inboundItems = [
  "Les prospects viennent à vous",
  "Autorité et confiance construites sur le long terme",
  "Coût par lead quasi nul",
  "Communauté engagée autour de votre expertise",
  "Pipeline qui se remplit naturellement",
];

const outboundItems = [
  "Prospection à froid chronophage",
  "Taux de réponse en chute libre",
  "Dépendance aux budgets pub",
  "Relation froide dès le premier contact",
  "ROI difficile à mesurer",
];

export default function Compare() {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, var(--orange) 0%, var(--blue) 100%)",
          opacity: 0.95,
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Inbound vs Outbound
          </h2>
          <p className="text-white/80">Pourquoi le contenu LinkedIn bat la prospection froide</p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Inbound / Owrites */}
          <div className="bg-white rounded-2xl p-7 shadow-2xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: "var(--orange-glow)", color: "var(--orange)" }}
            >
              ✦ Inbound — Owrites
            </div>
            <ul className="space-y-3">
              {inboundItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--orange-glow)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ color: "var(--navy)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS badge */}
          <div
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto font-bold text-sm shadow-xl"
            style={{ color: "var(--navy)" }}
          >
            VS
          </div>

          {/* Outbound */}
          <div
            className="rounded-2xl p-7 shadow-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5 bg-white/10 text-white/80">
              ✗ Outbound classique
            </div>
            <ul className="space-y-3">
              {outboundItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2L8 8M8 2L2 8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
