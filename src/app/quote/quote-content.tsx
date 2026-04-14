"use client";

import { useEffect } from "react";
import QuoteForm from "@/components/QuoteForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QuoteContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Obtenir un devis d'expédition | ShipDirect"
      : "Get a Quote | ShipDirect Canada to Senegal";
  }, [fr]);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            {fr ? "💬 Devis gratuit" : "💬 Free Quote"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {fr ? "Obtenir un devis d'expédition" : "Get a Shipping Quote"}
          </h1>
          <p className="text-lg text-blue-200">
            {fr
              ? "Dites-nous ce que vous devez expédier et nous vous confirmerons les tarifs et les prochaines étapes. Rapide, simple, sans engagement."
              : "Tell us what you need to ship and we'll confirm pricing and next steps. Quick, easy, no obligation."}
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[#1A1410]">
              {fr
                ? "Remplissez le formulaire ci-dessous et notre équipe vous répondra dans un délai d'un jour ouvrable avec les tarifs, la disponibilité et les détails d'expédition."
                : "Fill out the form below and our team will respond within one business day with pricing, availability, and shipping details."}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── CONTACT ALTERNATIVES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-[#0D1F5C] mb-8">
            {fr ? "Vous préférez nous contacter directement ?" : "Prefer to reach us directly?"}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#EEF1F8] rounded-2xl border border-gray-200">
              <div className="text-3xl mb-3">📞</div>
              <div className="font-bold text-[#0D1F5C] text-sm mb-2">{fr ? "Nous appeler" : "Call Us"}</div>
              <a href="tel:6137002747" className="text-[#D42B2B] font-semibold hover:underline">613-700-2747</a>
            </div>
            <div className="text-center p-6 bg-[#EEF1F8] rounded-2xl border border-gray-200">
              <div className="text-3xl mb-3">✉️</div>
              <div className="font-bold text-[#0D1F5C] text-sm mb-2">{fr ? "Nous écrire" : "Email Us"}</div>
              <a href="mailto:info@shipdirect.ca" className="text-[#D42B2B] font-semibold hover:underline">info@shipdirect.ca</a>
            </div>
            <div className="text-center p-6 bg-[#EEF1F8] rounded-2xl border border-gray-200">
              <div className="text-3xl mb-3">📍</div>
              <div className="font-bold text-[#0D1F5C] text-sm mb-2">{fr ? "Point de dépôt" : "Drop-off Location"}</div>
              <p className="text-sm text-[#6B7280]">
                {fr ? "Point de dépôt Ottawa (Fourni à la confirmation)" : "Ottawa Drop-off Location (Provided upon confirmation)"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
