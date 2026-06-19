"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./casestudy.css";

const CALENDLY = "https://calendly.com/olaniyanolaide/discovery-call";

const ArrowIcon = () => (
  <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CaseStudyHostlyftPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cs-root" ref={rootRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Étude de cas : Comment le ghostwriting LinkedIn a généré des leads STR qualifiés en 90 jours",
              author: { "@type": "Person", name: "Olaide Olaniyan", url: "https://www.linkedin.com/in/olaide-olaniyan-651596176/" },
              publisher: { "@type": "Organization", name: "Owrites", url: "https://owrites.co", logo: { "@type": "ImageObject", url: "https://owrites.co/images/owrites-logo.png" } },
              datePublished: "2026-01-01",
              dateModified: "2026-05-02",
              description: "Étude de cas complète : ghostwriting LinkedIn pour Hostlyft. 16 900+ impressions organiques et 10+ leads inbound en 90 jours.",
              mainEntityOfPage: "https://owrites.co/etude-de-cas/hostlyft",
              image: "https://owrites.co/images/og-case-study-hostlyft.jpg",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://owrites.co" },
                { "@type": "ListItem", position: 2, name: "Études de cas", item: "https://owrites.co/etude-de-cas" },
                { "@type": "ListItem", position: 3, name: "Hostlyft", item: "https://owrites.co/etude-de-cas/hostlyft" },
              ],
            },
          ]),
        }}
      />

      {/* ═══ HERO ═══ */}
      <header className="cs-hero">
        <div className="cs-hero-inner fade-up">
          <div>
            <div className="cs-hero-breadcrumb"><Link href="/">Accueil</Link> → Études de cas → Hostlyft</div>
            <div className="cs-hero-tag">Étude de cas — Lead Generation LinkedIn</div>
            <h1>Comment le ghostwriting LinkedIn a attiré des leads STR qualifiés en 90 jours</h1>
            <p className="cs-hero-desc">Projet de ghostwriting LinkedIn pour un revenue manager STR : augmentation de la visibilité, génération de leads inbound et croissance des impressions organiques en 90 jours.</p>
            <div className="cs-hero-metrics">
              <div className="cs-metric"><div className="cs-metric-num orange">16 900+</div><div className="cs-metric-label">Impressions organiques</div></div>
              <div className="cs-metric"><div className="cs-metric-num blue">1K–6K</div><div className="cs-metric-label">Impressions par post</div></div>
              <div className="cs-metric"><div className="cs-metric-num orange">10+</div><div className="cs-metric-label">Leads STR inbound</div></div>
            </div>
          </div>
          <div className="cs-hero-visual">
            <div className="cs-profile-card" style={{ padding: 0, overflow: "hidden" }}>
              <Image src="/profil-optimise.png" alt="Profil LinkedIn optimisé de Hostlyft — titre SEO, banner Revenue & Listing Optimization for Vacation Rentals" width={600} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div className="cs-profile-card" style={{ padding: 0, overflow: "hidden" }}>
              <Image src="/linkedin-analytique.png" alt="LinkedIn analytics — 31 916 impressions cumulées, courbe de croissance sur 90 jours" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </header>

      {/* ═══ BODY ═══ */}
      <section className="cs-body">

        <h2>Profil client</h2>
        <div className="client-card fade-up">
          <div>
            <h4>Client</h4>
            <p><strong>Hostlyft</strong> — Vacation Rental Revenue Manager &amp; STR Agency Director</p>
            <h4 style={{ marginTop: 20 }}>Audience cible</h4>
            <ul style={{ padding: 0, listStyle: "none" }}>
              <li>Propriétaires de locations courte durée (Airbnb, Booking.com, VRBO)</li>
              <li>Gestionnaires de propriétés STR</li>
              <li>Investisseurs immobiliers locatifs</li>
            </ul>
          </div>
          <div>
            <h4>Services fournis</h4>
            <ul style={{ padding: 0, listStyle: "none" }}>
              <li>Gestion complète du profil LinkedIn</li>
              <li>Ghostwriting de publications LinkedIn</li>
              <li>Personal branding &amp; positionnement</li>
              <li>Optimisation du profil LinkedIn</li>
              <li>Suivi de la visibilité et de l&apos;engagement</li>
              <li>Support lead generation &amp; inbound</li>
            </ul>
          </div>
        </div>

        <h2>Objectif</h2>
        <p>L&apos;objectif était de transformer le profil LinkedIn de Hostlyft en un canal de lead generation clair pour le revenue management de locations courte durée (STR).</p>
        <div className="goal-box fade-up">
          <h3>Objectifs spécifiques</h3>
          <ul>
            <li>Attirer des propriétaires STR et property managers via LinkedIn</li>
            <li>Établir Hostlyft comme expert crédible et partenaire revenue de confiance</li>
            <li>Gagner en visibilité rapidement malgré une petite audience</li>
            <li>Générer des conversations et des demandes inbound qualifiées</li>
          </ul>
        </div>

        <h2>Stratégie Owrites en 4 étapes</h2>

        {/* Step 1 */}
        <div className="strategy-step fade-up">
          <div className="strategy-step-num">1</div>
          <h3>Positionnement clair</h3>
          <p>Nous avons défini un positionnement qui différencie Hostlyft des autres prestataires STR :</p>
          <ul>
            <li>Se positionner comme <strong>&quot;revenue partner&quot;</strong> et non simple prestataire</li>
            <li>Mettre en avant la gestion des revenus, pas juste la gestion locative</li>
            <li>Cibler les propriétaires qui veulent <strong>maximiser leur ADR</strong> (Average Daily Rate)</li>
          </ul>
          <p>Résultat : un message clair qui résonne immédiatement avec l&apos;audience cible.</p>
          <div className="img-grid">
            <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
              <Image src="/linkedin-post-performance.png" alt="Publication LinkedIn Hostlyft avec positionnement revenue partner — engagement visible" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
              <Image src="/publication-3-ways-adr.png" alt="Publication LinkedIn 3 Ways to Lift ADR — contenu éducatif STR, 11 likes, 13 commentaires" width={600} height={700} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="strategy-step fade-up">
          <div className="strategy-step-num">2</div>
          <h3>Optimisation du profil LinkedIn</h3>
          <p>Nous avons réécrit le profil pour qu&apos;il serve de landing page de conversion :</p>
          <ul>
            <li><strong>Titre SEO</strong> optimisé avec des mots-clés STR pertinents</li>
            <li>Section <strong>« À propos »</strong> réécrite pour la conversion</li>
            <li><strong>Expériences</strong> repositionnées pour la crédibilité</li>
            <li>Le contenu visuel a été <strong>entièrement revu</strong> (banner, photo)</li>
          </ul>
          <div className="img-grid">
            <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
              <Image src="/profil-optimise.png" alt="Profil LinkedIn optimisé Hostlyft — banner, titre SEO, photo professionnelle" width={600} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
              <Image src="/profil-optimise-2.png" alt="Section À propos LinkedIn réécrite — positionnement revenue partner, services détaillés" width={600} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="strategy-step fade-up">
          <div className="strategy-step-num">3</div>
          <h3>Stratégie de contenu ciblée</h3>
          <p>Nous avons construit une stratégie de contenu axée sur les problématiques STR :</p>
          <ul>
            <li>Pricing dynamique et revenue management</li>
            <li>Optimisation des annonces sur les plateformes</li>
            <li>Stratégies pour augmenter l&apos;ADR et le taux d&apos;occupation</li>
            <li>Conseils pratiques pour les propriétaires et gestionnaires</li>
          </ul>
          <h4 style={{ fontSize: 14, color: "var(--orange)", textTransform: "uppercase", letterSpacing: 1, marginTop: 24 }}>Top performing posts</h4>
          <div className="img-grid">
            <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
              <Image src="/post-top-performant.png" alt="Top performing posts LinkedIn Hostlyft — 9K, 5K et 3K impressions par post" width={600} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
              <Image src="/analytique-dashboard.png" alt="Engagement LinkedIn Hostlyft — 633 engagements sociaux, 429 réactions, 166 commentaires" width={600} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="strategy-step fade-up">
          <div className="strategy-step-num">4</div>
          <h3>Publication constante &amp; engagement</h3>
          <p>Nous avons mis en place un système de publication régulier :</p>
          <ul>
            <li>Calendrier de publication <strong>cohérent et stratégique</strong></li>
            <li><strong>Engagement proactif</strong> avec les propriétaires STR</li>
            <li>Commentaires stratégiques pour <strong>augmenter la visibilité</strong></li>
            <li>Contenu planifié à l&apos;avance, validé avant chaque publication</li>
          </ul>
          <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
            <Image src="/vue-profil.png" alt="Profile appearances LinkedIn Hostlyft — 3 717 apparitions, 14 apparitions en recherche" width={900} height={200} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        {/* Results */}
        <div className="results-section fade-up">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400 }}>Résultats (90 jours)</h2>
          <div className="results-grid">
            <div className="result-card"><div className="result-card-icon">👁️</div><div className="result-card-num orange">16 900+</div><div className="result-card-label">Impressions organiques LinkedIn</div></div>
            <div className="result-card"><div className="result-card-icon">🔥</div><div className="result-card-num blue">1K–6K</div><div className="result-card-label">Impressions par top post (organique)</div></div>
            <div className="result-card"><div className="result-card-icon">🎯</div><div className="result-card-num orange">10+</div><div className="result-card-label">Leads STR inbound qualifiés</div></div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textAlign: "center", marginTop: 20 }}>Impact principal : le client est passé d&apos;un profil invisible à une position de <strong style={{ color: "#fff" }}>trusted revenue partner</strong> dans l&apos;industrie STR.</p>
          <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", marginTop: 28 }}>
            <Image src="/linkedin-analytique.png" alt="LinkedIn analytics Hostlyft — 31 916 impressions cumulées, courbe de croissance ascendante sur 90 jours" width={900} height={500} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>

        <h3>Analytics LinkedIn — détail</h3>
        <div className="analytics-bar fade-up">
          <div className="analytics-item"><div className="analytics-item-num">312</div><div className="analytics-item-label">Vues de profil</div></div>
          <div className="analytics-item"><div className="analytics-item-num">1 045</div><div className="analytics-item-label">Impressions posts</div></div>
          <div className="analytics-item"><div className="analytics-item-num">74</div><div className="analytics-item-label">Apparitions en recherche</div></div>
        </div>

        <h2>Avant vs Après : la transformation LinkedIn</h2>
        <table className="compare-tbl fade-up">
          <caption>Comparaison avant/après le ghostwriting LinkedIn pour Hostlyft (90 jours)</caption>
          <thead><tr><th>Critère</th><th>Avant Owrites</th><th className="highlight">Après 90 jours</th></tr></thead>
          <tbody>
            <tr><td>Positionnement</td><td>Flou — &quot;STR manager&quot;</td><td>Clair — &quot;Trusted revenue partner&quot;</td></tr>
            <tr><td>Publications</td><td>Irrégulières, génériques</td><td>Hebdomadaires, stratégiques</td></tr>
            <tr><td>Profil LinkedIn</td><td>Non optimisé</td><td>Landing page de conversion</td></tr>
            <tr><td>Impressions</td><td>~100–200 par post</td><td>1 000–6 000 par post</td></tr>
            <tr><td>Leads inbound</td><td>0</td><td>10+ leads STR qualifiés</td></tr>
            <tr><td>Total impressions</td><td>Négligeable</td><td>16 900+ en 90 jours</td></tr>
            <tr><td>Perception marché</td><td>Inconnu</td><td>Référence revenue management STR</td></tr>
          </tbody>
        </table>

        {/* CTA */}
        <div className="cs-cta fade-up">
          <h2>Prêt à attirer les bons clients sur LinkedIn ?</h2>
          <p>Si vous voulez que votre profil LinkedIn génère des conversations qualifiées comme Hostlyft, commençons par un appel stratégique de 30 minutes.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={CALENDLY} target="_blank" rel="noopener" className="btn btn-white">
              Réserver un appel gratuit <ArrowIcon />
            </Link>
            <Link href="/tarifs" className="btn btn-outline">Voir les tarifs</Link>
          </div>
        </div>

        <p>En savoir plus sur nos <Link href="/#services" style={{ color: "var(--orange)", fontWeight: 600 }}>services de ghostwriting LinkedIn</Link>, découvrir notre <Link href="/consulting" style={{ color: "var(--orange)", fontWeight: 600 }}>approche consulting LinkedIn lead generation</Link>, ou lire nos <Link href="/blog" style={{ color: "var(--orange)", fontWeight: 600 }}>articles sur le ghostwriting et la lead generation LinkedIn</Link>.</p>
      </section>

      {/* POWER IN NUMBERS */}
      <section className="power-numbers fade-up">
        <h2>La puissance des chiffres</h2>
        <div className="power-grid">
          <div className="power-item">
            <div className="power-icon">🔥</div>
            <div className="power-num">16 900<span>+</span></div>
            <div className="power-label">Impressions LinkedIn organiques en 90 jours</div>
          </div>
          <div className="power-item">
            <div className="power-icon">📈</div>
            <div className="power-num">1K–6K</div>
            <div className="power-label">Impressions par top post (100% organique)</div>
          </div>
          <div className="power-item">
            <div className="power-icon">🎯</div>
            <div className="power-num">10<span>+</span></div>
            <div className="power-label">Leads STR inbound qualifiés (sans publicité)</div>
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className={`sticky-cta${showSticky ? " show" : ""}`} style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "#fff", borderTop: "1px solid var(--gray-200)", padding: "12px 20px", display: "none", justifyContent: "center", alignItems: "center", gap: 16, boxShadow: "0 -4px 24px rgba(0,0,0,0.06)", transform: showSticky ? "translateY(0)" : "translateY(100%)", transition: "transform 0.4s ease" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--black)" }}>Les mêmes résultats pour vous →</span>
        <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "12px 24px", fontSize: 13 }}>
          Appel gratuit <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
