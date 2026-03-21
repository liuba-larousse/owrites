import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Owrites — Ghostwriter LinkedIn B2B France | Génération de Leads & Personal Branding",
    template: "%s | Owrites",
  },
  description:
    "Ghostwriter LinkedIn professionnel en français pour fondateurs et consultants B2B. Personal branding, génération de leads et stratégie de contenu LinkedIn. Résultats visibles en 90 jours.",
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
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.com",
    siteName: "Owrites",
    title: "Owrites — Ghostwriter LinkedIn B2B France",
    description:
      "Ghostwriter LinkedIn professionnel en français pour fondateurs et consultants B2B. Personal branding, génération de leads et stratégie de contenu LinkedIn.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owrites — Ghostwriter LinkedIn B2B France",
    description: "Personal branding, génération de leads et stratégie de contenu LinkedIn pour fondateurs & consultants.",
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
    <html lang="fr" className={`h-full antialiased ${lora.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
