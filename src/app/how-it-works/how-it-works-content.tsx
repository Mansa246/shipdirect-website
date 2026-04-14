"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
        { n: "01", title: "Demandez un devis ou contactez ShipDirect", desc: "Commencez par remplir notre formulaire de devis en ligne ou contactez-nous par téléphone ou e-mail. Dites-nous ce que vous souhaitez expédier — type de marchandises, taille et poids — et nous vous confirmerons les tarifs, la disponibilité et les prochaines étapes dans un délai d'un jour ouvrable.", note: "📋 Utilisez le formulaire en ligne, envoyez un email à info@shipdirect.ca ou appelez le 613-700-2747" },
        { n: "02", title: "Déposez vos marchandises (ou demandez un ramassage)", desc: "Une fois confirmé, l'adresse de dépôt vous sera communiquée. Si vous avez besoin d'un ramassage, nous pouvons l'organiser moyennant des frais supplémentaires selon votre distance. Assurez-vous que les marchandises sont bien emballées avant le dépôt.", note: "📍 Adresse de dépôt confirmée après réservation · Ramassage disponible pour frais supplémentaires" },
        { n: "03", title: "Nous gérons tout", desc: "Notre équipe s'occupe de toute la logistique — consolidation, vérification des emballages, documentation d'exportation et coordination maritime. Votre envoi est expédié au Sénégal sur le prochain navire disponible.", note: "🚢 ShipDirect gère toute la documentation d'exportation et la logistique d'expédition" },
        { n: "04", title: "L'envoi arrive au Sénégal", desc: "Vos marchandises arrivent au port et sont transférées à notre entrepôt de Keur Massar. Vous serez informé lorsque votre envoi sera prêt à être retiré. Les frais portuaires, les droits de douane et les frais de dédouanement au Sénégal sont à la charge du destinataire.", note: "🌍 Arrivée : Keur Massar, Sénégal · Frais portuaires et douanes à la charge du destinataire" },
        { n: "05", title: "Récupérez vos marchandises ou demandez une livraison locale", desc: "Le destinataire récupère ses marchandises à notre entrepôt de Keur Massar sans frais supplémentaires. Besoin d'une livraison au Sénégal ? Nous pouvons organiser une livraison locale moyennant des frais — prévenez-nous à l'avance.", note: "🏠 Retrait gratuit à Keur Massar · Livraison locale au Sénégal disponible pour frais supplémentaires" },
      ]
    : [
        { n: "01", title: "Request a Quote or Contact ShipDirect", desc: "Start by filling out our online quote form or reaching out by phone or email. Tell us what you need to ship — type of goods, size, and weight — and we'll confirm pricing, availability, and next steps within one business day.", note: "📋 Use the online quote form, email info@shipdirect.ca, or call 613-700-2747" },
        { n: "02", title: "Drop Off Your Goods (or Request Pickup)", desc: "Once confirmed, your drop-off location will be provided to you. If you need pickup, we can arrange it for an additional charge depending on your distance. Ensure goods are properly packed before drop-off.", note: "📍 Drop-off location confirmed after booking · Pickup available for extra charge" },
        { n: "03", title: "We Handle Everything", desc: "Our team handles all logistics — consolidation, packaging verification, export documentation, and vessel coordination. Your shipment is dispatched to Senegal on the next available vessel.", note: "🚢 ShipDirect manages all export documentation and shipping logistics" },
        { n: "04", title: "Shipment Arrives in Senegal", desc: "Your goods arrive at the port and are transferred to our Keur Massar facility. You'll be notified when your shipment is ready for collection. Port fees, customs duties, and clearance charges in Senegal are the recipient's responsibility.", note: "🌍 Arrival: Keur Massar, Senegal · Port fees & customs are recipient's responsibility" },
        { n: "05", title: "Collect or Request Local Delivery", desc: "The recipient collects their goods at our Keur Massar facility at no additional charge. Need delivery within Senegal? We can arrange local delivery for an extra fee — just let us know in advance.", note: "🏠 Free pickup at Keur Massar · Local Senegal delivery available for extra charge" },
      ];

  const canadaNotes = fr
    ? ["Emballez correctement les marchandises avant le dépôt", "Les frais de ramassage varient selon la distance — demandez un devis à l'avance", "Certains articles restreints peuvent ne pas être éligibles à l'expédition"]
    : ["Pack goods properly before drop-off", "Pickup fee varies by distance — request a quote in advance", "Some restricted items may not be eligible for shipping"];

  const senegalNotes = fr
    ? ["Les droits de douane et frais portuaires sont à la charge du destinataire", "Retrait gratuit à Keur Massar", "Livraison locale au Sénégal disponible pour frais supplémentaires"]
    : ["Customs duties and port fees are the recipient's responsibility", "Free collection at Keur Massar", "Local delivery within Senegal available for an extra fee"];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            {fr ? "📋 Étape par étape" : "📋 Step-by-Step"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {fr ? "Comment fonctionne l'expédition" : "How Shipping Works"}
          </h1>
          <p className="text-lg text-blue-200">
            {fr
              ? "De votre premier message jusqu'à la livraison au Sénégal — voici exactement ce à quoi vous attendre lorsque vous expédiez avec ShipDirect."
              : "From your first message to delivery in Senegal — here's exactly what to expect when you ship with ShipDirect."}
          </p>
        </div>
      </section>

      {/* ── 5-STEP PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-12">
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#EEF1F8] hidden md:block" />
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0D1F5C] text-white flex items-center justify-center text-base font-extrabold z-10">
                  {step.n}
                </div>
                <div className="flex-1 pb-2">
                  <h2 className="text-xl font-extrabold text-[#0D1F5C] mb-3">
                    {fr ? `Étape ${step.n} : ${step.title}` : `Step ${step.n}: ${step.title}`}
                  </h2>
                  <p className="text-[#1A1410] leading-relaxed mb-4">{step.desc}</p>
                  <div className="inline-flex items-start gap-2 bg-[#EEF1F8] rounded-xl px-4 py-2.5 text-sm text-[#0D1F5C] font-medium">
                    {step.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0D1F5C] mb-8 text-center">
            {fr ? "Notes importantes" : "Important Notes"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                {fr ? "🇨🇦 Au Canada" : "🇨🇦 In Canada"}
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                {canadaNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D42B2B] shrink-0">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                {fr ? "🌍 Au Sénégal" : "🌍 In Senegal"}
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                {senegalNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D42B2B] shrink-0">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#0D1F5C] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {fr ? "Prêt à commencer ?" : "Ready to Get Started?"}
          </h2>
          <p className="text-blue-200 mb-8">
            {fr ? "Remplissez notre formulaire de devis et nous nous occupons du reste." : "Fill out our quote form and we'll take it from there."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors">
              {fr ? "Obtenir un devis gratuit →" : "Get a Free Quote →"}
            </Link>
            <Link href="/faq" className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              {fr ? "Lire la FAQ" : "Read FAQs"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
