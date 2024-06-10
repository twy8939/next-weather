import { WeeklyWeatherRoot } from "@/types";
import { promises as fs } from "fs";
import { getFormatter, getTranslations } from "next-intl/server";

export default async function Home() {
  const fileContents = await fs.readFile(
    `${process.cwd()}/app/_data/week.json`,
    "utf-8"
  );
  const { weeklyWeather } = JSON.parse(fileContents) as WeeklyWeatherRoot;

  const t = await getTranslations("Week");

  const format = await getFormatter();

  return (
    <main className="min-h-screen">
      <h1 className="text-xs font-thin">{t("title")}</h1>
      <div className="divide-y divide-dashed divide-sky-900">
        {weeklyWeather.map((day, index) => (
          <section key={day.dateTime} className="py-5">
            <h2 className="text-md font-thin mb-1">
              {t("dayDate", {
                dayDate: new Date(day.dateTime),
              })}
            </h2>
            <p className="w-max rounded-md bg-red-900 px-2 py-1 text-xs text-red-100">
              {t("alertCount", { count: index })}
            </p>
            <div>
              <div className="flex items-baseline gap-3">
                <p className="relative top-1 text-3xl">{day.conditionIcon}</p>
                <p className="text-2xl font-light">{t(day.condition)}</p>
                <p className="text-2xl font-thin">
                  {day.temperature.celsius}°C
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
