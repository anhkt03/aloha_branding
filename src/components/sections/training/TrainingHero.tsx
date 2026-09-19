import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { StatCard } from "@/components/common/StatCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function TrainingHero({
  hero,
  breadcrumbHome,
  navLabel,
  locale,
}: {
  hero: Dictionary["training"]["hero"];
  breadcrumbHome: string;
  navLabel: string;
  locale: Locale;
}) {
  return (
    <section className="bg-gradient-to-b from-surface to-page">
      <Container className="py-11">
        <Breadcrumb
          home={{ label: breadcrumbHome, href: localePath(locale, "home") }}
          current={navLabel}
          className="mb-3.5"
        />
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-[640px]">
            <Eyebrow className="mb-2">{hero.eyebrow}</Eyebrow>
            <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.02em] sm:text-[44px] sm:leading-[48px]">
              {hero.title}
            </h1>
            <p className="mt-3 text-[17px] leading-relaxed text-muted">{hero.subtitle}</p>
          </div>
          <div className="flex gap-4">
            {hero.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} tone="plain" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
