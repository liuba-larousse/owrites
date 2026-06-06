"use client";

import Image from "next/image";
import "./linkedin-profil.css";

const CALENDLY_URL = "https://calendly.com/olaniyanolaide/discovery-call";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

// Open Calendly as a popup overlay instead of navigating away, so the
// `calendly.event_scheduled` postMessage fires and triggers the Google Ads conversion.
function openCalendlyPopup(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

export default function OptimisationProfilLinkedinPage() {
  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="lp-bar">
        &#x26A1; Places limit&eacute;es &mdash; 3 optimisations par mois &middot; 150&euro; HT
        &middot; Livraison en 7 jours
      </div>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-container">
          <div className="lp-hero-label">Optimisation Profil LinkedIn B2B</div>
          <h1>
            Votre profil LinkedIn r&eacute;&eacute;crit pour{" "}
            <em>attirer des leads,</em> pas juste des visiteurs
          </h1>
          <p className="lp-hero-sub">
            Titre accrocheur, r&eacute;sum&eacute; percutant, exp&eacute;riences optimis&eacute;es
            &mdash; tout r&eacute;&eacute;crit dans votre voix par un expert B2B. En 7 jours.
          </p>
          <div className="lp-hero-cta-wrap">
            <a href={CALENDLY_URL} onClick={openCalendlyPopup} className="lp-btn-primary">
              R&eacute;server mon appel gratuit <span className="arrow">&rarr;</span>
            </a>
            <div className="lp-hero-trust">
              <span>Paiement apr&egrave;s validation</span>
              <span>1 r&eacute;vision incluse</span>
              <span>Livr&eacute; en 7 jours</span>
            </div>
            <div
              style={{
                marginTop: 12,
                background: "rgba(255,82,2,0.15)",
                border: "1px solid rgba(255,82,2,0.3)",
                borderRadius: 8,
                padding: "8px 20px",
                fontSize: 13,
                color: "#FF6B1A",
                fontWeight: 600,
              }}
            >
              &#x26A1; Il reste{" "}
              <strong style={{ color: "#fff" }}>2 places disponibles</strong> ce mois-ci
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STRIP */}
      <div className="lp-founder-strip">
        <div className="lp-founder-inner">
          <Image
            src="/images/lp/olaide-photo.jpg"
            alt="Olaide — Expert LinkedIn B2B"
            width={72}
            height={72}
            className="lp-founder-photo"
          />
          <div className="lp-founder-text">
            <blockquote>
              &ldquo;J&rsquo;ai accompagn&eacute; plus de 20 fondateurs et consultants B2B
              francophones. Chaque profil est r&eacute;&eacute;crit apr&egrave;s un appel de 30 min
              &mdash; dans votre voix, pas la mienne.&rdquo;
            </blockquote>
            <cite>Olaide &middot; Expert Ghostwriting &amp; Optimisation LinkedIn B2B</cite>
          </div>
        </div>
      </div>

      {/* METRICS STRIP */}
      <div className="lp-metrics">
        <div className="lp-metrics-grid">
          <div>
            <div className="lp-metric-val">
              <span>+95%</span>
            </div>
            <div className="lp-metric-label">Impressions en hausse</div>
          </div>
          <div>
            <div className="lp-metric-val">
              <span>+70%</span>
            </div>
            <div className="lp-metric-label">Vues de profil</div>
          </div>
          <div>
            <div className="lp-metric-val">
              20<span>+</span>
            </div>
            <div className="lp-metric-label">Fondateurs accompagn&eacute;s</div>
          </div>
          <div>
            <div className="lp-metric-val">
              90<span>j</span>
            </div>
            <div className="lp-metric-label">Pour les premiers leads</div>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="lp-problem">
        <div className="lp-container">
          <span className="lp-section-label">Le probl&egrave;me</span>
          <h2>
            Votre profil LinkedIn vous <em>co&ucirc;te des clients</em>
          </h2>
          <p className="lp-section-intro">
            Vous avez l&rsquo;expertise. Mais votre profil ne le montre pas &mdash; et &ccedil;a se
            voit dans vos r&eacute;sultats.
          </p>
          <div className="lp-problem-grid">
            <div className="lp-problem-card">
              <span className="icon">&#x1F441;&#xFE0F;</span>
              <p>
                Des visiteurs arrivent sur votre profil et repartent sans vous contacter &mdash;
                parce que votre message n&rsquo;est pas clair.
              </p>
            </div>
            <div className="lp-problem-card">
              <span className="icon">&#x1F4DD;</span>
              <p>
                Votre titre dit ce que vous faites, pas pourquoi on devrait vous choisir vous
                plut&ocirc;t qu&rsquo;un autre.
              </p>
            </div>
            <div className="lp-problem-card">
              <span className="icon">&#x1F4C9;</span>
              <p>
                Vous publiez du contenu, mais votre profil ne convertit pas les clics en
                conversations qualifi&eacute;es.
              </p>
            </div>
            <div className="lp-problem-card">
              <span className="icon">&#x1F50D;</span>
              <p>
                Vous n&rsquo;apparaissez pas dans les recherches LinkedIn de vos clients
                id&eacute;aux &mdash; profil non optimis&eacute; SEO.
              </p>
            </div>
          </div>
          <div className="lp-problem-quote">
            <p>
              &ldquo;Ce n&rsquo;est pas un probl&egrave;me de visibilit&eacute;. C&rsquo;est un
              probl&egrave;me de <em>positionnement.</em>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="lp-solution">
        <div className="lp-container">
          <span className="lp-section-label">Comment &ccedil;a marche</span>
          <h2>
            Trois &eacute;tapes, <em>sept jours,</em> un profil qui convertit
          </h2>
          <p className="lp-section-intro">
            Un processus simple et transparent, pens&eacute; pour les fondateurs et consultants B2B
            qui n&rsquo;ont pas de temps &agrave; perdre.
          </p>
          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num lp-step-num--first">1</div>
              <div className="lp-step-content">
                <span className="lp-step-tag">Gratuit &middot; 30 min</span>
                <h3>Appel de capture de voix</h3>
                <p>
                  On comprend votre expertise, votre audience cible et vos objectifs business.
                  C&rsquo;est ce qui rend votre profil authentique &mdash; pas un template
                  g&eacute;n&eacute;rique.
                </p>
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div className="lp-step-content">
                <span className="lp-step-tag">Sous 5 jours</span>
                <h3>R&eacute;&eacute;criture compl&egrave;te du profil</h3>
                <p>
                  Titre LinkedIn, r&eacute;sum&eacute;, trois exp&eacute;riences principales &mdash;
                  tout r&eacute;&eacute;crit pour capter l&rsquo;attention de vos clients
                  id&eacute;aux et appara&icirc;tre dans les recherches B2B.
                </p>
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div className="lp-step-content">
                <span className="lp-step-tag">Validation incluse</span>
                <h3>Validation, r&eacute;vision &amp; livraison</h3>
                <p>
                  Vous validez chaque section. Si quelque chose ne vous convient pas, on
                  r&eacute;vise. Votre profil est livr&eacute; pr&ecirc;t &agrave; publier &mdash;
                  en 7 jours maximum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="lp-proof">
        <div className="lp-container">
          <span className="lp-section-label">R&eacute;sultats r&eacute;els</span>
          <h2>
            Ce que &ccedil;a change &mdash; <em>sur un vrai profil</em>
          </h2>
          <p className="lp-section-intro">
            Inna Myruta, fondatrice d&rsquo;UkraineMarriage, a confi&eacute; son profil LinkedIn
            &agrave; Owrites. Voici les 4 sections r&eacute;&eacute;crites &mdash; avant et
            apr&egrave;s.
          </p>

          <div style={{ marginTop: 48 }}>
            <div className="lp-case-header">
              <span className="lp-case-badge lp-case-badge--orange">
                &Eacute;tude de cas
              </span>
              <span className="lp-case-meta">
                <strong>Inna Myruta</strong> &middot; Fondatrice UkraineMarriage &middot; Agence
                matrimoniale franco-ukrainienne &middot; France
              </span>
            </div>

            {/* 01 BANNIERE + TITRE */}
            <div className="lp-comp-block">
              <div className="lp-comp-header">
                <span className="lp-comp-num">01</span>
                <div>
                  <div className="lp-comp-title">Banni&egrave;re &amp; Titre LinkedIn</div>
                  <div className="lp-comp-sub">
                    Premi&egrave;re impression &mdash; 3 secondes pour capter l&rsquo;attention
                  </div>
                </div>
              </div>
              <div className="lp-comp-grid">
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-avant-tag">&#10007; Avant</div>
                  <Image
                    src="/images/lp/inna-banniere-avant.png"
                    alt="Banni&egrave;re avant"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#10060; Photo de stock romantique &middot; Titre confus FR/EN avec emojis
                    &middot; Invisible dans les recherches LinkedIn.
                  </div>
                </div>
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-apres-tag">&#10003; Apr&egrave;s</div>
                  <Image
                    src="/images/lp/inna-banniere-apres.png"
                    alt="Banni&egrave;re apr&egrave;s"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#9989; Personal brand &eacute;l&eacute;gant &middot; Titre clair et
                    optimis&eacute; SEO &middot; Positionn&eacute; pour les bons clients.
                  </div>
                </div>
              </div>
            </div>

            {/* 02 A PROPOS */}
            <div className="lp-comp-block">
              <div className="lp-comp-header">
                <span className="lp-comp-num">02</span>
                <div>
                  <div className="lp-comp-title">Section &Agrave; propos</div>
                  <div className="lp-comp-sub">
                    Le pitch qui transforme un visiteur en prospect
                  </div>
                </div>
              </div>
              <div className="lp-comp-grid">
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-avant-tag">&#10007; Avant</div>
                  <Image
                    src="/images/lp/inna-apropos-avant.png"
                    alt="&Agrave; propos avant"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#10060; Bilingue FR+EN non structur&eacute; &middot; Dilue le message &middot;
                    Perd le lecteur &agrave; mi-texte.
                  </div>
                </div>
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-apres-tag">&#10003; Apr&egrave;s</div>
                  <Image
                    src="/images/lp/inna-apropos-apres.png"
                    alt="&Agrave; propos apr&egrave;s"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#9989; 100% fran&ccedil;ais &middot; Voix authentique &middot; Orient&eacute;
                    client &middot; Compr&eacute;hensible en 5 secondes.
                  </div>
                </div>
              </div>
            </div>

            {/* 03 EXPERIENCE */}
            <div className="lp-comp-block">
              <div className="lp-comp-header">
                <span className="lp-comp-num">03</span>
                <div>
                  <div className="lp-comp-title">Section Exp&eacute;rience</div>
                  <div className="lp-comp-sub">
                    La preuve de cr&eacute;dibilit&eacute; qui rassure
                  </div>
                </div>
              </div>
              <div className="lp-comp-grid">
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-avant-tag">&#10007; Avant</div>
                  <Image
                    src="/images/lp/inna-experience-avant.png"
                    alt="Exp&eacute;rience avant"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#10060; Description tronqu&eacute;e &middot; Aucun r&eacute;sultat &middot; 15
                    ans d&rsquo;expertise r&eacute;duits &agrave; une ligne vague.
                  </div>
                </div>
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-apres-tag">&#10003; Apr&egrave;s</div>
                  <Image
                    src="/images/lp/inna-experience-apres.png"
                    alt="Exp&eacute;rience apr&egrave;s"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#9989; Impact chiffr&eacute; &middot; Conf&eacute;rence internationale &middot;
                    Comp&eacute;tences cl&eacute;s &middot; Cr&eacute;dibilit&eacute;
                    renforc&eacute;e.
                  </div>
                </div>
              </div>
            </div>

            {/* 04 SELECTION */}
            <div className="lp-comp-block">
              <div className="lp-comp-header">
                <span className="lp-comp-num">04</span>
                <div>
                  <div className="lp-comp-title">Section S&eacute;lection</div>
                  <div className="lp-comp-sub">
                    Le portfolio qui installe la confiance
                  </div>
                </div>
              </div>
              <div className="lp-comp-grid">
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-avant-tag">&#10007; Avant</div>
                  <div className="lp-linkedin-featured">
                    <div className="lp-featured-empty">
                      <span>&#10133;</span>
                      <small>Section vide &middot; Occasion manqu&eacute;e</small>
                    </div>
                  </div>
                  <div className="lp-comp-why">
                    &#10060; Section vide &middot; Aucune preuve de m&eacute;thode &middot; Le
                    visiteur repart sans &ecirc;tre convaincu.
                  </div>
                </div>
                <div className="lp-comp-card">
                  <div className="lp-comp-tag lp-apres-tag">&#10003; Apr&egrave;s</div>
                  <Image
                    src="/images/lp/inna-selection-apres.png"
                    alt="Section S&eacute;lection apr&egrave;s"
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="lp-comp-why">
                    &#9989; Vitrine de marque &middot; Logo professionnel &middot; Pitch clair
                    &middot; Confiance et l&eacute;gitimit&eacute; instantan&eacute;es.
                  </div>
                </div>
              </div>
            </div>

            {/* RESULTS STRIP */}
            <div className="lp-comp-results">
              <div>
                <div className="lp-comp-result-num">+35</div>
                <div className="lp-comp-result-label">Apparitions dans les recherches</div>
              </div>
              <div>
                <div className="lp-comp-result-num">224</div>
                <div className="lp-comp-result-label">Impressions de posts</div>
              </div>
              <div>
                <div className="lp-comp-result-num">22</div>
                <div className="lp-comp-result-label">Vues de profil en 7 jours</div>
              </div>
              <div>
                <div className="lp-comp-result-num">4</div>
                <div className="lp-comp-result-label">Sections enti&egrave;rement r&eacute;&eacute;crites</div>
              </div>
            </div>
          </div>

          {/* UPWORK REVIEW */}
          <div style={{ marginTop: 48 }}>
            <div className="lp-case-header">
              <span
                style={{
                  background: "#14a800",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  padding: "4px 12px",
                  borderRadius: 100,
                }}
              >
                &#10003; Avis Upwork v&eacute;rifi&eacute;
              </span>
              <span className="lp-case-meta">
                <strong>Lamiaa Bennis</strong> &middot; Consultante Logistique Senior &middot; Banque
                Mondiale
              </span>
            </div>
            <div className="lp-upwork-review">
              <div className="lp-upwork-header">
                <span className="lp-upwork-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="lp-upwork-meta">
                  5.0 &middot; F&eacute;v 2026 &middot; Mission LinkedIn Profile Optimization
                </span>
              </div>
              <blockquote>
                &ldquo;Travailler avec Olaide a &eacute;t&eacute; simple et efficace. Il a
                l&rsquo;esprit ouvert, s&rsquo;adapte aux exigences sectorielles de son client, tout
                en recommandant les meilleures pratiques. Je continuerai &agrave; travailler avec
                lui.&rdquo;
              </blockquote>
              <div className="lp-upwork-author">
                &mdash;{" "}
                <strong>Lamiaa Bennis</strong> &middot; Consultante Senior Logistique &amp; Commerce
                International
              </div>
              <Image
                src="/images/lp/upwork-review-lamiaa.png"
                alt="Avis Upwork Lamiaa Bennis"
                width={500}
                height={300}
                className="lp-upwork-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="lp-offer-section">
        <div className="lp-container">
          <span className="lp-section-label" style={{ color: "rgba(255,82,2,0.9)" }}>
            L&rsquo;offre
          </span>
          <h2>
            Ce que vous obtenez <em>pour 150&euro;</em>
          </h2>
          <p className="lp-section-intro">
            Une r&eacute;&eacute;criture compl&egrave;te de votre profil LinkedIn par un expert B2B.
            Sans abonnement, sans engagement.
          </p>
          <div className="lp-offer-card">
            <div className="lp-offer-header">
              <div>
                <div className="lp-offer-title">Optimisation Profil LinkedIn</div>
                <div className="lp-offer-sub">
                  Paiement unique &middot; Sans abonnement &middot; Fondateurs &amp; consultants B2B
                </div>
              </div>
              <div className="lp-offer-price">
                <div className="lp-price-amount">
                  <span>150&euro;</span>
                </div>
                <div className="lp-price-note">
                  HT &middot; Paiement apr&egrave;s l&rsquo;appel
                </div>
              </div>
            </div>
            <div className="lp-offer-features">
              <div className="lp-feature-item">
                R&eacute;&eacute;criture du titre LinkedIn (accrocheur + SEO)
              </div>
              <div className="lp-feature-item">
                R&eacute;&eacute;criture compl&egrave;te du r&eacute;sum&eacute; / &agrave; propos
              </div>
              <div className="lp-feature-item">
                Optimisation de vos 3 exp&eacute;riences principales
              </div>
              <div className="lp-feature-item">
                Int&eacute;gration des mots-cl&eacute;s SEO LinkedIn B2B
              </div>
              <div className="lp-feature-item">
                Appel de capture de voix inclus (30 min)
              </div>
              <div className="lp-feature-item">1 r&eacute;vision compl&egrave;te incluse</div>
              <div className="lp-feature-item">Livraison en 7 jours maximum</div>
              <div className="lp-feature-item">
                Profil positionn&eacute; pour les leads inbound
              </div>
            </div>
            <div className="lp-offer-cta">
              <div
                style={{
                  background: "rgba(255,82,2,0.1)",
                  border: "1px solid rgba(255,82,2,0.25)",
                  borderRadius: 8,
                  padding: "10px 16px",
                  marginBottom: 20,
                  textAlign: "center" as const,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                &#x26A1;{" "}
                <strong style={{ color: "#FF6B1A" }}>
                  2 places disponibles ce mois-ci
                </strong>{" "}
                &mdash; Juin 2026
              </div>
              <a href={CALENDLY_URL} onClick={openCalendlyPopup} className="lp-btn-primary lp-btn-primary--lg">
                R&eacute;server mon appel gratuit &mdash; 150&euro;{" "}
                <span className="arrow">&rarr;</span>
              </a>
              <div className="lp-offer-guarantee">
                <span>&#10003; Appel 100% gratuit &middot; sans engagement</span>
                <span>&#10003; Paiement s&eacute;curis&eacute; apr&egrave;s validation</span>
                <span>&#10003; Satisfait ou retravaill&eacute;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-faq-section">
        <div className="lp-container">
          <span className="lp-section-label">Questions fr&eacute;quentes</span>
          <h2>
            Vous avez des <em>questions ?</em>
          </h2>
          <div className="lp-faq-list">
            <details className="lp-faq-item">
              <summary className="lp-faq-question">
                Est-ce que &ccedil;a sonnera vraiment comme moi ?{" "}
                <span className="icon">+</span>
              </summary>
              <p className="lp-faq-answer">
                Oui. L&rsquo;appel de capture de voix est con&ccedil;u pr&eacute;cis&eacute;ment
                pour &ccedil;a. On prend le temps de comprendre votre fa&ccedil;on de parler, vos
                tournures, votre positionnement. Chaque mot est valid&eacute; par vous avant
                livraison.
              </p>
            </details>
            <details className="lp-faq-item">
              <summary className="lp-faq-question">
                En combien de temps je re&ccedil;ois mon profil r&eacute;&eacute;crit ?{" "}
                <span className="icon">+</span>
              </summary>
              <p className="lp-faq-answer">
                7 jours maximum apr&egrave;s votre appel de cadrage. La plupart des profils sont
                livr&eacute;s en 5 jours.
              </p>
            </details>
            <details className="lp-faq-item">
              <summary className="lp-faq-question">
                Et si je ne suis pas satisfait du r&eacute;sultat ?{" "}
                <span className="icon">+</span>
              </summary>
              <p className="lp-faq-answer">
                Une r&eacute;vision compl&egrave;te est incluse. Si apr&egrave;s r&eacute;vision vous
                n&rsquo;&ecirc;tes toujours pas satisfait, on retravaille jusqu&rsquo;&agrave; ce
                que ce soit parfait.
              </p>
            </details>
            <details className="lp-faq-item">
              <summary className="lp-faq-question">
                C&rsquo;est pour quel type de profil LinkedIn ?{" "}
                <span className="icon">+</span>
              </summary>
              <p className="lp-faq-answer">
                Ce service est con&ccedil;u pour les fondateurs B2B, consultants, coachs et
                prestataires de services francophones qui veulent que leur profil LinkedIn
                g&eacute;n&egrave;re des leads qualifi&eacute;s en inbound.
              </p>
            </details>
            <details className="lp-faq-item">
              <summary className="lp-faq-question">
                Quand est-ce que je paie ? <span className="icon">+</span>
              </summary>
              <p className="lp-faq-answer">
                Le paiement se fait apr&egrave;s l&rsquo;appel de cadrage et validation du brief.
                L&rsquo;appel de 30 min est 100% gratuit et sans engagement.
              </p>
            </details>
            <details className="lp-faq-item">
              <summary className="lp-faq-question">
                Est-ce que cette offre inclut du ghostwriting de contenu ?{" "}
                <span className="icon">+</span>
              </summary>
              <p className="lp-faq-answer">
                Non, cette offre couvre uniquement l&rsquo;optimisation du profil. Pour le
                ghostwriting de publications LinkedIn, d&eacute;couvrez nos packages mensuels
                d&egrave;s 297&euro;/mois.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lp-final-cta">
        <h2>Votre expertise m&eacute;rite un profil &agrave; sa hauteur</h2>
        <p>
          R&eacute;servez votre appel strat&eacute;gique gratuit de 30 minutes. On analyse votre
          profil actuel et on vous explique exactement ce qu&rsquo;on va changer.
        </p>
        <a href={CALENDLY_URL} onClick={openCalendlyPopup} className="lp-btn-white">
          R&eacute;server mon appel gratuit &rarr;
        </a>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <p>
          &copy; 2026{" "}
          <a href="https://www.owrites.co">Owrites</a> &mdash; Ghostwriter LinkedIn B2B France
          &middot; Tous droits r&eacute;serv&eacute;s
        </p>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="lp-sticky-cta">
        <div className="lp-price-tag">
          150<em>&euro;</em>{" "}
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
            &middot; profil LinkedIn
          </span>
        </div>
        <a href={CALENDLY_URL} onClick={openCalendlyPopup}>R&eacute;server mon appel &rarr;</a>
      </div>
    </>
  );
}
