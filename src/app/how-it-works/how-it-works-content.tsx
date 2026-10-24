"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, ClipboardList, Globe2, Home, ListChecks, MapPin, Ship } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import SequencePanel from "@/components/illustrations/SequencePanel";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import { NoteCard, SectionHeader } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HowItWorksContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Comment ça marche — Canada vers Sénégal | ShipDirect"
      : "How It Works | ShipDirect Canada to Senegal";
  }, [fr]);

  const steps = fr
    ? [
        { n: "01", title: "Demandez un devis ou contactez ShipDirect", desc: "Commencez par remplir notre formulaire de devis en ligne ou contactez-nous par téléphone ou e-mail. Dites-nous ce que vous souhaitez expédier — type de marchandises, taille et poids — et nous vous confirmerons les tarifs, la disponibilité et les prochaines étapes dans un délai d'un jour ouvrable.", noteIcon: ClipboardList, note: "Utilisez le formulaire en ligne, envoyez un email à info@shipdirect.ca ou appelez le 613-700-2747" },
        { n: "02", title: "Déposez vos marchandises (ou demandez un ramassage)", desc: "Une fois confirmé, l'adresse de dépôt vous sera communiquée. Si vous avez besoin d'un ramassage, nous pouvons l'organiser moyennant des frais supplémentaires selon votre distance. Assurez-vous que les marchandises sont bien emballées avant le dépôt.", noteIcon: MapPin, note: "Adresse de dépôt confirmée après réservation · Ramassage disponible pour frais supplémentaires" },
        { n: "03", title: "Nous gérons tout", desc: "Notre équipe s'occupe de toute la logistique — consolidation, vérification des emballages, documentation d'exportation et coordination maritime. Votre envoi est expédié au Sénégal sur le prochain navire disponible.", noteIcon: Ship, note: "ShipDirect gère toute la documentation d'exportation et la logistique d'expédition" },
        { n: "04", title: "L'envoi arrive au Sénégal", desc: "Vos marchandises arrivent au port et sont transférées à notre entrepôt de Keur Massar. Vous serez informé lorsque votre envoi sera prêt à être retiré. Les frais portuaires, les droits de douane et les frais de dédouanement au Sénégal sont à la charge du destinataire.", noteIcon: Globe2, note: "Arrivée : Keur Massar, Sénégal · Frais portuaires et douanes à la charge du destinataire" },
        { n: "05", title: "Récupérez vos marchandises ou demandez une livraison locale", desc: "Le destinataire récupère ses marchandises à notre entrepôt de Keur Massar sans frais supplémentaires. Besoin d'une livraison au Sénégal ? Nous pouvons organiser une livraison locale moyennant des frais — prévenez-nous à l'avance.", noteIcon: Home, note: "Retrait gratuit à Keur Massar · Livraison locale au Sénégal disponible pour frais supplémentaires" },
      ]
    : [
        { n: "01", title: "Request a Quote or Contact ShipDirect", desc: "Start by filling out our online quote form or reaching out by phone or email. Tell us what you need to ship — type of goods, size, and weight — and we'll confirm pricing, availability, and next steps within one business day.", noteIcon: ClipboardList, note: "Use the online quote form, email info@shipdirect.ca, or call 613-700-2747" },
        { n: "02", title: "Drop Off Your Goods (or Request Pickup)", desc: "Once confirmed, your drop-off location will be provided to you. If you need pickup, we can arrange it for an additional charge depending on your distance. Ensure goods are properly packed before drop-off.", noteIcon: MapPin, note: "Drop-off location confirmed after booking · Pickup available for extra charge" },
        { n: "03", title: "We Handle Everything", desc: "Our team handles all logistics — consolidation, packaging verification, export documentation, and vessel coordination. Your shipment is dispatched to Senegal on the next available vessel.", noteIcon: Ship, note: "ShipDirect manages all export documentation and shipping logistics" },
        { n: "04", title: "Shipment Arrives in Senegal", desc: "Your goods arrive at the port and are transferred to our Keur Massar facility. You'll be notified when your shipment is ready for collection. Port fees, customs duties, and clearance charges in Senegal are the recipient's responsibility.", noteIcon: Globe2, note: "Arrival: Keur Massar, Senegal · Port fees & customs are recipient's responsibility" },
        { n: "05", title: "Collect or Request Local Delivery", desc: "The recipient collects their goods at our Keur Massar facility at no additional charge. Need delivery within Senegal? We can arrange local delivery for an extra fee — just let us know in advance.", noteIcon: Home, note: "Free pickup at Keur Massar · Local Senegal delivery available for extra charge" },
      ];

  const panels = fr
    ? [
        { src: "/images/step-pack-branded.jpg", alt: "Emballez vos marchandises à la maison" },
        { src: "/images/step-dropoff-branded.jpg", alt: "Déposez-les chez ShipDirect à Ottawa" },
        { src: "/images/step-ship.jpg", alt: "Votre envoi part par bateau" },
        { src: "/images/step-arrive-branded.jpg", alt: "Votre famille reçoit le colis au Sénégal" },
      ]
    : [
        { src: "/images/step-pack-branded.jpg", alt: "Pack your goods at home" },
        { src: "/images/step-dropoff-branded.jpg", alt: "Drop off with ShipDirect in Ottawa" },
        { src: "/images/step-ship.jpg", alt: "Your shipment leaves by sea" },
        { src: "/images/step-arrive-branded.jpg", alt: "Family in Senegal receives the package" },
      ];

  const canadaNotes = fr
    ? ["Emballez correctement les marchandises avant le dépôt", "Les frais de ramassage varient selon la distance — demandez un devis à l'avance", "Certains articles restreints peuvent ne pas être éligibles à l'expédition"]
    : ["Pack goods properly before drop-off", "Pickup fee varies by distance — request a quote in advance", "Some restricted items may not be eligible for shipping"];

  const senegalNotes = fr
    ? ["Les droits de douane et frais portuaires sont à la charge du destinataire", "Retrait gratuit à Keur Massar", "Livraison locale au Sénégal disponible pour frais supplémentaires"]
    : ["Customs duties and port fees are the recipient's responsibility", "Free collection at Keur Massar", "Local delivery within Senegal available for an extra fee"];

  return (
    <main>
      <PageHero
        align="center"
        eyebrow={fr ? "Étape par étape" : "Step-by-Step"}
        eyebrowIcon={ListChecks}
        title={fr ? "Comment fonctionne l'expédition" : "How Shipping Works"}
        subtitle={fr
          ? "De votre premier message jusqu'à la livraison au Sénégal — voici exactement ce à quoi vous attendre lorsque vous expédiez avec ShipDirect."
          : "From your first message to delivery in Senegal — here's exactly what to expect when you ship with ShipDirect."}
      />

      {/* ── 4-PANEL PHOTO SEQUENCE ── */}
      <section className="bg-white pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {panels.map((panel, i) => (
              <div key={i}>
                <SequencePanel index={i} src={panel.src} alt={panel.alt} />
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">{i + 1}</span>
                  <span className="text-sm font-semibold text-brand-navy">{panel.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5-STEP PROCESS ── */}
      <section className="bg-white pt-10 pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-8">
            <div aria-hidden className="absolute top-8 bottom-8 left-7 hidden w-px bg-gradient-to-b from-brand-navy/30 via-brand-navy/15 to-transparent md:block" />
            {steps.map((step, i) => (
              <ScrollFadeUp key={i} delay={0.05}>
                <li className="relative flex gap-6 md:gap-8">
                  <div className="z-10 hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-lg font-extrabold text-white shadow-lg shadow-brand-navy/20 md:flex">
                    {step.n}
                  </div>
                  <Card className="flex-1 gap-0 rounded-3xl p-6 shadow-[var(--shadow-card)] sm:p-8">
                    <div className="mb-2 text-xs font-bold tracking-[0.18em] text-brand-red uppercase md:hidden">{fr ? `Étape ${step.n}` : `Step ${step.n}`}</div>
                    <h2 className="mb-3 text-xl font-extrabold tracking-tight text-brand-navy">
                      {fr ? `Étape ${step.n} : ${step.title}` : `Step ${step.n}: ${step.title}`}
                    </h2>
                    <p className="mb-5 leading-relaxed text-body">{step.desc}</p>
                    <div className="inline-flex items-start gap-2.5 rounded-xl bg-navy-tint px-4 py-3 text-sm font-medium text-brand-navy">
                      <step.noteIcon className="mt-0.5 size-4 shrink-0" />
                      {step.note}
                    </div>
                  </Card>
                </li>
              </ScrollFadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section className="bg-off-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={fr ? "Notes importantes" : "Important Notes"} className="mb-10" />
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollFadeUp>
              <NoteCard icon={MapPin} title={fr ? "Au Canada" : "In Canada"} items={canadaNotes} />
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.08}>
              <NoteCard icon={Globe2} title={fr ? "Au Sénégal" : "In Senegal"} items={senegalNotes} />
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      <CtaBand
        title={fr ? "Prêt à commencer ?" : "Ready to Get Started?"}
        subtitle={fr ? "Remplissez notre formulaire de devis et nous nous occupons du reste." : "Fill out our quote form and we'll take it from there."}
      >
        <Button asChild variant="brand" size="xl" className="shimmer-btn">
          <Link href="/quote">
            {fr ? "Obtenir un devis gratuit" : "Get a Free Quote"}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild variant="outline-light" size="xl">
          <Link href="/faq">{fr ? "Lire la FAQ" : "Read FAQs"}</Link>
        </Button>
      </CtaBand>
    </main>
  );
}
