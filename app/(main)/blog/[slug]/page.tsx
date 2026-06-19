import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getBlogPost, getBlogPosts, formatDate } from "@/lib/blog";

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
      url: `https://owrites.co/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

// Simple markdown-to-HTML renderer
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
      const withBold = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      const withLinks = withBold.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" style="color:var(--orange)">$1</a>'
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
      name: "Owrites",
      url: "https://owrites.co",
      logo: "https://owrites.co/images/owrites-logo.png",
    },
    image: "https://owrites.co/images/og-owrites-ghostwriter-linkedin.jpg",
    mainEntityOfPage: `https://owrites.co/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://owrites.co" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://owrites.co/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://owrites.co/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Cover */}
      <div
        className="h-64 lg:h-80 flex items-end"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 text-sm hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Retour au blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "var(--orange)" }}
            >
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/60">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
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
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "var(--orange)" }}
                >
                  {post.author.initials}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--navy)" }}>{post.author.name}</p>
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
                prose-headings:font-serif prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-gray-600 prose-li:mb-1
                prose-strong:text-gray-800"
              style={{ "--tw-prose-headings": "var(--navy)" } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-3">Tags :</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ backgroundColor: "var(--orange-glow)", color: "var(--orange)" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div
              className="sticky top-24 rounded-2xl p-5 text-white"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <p
                className="text-xs mb-2 font-semibold"
                style={{ color: "var(--orange-light)" }}
              >
                Owrites
              </p>
              <p className="text-sm font-semibold mb-4 text-white">
                Vous voulez des posts LinkedIn de cette qualité ?
              </p>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center text-xs"
              >
                Réserver un appel →
              </Link>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2
              className="text-xl font-serif font-bold mb-8"
              style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
            >
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="h-28 flex items-center justify-center relative"
                    style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
                  >
                    <span
                      className="text-5xl font-serif font-bold opacity-20 text-white"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {rp.category.charAt(0)}
                    </span>
                  </div>
                  <div className="p-4 bg-white flex-1">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--orange)" }}
                    >
                      {rp.category}
                    </span>
                    <h3
                      className="text-sm font-semibold mt-1 line-clamp-2 leading-snug group-hover:opacity-80 transition-opacity"
                      style={{ color: "var(--navy)" }}
                    >
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
