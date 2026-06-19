import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, X } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tarifs — Plans et offres",
  description:
    "Découvrez les tarifs Owrites : plans Starter, Growth et Enterprise pour votre stratégie de contenu B2B en francophonie.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "Starter",
    price: "990",
    period: "/ mois",
    description:
      "Idéal pour les PME qui démarrent leur stratégie de contenu et veulent valider l'approche.",
    highlight: false,
    badge: null,
    features: [
      { text: "4 articles de blog / mois (1 500 mots)", included: true },
      { text: "1 page web ou landing page / mois", included: true },
      { text: "Optimisation SEO de base", included: true },
      { text: "Révisions illimitées", included: true },
      { text: "Tableau de bord analytique", included: true },
      { text: "Email marketing", included: false },
      { text: "Posts LinkedIn", included: false },
      { text: "Agent IA éditorial", included: false },
      { text: "Stratège dédié", included: false },
    ],
  },
  {
    name: "Growth",
    price: "2 490",
    period: "/ mois",
    description:
      "La solution complète pour les entreprises qui veulent accélérer leur croissance organique.",
    highlight: true,
    badge: "Le plus populaire",
    features: [
      { text: "12 articles de blog / mois (jusqu'à 2 500 mots)", included: true },
      { text: "4 pages web ou landing pages / mois", included: true },
      { text: "Optimisation SEO avancée + audit mensuel", included: true },
      { text: "Révisions illimitées", included: true },
      { text: "Tableau de bord analytique complet", included: true },
      { text: "2 newsletters / mois", included: true },
      { text: "8 posts LinkedIn / mois", included: true },
      { text: "Agent IA éditorial (publication auto)", included: true },
      { text: "Stratège contenu dédié", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description:
      "Solution sur-mesure pour les grandes entreprises avec des besoins spécifiques et un volume élevé.",
    highlight: false,
    badge: null,
    features: [
      { text: "Volume de contenu illimité", included: true },
      { text: "Équipe éditoriale dédiée", included: true },
      { text: "Intégration CMS & CRM (HubSpot, Salesforce…)", included: true },
      { text: "Agent IA multi-canal configuré sur mesure", included: true },
      { text: "SLA garanti (délai et qualité)", included: true },
      { text: "Accompagnement stratégie inbound", included: true },
      { text: "Formation équipe interne", included: true },
      { text: "Rapport exécutif mensuel", included: true },
      { text: "Accès API pour blog automatisé", included: true },
    ],
  },
];

const faq = [
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Non. Tous nos plans sont sans engagement mensuel. Vous pouvez résilier à tout moment avant la prochaine date de facturation.",
  },
  {
    q: "Que se passe-t-il si je veux plus de contenu que mon plan ?",
    a: "Des crédits supplémentaires sont disponibles à l'unité. Vous pouvez aussi upgrader votre plan à tout moment.",
  },
  {
    q: "Comment fonctionne l'agent IA éditorial ?",
    a: "L'agent se connecte à votre CMS via API. Il génère, optimise et publie du contenu selon un calendrier éditorial que vous validez. Une supervision humaine est possible.",
  },
  {
    q: "En combien de temps le contenu est-il livré ?",
    a: "5 jours ouvrés pour les articles et pages. Une option express 48h est disponible en supplément.",
  },
  {
    q: "Le contenu est-il entièrement rédigé en français ?",
    a: "Oui, à 100%. Nos rédacteurs sont des natifs francophones qui connaissent les spécificités des marchés belge, suisse et français.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <JsonLd data={faqSchema} />
      {/* Hero */}
      <section className="section-py bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Tarifs
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-5">
            Des tarifs clairs,{" "}
            <span className="text-gradient">zéro surprise</span>
          </h1>
          <p className="text-lg text-gray-500">
            Sans engagement · Sans frais cachés · Résiliable à tout moment
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  plan.highlight
                    ? "border-brand-600 bg-gradient-to-b from-brand-600 to-brand-700 text-white shadow-2xl shadow-brand-600/30"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900">
                      {plan.badge}
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
                    {!plan.price.includes("devis") && (
                      <span
                        className={`text-3xl font-display font-bold ${
                          plan.highlight ? "text-white" : "text-gray-900"
                        }`}
                      >
                        €{plan.price}
                      </span>
                    )}
                    {plan.price.includes("devis") && (
                      <span
                        className={`text-2xl font-display font-bold ${
                          plan.highlight ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Sur devis
                      </span>
                    )}
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
                    <li key={f.text} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <CheckCircle2
                          size={15}
                          className={`mt-0.5 shrink-0 ${
                            plan.highlight ? "text-brand-200" : "text-brand-500"
                          }`}
                        />
                      ) : (
                        <X
                          size={15}
                          className="mt-0.5 shrink-0 text-gray-300"
                        />
                      )}
                      <span
                        className={
                          f.included
                            ? plan.highlight
                              ? "text-brand-50"
                              : "text-gray-700"
                            : "text-gray-400"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-brand-600 text-white hover:bg-brand-700 shadow-sm"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Nous contacter" : "Démarrer maintenant"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-10 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
