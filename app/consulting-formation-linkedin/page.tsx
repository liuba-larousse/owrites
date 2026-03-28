import type { Metadata } from "next";
import Link from "next/link";
import ConsultingFAQ from "./ConsultingFAQ";

const CALENDLY = "https://calendly.com/josephcopy/discovery-call";

export const metadata: Metadata = {
  title: "Consulting LinkedIn & Lead Generation B2B | Formation Social Selling",
  description:
    "Consulting LinkedIn et lead generation B2B pour fondateurs et consultants. Formation social selling, coaching personal branding et génération de leads qualifiés sur LinkedIn. Résultats en 90 jours.",
  keywords: [
    "consulting LinkedIn",
    "lead generation LinkedIn",
    "formation social selling",
    "coaching personal branding LinkedIn",
    "audit profil LinkedIn",
    "lead generation B2B",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.com/consulting-formation-linkedin",
    title: "Consulting LinkedIn & Lead Generation B2B — Owrites",
    description:
      "Coaching LinkedIn, formation social selling et lead generation B2B pour fondateurs et consultants. Générez des leads qualifiés sur LinkedIn.",
    images: [{ url: "https://owrites.com/images/og-owrites-consulting.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting LinkedIn & Lead Generation B2B — Owrites",
    description: "Coaching LinkedIn, lead generation et formation social selling pour fondateurs B2B.",
    images: ["https://owrites.com/images/og-owrites-consulting.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com/consulting-formation-linkedin",
    languages: { fr: "https://owrites.com/consulting-formation-linkedin" },
  },
};

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Check = ({ dark }: { dark?: boolean }) => (
  <span style={{
    flexShrink: 0,
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: dark ? "rgba(255,82,2,0.15)" : "var(--orange-glow)",
    color: "var(--orange)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 800,
    marginTop: 2,
  }}>✓</span>
);

const offers = [
  {
    icon: "🔍",
    title: "Audit LinkedIn & Lead Generation",
    desc: "Diagnostic complet de votre profil LinkedIn, votre positionnement et votre potentiel de lead generation B2B.",
    features: [
      "Analyse profil LinkedIn complète",
      "Audit de votre positionnement",
      "Analyse de vos publications et engagement",
      "Évaluation de votre potentiel lead generation",
      "Rapport détaillé + recommandations",
      "1 appel de restitution (45 min)",
    ],
    price: "147€",
    priceNote: "HT · Paiement unique",
    cta: "Demander un audit",
    featured: false,
  },
  {
    icon: "🚀",
    title: "Coaching LinkedIn Lead Generation",
    desc: "Positionnement, personal branding, stratégie de contenu et système complet de lead generation LinkedIn — tout en un.",
    features: [
      "Audit profil + positionnement LinkedIn",
      "Stratégie de lead generation sur-mesure",
      "Coaching mensuel (2 sessions / mois)",
      "Optimisation profil LinkedIn pour la conversion",
      "Ligne éditoriale & piliers de contenu",
      "Suivi des KPI et métriques de lead generation",
      "Support messagerie illimité entre sessions",
    ],
    price: "447€",
    priceNote: "HT / mois · Engagement 3 mois",
    badge: "Le plus demandé",
    cta: "Démarrer le coaching",
    featured: true,
  },
  {
    icon: "📚",
    title: "Formation Social Selling & Lead Generation",
    desc: "Formation complète pour maîtriser la prospection, le social selling et la lead generation sur LinkedIn.",
    features: [
      "Formation social selling & lead generation LinkedIn",
      "Optimisation des profils participants",
      "Stratégie de prospection et lead generation",
      "Ligne éditoriale & engagement organique",
      "Outils et bonnes pratiques LinkedIn",
      "Support post-formation (30 jours)",
    ],
    price: "1 847€",
    priceNote: "HT · Par groupe ou individuel",
    cta: "Demander le programme",
    featured: false,
  },
];

const formations = [
  {
    tag: "Social selling & lead generation",
    tagColor: "var(--blue)",
    tagBg: "var(--blue-glow)",
    title: "Formation Social Selling & Lead Generation LinkedIn",
    desc: "Du premier contact à la conversion — maîtrisez la prospection et la lead generation B2B sur LinkedIn.",
    items: [
      "Optimiser votre profil LinkedIn pour la lead generation",
      "Ciblage et campagne de prospection LinkedIn",
      "Maîtriser la vente et le lead generation B2B",
      "Ligne éditoriale pour attirer des leads qualifiés",
      "Engager le dialogue avec vos prospects idéaux",
    ],
    duration: "12h30",
    price: "1 847€ HT",
  },
  {
    tag: "Personal branding & leads",
    tagColor: "var(--orange)",
    tagBg: "var(--orange-glow)",
    title: "Formation Personal Branding & Lead Generation LinkedIn",
    desc: "Construisez votre marque personnelle pour attirer des leads qualifiés — positionnement, contenu et stratégie d'influence LinkedIn.",
    items: [
      "Définir votre positionnement pour le lead generation",
      "Créer des publications qui génèrent des leads",
      "Construire votre autorité pour attirer des prospects",
      "Stratégie de contenu LinkedIn long terme",
      "Mesurer vos métriques de lead generation",
    ],
    duration: "10h",
    price: "1 497€ HT",
  },
  {
    tag: "Community management",
    tagColor: "var(--blue)",
    tagBg: "var(--blue-glow)",
    title: "Formation Community Management LinkedIn",
    desc: "Gérez votre page entreprise LinkedIn et vos réseaux sociaux pour maximiser la visibilité et la lead generation.",
    items: [
      "Objectif de chaque réseau social pour le lead generation",
      "Optimiser vos comptes sociaux professionnels",
      "Structurer votre ligne éditoriale",
      "Calendrier éditorial mensuel orienté leads",
      "Analyser les performances et les conversions",
    ],
    duration: "15h",
    price: "2 197€ HT",
  },
  {
    tag: "Prospection & lead generation B2B",
    tagColor: "var(--orange)",
    tagBg: "var(--orange-glow)",
    title: "Formation Prospection, Vente & Lead Generation B2B",
    desc: "LinkedIn, emailing et vente consultative — de la lead generation à la conclusion de ventes B2B.",
    items: [
      "Générer des leads qualifiés sur LinkedIn",
      "Campagnes d'emailing B2B pour le lead generation",
      "Maîtriser la vente consultative",
      "Négocier et conclure les ventes complexes",
      "Suivi CRM et analyse des leads générés",
    ],
    duration: "22h",
    price: "3 297€ HT",
  },
];

const steps = [
  { num: "1", title: "Appel découverte", desc: "Échange sur vos objectifs de lead generation LinkedIn et vos défis actuels.", accent: "var(--orange)", bg: "var(--orange-glow)" },
  { num: "2", title: "Audit & stratégie lead generation", desc: "Audit de votre profil LinkedIn et plan d'action lead generation personnalisé.", accent: "var(--blue)", bg: "var(--blue-glow)" },
  { num: "3", title: "Accompagnement LinkedIn", desc: "Sessions de coaching, formation social selling ou consulting lead generation selon votre formule.", accent: "var(--orange)", bg: "var(--orange-glow)" },
  { num: "4", title: "Leads qualifiés & suivi", desc: "Mesure des KPI lead generation, analyse mensuelle et optimisation continue.", accent: "var(--blue)", bg: "var(--blue-glow)" },
];

const testimonials = [
  {
    quote: "Formation enrichissante et parfaitement adaptée à nos besoins. Je me sens bien armée pour mettre en place une vraie stratégie LinkedIn.",
    name: "Isabelle C.",
    role: "Key Account & Technology Manager",
  },
  {
    quote: "Formation très claire, concrète avec des exemples précis. Le consulting m'a donné un vrai plan d'action pour ma prospection B2B.",
    name: "Olivier A.",
    role: "Business Development",
  },
  {
    quote: "Accompagnement bienveillant et expert. Le social selling avec une stratégie personnalisée a fait toute la différence pour mon business.",
    name: "Anne-Sophie L.",
    role: "Consultante B2B",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Consulting LinkedIn & Lead Generation B2B — Owrites",
              provider: { "@type": "ProfessionalService", name: "Owrites", url: "https://owrites.com" },
              description: "Consulting LinkedIn, coaching personal branding, lead generation B2B et formation social selling pour fondateurs et consultants en France.",
              areaServed: { "@type": "Country", name: "France" },
              serviceType: ["Consulting LinkedIn", "LinkedIn Lead Generation", "Coaching Personal Branding", "Formation Social Selling", "Audit Profil LinkedIn"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Quelle différence entre le ghostwriting et le consulting lead generation LinkedIn ?", acceptedAnswer: { "@type": "Answer", text: "Le ghostwriting, c'est Owrites qui écrit pour vous. Le consulting lead generation LinkedIn, c'est Owrites qui vous accompagne pour maîtriser LinkedIn vous-même." } },
                { "@type": "Question", name: "Combien de temps pour générer des leads qualifiés sur LinkedIn ?", acceptedAnswer: { "@type": "Answer", text: "Avec le coaching lead generation LinkedIn à 447€ HT/mois, la plupart des clients constatent leurs premiers leads qualifiés en 60 à 90 jours." } },
              ],
            },
          ]),
        }}
      />

      {/* ── HERO ── */}
      <section style={{ background: "var(--black)", padding: "140px 48px 0", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 800, height: 800, background: "radial-gradient(circle,rgba(255,82,2,0.06),transparent)", top: -300, right: -300, borderRadius: "50%" }} />
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, paddingBottom: 80 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 28, fontWeight: 500 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Accueil</Link>
            {" → "}
            <span style={{ color: "var(--orange)" }}>Consulting & Formation LinkedIn</span>
          </p>
          <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-1.5px", marginBottom: 24 }}>
            Consulting LinkedIn &{" "}
            <em style={{ fontStyle: "italic", color: "var(--orange)", fontFamily: "var(--font-serif)", fontWeight: 400, letterSpacing: 0 }}>
              lead generation B2B
            </em>{" "}
            pour experts
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 600, margin: "0 auto 36px" }}>
            Coaching LinkedIn, formation social selling et stratégie de lead generation pour fondateurs et consultants B2B. Apprenez à générer des leads qualifiés sur LinkedIn — par vous-même.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
              Réserver un appel gratuit <Arrow />
            </a>
            <a href="#offres" className="btn-outline">Voir les offres ↓</a>
          </div>
        </div>

        {/* Cards row */}
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, padding: "0 48px", position: "relative", zIndex: 2, transform: "translateY(48px)" }} className="hero-cards-grid">
          {[
            { icon: "🎯", title: "Consulting LinkedIn & Lead Generation", desc: "Accompagnement stratégique 1-to-1 pour votre positionnement, personal branding et génération de leads LinkedIn." },
            { icon: "📚", title: "Formation Social Selling LinkedIn", desc: "Apprenez à prospecter, attirer des leads qualifiés et vendre sur LinkedIn avec des méthodes éprouvées." },
            { icon: "💡", title: "Coaching Personal Branding LinkedIn", desc: "Développez votre marque personnelle pour attirer des leads entrants et devenir leader d'opinion." },
          ].map((c) => (
            <div key={c.title} style={{ background: "#fff", borderRadius: "var(--r-lg)", padding: "32px 28px", display: "flex", alignItems: "flex-start", gap: 16, boxShadow: "0 16px 48px rgba(0,0,0,0.08)", border: "1px solid var(--gray-100)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--orange-glow)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: "var(--black)" }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "var(--gray-mid)", lineHeight: 1.55 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section id="offres" style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 48px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>Nos offres consulting & lead generation LinkedIn</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 16, marginTop: 8 }}>
            Consulting LinkedIn et{" "}
            <em style={{ fontStyle: "italic", color: "var(--orange)" }}>lead generation B2B</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--gray-mid)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            De l'audit ponctuel au coaching complet — adapté à vos objectifs et votre budget.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="offers-grid">
          {offers.map((o) => (
            <div key={o.title} style={{
              borderRadius: "var(--r-xl)",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              background: o.featured ? "var(--black)" : "var(--off-white)",
              color: o.featured ? "#fff" : "var(--black)",
              border: o.featured ? "none" : "1.5px solid var(--gray-100)",
              boxShadow: o.featured ? "0 24px 60px rgba(0,0,0,0.15)" : "none",
            }}>
              {o.badge && (
                <span style={{ position: "absolute", top: 20, right: 20, background: "var(--orange)", color: "#fff", padding: "5px 14px", borderRadius: "var(--r-full)", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>
                  {o.badge}
                </span>
              )}
              <div style={{ width: 52, height: 52, borderRadius: 14, background: o.featured ? "rgba(255,255,255,0.06)" : "var(--orange-glow)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 24 }}>
                {o.icon}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, lineHeight: 1.2 }}>{o.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 24, color: o.featured ? "rgba(255,255,255,0.5)" : "var(--gray-mid)" }}>{o.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flexGrow: 1 }}>
                {o.features.map((f) => (
                  <li key={f} style={{ fontSize: 13.5, display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.5, color: o.featured ? "rgba(255,255,255,0.7)" : "var(--black)" }}>
                    <Check dark={o.featured} />{f}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, paddingTop: 20, marginBottom: 20, borderTop: `1px solid ${o.featured ? "rgba(255,255,255,0.06)" : "var(--gray-200)"}` }}>
                <span style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px", color: o.featured ? "#fff" : "var(--black)" }}>{o.price}</span>
                <span style={{ fontSize: 13, color: o.featured ? "rgba(255,255,255,0.4)" : "var(--gray-light)" }}>{o.priceNote}</span>
              </div>
              <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary" style={{ justifyContent: "center", background: o.featured ? "var(--orange)" : "var(--black)" }}>
                {o.cta} <Arrow />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto 100px", padding: "0 48px" }}>
        <div style={{ background: "var(--orange)", borderRadius: "var(--r-xl)", padding: "56px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 400, height: 400, background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent)", top: -150, right: -100, borderRadius: "50%" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 10 }}>
              Pas sûr de quelle offre de lead generation LinkedIn choisir ?
            </h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
              Appel gratuit de 30 min. On analyse votre potentiel de lead generation LinkedIn et on recommande la meilleure formule.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
            <a href={CALENDLY} target="_blank" rel="noopener" className="btn-dark">
              Réserver mon appel <Arrow />
            </a>
          </div>
        </div>
      </div>

      {/* ── FORMATIONS ── */}
      <section id="formations" style={{ background: "var(--off-white)", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <span className="section-tag">Formations LinkedIn & lead generation B2B</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "8px 0 16px" }}>
              Formations LinkedIn lead generation{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange)" }}>sur-mesure</em>
            </h2>
            <p style={{ fontSize: 16, color: "var(--gray-mid)", lineHeight: 1.7, maxWidth: 560 }}>
              Du social selling à la lead generation LinkedIn — des programmes pour maîtriser l'acquisition de leads qualifiés B2B.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginBottom: 48 }} className="formations-grid">
            {formations.map((f) => (
              <div key={f.title} style={{ background: "#fff", borderRadius: "var(--r-lg)", padding: "36px 32px", border: "1px solid var(--gray-100)" }}>
                <span style={{ display: "inline-flex", padding: "5px 14px", borderRadius: "var(--r-full)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 18, background: f.tagBg, color: f.tagColor }}>
                  {f.tag}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "var(--black)" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "var(--gray-mid)", lineHeight: 1.7, marginBottom: 20 }}>{f.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {f.items.map((item) => (
                    <li key={item} style={{ fontSize: 13, color: "var(--black)", fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "var(--blue)", fontWeight: 800, fontSize: 11 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: 20, paddingTop: 18, borderTop: "1px solid var(--gray-100)", fontSize: 12.5, color: "var(--gray-light)" }}>
                  <span>📚 <strong style={{ color: "var(--black)" }}>{f.duration}</strong></span>
                  <span>💶 <strong style={{ color: "var(--black)" }}>{f.price}</strong></span>
                  <span>👤 Groupe ou individuel</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
              Demander un programme lead generation sur-mesure <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>Votre parcours lead generation LinkedIn</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "8px 0 16px" }}>
            De l'appel découverte aux{" "}
            <em style={{ fontStyle: "italic", color: "var(--orange)" }}>premiers leads qualifiés</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--gray-mid)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Un accompagnement structuré pour transformer votre LinkedIn en machine à lead generation B2B.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 48 }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.num} style={{ textAlign: "center", padding: "32px 20px", borderRadius: "var(--r-lg)", position: "relative" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22, fontWeight: 800, color: s.accent }}>
                {s.num}
              </div>
              {i < steps.length - 1 && (
                <span style={{ position: "absolute", right: -12, top: 52, color: "var(--gray-200)", fontSize: 20 }}>→</span>
              )}
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h4>
              <p style={{ fontSize: 13, color: "var(--gray-mid)", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            Commencer par l'appel découverte <Arrow />
          </a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "var(--black)", padding: "100px 48px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, background: "radial-gradient(circle,rgba(59,130,246,0.05),transparent)", top: -200, left: -150, borderRadius: "50%" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-tag white" style={{ justifyContent: "center" }}>Témoignages clients</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#fff", margin: "8px 0 16px" }}>
              Ils génèrent des{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange)" }}>leads qualifiés</em>{" "}
              sur LinkedIn
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 48 }} className="testi-grid">
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--r-lg)", padding: "32px 28px" }}>
                <div style={{ color: "var(--orange)", fontSize: 13, marginBottom: 16, letterSpacing: 2 }}>★★★★★</div>
                <blockquote style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: 20 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{t.name}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{t.role}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href={CALENDLY} target="_blank" rel="noopener" className="btn-white">
              Rejoindre nos clients satisfaits <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ maxWidth: 820, margin: "0 auto", padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>FAQ — Consulting LinkedIn & Lead Generation</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "8px 0 16px" }}>
            Questions fréquentes sur le{" "}
            <em style={{ fontStyle: "italic", color: "var(--orange)" }}>lead generation LinkedIn</em>
          </h2>
        </div>
        <ConsultingFAQ />
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            D'autres questions ? Parlons-en <Arrow />
          </a>
        </div>
      </section>

      {/* ── CALENDLY ── */}
      <section style={{ background: "var(--off-white)", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }} className="cal-grid">
          <div>
            <span className="section-tag">Démarrez votre lead generation LinkedIn</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "8px 0 16px" }}>
              Appel découverte{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange)" }}>lead generation</em>{" "}
              gratuit
            </h2>
            <p style={{ fontSize: 16, color: "var(--gray-mid)", lineHeight: 1.7, marginBottom: 28 }}>
              30 minutes pour analyser votre potentiel de lead generation LinkedIn, identifier vos opportunités et choisir le bon accompagnement. Sans engagement.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Appel 100% gratuit — sans engagement",
                "Analyse de votre potentiel lead generation LinkedIn",
                "Recommandations personnalisées",
                "Plan d'action lead generation en fin d'appel",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--gray-dark)", fontWeight: 500 }}>
                  <span style={{ width: 22, height: 22, background: "var(--orange-glow)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--orange)", fontWeight: 800, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.06)", border: "1px solid var(--gray-200)" }}>
            <iframe
              src={`${CALENDLY}?hide_gdpr_banner=1&background_color=f9fafb&text_color=171717&primary_color=FF5202`}
              title="Réserver un appel découverte consulting LinkedIn"
              loading="lazy"
              style={{ width: "100%", height: 660, border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-cards-grid, .offers-grid, .testi-grid { grid-template-columns: 1fr !important; max-width: 480px; margin-left: auto; margin-right: auto; }
          .formations-grid, .steps-grid { grid-template-columns: 1fr !important; }
          .cal-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
