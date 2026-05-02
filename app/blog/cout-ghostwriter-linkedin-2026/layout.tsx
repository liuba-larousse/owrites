import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combien coûte un ghostwriter LinkedIn en 2026 ? Ce que les fondateurs paient vraiment",
  description:
    "Tarifs ghostwriter LinkedIn en 2026 : de 200€ à 3 500€/mois. Guide des prix, ce qui est inclus à chaque niveau et comment choisir le bon ghostwriter.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://owrites.com/blog/cout-ghostwriter-linkedin-2026",
    title: "Combien coûte un ghostwriter LinkedIn en 2026 ? — Owrites",
    description: "Guide complet des tarifs ghostwriter LinkedIn en 2026. Ce que les fondateurs paient vraiment et à quoi s'attendre à chaque niveau de prix.",
    images: [{ url: "https://owrites.com/images/og-blog-cout-ghostwriter-2026.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Combien coûte un ghostwriter LinkedIn en 2026 ?",
    description: "Guide des tarifs ghostwriting LinkedIn. Ce que les fondateurs B2B paient vraiment en 2026.",
    images: ["https://owrites.com/images/og-blog-cout-ghostwriter-2026.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com/blog/cout-ghostwriter-linkedin-2026",
    languages: { fr: "https://owrites.com/blog/cout-ghostwriter-linkedin-2026" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
