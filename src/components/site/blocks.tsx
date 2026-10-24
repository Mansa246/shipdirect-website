import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import ScrollFadeUp from "@/components/animations/ScrollFadeUp";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, subtitle, light = false, className }: { eyebrow?: string; title: string; subtitle?: string; light?: boolean; className?: string }) {
  return (
    <ScrollFadeUp className={cn("mx-auto mb-14 max-w-2xl text-center", className)}>
      {eyebrow && <div className={cn("mb-3 text-xs font-bold tracking-[0.18em] uppercase", light ? "text-[#E0A84A]" : "text-brand-red")}>{eyebrow}</div>}
      <h2 className={cn("mb-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl", light ? "text-white" : "text-brand-navy")}>{title}</h2>
      {subtitle && <p className={cn("text-lg", light ? "text-blue-200" : "text-muted-foreground")}>{subtitle}</p>}
    </ScrollFadeUp>
  );
}

export function CheckList({ items, tone = "light", className }: { items: string[]; tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-start gap-3 text-sm", dark ? "text-blue-100" : "text-body")}>
          <span className={cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full", dark ? "bg-brand-gold/20 text-[#E0A84A]" : "bg-brand-red/10 text-brand-red")}>
            <Check className="size-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function IconTile({ icon: Icon, tone = "red", className }: { icon: LucideIcon; tone?: "red" | "navy" | "gold" | "light"; className?: string }) {
  const tones = {
    red: "bg-brand-red/10 text-brand-red",
    navy: "bg-navy-tint text-brand-navy",
    gold: "bg-brand-gold/15 text-brand-gold",
    light: "bg-white/10 text-white",
  };
  return (
    <div className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", tones[tone], className)}>
      <Icon className="size-5" />
    </div>
  );
}

export function FeatureCard({ icon, title, desc, className }: { icon: LucideIcon; title: string; desc: string; className?: string }) {
  return (
    <Card className={cn("h-full gap-0 rounded-3xl border-transparent p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]", className)}>
      <IconTile icon={icon} className="mb-5" />
      <h3 className="mb-2 text-lg font-bold text-brand-navy">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{desc}</p>
    </Card>
  );
}

export function NoteCard({ icon, title, items, className }: { icon: LucideIcon; title: string; items: string[]; className?: string }) {
  return (
    <Card className={cn("h-full gap-0 rounded-3xl p-7 shadow-[var(--shadow-card)]", className)}>
      <div className="mb-5 flex items-center gap-3">
        <IconTile icon={icon} tone="navy" />
        <h3 className="font-bold text-brand-navy">{title}</h3>
      </div>
      <CheckList items={items} />
    </Card>
  );
}
