"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import ScrollFadeImg from "@/components/illustrations/ScrollFadeImg";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  image?: { src: string; alt: string };
  tone?: "red" | "gold";
  align?: "left" | "center";
}

export default function PageHero({ eyebrow, eyebrowIcon: Icon, title, subtitle, children, image, tone = "red", align = "left" }: PageHeroProps) {
  const centered = align === "center" && !image;

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <Image src="/images/home/hero-port-dusk.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/70" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className={cn(image ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-16" : centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
          <div>
            <ScrollFadeUp>
              <Badge
                className={cn(
                  "mb-6 h-auto gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm",
                  tone === "gold" ? "border-brand-gold/30 bg-brand-gold/15 text-[#E0A84A]" : "border-white/15 bg-white/10 text-blue-100"
                )}
              >
                {Icon && <Icon className="size-4" />}
                {eyebrow}
              </Badge>
            </ScrollFadeUp>
            <ScrollFadeUp delay={0.1}>
              <h1 className="mb-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h1>
            </ScrollFadeUp>
            {subtitle && (
              <ScrollFadeUp delay={0.2}>
                <p className={cn("text-lg leading-relaxed text-blue-100/90", centered ? "mx-auto max-w-2xl" : "max-w-xl", children && "mb-8")}>{subtitle}</p>
              </ScrollFadeUp>
            )}
            {children && <ScrollFadeUp delay={0.3}>{children}</ScrollFadeUp>}
          </div>
          {image && (
            <ScrollFadeUp delay={0.2}>
              <ScrollFadeImg src={image.src} alt={image.alt} priority />
            </ScrollFadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
