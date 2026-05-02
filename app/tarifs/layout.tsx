import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Ghostwriting LinkedIn & Lead Generation B2B — Owrites",
  description:
    "Tarifs ghostwriting LinkedIn dès 297€/mois, consulting lead generation dès 97€, formations social selling. Packages clairs pour fondateurs B2B.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.com/tarifs",
    title: "Tarifs Ghostwriting LinkedIn & Lead Generation B2B — Owrites",
    description: "Packages ghostwriting LinkedIn, consulting lead generation et formations social selling. Tarifs clairs, résultats en 90 jours.",
    images: [{ url: "https://owrites.com/images/og-owrites-tarifs.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs Ghostwriting LinkedIn & Lead Generation B2B — Owrites",
    description: "Ghostwriting LinkedIn dès 297€/mois. Packages clairs pour fondateurs et consultants B2B.",
    images: ["https://owrites.com/images/og-owrites-tarifs.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com/tarifs",
    languages: { fr: "https://owrites.com/tarifs" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
