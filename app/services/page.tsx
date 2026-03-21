import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services Ghostwriting LinkedIn B2B",
  description:
    "Ghostwriting LinkedIn, optimisation de profil, stratégie de contenu et génération de leads B2B pour fondateurs et consultants francophones.",
};

const services = [
  {
    id: "ghostwriting",
    number: "01",
    title: "Ghostwriting LinkedIn",
    description:
      "Des posts LinkedIn percutants écrits dans votre voix, publiés sous votre nom. Storytelling, insights d'expert, conviction — le contenu qui construit votre autorité et attire vos clients idéaux.",
    benefits: [
      "2 à 5 posts par semaine selon la formule",
      "Formats variés : storytelling, insight, données, questions",
      "Adapté à votre secteur et audience cible",
      "Révisions incluses jusqu'à validation",
      "Calendrier éditorial mensuel fourni",
    ],
    accentColor: "var(--orange)",
    bgColor: "var(--orange-glow)",
  },
  {
    id: "profil",
    number: "02",
    title: "Optimisation de profil LinkedIn",
    description:
      "Votre profil LinkedIn est votre page de vente permanente. On le transforme de A à Z : titre, accroche, résumé, expériences — pour qu'il convertisse les visiteurs en prospects.",
    benefits: [
      "Titre et accroche orientés ICP (Ideal Customer Profile)",
      "Section À propos réécrite avec preuves sociales",
      "Mots-clés B2B intégrés pour la recherche LinkedIn",
      "Recommandations pour bannière et photo de profil",
      "Audit complet avant/après",
    ],
    accentColor: "var(--blue)",
    bgColor: "rgba(75,163,199,0.12)",
  },
  {
    id: "strategie",
    number: "03",
    title: "Stratégie de contenu LinkedIn",
    description:
      "Une roadmap éditoriale sur 90 jours ancrée dans votre positionnement. On définit vos piliers de contenu, votre angle différenciant et les sujets qui résonneront avec vos futurs clients.",
    benefits: [
      "Audit de positionnement et analyse concurrentielle",
      "Définition des 3 piliers de contenu",
      "Planning éditorial 12 semaines",
      "Guidelines voix et ton de marque",
      "Suivi de performance mensuel",
    ],
    accentColor: "var(--orange)",
    bgColor: "var(--orange-glow)",
  },
  {
    id: "leads",
    number: "04",
    title: "Génération de leads LinkedIn",
    description:
      "Transformer votre audience en pipeline commercial. Stratégie inbound, appels à l'action dans le contenu, nurturing organique — les fondations d'un système de leads qui tourne tout seul.",
    benefits: [
      "Stratégie d'acquisition inbound sur LinkedIn",
      "Optimisation du Call-to-Action dans les posts",
      "Séquence de conversion pour les commentaires qualifiés",
      "Tracking mensuel des leads entrants",
      "Reporting ROI transparent",
    ],
    accentColor: "var(--blue)",
    bgColor: "rgba(75,163,199,0.12)",
  },
  {
    id: "formation",
    number: "05",
    title: "Formation LinkedIn B2B",
    description:
      "Pour les équipes qui veulent internaliser la compétence. Formation personnalisée sur la rédaction LinkedIn, le personal branding et la stratégie de contenu B2B.",
    benefits: [
      "Format atelier (demi-journée ou journée complète)",
      "Support pédagogique personnalisé",
      "Exercices pratiques sur vos sujets réels",
      "Suivi post-formation 30 jours",
      "Disponible en présentiel et distanciel",
    ],
    accentColor: "var(--orange)",
    bgColor: "var(--orange-glow)",
  },
  {
    id: "audit",
    number: "06",
    title: "Audit LinkedIn complet",
    description:
      "Un diagnostic complet de votre présence LinkedIn : profil, contenu, stratégie, analytics. Vous repartez avec un plan d'action priorisé pour les 90 prochains jours.",
    benefits: [
      "Analyse du profil et score SSI",
      "Audit des 30 derniers posts",
      "Benchmark vs 3 concurrents",
      "Rapport PDF détaillé",
      "Appel de restitution 60 min inclus",
    ],
    accentColor: "var(--blue)",
    bgColor: "rgba(75,163,199,0.12)",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="section-py text-center px-4"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-tag mx-auto justify-center" style={{ color: "var(--orange)" }}>
            Services LinkedIn B2B
          </span>
          <h1
            className="text-4xl sm:text-5xl font-serif font-bold text-white mt-2 mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Tout ce dont vous avez besoin pour{" "}
            <em
              style={{
                color: "var(--orange-light)",
                fontStyle: "italic",
              }}
            >
              dominer LinkedIn
            </em>
          </h1>
          <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">
            Du ghostwriting à l&apos;optimisation de profil en passant par la stratégie de contenu — des services LinkedIn pensés pour les professionnels B2B francophones.
          </p>
          <Link href="/contact" className="btn-primary">
            Réserver un appel gratuit →
          </Link>
        </div>
      </section>

      {/* Services list */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => {
              const isReverse = i % 2 !== 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Content */}
                  <div className={isReverse ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color: service.accentColor, fontFamily: "var(--font-sans)" }}
                      >
                        {service.number}
                      </span>
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-serif font-bold mb-4"
                      style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: service.bgColor }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4 7L8 3" stroke={service.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="text-gray-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary">
                      En savoir plus →
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`rounded-2xl p-12 flex items-center justify-center min-h-48 ${isReverse ? "lg:order-1" : ""}`}
                    style={{ backgroundColor: service.bgColor, border: `1px solid ${service.accentColor}22` }}>
                    <div
                      className="text-6xl font-serif font-bold opacity-30"
                      style={{ color: service.accentColor, fontFamily: "var(--font-serif)" }}
                    >
                      {service.number}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-py text-center px-4"
        style={{ background: "linear-gradient(135deg, var(--orange) 0%, var(--orange-light) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Pas sûr du service dont vous avez besoin ?
          </h2>
          <p className="text-white/80 mb-8">
            En 30 minutes, on analyse votre situation LinkedIn et on définit ensemble la stratégie adaptée à vos objectifs.
          </p>
          <Link href="/contact" className="btn-white">
            Réserver un appel stratégique gratuit →
          </Link>
        </div>
      </section>
    </div>
  );
}
