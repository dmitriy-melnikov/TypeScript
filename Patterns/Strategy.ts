interface FlyBehavior {
  fly: () => void;
}

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('I am flying')
  }
}
class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('I can not flying');
  }
}

abstract class Strategy {
   protected abstract  flyBehaviour: FlyBehavior

  public setFlyBehaviour(flyBehavior: FlyBehavior) {
    this.flyBehaviour = flyBehavior
  }

  public performFly() {
    this.flyBehaviour.fly()
  }
}

class MallardDuck extends Strategy {
  protected flyBehaviour: FlyBehavior
  constructor() {
    super()
    this.flyBehaviour = new FlyWithWings();
  }
}

/*const mallard: MallardDuck = new MallardDuck();
mallard.performFly();*/

class ModelDuck extends Strategy {
  protected flyBehaviour
  constructor() {
    super()
    this.flyBehaviour = new FlyNoWay()
  }
}

class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("I’m flying with a rocket!");
  }
}

const duckModel: ModelDuck = new ModelDuck()
duckModel.setFlyBehaviour(new FlyRocketPowered())
duckModel.performFly()


