import type { Metadata } from "next";
import PricingContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Shipping Rates | ShipDirect Canada to Senegal",
  description:
    "Flat-rate CAD pricing for shipping from Canada to Senegal. Boxes, barrels, furniture, vehicles. No hidden fees. One-way rates.",
};

export default function PricingPage() {
  return <PricingContent />;
}
