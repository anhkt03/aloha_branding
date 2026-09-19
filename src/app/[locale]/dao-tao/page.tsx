import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { TrainingHero } from "@/components/sections/training/TrainingHero";
import { CourseExplorer } from "@/components/sections/training/CourseExplorer";
import { StepGrid } from "@/components/sections/shared/StepGrid";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { FooterCompact } from "@/components/layout/FooterCompact";
import { localePath } from "@/config/routes";

export default async function TrainingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "vi";
  const dict = await getDictionary(l);
  const { training, common, nav, footer } = dict;

  return (
    <>
      <TrainingHero
        hero={training.hero}
        breadcrumbHome={common.breadcrumbHome}
        navLabel={nav.training}
        locale={l}
      />
      <CourseExplorer
        filters={training.filters}
        courses={training.courses}
        learnMore={common.learnMore}
        href={localePath(l, "contact")}
      />
      <StepGrid eyebrow={training.path.eyebrow} title={training.path.title} steps={training.path.steps} />
      <CtaBand
        title={training.cta.title}
        body={training.cta.body}
        actions={[{ label: training.cta.button, href: localePath(l, "contact"), style: "white" }]}
      />
      <FooterCompact footer={footer} common={common} />
    </>
  );
}
