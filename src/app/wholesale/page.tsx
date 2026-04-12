import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale Export to Senegal | ShipDirect",
  description:
    "ShipDirect sources premium Canadian agricultural products and coordinates export to Senegal for wholesale buyers, distributors, and importers.",
};

const productCategories = [
  {
    icon: "🫘",
    name: "Chickpeas",
    products: ["Kabuli Chickpeas", "Desi Chickpeas", "Chana Dahl"],
  },
  {
    icon: "🌱",
    name: "Peas",
    products: ["Whole Green Peas", "Whole Yellow Peas", "Split Yellow Peas", "Split Green Peas"],
  },
  {
    icon: "🔴",
    name: "Lentils",
    products: [
      "Whole Red Lentils",
      "Whole Large Green Lentils",
      "Small Green Lentils",
      "Split Red Lentils",
      "Decorticated Whole Red Lentils",
      "Split Yellow Lentils",
    ],
  },
  {
    icon: "🫘",
    name: "Beans",
    products: [
      "Light Red Kidney Beans",
      "Dark Red Kidney Beans",
      "Small Red Beans",
      "Navy Beans",
      "Black Beans",
      "Pinto Beans",
    ],
  },
  {
    icon: "🌿",
    name: "Spices & Seeds",
    products: [
      "Brown Mustard",
      "Yellow Mustard",
      "Oriental Mustard",
      "Whole / Fine Cracked Coriander",
      "Caraway",
      "Flax",
    ],
  },
  {
    icon: "🌾",
    name: "Ground Products & Flours",
    products: [
      "Ground Coriander",
      "Chickpea Flour",
      "Yellow Pea Flour",
      "Lentil Flour",
      "Bean Flour",
      "Flax Flour",
    ],
  },
];

const b2bSteps = [
  {
    n: "01",
    title: "Inquiry & Quote",
    desc: "Contact ShipDirect with your product requirements, volumes, and timeline. We provide a detailed commercial quote.",
  },
  {
    n: "02",
    title: "Order Confirmation",
    desc: "Terms agreed. We begin sourcing and procurement from our Canadian supplier network.",
  },
  {
    n: "03",
    title: "Export Coordination",
    desc: "Product preparation, export documentation, container booking, and shipping logistics handled by ShipDirect.",
  },
  {
    n: "04",
    title: "Port Delivery & Handover",
    desc: "Goods arrive at the designated Senegalese port. Your team takes over for clearance and distribution.",
  },
];

const whyCards = [
  {
    icon: "🌾",
    title: "Direct Canadian Sourcing",
    desc: "We work directly with Canadian agricultural producers, ensuring product quality, consistency, and competitive pricing.",
  },
  {
    icon: "📋",
    title: "Export Expertise",
    desc: "We handle all documentation, container logistics, and shipping coordination from Canada to port.",
  },
  {
    icon: "📦",
    title: "Wide Product Range",
    desc: "Six product categories. Commercial volumes. Consistent supply you can plan around.",
  },
  {
    icon: "🤝",
    title: "Dedicated Account Management",
    desc: "B2B clients receive dedicated support, custom quotes, and responsive communication per order.",
  },
  {
    icon: "🚢",
    title: "Reliable Port Delivery",
    desc: "We commit to delivering your goods to port, documented and on schedule.",
  },
  {
    icon: "💼",
    title: "Trade-Ready Operations",
    desc: "ShipDirect operates as a professional supply and export partner — not a broker. We own our side of every order.",
  },
];

