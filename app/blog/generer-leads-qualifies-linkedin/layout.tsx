import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment générer des leads qualifiés sur LinkedIn en 2026 : le guide complet",
  description:
    "Stratégie de contenu, optimisation de profil, social selling — le guide pour transformer LinkedIn en machine à lead generation B2B. 100% organique.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://owrites.com/blog/generer-leads-qualifies-linkedin",
    title: "Comment générer des leads qualifiés sur LinkedIn en 2026 — Owrites",
    description: "Guide complet pour générer des leads qualifiés sur LinkedIn en 2026. Stratégie de contenu, social selling et lead generation B2B.",
    images: [{ url: "https://owrites.com/images/og-blog-leads-linkedin-2026.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment générer des leads qualifiés sur LinkedIn en 2026",
    description: "Guide complet lead generation LinkedIn pour fondateurs et consultants B2B.",
    images: ["https://owrites.com/images/og-blog-leads-linkedin-2026.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com/blog/generer-leads-qualifies-linkedin",
    languages: { fr: "https://owrites.com/blog/generer-leads-qualifies-linkedin" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
