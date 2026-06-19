"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../blog-article.css";

const CALENDLY = "https://calendly.com/olaniyanolaide/discovery-call";

const ArrowIcon = () => (
  <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function BlogLeadGenPage() {
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
    <div className="blog-article-root" ref={rootRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Comment générer des leads qualifiés sur LinkedIn en 2026 : le guide complet",
              author: { "@type": "Person", name: "Olaide Olaniyan", url: "https://www.linkedin.com/in/olaide-olaniyan-651596176/" },
              publisher: { "@type": "Organization", name: "Owrites", url: "https://owrites.co", logo: { "@type": "ImageObject", url: "https://owrites.co/images/owrites-logo.png" } },
              datePublished: "2026-02-15",
              dateModified: "2026-05-02",
              description: "Guide complet pour générer des leads qualifiés sur LinkedIn en 2026. Stratégie de contenu, optimisation de profil, social selling et lead generation B2B pour fondateurs et consultants.",
              mainEntityOfPage: "https://owrites.co/blog/generer-leads-qualifies-linkedin",
              image: "https://owrites.co/images/og-blog-leads-linkedin-2026.jpg",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Comment générer des leads qualifiés sur LinkedIn en 2026 ?", acceptedAnswer: { "@type": "Answer", text: "Pour générer des leads qualifiés sur LinkedIn en 2026, combinez cinq leviers : un profil optimisé pour la conversion, du contenu stratégique aligné sur votre offre, une stratégie d\u2019engagement ciblée, un système de social selling structuré, et un suivi rigoureux des KPI de lead generation." } },
                { "@type": "Question", name: "Combien de temps faut-il pour générer des leads sur LinkedIn ?", acceptedAnswer: { "@type": "Answer", text: "Les premiers résultats (impressions, engagement) apparaissent en 30 jours. Les premiers leads qualifiés arrivent généralement entre 60 et 90 jours. Le système se renforce ensuite de manière cumulative." } },
                { "@type": "Question", name: "Le lead generation LinkedIn fonctionne-t-il sans publicité ?", acceptedAnswer: { "@type": "Answer", text: "Oui. La lead generation organique sur LinkedIn est souvent plus efficace que la publicité pour les fondateurs et consultants B2B. Le contenu stratégique construit de l\u2019autorité et génère des leads entrants de manière durable, sans budget publicitaire." } },
              ],
            },
          ]),
        }}
      />

      {/* ═══ HERO ═══ */}
      <header className="article-hero">
        <div className="article-hero-inner fade-up">
          <div className="article-breadcrumb">
            <Link href="/">Accueil</Link> → <Link href="/blog">Blog</Link> → Lead generation LinkedIn
          </div>
          <div className="article-category">Lead Generation B2B</div>
          <h1>Comment générer des leads qualifiés sur LinkedIn en 2026 : le guide complet</h1>
          <p className="article-hero-desc">
            Stratégie de contenu, optimisation de profil, social selling — le guide complet pour transformer votre LinkedIn en machine à lead generation B2B. 100% organique, zéro publicité.
          </p>
          <div className="article-meta">
            <div className="article-avatar">OO</div>
            <div className="article-meta-text">
              <strong>Olaide Olaniyan</strong><br />
              Fondateur Owrites <span>·</span> 15 février 2026 <span>·</span> 10 min de lecture
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div className="article-featured fade-up s1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/blog/generer-leads-qualifies-linkedin.svg"
          alt="Générer des leads qualifiés sur LinkedIn — illustration"
          style={{ width: "100%", borderRadius: 16, display: "block" }}
        />
      </div>

      {/* ═══ ARTICLE BODY ═══ */}
      <article className="article-body fade-up s2">

        {/* Direct Answer */}
        <div className="direct-answer">
          <strong>Pour générer des leads qualifiés sur LinkedIn en 2026</strong>, combinez cinq leviers : un profil optimisé pour la conversion, du contenu stratégique aligné sur votre offre, une stratégie d&apos;engagement ciblée, un système de social selling structuré, et un suivi rigoureux des KPI. Les premiers leads arrivent entre 60 et 90 jours.
        </div>

        {/* Table of Contents */}
        <nav className="toc" aria-label="Table des matières">
          <div className="toc-title">Sommaire</div>
          <ol>
            <li><a href="#pourquoi-linkedin">Pourquoi LinkedIn pour la lead generation B2B en 2026 ?</a></li>
            <li><a href="#profil-conversion">Optimiser votre profil LinkedIn pour la conversion</a></li>
            <li><a href="#contenu-strategique">Créer du contenu qui génère des leads</a></li>
            <li><a href="#engagement">La stratégie d&apos;engagement qui déclenche des conversations</a></li>
            <li><a href="#social-selling">Le social selling structuré</a></li>
            <li><a href="#kpi">Mesurer vos résultats : les KPI qui comptent</a></li>
            <li><a href="#timeline">Timeline réaliste : quand attendre des résultats ?</a></li>
          </ol>
        </nav>

        <p>En 2026, LinkedIn est devenu le canal d&apos;acquisition n°1 pour les fondateurs et consultants B2B. Pas grâce à la publicité ou la prospection froide — mais grâce au contenu stratégique, au personal branding et au social selling organique.</p>

        <p>Le problème ? La plupart des professionnels publient sans stratégie, espèrent que « le contenu fera son travail », et abandonnent après quelques semaines sans résultat. Ce guide vous montre comment construire un <strong>système de lead generation LinkedIn</strong> qui fonctionne — étape par étape.</p>

        {/* ═══ SECTION 1 ═══ */}
        <h2 id="pourquoi-linkedin">Pourquoi LinkedIn pour la lead generation B2B en 2026 ?</h2>

        <p>LinkedIn reste la plateforme la plus efficace pour la lead generation B2B en 2026. Contrairement aux autres réseaux sociaux, LinkedIn concentre les décideurs, les budgets et les intentions d&apos;achat. Voici pourquoi le lead generation organique surpasse les autres canaux :</p>

        <table className="compare-tbl">
          <thead>
            <tr>
              <th>Canal d&apos;acquisition</th>
              <th className="highlight">LinkedIn organique</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>LinkedIn Ads</td><td>CPL 5-10x plus élevé, aucune autorité construite</td></tr>
            <tr><td>Cold email / outreach</td><td>Taux de réponse en baisse, perçu comme spam</td></tr>
            <tr><td>SEO / blog</td><td>6-12 mois avant résultats, pas de relation directe</td></tr>
            <tr><td>Salons / événements</td><td>Coût élevé, ponctuel, non scalable</td></tr>
            <tr><td>Contenu LinkedIn stratégique</td><td>Autorité + leads + personal branding — cumulatif</td></tr>
          </tbody>
        </table>

        <div className="callout">
          <strong>Fait clé :</strong> 80% des leads B2B générés sur les réseaux sociaux proviennent de LinkedIn. Et contrairement à la publicité, l&apos;autorité construite par le contenu se capitalise dans le temps.
        </div>

        {/* ═══ SECTION 2 ═══ */}
        <h2 id="profil-conversion">Optimiser votre profil LinkedIn pour la conversion</h2>

        <p>Votre profil LinkedIn est votre landing page. Avant de publier du contenu, assurez-vous que votre profil convertit les visiteurs en conversations. En 2026, un profil optimisé pour la lead generation contient :</p>

        <ul>
          <li><strong>Un titre orienté bénéfice</strong> — Pas votre job title, mais ce que vous faites pour vos clients. Ex: « J&apos;aide les fondateurs B2B à générer des leads qualifiés sur LinkedIn » plutôt que « CEO chez XYZ ».</li>
          <li><strong>Un « À propos » structuré</strong> — Problème → Solution → Preuve → CTA. Maximum 3 paragraphes, langage direct.</li>
          <li><strong>Une section Expérience orientée résultats</strong> — Chiffres, cas clients, méthodes — pas une liste de responsabilités.</li>
          <li><strong>Un CTA clair</strong> — Lien vers votre calendrier, votre site ou un lead magnet dans le profil et dans la section « Sélection ».</li>
          <li><strong>Des signaux de confiance</strong> — Recommandations ciblées, certifications pertinentes, contenu mis en avant.</li>
        </ul>

        <div className="takeaway">
          <h3>💡 Règle des 7 secondes</h3>
          <p>Un visiteur décide en 7 secondes s&apos;il reste sur votre profil. Votre titre et votre photo de couverture doivent immédiatement communiquer à qui vous vous adressez et quel problème vous résolvez.</p>
        </div>

        <p>Besoin d&apos;aide pour optimiser votre profil ? Découvrez notre <Link href="/tarifs" style={{ color: "var(--orange)", fontWeight: 600 }}>service d&apos;optimisation de profil LinkedIn à 97€ HT</Link>.</p>

        {/* ═══ SECTION 3 ═══ */}
        <h2 id="contenu-strategique">Créer du contenu LinkedIn qui génère des leads</h2>

        <p>Le contenu LinkedIn qui génère des leads en 2026 n&apos;est pas du contenu « motivationnel » ou des posts génériques. C&apos;est du contenu <strong>aligné sur votre offre commerciale</strong>, qui démontre votre expertise et déclenche des conversations avec vos prospects idéaux.</p>

        <h3>Les 4 piliers de contenu lead generation</h3>

        <ul className="numbered">
          <li><strong>Contenu d&apos;expertise</strong> — Montrez comment vous résolvez le problème de votre client idéal. Pas de théorie — des méthodes concrètes, des frameworks, des analyses.</li>
          <li><strong>Contenu de preuve</strong> — Études de cas, résultats clients, avant/après. Le contenu qui prouve que votre méthode fonctionne génère 3x plus de conversations entrantes.</li>
          <li><strong>Contenu de positionnement</strong> — Vos convictions, votre vision du métier, ce qui vous différencie. Ce contenu attire les prospects qui partagent vos valeurs.</li>
          <li><strong>Contenu de connexion</strong> — Histoires personnelles liées à votre expertise, leçons apprises, transparence sur votre parcours. Ce contenu humanise et crée de la confiance.</li>
        </ul>

        <div className="callout">
          <strong>La règle 70/20/10 :</strong> 70% de contenu d&apos;expertise et de preuve (lead generation direct), 20% de positionnement (différenciation), 10% de connexion (humanisation). Cette répartition maximise les leads tout en construisant votre marque personnelle.
        </div>

        <h3>Fréquence de publication optimale</h3>

        <p>En 2026, la fréquence optimale pour la lead generation LinkedIn est de <strong>2 à 3 publications par semaine</strong>. Publier quotidiennement n&apos;est plus nécessaire — la qualité et l&apos;alignement stratégique comptent plus que le volume.</p>

        <table className="compare-tbl">
          <thead>
            <tr>
              <th>Fréquence</th>
              <th>Impact lead generation</th>
              <th className="highlight">Recommandation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1x / semaine</td><td>Visibilité limitée, lead generation lent</td><td>Minimum viable</td></tr>
            <tr><td>2-3x / semaine</td><td>Sweet spot : visibilité + leads + durabilité</td><td className="check">✓ Recommandé</td></tr>
            <tr><td>5x / semaine</td><td>Risque de dilution, burnout, moins de temps pour l&apos;engagement</td><td>Uniquement si ghostwrité</td></tr>
          </tbody>
        </table>

        {/* ═══ SECTION 4 ═══ */}
        <h2 id="engagement">La stratégie d&apos;engagement qui déclenche des conversations</h2>

        <p>Publier du contenu ne suffit pas. En 2026, la lead generation LinkedIn repose autant sur l&apos;engagement stratégique que sur le contenu. Voici comment transformer l&apos;engagement en conversations qualifiées :</p>

        <ul>
          <li><strong>Commentez les posts de vos prospects idéaux</strong> — Pas des « super post ! » mais des commentaires de valeur qui démontrent votre expertise. 5-10 commentaires ciblés par jour suffisent.</li>
          <li><strong>Répondez à chaque commentaire sur vos posts</strong> — C&apos;est là que les conversations se créent. Posez des questions, approfondissez, invitez à poursuivre en message privé.</li>
          <li><strong>Utilisez les messages privés avec intention</strong> — Après un échange en commentaire, un message privé personnalisé a un taux de réponse 5x supérieur au cold outreach.</li>
          <li><strong>Participez aux conversations de votre secteur</strong> — Identifiez les hashtags, les créateurs et les sujets où se trouvent vos prospects. Soyez visible là où ils sont.</li>
        </ul>

        <div className="takeaway">
          <h3>💡 La règle du 1:3</h3>
          <p>Pour chaque publication que vous faites, passez 3x plus de temps à engager sur le contenu des autres. C&apos;est contre-intuitif, mais c&apos;est la stratégie qui génère le plus de leads entrants en 2026.</p>
        </div>

        {/* ═══ SECTION 5 ═══ */}
        <h2 id="social-selling">Le social selling structuré</h2>

        <p>Le social selling LinkedIn en 2026, ce n&apos;est pas envoyer des messages de vente en masse. C&apos;est construire des relations avec vos prospects idéaux à travers du contenu, de l&apos;engagement et des conversations pertinentes. Voici un framework en 4 étapes :</p>

        <ul className="numbered">
          <li><strong>Identifier</strong> — Définissez votre ICP (Ideal Customer Profile). Utilisez les filtres LinkedIn et Sales Navigator pour construire une liste de 200-500 prospects ciblés.</li>
          <li><strong>Attirer</strong> — Publiez du contenu qui résonne avec les problèmes de votre ICP. Votre contenu doit être un aimant à prospects, pas un mégaphone.</li>
          <li><strong>Engager</strong> — Interagissez régulièrement avec le contenu de vos prospects. Commentez, réagissez, partagez. Devenez une présence familière dans leur fil.</li>
          <li><strong>Convertir</strong> — Quand un prospect engage avec votre contenu ou visite votre profil, initiez une conversation personnalisée. L&apos;objectif : un appel découverte, pas une vente.</li>
        </ul>

        <p>Pour un accompagnement structuré sur le social selling, découvrez nos <Link href="/consulting" style={{ color: "var(--orange)", fontWeight: 600 }}>formations social selling LinkedIn</Link> — en groupe ou en individuel.</p>

        {/* ═══ SECTION 6 ═══ */}
        <h2 id="kpi">Mesurer vos résultats : les KPI qui comptent</h2>

        <p>La lead generation LinkedIn sans mesure, c&apos;est de l&apos;espoir. Voici les KPI à suivre chaque semaine et chaque mois pour évaluer votre système :</p>

        <table className="compare-tbl">
          <thead>
            <tr>
              <th>KPI</th>
              <th>Fréquence</th>
              <th className="highlight">Benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Impressions / post</td><td>Hebdo</td><td>1 000 – 5 000 (selon audience)</td></tr>
            <tr><td>Taux d&apos;engagement</td><td>Hebdo</td><td>2-5% (hors connexions)</td></tr>
            <tr><td>Vues de profil</td><td>Hebdo</td><td>+50% en 30 jours</td></tr>
            <tr><td>Demandes de connexion reçues</td><td>Mensuel</td><td>20-50 / mois (qualifiées)</td></tr>
            <tr><td>Conversations initiées (inbound)</td><td>Mensuel</td><td>5-15 / mois</td></tr>
            <tr><td>Appels découverte bookés</td><td>Mensuel</td><td>3-8 / mois</td></tr>
            <tr><td>Leads qualifiés</td><td>Mensuel</td><td>2-5 / mois</td></tr>
          </tbody>
        </table>

        <div className="callout">
          <strong>Important :</strong> les impressions et l&apos;engagement sont des indicateurs avancés. Les leads et les appels sont des indicateurs retardés. Ne jugez pas votre stratégie sur les leads du premier mois — regardez la tendance sur 90 jours.
        </div>

        {/* ═══ SECTION 7 ═══ */}
        <h2 id="timeline">Timeline réaliste : quand attendre des résultats ?</h2>

        <p>La lead generation LinkedIn est un processus cumulatif. Voici une timeline réaliste basée sur notre expérience avec des dizaines de fondateurs et consultants B2B :</p>

        <ul>
          <li><strong>Jours 1-30 :</strong> Optimisation du profil, lancement du contenu, premiers signaux d&apos;engagement. Impressions en hausse, premières vues de profil qualifiées.</li>
          <li><strong>Jours 30-60 :</strong> Le contenu trouve son audience. Les conversations commencent dans les commentaires. Les premières demandes de connexion qualifiées arrivent.</li>
          <li><strong>Jours 60-90 :</strong> Les premiers leads entrants apparaissent. Des prospects vous contactent en message privé. Les appels découverte commencent à se booker.</li>
          <li><strong>Jours 90+ :</strong> Le système s&apos;accélère. L&apos;autorité construite génère des leads de plus en plus qualifiés. Le coût par lead diminue chaque mois.</li>
        </ul>

        <p>Nous avons vu ce processus en action avec <Link href="/#etude-de-cas" style={{ color: "var(--orange)", fontWeight: 600 }}>Hostlyft : 16 900+ impressions et 10+ leads entrants en 90 jours</Link> — en partant de zéro.</p>

        <div className="takeaway">
          <h3>💡 La patience est un avantage compétitif</h3>
          <p>90% des fondateurs abandonnent la lead generation LinkedIn avant les 90 jours. Ceux qui tiennent construisent un avantage compétitif durable que leurs concurrents ne peuvent pas copier du jour au lendemain.</p>
        </div>

        {/* INLINE CTA */}
        <div className="article-cta">
          <h3>Prêt à générer des leads qualifiés sur LinkedIn ?</h3>
          <p>Appel gratuit de 30 min pour analyser votre potentiel de lead generation LinkedIn et construire votre plan d&apos;action personnalisé.</p>
          <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            Réserver un appel stratégique gratuit <ArrowIcon />
          </Link>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar-lg">OO</div>
          <div className="author-info">
            <h4>Olaide Olaniyan</h4>
            <div className="role">Fondateur — Owrites</div>
            <p>Ghostwriter LinkedIn et consultante lead generation B2B. Olaide aide les fondateurs et consultants à transformer LinkedIn en canal d&apos;acquisition — avec du contenu stratégique, un positionnement clair et zéro automatisation.</p>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="related fade-up">
        <h3>Articles connexes</h3>
        <div className="related-grid">
          <Link href="/blog/cout-ghostwriter-linkedin-2026" className="related-card">
            <div className="rc-tag">Tarifs</div>
            <h4>Combien coûte un ghostwriter LinkedIn en 2026 ?</h4>
            <p>8 min de lecture</p>
          </Link>
          <Link href="/blog" className="related-card">
            <div className="rc-tag">Guide</div>
            <h4>Ghostwriter LinkedIn pour fondateurs B2B : le guide complet</h4>
            <p>10 min de lecture</p>
          </Link>
          <Link href="/blog" className="related-card">
            <div className="rc-tag">Profil LinkedIn</div>
            <h4>Optimisation profil LinkedIn : convertir vos visiteurs en clients</h4>
            <p>7 min de lecture</p>
          </Link>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className={`sticky-cta${showSticky ? " show" : ""}`} style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "#fff", borderTop: "1px solid var(--gray-200)", padding: "12px 20px", display: "none", justifyContent: "center", alignItems: "center", gap: 16, boxShadow: "0 -4px 24px rgba(0,0,0,0.06)", transform: showSticky ? "translateY(0)" : "translateY(100%)", transition: "transform 0.4s ease" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--black)" }}>Lead generation LinkedIn →</span>
        <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "12px 24px", fontSize: 13 }}>
          Appel gratuit <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
