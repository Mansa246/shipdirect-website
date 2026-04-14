import type { Metadata } from "next";
import PrivacyContent from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | ShipDirect",
  description: "ShipDirect privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
