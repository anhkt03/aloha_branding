import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type Country = Dictionary["studyAbroad"]["countries"]["items"][number];

function CountryCard({ country, cta, href }: { country: Country; cta: string; href: string }) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-line bg-card shadow-[0_8px_24px_rgba(20,60,120,.08)]">
      <div className="grid h-[170px] place-items-center bg-gradient-to-br from-accent-tint to-accent-tint-2 text-[44px] font-extrabold text-accent">
        {country.flag}
      </div>
      <div className="p-[22px]">
        <h3 className="mb-2 text-xl font-bold text-ink">{country.title}</h3>
        <p className="mb-4 text-sm text-muted">{country.desc}</p>
        <ul className="mb-4 space-y-2">
          {country.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-[13px] text-muted">
              <Icon name="check" size={16} className="text-accent" />
              {bullet}
            </li>
          ))}
        </ul>
        <Button href={href} variant="accent" size="sm">
          {cta} →
        </Button>
      </div>
    </article>
  );
}

export function CountryCards({
  countries,
  cta,
  locale,
}: {
  countries: Dictionary["studyAbroad"]["countries"];
  cta: string;
  locale: Locale;
}) {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow={countries.eyebrow}
        title={countries.title}
        accent="accent"
        align="center"
        className="mb-8"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {countries.items.map((country) => (
          <CountryCard
            key={country.title}
            country={country}
            cta={cta}
            href={localePath(locale, "contact")}
          />
        ))}
      </div>
    </Section>
  );
}
