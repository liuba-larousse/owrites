import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const badges = [
  "Belgique · Suisse · France",
  "100% en français",
  "Experts B2B",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-100/60 to-purple-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-50/80 to-transparent blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Plateforme de contenu B2B #1 en francophonie
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
            Du contenu qui{" "}
            <span className="text-gradient">convertit vos prospects</span>{" "}
            en clients
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Owrites crée le contenu marketing dont votre entreprise a besoin —
            articles, pages web, emails, LinkedIn — en français, adapté à votre
            marché B2B.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5"
            >
              Démarrer gratuitement
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-all"
            >
              Voir nos services
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-1.5 text-sm text-gray-500">
                <CheckCircle2 size={15} className="text-brand-500" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/80 overflow-hidden">
            {/* Mock dashboard header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="rounded-md bg-white border border-gray-200 px-8 py-1 text-xs text-gray-400">
                  owrites.co/dashboard
                </div>
              </div>
            </div>

            {/* Mock content */}
            <div className="p-6 bg-surface grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Stats */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">Articles ce mois</p>
                <p className="text-2xl font-display font-bold text-gray-900">24</p>
                <p className="text-xs text-green-600 mt-1">↑ +8 vs mois dernier</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">Trafic organique</p>
                <p className="text-2xl font-display font-bold text-gray-900">12 480</p>
                <p className="text-xs text-green-600 mt-1">↑ +34% vs mois dernier</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">Leads générés</p>
                <p className="text-2xl font-display font-bold text-gray-900">187</p>
                <p className="text-xs text-green-600 mt-1">↑ +22% vs mois dernier</p>
              </div>

              {/* Article preview */}
              <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="inline-block rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600 mb-2">
                      Article SEO · En cours
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900">
                      5 stratégies de contenu B2B pour générer des leads qualifiés en 2025
                    </h3>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-4">2 min</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-gray-100 w-full" />
                  <div className="h-2 rounded-full bg-gray-100 w-5/6" />
                  <div className="h-2 rounded-full bg-brand-100 w-4/6" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-300" />
                  <span className="text-xs text-gray-500">IA Owrites · Finalisation en cours…</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-8 top-12 hidden lg:block bg-white rounded-xl border border-gray-200 shadow-xl p-3 w-44">
            <p className="text-xs text-gray-500 mb-1">Nouveau lead</p>
            <p className="text-sm font-semibold text-gray-900">TechCorp SA</p>
            <p className="text-xs text-brand-600">via article blog →</p>
          </div>
          <div className="absolute -right-8 bottom-16 hidden lg:block bg-white rounded-xl border border-gray-200 shadow-xl p-3 w-44">
            <p className="text-xs text-gray-500 mb-1">Score SEO</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                <div className="h-full w-4/5 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-bold text-green-600">92</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
