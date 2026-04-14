import type { Metadata } from "next";
import WholesaleContent from "./wholesale-content";

export const metadata: Metadata = {
  title: "Wholesale Export to Senegal | ShipDirect",
  description:
    "ShipDirect sources premium Canadian agricultural products and coordinates export to Senegal for wholesale buyers, distributors, and importers.",
};

export default function WholesalePage() {
  return <WholesaleContent />;
}
