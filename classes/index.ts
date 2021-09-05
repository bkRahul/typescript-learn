class Vehicle {
  //a way to declare class variables inside constructor
  constructor(public color: string) {}

  drive(): void {
    console.log('driving vehicle');
  }

  //Property 'honk' is private and only accessible within class
  private honk(): void {
    console.log('honking vehicle');
  }

  startHonking(): void {
    this.honk();
  }

  //Property 'stop' is protected and only accessible within class 'Vehicle' and its subclasses
  protected stop(): void {
    console.log('applying Brakes');
  }
}

const vehicle: Vehicle = new Vehicle('red');

console.log(vehicle.color);
vehicle.drive();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('driving car');
  }
  stopCar(): void {
    this.stop();
  }
}

const car: Car = new Car(4, 'red');

car.drive();
car.stopCar();
car.startHonking();