export default function WholesalePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C4882A]/20 text-[#C4882A] rounded-full px-4 py-1.5 text-sm font-bold mb-6 uppercase tracking-wide">
                🏭 Wholesale & B2B Export
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                Your Canadian Supply & Export Partner for Senegal
              </h1>
              <p className="text-lg text-blue-200 leading-relaxed mb-8">
                ShipDirect sources premium Canadian agricultural products and
                coordinates full export to Senegalese ports — giving your business a
                reliable, streamlined supply chain from North America. You focus on
                distribution. We handle everything upstream.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#C4882A] text-white font-bold rounded-xl hover:bg-[#a87022] transition-colors"
                >
                  Inquire About Wholesale →
                </Link>
                <a
                  href="tel:6137002747"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Call 613-700-2747
                </a>
              </div>
            </div>

            {/* Right: trust credentials */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "🌾", title: "Premium Canadian Products", desc: "Pulses, legumes, spices & ground products" },
                { icon: "🚢", title: "Full Export Coordination", desc: "From sourcing to port delivery in Senegal" },
                { icon: "🏭", title: "Commercial Volume Capacity", desc: "For wholesalers, distributors & importers" },
                { icon: "🤝", title: "Dedicated B2B Support", desc: "Tailored quotes and account management" },
              ].map((item, i) => (
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
            {/* Left copy */}
            <div className="space-y-5">
              <h2 className="text-3xl font-extrabold text-[#0D1F5C]">
                How Our B2B Model Works
              </h2>
              <p className="text-[#1A1410] leading-relaxed">
                ShipDirect&apos;s wholesale division was created for commercial buyers,
                distributors, and importers in Senegal who need a trustworthy, efficient
                supply chain from Canada. We handle the supply side and coordinate
                export to port — allowing you to focus on what you do best.
              </p>
              <p className="text-[#1A1410] leading-relaxed">
                We work directly with Canadian agricultural producers and suppliers to
                source the products you need, at commercial volumes, with consistency
                and quality you can depend on. Whether you&apos;re establishing a new
                supply line or scaling an existing one, ShipDirect provides the
                reliability and capability your business requires.
              </p>
              <p className="text-[#1A1410] leading-relaxed">
                Our model is intentionally clean and clearly defined: ShipDirect
                delivers to port. Once your shipment arrives at the designated port in
                Senegal, your team takes over — port clearance, customs procedures, and
                all onward distribution are your responsibility. This clarity makes the
                relationship efficient and professional for both sides.
              </p>
            </div>

            {/* Right: B2B model card */}
            <div className="bg-[#0D1F5C] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-[#C4882A] uppercase tracking-wider text-xs mb-6">
                The B2B Model
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "🌾", label: "ShipDirect Sources", desc: "We procure your required products from Canadian suppliers" },
                  { icon: "📋", label: "ShipDirect Exports", desc: "We handle documentation, container logistics, and shipping" },
                  { icon: "🚢", label: "Goods Arrive at Port", desc: "Delivery to designated Senegalese port" },
                  { icon: "🏭", label: "You Take Over", desc: "Port clearance, customs, and distribution are the client's responsibility", gold: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 rounded-xl ${
                      item.gold ? "bg-[#C4882A]/20 border border-[#C4882A]/40" : "bg-white/10"
                    }`}
                  >
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <div
                        className={`font-bold text-sm mb-0.5 ${
                          item.gold ? "text-[#C4882A]" : "text-white"
                        }`}
                      >
                        {item.label}
                      </div>
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
            Built for Serious Buyers in Senegal
          </h2>
          <p className="text-[#6B7280] mb-10">
            Our B2B service is designed for commercial buyers who need reliability, volume,
            and a clean supply chain.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🛒", label: "Wholesale distributors & importers" },
              { icon: "🏪", label: "Commercial food and agricultural buyers" },
              { icon: "🌍", label: "Export brokers and regional supply chains" },
              { icon: "📦", label: "Retail chains & bulk food supply businesses" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center gap-3"
              >
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
              Canadian Products We Export
            </h2>
            <p className="text-[#6B7280]">
              Premium quality, commercial volumes, consistent supply.
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
                      <span
                        key={j}
                        className="bg-[#EEF1F8] text-[#0D1F5C] text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F5F2ED] rounded-2xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-[#1A1410] mb-4">
              Don&apos;t see a specific product or grade? Contact us — we work with a wide
              network of Canadian suppliers and can often source specialty products on request.
            </p>
            <a
              href="mailto:info@shipdirect.ca"
              className="inline-flex items-center px-5 py-2.5 bg-[#C4882A] text-white font-semibold text-sm rounded-xl hover:bg-[#a87022] transition-colors"
            >
              ✉️ Contact for Product Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* ── B2B EXPORT PROCESS ── */}
      <section className="bg-[#0D1F5C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              The B2B Export Process
            </h2>
            <p className="text-blue-300">
              A streamlined process built for commercial buyers.
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
              Why Businesses Choose Us
            </h2>
            <p className="text-[#6B7280]">
              Built around the real needs of commercial buyers in Senegal.
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

      {/* ── WHOLESALE CTA BAND ── */}
      <section className="bg-[#0D1F5C] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none gold-glow"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C4882A]/20 text-[#C4882A] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide mb-5">
            Ready to Source?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let&apos;s Build Your Supply Chain
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Contact ShipDirect today to discuss your wholesale requirements. We&apos;ll
            provide a detailed, customized quote for your products and volumes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@shipdirect.ca"
              className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#C4882A] text-white font-bold rounded-xl hover:bg-[#a87022] transition-colors"
            >
              ✉️ Email for B2B Inquiry
            </a>
            <a
              href="tel:6137002747"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              📞 Call 613-700-2747
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
