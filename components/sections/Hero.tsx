import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, var(--orange-glow), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(75,163,199,0.2), transparent)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Hero badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/5 px-4 py-1.5 text-xs font-semibold mb-8" style={{ color: "var(--orange)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" style={{ backgroundColor: "var(--orange)" }} />
              Ghostwriter LinkedIn B2B — France
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif leading-[1.1] mb-6"
              style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
            >
              Votre LinkedIn ne reflète pas votre{" "}
              <em
                className="not-italic"
                style={{
                  color: "var(--orange)",
                  fontStyle: "italic",
                  fontFamily: "var(--font-serif)",
                }}
              >
                expertise
              </em>{" "}
              ? On s&apos;en occupe.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              Ghostwriting LinkedIn, optimisation de profil et stratégie de contenu pour les fondateurs et consultants B2B francophones. Zéro jargon, 100% votre voix.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
                Réserver un appel gratuit
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto justify-center">
                Découvrir nos services
              </Link>
            </div>

            {/* Trust text */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M8 1L9.76 5.58L14.66 6.27L11.33 9.52L12.1 14.4L8 12.1L3.9 14.4L4.67 9.52L1.34 6.27L6.24 5.58L8 1Z" fill="var(--orange)" />
              </svg>
              100% organique — zéro pub, zéro automatisation. Résultats visibles en 90 jours.
            </p>
          </div>

          {/* Right column — Hero card */}
          <div className="relative">
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ backgroundColor: "var(--navy)" }}
            >
              {/* Floating tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "var(--orange-glow)", color: "var(--orange-light)" }}
                >
                  ✦ Personal Branding
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(75,163,199,0.15)", color: "var(--blue-light)" }}
                >
                  ✦ Génération de leads
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                >
                  ✦ Ghostwriting B2B
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "3.4×", label: "portée organique" },
                  { value: "+52%", label: "leads entrants" },
                  { value: "6K+", label: "abonnés gagnés" },
                  { value: "94", label: "score SSI moyen" },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "var(--navy-light)" }}
                  >
                    <div
                      className="text-2xl font-serif font-bold mb-0.5"
                      style={{ color: "var(--orange-light)", fontFamily: "var(--font-serif)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-t border-white/10 pt-5">
                <p
                  className="text-sm leading-relaxed text-white/80 italic mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;En 3 mois, j&apos;ai généré 12 leads qualifiés directement depuis LinkedIn — sans pub.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "var(--orange)" }}
                  >
                    A
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Antoine M.</p>
                    <p className="text-xs text-white/50">Fondateur SaaS B2B</p>
                  </div>
                </div>
              </div>

              {/* Decorative blob */}
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, var(--orange), transparent)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
