import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkArrow } from "@/components/common/LinkArrow";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/types";

type Story = Dictionary["home"]["testimonials"]["items"][number];

function StoryCard({ story }: { story: Story }) {
  const brand = story.accent === "brand";
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card">
      <div
        className={cn(
          "h-[190px]",
          brand
            ? "bg-gradient-to-br from-brand-tint-2 to-brand-tint"
            : "bg-gradient-to-br from-accent-tint-2 to-accent-tint",
        )}
      />
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-ink">{story.title}</h3>
        <p className="mb-4 text-sm text-muted">&ldquo;{story.quote}&rdquo;</p>
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full font-bold text-white",
              brand ? "bg-brand" : "bg-accent",
            )}
          >
            {story.name.charAt(0)}
          </span>
          <div className="text-[13px]">
            <div className="font-semibold text-ink">{story.name}</div>
            <div className="text-muted-light">{story.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials({ testimonials }: { testimonials: Dictionary["home"]["testimonials"] }) {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        action={<LinkArrow href="#">{testimonials.viewAll}</LinkArrow>}
        className="mb-7"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.items.map((story) => (
          <StoryCard key={story.name} story={story} />
        ))}
      </div>
    </Section>
  );
}
