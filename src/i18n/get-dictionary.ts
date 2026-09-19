import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  vi: () => import("./dictionaries/vi"),
  en: () => import("./dictionaries/en"),
  ja: () => import("./dictionaries/ja"),
  ko: () => import("./dictionaries/ko"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries.vi;
  const mod = await load();
  return mod.dictionary;
}
