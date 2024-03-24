import { NextResponse } from "next/server";
import { i18n } from "./i18n";

let defaultLocale = i18n.defaultLocale;
let locales = i18n.locales;

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const localeInPath = pathname.split("/")[1];

  if (!locales.includes(localeInPath)) {
    const restPath = pathname.substring(3); // Remove the incorrect locale prefix
    const newUrl = new URL(`/${defaultLocale}${restPath}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return null;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
