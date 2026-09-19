/** Temporary default; replace when the real domain is ready. */
const FALLBACK_URL = "https://aloha.vercel.app";

/**
 * Resolve the public site URL safely. NEXT_PUBLIC_SITE_URL is used only when
 * it is a valid absolute URL (a bare host like "aloha.vercel.app" is upgraded
 * to https). Anything invalid falls back — so `new URL(siteConfig.url)` in
 * metadata can never throw during a production build.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    try {
      return new URL(candidate).origin;
    } catch {
      /* invalid value — fall through to the default */
    }
  }
  return FALLBACK_URL;
}

export const siteConfig = {
  name: "ALOHA",
  domain: "aloha.edu.vn",
  url: resolveSiteUrl(),
  phone: "1900 3309",
  email: "tuvan@aloha.edu.vn",
  address: "Khu đô thị mới, TP. Bắc Ninh, tỉnh Bắc Ninh",
  hours: "8:00 – 21:00",
} as const;

export type SiteConfig = typeof siteConfig;
