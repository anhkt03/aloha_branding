"use client";

import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

/** Floating button that appears after scrolling down and returns to the top. */
export function ScrollToTop({ label = "Lên đầu trang" }: { label?: string }) {
  const { scrollY } = useScroll(400);
  const visible = scrollY > 400;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgba(10,50,28,.28)] transition-all hover:bg-brand-dark",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
