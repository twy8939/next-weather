"use client";

import {
  Locale,
  localeNames,
  locales,
  usePathname,
  useRouter,
} from "@/i18n.config";
import React from "react";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;

    router.replace(pathname, { locale: newLocale });
  };
  return (
    <div>
      <select
        value={locale}
        onChange={handleLocaleChange}
        className="rounded-sm bg-sky-200 px-2 py-1 text-sky-950"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </div>
  );
}
