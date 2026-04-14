"use client";

import Link from "next/link";
import { useEffect } from "react";
import TrustBar from "@/components/TrustBar";
import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import { motion } from "framer-motion";

export default function HomeContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Expédiez n'importe quoi. Partout au Sénégal. | ShipDirect Canada"
      : "ShipDirect | Canada to Senegal Shipping & Export";
  }, [fr]);

  const heroCards = fr
    ? [
        { icon: "📦", name: "Petite Boîte (23 kg)" },
        { icon: "🛢️", name: "Baril / Fût (50–60 kg)" },
        { icon: "🛋️", name: "Sofa / Meuble" },
        { icon: "🚗", name: "Berline (Véhicule)" },
        { icon: "🏭", name: "Gros / Export B2B", gold: true },
      ]
    : [
        { icon: "📦", name: "Small Box (23kg)" },
        { icon: "🛢️", name: "Baril / Drum (50–60kg)" },
        { icon: "🛋️", name: "Sofa / Furniture" },
        { icon: "🚗", name: "Sedan (Vehicle)" },
        { icon: "🏭", name: "Wholesale / B2B Export", gold: true },
      ];

  const howItWorksSteps = fr
    ? [
        { n: "01", title: "Demander un devis", desc: "Remplissez le formulaire ou appelez-nous. Nous confirmons les détails et les tarifs de votre envoi." },
        { n: "02", title: "Déposer ou planifier un ramassage", desc: "Apportez vos marchandises à Ottawa, ou nous organisons le ramassage pour un supplément." },
        { n: "03", title: "Nous gérons l'expédition", desc: "Préparation, documentation et expédition vers le Sénégal." },
        { n: "04", title: "Arrive au Sénégal", desc: "Les marchandises arrivent à Keur Massar, prêtes pour la collecte." },
        { n: "05", title: "Collecter ou se faire livrer", desc: "Collecte à Keur Massar, ou demander une livraison locale au Sénégal pour supplément." },
      ]
    : [
        { n: "01", title: "Request a Quote", desc: "Fill out the form or call us. We confirm your shipment details and pricing." },
        { n: "02", title: "Drop Off or Schedule Pickup", desc: "Bring goods to Ottawa, or we arrange pickup for an extra fee." },
        { n: "03", title: "We Handle Shipping", desc: "Preparation, documentation, and dispatch to Senegal." },
        { n: "04", title: "Arrives in Senegal", desc: "Goods arrive at Keur Massar, ready for collection." },
        { n: "05", title: "Collect or Get Delivered", desc: "Pickup in Keur Massar, or request local Senegal delivery for extra charge." },
      ];

  const pricingPreview = fr
    ? [
        { icon: "🛍️", name: "Grand Sac (Sac Costco)", price: "$75 CAD" },
        { icon: "📦", name: "Petite Boîte (23kg)", price: "$100 CAD" },
        { icon: "📫", name: "Grande Boîte (32kg)", price: "$150 CAD", popular: true },
        { icon: "🛢️", name: "Baril / Fût (50–60kg)", price: "$250 CAD" },
      ]
    : [
        { icon: "🛍️", name: "Large Bag (Costco Bag)", price: "$75 CAD" },
        { icon: "📦", name: "Small Box (23kg)", price: "$100 CAD" },
        { icon: "📫", name: "Big Box (32kg)", price: "$150 CAD", popular: true },
        { icon: "🛢️", name: "Baril / Drum (50–60kg)", price: "$250 CAD" },
      ];

  const whyCards = fr
    ? [
        { icon: "🎯", title: "Expertise spécialisée", desc: "Nous nous concentrons exclusivement sur le Canada vers le Sénégal. Cette spécialisation signifie de meilleurs processus, moins de délais et moins de surprises." },
        { icon: "💰", title: "Tarification fixe transparente", desc: "Sachez exactement ce que vous paierez avant d'expédier. Tarifs clairs en CAD. Aucuns frais cachés." },
        { icon: "👨‍👩‍👧", title: "Centré sur la famille et la communauté", desc: "Nous servons la diaspora sénégalaise au Canada. Nous savons que vous n'envoyez pas seulement des marchandises — vous envoyez un soutien à la maison." },
        { icon: "🚗", title: "Tout s'expédie — y compris les véhicules", desc: "D'un grand sac (Sac Costco) à un VUS complet, nous avons la capacité et le réseau logistique pour gérer toutes les tailles." },
        { icon: "📍", title: "Emplacement pratique à Ottawa", desc: "Déposez à notre établissement d'Ottawa ou organisez un ramassage. Collectez à Keur Massar ou demandez une livraison locale au Sénégal." },
        { icon: "🤝", title: "Capable en B2B et gros", desc: "Nous approvisionnons et exportons des volumes commerciaux de produits canadiens pour les acheteurs en gros au Sénégal. Prêt pour le commerce, fiable, responsable." },
      ]
    : [
        { icon: "🎯", title: "Specialized Route Expertise", desc: "We focus exclusively on Canada-to-Senegal. That specialization means better processes, fewer delays, and fewer surprises." },
        { icon: "💰", title: "Transparent Flat-Rate Pricing", desc: "Know exactly what you'll pay before you ship. Clear rates in CAD. No hidden fees." },
        { icon: "👨‍👩‍👧", title: "Family & Community-Focused", desc: "We serve the Senegalese diaspora in Canada. We know you're not just sending goods — you're sending support home." },
        { icon: "🚗", title: "Everything Ships — Including Vehicles", desc: "From a large bag (Costco bag) to a full SUV, we have the capacity and logistics network to handle every size." },
        { icon: "📍", title: "Convenient Ottawa Location", desc: "Drop off at our Ottawa facility or arrange pickup. Collect in Keur Massar or request Senegal local delivery." },
        { icon: "🤝", title: "B2B & Wholesale Capable", desc: "We supply and export commercial volumes of Canadian goods to wholesale buyers in Senegal. Trade-ready, reliable, accountable." },
      ];

  const faqPreview = fr
    ? [
        { q: "Que puis-je expédier du Canada au Sénégal ?", a: "Vous pouvez expédier une large gamme de biens personnels incluant vêtements, articles ménagers, nourriture, électronique, meubles (sofas, tables) et véhicules (berlines, VUS, camions). Nous expédions via des grands sacs (Sac Costco), petites boîtes, grandes boîtes, barils/fûts et exportation complète de véhicules. Contactez-nous si vous n'êtes pas sûr d'un article spécifique." },
        { q: "Les prix incluent-ils la douane ou les frais portuaires ?", a: "Oui, pour les envois B2C (personnels). Nos tarifs incluent les droits de douane, les frais de manutention portuaire et tous les frais liés à l'importation au Sénégal. Aucuns frais cachés — le prix affiché est le prix total." },
        { q: "Offrez-vous le ramassage au Canada ?", a: "Oui, nous pouvons organiser le ramassage au Canada pour un supplément. Les frais dépendent de votre emplacement et de la distance de notre établissement d'Ottawa. Contactez-nous au 613-700-2747 ou info@shipdirect.ca pour demander un devis de ramassage." },
        { q: "Où puis-je collecter mon envoi au Sénégal ?", a: "Tous les envois B2C arrivent à notre établissement de Keur Massar au Sénégal. Les destinataires collectent leurs marchandises là-bas sans frais supplémentaires. Nous vous notifierons lorsque votre envoi sera prêt." },
        { q: "Puis-je expédier une voiture ou un véhicule ?", a: "Oui. Nous expédions les berlines pour 1 600 $ CAD et les VUS ou camions pour 1 700 $ CAD, aller simple. Contactez-nous pour discuter des exigences de préparation du véhicule et de la documentation nécessaire." },
      ]
    : [
        { q: "What can I ship from Canada to Senegal?", a: "You can ship a wide range of personal goods including clothing, household items, food, electronics, furniture (sofas, tables), and vehicles (sedans, SUVs, trucks). We ship via large bags (Costco bags), small boxes, large boxes, barrels/drums, and full vehicle export. Contact us if you're unsure about a specific item." },
        { q: "Do prices include customs or port fees?", a: "Yes, for B2C (personal) shipments. Our rates include customs duties, port handling fees, and all import-related charges in Senegal. No hidden fees — the price you see is the total price." },
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
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollFadeUp>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-6">
                  {fr ? "🚢 Canada → Sénégal Expédition" : "🚢 Canada → Senegal Shipping"}
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                  {fr ? (
                    <>Expédiez n&apos;importe quoi.{" "}<span className="text-[#D42B2B]">Partout au Sénégal.</span>{" "}Nous gérons le reste.</>
                  ) : (
                    <>Ship Anything.{" "}<span className="text-[#D42B2B]">Anywhere in Senegal.</span>{" "}We Handle the Rest.</>
                  )}
                </h1>
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.2}>
                <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-lg">
                  {fr
                    ? "Des colis personnels et barils aux véhicules et exportations en gros — ShipDirect connecte le Canada au Sénégal avec des tarifs transparents, une logistique fiable et un service de confiance."
                    : "From personal packages and barrels to vehicles and wholesale exports — ShipDirect connects Canada to Senegal with transparent pricing, reliable logistics, and trusted service."}
                </p>
              </ScrollFadeUp>

              <ScrollFadeUp delay={0.3} className="flex flex-wrap gap-4 mb-10">
                <Link href="/quote" passHref legacyBehavior>
                  <motion.a whileHover={{ scale: 1.03 }} className="shimmer-btn inline-flex justify-center items-center px-6 min-h-[44px] bg-[#D42B2B] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#b82424] transition-all text-base">
                    {fr ? "Obtenir un devis gratuit →" : "Get a Free Quote →"}
                  </motion.a>
                </Link>
                <Link href="/pricing" passHref legacyBehavior>
                  <motion.a whileHover={{ scale: 1.03 }} className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base">
                    {fr ? "Voir les tarifs" : "View Pricing"}
                  </motion.a>
                </Link>
              </ScrollFadeUp>

              <ScrollFadeUp delay={0.4} className="flex flex-wrap gap-6">
                {(fr
                  ? [{ value: "Ottawa", label: "Point de dépôt" }, { value: "Keur Massar", label: "Destination, Sénégal" }, { value: "B2C + B2B", label: "Personnel et Grossiste" }]
                  : [{ value: "Ottawa", label: "Drop-off Location" }, { value: "Keur Massar", label: "Destination, Senegal" }, { value: "B2C + B2B", label: "Personal & Wholesale" }]
                ).map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-xs text-blue-300">{stat.label}</span>
                  </div>
                ))}
              </ScrollFadeUp>
            </div>

            {/* Right: Illustration */}
            <ScrollFadeUp delay={0.2} className="relative flex flex-col gap-3">
              <HeroIllustration />
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Deux façons dont nous expédions pour vous" : "Two Ways We Ship for You"}
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              {fr ? "Expédition personnelle pour les familles et les communautés. Exportation en gros pour les entreprises." : "Personal shipping for families and communities. Wholesale export for businesses."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* B2C Card */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0D1F5C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-5">
                {fr ? "📦 Expédition personnelle · B2C" : "📦 Personal Shipping · B2C"}
              </div>
              <h3 className="text-2xl font-extrabold text-[#0D1F5C] mb-3">
                {fr ? "Envoyez n'importe quoi du Canada au Sénégal" : "Send Anything From Canada to Senegal"}
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                {fr ? "Boîtes, sacs, barils, meubles et véhicules — expédiés depuis Ottawa directement à Keur Massar, Sénégal. Tarifs simples. Pas de surprises." : "Boxes, bags, barrels, furniture, and vehicles — shipped from Ottawa directly to Keur Massar, Senegal. Simple pricing. No surprises."}
              </p>
              <ul className="space-y-2.5 mb-8">
                {b2cList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#1A1410]">
                    <span className="text-[#D42B2B] mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="inline-flex items-center justify-center min-h-[44px] px-5 bg-[#D42B2B] text-white font-semibold text-base rounded-xl hover:bg-[#b82424] transition-colors">
                {fr ? "Voir les tarifs →" : "View Pricing →"}
              </Link>
            </div>

            {/* B2B Card */}
            <div className="rounded-2xl p-8 bg-[#0D1F5C] text-white hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center gap-2 bg-[#C4882A]/20 text-[#C4882A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-5">
                {fr ? "🏭 Approvisionnement et export en gros · B2B" : "🏭 Wholesale Supply & Export · B2B"}
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                {fr ? "Sourcez des produits canadiens. Exportez au Sénégal." : "Source Canadian Goods. Export to Senegal."}
              </h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                {fr ? "ShipDirect s'associe avec des grossistes et acheteurs commerciaux au Sénégal pour fournir des produits agricoles canadiens de qualité supérieure et coordonner l'exportation complète vers le port." : "ShipDirect partners with wholesalers and commercial buyers in Senegal to supply premium Canadian agricultural products and coordinate full export to port."}
              </p>
              <ul className="space-y-2.5 mb-8">
                {b2bList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                    <span className="text-[#C4882A] mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/wholesale" className="inline-flex items-center px-5 py-2.5 bg-[#C4882A] text-white font-semibold text-sm rounded-xl hover:bg-[#a87022] transition-colors">
                {fr ? "Services de gros →" : "Wholesale Services →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS PREVIEW ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Comment ça fonctionne — Canada vers Sénégal" : "How It Works — Canada to Senegal"}
            </h2>
            <p className="text-[#6B7280] text-lg">
              {fr ? "De votre premier message à la livraison au Sénégal — voici le processus." : "From your first message to delivery in Senegal — here's the process."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0D1F5C] text-white flex items-center justify-center text-lg font-extrabold shrink-0">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#0D1F5C] text-sm">{step.title}</h3>
                <p className="text-base md:text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="inline-flex items-center px-6 py-3 border-2 border-[#0D1F5C] text-[#0D1F5C] font-semibold rounded-xl hover:bg-[#0D1F5C] hover:text-white transition-colors text-sm">
              {fr ? "Voir les détails complets du processus →" : "See Full Process Details →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Tarifs clairs. Aller simple, sans surprises." : "Clear Rates. One-Way, No Surprises."}
            </h2>
            <p className="text-[#6B7280] text-lg">
              {fr ? "Tous les prix en CAD. Expédition aller simple du Canada vers le Sénégal." : "All prices in CAD. One-way shipping from Canada to Senegal."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {pricingPreview.map((item, i) => (
              <div key={i} className={`relative rounded-2xl border p-6 text-center transition-shadow hover:shadow-md ${item.popular ? "border-[#D42B2B] shadow-sm" : "border-gray-200"}`}>
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D42B2B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                    {fr ? "Le plus populaire" : "Most Popular"}
                  </span>
                )}
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-[#0D1F5C] text-sm mb-2">{item.name}</div>
                <div className="text-2xl font-extrabold text-[#0D1F5C]">{item.price}</div>
                <div className="text-xs text-[#6B7280] mt-1">{fr ? "Aller simple" : "One Way"}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-base md:text-sm text-[#6B7280] mb-6">
            {fr
              ? <>Nous expédions aussi les meubles (500 $), berlines (1 600 $) et VUS/camions (1 700 $).{" "}<Link href="/pricing" className="text-[#D42B2B] underline font-medium">Voir tous les tarifs →</Link></>
              : <>Also shipping furniture ($500), sedans ($1,600), and SUVs/trucks ($1,700).{" "}<Link href="/pricing" className="text-[#D42B2B] underline font-medium">See full pricing →</Link></>}
          </p>
          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center justify-center min-h-[44px] px-6 bg-[#D42B2B] text-white font-semibold rounded-xl hover:bg-[#b82424] transition-colors text-base">
              {fr ? "Page de tarification complète →" : "Full Pricing Page →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SHIPDIRECT ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Conçu pour la route Canada–Sénégal" : "Built for the Canada–Senegal Route"}
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              {fr ? "Nous comprenons ce dont les familles et les entreprises ont besoin pour expédier entre le Canada et le Sénégal." : "We understand what families and businesses need when shipping between Canada and Senegal."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-[#0D1F5C] mb-2">{card.title}</h3>
                <p className="text-base text-[#6B7280] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#0D1F5C] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(212,43,43,0.15) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {fr ? "Prêt à expédier au Sénégal ?" : "Ready to Ship to Senegal?"}
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            {fr ? "Obtenez votre devis gratuit aujourd'hui. Notre équipe est prête à vous aider à expédier des colis, des meubles, des véhicules et plus encore — directement au Sénégal." : "Get your free quote today. Our team is ready to help you ship packages, furniture, vehicles, and more — directly to Senegal."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="shimmer-btn inline-flex justify-center items-center min-h-[44px] px-6 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors text-base">
              {fr ? "Obtenir un devis gratuit →" : "Get a Free Quote →"}
            </Link>
            <a href="tel:6137002747" className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              📞 613-700-2747
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Réponses rapides" : "Quick Answers"}
            </h2>
          </div>
          <FaqAccordion items={faqPreview} />
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center px-6 py-3 border-2 border-[#0D1F5C] text-[#0D1F5C] font-semibold rounded-xl hover:bg-[#0D1F5C] hover:text-white transition-colors text-sm">
              {fr ? "Voir toutes les FAQ →" : "View All FAQs →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="bg-[#0D1F5C] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold text-sm mb-1">{fr ? "Téléphone" : "Phone"}</div>
              <a href="tel:6137002747" className="text-blue-200 hover:text-white transition-colors text-sm">613-700-2747</a>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold text-sm mb-1">{fr ? "Email" : "Email"}</div>
              <a href="mailto:info@shipdirect.ca" className="text-blue-200 hover:text-white transition-colors text-sm">info@shipdirect.ca</a>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <div className="font-semibold text-sm mb-1">{fr ? "Emplacement" : "Location"}</div>
              <p className="text-blue-200 text-base md:text-sm">{fr ? "Dépôt Ottawa (Fourni après confirmation)" : "Ottawa Drop-off (Provided upon confirmation)"}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
