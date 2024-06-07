import { unstable_setRequestLocale } from "next-intl/server";
import WeatherAlerts from "../_components/WeatherAlerts/WeatherAlerts";
import { useFormatter, useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const format = useFormatter();

  unstable_setRequestLocale(locale);

  const t = useTranslations("Home");

  return (
    <main className="min-h-screen">
      <p className="mx-auto mb-2 w-max rounded-sm bg-slate-800 px-2 py-1 text-xs text-sky-200">
        {t("userGreeting", { name: "YongMin" })}
      </p>

      <h1 className="text-xs font-thin">Today&apos;s weather</h1>
      <h2 className="text-lg">
        {format.dateTime(new Date("2024-06-07"), { dateStyle: "full" })}
      </h2>
      <section>
        <div className="flex items-baseline gap-3">
          <p>☀️</p>
          <p>Sunny</p>
          <p>
            {format.number(22, {
              style: "unit",
              unit: "celsius",
            })}
          </p>
        </div>
      </section>

      <WeatherAlerts />
    </main>
  );
}
