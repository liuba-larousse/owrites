import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* General Sans from Fontshare */}
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
        rel="stylesheet"
      />
      {/* DM Serif Display from Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Owrites",
            description:
              "Agence de ghostwriting LinkedIn et personal branding pour fondateurs et consultants B2B en France.",
            url: "https://owrites.co",
            logo: "https://owrites.co/images/owrites-logo.png",
            founder: { "@type": "Person", name: "Olaide Olaniyan" },
            areaServed: { "@type": "Country", name: "France" },
            serviceType: [
              "Ghostwriting LinkedIn",
              "Personal Branding LinkedIn",
              "Optimisation Profil LinkedIn",
              "Génération de Leads B2B",
              "Formation Social Selling",
            ],
            priceRange: "€€",
            sameAs: ["https://www.linkedin.com/company/owrites"],
          }),
        }}
      />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Elfsight All-in-One Chat */}
      <script src="https://elfsightcdn.com/platform.js" async />
      <div className="elfsight-app-a9e2c15f-052d-435b-903f-b86b31eb9662" data-elfsight-app-lazy />
    </>
  );
}
