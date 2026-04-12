import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "ShipDirect | Canada to Senegal Shipping & Export",
  description:
    "Ship anything from Canada to Senegal. Personal boxes, barrels, furniture, vehicles, and wholesale B2B export. Flat-rate CAD pricing. Ottawa drop-off. Keur Massar delivery.",
};

const pricingPreview = [
  { icon: "🛍️", name: "Costco Bag", price: "$75 CAD" },
  { icon: "📦", name: "Small Box (23kg)", price: "$100 CAD" },
  {
    icon: "📫",
    name: "Big Box (32kg)",
    price: "$150 CAD",
    popular: true,
  },
  { icon: "🛢️", name: "Baril / Drum (50–60kg)", price: "$250 CAD" },
];

const heroCards = [
  { icon: "📦", name: "Small Box (23kg)", price: "$100 CAD" },
  { icon: "🛢️", name: "Baril / Drum (50–60kg)", price: "$250 CAD" },
  { icon: "🛋️", name: "Sofa / Furniture", price: "$500 CAD" },
  { icon: "🚗", name: "Sedan (Vehicle)", price: "$1,600 CAD" },
  { icon: "🏭", name: "Wholesale / B2B Export", price: "Learn More →", gold: true },
];

const howItWorksSteps = [
  {
    n: "01",
    title: "Request a Quote",
    desc: "Fill out the form or call us. We confirm your shipment details and pricing.",
  },
  {
    n: "02",
    title: "Drop Off or Schedule Pickup",
    desc: "Bring goods to Ottawa, or we arrange pickup for an extra fee.",
  },
  {
    n: "03",
    title: "We Handle Shipping",
    desc: "Preparation, documentation, and dispatch to Senegal.",
  },
  {
    n: "04",
    title: "Arrives in Senegal",
    desc: "Goods arrive at Keur Massar, ready for collection.",
  },
  {
    n: "05",
    title: "Collect or Get Delivered",
    desc: "Pickup in Keur Massar, or request local Senegal delivery for extra charge.",
  },
];

const whyCards = [
  {
    icon: "🎯",
    title: "Specialized Route Expertise",
    desc: "We focus exclusively on Canada-to-Senegal. That specialization means better processes, fewer delays, and fewer surprises.",
  },
  {
    icon: "💰",
    title: "Transparent Flat-Rate Pricing",
    desc: "Know exactly what you'll pay before you ship. Clear rates in CAD. No hidden fees.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family & Community-Focused",
    desc: "We serve the Senegalese diaspora in Canada. We know you're not just sending goods — you're sending support home.",
  },
  {
    icon: "🚗",
    title: "Everything Ships — Including Vehicles",
    desc: "From a Costco bag to a full SUV, we have the capacity and logistics network to handle every size.",
  },
  {
    icon: "📍",
    title: "Convenient Ottawa Location",
    desc: "Drop off at our Ottawa facility or arrange pickup. Collect in Keur Massar or request Senegal local delivery.",
  },
  {
    icon: "🤝",
    title: "B2B & Wholesale Capable",
    desc: "We supply and export commercial volumes of Canadian goods to wholesale buyers in Senegal. Trade-ready, reliable, accountable.",
  },
];

