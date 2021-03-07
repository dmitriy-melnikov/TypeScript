"use strict";
class Beverage {
    constructor() {
        this.description = "Unknown Beverage";
    }
    getDescription() {
        return this.description;
    }
}
class CondimentDecorator extends Beverage {
}
class Espresso extends Beverage {
    constructor() {
        super(...arguments);
        this.description = "Espresso";
    }
    /*constructor (description: string) {
      super()
      this.description = "Espresso";
    }*/
    cost() {
        return 1.99;
    }
}
class HouseBlend extends Beverage {
    constructor() {
        super(...arguments);
        this.description = "House Blend Coffee";
    }
    cost() {
        return .89;
    }
}
class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return `${this.beverage.getDescription()}, Mocha`;
    }
    cost() {
        return 20 + this.beverage.cost();
    }
}
const beverage = new Espresso();
console.log(`${beverage.cost()} - ${beverage.getDescription()}`);
const beverage2 = new Espresso();
console.log(`${beverage.cost()} - ${beverage.getDescription()}`);
//# sourceMappingURL=Decorator.js.map