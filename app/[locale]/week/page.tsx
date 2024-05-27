import { promises as fs } from "fs";

export default async function Home() {
  const fileContents = await fs.readFile(
    `${process.cwd()}/app/_data/week.json`,
    "utf-8"
  );
  const { weeklyWeather } = JSON.parse(fileContents) as WeeklyWeatherRoot;
  return (
    <main className="min-h-screen">
      <h1 className="text-xs font-thin">Today&apos;s weather</h1>
      <div className="divide-y divide-dashed divide-sky-900">
        {weeklyWeather.map((day) => (
          <section key={day.dateTime} className="py-5">
            <h2 className="text-md font-thin mb-1">
              {new Date(day.dateTime).toString()}
            </h2>
            <div>
              <div className="flex items-baseline gap-3">
                <p className="relative top-1 text-3xl">{day.conditionIcon}</p>
                <p className="text-2xl font-light">{day.condition}</p>
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
