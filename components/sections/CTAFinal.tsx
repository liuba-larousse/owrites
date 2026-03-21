import Link from "next/link";

export default function CTAFinal() {
  return (
    <section
      className="section-py text-center px-4"
      style={{
        background: "linear-gradient(135deg, var(--orange) 0%, var(--orange-light) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-5"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Prêt à faire de LinkedIn votre canal d&apos;acquisition n°1 ?
        </h2>
        <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
          Rejoignez les fondateurs et consultants B2B qui ont transformé leur LinkedIn en machine à leads — sans pub, sans automatisation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-white">
            Réserver un appel gratuit →
          </Link>
          <Link href="/services" className="btn-outline-white">
            Découvrir nos offres
          </Link>
        </div>
        <p className="text-sm text-white/60 mt-6">
          Appel de 30 min · Sans engagement · Résultats garantis en 90 jours
        </p>
      </div>
    </section>
  );
}
