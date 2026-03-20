import type { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  FileText,
  Mail,
  Globe,
  Linkedin,
  Bot,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services de contenu B2B",
  description:
    "Découvrez tous les services de création de contenu Owrites : articles de blog, pages web, email marketing, SEO, LinkedIn et agent IA éditorial.",
};

const services = [
  {
    id: "articles",
    icon: FileText,
    color: "bg-brand-50 text-brand-600",
    title: "Articles de blog",
    description:
      "Des articles longs formats (1 500 à 3 000 mots) rédigés par des experts de votre secteur, optimisés pour le SEO et adaptés à votre audience B2B.",
    benefits: [
      "Recherche approfondie et sourcée",
      "Optimisation SEO technique",
      "Ton aligné sur votre marque",
      "Illustrations et visuels inclus",
      "Publication automatique possible",
    ],
  },
  {
    id: "landing",
    icon: Globe,
    color: "bg-purple-50 text-purple-600",
    title: "Pages web & Landing pages",
    description:
      "Des pages qui convertissent — home page, pages services, landing pages de campagne. Chaque mot est pensé pour guider votre visiteur vers l'action.",
    benefits: [
      "Copywriting orienté conversion",
      "Structure UX recommandée",
      "A/B testing suggéré",
      "Compatible avec votre CMS",
      "Optimisation mobile incluse",
    ],
  },
  {
    id: "email",
    icon: Mail,
    color: "bg-emerald-50 text-emerald-600",
    title: "Email marketing",
    description:
      "Séquences d'onboarding, newsletters B2B, campagnes de nurturing — des emails qui ouvrent, se lisent et génèrent des clics.",
    benefits: [
      "Séquences automation",
      "A/B testing objet inclus",
      "Personnalisation dynamique",
      "Templates HTML disponibles",
      "Conformité RGPD",
    ],
  },
  {
    id: "seo",
    icon: PenTool,
    color: "bg-blue-50 text-blue-600",
    title: "Contenu SEO",
    description:
      "Audit de mots-clés, clusters thématiques, maillage interne — une stratégie SEO complète exécutée avec du contenu qui positionne durablement.",
    benefits: [
      "Recherche sémantique approfondie",
      "Cocon thématique",
      "Maillage interne optimisé",
      "Balises et métadonnées",
      "Suivi de positions inclus",
    ],
  },
  {
    id: "social",
    icon: Linkedin,
    color: "bg-sky-50 text-sky-600",
    title: "Réseaux sociaux B2B",
    description:
      "Posts LinkedIn, threads de thought leadership, storytelling dirigeant — faites de votre présence sociale un levier de génération de leads.",
    benefits: [
      "Calendrier éditorial mensuel",
      "Formats carousel et articles",
      "Personal branding dirigeant",
      "Stratégie de hashtags",
      "Analytics et recommandations",
    ],
  },
  {
    id: "ai-agent",
    icon: Bot,
    color: "bg-amber-50 text-amber-600",
    title: "Agent IA éditorial",
    description:
      "Notre agent IA se connecte à votre blog et publie du contenu en continu — articles, mises à jour, réponses aux tendances — sans intervention humaine.",
    benefits: [
      "Connexion API/CMS directe",
      "Publication planifiée automatique",
      "Optimisation SEO en temps réel",
      "Adaptation au ton de la marque",
      "Dashboard de monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-py bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Nos services
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-5 max-w-2xl mx-auto">
            Du contenu stratégique pour chaque canal B2B
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Articles, pages, emails, LinkedIn, SEO et agent IA — une offre
            complète pour couvrir tous vos besoins en contenu.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25"
          >
            Demander un devis gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isReverse = i % 2 !== 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isReverse ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={isReverse ? "lg:col-start-2" : ""}>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${service.color} mb-5`}
                    >
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            size={16}
                            className="text-brand-500 mt-0.5 shrink-0"
                          />
                          <span className="text-gray-600">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual placeholder */}
                  <div
                    className={`rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 h-64 lg:h-80 flex items-center justify-center ${
                      isReverse ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div
                      className={`w-20 h-20 rounded-3xl ${service.color.replace(
                        "text-",
                        "text-"
                      )} flex items-center justify-center opacity-40`}
                    >
                      <Icon size={48} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-py bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
            Pas sûr du service dont vous avez besoin ?
          </h2>
          <p className="text-gray-500 mb-8">
            Discutons de vos objectifs. En 30 minutes, nous définissons ensemble
            la stratégie de contenu adaptée à votre entreprise.
          </p>
          <Link
            href="/contact#demo"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25"
          >
            Réserver un appel stratégique gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
