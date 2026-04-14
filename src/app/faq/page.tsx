import type { Metadata } from "next";
import FaqContent from "./faq-content";

export const metadata: Metadata = {
  title: "FAQs | ShipDirect Canada to Senegal",
  description:
    "Frequently asked questions about shipping from Canada to Senegal with ShipDirect. Personal shipping and B2B wholesale export answered.",
};

export default function FaqPage() {
  return <FaqContent />;
}
