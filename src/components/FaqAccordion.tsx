"use client";

import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Card className="rounded-3xl px-6 py-2 shadow-[var(--shadow-card)] sm:px-8">
      <Accordion type="single" collapsible>
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="py-5 text-base font-semibold text-brand-navy hover:no-underline">{item.q}</AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-body">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
