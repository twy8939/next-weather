import enUSMessages from "./locales/en-us.json";

type Messages = typeof enUSMessages;
declare global {
  interface IntlMessages extends Messages {}
}

export interface WeeklyWeatherRoot {
  weeklyWeather: WeeklyWeather[];
}

type Condition =
  | "sunny"
  | "cloudy"
  | "rainy"
  | "partlyCloudy"
  | "showers"
  | "thunderstorms";

export interface WeeklyWeather {
  dateTime: string;
  condition: Condition;
  conditionIcon: string;
  temperature: Temperature;
}

export interface Temperature {
  celsius: number;
  fahrenheit: number;
}
