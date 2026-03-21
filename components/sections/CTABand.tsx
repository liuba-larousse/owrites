import Link from "next/link";

interface CTABandProps {
  message?: string;
}

export default function CTABand({ message = "Prêt à générer des leads qualifiés via LinkedIn ?" }: CTABandProps) {
  return (
    <section
      className="py-14 text-center px-4"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xl sm:text-2xl font-serif font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {message}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Réserver un appel gratuit →
          </Link>
          <Link href="/services" className="btn-outline-white">
            Voir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
