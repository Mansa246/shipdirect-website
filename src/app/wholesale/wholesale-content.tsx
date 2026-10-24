"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, Bean, Briefcase, CircleDot, ClipboardList, Factory, Globe2, Handshake, Leaf, Mail, Package, Phone, Ship, ShoppingCart, Sprout, Store, Wheat } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import { FeatureCard, IconTile, SectionHeader } from "@/components/site/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function WholesaleContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Gros et exportation B2B — Partenaire canadien | ShipDirect"
      : "Wholesale Export to Senegal | ShipDirect";
  }, [fr]);

  const productCategories = fr
    ? [
        { icon: Bean, name: "Pois chiches", products: ["Pois chiches Kabuli", "Pois chiches Desi", "Chana Dahl"] },
        { icon: Sprout, name: "Pois", products: ["Pois verts entiers", "Pois jaunes entiers", "Pois jaunes cassés", "Pois verts cassés"] },
        { icon: CircleDot, name: "Lentilles", products: ["Lentilles rouges entières", "Grandes lentilles vertes entières", "Petites lentilles vertes", "Lentilles rouges cassées", "Lentilles rouges entières décortiquées", "Lentilles jaunes cassées"] },
        { icon: Bean, name: "Haricots", products: ["Haricots rouges clairs", "Haricots rouges foncés", "Petits haricots rouges", "Haricots navy", "Haricots noirs", "Haricots pinto"] },
        { icon: Leaf, name: "Épices et graines", products: ["Moutarde brune", "Moutarde jaune", "Moutarde orientale", "Coriandre entière / finement concassée", "Carvi", "Lin"] },
        { icon: Wheat, name: "Produits moulus et farines", products: ["Coriandre moulue", "Farine de pois chiches", "Farine de pois jaunes", "Farine de lentilles", "Farine de haricots", "Farine de lin"] },
      ]
    : [
        { icon: Bean, name: "Chickpeas", products: ["Kabuli Chickpeas", "Desi Chickpeas", "Chana Dahl"] },
        { icon: Sprout, name: "Peas", products: ["Whole Green Peas", "Whole Yellow Peas", "Split Yellow Peas", "Split Green Peas"] },
        { icon: CircleDot, name: "Lentils", products: ["Whole Red Lentils", "Whole Large Green Lentils", "Small Green Lentils", "Split Red Lentils", "Decorticated Whole Red Lentils", "Split Yellow Lentils"] },
        { icon: Bean, name: "Beans", products: ["Light Red Kidney Beans", "Dark Red Kidney Beans", "Small Red Beans", "Navy Beans", "Black Beans", "Pinto Beans"] },
        { icon: Leaf, name: "Spices & Seeds", products: ["Brown Mustard", "Yellow Mustard", "Oriental Mustard", "Whole / Fine Cracked Coriander", "Caraway", "Flax"] },
        { icon: Wheat, name: "Ground Products & Flours", products: ["Ground Coriander", "Chickpea Flour", "Yellow Pea Flour", "Lentil Flour", "Bean Flour", "Flax Flour"] },
      ];

  const b2bSteps = fr
    ? [
        { n: "01", title: "Demande et devis", desc: "Contactez ShipDirect avec vos exigences de produits, volumes et délais. Nous fournissons un devis commercial détaillé." },
        { n: "02", title: "Confirmation de commande", desc: "Conditions convenues. Nous commençons l'approvisionnement depuis notre réseau de fournisseurs canadiens." },
        { n: "03", title: "Coordination d'exportation", desc: "Préparation des produits, documentation d'exportation, réservation de conteneurs et logistique d'expédition gérées par ShipDirect." },
        { n: "04", title: "Livraison au port et transfert", desc: "Les marchandises arrivent au port sénégalais désigné. Votre équipe prend le relais." },
      ]
    : [
        { n: "01", title: "Inquiry & Quote", desc: "Contact ShipDirect with your product requirements, volumes, and timeline. We provide a detailed commercial quote." },
        { n: "02", title: "Order Confirmation", desc: "Terms agreed. We begin sourcing and procurement from our Canadian supplier network." },
        { n: "03", title: "Export Coordination", desc: "Product preparation, export documentation, container booking, and shipping logistics handled by ShipDirect." },
        { n: "04", title: "Port Delivery & Handover", desc: "Goods arrive at the designated Senegalese port. Your team takes over for clearance and distribution." },
      ];

  const whyCards = fr
    ? [
        { icon: Wheat, title: "Approvisionnement direct canadien", desc: "Nous travaillons directement avec des producteurs agricoles canadiens, garantissant la qualité, la cohérence et des prix compétitifs." },
        { icon: ClipboardList, title: "Expertise en exportation", desc: "Nous gérons toute la documentation, la logistique des conteneurs et la coordination d'expédition du Canada vers le port." },
        { icon: Package, title: "Large gamme de produits", desc: "Six catégories de produits. Volumes commerciaux. Approvisionnement constant." },
        { icon: Handshake, title: "Gestion de compte dédiée", desc: "Les clients B2B bénéficient d'un support dédié, de devis personnalisés et d'une communication réactive." },
        { icon: Ship, title: "Livraison fiable au port", desc: "Nous nous engageons à livrer vos marchandises au port, documentées et dans les délais." },
        { icon: Briefcase, title: "Opérations prêtes pour le commerce", desc: "ShipDirect opère en tant que partenaire professionnel — pas un courtier." },
      ]
    : [
        { icon: Wheat, title: "Direct Canadian Sourcing", desc: "We work directly with Canadian agricultural producers, ensuring product quality, consistency, and competitive pricing." },
        { icon: ClipboardList, title: "Export Expertise", desc: "We handle all documentation, container logistics, and shipping coordination from Canada to port." },
        { icon: Package, title: "Wide Product Range", desc: "Six product categories. Commercial volumes. Consistent supply you can plan around." },
        { icon: Handshake, title: "Dedicated Account Management", desc: "B2B clients receive dedicated support, custom quotes, and responsive communication per order." },
        { icon: Ship, title: "Reliable Port Delivery", desc: "We commit to delivering your goods to port, documented and on schedule." },
        { icon: Briefcase, title: "Trade-Ready Operations", desc: "ShipDirect operates as a professional supply and export partner — not a broker. We own our side of every order." },
      ];

  const buyerTypes = fr
    ? [
        { icon: ShoppingCart, label: "Distributeurs et importateurs en gros" },
        { icon: Store, label: "Acheteurs commerciaux de produits alimentaires et agricoles" },
        { icon: Globe2, label: "Courtiers à l'exportation et chaînes d'approvisionnement régionales" },
        { icon: Package, label: "Chaînes de distribution et entreprises d'approvisionnement alimentaire en vrac" },
      ]
    : [
        { icon: ShoppingCart, label: "Wholesale distributors & importers" },
        { icon: Store, label: "Commercial food and agricultural buyers" },
        { icon: Globe2, label: "Export brokers and regional supply chains" },
        { icon: Package, label: "Retail chains & bulk food supply businesses" },
      ];

  const modelSteps = fr
    ? [
        { icon: Wheat, label: "ShipDirect approvisionne", desc: "Nous procurons vos produits requis auprès de fournisseurs canadiens" },
        { icon: ClipboardList, label: "ShipDirect exporte", desc: "Nous gérons la documentation, la logistique des conteneurs et l'expédition" },
        { icon: Ship, label: "Les marchandises arrivent au port", desc: "Livraison au port sénégalais désigné" },
        { icon: Factory, label: "Vous prenez le relais", desc: "Le dédouanement portuaire, la douane et la distribution sont la responsabilité du client", gold: true },
      ]
    : [
        { icon: Wheat, label: "ShipDirect Sources", desc: "We procure your required products from Canadian suppliers" },
        { icon: ClipboardList, label: "ShipDirect Exports", desc: "We handle documentation, container logistics, and shipping" },
        { icon: Ship, label: "Goods Arrive at Port", desc: "Delivery to designated Senegalese port" },
        { icon: Factory, label: "You Take Over", desc: "Port clearance, customs, and distribution are the client's responsibility", gold: true },
      ];

  const heroStats = fr
    ? [
        { icon: Wheat, title: "Produits canadiens de qualité supérieure", desc: "Légumineuses, épices et produits moulus" },
        { icon: Ship, title: "Coordination d'exportation complète", desc: "De l'approvisionnement à la livraison au port au Sénégal" },
        { icon: Factory, title: "Capacité de volume commercial", desc: "Pour les grossistes, distributeurs et importateurs" },
        { icon: Handshake, title: "Support B2B dédié", desc: "Devis personnalisés et gestion de compte" },
      ]
    : [
        { icon: Wheat, title: "Premium Canadian Products", desc: "Pulses, legumes, spices & ground products" },
        { icon: Ship, title: "Full Export Coordination", desc: "From sourcing to port delivery in Senegal" },
        { icon: Factory, title: "Commercial Volume Capacity", desc: "For wholesalers, distributors & importers" },
        { icon: Handshake, title: "Dedicated B2B Support", desc: "Tailored quotes and account management" },
      ];

  return (
    <main>
      <PageHero
        tone="gold"
        eyebrow={fr ? "Gros et exportation B2B" : "Wholesale & B2B Export"}
        eyebrowIcon={Factory}
        title={fr ? "Votre partenaire canadien d'approvisionnement et d'exportation pour le Sénégal" : "Your Canadian Supply & Export Partner for Senegal"}
        subtitle={fr
          ? "ShipDirect source des produits agricoles canadiens de qualité supérieure et coordonne l'exportation complète vers les ports sénégalais — offrant à votre entreprise une chaîne d'approvisionnement fiable et rationalisée depuis l'Amérique du Nord. Vous vous concentrez sur la distribution. Nous gérons tout en amont."
          : "ShipDirect sources premium Canadian agricultural products and coordinates full export to Senegalese ports — giving your business a reliable, streamlined supply chain from North America. You focus on distribution. We handle everything upstream."}
        image={{ src: "/images/wholesale-container.jpg", alt: fr ? "Chargement de sacs de légumineuses dans un conteneur au port" : "Sacks of pulses being loaded into a shipping container at port" }}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="gold" size="xl" className="shimmer-btn">
            <Link href="/quote">
              {fr ? "Renseignez-vous sur le gros" : "Inquire About Wholesale"}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild variant="outline-light" size="xl">
            <a href="tel:6137002747">
              <Phone data-icon="inline-start" />
              {fr ? "Appeler le 613-700-2747" : "Call 613-700-2747"}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* ── STATS BAR ── */}
      <section className="border-t border-white/5 bg-[#08133b] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollFadeUp className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <IconTile icon={item.icon} tone="gold" />
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-xs text-blue-200">{item.desc}</div>
                </div>
              </div>
            ))}
          </ScrollFadeUp>
        </div>
      </section>

      {/* ── B2B MODEL EXPLAINER ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <ScrollFadeUp className="space-y-5">
              <div className="text-xs font-bold tracking-[0.18em] text-brand-gold uppercase">B2B</div>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                {fr ? "Comment fonctionne notre modèle B2B" : "How Our B2B Model Works"}
              </h2>
              <p className="text-lg leading-relaxed text-body">
                {fr
                  ? "La division grossiste de ShipDirect a été créée pour les acheteurs commerciaux, distributeurs et importateurs au Sénégal qui ont besoin d'une chaîne d'approvisionnement fiable et efficace depuis le Canada. Nous gérons le côté approvisionnement et coordonnons l'exportation vers le port — vous permettant de vous concentrer sur ce que vous faites le mieux."
                  : "ShipDirect's wholesale division was created for commercial buyers, distributors, and importers in Senegal who need a trustworthy, efficient supply chain from Canada. We handle the supply side and coordinate export to port — allowing you to focus on what you do best."}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {fr
                  ? "Nous travaillons directement avec des producteurs et fournisseurs agricoles canadiens pour vous procurer les produits dont vous avez besoin, en volumes commerciaux, avec une cohérence et une qualité sur lesquelles vous pouvez compter."
                  : "We work directly with Canadian agricultural producers and suppliers to source the products you need, at commercial volumes, with consistency and quality you can depend on."}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {fr
                  ? "Notre modèle est intentionnellement propre et clairement défini : ShipDirect livre au port. Une fois votre envoi arrivé au port désigné au Sénégal, votre équipe prend le relais — dédouanement côté port, procédures douanières et toute distribution en aval sont votre responsabilité."
                  : "Our model is intentionally clean and clearly defined: ShipDirect delivers to port. Once your shipment arrives at the designated port in Senegal, your team takes over — port clearance, customs procedures, and all onward distribution are your responsibility."}
              </p>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.1}>
              <Card className="gap-0 rounded-3xl border-brand-navy bg-brand-navy p-7 text-white shadow-[var(--shadow-card-hover)] sm:p-8">
                <h3 className="mb-6 text-xs font-bold tracking-wider text-[#E0A84A] uppercase">
                  {fr ? "Le modèle B2B" : "The B2B Model"}
                </h3>
                <ol className="space-y-3">
                  {modelSteps.map((item, i) => (
                    <li key={i} className={cn("flex items-start gap-4 rounded-2xl p-4", item.gold ? "border border-brand-gold/40 bg-brand-gold/15" : "bg-white/5")}>
                      <IconTile icon={item.icon} tone={item.gold ? "gold" : "light"} />
                      <div>
                        <div className={cn("mb-0.5 text-sm font-bold", item.gold ? "text-[#E0A84A]" : "text-white")}>{item.label}</div>
                        <div className="text-sm text-blue-200">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-off-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={fr ? "Conçu pour les acheteurs sérieux au Sénégal" : "Built for Serious Buyers in Senegal"}
            subtitle={fr ? "Notre service B2B est conçu pour les acheteurs commerciaux qui ont besoin de fiabilité, de volume et d'une chaîne d'approvisionnement propre." : "Our B2B service is designed for commercial buyers who need reliability, volume, and a clean supply chain."}
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buyerTypes.map((item, i) => (
              <ScrollFadeUp key={i} delay={i * 0.06}>
                <Card className="h-full items-center gap-4 rounded-3xl border-transparent p-6 text-center shadow-[var(--shadow-card)]">
                  <IconTile icon={item.icon} tone="gold" className="size-12" />
                  <p className="text-sm font-semibold text-brand-navy">{item.label}</p>
                </Card>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={fr ? "Produits canadiens que nous exportons" : "Canadian Products We Export"}
            subtitle={fr ? "Qualité supérieure, volumes commerciaux, approvisionnement constant." : "Premium quality, commercial volumes, consistent supply."}
          />
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => (
              <ScrollFadeUp key={i} delay={(i % 3) * 0.06}>
                <Card className="h-full gap-0 overflow-hidden rounded-3xl py-0 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center gap-3 bg-brand-navy px-6 py-4">
                    <IconTile icon={cat.icon} tone="gold" className="size-9" />
                    <h3 className="font-bold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 p-6">
                    {cat.products.map((p, j) => (
                      <Badge key={j} variant="secondary" className="h-auto rounded-full bg-navy-tint px-2.5 py-1 text-xs font-medium text-brand-navy">{p}</Badge>
                    ))}
                  </div>
                </Card>
              </ScrollFadeUp>
            ))}
          </div>
          <ScrollFadeUp>
            <Card className="flex-col items-center gap-4 rounded-3xl border-transparent bg-off-white p-6 text-center shadow-none sm:flex-row sm:justify-between sm:text-left">
              <p className="text-sm text-body">
                {fr ? "Vous ne trouvez pas un produit spécifique ? Contactez-nous — nous travaillons avec un large réseau de fournisseurs canadiens." : "Don't see a specific product or grade? Contact us — we work with a wide network of Canadian suppliers and can often source specialty products on request."}
              </p>
              <Button asChild variant="gold" size="xl" className="shrink-0">
                <a href="mailto:info@shipdirect.ca">
                  <Mail data-icon="inline-start" />
                  {fr ? "Contacter pour une demande de produit" : "Contact for Product Inquiry"}
                </a>
              </Button>
            </Card>
          </ScrollFadeUp>
        </div>
      </section>

      {/* ── B2B EXPORT PROCESS ── */}
      <section className="bg-brand-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            title={fr ? "Le processus d'exportation B2B" : "The B2B Export Process"}
            subtitle={fr ? "Un processus rationalisé conçu pour les acheteurs commerciaux." : "A streamlined process built for commercial buyers."}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {b2bSteps.map((step, i) => (
              <ScrollFadeUp key={i} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 text-4xl font-extrabold tracking-tight text-[#E0A84A] tabular-nums">{step.n}</div>
                  <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-blue-200">{step.desc}</p>
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES CHOOSE US ── */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={fr ? "Pourquoi les entreprises nous choisissent" : "Why Businesses Choose Us"}
            subtitle={fr ? "Conçu autour des besoins réels des acheteurs commerciaux au Sénégal." : "Built around the real needs of commercial buyers in Senegal."}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <ScrollFadeUp key={i} delay={(i % 3) * 0.06}>
                <FeatureCard icon={card.icon} title={card.title} desc={card.desc} />
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={fr ? "Prêt à s'approvisionner ?" : "Ready to Source?"}
        title={fr ? "Construisons votre chaîne d'approvisionnement" : "Let's Build Your Supply Chain"}
        subtitle={fr ? "Contactez ShipDirect aujourd'hui pour discuter de vos besoins en gros. Nous vous fournirons un devis détaillé et personnalisé." : "Contact ShipDirect today to discuss your wholesale requirements. We'll provide a detailed, customized quote for your products and volumes."}
      >
        <Button asChild variant="gold" size="xl" className="shimmer-btn">
          <a href="mailto:info@shipdirect.ca">
            <Mail data-icon="inline-start" />
            {fr ? "Email pour demande B2B" : "Email for B2B Inquiry"}
          </a>
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
