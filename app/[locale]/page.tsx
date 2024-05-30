import { unstable_setRequestLocale } from "next-intl/server";
import WeatherAlerts from "../_components/WeatherAlerts/WeatherAlerts";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="min-h-screen">
      <h1 className="text-xs font-thin">Today&apos;s weather</h1>
      <h2 className="text-lg">Tuesday May 21 2024</h2>
      <section>
        <div className="flex items-baseline gap-3">
          <p>☀️</p>
          <p>Sunny</p>
          <p>22°C</p>
        </div>
      </section>

      <WeatherAlerts />
    </main>
  );
}
