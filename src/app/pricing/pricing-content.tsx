"use client";

import Link from "next/link";
import { useEffect } from "react";
import PricingCard from "@/components/PricingCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PricingContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Tarifs d'expédition — Prix forfaitaires | ShipDirect"
      : "Shipping Rates | ShipDirect Canada to Senegal";
  }, [fr]);

  const pricingTiers = fr
    ? [
        { icon: "🛍️", name: "Sac Costco", descriptor: "Taille standard", price: "$75 CAD", bullets: ["Sac taille Costco standard", "Idéal pour vêtements, articles ménagers", "Dépôt à l'établissement d'Ottawa"] },
        { icon: "📦", name: "Petite Boîte", descriptor: "Jusqu'à 23 kg", price: "$100 CAD", bullets: ["Jusqu'à 23 kg par boîte", "Convient à la plupart des articles ménagers", "Dépôt à l'établissement d'Ottawa"] },
        { icon: "📫", name: "Grande Boîte", descriptor: "Jusqu'à 32 kg", price: "$150 CAD", popular: true, bullets: ["Jusqu'à 32 kg par boîte", "L'option la plus populaire pour les familles", "Dépôt à l'établissement d'Ottawa"] },
        { icon: "🛢️", name: "Baril / Fût", descriptor: "50–60 kg", price: "$250 CAD", bullets: ["Fût/baril standard de 50–60 kg", "Idéal pour les marchandises en vrac", "Dépôt à l'établissement d'Ottawa"] },
        { icon: "🛋️", name: "Sofa / Meuble", descriptor: "Pièce standard", price: "$500 CAD", bullets: ["Pièce de mobilier standard unique", "Doit être correctement emballé/enveloppé", "Contactez-nous pour les articles surdimensionnés"] },
        { icon: "🚗", name: "Berline", descriptor: "Voiture standard", price: "$1 600 CAD", vehicle: true, bullets: ["Véhicule berline standard", "Contactez-nous pour les détails de préparation", "Les réglementations d'importation sont la responsabilité du client"] },
        { icon: "🚙", name: "VUS / Camion", descriptor: "Grand véhicule", price: "$1 700 CAD", vehicle: true, bullets: ["VUS, camion ou fourgonnette", "Contactez-nous pour les détails de préparation", "Les réglementations d'importation sont la responsabilité du client"] },
      ]
    : [
        { icon: "🛍️", name: "Costco Bag", descriptor: "Standard size", price: "$75 CAD", bullets: ["Standard Costco-sized bag", "Ideal for clothing, household goods", "Drop-off at Ottawa facility"] },
        { icon: "📦", name: "Small Box", descriptor: "Up to 23kg", price: "$100 CAD", bullets: ["Up to 23kg per box", "Suitable for most household items", "Drop-off at Ottawa facility"] },
        { icon: "📫", name: "Big Box", descriptor: "Up to 32kg", price: "$150 CAD", popular: true, bullets: ["Up to 32kg per box", "Most popular option for families", "Drop-off at Ottawa facility"] },
        { icon: "🛢️", name: "Baril / Drum", descriptor: "50–60kg", price: "$250 CAD", bullets: ["Standard 50–60kg drum/barrel", "Ideal for bulk goods", "Drop-off at Ottawa facility"] },
        { icon: "🛋️", name: "Sofa / Furniture", descriptor: "Standard piece", price: "$500 CAD", bullets: ["Standard single furniture piece", "Must be properly packed/wrapped", "Contact us for oversized items"] },
        { icon: "🚗", name: "Sedan", descriptor: "Standard car", price: "$1,600 CAD", vehicle: true, bullets: ["Standard sedan vehicle", "Contact us for preparation details", "Import regulations are client's responsibility"] },
        { icon: "🚙", name: "SUV / Truck", descriptor: "Large vehicle", price: "$1,700 CAD", vehicle: true, bullets: ["SUV, truck, or van", "Contact us for preparation details", "Import regulations are client's responsibility"] },
      ];

  const canadaNotes = fr
    ? ["Standard : Dépôt à notre emplacement d'Ottawa (adresse fournie à la confirmation)", "Ramassage disponible au Canada pour un supplément (varie selon la distance)", "Contactez-nous pour obtenir un devis de ramassage avant l'expédition"]
    : ["Standard: Drop-off at our Ottawa location (address provided upon confirmation)", "Pickup available in Canada for an additional charge (varies by distance)", "Contact us to get a pickup quote before shipping"];

  const senegalNotes = fr
    ? ["Tous les envois arrivent à Keur Massar, Sénégal", "Collecte gratuite à l'établissement de Keur Massar pour les destinataires", "Livraison locale au Sénégal disponible pour un supplément", "Les droits de douane et les frais portuaires sont à la charge du destinataire"]
    : ["All shipments arrive at Keur Massar, Senegal", "Free pickup at Keur Massar facility for recipients", "Local delivery within Senegal available for an additional charge", "Customs duties and port fees are the recipient's responsibility"];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            {fr ? "💰 Tarifs transparents" : "💰 Transparent Rates"}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {fr ? "Tarification simple et forfaitaire" : "Simple, Flat-Rate Pricing"}
          </h1>
          <p className="text-lg text-blue-200 mb-8">
            {fr ? "Tous les prix sont pour l'expédition aller simple du Canada vers le Sénégal, en dollars canadiens. Aucuns frais cachés." : "All prices are one-way shipping from Canada to Senegal, in Canadian dollars. No hidden fees."}
          </p>
          <Link href="/quote" className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors">
            {fr ? "Obtenir un devis pour votre envoi" : "Get a Quote for Your Shipment"}
          </Link>
        </div>
      </section>

      {/* ── PRICING GRID ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {pricingTiers.slice(0, 5).map((tier, i) => (
              <PricingCard
                key={i}
                {...tier}
                popularLabel={fr ? "Le plus populaire" : "Most Popular"}
                oneWayLabel={fr ? "Aller simple" : "One Way"}
              />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pricingTiers.slice(5).map((tier, i) => (
              <PricingCard
                key={i}
                {...tier}
                oneWayLabel={fr ? "Aller simple" : "One Way"}
              />
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-5 text-sm text-[#6B7280] text-center">
            {fr ? (
              <>Tous les prix sont aller simple du Canada au Sénégal, en CAD.{" "}<strong className="text-[#1A1410]">Les droits de douane, les frais portuaires et les frais d&apos;importation au Sénégal sont à la charge du destinataire.</strong>{" "}Les prix sont susceptibles de changer. Contactez-nous pour confirmer les tarifs actuels avant de réserver.</>
            ) : (
              <>All prices are one-way from Canada to Senegal, in CAD.{" "}<strong className="text-[#1A1410]">Customs duties, port fees, and import charges in Senegal are the recipient&apos;s responsibility.</strong>{" "}Prices subject to change. Contact us to confirm current rates before booking.</>
            )}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0D1F5C] mb-8 text-center">
            {fr ? "Notes importantes sur l'expédition" : "Important Shipping Notes"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#EEF1F8] rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                {fr ? "🇨🇦 Dépôt et ramassage au Canada" : "🇨🇦 Drop-off & Pickup in Canada"}
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                {canadaNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0D1F5C] shrink-0">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#EEF1F8] rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                {fr ? "🌍 Collecte et livraison au Sénégal" : "🌍 Collection & Delivery in Senegal"}
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                {senegalNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0D1F5C] shrink-0">•</span>
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
            {fr ? "Vous n'êtes pas sûr de ce qui s'applique à votre envoi ?" : "Not Sure What Applies to Your Shipment?"}
          </h2>
          <p className="text-blue-200 mb-8">
            {fr ? "Contactez-nous directement et nous vous aiderons à choisir la bonne option." : "Contact us directly and we'll help you choose the right option."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors">
              {fr ? "Obtenir un devis →" : "Get a Quote →"}
            </Link>
            <a href="tel:6137002747" className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              {fr ? "Appeler le 613-700-2747" : "Call 613-700-2747"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
