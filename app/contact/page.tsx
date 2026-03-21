"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:ring-2 bg-white"

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="section-py text-center px-4"
        style={{ background: "linear-gradient(135deg, var(--orange) 0%, var(--orange-light) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Parlons de votre LinkedIn
          </h1>
          <p className="text-lg text-white/85">
            Réservez un appel gratuit de 30 minutes. On analyse votre situation et on définit ensemble la stratégie qui vous correspond.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <h2
                className="text-lg font-bold mb-6"
                style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
              >
                Pourquoi réserver un appel ?
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "🎯", title: "Diagnostic LinkedIn offert", desc: "On analyse votre profil et vos derniers posts en direct." },
                  { icon: "💡", title: "Stratégie personnalisée", desc: "On vous donne des recommandations concrètes, sans engagement." },
                  { icon: "⏱", title: "30 min, pas plus", desc: "Appel structuré, on va droit au but." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA card */}
              <div
                className="rounded-2xl p-6"
                id="demo"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <p
                  className="text-sm font-bold text-white mb-2"
                  style={{ color: "var(--orange-light)" }}
                >
                  📅 Réservez directement
                </p>
                <p className="text-xs text-white/60 mb-4">
                  Appel de 30 min · 100% gratuit · Sans engagement
                </p>
                <a
                  href="#"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Choisir un créneau →
                </a>
              </div>

              <div className="mt-6 space-y-3">
                <a href="mailto:bonjour@owrites.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange transition-colors">
                  <span>✉</span> bonjour@owrites.com
                </a>
                <p className="text-xs text-gray-400">Réponse garantie en moins de 24h ouvrées</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="rounded-2xl border p-12 text-center"
                  style={{ borderColor: "var(--orange)", backgroundColor: "var(--orange-glow)" }}
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h2
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                  >
                    Message reçu !
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Merci pour votre message. Notre équipe vous répondra dans les 24 heures ouvrées.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm space-y-5"
                >
                  <h2
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                  >
                    Envoyez-nous un message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Prénom & Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Marie Dupont"
                        className={inputClass}
                        style={{ "--tw-ring-color": "var(--orange)" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme SAS"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="marie@acme.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+33 6 xx xx xx xx"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Service qui vous intéresse
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Sélectionner…</option>
                      <option value="ghostwriting">Ghostwriting LinkedIn</option>
                      <option value="profil">Optimisation de profil</option>
                      <option value="strategie">Stratégie de contenu</option>
                      <option value="leads">Génération de leads</option>
                      <option value="audit">Audit LinkedIn</option>
                      <option value="autre">Autre / Je ne sais pas encore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Décrivez votre situation & objectifs *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Parlez-nous de votre activité, votre audience cible, et ce que vous aimeriez accomplir sur LinkedIn…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Envoyer ma demande →
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    En envoyant ce formulaire, vous acceptez notre{" "}
                    <a href="/legal/privacy" className="underline">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
