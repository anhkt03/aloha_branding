import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/i18n/types";

interface StepGridProps {
  eyebrow: string;
  title: string;
  steps: FeatureItem[];
  accent?: "brand" | "accent";
}

const columns: Record<number, string> = {
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-3 lg:grid-cols-5",
};

export function StepGrid({ eyebrow, title, steps, accent = "brand" }: StepGridProps) {
  const cols = columns[steps.length] ?? "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <Section tone="surface">
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} align="center" className="mb-9" />
      <div className={cn("grid grid-cols-1 gap-4", cols)}>
        {steps.map((step, i) => (
          <div key={step.title} className="rounded-2xl border border-line bg-card p-6">
            <div
              className={cn(
                "mb-3.5 grid h-10 w-10 place-items-center rounded-full font-extrabold text-white",
                accent === "brand" ? "bg-brand" : "bg-accent",
              )}
            >
              {i + 1}
            </div>
            <h3 className="mb-2 text-[17px] font-bold text-ink">{step.title}</h3>
            <p className="text-sm text-muted">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
