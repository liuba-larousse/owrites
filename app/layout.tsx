import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Owrites — Ghostwriter LinkedIn B2B France | Génération de Leads & Personal Branding",
    template: "%s | Owrites",
  },
  description:
    "Ghostwriter LinkedIn pour fondateurs et consultants B2B. Générez des leads qualifiés et développez votre personal branding sur LinkedIn. 100% organique.",
  keywords: [
    "ghostwriting LinkedIn",
    "ghostwriter LinkedIn France",
    "personal branding LinkedIn",
    "génération leads LinkedIn",
    "stratégie contenu LinkedIn",
    "ghostwriter B2B français",
    "consultant LinkedIn France",
    "personal branding fondateur",
    "ghostwriting B2B francophone",
    "ghostwriter LinkedIn B2B",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.com",
    siteName: "Owrites",
    title: "Owrites — Ghostwriter LinkedIn B2B France | Leads Qualifiés & Personal Branding",
    description:
      "Ghostwriting LinkedIn, optimisation de profil et stratégie de contenu pour fondateurs et consultants B2B. Des leads qualifiés en inbound, 100% organique.",
    images: [
      {
        url: "https://owrites.com/images/og-owrites-ghostwriter-linkedin.jpg",
        width: 1200,
        height: 630,
        alt: "Owrites — Ghostwriter LinkedIn B2B France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owrites — Ghostwriter LinkedIn B2B France",
    description:
      "Ghostwriting LinkedIn pour fondateurs & consultants B2B. Leads qualifiés, personal branding, 100% organique.",
    images: ["https://owrites.com/images/og-owrites-ghostwriter-linkedin.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com",
    languages: { fr: "https://owrites.com" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* General Sans from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* DM Serif Display from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Owrites",
              description:
                "Agence de ghostwriting LinkedIn et personal branding pour fondateurs et consultants B2B en France.",
              url: "https://owrites.com",
              logo: "https://owrites.com/images/owrites-logo.png",
              founder: { "@type": "Person", name: "Olaide Olaniyan" },
              areaServed: { "@type": "Country", name: "France" },
              serviceType: [
                "Ghostwriting LinkedIn",
                "Personal Branding LinkedIn",
                "Optimisation Profil LinkedIn",
                "Génération de Leads B2B",
                "Formation Social Selling",
              ],
              priceRange: "€€",
              sameAs: ["https://www.linkedin.com/company/owrites"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
