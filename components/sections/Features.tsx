import {
  PenTool,
  Zap,
  Globe2,
  BarChart3,
  Users2,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "Contenu expert B2B",
    description:
      "Nos rédacteurs spécialisés créent du contenu technique et commercial qui parle le langage de vos acheteurs B2B.",
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
  {
    icon: Bot,
    title: "IA intégrée",
    description:
      "Notre agent IA alimente votre blog en continu, optimise les articles pour le SEO et adapte le ton à votre marque.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Globe2,
    title: "100% francophone",
    description:
      "Tout le contenu est rédigé nativement en français par des experts qui comprennent les marchés belge, suisse et français.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Orienté résultats",
    description:
      "Chaque pièce de contenu est conçue pour atteindre un objectif mesurable : trafic, leads, notoriété ou conversion.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Livraison rapide",
    description:
      "Délai garanti de 5 jours ouvrés. Pour les urgences, une option express 48h est disponible sur tous nos plans.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Users2,
    title: "Équipe dédiée",
    description:
      "Un responsable de compte et une équipe éditoriale assignés à votre projet pour une cohérence de voix parfaite.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export default function Features() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Pourquoi Owrites
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin pour{" "}
            <span className="text-gradient">dominer votre marché</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Une plateforme complète qui combine expertise humaine et intelligence
            artificielle pour produire du contenu B2B qui performe.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/30 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feat.bg} ${feat.color} mb-4`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold font-display text-gray-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
