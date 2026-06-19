/**
 * Central site configuration.
 *
 * Override any of these per-environment via the matching NEXT_PUBLIC_* env var
 * (e.g. in `.env.local` or the Vercel dashboard). The defaults are the
 * production values so the site works even when no env vars are set.
 */

// Canonical production origin. No trailing slash.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://owrites.co";

// Real booking link (Calendly). Used by every "Réserver un appel / une démo" CTA.
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://calendly.com/olaniyanolaide/discovery-call";

// Public LinkedIn profile. Used by the footer social link and Organization schema.
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/olaide-olaniyan-651596176/";

export const SITE_NAME = "Owrites";
