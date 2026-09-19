"use client";

import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { cn } from "@/lib/utils";
import type { NavLink } from "./nav-items";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavLink[];
  activeKey: string;
  phone: string;
  consultLabel: string;
  consultHref: string;
}

export function MobileMenu({
  open,
  onClose,
  items,
  activeKey,
  phone,
  consultLabel,
  consultHref,
}: MobileMenuProps) {
  return (
    <div
      className={cn("fixed inset-0 z-50 xl:hidden", !open && "pointer-events-none")}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <nav
        className={cn(
          "absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-page p-6 shadow-xl transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full text-muted hover:bg-surface"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              className={cn(
                "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                item.key === activeKey
                  ? "bg-brand-tint text-brand-dark"
                  : "text-ink-soft hover:bg-surface",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto space-y-4 pt-6">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 font-bold text-brand-dark"
          >
            <Icon name="phone" size={18} className="text-brand" />
            {phone}
          </a>
          <Button href={consultHref} className="w-full">
            {consultLabel}
          </Button>
        </div>
      </nav>
    </div>
  );
}
