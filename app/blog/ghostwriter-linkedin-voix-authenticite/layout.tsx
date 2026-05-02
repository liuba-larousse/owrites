import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Un ghostwriter LinkedIn gardera-t-il ma voix ? Authenticité & personal branding expliqués",
  description:
    "Un ghostwriter LinkedIn peut-il écrire avec votre voix ? Comment fonctionne la capture de voix et comment choisir un ghostwriter authentique.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://owrites.com/blog/ghostwriter-linkedin-voix-authenticite",
    title: "Un ghostwriter LinkedIn gardera-t-il ma voix ? Authenticité expliquée — Owrites",
    description: "Comment un ghostwriter LinkedIn préserve votre voix et votre authenticité. Guide pour fondateurs B2B.",
    images: [{ url: "https://owrites.com/images/og-blog-voix-authenticite.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Un ghostwriter LinkedIn gardera-t-il ma voix ? — Owrites",
    description: "Voix, authenticité et ghostwriting LinkedIn. Comment ça marche vraiment pour les fondateurs B2B.",
    images: ["https://owrites.com/images/og-blog-voix-authenticite.jpg"],
  },
  alternates: {
    canonical: "https://owrites.com/blog/ghostwriter-linkedin-voix-authenticite",
    languages: { fr: "https://owrites.com/blog/ghostwriter-linkedin-voix-authenticite" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
