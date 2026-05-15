import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Merci — Votre appel est confirmé | Owrites",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Manrope:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-18163036620',
              'value': 150.0,
              'currency': 'EUR'
            });
          `,
        }}
      />
      {children}
    </>
  );
}
