"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./pricing.css";

const CALENDLY = "https://calendly.com/olaniyanolaide/discovery-call";

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 16, height: 16 }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ghostwritingPlans = [
  {
    type: "std" as const,
    icon: "✍️",
    name: "Starter",
    title: "Visibilité LinkedIn",
    tagline: "Lancez votre présence LinkedIn avec un contenu régulier et stratégique.",
    amount: "297€",
    period: "/mois",
    ht: "HT · Engagement 3 mois",
    badge: null,
    cta: "Choisir Starter",
    features: [
      "4 publications LinkedIn / mois",
      "Stratégie de contenu LinkedIn",
      "Capture de voix & positionnement",
      "Validation avant chaque publication",
      "Reporting mensuel des performances",
    ],
  },
  {
    type: "pop" as const,
    icon: "🚀",
    name: "Growth",
    title: "Lead Generation LinkedIn",
    tagline: "Contenu stratégique + optimisation profil pour générer des leads qualifiés B2B.",
    amount: "597€",
    period: "/mois",
    ht: "HT · Engagement 3 mois",
    badge: "Le plus populaire",
    cta: "Choisir Growth",
    features: [
      "8 publications LinkedIn / mois",
      "Stratégie de lead generation LinkedIn",
      "Optimisation complète du profil LinkedIn",
      "Ligne éditoriale & piliers de contenu",
      "Capture de voix approfondie",
      "1 appel stratégique / mois",
      "Reporting & analyse lead generation",
    ],
  },
  {
    type: "std" as const,
    icon: "👑",
    name: "Authority",
    title: "Personal Branding Complet",
    tagline: "Le package complet : ghostwriting, lead generation, personal branding et accompagnement stratégique.",
    amount: "897€",
    period: "/mois",
    ht: "HT · Engagement 3 mois",
    badge: null,
    cta: "Choisir Authority",
    features: [
      "12 publications LinkedIn / mois",
      "Stratégie complète lead generation & branding",
      "Optimisation profil LinkedIn premium",
      "Coaching stratégique (2 appels / mois)",
      "Engagement & networking LinkedIn",
      "Création de contenu long-format",
      "Support prioritaire par messagerie",
      "Reporting avancé & KPI lead generation",
    ],
  },
];

const consultingPlans = [
  {
    type: "std" as const,
    icon: "🔍",
    name: "Audit",
    title: "Diagnostic LinkedIn",
    tagline: "Audit complet de votre profil, positionnement et potentiel de lead generation.",
    amount: "97€",
    period: "unique",
    ht: "HT · Paiement unique",
    badge: null,
    cta: "Demander un audit",
    features: [
      "Analyse profil LinkedIn complète",
      "Audit positionnement & personal branding",
      "Analyse de vos publications et engagement",
      "Évaluation potentiel lead generation",
      "Rapport détaillé + recommandations",
      "1 appel de restitution (45 min)",
    ],
  },
  {
    type: "pop" as const,
    icon: "🎯",
    name: "Coaching",
    title: "Lead Generation Stratégique",
    tagline: "Accompagnement 1-to-1 pour maîtriser la lead generation LinkedIn par vous-même.",
    amount: "297€",
    period: "/mois",
    ht: "HT · Engagement 3 mois",
    badge: "Le plus demandé",
    cta: "Démarrer le coaching",
    features: [
      "Audit profil + positionnement inclus",
      "Stratégie de lead generation sur-mesure",
      "2 sessions de coaching / mois",
      "Optimisation profil LinkedIn",
      "Ligne éditoriale & piliers de contenu",
      "Suivi des KPI lead generation",
      "Support messagerie entre sessions",
    ],
  },
  {
    type: "std" as const,
    icon: "💎",
    name: "Premium",
    title: "Consulting LinkedIn Complet",
    tagline: "Coaching intensif + formation social selling + accompagnement stratégique complet.",
    amount: "497€",
    period: "/mois",
    ht: "HT · Engagement 3 mois",
    badge: null,
    cta: "Choisir Premium",
    features: [
      "Tout le plan Coaching inclus",
      "4 sessions de coaching / mois",
      "Formation social selling intégrée",
      "Stratégie de prospection LinkedIn",
      "Templates de messages & outreach",
      "Analyse CRM & pipeline de leads",
      "Support prioritaire illimité",
      "Reporting avancé lead generation",
    ],
  },
];

