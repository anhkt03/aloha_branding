"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

/**
 * Keeps <html lang> in sync with the active locale. The <html> element lives in
 * the root layout (so it never remounts on locale change — which is what keeps
 * the theme from flashing), so lang is updated here on the client instead.
 */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
