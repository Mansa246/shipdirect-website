import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ShipDirect",
  description: "ShipDirect terms and conditions for personal shipping and B2B wholesale export services.",
};

export default function TermsPage() {
  return (
    <main className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EEF1F8] text-[#0D1F5C] rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-[#0D1F5C] mb-3">Terms & Conditions</h1>
          <p className="text-sm text-[#6B7280]">Last Updated: January 2025</p>
        </div>

        <div className="space-y-8 text-[#1A1410]">
          <Section title="1. Services">
            ShipDirect provides B2C personal shipping services and B2B wholesale export
            coordination from Canada to Senegal. Services are subject to availability and
            applicable Canadian export and Senegalese import regulations.
          </Section>

          <Section title="2. Pricing and Payment">
            All prices are quoted in Canadian dollars (CAD) and represent one-way shipping
            from Canada to Senegal. Prices are subject to change. Any additional charges
            (pickup, local delivery, oversized items) will be communicated to you in advance.
            Full payment is required before goods are accepted for shipping.
          </Section>

          <Section title="3. Prohibited Items">
            ShipDirect does not ship illegal substances, weapons, counterfeit goods,
            unapproved perishables, or any items prohibited under Canadian export law or
            Senegalese import law. It is your responsibility to ensure all goods comply
            with applicable regulations. ShipDirect reserves the right to refuse any
            shipment at its sole discretion.
          </Section>

          <Section title="4. Customs, Duties, and Port Fees">
            Our listed prices cover transportation from Canada to Senegal only. Customs
            duties, import taxes, port handling fees, and any other charges levied in
            Senegal are the sole responsibility of the recipient. ShipDirect is not liable
            for delays caused by customs authorities or port procedures.
          </Section>

          <Section title="5. Liability Limitations">
            ShipDirect is not liable for loss, damage, or delay caused by factors outside
            our reasonable control, including but not limited to weather, customs delays,
            vessel delays, or acts of government. Our liability for any claim is limited
            to the shipping fee paid by the customer for that specific shipment. Customers
            with high-value goods are encouraged to obtain independent cargo insurance.
            ShipDirect is not responsible for damage resulting from improper packing by
            the customer.
          </Section>

          <Section title="6. Pickup and Drop-off">
            Customers are responsible for delivering goods to our Ottawa drop-off location
            (address provided upon confirmation), unless a paid pickup has been arranged
            in advance. Pickup services are subject to availability and will incur an
            additional charge based on distance.
          </Section>

          <Section title="7. Delivery in Senegal">
            Standard delivery is collection by the recipient at our Keur Massar, Senegal
            facility at no additional charge. Local delivery within Senegal is available
            for an additional fee, arranged in advance. ShipDirect is not responsible for
            delays caused by a recipient failing to collect their shipment after notification.
          </Section>

          <Section title="8. B2B Terms">
            Commercial and wholesale orders are governed by separate written agreements
            between ShipDirect and the client. ShipDirect&apos;s responsibility ends at the
            designated port in Senegal. Port clearance, customs procedures, and all
            distribution onward from port are the client&apos;s sole responsibility.
          </Section>

          <Section title="9. Cancellations and Refunds">
            Cancellations may not be possible once a shipment has entered processing.
            Refunds are evaluated on a case-by-case basis. No refunds will be issued for
            shipments that have already departed. B2B cancellations are governed by the
            applicable commercial agreement.
          </Section>

          <Section title="10. Governing Law">
            These Terms & Conditions are governed by and construed in accordance with the
            laws of the Province of Ontario, Canada, without regard to its conflict of law
            principles.
          </Section>

          <Section title="11. Changes to Terms">
            ShipDirect may update these Terms & Conditions at any time. Updated terms will
            be posted on this page with a revised effective date. Continued use of our
            services following any changes constitutes your acceptance of the updated terms.
          </Section>

          <Section title="12. Contact Us">
            For questions about these Terms & Conditions:
            <div className="mt-3 bg-[#EEF1F8] rounded-xl p-5">
              <p className="font-semibold text-[#0D1F5C]">ShipDirect</p>
              <p>Ottawa Drop-off Location (Provided upon confirmation)</p>
              <p>
                <a href="mailto:info@shipdirect.ca" className="text-[#D42B2B] hover:underline">
                  info@shipdirect.ca
                </a>
              </p>
              <p>
                <a href="tel:6137002747" className="text-[#D42B2B] hover:underline">
                  613-700-2747
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#0D1F5C] mb-2">{title}</h2>
      <div className="text-sm leading-relaxed text-[#1A1410]">{children}</div>
    </div>
  );
}
