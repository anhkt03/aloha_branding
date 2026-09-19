import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  href?: string;
  /** "dark" wordmark for light backgrounds, "light" for the footer. */
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
}

export function Logo({ href, tone = "dark", size = "md", className }: LogoProps) {
  const mark = (
    <span className={cn("flex items-center", size === "sm" ? "gap-2.5" : "gap-2.5")}>
      <span
        className={cn(
          "grid place-items-center rounded-[9px] bg-brand font-extrabold text-white",
          size === "sm" ? "h-[30px] w-[30px] text-base" : "h-[34px] w-[34px] text-lg",
        )}
      >
        A
      </span>
      <span
        className={cn(
          "font-extrabold tracking-[-0.01em]",
          size === "sm" ? "text-lg" : "text-xl",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {siteConfig.name}
      </span>
    </span>
  );

  if (!href) return <span className={className}>{mark}</span>;
  return (
    <Link href={href} className={cn("inline-flex", className)} aria-label={siteConfig.name}>
      {mark}
    </Link>
  );
}
