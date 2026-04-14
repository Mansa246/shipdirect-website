import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShipDirect | Canada to Senegal Shipping & Export",
  description:
    "Ship anything from Canada to Senegal. Personal shipping (boxes, barrels, furniture, vehicles) and wholesale B2B export. Flat-rate CAD pricing. Ottawa drop-off. Keur Massar delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://link.apisystem.tech/js/form_embed.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ClientWrapper>
          <Nav />
          <div className="pt-16">{children}</div>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
