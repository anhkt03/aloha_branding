export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
