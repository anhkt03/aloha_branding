import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { StudyHero } from "@/components/sections/study-abroad/StudyHero";
import { CountryCards } from "@/components/sections/study-abroad/CountryCards";
import { StepGrid } from "@/components/sections/shared/StepGrid";
import { ScholarshipStrip } from "@/components/sections/study-abroad/ScholarshipStrip";
import { FooterCompact } from "@/components/layout/FooterCompact";

export default async function StudyAbroadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "vi";
  const dict = await getDictionary(l);
  const { studyAbroad, common, nav, footer } = dict;

  return (
    <>
      <StudyHero
        hero={studyAbroad.hero}
        breadcrumbHome={common.breadcrumbHome}
        navLabel={nav.studyAbroad}
        locale={l}
      />
      <CountryCards countries={studyAbroad.countries} cta={common.learnMore} locale={l} />
      <StepGrid
        eyebrow={studyAbroad.process.eyebrow}
        title={studyAbroad.process.title}
        steps={studyAbroad.process.steps}
        accent="accent"
      />
      <ScholarshipStrip scholarship={studyAbroad.scholarship} locale={l} />
      <FooterCompact footer={footer} common={common} />
    </>
  );
}
