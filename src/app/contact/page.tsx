import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us | ShipDirect Canada to Senegal",
  description:
    "Get in touch with ShipDirect. Questions about shipping, pricing, or wholesale services. Ottawa, Canada.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0D1F5C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 font-medium mb-5">
            📬 Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 max-w-2xl">
            We&apos;re Here to Help
          </h1>
          <p className="text-lg text-blue-200 max-w-xl">
            Reach out with any questions about shipping, pricing, or wholesale
            services. Our team responds quickly.
          </p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: contact info card (sticky) */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <div className="bg-[#0D1F5C] text-white rounded-2xl p-8">
                <h2 className="text-xl font-extrabold mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">📞</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">Phone</div>
                      <a href="tel:6137002747" className="font-semibold hover:text-blue-200 transition-colors">
                        613-700-2747
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">✉️</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">Email</div>
                      <a href="mailto:info@shipdirect.ca" className="font-semibold hover:text-blue-200 transition-colors">
                        info@shipdirect.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">📍</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-1">Address</div>
                      <p className="font-semibold leading-relaxed">
                        Ottawa Drop-off Location<br />
                        (Provided upon confirmation)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">🕐</span>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wide mb-2">Business Hours</div>
                      <div className="space-y-1 text-sm text-blue-100">
                        <div className="flex justify-between gap-8">
                          <span>Monday – Friday</span>
                          <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Saturday</span>
                          <span className="text-white font-medium">10:00 AM – 4:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sunday</span>
                          <span className="text-white font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-extrabold text-[#0D1F5C] mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-[#6B7280] mb-6">
                We&apos;ll get back to you within one business day.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
