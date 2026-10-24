import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckList, IconTile } from "@/components/site/blocks";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  icon: LucideIcon;
  name: string;
  descriptor: string;
  price: string;
  bullets: string[];
  popular?: boolean;
  vehicle?: boolean;
  popularLabel?: string;
  oneWayLabel?: string;
}

export default function PricingCard({
  icon,
  name,
  descriptor,
  price,
  bullets,
  popular,
  vehicle,
  popularLabel = "Most Popular",
  oneWayLabel = "One Way",
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full gap-5 overflow-visible rounded-3xl p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
        popular && "ring-2 ring-brand-red",
        vehicle && "bg-brand-navy text-white ring-brand-navy"
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-7 rounded-full bg-brand-red px-3 text-[11px] font-bold tracking-wide text-white uppercase">
          {popularLabel}
        </Badge>
      )}

      <div className="flex items-start justify-between gap-4">
        <IconTile icon={icon} tone={vehicle ? "light" : "navy"} className="size-12" />
        <div className="text-right">
          <div className={cn("text-2xl font-extrabold tracking-tight tabular-nums", vehicle ? "text-white" : "text-brand-navy")}>{price}</div>
          <div className={cn("mt-0.5 text-xs", vehicle ? "text-blue-200" : "text-muted-foreground")}>{oneWayLabel}</div>
        </div>
      </div>

      <div>
        <h3 className={cn("text-lg font-bold", vehicle ? "text-white" : "text-brand-navy")}>{name}</h3>
        <p className={cn("mt-0.5 text-sm", vehicle ? "text-blue-200" : "text-muted-foreground")}>{descriptor}</p>
      </div>

      <CheckList items={bullets} tone={vehicle ? "dark" : "light"} />
    </Card>
  );
}
