interface WeeklyWeatherRoot {
  weeklyWeather: WeeklyWeather[];
}

interface WeeklyWeather {
  dateTime: string;
  condition: string;
  conditionIcon: string;
  temperature: Temperature;
}

interface Temperature {
  celsius: number;
  fahrenheit: number;
}
