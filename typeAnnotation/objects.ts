//objects

const person: { name: string; age: number } = {
  name: 'Rahul',
  age: 20,
};

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
