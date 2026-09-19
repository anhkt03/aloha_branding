import { Section } from "@/components/common/Section";
import { Button } from "@/components/common/Button";
import { localePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function ScholarshipStrip({
  scholarship,
  locale,
}: {
  scholarship: Dictionary["studyAbroad"]["scholarship"];
  locale: Locale;
}) {
  return (
    <Section tone="white" id="scholarship">
      <div className="flex flex-col justify-between gap-6 rounded-3xl bg-accent-tint px-8 py-10 sm:px-12 md:flex-row md:items-center">
        <div className="max-w-[640px]">
          <h2 className="mb-2.5 text-[24px] font-extrabold text-accent-dark sm:text-[28px]">
            {scholarship.title}
          </h2>
          <p className="text-[15px] text-accent-dark/80">{scholarship.body}</p>
        </div>
        <Button href={localePath(locale, "contact")} variant="accent" size="lg">
          {scholarship.button} →
        </Button>
      </div>
    </Section>
  );
}
