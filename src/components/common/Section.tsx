import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "white" | "surface";

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  /** Skip the inner Container (for full-bleed content). */
  bleed?: boolean;
}

const tones: Record<Tone, string> = {
  white: "bg-page",
  surface: "bg-surface",
};

export function Section({
  children,
  id,
  tone = "white",
  className,
  containerClassName,
  bleed = false,
}: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], "py-14 sm:py-[72px]", className)}>
      {bleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
