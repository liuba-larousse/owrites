import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Comment Owrites utilise les cookies et les outils de mesure d'audience, et comment gérer vos préférences.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-brand-600">
        <h1>Politique de cookies</h1>
        <p className="text-sm text-gray-400">
          Dernière mise à jour : juin 2026
        </p>

        <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier déposé sur votre appareil lors de la
          visite d&apos;un site. Il permet notamment de mesurer l&apos;audience et
          d&apos;améliorer votre expérience.
        </p>

        <h2>2. Cookies utilisés</h2>
        <ul>
          <li>
            <strong>Cookies de mesure d&apos;audience :</strong> nous utilisons une
            solution d&apos;analyse respectueuse de la vie privée pour comprendre
            comment notre site est utilisé (pages vues, sources de trafic), sans
            vous identifier personnellement.
          </li>
          <li>
            <strong>Cookies fonctionnels :</strong> nécessaires au bon
            fonctionnement du site.
          </li>
        </ul>

        <h2>3. Gérer vos préférences</h2>
        <p>
          Vous pouvez configurer votre navigateur pour refuser les cookies ou être
          alerté lors de leur dépôt. Le refus de certains cookies peut limiter
          l&apos;usage de certaines fonctionnalités.
        </p>

        <h2>4. Contact</h2>
        <p>
          Pour toute question relative aux cookies, utilisez{" "}
          <a href="/contact">notre page de contact</a>.
        </p>
      </article>
    </div>
  );
}
