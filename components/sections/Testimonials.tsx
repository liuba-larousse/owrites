import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Owrites a transformé notre stratégie de contenu. En 4 mois, notre trafic organique a triplé et nous recevons des demandes de devis qualifiées chaque semaine grâce aux articles.",
    name: "Sophie Marchand",
    title: "Directrice Marketing",
    company: "Innotech Belgium",
    avatar: "SM",
    color: "bg-brand-500",
  },
  {
    quote:
      "La qualité rédactionnelle est exceptionnelle. Nos articles sont pointus, bien sourcés et reflètent parfaitement notre expertise. Nos prospects arrivent déjà convaincus.",
    name: "Thomas Berger",
    title: "CEO",
    company: "FinAdvisor Suisse",
    avatar: "TB",
    color: "bg-purple-500",
  },
  {
    quote:
      "Nous publions 8 articles par mois sans mobiliser notre équipe. L'agent IA gère tout le calendrier éditorial. C'est exactement ce qu'il nous fallait pour scaler.",
    name: "Marie-Claire Dupont",
    title: "Head of Content",
    company: "Groupex France",
    avatar: "MD",
    color: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Témoignages clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Des résultats concrets,{" "}
            <span className="text-gradient">des clients satisfaits</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm text-gray-600 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
