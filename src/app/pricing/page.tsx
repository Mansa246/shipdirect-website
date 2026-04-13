import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Shipping Rates | ShipDirect Canada to Senegal",
  description:
    "Flat-rate CAD pricing for shipping from Canada to Senegal. Boxes, barrels, furniture, vehicles. No hidden fees. One-way rates.",
};

const pricingTiers = [
  {
    icon: "🛍️",
    name: "Costco Bag",
    descriptor: "Standard size",
    price: "$75 CAD",
    bullets: [
      "Standard Costco-sized bag",
      "Ideal for clothing, household goods",
      "Drop-off at Ottawa facility",
    ],
  },
  {
    icon: "📦",
    name: "Small Box",
    descriptor: "Up to 23kg",
    price: "$100 CAD",
    bullets: [
      "Up to 23kg per box",
      "Suitable for most household items",
      "Drop-off at Ottawa facility",
    ],
  },
  {
    icon: "📫",
    name: "Big Box",
    descriptor: "Up to 32kg",
    price: "$150 CAD",
    popular: true,
    bullets: [
      "Up to 32kg per box",
      "Most popular option for families",
      "Drop-off at Ottawa facility",
    ],
  },
  {
    icon: "🛢️",
    name: "Baril / Drum",
    descriptor: "50–60kg",
    price: "$250 CAD",
    bullets: [
      "Standard 50–60kg drum/barrel",
      "Ideal for bulk goods",
      "Drop-off at Ottawa facility",
    ],
  },
  {
    icon: "🛋️",
    name: "Sofa / Furniture",
    descriptor: "Standard piece",
    price: "$500 CAD",
    bullets: [
      "Standard single furniture piece",
      "Must be properly packed/wrapped",
      "Contact us for oversized items",
    ],
  },
  {
    icon: "🚗",
    name: "Sedan",
    descriptor: "Standard car",
    price: "$1,600 CAD",
    vehicle: true,
    bullets: [
      "Standard sedan vehicle",
      "Contact us for preparation details",
      "Import regulations are client's responsibility",
    ],
  },
  {
    icon: "🚙",
    name: "SUV / Truck",
    descriptor: "Large vehicle",
    price: "$1,700 CAD",
    vehicle: true,
    bullets: [
      "SUV, truck, or van",
      "Contact us for preparation details",
      "Import regulations are client's responsibility",
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            💰 Transparent Rates
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Simple, Flat-Rate Pricing
          </h1>
          <p className="text-lg text-blue-200 mb-8">
            All prices are one-way shipping from Canada to Senegal, in Canadian dollars.
            No hidden fees.
          </p>
          <Link
            href="/quote"
            className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors"
          >
            Get a Quote for Your Shipment
          </Link>
        </div>
      </section>

      {/* ── PRICING GRID ── */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First 5 items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {pricingTiers.slice(0, 5).map((tier, i) => (
              <PricingCard key={i} {...tier} />
            ))}
          </div>
          {/* Vehicles: 2-col row */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pricingTiers.slice(5).map((tier, i) => (
              <PricingCard key={i} {...tier} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-5 text-sm text-[#6B7280] text-center">
            All prices are one-way from Canada to Senegal, in CAD.{" "}
            <strong className="text-[#1A1410]">
              Customs duties, port fees, and import charges in Senegal are the
              recipient&apos;s responsibility.
            </strong>{" "}
            Prices subject to change. Contact us to confirm current rates before booking.
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0D1F5C] mb-8 text-center">
            Important Shipping Notes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Canada */}
            <div className="bg-[#EEF1F8] rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                🇨🇦 Drop-off & Pickup in Canada
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  Standard: Drop-off at our Ottawa location (address provided upon confirmation)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  Pickup available in Canada for an additional charge (varies by distance)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  Contact us to get a pickup quote before shipping
                </li>
              </ul>
            </div>
            {/* Senegal */}
            <div className="bg-[#EEF1F8] rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                🌍 Collection & Delivery in Senegal
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  All shipments arrive at Keur Massar, Senegal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  Free pickup at Keur Massar facility for recipients
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  Local delivery within Senegal available for an additional charge
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0D1F5C] shrink-0">•</span>
                  Customs duties and port fees are the recipient&apos;s responsibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#0D1F5C] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Not Sure What Applies to Your Shipment?
          </h2>
          <p className="text-blue-200 mb-8">
            Contact us directly and we&apos;ll help you choose the right option.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors"
            >
              Get a Quote →
            </Link>
            <a
              href="tel:6137002747"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Call 613-700-2747
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
