import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { getBlogPosts, getAllCategories, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Stratégie de contenu B2B",
  description:
    "Expertise, tendances et conseils pratiques pour votre stratégie de contenu B2B. Articles rédigés par les experts Owrites.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const activeCategory = (await searchParams)?.category;
  const categories = getAllCategories();
  const posts = getBlogPosts({ category: activeCategory });
  const featured = getBlogPosts({ featured: true })[0];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-py bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Blog & Ressources
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-5">
            Insights pour votre{" "}
            <span className="text-gradient">stratégie de contenu B2B</span>
          </h1>
          <p className="text-lg text-gray-500">
            Stratégie, SEO, IA, copywriting — tout ce qu&apos;il faut savoir pour faire
            du contenu un moteur de croissance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Featured post */}
        {featured && !activeCategory && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/30 transition-all mb-14"
          >
            <div className="relative h-56 lg:h-72 overflow-hidden flex items-end p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="relative">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 mb-3">
                  {featured.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-white leading-tight max-w-2xl group-hover:underline">
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
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 whitespace-nowrap">
                Lire l&apos;article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-brand-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Tous les articles
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
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
              className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/30 transition-all"
            >
              {/* Cover */}
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full ${post.author.color} flex items-center justify-center text-white text-xs font-bold`}
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

        {/* AI Agent note */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-100 p-6 text-center">
          <p className="text-sm text-gray-600 mb-1">
            Notre blog combine expertise humaine et agent IA éditorial.
          </p>
          <p className="text-xs text-gray-400">
            Articles optimisés SEO · Rédigés et validés par des experts ·{" "}
            <Link href="/services#ai-agent" className="text-brand-600 hover:underline">
              En savoir plus sur notre agent IA →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
