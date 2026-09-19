import { Section } from "@/components/common/Section";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Button } from "@/components/common/Button";
import { LinkArrow } from "@/components/common/LinkArrow";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Locations({
  locations,
  locale,
}: {
  locations: Dictionary["home"]["locations"];
  locale: Locale;
}) {
  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow className="mb-2">{locations.eyebrow}</Eyebrow>
          <h2 className="mb-3.5 text-[28px] font-extrabold tracking-[-0.01em] sm:text-[32px]">
            {locations.title}
          </h2>
          <p className="mb-6 max-w-[420px] text-base text-muted">{locations.body}</p>
          <Button href={localePath(locale, "contact")} size="md">
            {locations.cta} →
          </Button>
        </div>

        <div className="flex gap-5">
          <div className="hidden w-[240px] shrink-0 place-items-center rounded-[20px] bg-surface sm:grid">
            <svg width="120" height="220" viewBox="0 0 120 220" fill="none" aria-hidden>
              <path
                d="M60 8C40 40 20 60 26 110c4 40 28 70 34 100 6-30 30-60 34-100C100 60 80 40 60 8z"
                fill="#e7f4ec"
                stroke="#128049"
                strokeWidth="1.5"
              />
              <circle cx="52" cy="70" r="5" fill="#128049" />
              <circle cx="70" cy="110" r="5" fill="#128049" />
              <circle cx="56" cy="150" r="5" fill="#128049" />
            </svg>
          </div>

          <div className="flex flex-1 flex-col gap-3">
            {locations.items.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-2xl border border-line bg-card p-3.5"
              >
                <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-brand-tint font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{item.name}</div>
                  <div className="text-xs text-muted-light">{item.area}</div>
                </div>
              </div>
            ))}
            <LinkArrow href={localePath(locale, "contact")} className="text-[13px]">
              {locations.viewAll}
            </LinkArrow>
          </div>
        </div>
      </div>
    </Section>
  );
}
