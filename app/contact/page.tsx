"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bonjour@owrites.com",
    href: "mailto:bonjour@owrites.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+32 2 123 45 67",
    href: "tel:+3221234567",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Bruxelles, Belgique",
    href: null,
  },
  {
    icon: Calendar,
    label: "Réserver un appel",
    value: "Calendly (30 min)",
    href: "#demo",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API or form service
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-py bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="inline-block rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-5">
            Parlons de votre{" "}
            <span className="text-gradient">stratégie de contenu</span>
          </h1>
          <p className="text-lg text-gray-500">
            Réponse garantie en moins de 24h ouvrées. Appel stratégique gratuit
            offert pour tout nouveau projet.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-display font-semibold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-gray-800 hover:text-brand-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-800">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Demo CTA */}
              <div
                id="demo"
                className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white"
              >
                <Calendar size={24} className="mb-3 text-brand-200" />
                <h3 className="text-base font-semibold mb-2">
                  Réserver une démo gratuite
                </h3>
                <p className="text-sm text-brand-100 mb-4">
                  30 minutes pour vous présenter la plateforme et définir votre
                  stratégie de contenu B2B.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  Choisir un créneau →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    Message envoyé !
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Merci pour votre message. Notre équipe vous répondra dans les
                    24 heures ouvrées.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm space-y-5"
                >
                  <h2 className="text-lg font-display font-semibold text-gray-900 mb-2">
                    Envoyez-nous un message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Prénom & Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Marie Dupont"
                        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme SA"
                        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="marie@acme.com"
                        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+32 4xx xx xx xx"
                        className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Budget mensuel estimé
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition bg-white"
                    >
                      <option value="">Sélectionner…</option>
                      <option value="500-1000">500 € – 1 000 €</option>
                      <option value="1000-2500">1 000 € – 2 500 €</option>
                      <option value="2500-5000">2 500 € – 5 000 €</option>
                      <option value="5000+">5 000 € et plus</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Parlez-nous de vos objectifs, de votre audience cible et des types de contenu qui vous intéressent…"
                      className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-all shadow-sm"
                  >
                    Envoyer ma demande
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    En envoyant ce formulaire, vous acceptez notre{" "}
                    <a href="/legal/privacy" className="underline hover:text-brand-600">
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
