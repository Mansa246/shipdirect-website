import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D1F5C] text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <Image
                src="https://assets.cdn.filesafe.space/h3iwnUDSYBMxhYZeIrq4/media/675c4678a08ae6fe23d57d7b.png"
                alt="ShipDirect"
                width={130}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              Canada&apos;s trusted shipping and export partner for the Senegal route.
              Serving families, communities, and businesses with transparent pricing
              and reliable logistics.
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
                <span>300 Miwate Pvt, Ottawa, ON K1R 0E8</span>
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQs", href: "/faq" },
              ].map((link) => (
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
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200">
              {[
                { label: "B2C Pricing", href: "/pricing" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Get a Quote", href: "/quote" },
                { label: "Wholesale / B2B", href: "/wholesale" },
              ].map((link) => (
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
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-200 mb-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
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
              Get a Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© 2025 ShipDirect. All rights reserved. Ottawa, Canada.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
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
