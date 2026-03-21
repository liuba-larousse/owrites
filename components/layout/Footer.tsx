import Link from "next/link";
import Logo from "@/components/Logo";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#resultats", label: "Résultats" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy-deep)" }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/">
              <Logo variant="light" />
            </Link>
            <p className="text-sm text-white/50 text-center md:text-left max-w-xs">
              Ghostwriter LinkedIn B2B pour fondateurs et consultants francophones.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/40 text-center">
          © 2026 Owrites — Ghostwriter LinkedIn B2B France. Personal branding, génération de leads et stratégie de contenu pour fondateurs &amp; consultants.
        </div>
      </div>
    </footer>
  );
}
