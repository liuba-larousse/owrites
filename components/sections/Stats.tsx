const stats = [
  { value: "500+", label: "Clients B2B actifs", sub: "Belgique, Suisse, France" },
  { value: "12 000+", label: "Articles publiés", sub: "Tous secteurs confondus" },
  { value: "340%", label: "Croissance trafic moyen", sub: "À 6 mois post-lancement" },
  { value: "4.9/5", label: "Note moyenne clients", sub: "Sur 850+ avis vérifiés" },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-purple-600 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-white/90 mb-0.5">{stat.label}</p>
              <p className="text-xs text-white/60">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
