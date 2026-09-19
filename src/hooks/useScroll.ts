"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  scrollY: number;
  scrolled: boolean;
  direction: "up" | "down";
}

/**
 * Track vertical scroll position, a "scrolled past threshold" flag,
 * and the current scroll direction.
 */
export function useScroll(threshold = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrolled: false,
    direction: "up",
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setState({
        scrollY,
        scrolled: scrollY > threshold,
        direction: scrollY > lastY ? "down" : "up",
      });
      lastY = scrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}
