import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Button } from "@/components/common/Button";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function StudyHero({
  hero,
  breadcrumbHome,
  navLabel,
  locale,
}: {
  hero: Dictionary["studyAbroad"]["hero"];
  breadcrumbHome: string;
  navLabel: string;
  locale: Locale;
}) {
  return (
    <section className="bg-gradient-to-b from-accent-tint to-page">
      <Container className="py-11">
        <Breadcrumb
          home={{ label: breadcrumbHome, href: localePath(locale, "home") }}
          current={navLabel}
          accent="accent"
          className="mb-3.5"
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <Eyebrow accent="accent" className="mb-2">
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.02em] sm:text-[44px] sm:leading-[48px]">
              {hero.title}
            </h1>
            <p className="mt-3.5 max-w-[520px] text-[17px] leading-relaxed text-muted">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <Button href={localePath(locale, "contact")} variant="accent" size="lg">
                {hero.ctaPrimary}
                <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white/25">
                  →
                </span>
              </Button>
              <Button href="#scholarship" variant="outlineAccent" size="lg">
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] rounded-3xl bg-gradient-to-br from-accent-light to-accent shadow-[0_20px_48px_rgba(20,60,120,.2)]">
            <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-2xl bg-card p-3">
              <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-accent-tint font-extrabold text-accent">
                {hero.statValue}
              </span>
              <div className="text-[13px]">
                <div className="font-bold text-ink">{hero.statTitle}</div>
                <div className="text-muted-light">{hero.statDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
