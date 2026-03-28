"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "En 3 mois, mes impressions LinkedIn sont passées de 2 000 à 18 000 par mois. Owrites a complètement transformé ma présence sur la plateforme.",
    name: "Alexandre Morin",
    title: "Fondateur",
    company: "Morin Conseil",
    avatar: "AM",
    bg: "#FF5202",
  },
  {
    quote:
      "Je reçois maintenant 4 à 6 messages de prospects qualifiés par semaine, sans aucune prospection de ma part. Le contenu parle vraiment à mes clients idéaux.",
    name: "Claire Fontaine",
    title: "DG",
    company: "Fontaine RH",
    avatar: "CF",
    bg: "#3B82F6",
  },
  {
    quote:
      "L'équipe Owrites a saisi mon positionnement dès le premier appel. Mes posts sonnent juste — mes clients me disent qu'ils me reconnaissent parfaitement.",
    name: "Julien Marceau",
    title: "Partner",
    company: "Avenir Patrimoine",
    avatar: "JM",
    bg: "#7C3AED",
  },
  {
    quote:
      "Avant, je publiais une fois par mois, mal à l'aise avec LinkedIn. Maintenant je publie 3 fois par semaine et mon réseau a doublé en 60 jours.",
    name: "Sophie Laurent",
    title: "CEO",
    company: "Laurent Tech",
    avatar: "SL",
    bg: "#059669",
  },
  {
    quote:
      "La stratégie de contenu LinkedIn d'Owrites nous a permis de décrocher un partenariat à six chiffres avec un prospect qui nous suivait depuis 2 mois.",
    name: "Marc Dupuis",
    title: "Directeur Commercial",
    company: "Dupuis & Co",
    avatar: "MD",
    bg: "#DC2626",
  },
  {
    quote:
      "Hostlyft a généré plus de 16 000 impressions et 10 leads inbound qualifiés grâce à la stratégie LinkedIn d'Owrites. ROI immédiat et mesurable.",
    name: "Karim Benali",
    title: "CEO",
    company: "Hostlyft",
    avatar: "KB",
    bg: "#D97706",
  },
  {
    quote:
      "Je pensais que LinkedIn n'était pas pour moi. En 6 semaines, j'ai eu plus de visibilité qu'en 3 ans de réseautage traditionnel. Incroyable.",
    name: "Nathalie Voss",
    title: "Coach Business",
    company: "Voss Coaching",
    avatar: "NV",
    bg: "#0891B2",
  },
  {
    quote:
      "Owrites comprend les enjeux B2B francophones. Leur ghostwriting est précis, crédible et positionne vraiment l'expert — pas juste du contenu générique.",
    name: "Pierre-Yves Renaud",
    title: "Associé",
    company: "Renaud Stratégies",
    avatar: "PR",
    bg: "#BE185D",
  },
  {
    quote:
      "En moins de 90 jours, mon profil LinkedIn est passé de 312 à 1 200 vues hebdomadaires. Mes concurrents me demandent comment je fais.",
    name: "Isabelle Chambon",
    title: "Consultante Indépendante",
    company: "IC Conseil",
    avatar: "IC",
    bg: "#4F46E5",
  },
  {
    quote:
      "Le meilleur investissement marketing que j'aie fait cette année. Chaque franc dépensé chez Owrites m'a rapporté au moins 5x en nouveaux clients.",
    name: "David Leclercq",
    title: "Directeur Général",
    company: "Leclercq Industries",
    avatar: "DL",
    bg: "#065F46",
  },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: 1 | -1) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((c) => (c + dir + total) % total);
    startTimer();
  };

  // Build the visible window (wrapping)
  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    testimonials[(current + i) % total]
  );

  return (
    <section style={{ padding: "96px 0", background: "var(--off-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>
            Témoignages
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "var(--black)",
              marginTop: 8,
            }}
          >
            Ce que disent nos clients
          </h2>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="testimonials-grid"
          >
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                style={{
                  background: "#fff",
                  borderRadius: "var(--r-lg)",
                  padding: 32,
                  border: "1px solid var(--gray-200)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} style={{ fill: "#FBBF24", color: "#FBBF24" }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  style={{
                    fontSize: 15,
                    color: "var(--gray-dark)",
                    lineHeight: 1.7,
                    flex: 1,
                    margin: 0,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: t.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "var(--black)", margin: 0 }}>
                      {t.name}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--gray-light)", margin: 0 }}>
                      {t.title} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 40,
            }}
          >
            <button
              onClick={() => go(-1)}
              aria-label="Précédent"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1.5px solid var(--gray-200)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--black)",
                transition: "border-color 0.2s",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setCurrent(i);
                    startTimer();
                  }}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === current ? "var(--orange)" : "var(--gray-200)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Suivant"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1.5px solid var(--gray-200)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--black)",
                transition: "border-color 0.2s",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: single column */}
      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-grid > *:not(:first-child) {
            display: none;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .testimonials-grid > *:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
