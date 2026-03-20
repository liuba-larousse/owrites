import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "strategie-contenu-b2b-2025",
    category: "Stratégie",
    title: "5 piliers d'une stratégie de contenu B2B efficace en 2025",
    excerpt:
      "Découvrez comment les entreprises B2B leaders génèrent des leads qualifiés grâce à une stratégie de contenu structurée et mesurable.",
    readTime: "8 min",
    date: "12 mars 2025",
    color: "bg-brand-600",
  },
  {
    slug: "ia-redaction-contenu-entreprise",
    category: "Intelligence Artificielle",
    title: "Comment l'IA transforme la rédaction de contenu d'entreprise",
    excerpt:
      "L'IA ne remplace pas les rédacteurs humains — elle les amplifie. Voici comment combiner expertise humaine et automatisation intelligente.",
    readTime: "6 min",
    date: "5 mars 2025",
    color: "bg-purple-600",
  },
  {
    slug: "seo-b2b-belgique-suisse",
    category: "SEO",
    title: "SEO B2B en Belgique et Suisse : les spécificités à connaître",
    excerpt:
      "Les marchés belge et suisse ont leurs propres codes. Adaptez votre stratégie SEO pour capter le trafic qualifié francophone.",
    readTime: "7 min",
    date: "28 février 2025",
    color: "bg-emerald-600",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
              Ressources & Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
              Expertise & Insights{" "}
              <span className="text-gradient">pour votre croissance</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 whitespace-nowrap"
          >
            Voir tous les articles
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/30 transition-all"
            >
              {/* Thumbnail placeholder */}
              <div
                className={`h-40 ${post.color} flex items-center justify-center`}
              >
                <div className="text-white/20 text-6xl font-display font-bold">
                  {post.category.charAt(0)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-brand-600 font-medium">
                    <Tag size={11} />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold font-display text-gray-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs font-medium text-brand-600 group-hover:gap-2 flex items-center gap-1 transition-all">
                    Lire <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
