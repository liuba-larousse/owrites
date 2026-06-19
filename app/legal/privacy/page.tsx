import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Owrites : quelles données nous collectons, pourquoi, et comment exercer vos droits (RGPD).",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-brand-600">
        <h1>Politique de confidentialité</h1>
        <p className="text-sm text-gray-400">
          Dernière mise à jour : juin 2026
        </p>

        <p>
          La présente politique explique comment Owrites collecte, utilise et
          protège vos données personnelles, conformément au Règlement général sur
          la protection des données (RGPD) et à la législation belge applicable.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Owrites, dont le siège est établi à Bruxelles, Belgique, est responsable
          du traitement des données collectées via ce site. Pour toute question,
          utilisez <a href="/contact">notre page de contact</a>.
        </p>

        <h2>2. Données collectées</h2>
        <p>Nous collectons les données que vous nous transmettez directement :</p>
        <ul>
          <li>
            Via le formulaire de contact : nom, entreprise, email professionnel,
            téléphone (facultatif), budget estimé et message.
          </li>
          <li>
            Données de navigation anonymisées (pages consultées, source de trafic)
            à des fins de mesure d&apos;audience.
          </li>
        </ul>

        <h2>3. Finalités</h2>
        <ul>
          <li>Répondre à vos demandes et préparer un éventuel devis.</li>
          <li>Vous recontacter au sujet de votre projet de contenu.</li>
          <li>Améliorer notre site et nos services.</li>
        </ul>

        <h2>4. Base légale</h2>
        <p>
          Le traitement repose sur votre consentement (formulaire de contact) et
          sur notre intérêt légitime à développer notre activité et à mesurer
          l&apos;audience de notre site.
        </p>

        <h2>5. Durée de conservation</h2>
        <p>
          Les données de contact sont conservées pendant la durée de la relation
          commerciale, puis archivées ou supprimées conformément à nos obligations
          légales.
        </p>

        <h2>6. Partage des données</h2>
        <p>
          Vos données ne sont jamais vendues. Elles peuvent être traitées par des
          prestataires techniques (hébergement, envoi d&apos;emails) agissant pour
          notre compte et soumis à des obligations de confidentialité.
        </p>

        <h2>7. Vos droits</h2>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation, d&apos;opposition et de portabilité.
          Pour les exercer, contactez-nous via{" "}
          <a href="/contact">notre page de contact</a>. Vous pouvez
          également introduire une réclamation auprès de l&apos;Autorité de
          protection des données (APD) en Belgique.
        </p>

        <h2>8. Contact</h2>
        <p>
          Pour toute question relative à cette politique, utilisez{" "}
          <a href="/contact">notre page de contact</a>.
        </p>
      </article>
    </div>
  );
}
