import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar, Share2 } from "lucide-react";
import { getBlogPost, getBlogPosts, formatDate } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

// Simple markdown-to-HTML renderer (no external lib needed)
function renderMarkdown(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("# ")) return `<h1>${line.slice(2)}</h1>`;
      if (line.startsWith("**") && line.endsWith("**"))
        return `<strong>${line.slice(2, -2)}</strong>`;
      if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
      if (line.startsWith("1. ") || line.match(/^\d+\. /))
        return `<li>${line.replace(/^\d+\. /, "")}</li>`;
      if (line === "") return "<br/>";
      // Inline bold
      const withBold = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Inline links [text](url)
      const withLinks = withBold.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-brand-600 hover:underline">$1</a>'
      );
      return `<p>${withLinks}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getBlogPosts({ limit: 3 }).filter(
    (p) => p.slug !== post.slug
  );

  const html = renderMarkdown(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    image: `${SITE_URL}${post.image}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="pt-16">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Cover */}
      <div className="relative h-64 lg:h-80 flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Retour au blog
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1 text-xs bg-white/20 text-white rounded-full px-3 py-1">
              <Tag size={11} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/70">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content */}
          <article className="lg:col-span-3">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full ${post.author.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {post.author.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-xs text-gray-400">{post.author.role}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                <Calendar size={12} />
                {formatDate(post.publishedAt)}
              </span>
            </div>

            {/* Content */}
            <div
              className="prose prose-gray prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-gray-600 prose-li:mb-1
                prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-3">Tags :</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-3">
              <Share2 size={16} className="text-gray-400" />
              <span className="text-xs text-gray-400">Partager cet article</span>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* CTA */}
            <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-5 text-white mb-6">
              <p className="text-xs text-brand-200 mb-2 font-medium">Owrites</p>
              <p className="text-sm font-semibold mb-3">
                Besoin d&apos;un contenu comme celui-ci pour votre entreprise ?
              </p>
              <Link
                href="/contact"
                className="block text-center rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
              >
                Demander un devis →
              </Link>
            </div>
          </aside>
        </div>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-display font-bold text-gray-900 mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-100 overflow-hidden hover:border-brand-200 hover:shadow-md transition-all"
                >
                  <div className="relative h-28 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rp.image}
                      alt={rp.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white flex-1">
                    <span className="text-xs text-brand-600 font-medium">
                      {rp.category}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 mt-1 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                      {rp.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
