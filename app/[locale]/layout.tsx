import type { Metadata } from "next";
import "../globals.css";
import Header from "../_components/Header";
import { Locale, locales } from "@/i18n.config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import useTextDirection from "../_hooks/useTextDirection";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// export const metadata: Metadata = {
//   title: "Next Weather",
//   description: "A weather app built with Next.js.",
// };

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Layout.metaData" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);

  const dir = useTextDirection();
  return (
    <html lang={locale} dir={dir}>
      <body className={"mx-auto w-[500px] bg-slate-950 px-6 pt-3 text-sky-100"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
