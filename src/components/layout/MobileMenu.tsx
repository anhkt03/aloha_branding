"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const overlay = (
    <div
      className={cn("fixed inset-0 z-[100] xl:hidden", !open && "pointer-events-none")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <nav
        className={cn(
          "absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-page shadow-xl transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full",
        )}
        style={{
          paddingTop: "calc(1.5rem + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
          paddingInline: "1.5rem",
        }}
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

        <div className="flex flex-col gap-1 overflow-y-auto">
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

  return createPortal(overlay, document.body);
}
