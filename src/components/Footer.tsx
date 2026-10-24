"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WhatsAppIcon, useWhatsAppUrl } from "@/components/WhatsApp";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const whatsappUrl = useWhatsAppUrl();

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
    <footer className="bg-[#08133b] text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/brand/logo-reversed.png"
              alt="ShipDirect"
              width={772}
              height={511}
              className="mb-6 h-[64px] w-auto object-contain"
            />
            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              {fr
                ? "Partenaire de confiance pour l'expédition et l'exportation sur la route Canada–Sénégal. Au service des familles, des communautés et des entreprises avec des tarifs transparents et une logistique fiable."
                : "Canada's trusted shipping and export partner for the Senegal route. Serving families, communities, and businesses with transparent pricing and reliable logistics."}
            </p>
            <div className="space-y-3 text-sm text-blue-100">
              <p className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-blue-300" />
                <a href="tel:6137002747" className="hover:text-white transition-colors">
                  613-700-2747
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-[#25D366]" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-blue-300" />
                <a href="mailto:info@shipdirect.ca" className="hover:text-white transition-colors">
                  info@shipdirect.ca
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-300" />
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
            <h3 className="text-xs font-bold text-[#E0A84A] uppercase tracking-[0.18em] mb-5">
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
            <h3 className="text-xs font-bold text-[#E0A84A] uppercase tracking-[0.18em] mb-5">
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
            <h3 className="text-xs font-bold text-[#E0A84A] uppercase tracking-[0.18em] mb-5">
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
            <Button asChild variant="brand" size="lg" className="shimmer-btn h-10 rounded-full px-5">
              <Link href="/quote">
                {fr ? "Obtenir un devis" : "Get a Quote"}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
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
