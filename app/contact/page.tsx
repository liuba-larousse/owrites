"use client";

import { useState } from "react";
import { Phone, MapPin, Calendar } from "lucide-react";
import { track } from "@vercel/analytics";
import { BOOKING_URL } from "@/lib/config";

const contactInfo = [
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
    href: BOOKING_URL,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  // The form is a frictionless pre-booking step: on submit we send the visitor
  // straight to Calendly with their name and email pre-filled, so they land on
  // the slot picker ready to book.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    track("contact_form_submit", { budget: form.budget || "non précisé" });

    const params = new URLSearchParams();
    if (form.name) params.set("name", form.name);
    if (form.email) params.set("email", form.email);
    const sep = BOOKING_URL.includes("?") ? "&" : "?";
    window.location.href = `${BOOKING_URL}${sep}${params.toString()}`;
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
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("booking_click", { location: "contact_demo" })}
                  className="inline-flex items-center justify-center w-full rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  Choisir un créneau →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm space-y-5"
              >
                  <div className="mb-2">
                    <h2 className="text-lg font-display font-semibold text-gray-900">
                      Réservez votre appel stratégique
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Renseignez vos coordonnées : vous choisirez ensuite votre
                      créneau dans notre agenda Calendly.
                    </p>
                  </div>

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
                      Un mot sur votre projet (facultatif)
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Parlez-nous de vos objectifs, de votre audience cible et des types de contenu qui vous intéressent…"
                      className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-all shadow-sm"
                  >
                    Réserver mon appel →
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Vous serez redirigé vers notre agenda pour choisir un créneau.
                    En continuant, vous acceptez notre{" "}
                    <a href="/legal/privacy" className="underline hover:text-brand-600">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
