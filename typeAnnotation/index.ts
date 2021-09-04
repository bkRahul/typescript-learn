//** primitive type **//
const day: number = 1;

const firstName: string = 'Rahul';

let nothing: null = null;

//** object types **//
const today: Date = new Date();

today.getMonth();

//array
let colors: string[] = ['red', 'green', 'blue'];

colors.map((color: string): string => color);

let numbers: number[] = [1, 2, 3];

const dates: (Date | string)[] = ['23-04-1994'];
dates.push(new Date());

//classes
class Car {}

let car: Car = new Car();

//Object literal
const person: { name: string; age: number } = {
  name: 'Rahul',
  age: 20,
};

//** when to use annotations **//
// 1) when functions that return 'any' type

const coordinates: { x: string; y: number } = JSON.parse(
  '{ "x": "10", "y": 20 }'
);

console.log(coordinates);

// 2) when variable is only declared and initialised later in the code

let json: boolean;

json = JSON.parse('true');

// 3) variable whose type cannot be inferred correctly

const arr = [1, 2, 3];
let numberPresent: boolean | number = false;
arr.includes(4) ? (numberPresent = 4) : numberPresent;

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

//objects

const profile = {
  myName: 'Rahul',
  age: 20,
  coords: {
    lat: 20,
    long: 30,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { myName, age }: { myName: string; age: number } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
