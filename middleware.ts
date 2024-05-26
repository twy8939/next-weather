import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";

export default createMiddleware({
  defaultLocale: "en-us",
  locales,
  localeDetection: false,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
