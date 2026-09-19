"use client";

import { cn } from "@/lib/utils";

interface CourseFilterProps {
  filters: string[];
  active: string;
  onSelect: (filter: string) => void;
}

/** Presentational pill filter row. State lives in the parent explorer. */
export function CourseFilter({ filters, active, onSelect }: CourseFilterProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {filters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onSelect(filter)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full px-[18px] py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-brand font-semibold text-white"
                : "border border-line bg-card text-ink-soft hover:border-brand hover:text-brand",
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
