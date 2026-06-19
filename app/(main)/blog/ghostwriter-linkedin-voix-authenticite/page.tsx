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

export default function BlogVoixAuthenticitePage() {
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
              headline: "Un ghostwriter LinkedIn gardera-t-il ma voix ? Authenticité et personal branding expliqués",
              author: { "@type": "Person", name: "Olaide Olaniyan" },
              publisher: { "@type": "Organization", name: "Owrites", url: "https://owrites.co", logo: { "@type": "ImageObject", url: "https://owrites.co/images/owrites-logo.png" } },
              datePublished: "2026-01-10",
              dateModified: "2026-05-02",
              description: "Guide complet sur la capture de voix et l\u2019authenticité dans le ghostwriting LinkedIn pour fondateurs et consultants B2B.",
              mainEntityOfPage: "https://owrites.co/blog/ghostwriter-linkedin-voix-authenticite",
              image: "https://owrites.co/images/og-blog-voix-authenticite.jpg",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Un ghostwriter LinkedIn peut-il vraiment écrire avec ma voix ?", acceptedAnswer: { "@type": "Answer", text: "Oui, si le ghostwriter priorise la capture de voix plutôt que les templates. Les meilleurs ghostwriters étudient comment vous pensez et parlez avant d\u2019écrire quoi que ce soit." } },
                { "@type": "Question", name: "Le ghostwriting LinkedIn reste-t-il authentique ?", acceptedAnswer: { "@type": "Answer", text: "Oui. L\u2019authenticité ne signifie pas tout écrire soi-même. Elle signifie que les idées et la voix sont les vôtres. Un bon ghostwriter préserve votre ton, vos formulations et votre jugement." } },
                { "@type": "Question", name: "Le ghostwriting LinkedIn se remarque-t-il ?", acceptedAnswer: { "@type": "Answer", text: "Seulement quand c\u2019est mal fait. Un bon ghostwriting se fond naturellement parce qu\u2019il sonne comme vous. Quand la voix est préservée, il n\u2019y a rien à démasquer." } },
                { "@type": "Question", name: "Comment savoir si un ghostwriter LinkedIn préservera ma voix ?", acceptedAnswer: { "@type": "Answer", text: "Posez une question : Comment protégez-vous ma voix ? Si la réponse parle d\u2019algorithmes et de hooks, méfiez-vous. Si elle parle d\u2019écoute, d\u2019édition et de préservation du ton, vous êtes sur la bonne piste." } },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://owrites.co" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://owrites.co/blog" },
                { "@type": "ListItem", position: 3, name: "Ghostwriter LinkedIn voix et authenticité", item: "https://owrites.co/blog/ghostwriter-linkedin-voix-authenticite" },
              ],
            },
          ]),
        }}
      />

      {/* ═══ HERO ═══ */}
      <header className="article-hero">
        <div className="article-hero-inner fade-up">
          <div className="article-breadcrumb">
            <Link href="/">Accueil</Link> → <Link href="/blog">Blog</Link> → Voix &amp; authenticité ghostwriting
          </div>
          <div className="article-category">Voix &amp; Authenticité LinkedIn</div>
          <h1>Un ghostwriter LinkedIn gardera-t-il ma voix ? Authenticité et personal branding expliqués</h1>
          <p className="article-hero-desc">
            La question n°1 des fondateurs avant de déléguer leur LinkedIn : est-ce que ça sonnera encore comme moi ? Voici comment fonctionne la capture de voix et pourquoi l&apos;authenticité n&apos;est pas incompatible avec le ghostwriting.
          </p>
          <div className="article-meta">
            <div className="article-avatar">OO</div>
            <div className="article-meta-text">
              <strong>Olaide Olaniyan</strong><br />
              Fondatrice Owrites <span>·</span> 10 janvier 2026 <span>·</span> 7 min de lecture
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div className="article-featured fade-up s1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/blog/ghostwriter-linkedin-voix-authenticite.svg"
          alt="Votre voix, amplifiée par le ghostwriting LinkedIn — illustration"
          style={{ width: "100%", borderRadius: 16, display: "block" }}
        />
      </div>

      {/* ═══ ARTICLE BODY ═══ */}
      <article className="article-body fade-up s2">

        {/* Direct Answer */}
        <div className="direct-answer">
          <strong>Oui, un ghostwriter LinkedIn peut écrire avec votre voix — si la capture de voix est au cœur de son processus.</strong> Un bon ghostwriter ne remplace pas votre façon de penser. Il la préserve, la clarifie et la rend visible de manière constante. L&apos;authenticité ne dépend pas de qui tape les mots — elle dépend de qui possède les idées.
        </div>

        <p><strong>Définition :</strong> La capture de voix en ghostwriting LinkedIn est le processus par lequel un ghostwriter apprend à reproduire la tonalité, le rythme, les formulations et la personnalité d&apos;un fondateur — pour que chaque publication sonne naturellement comme lui, et non comme un template ou un contenu IA.</p>

        <p>Selon l&apos;étude Socialinsider 2026, le taux d&apos;engagement LinkedIn moyen est de 5,20% — mais l&apos;algorithme récompense de plus en plus le contenu authentique et pénalise le contenu générique. La voix est devenue un avantage concurrentiel sur LinkedIn.</p>

        {/* Table of Contents */}
        <nav className="toc" aria-label="Table des matières">
          <div className="toc-title">Sommaire</div>
          <ol>
            <li><a href="#vraie-peur">Que craignent vraiment les fondateurs ?</a></li>
            <li><a href="#mauvais-ghostwriting">Pourquoi le mauvais ghostwriting sonne faux ?</a></li>
            <li><a href="#bon-ghostwriting">À quoi ressemble un ghostwriting authentique ?</a></li>
            <li><a href="#copier-posts">Le ghostwriter copie-t-il vos anciens posts ?</a></li>
            <li><a href="#detecter">Les gens sauront-ils que j&apos;utilise un ghostwriter ?</a></li>
            <li><a href="#comment-choisir">Comment savoir si un ghostwriter préservera ma voix ?</a></li>
          </ol>
        </nav>

        <p>Quand on envisage de faire appel à un <Link href="/" style={{ color: "var(--orange)", fontWeight: 600 }}>ghostwriter LinkedIn</Link>, la question n&apos;est généralement pas « est-ce qu&apos;il écrira bien ? » ou « est-ce que ça aura des likes ? ». C&apos;est une question plus profonde : <strong>est-ce que ma voix, ma personnalité et mon jugement transparaîtront encore ?</strong></p>

        <p>Cette inquiétude est légitime. LinkedIn, ce n&apos;est pas juste du contenu. C&apos;est votre réputation, votre crédibilité, et la façon dont les gens vous entendent quand vous n&apos;êtes pas dans la pièce. La dernière chose que vous voulez, c&apos;est sonner poli mais méconnaissable.</p>

        {/* ═══ SECTION 1 ═══ */}
        <h2 id="vraie-peur">Que craignent vraiment les fondateurs quand ils pensent au ghostwriting LinkedIn ?</h2>

        <p>Les fondateurs qui hésitent à déléguer leur LinkedIn craignent principalement trois choses : sonner faux aux yeux de ceux qui les connaissent, perdre leur façon naturelle de s&apos;exprimer, et être « démasqués » comme utilisant un ghostwriter.</p>

        <ul>
          <li><strong>Sonner faux</strong> auprès des gens qui les connaissent déjà</li>
          <li><strong>Perdre leur façon naturelle</strong> de parler et de penser</li>
          <li><strong>Être « démasqué »</strong> comme utilisant un ghostwriter</li>
        </ul>

        <p>La plupart de ces peurs viennent du mauvais ghostwriting qu&apos;ils ont vu : des posts qui semblent corrects en surface mais qui sonnent creux. Des phrases propres, zéro personnalité. Cela arrive quand le ghostwriting est traité comme de la production de contenu au lieu d&apos;un travail sur la voix.</p>

        {/* ═══ SECTION 2 ═══ */}
        <h2 id="mauvais-ghostwriting">Pourquoi le mauvais ghostwriting LinkedIn sonne-t-il faux ?</h2>

        <p>Le mauvais ghostwriting LinkedIn sonne faux parce qu&apos;il démarre trop vite — par les hooks, les frameworks et les calendriers de publication — sans d&apos;abord comprendre comment le fondateur pense et parle réellement. Le résultat sonne « LinkedIn-ish » au lieu de sonner comme vous.</p>

        <table className="compare-tbl">
          <thead>
            <tr>
              <th>Ghostwriting générique ✗</th>
              <th className="highlight">Ghostwriting qui préserve la voix ✓</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Commence par les hooks et frameworks</td><td>Commence par écouter comment vous pensez</td></tr>
            <tr><td>Structure identique pour tous les clients</td><td>Structure adaptée à votre façon naturelle</td></tr>
            <tr><td>Ajoute du polish et de la sophistication</td><td>Retire le superflu, garde l&apos;essentiel</td></tr>
            <tr><td>Sonne « professionnel » mais impersonnel</td><td>Sonne comme vous — reconnaissable</td></tr>
            <tr><td>Optimise pour l&apos;algorithme</td><td>Optimise pour la reconnaissance et la confiance</td></tr>
          </tbody>
        </table>

        <p>Votre voix ne vit pas dans la structure. Elle vit dans des détails subtils :</p>
        <ul>
          <li>Comment vous <strong>raccourcissez vos phrases</strong></li>
          <li>Où vous <strong>arrêtez d&apos;expliquer</strong></li>
          <li>Ce que vous <strong>laissez non-dit</strong></li>
          <li>Les mots que vous <strong>évitez naturellement</strong></li>
        </ul>

        <div className="callout"><strong>Si un ghostwriter ne prend pas le temps de comprendre ces nuances, tout ce qu&apos;il écrira sonnera « LinkedIn-ish » au lieu de sonner comme vous.</strong></div>

        {/* ═══ SECTION 3 ═══ */}
        <h2 id="bon-ghostwriting">À quoi ressemble un ghostwriting LinkedIn vraiment authentique ?</h2>

        <p>Un ghostwriting LinkedIn authentique ne cherche pas à améliorer votre voix. Il cherche à s&apos;effacer devant elle. Le résultat : vos proches lisent un post et pensent « oui, ça lui ressemble » — pas impressionnés, juste familiers.</p>

        <blockquote style={{ borderLeft: "3px solid var(--orange)", padding: "16px 24px", margin: "28px 0", background: "var(--off-white)", borderRadius: "0 var(--r-md) var(--r-md) 0", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "var(--black)", lineHeight: 1.5 }}>
          Les gens qui vous connaissent devraient lire un post et penser : « Oui, ça lui ressemble. » Pas impressionnés. Juste familiers.
        </blockquote>

        <p>Concrètement, cela signifie :</p>
        <ul>
          <li><strong>Écrire moins</strong>, pas plus</li>
          <li><strong>Retirer le polish</strong> plutôt que d&apos;en ajouter</li>
          <li><strong>Laisser les phrases finir tôt</strong></li>
          <li><strong>Garder l&apos;imperfection</strong> là où elle sonne naturelle</li>
        </ul>

        <p>C&apos;est la différence fondamentale entre le <Link href="/consulting" style={{ color: "var(--orange)", fontWeight: 600 }}>ghostwriting basé sur des templates</Link> et le ghostwriting qui préserve la voix.</p>

        {/* ═══ SECTION 4 ═══ */}
        <h2 id="copier-posts">Le ghostwriter copie-t-il vos anciens posts LinkedIn ?</h2>

        <p>Non, un bon ghostwriter LinkedIn ne copie pas vos anciens posts. Il les utilise comme matériau d&apos;étude pour comprendre votre rythme, votre registre émotionnel, vos biais thématiques et votre niveau de franchise — puis il laisse votre voix évoluer naturellement.</p>

        <p>Vos anciens posts sont utiles pour repérer :</p>
        <ul>
          <li>Votre <strong>rythme</strong> — phrases courtes ou longues, pauses naturelles</li>
          <li>Votre <strong>registre émotionnel</strong> — direct, nuancé, humoristique ?</li>
          <li>Vos <strong>biais thématiques</strong> — les sujets qui reviennent spontanément</li>
          <li>Votre <strong>niveau de franchise</strong> — à quel point vous êtes direct</li>
        </ul>

        <p>Mais la voix évolue. Un bon ghostwriter vous garde reconnaissable tout en permettant cette évolution. C&apos;est la différence entre du ghostwriting par template et du <strong>ghostwriting qui préserve la voix</strong>.</p>

        {/* MID-ARTICLE CTA */}
        <div className="article-cta">
          <h3>Vous voulez du ghostwriting LinkedIn qui sonne comme vous ?</h3>
          <p>La capture de voix est au cœur de notre processus. Parlons de votre façon de communiquer et de ce que vous voulez que LinkedIn dise de vous.</p>
          <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            Réserver un appel stratégique gratuit <ArrowIcon />
          </Link>
        </div>

        {/* ═══ SECTION 5 ═══ */}
        <h2 id="detecter">Les gens sauront-ils que j&apos;utilise un ghostwriter LinkedIn ?</h2>

        <p>Non — seulement si le ghostwriting ne sonne pas comme vous. Quand la voix est préservée, il n&apos;y a rien à démasquer. Vous avez toujours les idées, vous approuvez toujours les mots, vous décidez toujours de ce qui est publié. Le ghostwriter aide simplement à clarifier le message.</p>

        <p>Pensez-y moins comme de l&apos;externalisation et plus comme <strong>du montage qui retire le bruit</strong>.</p>

        <p>D&apos;ailleurs, les profils personnels génèrent 561% plus de portée que les pages entreprise sur LinkedIn. Votre voix personnelle a plus d&apos;impact que jamais — raison de plus pour la préserver plutôt que la remplacer.</p>

        <div className="takeaway">
          <h3>💡 Point clé</h3>
          <p>L&apos;authenticité ne signifie pas tout écrire soi-même. Elle signifie que les idées et la voix sont les vôtres. Quelqu&apos;un d&apos;autre aide simplement à les exprimer clairement.</p>
        </div>

        {/* ═══ SECTION 6 ═══ */}
        <h2 id="comment-choisir">Comment savoir si un ghostwriter LinkedIn préservera ma voix ?</h2>

        <p>Pour savoir si un ghostwriter LinkedIn préservera votre voix, posez une seule question avant de signer : « Comment protégez-vous ma voix ? » La réponse vous dira tout sur son approche et sa capacité à vous représenter fidèlement.</p>

        <table className="compare-tbl">
          <thead>
            <tr>
              <th>🚩 Méfiez-vous si la réponse parle de...</th>
              <th className="highlight">✓ Bon signe si la réponse parle de...</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Algorithmes et hacks de croissance</td><td>Écoute et compréhension de votre pensée</td></tr>
            <tr><td>Fréquence de publication et volume</td><td>Édition et simplification de vos idées</td></tr>
            <tr><td>Hooks et templates performants</td><td>Miroir de votre façon de parler</td></tr>
            <tr><td>Tactiques de croissance rapide</td><td>Préservation de votre jugement et de votre ton</td></tr>
            <tr><td>Résultats garantis en X jours</td><td>Processus de capture de voix détaillé</td></tr>
          </tbody>
        </table>

        <p>Chez Owrites, la capture de voix est la première étape de notre <Link href="/#methode" style={{ color: "var(--orange)", fontWeight: 600 }}>processus d&apos;onboarding</Link>. Nous ne commençons jamais à écrire avant de comprendre comment vous pensez, ce que vous évitez, et ce qui vous rend reconnaissable. Découvrez <Link href="/tarifs" style={{ color: "var(--orange)", fontWeight: 600 }}>nos packages ghostwriting LinkedIn à partir de 297€/mois</Link>.</p>

        {/* ═══ FINAL THOUGHT ═══ */}
        <h2>La pensée finale</h2>

        <p><strong>Le bon ghostwriter ne remplace pas votre voix. Il la protège.</strong></p>

        <p>Alors oui, un ghostwriter LinkedIn peut sonner comme vous. Mais uniquement si sonner comme vous est le but.</p>

        <p>Pas de templates. Pas de personnalités empruntées. Juste des versions plus claires de pensées que vous avez déjà.</p>

        <p>C&apos;est la philosophie derrière le <strong>ghostwriting LinkedIn humain</strong> et le <strong>ghostwriting qui préserve la voix</strong>. Et c&apos;est ce que nous faisons chez <Link href="/" style={{ color: "var(--orange)", fontWeight: 600 }}>Owrites</Link>. Voyez les résultats concrets dans notre <Link href="/etude-de-cas/hostlyft" style={{ color: "var(--orange)", fontWeight: 600 }}>étude de cas Hostlyft : 16 900+ impressions en 90 jours</Link>.</p>

        {/* FINAL CTA */}
        <div className="article-cta">
          <h3>Curieux de voir comment ça fonctionne en pratique ?</h3>
          <p>Réservez un appel de 30 minutes. On regarde votre profil, votre voix et si le ghostwriting LinkedIn fait sens pour vos objectifs.</p>
          <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
            Réserver un appel stratégique <ArrowIcon />
          </Link>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar-lg">OO</div>
          <div className="author-info">
            <h4>Olaide Olaniyan</h4>
            <div className="role">Fondatrice — Owrites</div>
            <p>Ghostwriter LinkedIn et consultant lead generation B2B. Olaide aide les fondateurs et consultants à transformer LinkedIn en canal d&apos;acquisition — avec du contenu stratégique, un positionnement clair et zéro automatisation.</p>
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
          <Link href="/blog/generer-leads-qualifies-linkedin" className="related-card">
            <div className="rc-tag">Lead generation</div>
            <h4>Comment générer des leads qualifiés sur LinkedIn en 2026</h4>
            <p>10 min de lecture</p>
          </Link>
          <Link href="/blog" className="related-card">
            <div className="rc-tag">Fondateurs</div>
            <h4>Ghostwriting LinkedIn pour fondateurs : construire son autorité</h4>
            <p>6 min de lecture</p>
          </Link>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className={`sticky-cta${showSticky ? " show" : ""}`} style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "#fff", borderTop: "1px solid var(--gray-200)", padding: "12px 20px", display: "none", justifyContent: "center", alignItems: "center", gap: 16, boxShadow: "0 -4px 24px rgba(0,0,0,0.06)", transform: showSticky ? "translateY(0)" : "translateY(100%)", transition: "transform 0.4s ease" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--black)" }}>Votre voix, amplifiée →</span>
        <Link href={CALENDLY} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "12px 24px", fontSize: 13 }}>
          Appel gratuit <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
