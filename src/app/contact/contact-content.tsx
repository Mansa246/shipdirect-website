"use client";

import { useEffect } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WhatsAppIcon, useWhatsAppUrl } from "@/components/WhatsApp";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import PageHero from "@/components/site/PageHero";
import { IconTile } from "@/components/site/blocks";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const whatsappUrl = useWhatsAppUrl();

  useEffect(() => {
    document.title = fr
      ? "Contactez-nous | ShipDirect Canada vers Sénégal"
      : "Contact Us | ShipDirect Canada to Senegal";
  }, [fr]);

  const hours = fr
    ? [["Lundi – Vendredi", "9h00 – 18h00"], ["Samedi", "10h00 – 16h00"], ["Dimanche", "Fermé"]]
    : [["Monday – Friday", "9:00 AM – 6:00 PM"], ["Saturday", "10:00 AM – 4:00 PM"], ["Sunday", "Closed"]];

  return (
    <main>
      <PageHero
        eyebrow={fr ? "Nous contacter" : "Get in Touch"}
        eyebrowIcon={Send}
        title={fr ? "Nous sommes là pour vous aider" : "We're Here to Help"}
        subtitle={fr
          ? "Contactez-nous pour toute question concernant l'expédition, les tarifs ou les services en gros. Notre équipe répond rapidement."
          : "Reach out with any questions about shipping, pricing, or wholesale services. Our team responds quickly."}
        image={{ src: "/images/contact-agent-branded.jpg", alt: fr ? "Une agente du service client répond au téléphone" : "A customer support agent answering the phone" }}
      />

      {/* ── CONTACT LAYOUT ── */}
      <section className="bg-off-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-5">
            {/* Left: contact info card */}
            <ScrollFadeUp className="lg:sticky lg:top-28 lg:col-span-2">
              <Card className="gap-0 rounded-3xl border-brand-navy bg-brand-navy p-8 text-white shadow-[var(--shadow-card-hover)]">
                <h2 className="mb-7 text-xl font-extrabold">
                  {fr ? "Informations de contact" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  <a href="tel:6137002747" className="group flex items-start gap-4">
                    <IconTile icon={Phone} tone="light" />
                    <div>
                      <div className="mb-1 text-xs tracking-wide text-blue-300 uppercase">{fr ? "Téléphone" : "Phone"}</div>
                      <div className="font-semibold transition-colors group-hover:text-blue-200">613-700-2747</div>
                    </div>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                      <WhatsAppIcon className="size-5" />
                    </div>
                    <div>
                      <div className="mb-1 text-xs tracking-wide text-blue-300 uppercase">WhatsApp</div>
                      <div className="font-semibold transition-colors group-hover:text-blue-200">{fr ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}</div>
                    </div>
                  </a>
                  <a href="mailto:info@shipdirect.ca" className="group flex items-start gap-4">
                    <IconTile icon={Mail} tone="light" />
                    <div>
                      <div className="mb-1 text-xs tracking-wide text-blue-300 uppercase">Email</div>
                      <div className="font-semibold transition-colors group-hover:text-blue-200">info@shipdirect.ca</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <IconTile icon={MapPin} tone="light" />
                    <div>
                      <div className="mb-1 text-xs tracking-wide text-blue-300 uppercase">{fr ? "Adresse" : "Address"}</div>
                      <p className="leading-relaxed font-semibold">
                        {fr
                          ? <>Point de dépôt Ottawa<br />(Fourni à la confirmation)</>
                          : <>Ottawa Drop-off Location<br />(Provided upon confirmation)</>}
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-white/10" />
                  <div className="flex items-start gap-4">
                    <IconTile icon={Clock} tone="light" />
                    <div className="flex-1">
                      <div className="mb-2 text-xs tracking-wide text-blue-300 uppercase">{fr ? "Heures d'ouverture" : "Business Hours"}</div>
                      <div className="space-y-1.5 text-sm text-blue-100">
                        {hours.map(([day, time]) => (
                          <div key={day} className="flex justify-between gap-6">
                            <span>{day}</span>
                            <span className="font-medium text-white tabular-nums">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollFadeUp>

            {/* Right: contact form */}
            <ScrollFadeUp delay={0.1} className="lg:col-span-3">
              <Card className="gap-0 rounded-3xl p-6 shadow-[var(--shadow-card)] sm:p-8">
                <h2 className="mb-2 text-xl font-extrabold text-brand-navy">
                  {fr ? "Envoyez-nous un message" : "Send Us a Message"}
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  {fr ? "Nous vous répondrons dans un délai d'un jour ouvrable." : "We'll get back to you within one business day."}
                </p>
                <QuoteForm />
              </Card>
            </ScrollFadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
