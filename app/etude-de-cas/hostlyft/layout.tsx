import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Étude de cas Hostlyft : Lead Generation LinkedIn en 90 jours — Owrites",
  description:
    "Comment le ghostwriting LinkedIn a généré 16 900+ impressions et 10+ leads STR inbound en 90 jours. Étude de cas complète Hostlyft.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://owrites.com/etude-de-cas/hostlyft",
    title: "Étude de cas Hostlyft — Lead Generation LinkedIn en 90 jours",
    description: "16 900+ impressions, 10+ leads inbound. Comment le ghostwriting LinkedIn a transformé un profil invisible en canal d'acquisition.",
    images: [{ url: "https://owrites.com/images/og-case-study-hostlyft.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Étude de cas Hostlyft — Lead Generation LinkedIn en 90 jours",
    description: "16 900+ impressions, 10+ leads STR inbound. Ghostwriting LinkedIn par Owrites.",
    images: ["https://owrites.com/images/og-case-study-hostlyft.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com/etude-de-cas/hostlyft",
    languages: { fr: "https://owrites.com/etude-de-cas/hostlyft" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
