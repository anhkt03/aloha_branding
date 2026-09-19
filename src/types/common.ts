import type { ReactNode } from "react";

export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}
