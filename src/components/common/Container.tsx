import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/** Centered content column — max 1200px, matching the design. */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-5 lg:px-6", className)}>
      {children}
    </Tag>
  );
}
