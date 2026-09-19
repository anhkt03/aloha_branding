import type { Locale } from "@/i18n/config";

/** Locale-neutral path segments; labels come from the dictionary's `nav`. */
export const routes = {
  home: "",
  training: "dao-tao",
  studyAbroad: "du-hoc",
  contact: "dang-ky",
} as const;

export type RouteKey = keyof typeof routes;

/** Build a locale-prefixed href, e.g. localePath("en", "training") -> "/en/dao-tao". */
export function localePath(locale: Locale, key: RouteKey): string {
  const segment = routes[key];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}
