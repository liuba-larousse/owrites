"use client";

import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/consulting", label: "Consulting" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "rgba(255,255,255,0.5)" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "56px clamp(20px, 4vw, 48px) 36px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            textAlign: "center" as const,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            O<span style={{ color: "var(--orange)" }}>w</span>rites
          </Link>

          {/* Links */}
          <nav
            style={{
              display: "flex",
              gap: "clamp(16px, 2vw, 28px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  fontSize: 13.5,
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.4)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div
          style={{
            textAlign: "center",
            paddingTop: 32,
            marginTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 12.5,
          }}
        >
          © 2026 Owrites — Ghostwriter LinkedIn B2B France. Personal branding,
          génération de leads et stratégie de contenu pour fondateurs &amp;
          consultants.
          {/* TODO: Add WhatsApp number and SIRET here */}
          {/* <br />SIRET : XXXXXXXXX · WhatsApp : +33 X XX XX XX XX */}
        </div>
      </div>
    </footer>
  );
}
