import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
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
    url: "https://owrites.com",
    siteName: "Owrites",
    title: "Owrites — Contenus qui convertissent pour les entreprises",
    description:
      "Créez du contenu B2B percutant en français. Articles, landing pages, newsletters — avec l'expertise humaine et la puissance de l'IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owrites — Contenus qui convertissent",
    description: "La plateforme de contenu B2B pour les entreprises francophones.",
  },
  alternates: {
    canonical: "https://owrites.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
