//functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(10);

function addNumbers(a: number, b: number): number {
  return a + b;
}

const showNum = (a: number): void => {
  console.log(a);
};

const todaysWeather = {
  date: new Date(),
  weather: 'rainy',
};

const logWeather = (forecast: { date: Date; weather: string }): string => {
  return forecast.weather;
};

logWeather(todaysWeather);
