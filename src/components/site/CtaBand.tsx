import Image from "next/image";
import { ReactNode } from "react";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import { Badge } from "@/components/ui/badge";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function CtaBand({ eyebrow, title, subtitle, children }: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-20 lg:py-24">
      <Image src="/images/home/hero-port-dusk-4k.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/80 via-brand-navy/70 to-brand-navy" />
      <ScrollFadeUp className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <Badge className="mb-5 h-auto rounded-full border-brand-gold/30 bg-brand-gold/15 px-3.5 py-1 text-xs font-bold tracking-wide text-[#E0A84A] uppercase">
            {eyebrow}
          </Badge>
        )}
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mb-9 text-lg text-blue-100/90">{subtitle}</p>}
        <div className="flex flex-wrap justify-center gap-3">{children}</div>
      </ScrollFadeUp>
    </section>
  );
}
