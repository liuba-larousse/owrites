import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Réservez un appel stratégique LinkedIn",
  description:
    "Parlons de votre stratégie LinkedIn B2B. Réservez un appel stratégique gratuit de 30 minutes avec Owrites, sans engagement.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
