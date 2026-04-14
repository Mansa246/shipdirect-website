"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
