import { ClipboardList, Users2, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Définissez votre stratégie",
    description:
      "Partagez vos objectifs, votre audience cible et vos thématiques clés. Notre équipe conçoit une stratégie de contenu sur-mesure.",
  },
  {
    number: "02",
    icon: Users2,
    title: "Rencontrez votre équipe",
    description:
      "Un rédacteur expert B2B et un stratège contenu sont affectés à votre compte. Ils deviennent une extension de votre équipe.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Recevez votre contenu",
    description:
      "Articles, pages web, emails ou posts LinkedIn — livrés en 5 jours, optimisés SEO, prêts à publier sans retouches.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Observez les résultats",
    description:
      "Suivez trafic, leads et conversions depuis votre tableau de bord. Notre agent IA publie et optimise en continu.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-py bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Opérationnel en{" "}
            <span className="text-gradient">moins de 48 heures</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Un processus simple et éprouvé pour transformer votre stratégie de
            contenu en machine à générer des leads.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200 hidden lg:block"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 !== 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex items-start gap-5 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition-all ${
                    isRight ? "lg:translate-y-8" : ""
                  }`}
                >
                  {/* Number */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-lg shadow-brand-200">
                    <Icon size={20} className="text-white" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-brand-500 font-display">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold font-display text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
