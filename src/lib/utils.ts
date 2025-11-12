import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function doc(): Document | null {
  if (typeof document === "undefined") {
    return null;
  }
  return document;
}

export function win(): Window | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window;
}
