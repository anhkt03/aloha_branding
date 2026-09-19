import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, isLocale, type Locale } from "@/i18n/config";

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
    <>
      <HtmlLang locale={typedLocale} />
      <Header locale={typedLocale} nav={dict.nav} common={dict.common} />
      <main>{children}</main>
      <ScrollToTop label={dict.common.scrollTop} />
    </>
  );
}
