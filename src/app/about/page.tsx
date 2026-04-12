import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | ShipDirect Canada to Senegal",
  description:
    "ShipDirect was built to serve the Canada-Senegal shipping corridor. Learn about our mission, operations, and values.",
};

const values = [
  {
    icon: "🎯",
    title: "Focused Expertise",
    desc: "Canada-to-Senegal specialist. We know this route better than anyone.",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    desc: "Plain language, no jargon. Every step explained simply.",
  },
  {
    icon: "🔒",
    title: "Safe Handling",
    desc: "Your goods are treated with care from collection to delivery.",
  },
  {
    icon: "💰",
    title: "Honest Pricing",
    desc: "Flat rates in CAD. The price we quote is the price you pay.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family-Friendly",
    desc: "We know you're sending more than goods. We handle them accordingly.",
  },
  {
    icon: "🌍",
    title: "Trade Ready",
    desc: "Commercial capability, dedicated B2B supply, and export coordination at scale.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-6">
                🚢 Our Story
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                Connecting Canada to Senegal.{" "}
                <span className="text-[#D42B2B]">One Shipment at a Time.</span>
              </h1>
              <p className="text-lg text-blue-200 leading-relaxed">
                ShipDirect was built with one purpose: to make international shipping
                between Canada and Senegal simple, reliable, and accessible — for
                families, communities, and businesses alike.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { value: "Ottawa", label: "Canadian Operations Hub" },
                { value: "Keur Massar", label: "Senegal Destination" },
                { value: "B2C & B2B", label: "Personal & Commercial" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl px-6 py-5 border border-white/20"
                >
                  <div className="text-2xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & STORY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: copy */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#0D1F5C]">Our Mission & Story</h2>
              <p className="text-[#1A1410] leading-relaxed">
                ShipDirect was founded to serve one of the most underserved logistics
                corridors in North America: the route between Canada and Senegal. We
                recognized that families in the Senegalese diaspora needed a shipping
                partner they could truly trust — one that understood their needs,
                respected their goods, and offered honest, transparent pricing without
                the confusion of complex freight brokers or unreliable intermediaries.
              </p>
              <p className="text-[#1A1410] leading-relaxed">
                Our operations are straightforward and intentional. Customers in Ottawa
                can drop their goods at our location at 300 Miwate Pvt, or arrange a
                pickup for a small additional fee. From there, we handle the entire
                export process — consolidation, documentation, and transit — until your
                shipment arrives safely at our Keur Massar facility in Senegal.
                Recipients can collect in person or request local delivery within Senegal.
              </p>
              <p className="text-[#1A1410] leading-relaxed">
                For businesses and wholesale buyers, ShipDirect goes further. We are a
                trusted supply and export partner for commercial buyers in Senegal,
                sourcing premium Canadian agricultural products — pulses, legumes,
                spices, and more — and coordinating export to port. Our role ends at
                port; from there, our B2B clients manage local clearance and distribution.
                It&apos;s a clean, efficient model that keeps everyone focused on what they
                do best.
              </p>

              {/* Callout */}
              <div className="bg-[#EEF1F8] rounded-2xl px-6 py-5 border-l-4 border-[#0D1F5C]">
                <p className="text-[#0D1F5C] font-medium text-sm">
                  📞 Questions? Call us at{" "}
                  <a href="tel:6137002747" className="font-bold underline">
                    613-700-2747
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:info@shipdirect.ca" className="font-bold underline">
                    info@shipdirect.ca
                  </a>
                  . We&apos;re here to help.
                </p>
              </div>
            </div>

            {/* Right: values grid */}
            <div>
              <h3 className="text-xl font-bold text-[#0D1F5C] mb-6">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="bg-[#F5F2ED] rounded-2xl p-5 border border-gray-200"
                  >
                    <div className="text-2xl mb-2">{v.icon}</div>
                    <h4 className="font-bold text-[#0D1F5C] text-sm mb-1">{v.title}</h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-[#0D1F5C] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Ship With Us?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Get a quote in minutes. Our team handles personal and commercial shipments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
