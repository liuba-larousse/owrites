"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Combien de temps avant de voir des résultats sur LinkedIn ?",
    answer: "Les premiers résultats — en termes d'impressions et d'engagement — apparaissent généralement dans les 30 premiers jours. Les leads qualifiés commencent à arriver entre le 60e et le 90e jour. LinkedIn est un canal long terme : plus vous investissez dans la durée, plus le ROI est exponentiel.",
  },
  {
    question: "Comment capturez-vous ma voix pour le ghostwriting ?",
    answer: "Nous commençons par un appel de découverte de 90 minutes où nous explorons votre parcours, vos convictions, vos anecdotes et votre façon de communiquer. Nous complétons par un questionnaire détaillé et une analyse de vos communications existantes. Les premières semaines sont une phase de calibration, avec des révisions jusqu'à ce que la voix soit parfaite.",
  },
  {
    question: "Dois-je être actif sur LinkedIn pour que ça fonctionne ?",
    answer: "Nous gérons la création de contenu. Ce que nous vous demandons : approuver les posts (1–2 min par post), répondre aux commentaires quand c'est pertinent, et participer à 1 appel mensuel de bilan. Le reste, c'est notre travail.",
  },
  {
    question: "Quelle différence avec une agence de community management classique ?",
    answer: "Une agence CM gère votre présence sociale en masse. Owrites est spécialisée exclusivement sur LinkedIn B2B et le personal branding. Nous ne gérons pas de comptes d'entreprise génériques — nous construisons votre autorité personnelle en tant que fondateur ou expert. C'est radicalement différent.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors de France ?",
    answer: "Oui, nous travaillons avec des professionnels francophones en France, Belgique, Suisse, Canada, et dans d'autres pays francophones. La langue de travail est le français, et notre expertise couvre le marché B2B francophone dans son ensemble.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer: "Nos formules sont sans engagement longue durée. Vous pouvez arrêter à la fin de n'importe quel mois avec un préavis de 30 jours. Cela dit, LinkedIn étant un canal à effet cumulatif, nous recommandons a minima 3 mois pour voir les résultats significatifs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-py bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag mx-auto justify-center">Questions fréquentes</span>
          <h2
            className="text-3xl sm:text-4xl font-serif font-bold mt-2"
            style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
          >
            FAQ
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
              style={openIndex === idx ? { borderColor: "var(--orange)" } : {}}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span
                  className="text-base font-serif font-semibold leading-snug"
                  style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                >
                  {faq.question}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-white text-lg font-bold"
                  style={{
                    backgroundColor: openIndex === idx ? "var(--orange)" : "var(--navy)",
                    transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
