import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names, resolving conflicts intelligently.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a numeric price into a localized currency string.
 */
export function formatPrice(
  amount: number,
  currency = "USD",
  locale = "en-US",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
