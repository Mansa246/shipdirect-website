"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n/LanguageContext";
import { WhatsAppIcon, useWhatsAppUrl } from "@/components/WhatsApp";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "home", labelEn: "Home", labelFr: "Accueil", href: "/" },
  { key: "about", labelEn: "About", labelFr: "À propos", href: "/about" },
  { key: "pricing", labelEn: "Pricing", labelFr: "Tarifs", href: "/pricing" },
  { key: "how", labelEn: "How It Works", labelFr: "Comment ça marche", href: "/how-it-works" },
  { key: "wholesale", labelEn: "Wholesale", labelFr: "Grossiste", href: "/wholesale" },
  { key: "faq", labelEn: "FAQs", labelFr: "FAQ", href: "/faq" },
  { key: "contact", labelEn: "Contact", labelFr: "Contact", href: "/contact" },
];

function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={cn("flex items-center rounded-full bg-muted p-1", className)}>
      {(["en", "fr"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "flex-1 rounded-full px-3 py-1 text-xs font-semibold transition-all",
            lang === l ? "bg-white text-brand-navy shadow-sm" : "text-muted-foreground hover:text-brand-navy"
          )}
          aria-label={l === "en" ? "Switch to English" : "Passer en français"}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const whatsappUrl = useWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quoteLabel = fr ? "Obtenir un devis" : "Get a Quote";

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-200",
        scrolled ? "border-border/60 bg-white/85 shadow-[0_8px_30px_-12px_rgba(13,31,92,0.18)] backdrop-blur-xl" : "border-transparent bg-white"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/brand/logo-full-color.png"
              alt="ShipDirect"
              width={772}
              height={511}
              className="h-[36px] w-auto object-contain lg:h-[46px]"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-brand-red/10 text-brand-red" : "text-brand-navy hover:bg-muted"
                  )}
                >
                  {fr ? link.labelFr : link.labelEn}
                </Link>
              );
            })}
          </div>

          {/* Desktop: Language Toggle + CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <Button asChild variant="brand" size="lg" className="shimmer-btn h-10 rounded-full px-5">
              <Link href="/quote">{quoteLabel}</Link>
            </Button>
          </div>

          {/* Mobile: menu sheet */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="text-brand-navy" aria-label="Toggle menu">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-sm gap-0 p-0">
                <SheetHeader className="border-b px-6 py-5">
                  <SheetTitle className="text-left text-brand-navy">ShipDirect</SheetTitle>
                  <SheetDescription className="text-left">{fr ? "Canada → Sénégal Expédition" : "Canada → Senegal Shipping"}</SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6">
                  <LanguageToggle className="mx-2" />
                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                            isActive ? "bg-brand-red/10 text-brand-red" : "text-brand-navy hover:bg-muted"
                          )}
                        >
                          {fr ? link.labelFr : link.labelEn}
                          <ArrowRight className="size-4 opacity-40" />
                        </Link>
                      );
                    })}
                  </div>
                  <Separator />
                  <div className="space-y-3 px-2">
                    <Button asChild variant="brand" size="xl" className="w-full">
                      <Link href="/quote" onClick={() => setOpen(false)}>{quoteLabel}</Link>
                    </Button>
                    <Button asChild size="xl" className="w-full bg-[#25D366] text-white hover:bg-[#1ebe5b]">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="size-5" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="xl" className="w-full text-brand-navy">
                      <a href="tel:6137002747">
                        <Phone data-icon="inline-start" />
                        613-700-2747
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
