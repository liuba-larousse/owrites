"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quelle différence entre ghostwriting et consulting lead generation LinkedIn ?",
    a: "Le ghostwriting, c'est nous qui écrivons pour vous. Le consulting lead generation LinkedIn, c'est nous qui vous accompagnons pour maîtriser LinkedIn vous-même — positionnement, stratégie de contenu, lead generation et prospection B2B.",
  },
  {
    q: "Les formations lead generation LinkedIn sont-elles individuelles ou en groupe ?",
    a: "Les deux. Nos formations social selling et lead generation LinkedIn sont disponibles en sessions individuelles (à partir de 1 497€ HT) ou en groupe pour vos équipes (même tarif). Le programme est adapté à chaque situation.",
  },
  {
    q: "Combien de temps pour générer des leads qualifiés sur LinkedIn ?",
    a: "Avec le coaching lead generation LinkedIn (447€ HT/mois), la plupart des clients constatent leurs premiers leads qualifiés en 60 à 90 jours. L'engagement minimum de 3 mois permet de construire un système de lead generation durable.",
  },
  {
    q: "Les formations LinkedIn lead generation sont-elles éligibles au financement ?",
    a: "Oui, nos formations professionnelles de lead generation LinkedIn (de 1 497€ à 3 297€ HT) peuvent être éligibles aux dispositifs de financement (OPCO, CPF). Contactez-nous pour discuter des possibilités de prise en charge.",
  },
  {
    q: "Quels résultats concrets attendre du coaching lead generation LinkedIn ?",
    a: "Un positionnement clair, un profil optimisé pour la conversion, une ligne éditoriale orientée lead generation et les compétences pour générer des leads qualifiés de manière constante. Nos clients constatent en moyenne +95% d'impressions et des leads entrants dès les 90 premiers jours.",
  },
  {
    q: "Combien coûte un consulting lead generation LinkedIn avec Owrites ?",
    a: "L'audit LinkedIn lead generation est à 147€ HT (ponctuel). Le coaching lead generation complet est à 447€ HT/mois (engagement 3 mois). Les formations varient de 1 497€ à 3 297€ HT (groupe ou individuel). Tous les tarifs sont hors taxes.",
  },
];

export default function ConsultingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((item, i) => (
        <div
          key={i}
          style={{ borderBottom: "1px solid var(--gray-200)" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              padding: "22px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 17,
              fontWeight: 600,
              color: open === i ? "var(--orange)" : "var(--black)",
              fontFamily: "var(--font-sans)",
              gap: 16,
              transition: "color 0.2s",
            }}
          >
            {item.q}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{
                width: 20,
                flexShrink: 0,
                color: "var(--orange)",
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform 0.3s",
              }}
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div
            style={{
              maxHeight: open === i ? 300 : 0,
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: "var(--gray-mid)",
                lineHeight: 1.8,
                paddingBottom: 22,
              }}
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
