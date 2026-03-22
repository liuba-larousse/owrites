"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Ghostwriting LinkedIn",
    description: "Des posts LinkedIn percutants qui capturent votre expertise et génèrent de l'engagement — écrits dans votre voix, publiés sous votre nom.",
    items: ["2–5 posts par semaine", "Formats variés (storytelling, insight, carousels)", "Adapté à votre audience cible"],
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Optimisation de profil LinkedIn",
    description: "Votre profil LinkedIn transformé en page de vente. Accroche, résumé, bannière — tout optimisé pour attirer vos clients idéaux.",
    items: ["Titre et accroche optimisés", "Section À propos réécrite", "Mots-clés B2B intégrés"],
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Stratégie de contenu LinkedIn",
    description: "Une roadmap éditoriale sur mesure pour positionner votre expertise et nourrir un pipeline de leads qualifiés sur le long terme.",
    items: ["Audit de positionnement", "Planning éditorial 90 jours", "Suivi KPIs mensuel"],
  },
  {
    number: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Génération de leads LinkedIn",
    description: "Transformez votre audience LinkedIn en pipeline commercial. Stratégie inbound, nurturing organique et appels à l'action mesurables.",
    items: ["Stratégie d'acquisition inbound", "Entonnoir de conversion LinkedIn", "Reporting mensuel des leads"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag mx-auto justify-center">Services ghostwriting LinkedIn</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-2"
            style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
          >
            Ghostwriting, personal branding
            <br />
            <span style={{ color: "var(--orange)" }}>&amp; génération de leads B2B</span>
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange cursor-default"
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "var(--orange)", fontFamily: "var(--font-sans)" }}
                >
                  {service.number}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--orange-glow)", color: "var(--orange)" }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-serif font-bold mb-3"
                style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--orange-glow)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary">
            Voir tous nos services →
          </Link>
        </div>
      </div>
    </section>
  );
}
