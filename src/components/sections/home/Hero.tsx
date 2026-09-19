import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { Hand } from "@/components/common/Hand";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Hero({ hero, locale }: { hero: Dictionary["home"]["hero"]; locale: Locale }) {
  return (
    <section className="bg-gradient-to-b from-surface to-page">
      <Container className="grid items-center gap-12 py-16 sm:py-[72px] lg:grid-cols-[560px_1fr]">
        {/* Copy */}
        <div>
          <Badge className="mb-[22px]">{hero.badge}</Badge>
          <h1 className="text-[42px] font-extrabold leading-[1.07] tracking-[-0.02em] sm:text-[56px] sm:leading-[60px]">
            {hero.titleLead}
            <br />
            <span className="text-brand">{hero.titleAccent}</span>
          </h1>
          <p className="mt-[18px] max-w-[480px] text-lg leading-7 text-muted">{hero.subtitle}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm text-ink-soft">
                <Icon name="check" size={18} className="text-brand" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Button href={localePath(locale, "training")} size="lg">
              {hero.ctaPrimary}
              <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white/20">
                →
              </span>
            </Button>
            <Button href={localePath(locale, "contact")} variant="outline" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>

          <Hand className="mt-6 block text-[30px] text-brand">{hero.hand}</Hand>
        </div>

        {/* Visual */}
        <div className="relative h-[440px] w-full">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_70%_30%,#d6ecdd,transparent)]" />
          <div className="absolute right-0 top-2.5 hidden h-[420px] w-[460px] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-emerald to-brand-dark shadow-[0_20px_48px_rgba(10,50,28,.18)] sm:block">
            <svg viewBox="0 0 460 420" className="h-full w-full">
              <g fill="#ffffff" opacity=".9">
                <circle cx="165" cy="150" r="46" />
                <rect x="120" y="205" width="90" height="150" rx="34" />
                <circle cx="300" cy="160" r="46" />
                <rect x="255" y="215" width="90" height="140" rx="34" />
              </g>
              <circle cx="380" cy="70" r="40" fill="#7fc79a" opacity=".5" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-2 flex items-center gap-3 rounded-2xl bg-card p-3.5 shadow-[0_12px_30px_rgba(10,50,28,.14)]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint font-extrabold text-brand">
              {hero.statValue}
            </span>
            <div>
              <div className="text-sm font-bold text-ink">{hero.statTitle}</div>
              <div className="text-xs text-muted-light">{hero.statDesc}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
