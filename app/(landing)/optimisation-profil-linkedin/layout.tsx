import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Optimisation Profil LinkedIn B2B — 150€ | Owrites",
  },
  description:
    "Votre profil LinkedIn réécrit par un expert B2B en 7 jours. Titre, résumé, expériences optimisés pour générer des leads qualifiés. 150€ HT · Sans abonnement.",
  keywords: [
    "optimisation profil LinkedIn",
    "profil LinkedIn B2B",
    "réécriture profil LinkedIn",
    "LinkedIn SEO",
    "titre LinkedIn",
    "résumé LinkedIn",
    "leads LinkedIn",
    "personal branding LinkedIn",
    "consultant LinkedIn France",
    "ghostwriter LinkedIn B2B",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.co/optimisation-profil-linkedin",
    siteName: "Owrites",
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Manrope:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Optimisation Profil LinkedIn B2B",
            description:
              "Réécriture complète de votre profil LinkedIn par un expert B2B. Titre, résumé, expériences optimisés pour générer des leads qualifiés.",
            provider: {
              "@type": "ProfessionalService",
              name: "Owrites",
              url: "https://owrites.co",
            },
            areaServed: { "@type": "Country", name: "France" },
            serviceType: "Optimisation Profil LinkedIn",
            offers: {
              "@type": "Offer",
              price: "150",
              priceCurrency: "EUR",
              description: "Paiement unique · Sans abonnement · Livraison en 7 jours",
              availability: "https://schema.org/InStock",
            },
            url: "https://owrites.co/optimisation-profil-linkedin",
          }),
        }}
      />
      {children}
      {/* Elfsight All-in-One Chat */}
      <script src="https://elfsightcdn.com/platform.js" async />
      <div className="elfsight-app-a9e2c15f-052d-435b-903f-b86b31eb9662" data-elfsight-app-lazy />
    </>
  );
}
