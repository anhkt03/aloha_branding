import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  home: { label: string; href: string };
  current: string;
  accent?: "brand" | "accent";
  className?: string;
}

export function Breadcrumb({ home, current, accent = "brand", className }: BreadcrumbProps) {
  return (
    <nav className={cn("text-[13px] text-muted-light", className)} aria-label="Breadcrumb">
      <Link href={home.href} className="hover:text-ink-soft">
        {home.label}
      </Link>{" "}
      / <span className={accent === "brand" ? "text-brand" : "text-accent"}>{current}</span>
    </nav>
  );
}
