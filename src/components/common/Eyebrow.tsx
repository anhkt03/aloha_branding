import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: string;
  accent?: "brand" | "accent";
  className?: string;
}

/** Small uppercase kicker above a heading. */
export function Eyebrow({ children, accent = "brand", className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "text-xs font-bold uppercase tracking-[0.1em]",
        accent === "brand" ? "text-brand" : "text-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
