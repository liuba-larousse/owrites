import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre stratégie de contenu",
  description:
    "Contactez Owrites pour votre stratégie de contenu B2B. Réponse en moins de 24h ouvrées et appel stratégique gratuit pour tout nouveau projet.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
