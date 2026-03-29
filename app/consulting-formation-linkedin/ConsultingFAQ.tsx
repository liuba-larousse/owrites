"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Quelle différence entre ghostwriting et consulting lead generation LinkedIn ?",
    a: "Le ghostwriting, c'est nous qui écrivons pour vous. Le consulting lead generation LinkedIn, c'est nous qui vous accompagnons pour maîtriser LinkedIn vous-même — positionnement, stratégie de contenu, lead generation et prospection B2B.",
  },
  {
    q: "Les formations lead generation LinkedIn sont-elles individuelles ou en groupe ?",
    a: "Les deux. Nos formations social selling et lead generation LinkedIn sont disponibles en sessions individuelles (à partir de 1 497€ HT) ou en groupe pour vos équipes (même tarif). Le programme est adapté à chaque situation.",
  },
  {
    q: "Combien de temps pour générer des leads qualifiés sur LinkedIn ?",
    a: "Avec le coaching lead generation LinkedIn (447€ HT/mois), la plupart des clients constatent leurs premiers leads qualifiés en 60 à 90 jours. L'engagement minimum de 3 mois permet de construire un système de lead generation durable.",
  },
  {
    q: "Les formations LinkedIn lead generation sont-elles éligibles au financement ?",
    a: "Oui, nos formations professionnelles de lead generation LinkedIn (de 1 497€ à 3 297€ HT (groupe ou individuel)) peuvent être éligibles aux dispositifs de financement (OPCO, CPF). Contactez-nous pour discuter des possibilités de prise en charge.",
  },
  {
    q: "Quels résultats concrets attendre du coaching lead generation LinkedIn ?",
    a: "Un positionnement clair, un profil optimisé pour la conversion, une ligne éditoriale orientée lead generation et les compétences pour générer des leads qualifiés de manière constante. Nos clients constatent en moyenne +95% d'impressions et des leads entrants dès les 90 premiers jours.",
  },
  {
    q: "Combien coûte un consulting lead generation LinkedIn avec Owrites ?",
    a: "L'audit LinkedIn lead generation est à 147€ HT (ponctuel). Le coaching lead generation complet est à 447€ HT/mois (engagement 3 mois). Les formations varient de 1 497€ à 3 297€ HT (groupe ou individuel). Tous les tarifs sont hors taxes.",
  },
];

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ConsultingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current?.closest(".consulting-root");
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    root.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={rootRef}>
      <section className="faq" id="faq">
        <div className="faq-header">
          <div className="section-tag fade-up">FAQ — Consulting LinkedIn & Lead Generation</div>
          <h2 className="section-title fade-up s1">
            Questions fréquentes sur le <em>lead generation LinkedIn</em>
          </h2>
          <p className="section-desc fade-up s2">
            Tout savoir sur nos offres de consulting LinkedIn, lead generation B2B et formations social selling.
          </p>
        </div>

        {faqs.map((item, i) => (
          <div key={i} className={`faq-item fade-up${i % 4 === 1 ? " s1" : i % 4 === 2 ? " s2" : i % 4 === 3 ? " s3" : ""}${openIndex === i ? " open" : ""}`}>
            <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {item.q}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}

        <div className="faq-cta fade-up">
          <Link href="https://calendly.com/josephcopy/discovery-call" target="_blank" rel="noopener" className="btn-primary">
            D&apos;autres questions ? Parlons-en <ArrowIcon />
          </Link>
        </div>
      </section>

      <div className={`sticky-cta${showSticky ? " show" : ""}`}>
        <span className="sticky-cta-text">LinkedIn lead generation →</span>
        <Link
          href="https://calendly.com/josephcopy/discovery-call"
          target="_blank"
          rel="noopener"
          className="btn-primary"
          style={{ padding: "12px 24px", fontSize: "13px" }}
        >
          Appel gratuit <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
