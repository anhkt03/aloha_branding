"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/common/Icon";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage may be unavailable — the attribute still applies */
  }
}

export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Sync with the attribute the inline script already set before paint.
  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:bg-surface hover:text-brand",
      )}
    >
      {/* Keep markup stable until mounted to avoid a hydration mismatch. */}
      <Icon name={mounted && isDark ? "sun" : "moon"} size={17} />
    </button>
  );
}
