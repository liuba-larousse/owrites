import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Notre mission",
  description:
    "Découvrez l'histoire d'Owrites, notre mission, nos valeurs et l'équipe derrière la plateforme de contenu B2B francophone.",
};

const values = [
  {
    icon: Target,
    title: "Résultats avant tout",
    description:
      "Chaque contenu est créé avec un objectif mesurable. Trafic, leads, conversions — nous ne produisons pas du contenu pour le seul plaisir de publier.",
  },
  {
    icon: Heart,
    title: "Authenticité française",
    description:
      "Nous croyons que le meilleur contenu francophone est écrit par des personnes qui vivent et respirent la langue et la culture. Aucun contenu machine-translated.",
  },
  {
    icon: Zap,
    title: "L'IA au service de l'humain",
    description:
      "Nous utilisons l'IA pour amplifier nos experts, pas pour les remplacer. La créativité humaine + la puissance de l'IA = du contenu qui se démarque.",
  },
];

const team = [
  {
    name: "Olaïde Diallo",
    role: "Fondatrice & CEO",
    bio: "Journaliste de formation, spécialiste du marketing de contenu B2B depuis 10 ans. A lancé Owrites pour aider les entreprises francophones à raconter leur histoire.",
    initials: "OD",
    color: "bg-brand-500",
  },
  {
    name: "Pierre-Antoine Lefèvre",
    role: "Directeur Éditorial",
    bio: "Ancien rédacteur en chef chez plusieurs médias B2B belges. Supervise la qualité éditoriale de l'ensemble des productions Owrites.",
    initials: "PL",
    color: "bg-purple-500",
  },
  {
    name: "Amina Khalidi",
    role: "Head of AI & Automation",
    bio: "Ingénieure en NLP, ex-DeepMind. Conçoit les agents IA qui alimentent les blogs de nos clients en continu et sans friction.",
    initials: "AK",
    color: "bg-emerald-500",
  },
  {
    name: "Marc Steiner",
    role: "Directeur Marché Suisse",
    bio: "Basé à Genève, Marc dirige le développement sur le marché suisse francophone et accompagne les entreprises romandes.",
    initials: "MS",
    color: "bg-amber-500",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-py bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Notre histoire
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
            Le contenu B2B francophone mérite{" "}
            <span className="text-gradient">mieux</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Owrites est né d&apos;un constat simple : les entreprises belges, suisses et
            françaises méritent du contenu marketing de la même qualité que leurs
            homologues anglophones. Nous l&apos;avons construit.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-5">
                Pourquoi Owrites existe
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  En 2020, Olaïde Diallo travaille comme consultante en marketing
                  de contenu pour des PME belges. Elle observe le même problème
                  partout : les entreprises savent qu&apos;elles doivent créer du
                  contenu, mais elles n&apos;ont ni le temps, ni l&apos;expertise, ni les
                  ressources pour le faire correctement.
                </p>
                <p>
                  Les solutions disponibles ? Soit des agences anglophones qui
                  livrent du contenu traduit sans âme, soit des freelances dont la
                  disponibilité est imprévisible. Rien de sérieux, de scalable et
                  de réellement francophone.
                </p>
                <p>
                  Owrites est la réponse. Une plateforme qui combine des experts
                  éditoriaux natifs francophones, une technologie IA de pointe et
                  un processus industrialisé — pour que chaque entreprise
                  francophone puisse accéder à du contenu qui performe.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 p-8 text-white">
              <p className="text-3xl font-display font-bold mb-2">2020</p>
              <p className="text-brand-200 text-sm mb-6">Année de fondation</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-2 shrink-0" />
                  <p className="text-sm text-brand-100">Lancé depuis Bruxelles, Belgique</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-2 shrink-0" />
                  <p className="text-sm text-brand-100">500+ entreprises clientes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-2 shrink-0" />
                  <p className="text-sm text-brand-100">Présence en Belgique, Suisse et France</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-2 shrink-0" />
                  <p className="text-sm text-brand-100">30+ rédacteurs experts B2B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-10 text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-semibold font-display text-gray-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-10 text-center">
            L&apos;équipe dirigeante
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="text-sm font-semibold font-display text-gray-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-brand-600 font-medium mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-gray-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Rejoignez l&apos;aventure Owrites
          </h2>
          <p className="text-gray-500 mb-8">
            Que vous soyez une entreprise cherchant à développer sa présence
            digitale ou un rédacteur B2B passionné, nous serions ravis d&apos;échanger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-all"
            >
              Démarrer un projet <ArrowRight size={16} />
            </Link>
            <Link
              href="mailto:bonjour@owrites.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-all"
            >
              Rejoindre l&apos;équipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
