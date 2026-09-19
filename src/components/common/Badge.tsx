import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "brand" | "accent" | "solid";

const variants: Record<Variant, string> = {
  brand: "bg-brand-tint text-brand-dark",
  accent: "bg-accent-tint text-accent",
  solid: "bg-brand text-white",
};

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/** Pill label used for eyebrow badges and card tags. */
export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
