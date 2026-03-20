/**
 * Blog API — AI Agent Integration endpoint
 *
 * GET  /api/blog         → list all posts
 * POST /api/blog         → create a new post (AI agent)
 *
 * In production: replace the in-memory store with a database (Postgres, PlanetScale…)
 * and add proper authentication (API key, JWT…) for the AI agent.
 */

import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog";

// In-memory store for AI-agent-created posts (dev only)
// In production, use a DB
const agentPosts: Record<string, unknown>[] = [];

export async function GET() {
  const posts = getBlogPosts();
  return NextResponse.json({ posts, agentPosts, total: posts.length + agentPosts.length });
}

export async function POST(request: Request) {
  // Simple API key check — replace with proper auth in production
  const apiKey = request.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.OWRITES_AI_API_KEY) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Validate required fields
    const required = ["slug", "title", "excerpt", "content", "category"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Champ requis manquant: ${field}` },
          { status: 400 }
        );
      }
    }

    const newPost = {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      tags: body.tags ?? [],
      author: body.author ?? {
        name: "Agent IA Owrites",
        role: "Éditeur IA",
        initials: "AI",
        color: "bg-brand-500",
      },
      publishedAt: body.publishedAt ?? new Date().toISOString().split("T")[0],
      readTime: body.readTime ?? "5 min",
      coverColor: body.coverColor ?? "from-brand-600 to-brand-800",
      featured: body.featured ?? false,
      createdByAgent: true,
      createdAt: new Date().toISOString(),
    };

    agentPosts.push(newPost);

    return NextResponse.json(
      { success: true, post: newPost },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Format JSON invalide" },
      { status: 400 }
    );
  }
}
