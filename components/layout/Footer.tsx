import Link from "next/link";
import { Linkedin } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/config";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { href: "/services#articles", label: "Articles de blog" },
      { href: "/services#landing", label: "Pages de vente" },
      { href: "/services#email", label: "Email marketing" },
      { href: "/services#seo", label: "Contenu SEO" },
      { href: "/services#social", label: "Réseaux sociaux" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { href: "/about", label: "À propos" },
      { href: "/blog", label: "Blog" },
      { href: "/pricing", label: "Tarifs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { href: "/legal/privacy", label: "Confidentialité" },
      { href: "/legal/terms", label: "CGU" },
      { href: "/legal/cookies", label: "Cookies" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Owrites
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              La plateforme de contenu B2B pour les entreprises francophones.
              Belgique · Suisse · France.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4 font-display">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Owrites. Tous droits réservés.</p>
          <p>Fait avec ❤️ pour les équipes francophones</p>
        </div>
      </div>
    </footer>
  );
}
