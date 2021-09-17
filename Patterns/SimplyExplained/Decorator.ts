abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract  cost (): void
}

class ModelX extends Car{
  public description = "Model X";
  public cost (): number {
    return 77000
  }
}
class ModelD extends Car{
  public description = "Model D";
  public cost (): number {
    return 55000
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car | undefined;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Enhanced Auto Pilot';
  }
  public cost (): number {
    return Number(this.decoratedCar.cost()) + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car | undefined;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    // @ts-ignore
    return this.decoratedCar.getDescription() + ', Rear facing seats';
  }
  public cost (): number {
    // @ts-ignore
    return Number(this.decoratedCar.cost()) + 10000;
  }
}

console.time('timer');
let myTesla = new ModelX();
myTesla = new RearFacingSeats(myTesla)
myTesla = new EnhancedAutoPilot(myTesla)
console.table(myTesla.cost())
console.table(myTesla.getDescription())
console.timeEnd('timer');