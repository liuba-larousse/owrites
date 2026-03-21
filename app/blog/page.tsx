import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getBlogPosts, getAllCategories, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog LinkedIn B2B — Conseils Ghostwriting & Personal Branding",
  description:
    "Stratégie LinkedIn, ghostwriting B2B, personal branding et génération de leads. Conseils pratiques pour fondateurs et consultants francophones.",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const activeCategory = searchParams?.category;
  const categories = getAllCategories();
  const posts = getBlogPosts({ category: activeCategory });
  const featured = getBlogPosts({ featured: true })[0];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="section-py text-center px-4"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="section-tag mx-auto justify-center" style={{ color: "var(--orange)" }}>
            Blog & Ressources
          </span>
          <h1
            className="text-4xl sm:text-5xl font-serif font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            LinkedIn B2B :{" "}
            <em style={{ color: "var(--orange-light)", fontStyle: "italic" }}>
              conseils & stratégies
            </em>
          </h1>
          <p className="text-lg text-white/70">
            Ghostwriting, personal branding, génération de leads — tout ce qu&apos;il faut savoir pour faire de LinkedIn votre canal d&apos;acquisition.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured post */}
        {featured && !activeCategory && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all mb-14"
          >
            <div
              className={`h-56 lg:h-64 bg-gradient-to-br ${featured.coverColor} flex items-end p-8 relative overflow-hidden`}
              style={{ background: `linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)` }}
            >
              <div className="relative z-10">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 text-white"
                  style={{ backgroundColor: "var(--orange)" }}
                >
                  {featured.category}
                </span>
                <h2
                  className="text-2xl lg:text-3xl font-serif font-bold text-white leading-tight max-w-2xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {featured.title}
                </h2>
              </div>
            </div>
            <div className="bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-gray-500 text-sm mb-3 max-w-xl">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                  <span>{featured.author.name}</span>
                </div>
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap"
                style={{ color: "var(--orange)" }}
              >
                Lire l&apos;article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors"
            style={
              !activeCategory
                ? { backgroundColor: "var(--orange)", color: "#fff" }
                : { backgroundColor: "#f3f4f6", color: "#4b5563" }
            }
          >
            Tous les articles
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors"
              style={
                activeCategory === cat
                  ? { backgroundColor: "var(--orange)", color: "#fff" }
                  : { backgroundColor: "#f3f4f6", color: "#4b5563" }
              }
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Cover */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
              >
                <span
                  className="text-7xl font-serif font-bold opacity-20 text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {post.category.charAt(0)}
                </span>
                <span
                  className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: "var(--orange)" }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-base font-serif font-semibold mb-2 leading-snug group-hover:text-orange transition-colors"
                  style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                >
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: "var(--orange)" }}
                    >
                      {post.author.initials.charAt(0)}
                    </div>
                    <span className="text-xs text-gray-400">{post.author.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA note */}
        <div
          className="mt-14 rounded-2xl p-6 text-center border"
          style={{ backgroundColor: "var(--orange-glow)", borderColor: "var(--orange)22" }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--navy)" }}>
            Vous voulez des conseils personnalisés pour votre LinkedIn ?
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Réservez un appel gratuit — on analyse votre profil et on vous donne un plan d&apos;action concret.
          </p>
          <Link href="/contact" className="btn-primary text-sm">
            Réserver un appel →
          </Link>
        </div>
      </div>
    </div>
  );
}
