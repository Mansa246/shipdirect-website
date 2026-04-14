import type { Metadata } from "next";
import QuoteContent from "./quote-content";

export const metadata: Metadata = {
  title: "Get a Quote | ShipDirect Canada to Senegal",
  description:
    "Get a free shipping quote from Canada to Senegal. Boxes, barrels, furniture, vehicles, and wholesale export. Quick, easy, no obligation.",
};

export default function QuotePage() {
  return <QuoteContent />;
}
