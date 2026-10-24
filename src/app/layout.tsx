import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import { WhatsAppFloat } from "@/components/WhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShipDirect | Canada to Senegal Shipping & Export",
  description:
    "Ship anything from Canada to Senegal. Personal shipping (boxes, barrels, furniture, vehicles) and wholesale B2B export. Flat-rate CAD pricing. Ottawa drop-off. Keur Massar delivery.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <Script
          src="https://link.apisystem.tech/js/form_embed.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ClientWrapper>
          <Nav />
          <div className="pt-16 lg:pt-20">{children}</div>
          <Footer />
          <WhatsAppFloat />
        </ClientWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