const formations = [
  { tag: "Social selling", tagClass: "blue", title: "Formation Social Selling & Lead Generation", desc: "Du premier contact à la conversion — maîtrisez la prospection et la lead generation B2B sur LinkedIn.", items: ["Optimiser votre profil pour la lead generation", "Ciblage et prospection LinkedIn", "Maîtriser la vente B2B en ligne", "Ligne éditoriale pour attirer des leads", "Engager le dialogue avec vos prospects"], duration: "12h30", price: "1 247€" },
  { tag: "Personal branding", tagClass: "orange", title: "Formation Personal Branding & Lead Generation", desc: "Construisez votre marque personnelle pour attirer des leads qualifiés et devenir leader d\u2019opinion.", items: ["Définir votre positionnement lead generation", "Publications qui génèrent des leads", "Autorité sectorielle LinkedIn", "Stratégie de contenu long terme", "Mesurer vos métriques de performance"], duration: "10h", price: "997€" },
  { tag: "Community management", tagClass: "blue", title: "Formation Community Management LinkedIn", desc: "Gérez votre page entreprise LinkedIn et vos réseaux sociaux pour maximiser la lead generation.", items: ["Réseaux sociaux pour le lead generation", "Optimiser vos comptes professionnels", "Structurer votre ligne éditoriale", "Calendrier éditorial orienté leads", "Analyser les performances"], duration: "15h", price: "1 497€" },
  { tag: "Prospection B2B", tagClass: "orange", title: "Formation Prospection, Vente & Lead Generation", desc: "LinkedIn, emailing et vente consultative — de la lead generation à la conclusion de ventes B2B.", items: ["Générer des leads qualifiés LinkedIn", "Campagnes d\u2019emailing B2B", "Maîtriser la vente consultative", "Négocier les ventes complexes", "Suivi CRM et analyse des leads"], duration: "22h", price: "2 197€" },
];

const addons = [
  { icon: "👤", title: "Optimisation Profil LinkedIn", desc: "Réécriture complète de votre profil : titre, à propos, expériences, SEO LinkedIn.", price: "97€", unit: "HT · unique" },
  { icon: "📄", title: "Article LinkedIn Long-Format", desc: "Article de fond (1 500+ mots) pour asseoir votre autorité et votre personal branding.", price: "147€", unit: "HT / article" },
  { icon: "📊", title: "Audit Lead Generation Express", desc: "Diagnostic rapide de votre potentiel LinkedIn avec recommandations prioritaires.", price: "67€", unit: "HT · unique" },
];

const compareRows = [
  { label: "Publications LinkedIn / mois", starter: "4", growth: "8", authority: "12" },
  { label: "Stratégie de contenu LinkedIn", starter: "check", growth: "check", authority: "check" },
  { label: "Capture de voix & positionnement", starter: "check", growth: "check", authority: "check" },
  { label: "Optimisation profil LinkedIn", starter: "dash", growth: "check", authority: "check" },
  { label: "Stratégie lead generation LinkedIn", starter: "dash", growth: "check", authority: "check" },
  { label: "Ligne éditoriale & piliers de contenu", starter: "dash", growth: "check", authority: "check" },
  { label: "Appels stratégiques / mois", starter: "dash", growth: "1", authority: "2" },
  { label: "Engagement & networking LinkedIn", starter: "dash", growth: "dash", authority: "check" },
  { label: "Contenu long-format", starter: "dash", growth: "dash", authority: "check" },
  { label: "Support prioritaire messagerie", starter: "dash", growth: "dash", authority: "check" },
  { label: "Reporting & KPI lead generation", starter: "Basique", growth: "Détaillé", authority: "Avancé" },
];

const faqs = [
  { q: "Pourquoi un engagement de 3 mois minimum ?", a: "La lead generation LinkedIn est un processus qui nécessite du temps pour construire de l\u2019autorité. Les premiers résultats apparaissent en 30 à 60 jours, et le système se renforce sur 90 jours. Après l\u2019engagement initial, vous continuez mois par mois." },
  { q: "Puis-je changer de package en cours de route ?", a: "Oui, vous pouvez upgrader à tout moment. Le passage à un package supérieur prend effet le mois suivant. Le downgrade est possible après la période d\u2019engagement." },
  { q: "Les formations sont-elles au même prix en groupe et en individuel ?", a: "Oui. Le tarif affiché (100\u202F€ HT/heure) est le même que vous soyez seul ou en groupe. C\u2019est le même programme, la même qualité d\u2019accompagnement." },
  { q: "Quel package choisir si je débute sur LinkedIn ?", a: "Le package Growth (597\u202F€/mois) est le plus adapté pour démarrer la lead generation LinkedIn : il inclut l\u2019optimisation du profil, la stratégie de contenu et les publications hebdomadaires. Si votre budget est limité, commencez par l\u2019Audit (97\u202F€) pour avoir un diagnostic clair." },
  { q: "Comment fonctionne le paiement ?", a: "Facturation mensuelle par virement ou carte bancaire. Les formations sont facturées en une fois avant le début du programme. Tous les tarifs sont HT (TVA applicable selon votre situation)." },
];

