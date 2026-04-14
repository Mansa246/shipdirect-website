"use client";

import { useEffect } from "react";
import QuoteForm from "@/components/QuoteForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import ScrollFadeImg from "@/components/illustrations/ScrollFadeImg";
import { motion } from "framer-motion";

export default function ContactContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Contactez-nous | ShipDirect Canada vers Sénégal"
      : "Contact Us | ShipDirect Canada to Senegal";
  }, [fr]);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollFadeUp>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
                  {fr ? "📬 Nous contacter" : "📬 Get in Touch"}
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                  {fr ? "Nous sommes là pour vous aider" : "We're Here to Help"}
                </h1>
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.2}>
                <p className="text-lg text-blue-200 leading-relaxed max-w-xl">
                  {fr
                    ? "Contactez-nous pour toute question concernant l'expédition, les tarifs ou les services en gros. Notre équipe répond rapidement."
                    : "Reach out with any questions about shipping, pricing, or wholesale services. Our team responds quickly."}
                </p>
              </ScrollFadeUp>
            </div>
            <ScrollFadeUp delay={0.3}>
              <ScrollFadeImg src="/illustrations/contact_service_rep_illustration.png" alt="ShipDirect Customer Support Representative" priority />
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: contact info card */}
            <ScrollFadeUp className="lg:col-span-2 lg:sticky lg:top-24">
              <div className="bg-[#0D1F5C] text-white rounded-2xl p-8">
                <h2 className="text-xl font-extrabold mb-6">
                  {fr ? "Informations de contact" : "Contact Information"}
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">📞</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">
                        {fr ? "Téléphone" : "Phone"}
                      </div>
                      <a href="tel:6137002747" className="font-semibold hover:text-blue-200 transition-colors">613-700-2747</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">✉️</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">Email</div>
                      <a href="mailto:info@shipdirect.ca" className="font-semibold hover:text-blue-200 transition-colors">info@shipdirect.ca</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">📍</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">
                        {fr ? "Adresse" : "Address"}
                      </div>
                      <p className="font-semibold leading-relaxed">
                        {fr
                          ? <>Point de dépôt Ottawa<br />(Fourni à la confirmation)</>
                          : <>Ottawa Drop-off Location<br />(Provided upon confirmation)</>}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">🕐</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-2">
                        {fr ? "Heures d'ouverture" : "Business Hours"}
                      </div>
                      <div className="space-y-1 text-sm text-blue-100">
                        <div className="flex justify-between gap-8">
                          <span>{fr ? "Lundi – Vendredi" : "Monday – Friday"}</span>
                          <span className="text-white font-medium">{fr ? "9h00 – 18h00" : "9:00 AM – 6:00 PM"}</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>{fr ? "Samedi" : "Saturday"}</span>
                          <span className="text-white font-medium">{fr ? "10h00 – 16h00" : "10:00 AM – 4:00 PM"}</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>{fr ? "Dimanche" : "Sunday"}</span>
                          <span className="text-white font-medium">{fr ? "Fermé" : "Closed"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeUp>

            {/* Right: contact form */}
            <ScrollFadeUp delay={0.2} className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-extrabold text-[#0D1F5C] mb-2">
                {fr ? "Envoyez-nous un message" : "Send Us a Message"}
              </h2>
              <p className="text-sm text-[#6B7280] mb-6">
                {fr ? "Nous vous répondrons dans un délai d'un jour ouvrable." : "We'll get back to you within one business day."}
              </p>
              <QuoteForm />
            </ScrollFadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