const faqPreview = [
  {
    q: "What can I ship from Canada to Senegal?",
    a: "You can ship a wide range of personal goods including clothing, household items, food, electronics, furniture (sofas, tables), and vehicles (sedans, SUVs, trucks). We ship via Costco bags, small boxes, large boxes, barrels/drums, and full vehicle export. Contact us if you're unsure about a specific item.",
  },
  {
    q: "Do prices include customs or port fees?",
    a: "No. Our listed prices cover shipping from Canada to Senegal only. Customs duties, port handling fees, and any import-related charges in Senegal are the recipient's responsibility.",
  },
  {
    q: "Do you offer pickup in Canada?",
    a: "Yes, we can arrange pickup in Canada for an additional charge. The fee depends on your location and distance from our Ottawa facility. Contact us at 613-700-2747 or info@shipdirect.ca to request a pickup quote.",
  },
  {
    q: "Where do I collect my shipment in Senegal?",
    a: "All B2C shipments arrive at our Keur Massar facility in Senegal. Recipients collect their goods there at no additional charge. We'll notify you when your shipment is ready.",
  },
  {
    q: "Can I ship a car or vehicle?",
    a: "Yes. We ship sedans for $1,600 CAD and SUVs or trucks for $1,700 CAD, one-way. Contact us to discuss vehicle preparation requirements and documentation needed.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-6">
                🚢 Canada → Senegal Shipping
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Ship Anything.{" "}
                <span className="text-[#D42B2B]">Anywhere in Senegal.</span>{" "}
                We Handle the Rest.
              </h1>
              <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-lg">
                From personal packages and barrels to vehicles and wholesale exports
                — ShipDirect connects Canada to Senegal with transparent pricing,
                reliable logistics, and trusted service.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/quote"
                  className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors text-base"
                >
                  Get a Free Quote →
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base"
                >
                  View Pricing
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6">
                {[
                  { value: "Ottawa", label: "Drop-off Location" },
                  { value: "Keur Massar", label: "Destination, Senegal" },
                  { value: "B2C + B2B", label: "Personal & Wholesale" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-xs text-blue-300">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating pricing cards */}
            <div className="relative flex flex-col gap-3">
              {heroCards.map((card, i) => (
                <div
                  key={i}
                  className="float-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <span
                      className={`font-semibold text-sm ${
                        (card as { gold?: boolean }).gold ? "text-[#C4882A]" : "text-white"
                      }`}
                    >
                      {card.name}
                    </span>
                  </div>
                  <span
                    className={`font-bold text-sm ${
                      (card as { gold?: boolean }).gold ? "text-[#C4882A]" : "text-blue-200"
                    }`}
                  >
                    {card.price}
                  </span>
                </div>
              ))}
            </div>
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
              Two Ways We Ship for You
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Personal shipping for families and communities. Wholesale export for businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* B2C Card */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0D1F5C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-5">
                📦 Personal Shipping · B2C
              </div>
              <h3 className="text-2xl font-extrabold text-[#0D1F5C] mb-3">
                Send Anything From Canada to Senegal
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Boxes, bags, barrels, furniture, and vehicles — shipped from Ottawa
                directly to Keur Massar, Senegal. Simple pricing. No surprises.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Costco bags, small & big boxes, barrels",
                  "Furniture and oversized items",
                  "Vehicles (sedans, SUVs, trucks)",
                  "Drop-off in Ottawa or paid pickup available",
                  "Pickup in Keur Massar or paid local delivery in Senegal",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#1A1410]">
                    <span className="text-[#D42B2B] mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="inline-flex items-center px-5 py-2.5 bg-[#D42B2B] text-white font-semibold text-sm rounded-xl hover:bg-[#b82424] transition-colors"
              >
                View Pricing →
              </Link>
            </div>

            {/* B2B Card */}
            <div className="rounded-2xl p-8 bg-[#0D1F5C] text-white hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center gap-2 bg-[#C4882A]/20 text-[#C4882A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-5">
                🏭 Wholesale Supply & Export · B2B
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Source Canadian Goods. Export to Senegal.
              </h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                ShipDirect partners with wholesalers and commercial buyers in Senegal
                to supply premium Canadian agricultural products and coordinate full
                export to port.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Direct product sourcing from Canada",
                  "Chickpeas, peas, lentils, beans, spices & more",
                  "Export coordination and port delivery",
                  "Businesses handle port clearance onward",
                  "Dedicated B2B quotes and account support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                    <span className="text-[#C4882A] mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/wholesale"
                className="inline-flex items-center px-5 py-2.5 bg-[#C4882A] text-white font-semibold text-sm rounded-xl hover:bg-[#a87022] transition-colors"
              >
                Wholesale Services →
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
              How It Works — Canada to Senegal
            </h2>
            <p className="text-[#6B7280] text-lg">
              From your first message to delivery in Senegal — here&apos;s the process.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0D1F5C] text-white flex items-center justify-center text-lg font-extrabold shrink-0">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#0D1F5C] text-sm">{step.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-6 py-3 border-2 border-[#0D1F5C] text-[#0D1F5C] font-semibold rounded-xl hover:bg-[#0D1F5C] hover:text-white transition-colors text-sm"
            >
              See Full Process Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F5C] mb-3">
              Clear Rates. One-Way, No Surprises.
            </h2>
            <p className="text-[#6B7280] text-lg">
              All prices in CAD. One-way shipping from Canada to Senegal.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {pricingPreview.map((item, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-6 text-center transition-shadow hover:shadow-md ${
                  item.popular
                    ? "border-[#D42B2B] shadow-sm"
                    : "border-gray-200"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D42B2B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-[#0D1F5C] text-sm mb-2">{item.name}</div>
                <div className="text-2xl font-extrabold text-[#0D1F5C]">{item.price}</div>
                <div className="text-xs text-[#6B7280] mt-1">One Way</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#6B7280] mb-6">
            Also shipping furniture ($500), sedans ($1,600), and SUVs/trucks ($1,700).{" "}
            <Link href="/pricing" className="text-[#D42B2B] underline font-medium">
              See full pricing →
            </Link>
          </p>
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-semibold rounded-xl hover:bg-[#b82424] transition-colors text-sm"
            >
              Full Pricing Page →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SHIPDIRECT ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F5C] mb-3">
              Built for the Canada–Senegal Route
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              We understand what families and businesses need when shipping between
              Canada and Senegal.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-[#0D1F5C] mb-2">{card.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#0D1F5C] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,43,43,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Ship to Senegal?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Get your free quote today. Our team is ready to help you ship packages,
            furniture, vehicles, and more — directly to Senegal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors"
            >
              Get a Free Quote →
            </Link>
            <a
              href="tel:6137002747"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              📞 613-700-2747
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0D1F5C] mb-3">Quick Answers</h2>
          </div>
          <FaqAccordion items={faqPreview} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 border-2 border-[#0D1F5C] text-[#0D1F5C] font-semibold rounded-xl hover:bg-[#0D1F5C] hover:text-white transition-colors text-sm"
            >
              View All FAQs →
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
              <div className="font-semibold text-sm mb-1">Phone</div>
              <a href="tel:6137002747" className="text-blue-200 hover:text-white transition-colors text-sm">
                613-700-2747
              </a>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold text-sm mb-1">Email</div>
              <a href="mailto:info@shipdirect.ca" className="text-blue-200 hover:text-white transition-colors text-sm">
                info@shipdirect.ca
              </a>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <div className="font-semibold text-sm mb-1">Location</div>
              <p className="text-blue-200 text-sm">300 Miwate Pvt, Ottawa, ON K1R 0E8</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
