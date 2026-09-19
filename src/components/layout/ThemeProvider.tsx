"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { readStoredTheme, persistTheme, type Theme } from "@/lib/theme";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Runs before paint on the client; falls back to useEffect during SSR to avoid warnings.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Re-apply the stored theme on mount. This provider lives inside the
  // [locale] layout, so it re-runs on every locale switch and restores the
  // theme before the browser paints — fixing the reset-to-light bug.
  useIsomorphicLayoutEffect(() => {
    const stored = readStoredTheme();
    setTheme(stored);
    document.documentElement.dataset.theme = stored;
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      persistTheme(next);
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
