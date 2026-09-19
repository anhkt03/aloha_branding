import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Be_Vietnam_Pro, Caveat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { themeInitScript } from "@/lib/theme";
import "../globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "vi");
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${dict.common.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.footer.blurb,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      className={`${beVietnam.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Sets data-theme before first paint to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Header locale={typedLocale} nav={dict.nav} common={dict.common} />
        <main>{children}</main>
      </body>
    </html>
  );
}
