import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "outlineAccent" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand",
  accent: "bg-accent text-white hover:bg-accent-dark focus-visible:outline-accent",
  outline:
    "border-[1.5px] border-line-strong text-brand-dark hover:bg-brand-tint focus-visible:outline-brand",
  outlineAccent:
    "border-[1.5px] border-accent-tint-2 text-accent hover:bg-accent-tint focus-visible:outline-accent",
  white: "bg-white text-brand-dark hover:bg-brand-tint focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-3 text-sm",
  md: "px-[22px] py-[13px] text-sm",
  lg: "px-[26px] py-[15px] text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type AsLink = CommonProps & { href: string; external?: boolean };

type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const rest = props as AsButton;
  return (
    <button
      type={rest.type ?? "button"}
      className={classes}
      onClick={rest.onClick}
      disabled={rest.disabled}
    >
      {children}
    </button>
  );
}
