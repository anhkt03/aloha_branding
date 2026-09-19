export const locales = ["vi", "en", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

/** Native label shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
  ja: "日本語",
  ko: "한국어",
};

/** Short code shown in the compact switcher trigger. */
export const localeShort: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  ja: "JA",
  ko: "KO",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
