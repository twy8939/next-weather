import type { Metadata } from "next";
import "../globals.css";
import Header from "../_components/Header";
import { Locale, locales } from "@/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Next Weather",
  description: "A weather app built with Next.js.",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={"mx-auto w-[500px] bg-slate-950 px-6 pt-3 text-sky-100"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
