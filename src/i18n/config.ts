import type { Locale } from "../data/types";

export const locales = ["pt", "en"] as const;
export const defaultLocale: Locale = "pt";

export const routes = {
  home: { pt: "/", en: "/en/" },
} as const;

export type RouteKey = keyof typeof routes;

export function getRoute(locale: Locale, route: RouteKey): string {
  return routes[route][locale];
}

export function getSectionHref(locale: Locale, section: string): string {
  return `${getRoute(locale, "home")}#${section}`;
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "pt" ? "en" : "pt";
}
