import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | ShipDirect Canada to Senegal",
  description:
    "Step-by-step guide to shipping from Canada to Senegal with ShipDirect. From quote to delivery at Keur Massar.",
};

const steps = [
  {
    n: "01",
    title: "Request a Quote or Contact ShipDirect",
    desc: "Start by filling out our online quote form or reaching out by phone or email. Tell us what you need to ship — type of goods, size, and weight — and we'll confirm pricing, availability, and next steps within one business day.",
    note: "📋 Use the online quote form, email info@shipdirect.ca, or call 613-700-2747",
  },
  {
    n: "02",
    title: "Drop Off Your Goods (or Request Pickup)",
    desc: "Once confirmed, bring your goods to our Ottawa drop-off location at 300 Miwate Pvt, Ottawa, ON K1R 0E8. If you need pickup, we can arrange it for an additional charge depending on your distance. Ensure goods are properly packed before drop-off.",
    note: "📍 Drop-off: 300 Miwate Pvt, Ottawa · Pickup available for extra charge",
  },
  {
    n: "03",
    title: "We Handle Everything",
    desc: "Our team handles all logistics — consolidation, packaging verification, export documentation, and vessel coordination. Your shipment is dispatched to Senegal on the next available vessel.",
    note: "🚢 ShipDirect manages all export documentation and shipping logistics",
  },
  {
    n: "04",
    title: "Shipment Arrives in Senegal",
    desc: "Your goods arrive at the port and are transferred to our Keur Massar facility. You'll be notified when your shipment is ready for collection. Port fees, customs duties, and clearance charges in Senegal are the recipient's responsibility.",
    note: "🌍 Arrival: Keur Massar, Senegal · Port fees & customs are recipient's responsibility",
  },
  {
    n: "05",
    title: "Collect or Request Local Delivery",
    desc: "The recipient collects their goods at our Keur Massar facility at no additional charge. Need delivery within Senegal? We can arrange local delivery for an extra fee — just let us know in advance.",
    note: "🏠 Free pickup at Keur Massar · Local Senegal delivery available for extra charge",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            📋 Step-by-Step
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            How Shipping Works
          </h1>
          <p className="text-lg text-blue-200">
            From your first message to delivery in Senegal — here&apos;s exactly what
            to expect when you ship with ShipDirect.
          </p>
        </div>
      </section>

      {/* ── 5-STEP PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-12">
            {/* Connecting line on desktop */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#EEF1F8] hidden md:block" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0D1F5C] text-white flex items-center justify-center text-base font-extrabold z-10">
                  {step.n}
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <h2 className="text-xl font-extrabold text-[#0D1F5C] mb-3">
                    Step {step.n}: {step.title}
                  </h2>
                  <p className="text-[#1A1410] leading-relaxed mb-4">{step.desc}</p>
                  <div className="inline-flex items-start gap-2 bg-[#EEF1F8] rounded-xl px-4 py-2.5 text-sm text-[#0D1F5C] font-medium">
                    {step.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0D1F5C] mb-8 text-center">
            Important Notes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                🇨🇦 In Canada
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D42B2B] shrink-0">•</span>
                  Pack goods properly before drop-off
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D42B2B] shrink-0">•</span>
                  Pickup fee varies by distance — request a quote in advance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D42B2B] shrink-0">•</span>
                  Some restricted items may not be eligible for shipping
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <h3 className="font-bold text-[#0D1F5C] mb-4 flex items-center gap-2">
                🌍 In Senegal
              </h3>
              <ul className="space-y-3 text-sm text-[#1A1410]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D42B2B] shrink-0">•</span>
                  Customs duties and port fees are the recipient&apos;s responsibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D42B2B] shrink-0">•</span>
                  Free collection at Keur Massar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D42B2B] shrink-0">•</span>
                  Local delivery within Senegal available for an extra fee
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
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 mb-8">
            Fill out our quote form and we&apos;ll take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="shimmer-btn inline-flex items-center px-6 py-3 bg-[#D42B2B] text-white font-bold rounded-xl hover:bg-[#b82424] transition-colors"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
