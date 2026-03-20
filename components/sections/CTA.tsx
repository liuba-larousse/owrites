import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-py bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-purple-600 px-6 py-16 lg:px-16 lg:py-20 overflow-hidden text-center">
          {/* Decorations */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-900/30 blur-3xl translate-y-1/2 -translate-x-1/4"
          />

          <div className="relative">
            <p className="text-brand-200 text-sm font-medium mb-4 uppercase tracking-wider">
              Prêt à passer à l'action ?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
              Commencez à générer des leads avec votre contenu
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Rejoignez 500+ entreprises francophones qui font confiance à Owrites
              pour leur stratégie de contenu B2B.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-all shadow-xl"
              >
                Démarrer gratuitement
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-brand-400/50 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all"
              >
                <Calendar size={18} />
                Réserver une démo
              </Link>
            </div>

            <p className="text-brand-200/70 text-xs mt-6">
              Sans carte bancaire · Réponse en 24h · Accompagnement inclus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
