import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ShipDirect",
  description: "ShipDirect privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EEF1F8] text-[#0D1F5C] rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-[#0D1F5C] mb-3">Privacy Policy</h1>
          <p className="text-sm text-[#6B7280]">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-[#1A1410]">
          <Section title="1. Introduction">
            ShipDirect (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of
            our customers, visitors, and business partners. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you use our
            website and services.
          </Section>

          <Section title="2. Information We Collect">
            We may collect the following categories of information:
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Contact information (name, phone number, email address)</li>
              <li>Shipping details (pickup/delivery addresses, goods descriptions)</li>
              <li>Payment information (processed through secure third-party processors)</li>
              <li>Business information for B2B clients (company name, trade details)</li>
              <li>Website usage data (pages visited, time on site, browser type)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            We use the information we collect to:
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Process and fulfill shipping orders</li>
              <li>Communicate with you about your shipments and quotes</li>
              <li>Prepare export and customs documentation</li>
              <li>Provide and improve our services</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Send operational communications related to your orders</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            We do not sell your personal information. We may share your information with:
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Logistics and shipping partners required to fulfill your shipment</li>
              <li>Legal or regulatory authorities where required by law</li>
              <li>Subcontractors bound by confidentiality obligations</li>
            </ul>
            We require all parties to protect your information and use it only as necessary
            to provide services on our behalf.
          </Section>

          <Section title="5. Data Retention">
            We retain personal information for as long as necessary to fulfill the purposes
            outlined in this policy and to comply with applicable laws. Shipping records are
            typically retained for a minimum of seven (7) years as required by Canadian
            customs and commercial regulations.
          </Section>

          <Section title="6. Your Rights">
            Under the Personal Information Protection and Electronic Documents Act (PIPEDA),
            you have the right to:
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for certain uses of your information</li>
              <li>Request deletion of your information where applicable</li>
            </ul>
            To exercise these rights, contact us at{" "}
            <a href="mailto:info@shipdirect.ca" className="text-[#D42B2B] underline">
              info@shipdirect.ca
            </a>
            .
          </Section>

          <Section title="7. Cookies">
            Our website may use cookies to enhance user experience and gather analytics data.
            You may disable cookies through your browser settings; however, some features of
            the website may not function properly if cookies are disabled.
          </Section>

          <Section title="8. Security">
            We implement reasonable administrative, technical, and physical safeguards to
            protect your personal information. However, no method of transmission over the
            internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </Section>

          <Section title="9. Third-Party Links">
            Our website may contain links to third-party websites. We are not responsible
            for the privacy practices of those sites and encourage you to review their
            privacy policies independently.
          </Section>

          <Section title="10. Updates to This Policy">
            We may update this Privacy Policy from time to time. Any changes will be posted
            on this page with an updated effective date. Continued use of our website or
            services following any changes constitutes your acceptance of the updated policy.
          </Section>

          <Section title="11. Contact Us">
            If you have questions or concerns about this Privacy Policy or our data practices,
            please contact us:
            <div className="mt-3 bg-[#EEF1F8] rounded-xl p-5 not-prose">
              <p className="font-semibold text-[#0D1F5C]">ShipDirect</p>
              <p>300 Miwate Pvt, Ottawa, ON K1R 0E8</p>
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
