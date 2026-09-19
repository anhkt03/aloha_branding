import type { Locale } from "@/i18n/config";
import { localePath } from "@/config/routes";
import type { Dictionary } from "@/i18n/types";

export interface NavLink {
  key: string;
  label: string;
  href: string;
}

/** Build the primary navigation from the dictionary + active locale. */
export function buildNav(locale: Locale, nav: Dictionary["nav"]): NavLink[] {
  return [
    { key: "home", label: nav.home, href: localePath(locale, "home") },
    { key: "training", label: nav.training, href: localePath(locale, "training") },
    { key: "studyAbroad", label: nav.studyAbroad, href: localePath(locale, "studyAbroad") },
    { key: "about", label: nav.about, href: `/${locale}#about` },
    { key: "news", label: nav.news, href: `/${locale}#news` },
    { key: "contact", label: nav.contact, href: localePath(locale, "contact") },
  ];
}
