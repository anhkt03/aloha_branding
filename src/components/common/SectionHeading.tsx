import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  accent?: "brand" | "accent";
  align?: "left" | "center";
  /** Right-aligned action (e.g. "View all →") shown next to the title on wide screens. */
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = "brand",
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        centered && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow && (
          <Eyebrow accent={accent} className="mb-2">
            {eyebrow}
          </Eyebrow>
        )}
        <h2 className="text-3xl font-extrabold tracking-[-0.01em] text-ink sm:text-[34px]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
