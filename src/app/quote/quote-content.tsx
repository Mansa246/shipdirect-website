"use client";

import { useEffect } from "react";
import { Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import PageHero from "@/components/site/PageHero";
import { IconTile, SectionHeader } from "@/components/site/blocks";
import { Card } from "@/components/ui/card";

export default function QuoteContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Obtenir un devis d'expédition | ShipDirect"
      : "Get a Quote | ShipDirect Canada to Senegal";
  }, [fr]);

  const contacts = [
    { icon: Phone, label: fr ? "Nous appeler" : "Call Us", value: "613-700-2747", href: "tel:6137002747" },
    { icon: Mail, label: fr ? "Nous écrire" : "Email Us", value: "info@shipdirect.ca", href: "mailto:info@shipdirect.ca" },
    { icon: MapPin, label: fr ? "Point de dépôt" : "Drop-off Location", value: fr ? "Point de dépôt Ottawa (Fourni à la confirmation)" : "Ottawa Drop-off Location (Provided upon confirmation)" },
  ];

  return (
    <main>
      <PageHero
        eyebrow={fr ? "Devis gratuit" : "Free Quote"}
        eyebrowIcon={MessageSquareText}
        title={fr ? "Obtenir un devis d'expédition" : "Get a Shipping Quote"}
        subtitle={fr
          ? "Dites-nous ce que vous devez expédier et nous vous confirmerons les tarifs et les prochaines étapes. Rapide, simple, sans engagement."
          : "Tell us what you need to ship and we'll confirm pricing and next steps. Quick, easy, no obligation."}
        image={{ src: "/images/step-pack-branded.jpg", alt: fr ? "Préparation d'une boîte avec des vêtements et des cadeaux" : "Packing a box with clothes and gifts" }}
      />

      {/* ── FORM ── */}
      <section className="bg-off-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollFadeUp className="mb-8 text-center">
            <p className="text-lg text-body">
              {fr
                ? "Remplissez le formulaire ci-dessous et notre équipe vous répondra dans un délai d'un jour ouvrable avec les tarifs, la disponibilité et les détails d'expédition."
                : "Fill out the form below and our team will respond within one business day with pricing, availability, and shipping details."}
            </p>
          </ScrollFadeUp>
          <ScrollFadeUp delay={0.1}>
            <Card className="gap-0 rounded-3xl p-4 shadow-[var(--shadow-card)] sm:p-8">
              <QuoteForm />
            </Card>
          </ScrollFadeUp>
        </div>
      </section>

      {/* ── CONTACT ALTERNATIVES ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={fr ? "Vous préférez nous contacter directement ?" : "Prefer to reach us directly?"} className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-3">
            {contacts.map((c, i) => {
              const inner = (
                <>
                  <IconTile icon={c.icon} className="size-12" />
                  <div className="text-sm font-bold text-brand-navy">{c.label}</div>
                  <div className={c.href ? "font-semibold text-brand-red" : "text-sm text-muted-foreground"}>{c.value}</div>
                </>
              );
              const cls = "h-full items-center gap-3 rounded-3xl border-transparent bg-off-white p-7 text-center shadow-none transition-transform duration-300 hover:-translate-y-1";
              return (
                <ScrollFadeUp key={i} delay={i * 0.06}>
                  {c.href ? (
                    <a href={c.href} className="block h-full">
                      <Card className={cls}>{inner}</Card>
                    </a>
                  ) : (
                    <Card className={cls}>{inner}</Card>
                  )}
                </ScrollFadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
