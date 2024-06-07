import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export default function About({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("About");
  return (
    <main className="min-h-screen">
      <h1 className="text-xs font-thin">{t("title")}</h1>
      <p className="mb-3 text-lg">
        {t.rich("description", {
          linkToNext: (chunks) => (
            <a href="https://nextjs.org" className="text-sky-200 underline">
              {chunks}
            </a>
          ),
        })}
      </p>
      <p className="text-lg">{t("liveDuration", { duration: 17200000.2 })}</p>
    </main>
  );
}
