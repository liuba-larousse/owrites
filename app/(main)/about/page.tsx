import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Owrites, Ghostwriter LinkedIn B2B France",
  description:
    "L'histoire d'Owrites, notre mission, nos valeurs et l'équipe derrière le premier service de ghostwriting LinkedIn B2B francophone.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Clarté > Volume",
    description: "Un post pertinent vaut mille posts vides. Nous préférons publier moins mais mieux.",
  },
  {
    title: "Votre voix, toujours",
    description: "Pas de style générique. Nous capturons ce qui vous rend unique et le mettons en mots.",
  },
  {
    title: "Résultats mesurables",
    description: "Chaque stratégie est pilotée par des données. Impressions, leads, SSI — on mesure tout.",
  },
  {
    title: "Confiance avant tout",
    description: "Nous travaillons avec des clients qui nous font confiance pour parler en leur nom. Cette confiance est sacrée.",
  },
  {
    title: "Long terme d'abord",
    description: "LinkedIn est un investissement, pas une publicité. On construit votre autorité sur des années.",
  },
  {
    title: "100% francophone",
    description: "Nos équipes sont nativement francophones et connaissent les nuances du marché B2B français, belge et suisse.",
  },
];

const team = [
  {
    name: "Olaide Olaniyan",
    role: "Fondateur & CEO",
    bio: "Spécialiste du personal branding B2B depuis 8 ans. A fondé Owrites pour aider les fondateurs et consultants francophones à bâtir une autorité réelle sur LinkedIn.",
    initials: "OO",
  },
  {
    name: "Margaux Lefèvre",
    role: "Directrice Éditoriale",
    bio: "Ancienne journaliste B2B. Supervise la qualité de chaque contenu produit par Owrites pour garantir authenticité et impact.",
    initials: "ML",
  },
  {
    name: "Karim Benamara",
    role: "Stratège LinkedIn",
    bio: "Ex-consultant en acquisition B2B. Il conçoit les stratégies de contenu qui transforment les profils LinkedIn en machines à leads.",
    initials: "KB",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="section-py text-center px-4"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-tag mx-auto justify-center" style={{ color: "var(--orange)" }}>
            Notre histoire
          </span>
          <h1
            className="text-4xl sm:text-5xl font-serif font-bold text-white mt-2 mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Le ghostwriter LinkedIn{" "}
            <em style={{ color: "var(--orange-light)", fontStyle: "italic" }}>
              de référence
            </em>{" "}
            en France
          </h1>
          <p className="text-lg text-white/75 max-w-xl mx-auto">
            Owrites est né d&apos;un constat simple : trop de fondateurs et de consultants brillants restent invisibles sur LinkedIn, non pas par manque d&apos;expertise, mais par manque de temps et de méthode.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Notre mission</span>
              <h2
                className="text-3xl font-serif font-bold mt-2 mb-5"
                style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
              >
                Rendre l&apos;expertise de chaque professionnel visible sur LinkedIn
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous croyons que chaque fondateur et consultant B2B a quelque chose de précieux à dire — des expériences, des convictions, des méthodes qui ont fait leurs preuves. Notre rôle est de mettre ces insights en mots, dans votre voix, pour votre audience.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                LinkedIn est le canal B2B le plus puissant du moment. Mais il demande du temps, de la régularité et une vraie stratégie. C&apos;est exactement ce que nous apportons.
              </p>
              <Link href="/contact" className="btn-primary">
                Travailler avec nous →
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "150+", label: "clients accompagnés" },
                { value: "6K+", label: "abonnés générés" },
                { value: "312", label: "leads en 2025" },
                { value: "94", label: "SSI moyen clients" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: "var(--navy)", color: "white" }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--orange-light)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values / Manifesto */}
      <section className="section-py" style={{ backgroundColor: "#f8f9fb" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto justify-center">Nos valeurs</span>
            <h2
              className="text-3xl font-serif font-bold mt-2"
              style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
            >
              Ce en quoi nous croyons profondément
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3
                  className="font-bold mb-2"
                  style={{ color: "var(--orange)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto justify-center">L&apos;équipe</span>
            <h2
              className="text-3xl font-serif font-bold mt-2"
              style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
            >
              Les personnes derrière Owrites
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-7">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, var(--orange), var(--blue))" }}
                >
                  {member.initials}
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{ color: "var(--navy)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold mb-3"
                  style={{ color: "var(--orange)" }}
                >
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-py text-center px-4"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Envie de rejoindre nos clients ?
          </h2>
          <p className="text-white/75 mb-8">
            Réservez un appel gratuit de 30 minutes pour explorer comment Owrites peut transformer votre présence LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Réserver un appel →
            </Link>
            <Link href="/services" className="btn-outline-white">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
