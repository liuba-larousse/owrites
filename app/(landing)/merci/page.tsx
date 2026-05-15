import "./merci.css";

export default function MerciPage() {
  return (
    <div className="merci-page">
      <div className="merci-check">
        <svg viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="merci-label">R&eacute;servation confirm&eacute;e</div>

      <h1>
        Votre appel est <em>bien r&eacute;serv&eacute;</em>
      </h1>

      <p className="merci-sub">
        Vous recevrez un email de confirmation dans quelques minutes. Voici ce qui se passe ensuite.
      </p>

      <div className="merci-steps">
        <div className="merci-step">
          <div className="merci-step-num">1</div>
          <div className="merci-step-text">
            <strong>Email de confirmation</strong>
            <span>
              V&eacute;rifiez votre bo&icirc;te mail &mdash; un r&eacute;capitulatif de
              l&rsquo;appel vous a &eacute;t&eacute; envoy&eacute;.
            </span>
          </div>
        </div>
        <div className="merci-step">
          <div className="merci-step-num">2</div>
          <div className="merci-step-text">
            <strong>Appel de 30 min</strong>
            <span>
              On analyse votre profil actuel et on d&eacute;finit ensemble votre positionnement
              LinkedIn.
            </span>
          </div>
        </div>
        <div className="merci-step">
          <div className="merci-step-num">3</div>
          <div className="merci-step-text">
            <strong>R&eacute;&eacute;criture en 7 jours</strong>
            <span>
              Votre profil LinkedIn est livr&eacute;, optimis&eacute; et pr&ecirc;t &agrave;
              g&eacute;n&eacute;rer des leads.
            </span>
          </div>
        </div>
      </div>

      <a href="https://www.owrites.co" className="merci-back">
        &larr; Retour sur owrites.co
      </a>

      <div className="merci-footer">
        &copy; 2026 Owrites
      </div>
    </div>
  );
}
