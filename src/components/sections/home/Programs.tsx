import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkArrow } from "@/components/common/LinkArrow";
import { localePath } from "@/config/routes";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type ProgramItem = Dictionary["home"]["programs"]["items"][number];

function ProgramCard({
  item,
  href,
  learnMore,
}: {
  item: ProgramItem;
  href: string;
  learnMore: string;
}) {
  const brand = item.accent === "brand";
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_24px_rgba(10,50,28,.06)]">
      <div
        className={cn(
          "grid h-[120px] place-items-center text-3xl font-extrabold",
          brand
            ? "bg-gradient-to-br from-brand-tint to-brand-tint-2 text-brand"
            : "bg-gradient-to-br from-accent-tint to-accent-tint-2 text-accent",
        )}
      >
        {item.symbol}
      </div>
      <div className="p-4">
        <h3 className="mb-1.5 text-base font-bold text-ink">{item.title}</h3>
        <p className="mb-3.5 text-[13px] text-muted">{item.desc}</p>
        <div className="flex items-center justify-between">
          <LinkArrow href={href} accent={item.accent} className="text-[13px]">
            {learnMore}
          </LinkArrow>
          <span
            className={cn(
              "grid h-[26px] min-w-[26px] place-items-center rounded-full px-1.5 text-xs font-bold text-white",
              brand ? "bg-brand" : "bg-accent",
            )}
          >
            {item.badge}
          </span>
        </div>
      </div>
    </article>
  );
}

export function Programs({
  programs,
  locale,
  learnMore,
}: {
  programs: Dictionary["home"]["programs"];
  locale: Locale;
  learnMore: string;
}) {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={programs.eyebrow}
        title={programs.title}
        action={
          <LinkArrow href={localePath(locale, "training")}>{programs.viewAll}</LinkArrow>
        }
      />
      <p className="mb-7 mt-2 text-[15px] text-muted">{programs.subtitle}</p>
      <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-5">
        {programs.items.map((item) => (
          <ProgramCard
            key={item.title}
            item={item}
            learnMore={learnMore}
            href={item.accent === "brand" ? localePath(locale, "training") : localePath(locale, "studyAbroad")}
          />
        ))}
      </div>
    </Section>
  );
}
