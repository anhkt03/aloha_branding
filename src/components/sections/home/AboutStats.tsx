import { Section } from "@/components/common/Section";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Button } from "@/components/common/Button";
import { StatCard } from "@/components/common/StatCard";
import { Hand } from "@/components/common/Hand";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function AboutStats({
  about,
  locale,
}: {
  about: Dictionary["home"]["about"];
  locale: Locale;
}) {
  return (
    <Section id="about" tone="white" className="pt-2">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow className="mb-2.5">{about.eyebrow}</Eyebrow>
          <h2 className="text-[28px] font-extrabold leading-[1.25] tracking-[-0.01em] sm:text-[32px]">
            {about.title}
          </h2>
          <p className="mt-4 max-w-[520px] text-base leading-relaxed text-muted">{about.body}</p>

          <div className="mt-6 grid max-w-[460px] grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <Button href={localePath(locale, "home") + "#about"} size="md" className="mt-6">
            {about.cta} →
          </Button>
        </div>

        <div className="relative">
          <div className="h-[340px] rounded-3xl bg-gradient-to-br from-brand-emerald to-brand-deep shadow-[0_20px_48px_rgba(10,50,28,.16)]" />
          <Hand className="absolute -top-7 right-[-10px] rotate-[-6deg] text-right text-[26px] leading-tight text-brand">
            {about.hand}
          </Hand>
        </div>
      </div>
    </Section>
  );
}
