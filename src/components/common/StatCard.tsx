import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  /** "tint" = filled green box (about section), "plain" = compact (page hero). */
  tone?: "tint" | "plain";
  className?: string;
}

export function StatCard({ value, label, tone = "tint", className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        tone === "tint" ? "bg-brand-tint p-5" : "bg-brand-tint px-[22px] py-4 text-center",
        className,
      )}
    >
      <div
        className={cn(
          "font-extrabold text-brand-dark",
          tone === "tint" ? "text-[32px]" : "text-[28px]",
        )}
      >
        {value}
      </div>
      <div className="mt-1 text-[13px] text-muted">{label}</div>
    </div>
  );
}
