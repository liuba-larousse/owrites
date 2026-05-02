import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "990",
    period: "/ mois",
    description: "Idéal pour démarrer et valider votre stratégie de contenu.",
    features: [
      "4 articles de blog / mois",
      "1 page web ou landing page",
      "Optimisation SEO incluse",
      "Révisions illimitées",
      "Tableau de bord analytique",
    ],
    cta: "Démarrer",
    highlight: false,
  },
  {
    name: "Growth",
    price: "2 490",
    period: "/ mois",
    description: "Pour les entreprises qui veulent accélérer leur croissance organique.",
    features: [
      "12 articles de blog / mois",
      "4 pages web ou landing pages",
      "Email marketing (2/mois)",
      "Posts LinkedIn (8/mois)",
      "Agent IA blog (publication auto)",
      "Stratège contenu dédié",
      "Rapport mensuel de performance",
    ],
    cta: "Commencer maintenant",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description: "Solution complète pour les grandes entreprises et groupes.",
    features: [
      "Volume illimité",
      "Équipe éditoriale dédiée",
      "Intégration CMS & CRM",
      "Agent IA multi-canal",
      "SLA garanti",
      "Accompagnement stratégique",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="section-py bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Tarifs transparents
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Investissez dans du contenu{" "}
            <span className="text-gradient">qui travaille pour vous</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Sans engagement. Sans frais cachés. Résiliable à tout moment.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.highlight
                  ? "border-brand-600 bg-gradient-to-b from-brand-600 to-brand-700 text-white shadow-2xl shadow-brand-600/30 scale-[1.02]"
                  : "border-gray-200 bg-white text-gray-900 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    plan.highlight ? "text-brand-200" : "text-brand-600"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`text-3xl font-display font-bold ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price.includes("devis") ? "" : "€"}
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm pb-1 ${
                        plan.highlight ? "text-brand-200" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-brand-100" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight ? "text-brand-200" : "text-brand-500"
                      }`}
                    />
                    <span className={plan.highlight ? "text-brand-50" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/contact"}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-white text-brand-700 hover:bg-brand-50"
                    : "bg-brand-600 text-white hover:bg-brand-700 shadow-sm"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/tarifs"
            className="text-sm text-brand-600 hover:text-brand-700 font-medium underline underline-offset-4"
          >
            Voir tous les détails des offres →
          </Link>
        </div>
      </div>
    </section>
  );
}
