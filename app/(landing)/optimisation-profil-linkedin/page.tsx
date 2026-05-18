import Image from "next/image";
import "./linkedin-profil.css";

const CALENDLY_URL = "https://calendly.com/olaniyanolaide/discovery-call";

export default function OptimisationProfilLinkedinPage() {
  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="lp-bar">
        Offre ponctuelle &middot; 150&euro; HT &middot; Sans abonnement &middot; Livraison en 7
        jours
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
            <a href={CALENDLY_URL} className="lp-btn-primary">
              R&eacute;server mon appel gratuit <span className="arrow">&rarr;</span>
            </a>
            <div className="lp-hero-trust">
              <span>Paiement apr&egrave;s validation</span>
              <span>1 r&eacute;vision incluse</span>
              <span>Livr&eacute; en 7 jours</span>
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
            Deux clients, <em>deux transformations</em>
          </h2>
          <p className="lp-section-intro">
            Voici ce qu&rsquo;une optimisation change concr&egrave;tement &mdash; sur de vrais
            profils, avec de vrais r&eacute;sultats.
          </p>

          {/* CASE 1: LAMIAA */}
          <div className="lp-case" style={{ marginTop: 48 }}>
            <div className="lp-case-header">
              <span className="lp-case-badge lp-case-badge--orange">
                &Eacute;tude de cas 1
              </span>
              <span className="lp-case-meta">
                <strong>Lamiaa Bennis</strong> &middot; Consultante Senior Logistique &amp; Commerce
                International &middot; Banque Mondiale
              </span>
            </div>
            <div className="lp-ba-wrapper">
              <div className="lp-ba-item">
                <span className="lp-ba-label lp-ba-label--avant">&#10007; Avant</span>
                <Image
                  src="/images/lp/lamiaa-avant.png"
                  alt="Profil LinkedIn avant"
                  width={680}
                  height={400}
                  className="lp-ba-img"
                />
                <div className="lp-ba-annotation">
                  Banni&egrave;re g&eacute;n&eacute;rique &middot; Titre descriptif &middot; Profil
                  invisible dans les recherches
                </div>
              </div>
              <div className="lp-ba-divider">&rarr; Apr&egrave;s optimisation Owrites</div>
              <div className="lp-ba-item">
                <span className="lp-ba-label lp-ba-label--apres">&#10003; Apr&egrave;s</span>
                <Image
                  src="/images/lp/lamiaa-apres.png"
                  alt="Profil LinkedIn après"
                  width={680}
                  height={400}
                  className="lp-ba-img"
                />
                <div className="lp-ba-annotation">
                  <strong>
                    Banni&egrave;re de marque &middot; Titre autorit&eacute; &middot;
                    D&eacute;claration de valeur claire
                  </strong>
                </div>
              </div>
            </div>

            {/* UPWORK REVIEW */}
            <div className="lp-upwork-review">
              <div className="lp-upwork-header">
                <span className="lp-upwork-badge">&#10003; Avis Upwork v&eacute;rifi&eacute;</span>
                <span className="lp-upwork-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="lp-upwork-meta">5.0 &middot; F&eacute;v 2026</span>
              </div>
              <blockquote>
                &ldquo;Travailler avec Olaide a &eacute;t&eacute; simple et efficace. Il a
                l&rsquo;esprit ouvert, s&rsquo;adapte aux exigences sectorielles de son client, tout
                en recommandant les meilleures pratiques. Je continuerai &agrave; travailler avec
                lui.&rdquo;
              </blockquote>
              <cite>
                <strong>Lamiaa Bennis</strong> &middot; Consultante Logistique Senior &middot; Banque
                Mondiale
              </cite>
            </div>
          </div>

          <hr className="lp-section-divider" />

          {/* CASE 2: HOSTLYFT */}
          <div className="lp-case">
            <div className="lp-case-header">
              <span className="lp-case-badge lp-case-badge--dark">
                &Eacute;tude de cas 2
              </span>
              <span className="lp-case-meta">
                <strong>Co-Fondatrice &middot; Hostlyft</strong> &middot; Gestionnaire de revenus
                Airbnb &amp; Location saisonni&egrave;re
              </span>
            </div>
            <div className="lp-ba-wrapper">
              <div className="lp-ba-item">
                <span className="lp-ba-label lp-ba-label--avant">&#10007; Avant</span>
                <Image
                  src="/images/lp/hostlyft-avant-apres.png"
                  alt="Avant / Après Hostlyft LinkedIn"
                  width={680}
                  height={400}
                  className="lp-ba-img"
                />
                <div className="lp-ba-annotation">
                  10 vues de profil &middot; 0 impressions &middot; Titre g&eacute;n&eacute;rique
                  sans positionnement
                </div>
              </div>
            </div>
            <p className="lp-ba-caption">
              <strong>
                10 &rarr; 299 vues de profil &middot; 0 &rarr; 403 impressions de posts &middot; 79
                apparitions dans les recherches
              </strong>
            </p>
          </div>

          <hr className="lp-section-divider" />

          {/* CASE 3: LOGISTICS CONSULTANT */}
          <div className="lp-case">
            <div className="lp-case-header">
              <span className="lp-case-badge lp-case-badge--grey">
                &Eacute;tude de cas 3
              </span>
              <span className="lp-case-meta">
                <strong>Consultante Senior</strong> &middot; Logistique &amp; Facilitation du
                Commerce &middot; 20+ ans &middot; Banque Mondiale
              </span>
            </div>
            <div className="lp-cs-comparison">
              <div className="lp-cs-col lp-cs-col--avant">
                <span className="lp-cs-col-tag">Avant</span>
                <h4>Profil g&eacute;n&eacute;rique</h4>
                <ul>
                  <li>Titre = description de poste sans valeur</li>
                  <li>R&eacute;sum&eacute; = liste de t&acirc;ches sans impact</li>
                  <li>Banni&egrave;re = paysage, aucun message pro</li>
                  <li>Exp&eacute;riences = responsabilit&eacute;s sans r&eacute;sultats</li>
                  <li>Invisible dans les recherches LinkedIn</li>
                </ul>
              </div>
              <div className="lp-cs-col lp-cs-col--apres">
                <span className="lp-cs-col-tag">Apr&egrave;s</span>
                <h4>Profil positionn&eacute;</h4>
                <ul>
                  <li>Titre = d&eacute;claration d&rsquo;autorit&eacute; sectorielle</li>
                  <li>R&eacute;sum&eacute; = pitch segment&eacute; par audience cible</li>
                  <li>Banni&egrave;re = visuelle de marque avec message fort</li>
                  <li>Exp&eacute;riences = projets nomm&eacute;s + r&eacute;sultats chiffr&eacute;s</li>
                  <li>Appara&icirc;t dans les recherches cibles</li>
                </ul>
              </div>
            </div>
            <div className="lp-cs-results-grid">
              <div className="lp-cs-result">
                <div className="lp-cs-result-num">+340%</div>
                <div className="lp-cs-result-label">Vues de profil</div>
              </div>
              <div className="lp-cs-result">
                <div className="lp-cs-result-num">7</div>
                <div className="lp-cs-result-label">Demandes institutionnelles</div>
              </div>
              <div className="lp-cs-result">
                <div className="lp-cs-result-num">3</div>
                <div className="lp-cs-result-label">Invitations &agrave; des projets</div>
              </div>
              <div className="lp-cs-result">
                <div className="lp-cs-result-num">2</div>
                <div className="lp-cs-result-label">Invitations comme intervenante</div>
              </div>
            </div>
          </div>

          {/* AGGREGATE METRICS */}
          <div className="lp-proof-metrics">
            <div className="lp-metric-card">
              <div className="val">
                <em>+95%</em>
              </div>
              <div className="lbl">Impressions en hausse</div>
            </div>
            <div className="lp-metric-card">
              <div className="val">
                <em>+70%</em>
              </div>
              <div className="lbl">Vues profil</div>
            </div>
            <div className="lp-metric-card">
              <div className="val">
                10<em>+</em>
              </div>
              <div className="lbl">Leads inbound</div>
            </div>
            <div className="lp-metric-card">
              <div className="val">
                16<em>k</em>
              </div>
              <div className="lbl">Impressions organiques</div>
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
              <a href={CALENDLY_URL} className="lp-btn-primary lp-btn-primary--lg">
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
        <a href={CALENDLY_URL} className="lp-btn-white">
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
        <a href={CALENDLY_URL}>R&eacute;server mon appel &rarr;</a>
      </div>
    </>
  );
}
