abstract class Pizza {
  name: string = '';
  dough: string = '';
  sauce: string = '';
  toppings: string[] = [];
  prepare(): void {
    console.log("Preparing " + this.name);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log(`Adding toppings: `);
    this.toppings.forEach((i: string) => console.log(`${i}, `))
  }
  bake(): void {
    console.log("Bake for 25 minutes at 350");
  }
  cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }
  box(): void {
    console.log("Place pizza in official PizzaStore box");
  }
  getName(): string {
    return this.name;
  }
}

/*class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza;
    if (type === "cheese") {
      pizza = new CheesePizza();
    } else if (type === "pepperoni") {
      pizza = new PepperoniPizza();
    } else if (type === "clam") {
      pizza = new ClamPizza();
    } else if (type === "veggie") {
      pizza = new VeggiePizza();
    }
    // @ts-ignore
    return pizza;
  }
}*/

abstract class PizzaStore {
  orderPizza(type: string): Pizza | undefined {
    const pizza: Pizza | null = this.createPizza(type);
    if (pizza) {
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
      return pizza
    }
  }

  protected abstract createPizza(type: string): Pizza | null
}

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Style Sauce and Cheese Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";
    this.toppings.push("Grated Reggiano Cheese");
  }
}

class NYPizzaStore extends PizzaStore {
  constructor() {
    super();
  }

  createPizza(type: string): Pizza | null {
    if (type === "cheese") {
      return  new NYStyleCheesePizza();
    } else if (type === "pepperoni") {
      return new NYStyleCheesePizza();
    } else if (type === "clam") {
      return new NYStyleCheesePizza();
    } else if (type === "veggie") {
      return new NYStyleCheesePizza();
    } else {
      return null
    }
  }
}


const nyStore: PizzaStore = new NYPizzaStore();
const pizza: Pizza | undefined = nyStore.orderPizza("cheese");
// @ts-ignore
console.log("Ethan ordered a " + pizza.getName() + "\n");

/*
const nyFactory: NYPizzaFactory = new NYPizzaFactory();
const nyStorePizzaStore = new PizzaStore(nyFactory);
nyStore.orderPizza('Veggie');*/
