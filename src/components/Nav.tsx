"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage, type Lang } from "@/lib/i18n/LanguageContext";

const navLinks = [
  { key: "home", labelEn: "Home", labelFr: "Accueil", href: "/" },
  { key: "about", labelEn: "About", labelFr: "À propos", href: "/about" },
  { key: "pricing", labelEn: "Pricing", labelFr: "Tarifs", href: "/pricing" },
  { key: "how", labelEn: "How It Works", labelFr: "Comment ça marche", href: "/how-it-works" },
  { key: "wholesale", labelEn: "Wholesale", labelFr: "Grossiste", href: "/wholesale" },
  { key: "faq", labelEn: "FAQs", labelFr: "FAQ", href: "/faq" },
  { key: "contact", labelEn: "Contact", labelFr: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const quoteLabel = lang === "fr" ? "Obtenir un devis" : "Get a Quote";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="ShipDirect"
              width={772}
              height={511}
              className="h-[48px] lg:h-[64px] w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? "text-[#D42B2B] border-b-2 border-[#D42B2B] rounded-none"
                      : "text-[#0D1F5C] hover:text-[#D42B2B]"
                  }`}
                >
                  {lang === "fr" ? link.labelFr : link.labelEn}
                </Link>
              );
            })}
          </div>

          {/* Desktop: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                    lang === l
                      ? "bg-[#D42B2B] text-white"
                      : "text-[#0D1F5C] hover:bg-gray-100"
                  }`}
                  aria-label={l === "en" ? "Switch to English" : "Passer en français"}
                >
                  {l === "en" ? "🇨🇦 EN" : "🇫🇷 FR"}
                </button>
              ))}
            </div>

            <Link
              href="/quote"
              className="shimmer-btn inline-flex items-center px-5 py-2.5 bg-[#D42B2B] text-white text-sm font-semibold rounded-lg hover:bg-[#b82424] transition-colors"
            >
              {quoteLabel}
            </Link>
          </div>

          {/* Mobile: Hamburger Button Only */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-[#0D1F5C] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (Full-width dropdown) */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {/* Language Toggle Inside Mobile Menu */}
            <div className="flex items-center justify-center p-1 bg-gray-50 rounded-lg">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
                    lang === l
                      ? "bg-[#D42B2B] text-white shadow"
                      : "text-[#0D1F5C] hover:bg-gray-200"
                  }`}
                >
                  {l === "en" ? "EN (English)" : "FR (Français)"}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-[#D42B2B] bg-red-50"
                        : "text-[#0D1F5C] hover:bg-gray-50"
                    }`}
                  >
                    {lang === "fr" ? link.labelFr : link.labelEn}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full min-h-[44px] px-4 py-3 bg-[#D42B2B] text-white text-base font-semibold rounded-lg hover:bg-[#b82424] transition-colors"
              >
                {quoteLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