function CompareCell({ value }: { value: string }) {
  if (value === "check") return <td className="check">✓</td>;
  if (value === "dash") return <td className="dash">—</td>;
  return <td>{value}</td>;
}

export default function PricingPage() {
  const [activeSection, setActiveSection] = useState<"ghostwriting" | "consulting">("ghostwriting");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    root.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Re-observe on section toggle
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    root.querySelectorAll(".fade-up:not(.visible)").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activePlans = activeSection === "ghostwriting" ? ghostwritingPlans : consultingPlans;
  const noteText = activeSection === "ghostwriting"
    ? "Tous les packages incluent la capture de voix, la validation du contenu et un onboarding personnalisé. Engagement minimum 3 mois, renouvelable mensuellement."
    : "Le coaching inclut l\u2019audit LinkedIn (valeur 97\u202F€). Engagement minimum 3 mois, renouvelable mensuellement ensuite.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pricing-root" ref={rootRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-breadcrumb fade-up">
            <Link href="/">Accueil</Link> → <span>Tarifs</span>
          </div>
          <h1 className="fade-up s1">
            Des tarifs clairs pour votre <em>lead generation LinkedIn</em>
          </h1>
          <p className="hero-sub fade-up s2">
            Ghostwriting LinkedIn, consulting lead generation et formations social selling — des packages conçus pour les fondateurs et consultants B2B qui veulent des résultats.
          </p>
          <div className="hero-guarantee fade-up s3">
            ✦ Tous les tarifs sont HT · Sans frais cachés · Annulable à tout moment après engagement
          </div>
        </div>
      </section>

      {/* ═══ TOGGLE ═══ */}
      <div className="toggle-section">
        <div className="toggle-wrap fade-up">
          <button
            className={`toggle-btn${activeSection === "ghostwriting" ? " active" : ""}`}
            onClick={() => setActiveSection("ghostwriting")}
          >
            Ghostwriting LinkedIn
          </button>
          <button
            className={`toggle-btn${activeSection === "consulting" ? " active" : ""}`}
            onClick={() => setActiveSection("consulting")}
          >
            Consulting &amp; Coaching
          </button>
        </div>
      </div>

      {/* ═══ PLANS ═══ */}
      <section className="pricing">
        <div className="pricing-grid">
          {activePlans.map((plan, i) => (
            <div key={plan.name} className={`plan ${plan.type} fade-up${i > 0 ? ` s${i}` : ""}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div className="plan-icon">{plan.icon}</div>
              <div className="plan-name">{plan.name}</div>
              <h3>{plan.title}</h3>
              <p className="plan-tagline">{plan.tagline}</p>
              <div className="plan-price">
                <span className="plan-amount">{plan.amount}</span>
                <span className="plan-period">{plan.period}</span>
              </div>
              <div className="plan-ht">{plan.ht}</div>
              <div className="plan-divider" />
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}><span className="ck">✓</span>{f}</li>
                ))}
              </ul>
              <div className="plan-cta">
                <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
                  {plan.cta} <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="pricing-note fade-up">{noteText}</p>
        <p className="pricing-note fade-up" style={{ marginTop: 16 }}>
          <Link href="/consulting" style={{ color: "var(--orange)", fontWeight: 600, textDecoration: "none" }}>
            En savoir plus sur notre consulting LinkedIn &amp; lead generation →
          </Link>
        </p>
      </section>

      {/* ═══ FORMATIONS ═══ */}
      <section className="formations-pricing" id="formations">
        <div className="formations-pricing-inner">
          <div className="fp-header">
            <div className="section-tag fade-up">Formations LinkedIn lead generation</div>
            <h2 className="section-title fade-up s1">
              Formations social selling &amp; <em>lead generation</em>
            </h2>
            <p className="section-desc fade-up s2">
              Programmes complets pour maîtriser la lead generation LinkedIn. Groupe ou individuel, même tarif.
            </p>
            <div className="fp-rate fade-up s3">💶 Tarif : 100€ HT / heure de formation</div>
          </div>
          <div className="fp-grid">
            {formations.map((f, i) => (
              <div key={f.title} className={`fp-card fade-up${i > 0 ? ` s${i}` : ""}`}>
                <div className="fp-card-top">
                  <div className={`fp-card-tag ${f.tagClass}`}>{f.tag}</div>
                  <div className="fp-card-price">
                    <div className="amount">{f.price}</div>
                    <div className="ht">HT</div>
                  </div>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="fp-card-list">
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="fp-card-meta">
                  <span>📚 <strong>{f.duration}</strong></span>
                  <span>👤 Groupe ou individuel</span>
                </div>
              </div>
            ))}
          </div>
          <div className="fp-cta fade-up">
            <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
              Demander un programme sur-mesure <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ADD-ONS ═══ */}
      <section className="addons">
        <div className="addons-header">
          <div className="section-tag fade-up">Services complémentaires</div>
          <h2 className="section-title fade-up s1">
            Ajoutez à votre <em>package</em>
          </h2>
          <p className="section-desc fade-up s2">
            Des services à la carte pour compléter votre ghostwriting ou consulting LinkedIn.
          </p>
        </div>
        <div className="addons-grid">
          {addons.map((a, i) => (
            <div key={a.title} className={`addon fade-up${i > 0 ? ` s${i}` : ""}`}>
              <div className="addon-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
              <div className="addon-price">{a.price} <span>{a.unit}</span></div>
            </div>
          ))}
        </div>
        <div className="addons-cta fade-up">
          <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-dark">
            Discutons de vos besoins <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ═══ COMPARE TABLE ═══ */}
      <section className="compare">
        <div className="compare-inner">
          <div className="compare-header">
            <div className="section-tag fade-up">Comparaison des packages</div>
            <h2 className="section-title fade-up s1" style={{ color: "#fff" }}>
              Quel package de <em>lead generation</em> vous correspond ?
            </h2>
            <p className="section-desc fade-up s2">
              Comparez les fonctionnalités de chaque package ghostwriting LinkedIn.
            </p>
          </div>
          <table className="compare-table fade-up">
            <thead>
              <tr>
                <th>Fonctionnalité</th>
                <th>Starter<br /><span style={{ fontWeight: 500, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>297€/mois</span></th>
                <th>Growth<br /><span style={{ fontWeight: 500, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>597€/mois</span></th>
                <th>Authority<br /><span style={{ fontWeight: 500, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>897€/mois</span></th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <CompareCell value={row.starter} />
                  <CompareCell value={row.growth} />
                  <CompareCell value={row.authority} />
                </tr>
              ))}
            </tbody>
          </table>
          <div className="compare-cta fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-white">
              Choisir mon package lead generation <ArrowIcon />
            </Link>
            <Link href="/etude-de-cas/hostlyft" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Découvrez comment Hostlyft a généré des leads →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="faq" id="faq">
        <div className="faq-header">
          <div className="section-tag fade-up">FAQ — Tarifs &amp; packages</div>
          <h2 className="section-title fade-up s1">
            Questions sur les <em>tarifs</em>
          </h2>
        </div>
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item fade-up${i > 0 && i < 4 ? ` s${i}` : ""}${openFaq === i ? " open" : ""}`}>
            <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {item.q}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="faq-a"><p>{item.a}</p></div>
          </div>
        ))}
        <div className="faq-cta fade-up">
          <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            Discutons de votre budget <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ═══ CALENDLY ═══ */}
      <section className="cal-section" id="contact">
        <div className="cal-inner">
          <div>
            <div className="section-tag fade-up">Prêt à démarrer ?</div>
            <h2 className="section-title fade-up s1">
              Parlons de votre <em>lead generation LinkedIn</em>
            </h2>
            <p className="section-desc fade-up s2" style={{ marginBottom: 28 }}>
              Appel gratuit de 30 min pour identifier le package idéal selon vos objectifs et votre budget.
            </p>
            <div className="cal-trust fade-up s3">
              {["Appel 100% gratuit — sans engagement", "Diagnostic de votre profil LinkedIn", "Recommandation du package adapté", "Plan d\u2019action concret en fin d\u2019appel"].map((item) => (
                <div key={item} className="cal-trust-item">
                  <span className="ct">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="cal-embed fade-up s2">
            <iframe
              src={`${CALENDLY}?hide_gdpr_banner=1&background_color=f9fafb&text_color=171717&primary_color=FF5202`}
              title="Réserver un appel — choisir votre package Owrites"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══ STICKY CTA ═══ */}
      <div className={`sticky-cta${showSticky ? " show" : ""}`}>
        <span className="sticky-cta-text">À partir de 97€ HT →</span>
        <Link
          href={CALENDLY}
          target="_blank"
          rel="noopener"
          className="btn-primary"
          style={{ padding: "12px 24px", fontSize: 13 }}
        >
          Appel gratuit <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
