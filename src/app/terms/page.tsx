import type { Metadata } from "next";
import TermsContent from "./terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | ShipDirect",
  description: "ShipDirect terms and conditions for personal shipping and B2B wholesale export services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
