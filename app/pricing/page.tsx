import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs Ghostwriting LinkedIn B2B",
  description:
    "Découvrez les tarifs Owrites pour le ghostwriting LinkedIn, l'optimisation de profil et la stratégie de contenu B2B pour fondateurs et consultants.",
};

const plans = [
  {
    name: "Essentiel",
    price: "1 490",
    period: "/ mois",
    description:
      "Pour démarrer votre présence LinkedIn avec un contenu de qualité et un positionnement clair.",
    highlight: false,
    badge: null,
    features: [
      { text: "8 posts LinkedIn / mois", included: true },
      { text: "Optimisation de profil (1 fois)", included: true },
      { text: "Appel de découverte 60 min", included: true },
      { text: "2 tours de révision par post", included: true },
      { text: "Rapport mensuel de performance", included: true },
      { text: "Stratégie de contenu 90 jours", included: false },
      { text: "Génération de leads LinkedIn", included: false },
      { text: "Appel bilan mensuel", included: false },
    ],
  },
  {
    name: "Croissance",
    price: "2 490",
    period: "/ mois",
    description:
      "La solution complète pour les fondateurs et consultants qui veulent accélérer leur acquisition LinkedIn.",
    highlight: true,
    badge: "Le plus populaire",
    features: [
      { text: "16 posts LinkedIn / mois", included: true },
      { text: "Optimisation de profil complète", included: true },
      { text: "Stratégie de contenu 90 jours", included: true },
      { text: "Appel de découverte 90 min", included: true },
      { text: "Révisions illimitées", included: true },
      { text: "Génération de leads LinkedIn", included: true },
      { text: "Appel bilan mensuel 30 min", included: true },
      { text: "Rapport ROI détaillé", included: true },
    ],
  },
  {
    name: "Sur mesure",
    price: "Sur devis",
    period: "",
    description:
      "Pour les équipes, les entreprises multi-profils ou les besoins spécifiques. On construit la formule avec vous.",
    highlight: false,
    badge: null,
    features: [
      { text: "Volume de contenu à définir", included: true },
      { text: "Multi-profils LinkedIn (équipe)", included: true },
      { text: "Formation équipe incluse", included: true },
      { text: "Accompagnement stratégique dédié", included: true },
      { text: "Intégration CRM/outils sales", included: true },
      { text: "SLA garantis", included: true },
      { text: "Reporting exécutif mensuel", included: true },
      { text: "Accès prioritaire à l'équipe", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Nos formules sont sans engagement longue durée. Vous pouvez arrêter à la fin de n'importe quel mois avec 30 jours de préavis.",
  },
  {
    q: "Comment capturez-vous ma voix ?",
    a: "Via un appel de découverte approfondi, un questionnaire détaillé et une phase de calibration avec révisions. Les premières semaines, on affine jusqu'à ce que le résultat soit parfaitement aligné.",
  },
  {
    q: "Dois-je tout relire et approuver ?",
    a: "Vous pouvez choisir d'approuver chaque post avant publication, ou nous déléguer la publication directe. La plupart de nos clients choisissent un modèle hybride : lecture rapide, go si tout va bien.",
  },
  {
    q: "En combien de temps voit-on des résultats ?",
    a: "Les premières métriques (impressions, engagement) s'améliorent dans les 30 jours. Les leads qualifiés apparaissent généralement entre 60 et 90 jours. LinkedIn est un canal cumulatif.",
  },
  {
    q: "Travaillez-vous avec des profils hors de France ?",
    a: "Oui. Nous travaillons avec des professionnels francophones en France, Belgique, Suisse, Canada et dans tous les pays francophones.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="section-py text-center px-4"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-tag mx-auto justify-center" style={{ color: "var(--orange)" }}>
            Tarifs
          </span>
          <h1
            className="text-4xl sm:text-5xl font-serif font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Des tarifs clairs,{" "}
            <em style={{ color: "var(--orange-light)", fontStyle: "italic" }}>
              zéro surprise
            </em>
          </h1>
          <p className="text-lg text-white/75">
            Sans engagement · Sans frais cachés · Résiliable à tout moment
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl border p-8 flex flex-col transition-all duration-300"
                style={
                  plan.highlight
                    ? {
                        backgroundColor: "var(--navy)",
                        borderColor: "var(--orange)",
                        boxShadow: "0 20px 60px rgba(232,134,42,0.2)",
                      }
                    : {
                        backgroundColor: "#fff",
                        borderColor: "#e5e7eb",
                      }
                }
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold text-white whitespace-nowrap"
                      style={{ backgroundColor: "var(--orange)" }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: plan.highlight ? "var(--orange-light)" : "var(--orange)" }}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-3">
                    {!plan.price.includes("devis") && (
                      <span
                        className="text-3xl font-serif font-bold"
                        style={{
                          color: plan.highlight ? "#fff" : "var(--navy)",
                          fontFamily: "var(--font-serif)",
                        }}
                      >
                        {plan.price} €
                      </span>
                    )}
                    {plan.price.includes("devis") && (
                      <span
                        className="text-2xl font-serif font-bold"
                        style={{
                          color: plan.highlight ? "#fff" : "var(--navy)",
                          fontFamily: "var(--font-serif)",
                        }}
                      >
                        Sur devis
                      </span>
                    )}
                    {plan.period && (
                      <span
                        className="text-sm pb-1"
                        style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6b7280" }}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: plan.highlight ? "var(--orange-glow)" : "var(--orange-glow)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4 7L8 3" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </span>
                      )}
                      <span
                        style={{
                          color: f.included
                            ? plan.highlight ? "rgba(255,255,255,0.85)" : "var(--navy)"
                            : plan.highlight ? "rgba(255,255,255,0.3)" : "#9ca3af",
                        }}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={plan.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                >
                  {plan.name === "Sur mesure" ? "Nous contacter" : "Démarrer maintenant"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py" style={{ backgroundColor: "#f8f9fb" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-serif font-bold text-center mb-10"
            style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
          >
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3
                  className="text-sm font-serif font-semibold mb-2"
                  style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
