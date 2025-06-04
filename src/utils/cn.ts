import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names or conditional class names and merges Tailwind CSS classes efficiently
 * @param classes - Array of class names, objects, or falsy values
 * @returns Merged and deduplicated className string
 */
export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}
