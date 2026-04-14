"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  const companyLinks = fr
    ? [
        { label: "Accueil", href: "/" },
        { label: "À propos", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "FAQs", href: "/faq" },
      ];

  const serviceLinks = fr
    ? [
        { label: "Tarifs B2C", href: "/pricing" },
        { label: "Comment ça marche", href: "/how-it-works" },
        { label: "Obtenir un devis", href: "/quote" },
        { label: "Grossiste / B2B", href: "/wholesale" },
      ]
    : [
        { label: "B2C Pricing", href: "/pricing" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Get a Quote", href: "/quote" },
        { label: "Wholesale / B2B", href: "/wholesale" },
      ];

  const legalLinks = fr
    ? [
        { label: "Politique de confidentialité", href: "/privacy" },
        { label: "Conditions générales", href: "/terms" },
      ]
    : [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
      ];

  return (
    <footer className="bg-[#0D1F5C] text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <Image
                src="/logo.png"
                alt="ShipDirect"
                width={130}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              {fr
                ? "Partenaire de confiance pour l'expédition et l'exportation sur la route Canada–Sénégal. Au service des familles, des communautés et des entreprises avec des tarifs transparents et une logistique fiable."
                : "Canada's trusted shipping and export partner for the Senegal route. Serving families, communities, and businesses with transparent pricing and reliable logistics."}
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <p className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:6137002747" className="hover:text-white transition-colors">
                  613-700-2747
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:info@shipdirect.ca" className="hover:text-white transition-colors">
                  info@shipdirect.ca
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  {fr
                    ? "Point de dépôt Ottawa (Communiqué après confirmation)"
                    : "Ottawa Drop-off Location (Provided upon confirmation)"}
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {fr ? "Entreprise" : "Company"}
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {fr ? "Services" : "Services"}
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal + CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {fr ? "Mentions légales" : "Legal"}
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/quote"
              className="shimmer-btn inline-flex items-center px-5 py-2.5 bg-[#D42B2B] text-white text-sm font-semibold rounded-lg hover:bg-[#b82424] transition-colors"
            >
              {fr ? "Obtenir un devis →" : "Get a Quote →"}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>{fr ? "© 2025 ShipDirect. Tous droits réservés. Ottawa, Canada." : "© 2025 ShipDirect. All rights reserved. Ottawa, Canada."}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {fr ? "Politique de confidentialité" : "Privacy Policy"}
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              {fr ? "Conditions générales" : "Terms & Conditions"}
            </Link>
            <span>·</span>
            <a href="mailto:info@shipdirect.ca" className="hover:text-white transition-colors">
              info@shipdirect.ca
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
