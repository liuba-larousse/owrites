import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimisation Profil LinkedIn B2B — 150€ | Owrites",
  description:
    "Votre profil LinkedIn réécrit par un expert B2B en 7 jours. Titre, résumé, expériences optimisés pour générer des leads qualifiés. 150€ HT · Sans abonnement.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.co/optimisation-profil-linkedin",
    title: "Optimisation Profil LinkedIn B2B — 150€ | Owrites",
    description:
      "Votre profil LinkedIn réécrit par un expert B2B en 7 jours. Titre, résumé, expériences optimisés pour générer des leads qualifiés. 150€ HT · Sans abonnement.",
    images: [
      {
        url: "https://owrites.co/images/og-owrites-ghostwriter-linkedin.jpg",
        width: 1200,
        height: 630,
        alt: "Optimisation Profil LinkedIn B2B — Owrites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimisation Profil LinkedIn B2B — 150€ | Owrites",
    description:
      "Votre profil LinkedIn réécrit par un expert B2B en 7 jours. 150€ HT · Sans abonnement.",
    images: ["https://owrites.co/images/og-owrites-ghostwriter-linkedin.jpg"],
  },
  alternates: {
    canonical: "https://owrites.co/optimisation-profil-linkedin",
    languages: { fr: "https://owrites.co/optimisation-profil-linkedin" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
