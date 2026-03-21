const stats = [
  { value: "2–5×", label: "plus de portée organique" },
  { value: "+70%", label: "de visibilité sur LinkedIn" },
  { value: "100%", label: "votre voix, votre style" },
  { value: "90j", label: "résultats mesurables" },
];

export default function ProofBar() {
  return (
    <section className="relative z-10 -mt-6 px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
