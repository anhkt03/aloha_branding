"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { buildNav } from "./nav-items";
import { useScroll } from "@/hooks/useScroll";
import { localePath } from "@/config/routes";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface HeaderProps {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
}

export function Header({ locale, nav, common }: HeaderProps) {
  const items = buildNav(locale, nav);
  const pathname = usePathname();
  const { scrolled } = useScroll(8);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const home = localePath(locale, "home");
  const consultHref = localePath(locale, "contact");

  function isActive(href: string, key: string): boolean {
    if (key === "home") return pathname === home;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const activeKey = items.find((i) => isActive(i.href, i.key))?.key ?? "home";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled ? "border-line bg-page/90 backdrop-blur" : "border-transparent bg-page",
      )}
    >
      <Container className="flex h-[76px] items-center gap-7">
        <Logo href={home} />

        <nav className="ml-2 hidden items-center gap-6 lg:flex">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-brand",
                item.key === activeKey ? "font-semibold text-brand" : "text-ink-soft",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${common.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 font-bold text-brand-dark md:flex"
          >
            <Icon name="phone" size={18} className="text-brand" />
            {common.phone}
          </a>

          <ThemeToggle label={common.theme} />

          <LanguageSwitcher current={locale} />

          <Button href={consultHref} size="sm" className="hidden sm:inline-flex">
            {common.consult}
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ink-soft hover:bg-surface lg:hidden"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={items}
        activeKey={activeKey}
        phone={common.phone}
        consultLabel={common.consult}
        consultHref={consultHref}
      />
    </header>
  );
}
