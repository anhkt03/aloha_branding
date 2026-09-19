import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/components/sections/home/Hero";
import { JourneyChooser } from "@/components/sections/home/JourneyChooser";
import { AboutStats } from "@/components/sections/home/AboutStats";
import { Programs } from "@/components/sections/home/Programs";
import { WhyAloha } from "@/components/sections/home/WhyAloha";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Locations } from "@/components/sections/home/Locations";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Footer } from "@/components/layout/Footer";
import { localePath } from "@/config/routes";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "vi";
  const dict = await getDictionary(l);
  const { home, common, footer } = dict;

  return (
    <>
      <Hero hero={home.hero} locale={l} />
      <JourneyChooser journey={home.journey} common={common} locale={l} />
      <AboutStats about={home.about} locale={l} />
      <Programs programs={home.programs} locale={l} learnMore={common.learnMore} />
      <WhyAloha why={home.why} />
      <Testimonials testimonials={home.testimonials} />
      <Locations locations={home.locations} locale={l} />
      <CtaBand
        title={home.cta.title}
        body={home.cta.body}
        hand={home.cta.hand}
        actions={[
          { label: home.cta.primary, href: localePath(l, "training"), style: "white" },
          { label: home.cta.secondary, href: localePath(l, "studyAbroad"), style: "translucent" },
        ]}
      />
      <Footer footer={footer} common={common} />
    </>
  );
}
