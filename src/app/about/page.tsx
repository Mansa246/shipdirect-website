import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | ShipDirect Canada to Senegal",
  description:
    "ShipDirect was built to serve the Canada-Senegal shipping corridor. Learn about our mission, operations, and values.",
};

export default function AboutPage() {
  return <AboutContent />;
}
