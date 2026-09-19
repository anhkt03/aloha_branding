import type { ImageAsset } from "./common";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: ImageAsset;
  tags?: string[];
  featured?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
  rating?: number;
}
