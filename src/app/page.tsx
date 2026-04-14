import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "ShipDirect | Canada to Senegal Shipping & Export",
  description:
    "Ship anything from Canada to Senegal. Personal boxes, barrels, furniture, vehicles, and wholesale B2B export. Flat-rate CAD pricing. Ottawa drop-off. Keur Massar delivery.",
};

export default function HomePage() {
  return <HomeContent />;
}
