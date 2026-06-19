/**
 * Renders a JSON-LD structured-data block. Server-rendered into the static HTML
 * so crawlers (Google, AI answer engines) can read it without executing JS.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema is built from trusted, static data — no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
