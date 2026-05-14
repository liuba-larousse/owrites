import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Owrites — Ghostwriter LinkedIn B2B France | Génération de Leads & Personal Branding",
    template: "%s | Owrites",
  },
  description:
    "Ghostwriter LinkedIn pour fondateurs et consultants B2B. Générez des leads qualifiés et développez votre personal branding sur LinkedIn. 100% organique.",
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
    "ghostwriter LinkedIn B2B",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://owrites.co",
    siteName: "Owrites",
    title: "Owrites — Ghostwriter LinkedIn B2B France | Leads Qualifiés & Personal Branding",
    description:
      "Ghostwriting LinkedIn, optimisation de profil et stratégie de contenu pour fondateurs et consultants B2B. Des leads qualifiés en inbound, 100% organique.",
    images: [
      {
        url: "https://owrites.co/images/og-owrites-ghostwriter-linkedin.jpg",
        width: 1200,
        height: 630,
        alt: "Owrites — Ghostwriter LinkedIn B2B France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owrites — Ghostwriter LinkedIn B2B France",
    description:
      "Ghostwriting LinkedIn pour fondateurs & consultants B2B. Leads qualifiés, personal branding, 100% organique.",
    images: ["https://owrites.co/images/og-owrites-ghostwriter-linkedin.jpg"],
  },
  alternates: {
    canonical: "https://owrites.co",
    languages: { fr: "https://owrites.co" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18163036620" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18163036620');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
