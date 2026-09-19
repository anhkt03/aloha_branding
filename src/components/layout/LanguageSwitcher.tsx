"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeNames,
  localeShort,
  isLocale,
  defaultLocale,
  type Locale,
} from "@/i18n/config";
import { Icon } from "@/components/common/Icon";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  current: Locale;
  /** Light styling for dark backgrounds. */
  tone?: "dark" | "light";
}

/** Rebuild the current path under a different locale prefix. */
function swapLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/");
  // segments[0] is "" (leading slash); segments[1] is the locale.
  if (segments[1] && isLocale(segments[1])) {
    segments[1] = next;
  } else {
    segments.splice(1, 0, next);
  }
  const path = segments.join("/");
  return path || `/${next}`;
}

export function LanguageSwitcher({ current, tone = "dark" }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${defaultLocale}`;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-semibold transition-colors",
          tone === "dark"
            ? "border-line text-ink-soft hover:bg-surface"
            : "border-white/25 text-white hover:bg-white/10",
        )}
      >
        <Icon name="globe" size={16} />
        {localeShort[current]}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-line bg-card p-1.5 shadow-[0_12px_30px_rgba(10,50,28,.14)]"
        >
          {locales.map((locale) => {
            const active = locale === current;
            return (
              <li key={locale} role="option" aria-selected={active}>
                <Link
                  href={swapLocale(pathname, locale)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-brand-tint font-semibold text-brand-dark"
                      : "text-ink-soft hover:bg-surface",
                  )}
                >
                  {localeNames[locale]}
                  {active && <Icon name="check" size={16} className="text-brand" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
