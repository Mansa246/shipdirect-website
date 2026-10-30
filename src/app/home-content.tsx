"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  Anchor,
  ArrowRight,
  BadgeDollarSign,
  Car,
  Cylinder,
  Handshake,
  Mail,
  MapPin,
  MessageSquareText,
  Package,
  PackageCheck,
  PackageOpen,
  Phone,
  Ship,
  ShoppingBag,
  Target,
  Truck,
  Users,
} from "lucide-react";
import TrustBar from "@/components/TrustBar";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/site/CtaBand";
import { CheckList, FeatureCard, SectionHeader } from "@/components/site/blocks";

export default function HomeContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Expédiez n'importe quoi. Partout au Sénégal. | ShipDirect Canada"
      : "ShipDirect | Canada to Senegal Shipping & Export";
  }, [fr]);

  const howItWorksSteps = fr
    ? [
        { n: "01", icon: MessageSquareText, title: "Demander un devis", desc: "Remplissez le formulaire ou appelez-nous. Nous confirmons les détails et les tarifs de votre envoi." },
        { n: "02", icon: Truck, title: "Déposer ou planifier un ramassage", desc: "Apportez vos marchandises à Ottawa, ou nous organisons le ramassage pour un supplément." },
        { n: "03", icon: Ship, title: "Nous gérons l'expédition", desc: "Préparation, documentation et expédition vers le Sénégal." },
        { n: "04", icon: Anchor, title: "Arrive au Sénégal", desc: "Les marchandises arrivent à Keur Massar, prêtes pour la collecte." },
        { n: "05", icon: PackageCheck, title: "Collecter ou se faire livrer", desc: "Collecte à Keur Massar, ou demander une livraison locale au Sénégal pour supplément." },
      ]
    : [
        { n: "01", icon: MessageSquareText, title: "Request a Quote", desc: "Fill out the form or call us. We confirm your shipment details and pricing." },
        { n: "02", icon: Truck, title: "Drop Off or Schedule Pickup", desc: "Bring goods to Ottawa, or we arrange pickup for an extra fee." },
        { n: "03", icon: Ship, title: "We Handle Shipping", desc: "Preparation, documentation, and dispatch to Senegal." },
        { n: "04", icon: Anchor, title: "Arrives in Senegal", desc: "Goods arrive at Keur Massar, ready for collection." },
        { n: "05", icon: PackageCheck, title: "Collect or Get Delivered", desc: "Pickup in Keur Massar, or request local Senegal delivery for extra charge." },
      ];

  const pricingPreview = fr
    ? [
        { icon: ShoppingBag, name: "Grand Sac (Sac Costco)", price: "$75 CAD + Taxes" },
        { icon: Package, name: "Petite Boîte (23kg)", price: "$100 CAD + Taxes" },
        { icon: PackageOpen, name: "Grande Boîte (32kg)", price: "$150 CAD + Taxes", popular: true },
        { icon: Cylinder, name: "Baril / Fût (50–60kg)", price: "$250 CAD + Taxes" },
      ]
    : [
        { icon: ShoppingBag, name: "Large Bag (Costco Bag)", price: "$75 CAD + Tax" },
        { icon: Package, name: "Small Box (23kg)", price: "$100 CAD + Tax" },
        { icon: PackageOpen, name: "Big Box (32kg)", price: "$150 CAD + Tax", popular: true },
        { icon: Cylinder, name: "Baril / Drum (50–60kg)", price: "$250 CAD + Tax" },
      ];

  const whyCards = fr
    ? [
        { icon: Target, title: "Expertise spécialisée", desc: "Nous nous concentrons exclusivement sur le Canada vers le Sénégal. Cette spécialisation signifie de meilleurs processus, moins de délais et moins de surprises." },
        { icon: BadgeDollarSign, title: "Tarification fixe transparente", desc: "Sachez exactement ce que vous paierez avant d'expédier. Tarifs clairs en CAD. Aucuns frais cachés." },
        { icon: Users, title: "Centré sur la famille et la communauté", desc: "Nous servons la diaspora sénégalaise au Canada. Nous savons que vous n'envoyez pas seulement des marchandises — vous envoyez un soutien à la maison." },
        { icon: Car, title: "Tout s'expédie — y compris les véhicules", desc: "D'un grand sac (Sac Costco) à un VUS complet, nous avons la capacité et le réseau logistique pour gérer toutes les tailles." },
        { icon: MapPin, title: "Emplacement pratique à Ottawa", desc: "Déposez à notre établissement d'Ottawa ou organisez un ramassage. Collectez à Keur Massar ou demandez une livraison locale au Sénégal." },
        { icon: Handshake, title: "Capable en B2B et gros", desc: "Nous approvisionnons et exportons des volumes commerciaux de produits canadiens pour les acheteurs en gros au Sénégal. Prêt pour le commerce, fiable, responsable." },
      ]
    : [
        { icon: Target, title: "Specialized Route Expertise", desc: "We focus exclusively on Canada-to-Senegal. That specialization means better processes, fewer delays, and fewer surprises." },
        { icon: BadgeDollarSign, title: "Transparent Flat-Rate Pricing", desc: "Know exactly what you'll pay before you ship. Clear rates in CAD. No hidden fees." },
        { icon: Users, title: "Family & Community-Focused", desc: "We serve the Senegalese diaspora in Canada. We know you're not just sending goods — you're sending support home." },
        { icon: Car, title: "Everything Ships — Including Vehicles", desc: "From a large bag (Costco bag) to a full SUV, we have the capacity and logistics network to handle every size." },
        { icon: MapPin, title: "Convenient Ottawa Location", desc: "Drop off at our Ottawa facility or arrange pickup. Collect in Keur Massar or request Senegal local delivery." },
        { icon: Handshake, title: "B2B & Wholesale Capable", desc: "We supply and export commercial volumes of Canadian goods to wholesale buyers in Senegal. Trade-ready, reliable, accountable." },
      ];

  const faqPreview = fr
    ? [
        { q: "Que puis-je expédier du Canada au Sénégal ?", a: "Vous pouvez expédier une large gamme de biens personnels incluant vêtements, articles ménagers, nourriture, électronique, meubles (sofas, tables) et véhicules (berlines, VUS, camions). Nous expédions via des grands sacs (Sac Costco), petites boîtes, grandes boîtes, barils/fûts et exportation complète de véhicules. Contactez-nous si vous n'êtes pas sûr d'un article spécifique." },
        { q: "Les prix incluent-ils la douane ou les frais portuaires ?", a: "Pour les colis et meubles B2C, oui — droits de douane et frais d'importation inclus. Pour les véhicules, les frais portuaires sont à régler avec nos frais ; les droits de douane peuvent être payés directement par le client ou remis à ShipDirect qui les règle en son nom." },
        { q: "Offrez-vous le ramassage au Canada ?", a: "Oui, nous pouvons organiser le ramassage au Canada pour un supplément. Les frais dépendent de votre emplacement et de la distance de notre établissement d'Ottawa. Contactez-nous au 613-700-2747 ou info@shipdirect.ca pour demander un devis de ramassage." },
        { q: "Où puis-je collecter mon envoi au Sénégal ?", a: "Tous les envois B2C arrivent à notre établissement de Keur Massar au Sénégal. Les destinataires collectent leurs marchandises là-bas sans frais supplémentaires. Nous vous notifierons lorsque votre envoi sera prêt." },
        { q: "Puis-je expédier une voiture ou un véhicule ?", a: "Oui. Nous expédions les berlines pour 1 600 $ CAD et les VUS ou camions pour 1 700 $ CAD, aller simple. Contactez-nous pour discuter des exigences de préparation du véhicule et de la documentation nécessaire." },
      ]
    : [
        { q: "What can I ship from Canada to Senegal?", a: "You can ship a wide range of personal goods including clothing, household items, food, electronics, furniture (sofas, tables), and vehicles (sedans, SUVs, trucks). We ship via large bags (Costco bags), small boxes, large boxes, barrels/drums, and full vehicle export. Contact us if you're unsure about a specific item." },
        { q: "Do prices include customs or port fees?", a: "For B2C parcels and furniture, yes — customs duties and import charges are included. For vehicles, port fees are due with our shipping fee; customs duties can be paid directly by the client or remitted to ShipDirect and we pay on their behalf." },
        { q: "Do you offer pickup in Canada?", a: "Yes, we can arrange pickup in Canada for an additional charge. The fee depends on your location and distance from our Ottawa facility. Contact us at 613-700-2747 or info@shipdirect.ca to request a pickup quote." },
        { q: "Where do I collect my shipment in Senegal?", a: "All B2C shipments arrive at our Keur Massar facility in Senegal. Recipients collect their goods there at no additional charge. We'll notify you when your shipment is ready." },
        { q: "Can I ship a car or vehicle?", a: "Yes. We ship sedans for $1,600 CAD and SUVs or trucks for $1,700 CAD, one-way. Contact us to discuss vehicle preparation requirements and documentation needed." },
      ];

  const b2cList = fr
    ? ["Grands sacs (Sac Costco), petites et grandes boîtes, barils", "Meubles et articles surdimensionnés", "Véhicules (berlines, VUS, camions)", "Dépôt à Ottawa ou ramassage payant disponible", "Collecte à Keur Massar ou livraison locale payante au Sénégal"]
    : ["Large bags (Costco bags), small & big boxes, barrels", "Furniture and oversized items", "Vehicles (sedans, SUVs, trucks)", "Drop-off in Ottawa or paid pickup available", "Pickup in Keur Massar or paid local delivery in Senegal"];

  const b2bList = fr
    ? ["Approvisionnement direct en produits du Canada", "Pois chiches, pois, lentilles, haricots, épices et plus", "Coordination d'exportation et livraison au port", "Les entreprises gèrent le dédouanement portuaire en aval", "Devis B2B dédiés et support de compte"]
    : ["Direct product sourcing from Canada", "Chickpeas, peas, lentils, beans, spices & more", "Export coordination and port delivery", "Businesses handle port clearance onward", "Dedicated B2B quotes and account support"];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <Image
          src="/images/home/hero-port-dusk-4k.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-navy/90 to-transparent" />

        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[640px] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <ScrollFadeUp>
              <Badge className="mb-6 h-auto gap-2 rounded-full border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <Ship className="size-4" />
                {fr ? "Canada → Sénégal Expédition" : "Canada → Senegal Shipping"}
              </Badge>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.1}>
              <h1 className="mb-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {fr ? (
                  <>Expédiez n&apos;importe quoi.{" "}<span className="text-[#FF5A4E]">Partout au Sénégal.</span>{" "}Nous gérons le reste.</>
                ) : (
                  <>Ship Anything.{" "}<span className="text-[#FF5A4E]">Anywhere in Senegal.</span>{" "}We Handle the Rest.</>
                )}
              </h1>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.2}>
              <p className="mb-9 max-w-xl text-lg leading-relaxed text-blue-100/90">
                {fr
                  ? "Des colis personnels et barils aux véhicules et exportations en gros — ShipDirect connecte le Canada au Sénégal avec des tarifs transparents, une logistique fiable et un service de confiance."
                  : "From personal packages and barrels to vehicles and wholesale exports — ShipDirect connects Canada to Senegal with transparent pricing, reliable logistics, and trusted service."}
              </p>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.3} className="mb-12 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl" className="shimmer-btn">
                <Link href="/quote">
                  {fr ? "Obtenir un devis gratuit" : "Get a Free Quote"}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link href="/pricing">{fr ? "Voir les tarifs" : "View Pricing"}</Link>
              </Button>
            </ScrollFadeUp>
          </div>

          <ScrollFadeUp delay={0.4}>
            <div className="inline-flex flex-wrap items-stretch gap-x-6 gap-y-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:gap-x-8 sm:px-6">
              {(fr
                ? [{ value: "Ottawa", label: "Point de dépôt" }, { value: "Keur Massar", label: "Destination, Sénégal" }, { value: "B2C + B2B", label: "Personnel et Grossiste" }]
                : [{ value: "Ottawa", label: "Drop-off Location" }, { value: "Keur Massar", label: "Destination, Senegal" }, { value: "B2C + B2B", label: "Personal & Wholesale" }]
              ).map((stat, i) => (
                <div key={i} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <Separator orientation="vertical" className="hidden bg-white/15 sm:block" />}
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white sm:text-xl">{stat.value}</span>
                    <span className="text-xs text-blue-200">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeUp>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── SERVICES OVERVIEW ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={fr ? "Nos services" : "Our Services"}
            title={fr ? "Deux façons dont nous expédions pour vous" : "Two Ways We Ship for You"}
            subtitle={fr ? "Expédition personnelle pour les familles et les communautés. Exportation en gros pour les entreprises." : "Personal shipping for families and communities. Wholesale export for businesses."}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/* B2C Card */}
            <ScrollFadeUp>
              <Card className="group h-full gap-0 overflow-hidden rounded-3xl py-0 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/home/family-packing-branded.jpg"
                    alt={fr ? "Une famille prépare des boîtes et un baril à expédier au Sénégal" : "A family packing boxes and a barrel to ship to Senegal"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="origin-top object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <Badge variant="secondary" className="mb-4 h-auto gap-1.5 rounded-full bg-navy-tint px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
                    <Package className="size-3.5" />
                    {fr ? "Expédition personnelle · B2C" : "Personal Shipping · B2C"}
                  </Badge>
                  <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-brand-navy">
                    {fr ? "Envoyez n'importe quoi du Canada au Sénégal" : "Send Anything From Canada to Senegal"}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {fr ? "Boîtes, sacs, barils, meubles et véhicules — expédiés depuis Ottawa directement à Keur Massar, Sénégal. Tarifs simples. Pas de surprises." : "Boxes, bags, barrels, furniture, and vehicles — shipped from Ottawa directly to Keur Massar, Senegal. Simple pricing. No surprises."}
                  </p>
                  <CheckList items={b2cList} className="mb-8" />
                  <Button asChild variant="brand" size="xl" className="mt-auto self-start">
                    <Link href="/pricing">
                      {fr ? "Voir les tarifs" : "View Pricing"}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollFadeUp>

            {/* B2B Card */}
            <ScrollFadeUp delay={0.1}>
              <Card className="group h-full gap-0 overflow-hidden rounded-3xl border-brand-navy bg-brand-navy py-0 text-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/home/wholesale-pulses.jpg"
                    alt={fr ? "Sacs de pois chiches, lentilles et haricots canadiens prêts pour l'exportation" : "Sacks of Canadian chickpeas, lentils and beans ready for export"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <Badge className="mb-4 h-auto gap-1.5 rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-bold tracking-wide text-[#E0A84A] uppercase">
                    <Handshake className="size-3.5" />
                    {fr ? "Approvisionnement et export en gros · B2B" : "Wholesale Supply & Export · B2B"}
                  </Badge>
                  <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-white">
                    {fr ? "Sourcez des produits canadiens. Exportez au Sénégal." : "Source Canadian Goods. Export to Senegal."}
                  </h3>
                  <p className="mb-6 leading-relaxed text-blue-200">
                    {fr ? "ShipDirect s'associe avec des grossistes et acheteurs commerciaux au Sénégal pour fournir des produits agricoles canadiens de qualité supérieure et coordonner l'exportation complète vers le port." : "ShipDirect partners with wholesalers and commercial buyers in Senegal to supply premium Canadian agricultural products and coordinate full export to port."}
                  </p>
                  <CheckList items={b2bList} tone="dark" className="mb-8" />
                  <Button asChild variant="gold" size="xl" className="mt-auto self-start">
                    <Link href="/wholesale">
                      {fr ? "Services de gros" : "Wholesale Services"}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS PREVIEW ── */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={fr ? "Le processus" : "The Process"}
            title={fr ? "Comment ça fonctionne — Canada vers Sénégal" : "How It Works — Canada to Senegal"}
            subtitle={fr ? "De votre premier message à la livraison au Sénégal — voici le processus." : "From your first message to delivery in Senegal — here's the process."}
          />
          <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <div aria-hidden className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-brand-navy/0 via-brand-navy/25 to-brand-navy/0 lg:block" />
            {howItWorksSteps.map((step, i) => (
              <ScrollFadeUp key={i} delay={i * 0.08} className="relative">
                <li className="flex h-full flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] lg:items-center lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none">
                  <div className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-lg shadow-brand-navy/20">
                    <step.icon className="size-6" />
                    <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-brand-red text-[11px] font-bold ring-2 ring-off-white">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-bold text-brand-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </li>
              </ScrollFadeUp>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="xl" className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white">
              <Link href="/how-it-works">
                {fr ? "Voir les détails complets du processus" : "See Full Process Details"}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={fr ? "Tarifs" : "Pricing"}
            title={fr ? "Tarifs clairs. Aller simple, sans surprises." : "Clear Rates. One-Way, No Surprises."}
            subtitle={fr ? "Tous les prix en CAD. Expédition aller simple du Canada vers le Sénégal." : "All prices in CAD. One-way shipping from Canada to Senegal."}
          />
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPreview.map((item, i) => (
              <ScrollFadeUp key={i} delay={i * 0.06}>
                <Card
                  className={`relative h-full gap-0 overflow-visible rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
                    item.popular ? "ring-2 ring-brand-red" : ""
                  }`}
                >
                  {item.popular && (
                    <Badge className="absolute -top-3 left-6 rounded-full bg-brand-red px-3 text-[11px] font-bold tracking-wide text-white uppercase">
                      {fr ? "Le plus populaire" : "Most Popular"}
                    </Badge>
                  )}
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy-tint text-brand-navy">
                    <item.icon className="size-6" />
                  </div>
                  <div className="mb-1 text-sm font-semibold text-brand-navy">{item.name}</div>
                  <div className="text-2xl font-extrabold tracking-tight text-brand-navy tabular-nums">{item.price}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{fr ? "Aller simple" : "One Way"}</div>
                </Card>
              </ScrollFadeUp>
            ))}
          </div>
          <p className="mb-8 text-center text-base text-muted-foreground md:text-sm">
            {fr
              ? <>Nous expédions aussi les meubles (500 $), berlines (1 600 $) et VUS/camions (1 700 $).{" "}<Link href="/pricing" className="font-medium text-brand-red underline underline-offset-4">Voir tous les tarifs →</Link></>
              : <>Also shipping furniture ($500), sedans ($1,600), and SUVs/trucks ($1,700).{" "}<Link href="/pricing" className="font-medium text-brand-red underline underline-offset-4">See full pricing →</Link></>}
          </p>
          <div className="text-center">
            <Button asChild variant="brand" size="xl">
              <Link href="/pricing">
                {fr ? "Page de tarification complète" : "Full Pricing Page"}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY SHIPDIRECT ── */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={fr ? "Pourquoi ShipDirect" : "Why ShipDirect"}
            title={fr ? "Conçu pour la route Canada–Sénégal" : "Built for the Canada–Senegal Route"}
            subtitle={fr ? "Nous comprenons ce dont les familles et les entreprises ont besoin pour expédier entre le Canada et le Sénégal." : "We understand what families and businesses need when shipping between Canada and Senegal."}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <ScrollFadeUp key={i} delay={(i % 3) * 0.06}>
                <FeatureCard icon={card.icon} title={card.title} desc={card.desc} />
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <CtaBand
        title={fr ? "Prêt à expédier au Sénégal ?" : "Ready to Ship to Senegal?"}
        subtitle={fr ? "Obtenez votre devis gratuit aujourd'hui. Notre équipe est prête à vous aider à expédier des colis, des meubles, des véhicules et plus encore — directement au Sénégal." : "Get your free quote today. Our team is ready to help you ship packages, furniture, vehicles, and more — directly to Senegal."}
      >
        <Button asChild variant="brand" size="xl" className="shimmer-btn">
          <Link href="/quote">
            {fr ? "Obtenir un devis gratuit" : "Get a Free Quote"}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild variant="outline-light" size="xl">
          <a href="tel:6137002747">
            <Phone data-icon="inline-start" />
            613-700-2747
          </a>
        </Button>
      </CtaBand>

      {/* ── FAQ PREVIEW ── */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title={fr ? "Réponses rapides" : "Quick Answers"} />
          <FaqAccordion items={faqPreview} />
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="xl" className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white">
              <Link href="/faq">
                {fr ? "Voir toutes les FAQ" : "View All FAQs"}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="bg-brand-navy py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 text-white sm:grid-cols-3">
            {[
              { icon: Phone, label: fr ? "Téléphone" : "Phone", value: "613-700-2747", href: "tel:6137002747" },
              { icon: Mail, label: "Email", value: "info@shipdirect.ca", href: "mailto:info@shipdirect.ca" },
              { icon: MapPin, label: fr ? "Emplacement" : "Location", value: fr ? "Dépôt Ottawa (Fourni après confirmation)" : "Ottawa Drop-off (Provided upon confirmation)" },
            ].map((c) => {
              const inner = (
                <>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{c.label}</div>
                    <div className="text-sm text-blue-200">{c.value}</div>
                  </div>
                </>
              );
              const cls = "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors";
              return c.href ? (
                <a key={c.label} href={c.href} className={`${cls} hover:bg-white/10`}>{inner}</a>
              ) : (
                <div key={c.label} className={cls}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

