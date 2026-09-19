export const siteConfig = {
  name: "ALOHA",
  domain: "aloha.edu.vn",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "1900 3309",
  email: "tuvan@aloha.edu.vn",
  address: "Khu đô thị mới, TP. Bắc Ninh, tỉnh Bắc Ninh",
  hours: "8:00 – 21:00",
} as const;

export type SiteConfig = typeof siteConfig;
