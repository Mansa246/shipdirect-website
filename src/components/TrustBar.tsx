"use client";

import { BadgeDollarSign, MapPin, MessageCircle, Package, Truck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const trustItemsEn = [
  { icon: MapPin, label: "Ottawa Drop-off Available" },
  { icon: Truck, label: "Canada Pickup Service Available" },
  { icon: Package, label: "Boxes, Barrels, Furniture & Vehicles" },
  { icon: BadgeDollarSign, label: "Flat-Rate CAD Pricing" },
  { icon: MessageCircle, label: "Dedicated Customer Support" },
];

const trustItemsFr = [
  { icon: MapPin, label: "Dépôt Ottawa disponible" },
  { icon: Truck, label: "Service de ramassage au Canada disponible" },
  { icon: Package, label: "Boîtes, barils, meubles et véhicules" },
  { icon: BadgeDollarSign, label: "Tarifs fixes en CAD" },
  { icon: MessageCircle, label: "Support client dédié" },
];

export default function TrustBar() {
  const { lang } = useLanguage();
  const trustItems = lang === "fr" ? trustItemsFr : trustItemsEn;

  return (
    <section className="bg-[#F5F2ED] border-y border-gray-200 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#0D1F5C] font-medium whitespace-nowrap">
              <item.icon className="size-4 shrink-0 text-brand-red" />
              <span>{item.label}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden sm:inline text-gray-300 ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
