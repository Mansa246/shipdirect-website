"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, BadgeDollarSign, Globe2, MessageCircle, Phone, ShieldCheck, Ship, Target, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import { IconTile } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "À propos — Connecter le Canada au Sénégal | ShipDirect"
      : "About Us | ShipDirect Canada to Senegal";
  }, [fr]);

  const values = fr
    ? [
        { icon: Target, title: "Expertise ciblée", desc: "Spécialiste Canada–Sénégal. Nous connaissons cette route mieux que quiconque." },
        { icon: MessageCircle, title: "Communication claire", desc: "Langage simple, pas de jargon. Chaque étape expliquée simplement." },
        { icon: ShieldCheck, title: "Manutention sécurisée", desc: "Vos marchandises sont traitées avec soin, de la collecte à la livraison." },
        { icon: BadgeDollarSign, title: "Tarification honnête", desc: "Tarifs fixes en CAD. Le prix que nous citons est le prix que vous payez." },
        { icon: Users, title: "Adapté aux familles", desc: "Nous savons que vous envoyez plus que des marchandises. Nous les traitons en conséquence." },
        { icon: Globe2, title: "Prêt pour le commerce", desc: "Capacité commerciale, approvisionnement B2B dédié et coordination d'exportation à grande échelle." },
      ]
    : [
        { icon: Target, title: "Focused Expertise", desc: "Canada-to-Senegal specialist. We know this route better than anyone." },
        { icon: MessageCircle, title: "Clear Communication", desc: "Plain language, no jargon. Every step explained simply." },
        { icon: ShieldCheck, title: "Safe Handling", desc: "Your goods are treated with care from collection to delivery." },
        { icon: BadgeDollarSign, title: "Honest Pricing", desc: "Flat rates in CAD. The price we quote is the price you pay." },
        { icon: Users, title: "Family-Friendly", desc: "We know you're sending more than goods. We handle them accordingly." },
        { icon: Globe2, title: "Trade Ready", desc: "Commercial capability, dedicated B2B supply, and export coordination at scale." },
      ];

  const stats = fr
    ? [{ value: "Ottawa", label: "Centre des opérations canadiennes" }, { value: "Keur Massar", label: "Destination Sénégal" }, { value: "B2C & B2B", label: "Personnel et Commercial" }]
    : [{ value: "Ottawa", label: "Canadian Operations Hub" }, { value: "Keur Massar", label: "Senegal Destination" }, { value: "B2C & B2B", label: "Personal & Commercial" }];

  return (
    <main>
      <PageHero
        eyebrow={fr ? "Notre histoire" : "Our Story"}
        eyebrowIcon={Ship}
        title={fr ? (
          <>Connecter le Canada au Sénégal.{" "}<span className="text-[#FF5A4E]">Un envoi à la fois.</span></>
        ) : (
          <>Connecting Canada to Senegal.{" "}<span className="text-[#FF5A4E]">One Shipment at a Time.</span></>
        )}
        subtitle={fr
          ? "ShipDirect a été construit avec un seul objectif : rendre l'expédition internationale entre le Canada et le Sénégal simple, fiable et accessible — pour les familles, les communautés et les entreprises."
          : "ShipDirect was built with one purpose: to make international shipping between Canada and Senegal simple, reliable, and accessible — for families, communities, and businesses alike."}
        image={{ src: "/images/about-warehouse-branded.jpg", alt: fr ? "Entrepôt d'Ottawa avec boîtes, barils et meubles prêts pour l'exportation" : "Ottawa warehouse with boxes, barrels and furniture staged for export" }}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md">
              <div className="mb-1 text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs leading-tight text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── MISSION & STORY ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <ScrollFadeUp className="space-y-6">
              <div className="text-xs font-bold tracking-[0.18em] text-brand-red uppercase">{fr ? "À propos" : "About"}</div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                {fr ? "Notre mission et notre histoire" : "Our Mission & Story"}
              </h2>
              <p className="text-lg leading-relaxed text-body">
                {fr
                  ? "ShipDirect a été fondé pour desservir l'un des corridors logistiques les plus mal desservis en Amérique du Nord : la route entre le Canada et le Sénégal. Nous avons reconnu que les familles de la diaspora sénégalaise avaient besoin d'un partenaire d'expédition en qui elles pouvaient vraiment avoir confiance — un partenaire qui comprenait leurs besoins, respectait leurs marchandises et offrait des tarifs honnêtes et transparents sans la confusion des transitaires complexes ou des intermédiaires peu fiables."
                  : "ShipDirect was founded to serve one of the most underserved logistics corridors in North America: the route between Canada and Senegal. We recognized that families in the Senegalese diaspora needed a shipping partner they could truly trust — one that understood their needs, respected their goods, and offered honest, transparent pricing without the confusion of complex freight brokers or unreliable intermediaries."}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {fr
                  ? "Nos opérations sont simples et intentionnelles. Les clients à Ottawa peuvent déposer leurs marchandises à notre emplacement d'Ottawa (adresse fournie après confirmation), ou organiser un ramassage pour un petit supplément. De là, nous gérons l'ensemble du processus d'exportation — consolidation, documentation et transit — jusqu'à ce que votre envoi arrive en toute sécurité à notre établissement de Keur Massar au Sénégal. Les destinataires peuvent collecter en personne ou demander une livraison locale au Sénégal."
                  : "Our operations are straightforward and intentional. Customers in Ottawa can drop their goods at our Ottawa location (address provided upon confirmation), or arrange a pickup for a small additional fee. From there, we handle the entire export process — consolidation, documentation, and transit — until your shipment arrives safely at our Keur Massar facility in Senegal. Recipients can collect in person or request local delivery within Senegal."}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {fr
                  ? "Pour les entreprises et les acheteurs en gros, ShipDirect va plus loin. Nous sommes un partenaire de fourniture et d'exportation de confiance pour les acheteurs commerciaux au Sénégal, en approvisionnant des produits agricoles canadiens de qualité supérieure et en coordonnant l'exportation vers le port. Notre rôle se termine au port ; à partir de là, nos clients B2B gèrent le dédouanement et la distribution locaux. C'est un modèle propre et efficace qui permet à chacun de se concentrer sur ce qu'il fait le mieux."
                  : "For businesses and wholesale buyers, ShipDirect goes further. We are a trusted supply and export partner for commercial buyers in Senegal, sourcing premium Canadian agricultural products — pulses, legumes, spices, and more — and coordinating export to port. Our role ends at port; from there, our B2B clients manage local clearance and distribution. It's a clean, efficient model that keeps everyone focused on what they do best."}
              </p>
              <div className="flex items-start gap-4 rounded-2xl border-l-4 border-brand-navy bg-navy-tint px-6 py-5">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-navy" />
                <p className="text-sm font-medium text-brand-navy">
                  {fr ? "Questions ? Appelez-nous au " : "Questions? Call us at "}
                  <a href="tel:6137002747" className="font-bold underline">613-700-2747</a>
                  {fr ? " ou envoyez un email à " : " or email "}
                  <a href="mailto:info@shipdirect.ca" className="font-bold underline">info@shipdirect.ca</a>
                  {fr ? ". Nous sommes là pour vous aider." : ". We're here to help."}
                </p>
              </div>
            </ScrollFadeUp>

            <div>
              <ScrollFadeUp>
                <h3 className="mb-6 text-xl font-bold text-brand-navy">{fr ? "Nos valeurs" : "Our Values"}</h3>
              </ScrollFadeUp>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {values.map((v, i) => (
                  <ScrollFadeUp key={i} delay={(i % 2) * 0.06}>
                    <Card className="h-full gap-0 rounded-3xl border-transparent bg-off-white p-6 shadow-none">
                      <IconTile icon={v.icon} className="mb-4" />
                      <h4 className="mb-1 font-bold text-brand-navy">{v.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                    </Card>
                  </ScrollFadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={fr ? "Prêt à expédier avec nous ?" : "Ready to Ship With Us?"}
        subtitle={fr ? "Obtenez un devis en quelques minutes. Notre équipe gère les envois personnels et commerciaux." : "Get a quote in minutes. Our team handles personal and commercial shipments."}
      >
        <Button asChild variant="brand" size="xl" className="shimmer-btn">
          <Link href="/quote">
            {fr ? "Obtenir un devis gratuit" : "Get a Free Quote"}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild variant="outline-light" size="xl">
          <Link href="/contact">{fr ? "Nous contacter" : "Contact Us"}</Link>
        </Button>
      </CtaBand>
    </main>
  );
}
