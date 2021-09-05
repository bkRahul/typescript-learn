//** primitive type **//
const day: number = 1;

const firstName: string = 'Rahul';

const isBool: boolean = true;

let nothing: null = null;

//** object types **//
const today: Date = new Date();

today.getMonth();

//classes
class Car {}

let car: Car = new Car();

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
