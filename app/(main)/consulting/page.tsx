import type { Metadata } from "next";
import Link from "next/link";
import ConsultingFAQ from "./ConsultingFAQ";
import "./consulting.css";

const CALENDLY = "https://calendly.com/olaniyanolaide/discovery-call";

export const metadata: Metadata = {
  title: "Consulting LinkedIn & Lead Generation B2B | Formation Social Selling — Owrites",
  description:
    "Consulting LinkedIn et lead generation B2B pour fondateurs et consultants. Formation social selling, coaching personal branding. Résultats en 90 jours.",
  keywords: [
    "consulting LinkedIn",
    "lead generation LinkedIn",
    "formation social selling",
    "coaching personal branding LinkedIn",
    "prospection B2B LinkedIn",
    "audit profil LinkedIn",
    "lead generation B2B",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.co/consulting",
    title: "Consulting LinkedIn & Lead Generation B2B — Owrites",
    description:
      "Coaching LinkedIn, formation social selling et lead generation B2B pour fondateurs et consultants. Générez des leads qualifiés sur LinkedIn.",
    images: [{ url: "https://owrites.co/images/og-owrites-consulting.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting LinkedIn & Lead Generation B2B — Owrites",
    description: "Coaching LinkedIn, lead generation et formation social selling pour fondateurs B2B.",
    images: ["https://owrites.co/images/og-owrites-consulting.jpg"],
  },
  alternates: {
    canonical: "https://owrites.co/consulting",
    languages: { fr: "https://owrites.co/consulting" },
  },
};

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ConsultingPage() {
  return (
    <div className="consulting-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Consulting LinkedIn & Lead Generation B2B — Owrites",
              provider: { "@type": "ProfessionalService", name: "Owrites", url: "https://owrites.co" },
              description: "Consulting LinkedIn, coaching personal branding, lead generation B2B et formation social selling pour fondateurs et consultants en France.",
              areaServed: { "@type": "Country", name: "France" },
              serviceType: ["Consulting LinkedIn", "LinkedIn Lead Generation", "Coaching Personal Branding", "Formation Social Selling", "Audit Profil LinkedIn"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Quelle différence entre le ghostwriting et le consulting lead generation LinkedIn ?", acceptedAnswer: { "@type": "Answer", text: "Le ghostwriting, c'est Owrites qui écrit pour vous. Le consulting lead generation LinkedIn, c'est Owrites qui vous accompagne pour maîtriser LinkedIn vous-même." } },
                { "@type": "Question", name: "Combien de temps pour générer des leads qualifiés sur LinkedIn ?", acceptedAnswer: { "@type": "Answer", text: "Avec le coaching lead generation LinkedIn, la plupart des clients constatent leurs premiers leads qualifiés en 60 à 90 jours." } },
              ],
            },
          ]),
        }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-breadcrumb fade-up">
            <Link href="/">Accueil</Link> → <span>Consulting & Formation LinkedIn</span>
          </div>
          <h1 className="fade-up s1">
            Consulting LinkedIn & <em>lead generation B2B</em> pour experts
          </h1>
          <p className="hero-sub fade-up s2">
            Coaching LinkedIn, formation social selling et stratégie de lead generation pour fondateurs et consultants B2B.
            Apprenez à générer des leads qualifiés sur LinkedIn — par vous-même.
          </p>
          <div className="hero-actions fade-up s3">
            <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
              Réserver un appel gratuit <ArrowIcon />
            </Link>
            <Link href="#offres" className="btn-outline">Voir les offres ↓</Link>
          </div>
        </div>
        <div className="hero-cards">
          <div className="hcard fade-up">
            <div className="hcard-icon orange">🎯</div>
            <div>
              <h4>Consulting LinkedIn & Lead Generation</h4>
              <p>Accompagnement stratégique 1-to-1 pour votre positionnement, personal branding et génération de leads LinkedIn.</p>
            </div>
          </div>
          <div className="hcard fade-up s1">
            <div className="hcard-icon blue">📚</div>
            <div>
              <h4>Formation Social Selling LinkedIn</h4>
              <p>Apprenez à prospecter, attirer des leads qualifiés et vendre sur LinkedIn avec des méthodes éprouvées.</p>
            </div>
          </div>
          <div className="hcard fade-up s2">
            <div className="hcard-icon orange">💡</div>
            <div>
              <h4>Coaching Personal Branding LinkedIn</h4>
              <p>Développez votre marque personnelle pour attirer des leads entrants et devenir leader d&apos;opinion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFFERS ═══ */}
      <section className="offers" id="offres">
        <div className="offers-header">
          <div className="section-tag fade-up">Nos offres consulting & lead generation LinkedIn</div>
          <h2 className="section-title fade-up s1">
            Consulting LinkedIn et <em>lead generation B2B</em> — choisissez votre formule
          </h2>
          <p className="section-desc fade-up s2">
            De l&apos;audit ponctuel au coaching complet avec stratégie de lead generation LinkedIn — adapté à vos objectifs et votre budget.
          </p>
        </div>
        <div className="offers-grid">
          <div className="offer std fade-up">
            <div className="offer-icon">🔍</div>
            <h3>Audit LinkedIn & Lead Generation</h3>
            <p className="offer-desc">Diagnostic complet de votre profil LinkedIn, votre positionnement et votre potentiel de lead generation B2B.</p>
            <ul className="offer-list">
              {["Analyse profil LinkedIn complète", "Audit de votre positionnement", "Analyse de vos publications et engagement", "Évaluation de votre potentiel lead generation", "Rapport détaillé + recommandations", "1 appel de restitution (45 min)"].map((item) => (
                <li key={item}><span className="ck">✓</span>{item}</li>
              ))}
            </ul>
            <div className="offer-cta">
              <Link href="/tarifs" className="btn-primary">
                Voir les tarifs détaillés <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="offer pop fade-up s1">
            <div className="offer-badge">Le plus demandé</div>
            <div className="offer-icon">🚀</div>
            <h3>Coaching LinkedIn Lead Generation</h3>
            <p className="offer-desc">Positionnement, personal branding, stratégie de contenu et système complet de lead generation LinkedIn — tout en un.</p>
            <ul className="offer-list">
              {["Audit profil + positionnement LinkedIn", "Stratégie de lead generation sur-mesure", "Coaching mensuel (2 sessions / mois)", "Optimisation profil LinkedIn pour la conversion", "Ligne éditoriale & piliers de contenu", "Suivi des KPI et métriques de lead generation", "Support messagerie illimité entre sessions"].map((item) => (
                <li key={item}><span className="ck">✓</span>{item}</li>
              ))}
            </ul>
            <div className="offer-cta">
              <Link href="/tarifs" className="btn-primary">
                Voir les tarifs détaillés <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="offer std fade-up s2">
            <div className="offer-icon">📚</div>
            <h3>Formation Social Selling & Lead Generation</h3>
            <p className="offer-desc">Formation complète pour maîtriser la prospection, le social selling et la lead generation sur LinkedIn.</p>
            <ul className="offer-list">
              {["Formation social selling & lead generation LinkedIn", "Optimisation des profils participants", "Stratégie de prospection et lead generation", "Ligne éditoriale & engagement organique", "Outils et bonnes pratiques LinkedIn", "Support post-formation (30 jours)"].map((item) => (
                <li key={item}><span className="ck">✓</span>{item}</li>
              ))}
            </ul>
            <div className="offer-cta">
              <Link href="/tarifs" className="btn-primary">
                Voir les tarifs détaillés <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <div className="cta-banner fade-up" style={{ marginBottom: "100px" }}>
        <div className="cta-banner-inner">
          <div>
            <h3>Pas sûr de quelle offre de lead generation LinkedIn choisir ?</h3>
            <p>Appel gratuit de 30 min. On analyse votre potentiel de lead generation LinkedIn et on recommande la meilleure formule.</p>
          </div>
          <div className="cta-banner-actions">
            <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-dark">
              Réserver mon appel <ArrowIcon />
            </Link>
            <Link href="/blog" className="btn-outline" style={{ fontSize: 14 }}>
              Lire nos articles LinkedIn →
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ FORMATIONS ═══ */}
      <section className="formations" id="formations">
        <div className="formations-inner">
          <div className="formations-header">
            <div className="section-tag fade-up">Formations LinkedIn & lead generation B2B</div>
            <h2 className="section-title fade-up s1">
              Formations LinkedIn lead generation <em>sur-mesure</em>
            </h2>
            <p className="section-desc fade-up s2">
              Du social selling à la lead generation LinkedIn — des programmes pour maîtriser l&apos;acquisition de leads qualifiés B2B.
            </p>
          </div>
          <div className="formations-grid">
            {[
              { tag: "Social selling & lead generation", tagClass: "blue", title: "Formation Social Selling & Lead Generation LinkedIn", desc: "Du premier contact à la conversion — maîtrisez la prospection et la lead generation B2B sur LinkedIn.", items: ["Optimiser votre profil LinkedIn pour la lead generation", "Ciblage et campagne de prospection LinkedIn", "Maîtriser la vente et le lead generation B2B", "Ligne éditoriale pour attirer des leads qualifiés", "Engager le dialogue avec vos prospects idéaux"], duration: "12h30", delay: "" },
              { tag: "Personal branding & leads", tagClass: "orange", title: "Formation Personal Branding & Lead Generation LinkedIn", desc: "Construisez votre marque personnelle pour attirer des leads qualifiés — positionnement, contenu et stratégie d'influence LinkedIn.", items: ["Définir votre positionnement pour le lead generation", "Créer des publications qui génèrent des leads", "Construire votre autorité pour attirer des prospects", "Stratégie de contenu LinkedIn long terme", "Mesurer vos métriques de lead generation"], duration: "10h", delay: " s1" },
              { tag: "Community management", tagClass: "blue", title: "Formation Community Management LinkedIn", desc: "Gérez votre page entreprise LinkedIn et vos réseaux sociaux pour maximiser la visibilité et la lead generation.", items: ["Objectif de chaque réseau social pour le lead generation", "Optimiser vos comptes sociaux professionnels", "Structurer votre ligne éditoriale", "Calendrier éditorial mensuel orienté leads", "Analyser les performances et les conversions"], duration: "15h", delay: " s2" },
              { tag: "Prospection & lead generation B2B", tagClass: "orange", title: "Formation Prospection, Vente & Lead Generation B2B", desc: "LinkedIn, emailing et vente consultative — de la lead generation à la conclusion de ventes B2B.", items: ["Générer des leads qualifiés sur LinkedIn", "Campagnes d'emailing B2B pour le lead generation", "Maîtriser la vente consultative", "Négocier et conclure les ventes complexes", "Suivi CRM et analyse des leads générés"], duration: "22h", delay: " s3" },
            ].map((f) => (
              <div key={f.title} className={`fcard fade-up${f.delay}`}>
                <div className={`fcard-tag ${f.tagClass}`}>{f.tag}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="fcard-list">
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="fcard-meta">
                  <span>📚 <strong>{f.duration}</strong></span>
                  <span>👤 Groupe ou individuel</span>
                </div>
              </div>
            ))}
          </div>
          <div className="formations-cta fade-up">
            <Link href="/tarifs#formations" className="btn-primary">
              Voir les tarifs des formations <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="how">
        <div className="how-header">
          <div className="section-tag fade-up">Votre parcours lead generation LinkedIn</div>
          <h2 className="section-title fade-up s1">
            De l&apos;appel découverte aux <em>premiers leads qualifiés</em>
          </h2>
          <p className="section-desc fade-up s2">
            Un accompagnement structuré pour transformer votre LinkedIn en machine à lead generation B2B.
          </p>
        </div>
        <div className="how-steps">
          {[
            { n: "1", title: "Appel découverte", desc: "Échange sur vos objectifs de lead generation LinkedIn et vos défis actuels.", arrow: true },
            { n: "2", title: "Audit & stratégie lead generation", desc: "Audit de votre profil LinkedIn et plan d'action lead generation personnalisé.", arrow: true },
            { n: "3", title: "Accompagnement LinkedIn", desc: "Sessions de coaching, formation social selling ou consulting lead generation selon votre formule.", arrow: true },
            { n: "4", title: "Leads qualifiés & suivi", desc: "Mesure des KPI lead generation, analyse mensuelle et optimisation continue.", arrow: false },
          ].map((step, i) => (
            <div key={step.n} className={`hw fade-up${i > 0 ? ` s${i}` : ""}`}>
              <div className="hw-num">{step.n}</div>
              {step.arrow && <span className="hw-arrow">→</span>}
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-cta fade-up">
          <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            Commencer par l&apos;appel découverte <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testi-section">
        <div className="testi-inner">
          <div className="testi-header">
            <div className="section-tag white fade-up">Témoignages clients lead generation LinkedIn</div>
            <h2 className="section-title fade-up s1" style={{ color: "var(--white)" }}>
              Ils génèrent des <em>leads qualifiés</em> sur LinkedIn
            </h2>
            <p className="section-desc fade-up s2">
              Fondateurs et consultants B2B qui ont transformé leur LinkedIn en canal de lead generation.
            </p>
          </div>
          <div className="testi-grid">
            {[
              { quote: "« Formation enrichissante et parfaitement adaptée à nos besoins. Je me sens bien armée pour mettre en place une vraie stratégie LinkedIn. »", author: "Isabelle C.", role: "Key Account & Technology Manager", delay: "" },
              { quote: "« Formation très claire, concrète avec des exemples précis. Le consulting m'a donné un vrai plan d'action pour ma prospection B2B. »", author: "Olivier A.", role: "Business Development", delay: " s1" },
              { quote: "« Accompagnement bienveillant et expert. Le social selling avec une stratégie personnalisée a fait toute la différence pour mon business. »", author: "Anne-Sophie L.", role: "Consultante B2B", delay: " s2" },
            ].map((t) => (
              <div key={t.author} className={`testi fade-up${t.delay}`}>
                <div className="testi-stars">★★★★★</div>
                <div className="testi-quote">{t.quote}</div>
                <div className="testi-author">{t.author}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
          <div className="testi-cta fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-white">
              Rejoindre nos clients satisfaits <ArrowIcon />
            </Link>
            <Link href="/etude-de-cas/hostlyft" className="btn-outline-white">
              Découvrez comment Hostlyft a généré des leads →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ (client component) ═══ */}
      <ConsultingFAQ />

      {/* ═══ CALENDLY ═══ */}
      <section className="cal-section" id="contact">
        <div className="cal-inner">
          <div className="cal-text">
            <div className="section-tag fade-up">Démarrez votre lead generation LinkedIn</div>
            <h2 className="section-title fade-up s1">
              Appel découverte <em>lead generation</em> gratuit
            </h2>
            <p className="section-desc fade-up s2">
              30 minutes pour analyser votre potentiel de lead generation LinkedIn, identifier vos opportunités et choisir le bon accompagnement. Sans engagement.
            </p>
            <div className="cal-trust fade-up s3">
              {["Appel 100% gratuit — sans engagement", "Analyse de votre potentiel lead generation LinkedIn", "Recommandations personnalisées", "Plan d'action lead generation en fin d'appel"].map((item) => (
                <div key={item} className="cal-trust-item">
                  <span className="ct">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="cal-embed fade-up s2">
            <iframe
              src={`${CALENDLY}?hide_gdpr_banner=1&background_color=f9fafb&text_color=171717&primary_color=FF5202`}
              title="Réserver un appel découverte consulting LinkedIn"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
