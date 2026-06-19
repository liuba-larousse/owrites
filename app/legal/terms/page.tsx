import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site et des services Owrites de création de contenu B2B.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-brand-600">
        <h1>Conditions générales d&apos;utilisation</h1>
        <p className="text-sm text-gray-400">
          Dernière mise à jour : juin 2026
        </p>

        <h2>1. Objet</h2>
        <p>
          Les présentes conditions régissent l&apos;accès et l&apos;utilisation du
          site Owrites ainsi que des services de création de contenu B2B proposés.
          En utilisant ce site, vous acceptez ces conditions.
        </p>

        <h2>2. Éditeur du site</h2>
        <p>
          Le site est édité par Owrites, établi à Bruxelles, Belgique. Pour nous
          joindre, utilisez <a href="/contact">notre page de contact</a>.
        </p>

        <h2>3. Services</h2>
        <p>
          Owrites propose des prestations de rédaction, d&apos;optimisation et de
          distribution de contenu marketing. Les modalités précises (volume,
          délais, tarifs) sont définies dans le devis ou le contrat applicable à
          chaque client.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          Sauf disposition contraire dans le contrat, les contenus livrés
          deviennent la propriété du client après paiement intégral. Les éléments
          du site (marque, design, textes) restent la propriété d&apos;Owrites.
        </p>

        <h2>5. Responsabilité</h2>
        <p>
          Owrites met tout en œuvre pour assurer l&apos;exactitude des informations
          publiées mais ne saurait être tenu responsable d&apos;éventuelles erreurs
          ou indisponibilités temporaires du site.
        </p>

        <h2>6. Droit applicable</h2>
        <p>
          Les présentes conditions sont régies par le droit belge. Tout litige
          relève de la compétence des tribunaux de Bruxelles.
        </p>

        <h2>7. Contact</h2>
        <p>
          Pour toute question, utilisez{" "}
          <a href="/contact">notre page de contact</a>.
        </p>
      </article>
    </div>
  );
}
