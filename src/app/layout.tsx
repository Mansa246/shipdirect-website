import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.purpose,
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
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
