"use client";

import { useEffect } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import ScrollFadeImg from "@/components/illustrations/ScrollFadeImg";
import { motion } from "framer-motion";

export default function FaqContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Questions fréquentes — Expédition Canada–Sénégal | ShipDirect"
      : "FAQs | ShipDirect Canada to Senegal";
  }, [fr]);

  const b2cFaqs = fr
    ? [
        { q: "Que puis-je expédier du Canada au Sénégal ?", a: "Vous pouvez expédier une large gamme de biens personnels incluant vêtements, articles ménagers, nourriture, électronique, meubles (sofas, tables) et véhicules (berlines, VUS, camions). Nous expédions via des sacs Costco, petites boîtes, grandes boîtes, barils/fûts et exportation complète de véhicules. Si vous n'êtes pas sûr qu'un article soit éligible, contactez-nous avant de réserver." },
        { q: "Dois-je déposer mes marchandises à votre emplacement ?", a: "Notre processus standard est que les clients déposent leurs marchandises à notre emplacement d'Ottawa (adresse fournie à la confirmation). Si vous ne pouvez pas vous déplacer, nous pouvons organiser un ramassage pour un supplément selon votre distance." },
        { q: "Offrez-vous le ramassage au Canada ?", a: "Oui, nous pouvons organiser le ramassage au Canada pour un supplément. Les frais dépendent de votre distance de notre établissement d'Ottawa. Contactez-nous au 613-700-2747 ou info@shipdirect.ca pour demander un devis." },
        { q: "Où puis-je collecter mon envoi au Sénégal ?", a: "Tous les envois B2C arrivent à notre établissement de Keur Massar au Sénégal. Les destinataires collectent leurs marchandises là-bas sans frais supplémentaires. Apportez une pièce d'identité valide lors de la collecte." },
        { q: "Offrez-vous la livraison locale au Sénégal ?", a: "Oui. Si le destinataire ne peut pas collecter à Keur Massar, la livraison locale peut être organisée pour un supplément. Contactez-nous lors de la réservation pour discuter des options." },
        { q: "Combien de temps prend l'expédition du Canada au Sénégal ?", a: "Les délais de transit varient en fonction des horaires des navires et des délais de consolidation. Le fret maritime vers l'Afrique de l'Ouest prend généralement plusieurs semaines. Contactez-nous pour les estimations actuelles." },
        { q: "Vos prix incluent-ils la douane ou les frais portuaires ?", a: "Non. Nos prix couvrent uniquement l'expédition du Canada vers le Sénégal. Les droits de douane, les frais de manutention portuaire et tous frais liés à l'importation au Sénégal sont à la charge du destinataire." },
        { q: "Puis-je expédier un véhicule au Sénégal ?", a: "Oui. Nous expédions les berlines pour 1 600 $ CAD et les VUS ou camions pour 1 700 $ CAD, aller simple. Contactez-nous pour les exigences de préparation et la documentation. Les réglementations d'importation sont la responsabilité du client." },
        { q: "Puis-je expédier des meubles ou des articles volumineux ?", a: "Oui. Nous expédions des sofas et pièces de mobilier standard pour 500 $ CAD. Pour d'autres articles surdimensionnés, contactez-nous pour confirmer l'éligibilité. Les articles doivent être correctement emballés pour le transit maritime." },
        { q: "Comment puis-je demander un devis ?", a: "Trois façons : (1) Remplissez notre formulaire en ligne sur la page Obtenir un devis ; (2) Envoyez un email à info@shipdirect.ca ; ou (3) Appelez le 613-700-2747 pour parler directement à notre équipe." },
      ]
    : [
        { q: "What can I ship from Canada to Senegal?", a: "You can ship a wide range of personal goods including clothing, household items, food, electronics, furniture (sofas, tables), and vehicles (sedans, SUVs, trucks). We ship via Costco bags, small boxes, large boxes, barrels/drums, and full vehicle export. If you're unsure whether a specific item is eligible, contact us before booking and we'll confirm." },
        { q: "Do I need to drop off my goods at your location?", a: "Our standard process is for customers to drop off their goods at our Ottawa location (the exact address will be provided upon booking confirmation). If you're unable to bring goods in yourself, we can arrange pickup for an additional charge depending on your location and distance." },
        { q: "Do you offer pickup in Canada?", a: "Yes, we can arrange pickup in Canada for an additional charge. The fee depends on your location and distance from our Ottawa facility. Contact us at 613-700-2747 or info@shipdirect.ca to request a pickup quote before scheduling." },
        { q: "Where do I collect my shipment in Senegal?", a: "All B2C shipments arrive at our Keur Massar facility in Senegal. Recipients collect their goods there at no additional charge. We'll notify you when your shipment is ready. Bring valid identification when collecting." },
        { q: "Do you offer local delivery in Senegal?", a: "Yes. If the recipient cannot collect from Keur Massar, local delivery within Senegal can be arranged for an additional charge. Contact us when booking to discuss delivery options and fees." },
        { q: "How long does shipping take from Canada to Senegal?", a: "Transit times vary based on vessel schedules and consolidation timelines. Ocean freight to West Africa typically takes several weeks from departure. Contact us directly for current transit time estimates. We'll keep you updated on your shipment status." },
        { q: "Do your prices include customs or port fees?", a: "No. Our listed prices cover shipping from Canada to Senegal only. Customs duties, port handling fees, and any import-related charges in Senegal are the recipient's responsibility. We recommend familiarizing yourself with applicable import duties before shipping." },
        { q: "Can I ship a vehicle to Senegal?", a: "Yes. We ship sedans for $1,600 CAD and SUVs or trucks for $1,700 CAD, one-way. Contact us to discuss vehicle preparation requirements, documentation needed, and the shipping process. Import regulations and port procedures in Senegal are the client's responsibility." },
        { q: "Can I ship furniture or large items?", a: "Yes. We ship sofas and standard furniture pieces for $500 CAD. For other oversized or non-standard items, contact us to confirm eligibility and get an accurate quote. Items must be properly packed and wrapped for ocean transit." },
        { q: "How do I request a quote?", a: "Three ways: (1) Fill out our online quote form on the Get a Quote page; (2) Email info@shipdirect.ca with details about your shipment; or (3) Call 613-700-2747 to speak with our team directly." },
      ];

  const b2bFaqs = fr
    ? [
        { q: "Quels produits ShipDirect peut-il sourcer et exporter ?", a: "ShipDirect fournit des produits agricoles canadiens de qualité supérieure pour l'exportation en gros vers le Sénégal : pois chiches (Kabuli, Desi, Chana Dahl), pois (verts, jaunes, cassés), lentilles (rouges, vertes, jaunes), haricots (rouges, navy, noirs, pinto), épices (moutarde, coriandre, lin, carvi) et produits moulus (farines). Contactez-nous pour la disponibilité actuelle." },
        { q: "Gérez-vous l'approvisionnement auprès des fournisseurs ?", a: "Oui. ShipDirect source les produits directement auprès de fournisseurs canadiens et agit en tant que votre partenaire dédié. Vous ne gérez pas les fournisseurs individuels — nous gérons l'approvisionnement, la qualité et la logistique en votre nom." },
        { q: "ShipDirect gère-t-il le dédouanement portuaire au Sénégal ?", a: "Non. Notre service B2B couvre l'approvisionnement et la coordination d'exportation jusqu'au port. Une fois arrivé au port au Sénégal, vous êtes responsable du dédouanement, des procédures douanières et de toute la logistique en aval." },
        { q: "Pouvez-vous approvisionner des produits pour les grossistes au Sénégal ?", a: "Absolument. Notre service B2B est conçu pour les grossistes, distributeurs, importateurs et acheteurs commerciaux au Sénégal. Nous travaillons avec des entreprises de toutes tailles pour des commandes initiales et des contrats récurrents." },
        { q: "Comment sont établis les devis pour les commandes en gros B2B ?", a: "Les prix B2B sont personnalisés selon le produit, le volume et les spécifications. Contactez-nous à info@shipdirect.ca ou au 613-700-2747 avec vos besoins. Nous fournirons un devis commercial détaillé adapté à votre situation." },
        { q: "Que se passe-t-il une fois que mes marchandises arrivent au port au Sénégal ?", a: "ShipDirect livre au port. Une fois arrivé au port désigné, votre responsabilité commence — dédouanement, documentation d'importation, paiement des droits et transport vers votre installation de distribution." },
      ]
    : [
        { q: "What products can ShipDirect source and export?", a: "ShipDirect supplies premium Canadian agricultural products for wholesale export to Senegal. Our range includes chickpeas (Kabuli, Desi, Chana Dahl), peas (whole green, yellow, split), lentils (red, green, yellow, split), beans (kidney, navy, black, pinto), spices (mustard, coriander, flax, caraway), and ground products (flours and ground spices). Contact us for full product specifications and current availability." },
        { q: "Do you handle supplier sourcing?", a: "Yes. ShipDirect sources products directly from Canadian suppliers and acts as your dedicated supply and export partner. You don't manage individual suppliers — we handle product sourcing, quality, and export logistics on your behalf." },
        { q: "Does ShipDirect handle port clearance in Senegal?", a: "No. ShipDirect's B2B service covers product supply and export coordination up to port. Once your shipment arrives at port in Senegal, you and your team are responsible for port clearance, customs procedures, and all onward logistics from port to your distribution point." },
        { q: "Can you supply products for wholesalers and distributors in Senegal?", a: "Absolutely. Our B2B service is designed specifically for wholesalers, distributors, importers, and commercial buyers in Senegal who need a reliable Canadian supply partner. We work with businesses of varying sizes and can accommodate both initial orders and large-volume recurring contracts." },
        { q: "How are B2B wholesale orders quoted?", a: "B2B pricing is customized based on product type, volume, and shipping specifications. Contact us at info@shipdirect.ca or call 613-700-2747 with your product requirements and estimated volume. We'll provide a detailed commercial quote tailored to your needs." },
        { q: "What happens once my wholesale goods arrive at port in Senegal?", a: "ShipDirect delivers to port. Once your shipment arrives at the designated port in Senegal, your responsibility begins — this includes coordinating port-side procedures, customs clearance, import documentation, payment of applicable duties, and arranging onward transportation to your distribution facility." },
      ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollFadeUp>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
                  {fr ? "❓ Centre d'aide" : "❓ Help Centre"}
                </div>
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                  {fr ? "Questions fréquemment posées" : "Frequently Asked Questions"}
                </h1>
              </ScrollFadeUp>
              <ScrollFadeUp delay={0.2}>
                <p className="text-lg text-blue-200 leading-relaxed max-w-xl">
                  {fr ? "Tout ce que vous devez savoir sur l'expédition et l'exportation en gros avec ShipDirect." : "Everything you need to know about shipping and wholesale export with ShipDirect."}
                </p>
              </ScrollFadeUp>
            </div>
            <ScrollFadeUp delay={0.3}>
              <ScrollFadeImg src="/illustrations/faq_relaxed_reader_illustration.png" alt="Relaxed ShipDirect Customer Reading FAQs" priority />
            </ScrollFadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollFadeUp>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📦</span>
              <h2 className="text-xl font-extrabold text-[#0D1F5C]">
                {fr ? "Expédition personnelle" : "Personal Shipping"}
              </h2>
            </div>
            <FaqAccordion items={b2cFaqs} />
          </ScrollFadeUp>
          
          <ScrollFadeUp delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🏭</span>
              <h2 className="text-xl font-extrabold text-[#0D1F5C]">
                {fr ? "Gros et exportation B2B" : "Wholesale & B2B Export"}
              </h2>
            </div>
            <FaqAccordion items={b2bFaqs} />
          </ScrollFadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0D1F5C]">
        <ScrollFadeUp className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {fr ? "Vous avez encore des questions ?" : "Still Have Questions?"}
          </h2>
          <p className="text-blue-200 mb-8">
            {fr ? "Notre équipe est heureuse de vous aider. Contactez-nous et nous répondrons rapidement." : "Our team is happy to help. Reach out and we'll respond quickly."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a whileHover={{ scale: 1.03 }} href="mailto:info@shipdirect.ca" className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#b82424] transition-all">
              ✉️ info@shipdirect.ca
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} href="tel:6137002747" className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              📞 613-700-2747
            </motion.a>
          </div>
        </ScrollFadeUp>
      </section>
    </main>
  );
}
