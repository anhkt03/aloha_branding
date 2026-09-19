import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Icon, type IconName } from "@/components/common/Icon";
import { localePath, type RouteKey } from "@/config/routes";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface JourneyCardProps {
  icon: IconName;
  title: string;
  desc: string;
  href: string;
  cta: string;
  variant: "brand" | "accent";
}

function JourneyCard({ icon, title, desc, href, cta, variant }: JourneyCardProps) {
  const brand = variant === "brand";
  return (
    <div
      className={cn(
        "flex min-h-[210px] items-center justify-between gap-6 rounded-3xl p-9",
        brand ? "bg-brand-tint" : "bg-sand",
      )}
    >
      <div className="max-w-[300px]">
        <span
          className={cn(
            "mb-4 grid h-[52px] w-[52px] place-items-center rounded-2xl text-white",
            brand ? "bg-brand" : "bg-accent",
          )}
        >
          <Icon name={icon} size={24} />
        </span>
        <h3 className={cn("mb-2 text-2xl font-bold", brand ? "text-brand-dark" : "text-sand-ink")}>
          {title}
        </h3>
        <p className={cn("mb-[18px] text-[15px]", brand ? "text-ink-soft" : "text-sand-ink/80")}>{desc}</p>
        <Button href={href} variant={brand ? "primary" : "accent"} size="sm">
          {cta} →
        </Button>
      </div>
      <div
        className={cn(
          "hidden h-[150px] w-[150px] shrink-0 rounded-[20px] sm:block",
          brand
            ? "bg-gradient-to-br from-brand-emerald to-brand-dark"
            : "bg-gradient-to-br from-accent-light to-accent",
        )}
      />
    </div>
  );
}

export function JourneyChooser({
  journey,
  common,
  locale,
}: {
  journey: Dictionary["home"]["journey"];
  common: Dictionary["common"];
  locale: Locale;
}) {
  const cards: (JourneyCardProps & { key: RouteKey })[] = [
    {
      key: "training",
      icon: "book",
      title: journey.training.title,
      desc: journey.training.desc,
      href: localePath(locale, "training"),
      cta: common.explore,
      variant: "brand",
    },
    {
      key: "studyAbroad",
      icon: "plane",
      title: journey.study.title,
      desc: journey.study.desc,
      href: localePath(locale, "studyAbroad"),
      cta: common.explore,
      variant: "accent",
    },
  ];

  return (
    <Section tone="white" className="pt-4">
      <SectionHeading
        align="center"
        eyebrow={journey.eyebrow}
        title={journey.title}
        subtitle={journey.subtitle}
        className="mb-8"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map(({ key, ...card }) => (
          <JourneyCard key={key} {...card} />
        ))}
      </div>
    </Section>
  );
}
