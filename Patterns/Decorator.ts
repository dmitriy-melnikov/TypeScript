abstract class Beverage {
  description: string = "Unknown Beverage";
  getDescription(): string {
    return this.description;
  }
  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class Espresso extends Beverage {
  description: string = "Espresso"
  /*constructor (description: string) {
    super()
    this.description = "Espresso";
  }*/
  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
    description: string = "House Blend Coffee";
  cost(): number {
    return .89;
  }
}

class Mocha extends CondimentDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage;
  }
  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }
  cost(): number {
    return 20 + this.beverage.cost();
  }
}

const beverage: Beverage = new Espresso();
console.log(`${beverage.cost()} - ${beverage.getDescription()}`)
const beverage2: Beverage = new Espresso();
console.log(`${beverage.cost()} - ${beverage.getDescription()}`)

