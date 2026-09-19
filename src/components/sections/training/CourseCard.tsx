import { LinkArrow } from "@/components/common/LinkArrow";
import type { Dictionary } from "@/i18n/types";

type Course = Dictionary["training"]["courses"][number];

export function CourseCard({ course, learnMore, href }: { course: Course; learnMore: string; href: string }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_24px_rgba(10,50,28,.06)]">
      <div className="relative grid h-[150px] place-items-center bg-gradient-to-br from-brand-tint to-brand-tint-2">
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-brand-dark">
          {course.badge}
        </span>
        <span className="text-[44px] font-extrabold text-brand">{course.symbol}</span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-[19px] font-bold text-ink">{course.title}</h3>
        <p className="mb-4 text-sm text-muted">{course.desc}</p>
        <div className="flex items-center justify-between">
          <LinkArrow href={href}>{learnMore}</LinkArrow>
          <span className="text-[13px] text-muted-light">{course.meta}</span>
        </div>
      </div>
    </article>
  );
}
