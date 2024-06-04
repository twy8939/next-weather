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
      <h1 className="text-xs font-thin">About</h1>
      <p className="text-lg">{t("liveDuration", { duration: 17200000.2 })}</p>
    </main>
  );
}
