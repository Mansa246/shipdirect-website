import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us | ShipDirect Canada to Senegal",
  description:
    "Get in touch with ShipDirect. Questions about shipping, pricing, or wholesale services. Ottawa, Canada.",
};

export default function ContactPage() {
  return <ContactContent />;
}
