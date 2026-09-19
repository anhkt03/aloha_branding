import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HandProps {
  children: ReactNode;
  className?: string;
}

/** Handwritten (Caveat) accent text used across the design. */
export function Hand({ children, className }: HandProps) {
  return <span className={cn("font-hand", className)}>{children}</span>;
}
