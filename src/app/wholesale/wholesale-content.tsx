"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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
        { icon: "🫘", name: "Pois chiches", products: ["Pois chiches Kabuli", "Pois chiches Desi", "Chana Dahl"] },
        { icon: "🌱", name: "Pois", products: ["Pois verts entiers", "Pois jaunes entiers", "Pois jaunes cassés", "Pois verts cassés"] },
        { icon: "🔴", name: "Lentilles", products: ["Lentilles rouges entières", "Grandes lentilles vertes entières", "Petites lentilles vertes", "Lentilles rouges cassées", "Lentilles rouges entières décortiquées", "Lentilles jaunes cassées"] },
        { icon: "🫘", name: "Haricots", products: ["Haricots rouges clairs", "Haricots rouges foncés", "Petits haricots rouges", "Haricots navy", "Haricots noirs", "Haricots pinto"] },
        { icon: "🌿", name: "Épices et graines", products: ["Moutarde brune", "Moutarde jaune", "Moutarde orientale", "Coriandre entière / finement concassée", "Carvi", "Lin"] },
        { icon: "🌾", name: "Produits moulus et farines", products: ["Coriandre moulue", "Farine de pois chiches", "Farine de pois jaunes", "Farine de lentilles", "Farine de haricots", "Farine de lin"] },
      ]
    : [
        { icon: "🫘", name: "Chickpeas", products: ["Kabuli Chickpeas", "Desi Chickpeas", "Chana Dahl"] },
        { icon: "🌱", name: "Peas", products: ["Whole Green Peas", "Whole Yellow Peas", "Split Yellow Peas", "Split Green Peas"] },
        { icon: "🔴", name: "Lentils", products: ["Whole Red Lentils", "Whole Large Green Lentils", "Small Green Lentils", "Split Red Lentils", "Decorticated Whole Red Lentils", "Split Yellow Lentils"] },
        { icon: "🫘", name: "Beans", products: ["Light Red Kidney Beans", "Dark Red Kidney Beans", "Small Red Beans", "Navy Beans", "Black Beans", "Pinto Beans"] },
        { icon: "🌿", name: "Spices & Seeds", products: ["Brown Mustard", "Yellow Mustard", "Oriental Mustard", "Whole / Fine Cracked Coriander", "Caraway", "Flax"] },
        { icon: "🌾", name: "Ground Products & Flours", products: ["Ground Coriander", "Chickpea Flour", "Yellow Pea Flour", "Lentil Flour", "Bean Flour", "Flax Flour"] },
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
        { icon: "🌾", title: "Approvisionnement direct canadien", desc: "Nous travaillons directement avec des producteurs agricoles canadiens, garantissant la qualité, la cohérence et des prix compétitifs." },
        { icon: "📋", title: "Expertise en exportation", desc: "Nous gérons toute la documentation, la logistique des conteneurs et la coordination d'expédition du Canada vers le port." },
        { icon: "📦", title: "Large gamme de produits", desc: "Six catégories de produits. Volumes commerciaux. Approvisionnement constant." },
        { icon: "🤝", title: "Gestion de compte dédiée", desc: "Les clients B2B bénéficient d'un support dédié, de devis personnalisés et d'une communication réactive." },
        { icon: "🚢", title: "Livraison fiable au port", desc: "Nous nous engageons à livrer vos marchandises au port, documentées et dans les délais." },
        { icon: "💼", title: "Opérations prêtes pour le commerce", desc: "ShipDirect opère en tant que partenaire professionnel — pas un courtier." },
      ]
    : [
        { icon: "🌾", title: "Direct Canadian Sourcing", desc: "We work directly with Canadian agricultural producers, ensuring product quality, consistency, and competitive pricing." },
        { icon: "📋", title: "Export Expertise", desc: "We handle all documentation, container logistics, and shipping coordination from Canada to port." },
        { icon: "📦", title: "Wide Product Range", desc: "Six product categories. Commercial volumes. Consistent supply you can plan around." },
        { icon: "🤝", title: "Dedicated Account Management", desc: "B2B clients receive dedicated support, custom quotes, and responsive communication per order." },
        { icon: "🚢", title: "Reliable Port Delivery", desc: "We commit to delivering your goods to port, documented and on schedule." },
        { icon: "💼", title: "Trade-Ready Operations", desc: "ShipDirect operates as a professional supply and export partner — not a broker. We own our side of every order." },
      ];

  const buyerTypes = fr
    ? [
        { icon: "🛒", label: "Distributeurs et importateurs en gros" },
        { icon: "🏪", label: "Acheteurs commerciaux de produits alimentaires et agricoles" },
        { icon: "🌍", label: "Courtiers à l'exportation et chaînes d'approvisionnement régionales" },
        { icon: "📦", label: "Chaînes de distribution et entreprises d'approvisionnement alimentaire en vrac" },
      ]
    : [
        { icon: "🛒", label: "Wholesale distributors & importers" },
        { icon: "🏪", label: "Commercial food and agricultural buyers" },
        { icon: "🌍", label: "Export brokers and regional supply chains" },
        { icon: "📦", label: "Retail chains & bulk food supply businesses" },
      ];

  const modelSteps = fr
    ? [
        { icon: "🌾", label: "ShipDirect approvisionne", desc: "Nous procurons vos produits requis auprès de fournisseurs canadiens" },
        { icon: "📋", label: "ShipDirect exporte", desc: "Nous gérons la documentation, la logistique des conteneurs et l'expédition" },
        { icon: "🚢", label: "Les marchandises arrivent au port", desc: "Livraison au port sénégalais désigné" },
        { icon: "🏭", label: "Vous prenez le relais", desc: "Le dédouanement portuaire, la douane et la distribution sont la responsabilité du client", gold: true },
      ]
    : [
        { icon: "🌾", label: "ShipDirect Sources", desc: "We procure your required products from Canadian suppliers" },
        { icon: "📋", label: "ShipDirect Exports", desc: "We handle documentation, container logistics, and shipping" },
        { icon: "🚢", label: "Goods Arrive at Port", desc: "Delivery to designated Senegalese port" },
        { icon: "🏭", label: "You Take Over", desc: "Port clearance, customs, and distribution are the client's responsibility", gold: true },
      ];

  const heroStats = fr
    ? [
        { icon: "🌾", title: "Produits canadiens de qualité supérieure", desc: "Légumineuses, épices et produits moulus" },
        { icon: "🚢", title: "Coordination d'exportation complète", desc: "De l'approvisionnement à la livraison au port au Sénégal" },
        { icon: "🏭", title: "Capacité de volume commercial", desc: "Pour les grossistes, distributeurs et importateurs" },
        { icon: "🤝", title: "Support B2B dédié", desc: "Devis personnalisés et gestion de compte" },
      ]
    : [
        { icon: "🌾", title: "Premium Canadian Products", desc: "Pulses, legumes, spices & ground products" },
        { icon: "🚢", title: "Full Export Coordination", desc: "From sourcing to port delivery in Senegal" },
        { icon: "🏭", title: "Commercial Volume Capacity", desc: "For wholesalers, distributors & importers" },
        { icon: "🤝", title: "Dedicated B2B Support", desc: "Tailored quotes and account management" },
      ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C4882A]/20 text-[#C4882A] rounded-full px-4 py-1.5 text-sm font-bold mb-6 uppercase tracking-wide">
                {fr ? "🏭 Gros et exportation B2B" : "🏭 Wholesale & B2B Export"}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                {fr ? "Votre partenaire canadien d'approvisionnement et d'exportation pour le Sénégal" : "Your Canadian Supply & Export Partner for Senegal"}
              </h1>
              <p className="text-lg text-blue-200 leading-relaxed mb-8">
                {fr
                  ? "ShipDirect source des produits agricoles canadiens de qualité supérieure et coordonne l'exportation complète vers les ports sénégalais — offrant à votre entreprise une chaîne d'approvisionnement fiable et rationalisée depuis l'Amérique du Nord. Vous vous concentrez sur la distribution. Nous gérons tout en amont."
                  : "ShipDirect sources premium Canadian agricultural products and coordinates full export to Senegalese ports — giving your business a reliable, streamlined supply chain from North America. You focus on distribution. We handle everything upstream."}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#C4882A] text-white font-bold rounded-xl hover:bg-[#a87022] transition-colors">
                  {fr ? "Renseignez-vous sur le gros →" : "Inquire About Wholesale →"}
                </Link>
                <a href="tel:6137002747" className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  {fr ? "Appeler le 613-700-2747" : "Call 613-700-2747"}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {heroStats.map((item, i) => (
                <div key={i} className="bg-white/10 rounded-2xl px-5 py-4 border border-white/20 flex items-start gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm mb-0.5">{item.title}</div>
                    <div className="text-xs text-blue-200">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── B2B MODEL EXPLAINER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl font-extrabold text-[#0D1F5C]">
                {fr ? "Comment fonctionne notre modèle B2B" : "How Our B2B Model Works"}
              </h2>
              <p className="text-[#1A1410] leading-relaxed">
                {fr
                  ? "La division grossiste de ShipDirect a été créée pour les acheteurs commerciaux, distributeurs et importateurs au Sénégal qui ont besoin d'une chaîne d'approvisionnement fiable et efficace depuis le Canada. Nous gérons le côté approvisionnement et coordonnons l'exportation vers le port — vous permettant de vous concentrer sur ce que vous faites le mieux."
                  : "ShipDirect's wholesale division was created for commercial buyers, distributors, and importers in Senegal who need a trustworthy, efficient supply chain from Canada. We handle the supply side and coordinate export to port — allowing you to focus on what you do best."}
              </p>
              <p className="text-[#1A1410] leading-relaxed">
                {fr
                  ? "Nous travaillons directement avec des producteurs et fournisseurs agricoles canadiens pour vous procurer les produits dont vous avez besoin, en volumes commerciaux, avec une cohérence et une qualité sur lesquelles vous pouvez compter."
                  : "We work directly with Canadian agricultural producers and suppliers to source the products you need, at commercial volumes, with consistency and quality you can depend on."}
              </p>
              <p className="text-[#1A1410] leading-relaxed">
                {fr
                  ? "Notre modèle est intentionnellement propre et clairement défini : ShipDirect livre au port. Une fois votre envoi arrivé au port désigné au Sénégal, votre équipe prend le relais — dédouanement côté port, procédures douanières et toute distribution en aval sont votre responsabilité."
                  : "Our model is intentionally clean and clearly defined: ShipDirect delivers to port. Once your shipment arrives at the designated port in Senegal, your team takes over — port clearance, customs procedures, and all onward distribution are your responsibility."}
              </p>
            </div>
            <div className="bg-[#0D1F5C] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-[#C4882A] uppercase tracking-wider text-xs mb-6">
                {fr ? "Le modèle B2B" : "The B2B Model"}
              </h3>
              <div className="space-y-4">
                {modelSteps.map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${item.gold ? "bg-[#C4882A]/20 border border-[#C4882A]/40" : "bg-white/10"}`}>
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <div className={`font-bold text-sm mb-0.5 ${item.gold ? "text-[#C4882A]" : "text-white"}`}>{item.label}</div>
                      <div className="text-xs text-blue-200">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#0D1F5C] mb-3">
            {fr ? "Conçu pour les acheteurs sérieux au Sénégal" : "Built for Serious Buyers in Senegal"}
          </h2>
          <p className="text-[#6B7280] mb-10">
            {fr ? "Notre service B2B est conçu pour les acheteurs commerciaux qui ont besoin de fiabilité, de volume et d'une chaîne d'approvisionnement propre." : "Our B2B service is designed for commercial buyers who need reliability, volume, and a clean supply chain."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {buyerTypes.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-sm font-semibold text-[#0D1F5C] text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Produits canadiens que nous exportons" : "Canadian Products We Export"}
            </h2>
            <p className="text-[#6B7280]">
              {fr ? "Qualité supérieure, volumes commerciaux, approvisionnement constant." : "Premium quality, commercial volumes, consistent supply."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {productCategories.map((cat, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-[#0D1F5C] px-5 py-3 flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-bold text-white text-sm">{cat.name}</h3>
                </div>
                <div className="bg-white p-5">
                  <div className="flex flex-wrap gap-2">
                    {cat.products.map((p, j) => (
                      <span key={j} className="bg-[#EEF1F8] text-[#0D1F5C] text-xs font-medium px-2.5 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F5F2ED] rounded-2xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-[#1A1410] mb-4">
              {fr ? "Vous ne trouvez pas un produit spécifique ? Contactez-nous — nous travaillons avec un large réseau de fournisseurs canadiens." : "Don't see a specific product or grade? Contact us — we work with a wide network of Canadian suppliers and can often source specialty products on request."}
            </p>
            <a href="mailto:info@shipdirect.ca" className="inline-flex items-center px-5 py-2.5 bg-[#C4882A] text-white font-semibold text-sm rounded-xl hover:bg-[#a87022] transition-colors">
              {fr ? "✉️ Contacter pour une demande de produit" : "✉️ Contact for Product Inquiry"}
            </a>
          </div>
        </div>
      </section>

      {/* ── B2B EXPORT PROCESS ── */}
      <section className="bg-[#0D1F5C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              {fr ? "Le processus d'exportation B2B" : "The B2B Export Process"}
            </h2>
            <p className="text-blue-300">
              {fr ? "Un processus rationalisé conçu pour les acheteurs commerciaux." : "A streamlined process built for commercial buyers."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bSteps.map((step, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-extrabold text-[#C4882A] mb-4">{step.n}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0D1F5C] mb-3">
              {fr ? "Pourquoi les entreprises nous choisissent" : "Why Businesses Choose Us"}
            </h2>
            <p className="text-[#6B7280]">
              {fr ? "Conçu autour des besoins réels des acheteurs commerciaux au Sénégal." : "Built around the real needs of commercial buyers in Senegal."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-[#F5F2ED] rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-[#0D1F5C] mb-2">{card.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHOLESALE CTA ── */}
      <section className="bg-[#0D1F5C] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none gold-glow" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C4882A]/20 text-[#C4882A] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide mb-5">
            {fr ? "Prêt à s'approvisionner ?" : "Ready to Source?"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {fr ? "Construisons votre chaîne d'approvisionnement" : "Let's Build Your Supply Chain"}
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            {fr ? "Contactez ShipDirect aujourd'hui pour discuter de vos besoins en gros. Nous vous fournirons un devis détaillé et personnalisé." : "Contact ShipDirect today to discuss your wholesale requirements. We'll provide a detailed, customized quote for your products and volumes."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@shipdirect.ca" className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#C4882A] text-white font-bold rounded-xl hover:bg-[#a87022] transition-colors">
              {fr ? "✉️ Email pour demande B2B" : "✉️ Email for B2B Inquiry"}
            </a>
            <a href="tel:6137002747" className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              {fr ? "📞 Appeler le 613-700-2747" : "📞 Call 613-700-2747"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
