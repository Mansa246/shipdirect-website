import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs | ShipDirect Canada to Senegal",
  description:
    "Frequently asked questions about shipping from Canada to Senegal with ShipDirect. Personal shipping and B2B wholesale export answered.",
};

const b2cFaqs = [
  {
    q: "What can I ship from Canada to Senegal?",
    a: "You can ship a wide range of personal goods including clothing, household items, food, electronics, furniture (sofas, tables), and vehicles (sedans, SUVs, trucks). We ship via Costco bags, small boxes, large boxes, barrels/drums, and full vehicle export. If you're unsure whether a specific item is eligible, contact us before booking and we'll confirm.",
  },
  {
    q: "Do I need to drop off my goods at your location?",
    a: "Our standard process is for customers to drop off their goods at our Ottawa location at 300 Miwate Pvt, Ottawa, ON K1R 0E8. If you're unable to bring goods in yourself, we can arrange pickup for an additional charge depending on your location and distance.",
  },
  {
    q: "Do you offer pickup in Canada?",
    a: "Yes, we can arrange pickup in Canada for an additional charge. The fee depends on your location and distance from our Ottawa facility. Contact us at 613-700-2747 or info@shipdirect.ca to request a pickup quote before scheduling.",
  },
  {
    q: "Where do I collect my shipment in Senegal?",
    a: "All B2C shipments arrive at our Keur Massar facility in Senegal. Recipients collect their goods there at no additional charge. We'll notify you when your shipment is ready. Bring valid identification when collecting.",
  },
  {
    q: "Do you offer local delivery in Senegal?",
    a: "Yes. If the recipient cannot collect from Keur Massar, local delivery within Senegal can be arranged for an additional charge. Contact us when booking to discuss delivery options and fees.",
  },
  {
    q: "How long does shipping take from Canada to Senegal?",
    a: "Transit times vary based on vessel schedules and consolidation timelines. Ocean freight to West Africa typically takes several weeks from departure. Contact us directly for current transit time estimates. We'll keep you updated on your shipment status.",
  },
  {
    q: "Do your prices include customs or port fees?",
    a: "No. Our listed prices cover shipping from Canada to Senegal only. Customs duties, port handling fees, and any import-related charges in Senegal are the recipient's responsibility. We recommend familiarizing yourself with applicable import duties before shipping.",
  },
  {
    q: "Can I ship a vehicle to Senegal?",
    a: "Yes. We ship sedans for $1,600 CAD and SUVs or trucks for $1,700 CAD, one-way. Contact us to discuss vehicle preparation requirements, documentation needed, and the shipping process. Import regulations and port procedures in Senegal are the client's responsibility.",
  },
  {
    q: "Can I ship furniture or large items?",
    a: "Yes. We ship sofas and standard furniture pieces for $500 CAD. For other oversized or non-standard items, contact us to confirm eligibility and get an accurate quote. Items must be properly packed and wrapped for ocean transit.",
  },
  {
    q: "How do I request a quote?",
    a: "Three ways: (1) Fill out our online quote form on the Get a Quote page; (2) Email info@shipdirect.ca with details about your shipment; or (3) Call 613-700-2747 to speak with our team directly.",
  },
];

const b2bFaqs = [
  {
    q: "What products can ShipDirect source and export?",
    a: "ShipDirect supplies premium Canadian agricultural products for wholesale export to Senegal. Our range includes chickpeas (Kabuli, Desi, Chana Dahl), peas (whole green, yellow, split), lentils (red, green, yellow, split), beans (kidney, navy, black, pinto), spices (mustard, coriander, flax, caraway), and ground products (flours and ground spices). Contact us for full product specifications and current availability.",
  },
  {
    q: "Do you handle supplier sourcing?",
    a: "Yes. ShipDirect sources products directly from Canadian suppliers and acts as your dedicated supply and export partner. You don't manage individual suppliers — we handle product sourcing, quality, and export logistics on your behalf.",
  },
  {
    q: "Does ShipDirect handle port clearance in Senegal?",
    a: "No. ShipDirect's B2B service covers product supply and export coordination up to port. Once your shipment arrives at port in Senegal, you and your team are responsible for port clearance, customs procedures, and all onward logistics from port to your distribution point.",
  },
  {
    q: "Can you supply products for wholesalers and distributors in Senegal?",
    a: "Absolutely. Our B2B service is designed specifically for wholesalers, distributors, importers, and commercial buyers in Senegal who need a reliable Canadian supply partner. We work with businesses of varying sizes and can accommodate both initial orders and large-volume recurring contracts.",
  },
  {
    q: "How are B2B wholesale orders quoted?",
    a: "B2B pricing is customized based on product type, volume, and shipping specifications. Contact us at info@shipdirect.ca or call 613-700-2747 with your product requirements and estimated volume. We'll provide a detailed commercial quote tailored to your needs.",
  },
  {
    q: "What happens once my wholesale goods arrive at port in Senegal?",
    a: "ShipDirect delivers to port. Once your shipment arrives at the designated port in Senegal, your responsibility begins — this includes coordinating port-side procedures, customs clearance, import documentation, payment of applicable duties, and arranging onward transportation to your distribution facility.",
  },
];

export default function FaqPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            ❓ Help Centre
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-blue-200">
            Everything you need to know about shipping and wholesale export with ShipDirect.
          </p>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* B2C Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📦</span>
              <h2 className="text-xl font-extrabold text-[#0D1F5C]">Personal Shipping</h2>
            </div>
            <FaqAccordion items={b2cFaqs} />
          </div>

          {/* B2B Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🏭</span>
              <h2 className="text-xl font-extrabold text-[#0D1F5C]">Wholesale & B2B Export</h2>
            </div>
            <FaqAccordion items={b2bFaqs} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0D1F5C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-blue-200 mb-8">
            Our team is happy to help. Reach out and we&apos;ll respond quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@shipdirect.ca"
              className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors"
            >
              ✉️ info@shipdirect.ca
            </a>
            <a
              href="tel:6137002747"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              📞 613-700-2747
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
