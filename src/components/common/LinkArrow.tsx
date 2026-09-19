import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkArrowProps {
  href: string;
  children: string;
  accent?: "brand" | "accent";
  className?: string;
}

/** Inline text link with a trailing arrow ("Learn more →"). */
export function LinkArrow({ href, children, accent = "brand", className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
        accent === "brand" ? "text-brand-dark hover:text-brand" : "text-accent hover:text-accent-dark",
        className,
      )}
    >
      {children} <span aria-hidden>→</span>
    </Link>
  );
}
