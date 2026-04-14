import type { Metadata } from "next";
import HowItWorksContent from "./how-it-works-content";

export const metadata: Metadata = {
  title: "How It Works | ShipDirect Canada to Senegal",
  description:
    "Step-by-step guide to shipping from Canada to Senegal with ShipDirect. From quote to delivery at Keur Massar.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
