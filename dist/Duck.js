"use strict";
class FlyWithWings {
    fly() {
        console.log('I am flying');
    }
}
class FlyNoWay {
    fly() {
        console.log('I can not flying');
    }
}
class Duck {
    setFlyBehaviour(flyBehavior) {
        this.flyBehaviour = flyBehavior;
    }
    performFly() {
        this.flyBehaviour.fly();
    }
}
class MallardDuck extends Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyWithWings();
    }
}
/*const mallard: MallardDuck = new MallardDuck();
mallard.performFly();*/
class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyNoWay();
    }
}
class FlyRocketPowered {
    fly() {
        console.log("I’m flying with a rocket!");
    }
}
const duckModel = new ModelDuck();
duckModel.setFlyBehaviour(new FlyRocketPowered());
duckModel.performFly();
//# sourceMappingURL=Duck.js.map