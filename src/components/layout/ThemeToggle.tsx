"use client";

import { Icon } from "@/components/common/Icon";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ label }: { label: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:bg-surface hover:text-brand"
    >
      <Icon name={isDark ? "sun" : "moon"} size={17} />
    </button>
  );
}
