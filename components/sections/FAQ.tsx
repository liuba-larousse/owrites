"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Qu'est-ce que le ghostwriting LinkedIn ?",
    answer:
      "Un ghostwriter LinkedIn rédige vos publications, votre profil et votre stratégie de contenu en utilisant votre voix et vos idées. Vous restez visible et construisez votre autorité sans écrire vous-même.",
  },
  {
    question: "À qui s'adresse ce service ?",
    answer:
      "Aux fondateurs B2B, consultants et professionnels du service qui veulent des leads qualifiés via LinkedIn — sans passer des heures à publier du contenu.",
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer:
      "La plupart des clients voient une hausse des vues et de l'engagement en 30 à 60 jours. La génération de leads s'améliore à mesure que l'autorité se capitalise.",
  },
  {
    question: "Le ghostwriter écrira-t-il avec ma voix ?",
    answer:
      "Oui. La « capture de voix » est le cœur du processus. Chaque publication passe par votre validation avant mise en ligne.",
  },
  {
    question: "Faut-il une grande audience LinkedIn ?",
    answer:
      "Non. Le contenu LinkedIn est distribué par pertinence, pas par nombre d'abonnés. Un bon positionnement fonctionne même avec une petite audience.",
  },
  {
    question: "En quoi c'est différent du contenu IA ?",
    answer:
      "L'IA ne remplace pas le positionnement stratégique et la capture de voix. On écrit du contenu humain, basé sur votre expérience — pas un template.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ maxWidth: 820, margin: "0 auto", padding: "100px 48px" }}
    >
      <style>{`
        @media (max-width: 768px) {
          .faq-section { padding: 60px 20px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          className="section-tag"
          style={{ justifyContent: "center", display: "inline-flex" }}
        >
          FAQ — Ghostwriting LinkedIn
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: 16,
            color: "var(--black)",
            fontFamily: "var(--font-sans)",
          }}
        >
          Questions{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: 0,
            }}
          >
            fréquentes
          </em>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--gray-mid)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Tout ce que vous devez savoir sur le ghostwriting LinkedIn B2B.
        </p>
      </div>

      {/* Accordion */}
      <div>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{ borderBottom: "1px solid var(--gray-200)" }}
          >
            <button
              style={{
                padding: "22px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--black)",
                background: "none",
                border: "none",
                width: "100%",
                textAlign: "left",
                transition: "color 0.3s",
                fontFamily: "var(--font-sans)",
                gap: 16,
              }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--orange)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--black)";
              }}
            >
              {faq.question}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--orange)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{
                  flexShrink: 0,
                  transition: "transform 0.3s",
                  transform:
                    openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>

            <div
              style={{
                maxHeight: openIndex === idx ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease",
                paddingBottom: openIndex === idx ? 22 : 0,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: "var(--gray-mid)",
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Link
          href="https://calendly.com/josephcopy/discovery-call"
          target="_blank"
          rel="noopener"
          className="btn-primary"
        >
          Encore des questions ? Parlons-en{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
