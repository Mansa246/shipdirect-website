"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, BadgeDollarSign, Car, CarFront, Cylinder, Globe2, MapPin, Package, PackageOpen, Phone, ShoppingBag, Sofa } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import { NoteCard, SectionHeader } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        { icon: ShoppingBag, name: "Grand Sac (Sac Costco)", descriptor: "Taille standard", price: "$75 CAD + Taxes", bullets: ["Grand sac (taille Costco) standard", "Idéal pour vêtements, articles ménagers", "Dépôt à l'établissement d'Ottawa"] },
        { icon: Package, name: "Petite Boîte", descriptor: "Jusqu'à 23 kg", price: "$100 CAD + Taxes", bullets: ["Jusqu'à 23 kg par boîte", "Convient à la plupart des articles ménagers", "Dépôt à l'établissement d'Ottawa"] },
        { icon: PackageOpen, name: "Grande Boîte", descriptor: "Jusqu'à 32 kg", price: "$150 CAD + Taxes", popular: true, bullets: ["Jusqu'à 32 kg par boîte", "L'option la plus populaire pour les familles", "Dépôt à l'établissement d'Ottawa"] },
        { icon: Cylinder, name: "Baril / Fût", descriptor: "50–60 kg", price: "$250 CAD + Taxes", bullets: ["Fût/baril standard de 50–60 kg", "Idéal pour les marchandises en vrac", "Dépôt à l'établissement d'Ottawa"] },
        { icon: Sofa, name: "Sofa / Meuble", descriptor: "Pièce standard", price: "$500 CAD + Taxes", bullets: ["Pièce de mobilier standard unique", "Doit être correctement emballé/enveloppé", "Contactez-nous pour les articles surdimensionnés"] },
        { icon: Car, name: "Berline", descriptor: "Voiture standard", price: "$1 600 CAD + Taxes", vehicle: true, bullets: ["Véhicule berline standard", "Frais portuaires à régler avec nos frais d'expédition", "Droits de douane : payez directement ou via ShipDirect"] },
        { icon: CarFront, name: "VUS / Camion", descriptor: "Grand véhicule", price: "$1 700 CAD + Taxes", vehicle: true, bullets: ["VUS, camion ou fourgonnette", "Frais portuaires à régler avec nos frais d'expédition", "Droits de douane : payez directement ou via ShipDirect"] },
      ]
    : [
        { icon: ShoppingBag, name: "Large Bag (Costco Bag)", descriptor: "Standard size", price: "$75 CAD + Tax", bullets: ["Standard large (Costco-sized) bag", "Ideal for clothing, household goods", "Drop-off at Ottawa facility"] },
        { icon: Package, name: "Small Box", descriptor: "Up to 23kg", price: "$100 CAD + Tax", bullets: ["Up to 23kg per box", "Suitable for most household items", "Drop-off at Ottawa facility"] },
        { icon: PackageOpen, name: "Big Box", descriptor: "Up to 32kg", price: "$150 CAD + Tax", popular: true, bullets: ["Up to 32kg per box", "Most popular option for families", "Drop-off at Ottawa facility"] },
        { icon: Cylinder, name: "Baril / Drum", descriptor: "50–60kg", price: "$250 CAD + Tax", bullets: ["Standard 50–60kg drum/barrel", "Ideal for bulk goods", "Drop-off at Ottawa facility"] },
        { icon: Sofa, name: "Sofa / Furniture", descriptor: "Standard piece", price: "$500 CAD + Tax", bullets: ["Standard single furniture piece", "Must be properly packed/wrapped", "Contact us for oversized items"] },
        { icon: Car, name: "Sedan", descriptor: "Standard car", price: "$1,600 CAD + Tax", vehicle: true, bullets: ["Standard sedan vehicle", "Port fees due together with shipping fee", "Customs duties: pay directly or remit to ShipDirect and we pay on your behalf"] },
        { icon: CarFront, name: "SUV / Truck", descriptor: "Large vehicle", price: "$1,700 CAD + Tax", vehicle: true, bullets: ["SUV, truck, or van", "Port fees due together with shipping fee", "Customs duties: pay directly or remit to ShipDirect and we pay on your behalf"] },
      ];

  const canadaNotes = fr
    ? ["Standard : Dépôt à notre emplacement d'Ottawa (adresse fournie à la confirmation)", "Ramassage disponible au Canada pour un supplément (varie selon la distance)", "Contactez-nous pour obtenir un devis de ramassage avant l'expédition"]
    : ["Standard: Drop-off at our Ottawa location (address provided upon confirmation)", "Pickup available in Canada for an additional charge (varies by distance)", "Contact us to get a pickup quote before shipping"];

  const senegalNotes = fr
    ? ["Tous les envois arrivent à Keur Massar, Sénégal", "Collecte gratuite à l'établissement de Keur Massar pour les destinataires", "Livraison locale au Sénégal disponible pour un supplément", "Colis/meubles B2C : droits de douane et frais d'importation inclus", "Véhicules : frais portuaires inclus avec nos frais ; droits de douane payables directement ou via ShipDirect"]
    : ["All shipments arrive at Keur Massar, Senegal", "Free pickup at Keur Massar facility for recipients", "Local delivery within Senegal available for an additional charge", "B2C parcels/furniture: customs duties and import charges included", "Vehicles: port fees due with shipping fee; customs duties payable directly or via ShipDirect on your behalf"];

  return (
    <main>
      <PageHero
        eyebrow={fr ? "Tarifs transparents" : "Transparent Rates"}
        eyebrowIcon={BadgeDollarSign}
        title={fr ? "Tarification simple et forfaitaire" : "Simple, Flat-Rate Pricing"}
        subtitle={fr ? "Tous les prix sont pour l'expédition aller simple du Canada vers le Sénégal, en dollars canadiens, plus taxes. Pour les colis et meubles B2C, droits de douane et frais d'importation inclus. Pour les véhicules, les frais portuaires sont dus avec nos frais ; les droits de douane peuvent être payés directement par le client ou via ShipDirect en son nom." : "All prices are one-way shipping from Canada to Senegal, in Canadian dollars, plus tax. For B2C parcels and furniture, customs duties and import charges are included. For vehicles, port fees are due with our fee; customs duties can be paid directly by the client or remitted to ShipDirect and we pay on their behalf."}
        image={{ src: "/images/pricing-sizes-v2.jpg", alt: fr ? "Un grand sac, une petite boîte, une grande boîte et un baril alignés par taille" : "A large bag, small box, big box and barrel lined up by size" }}
      >
        <Button asChild variant="brand" size="xl" className="shimmer-btn">
          <Link href="/quote">
            {fr ? "Obtenir un devis pour votre envoi" : "Get a Quote for Your Shipment"}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </PageHero>

      {/* ── PRICING GRID ── */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.slice(0, 5).map((tier, i) => (
              <ScrollFadeUp key={i} delay={(i % 3) * 0.06}>
                <PricingCard
                  {...tier}
                  popularLabel={fr ? "Le plus populaire" : "Most Popular"}
                  oneWayLabel={fr ? "Aller simple" : "One Way"}
                />
              </ScrollFadeUp>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pricingTiers.slice(5).map((tier, i) => (
              <ScrollFadeUp key={i} delay={i * 0.06}>
                <PricingCard {...tier} oneWayLabel={fr ? "Aller simple" : "One Way"} />
              </ScrollFadeUp>
            ))}
          </div>

          <ScrollFadeUp delay={0.1}>
            <Card className="mt-8 rounded-3xl p-6 text-center text-sm text-muted-foreground shadow-[var(--shadow-card)]">
              <p>
                {fr ? (
                  <>Tous les prix sont aller simple du Canada au Sénégal, en CAD, plus taxes.{" "}<strong className="text-body">Colis &amp; meubles B2C : droits de douane et frais d&apos;importation inclus. Véhicules : frais portuaires à régler avec nos frais ; droits de douane payables directement ou via ShipDirect en votre nom.</strong>{" "}Les prix sont susceptibles de changer. Contactez-nous pour confirmer les tarifs actuels avant de réserver.</>
                ) : (
                  <>All prices are one-way from Canada to Senegal, in CAD, plus tax.{" "}<strong className="text-body">B2C parcels &amp; furniture: customs duties and import charges included. Vehicles: port fees due with our fee; customs duties payable directly by client or remitted to ShipDirect — we pay on your behalf.</strong>{" "}Prices subject to change. Contact us to confirm current rates before booking.</>
                )}
              </p>
            </Card>
          </ScrollFadeUp>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={fr ? "Notes importantes sur l'expédition" : "Important Shipping Notes"} className="mb-10" />
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollFadeUp>
              <NoteCard icon={MapPin} title={fr ? "Dépôt et ramassage au Canada" : "Drop-off & Pickup in Canada"} items={canadaNotes} />
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.08}>
              <NoteCard icon={Globe2} title={fr ? "Collecte et livraison au Sénégal" : "Collection & Delivery in Senegal"} items={senegalNotes} />
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      <CtaBand
        title={fr ? "Vous n'êtes pas sûr de ce qui s'applique à votre envoi ?" : "Not Sure What Applies to Your Shipment?"}
        subtitle={fr ? "Contactez-nous directement et nous vous aiderons à choisir la bonne option." : "Contact us directly and we'll help you choose the right option."}
      >
        <Button asChild variant="brand" size="xl" className="shimmer-btn">
          <Link href="/quote">
            {fr ? "Obtenir un devis" : "Get a Quote"}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild variant="outline-light" size="xl">
          <a href="tel:6137002747">
            <Phone data-icon="inline-start" />
            {fr ? "Appeler le 613-700-2747" : "Call 613-700-2747"}
          </a>
        </Button>
      </CtaBand>
    </main>
  );
}
