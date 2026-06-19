import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, LINKEDIN_URL } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Owrites — Contenus qui convertissent pour les entreprises",
    template: "%s | Owrites",
  },
  description:
    "Owrites est la plateforme de création de contenu B2B pour les entreprises francophones. Articles, pages web, emails et plus — rédigés par des experts, amplifiés par l'IA.",
  keywords: [
    "rédaction de contenu B2B",
    "marketing de contenu",
    "copywriting France Belgique Suisse",
    "agence de contenu francophone",
    "contenu SEO",
    "blog d'entreprise",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Owrites — Contenus qui convertissent pour les entreprises",
    description:
      "Créez du contenu B2B percutant en français. Articles, landing pages, newsletters — avec l'expertise humaine et la puissance de l'IA.",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Plateforme de création de contenu B2B pour les entreprises francophones.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressCountry: "BE",
  },
  areaServed: ["BE", "CH", "FR"],
  sameAs: [LINKEDIN_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
