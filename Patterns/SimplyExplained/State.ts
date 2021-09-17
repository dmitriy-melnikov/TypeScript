interface IState {
  order: Order;
  cancelOrder(): void;
  verifyOrder(): void;
  shipOrder(): void;
}
class Order {
  public cancelledOrderState: IState;
  public paymentPendingState: IState;
  public orderBeenPreparedState: IState;
  public orderShippedState: IState;

  public currentState: IState

  constructor() {
    this.cancelledOrderState = new CanceledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderBeenPreparedState = new OrderBeenPreparedState(this);
    this.orderShippedState = new OrderShippedState(this);

    this.setState(this.paymentPendingState)
  }

  public setState(state: IState){
    this.currentState = state
  }

  public getState(): IState {
    return this.currentState
  }
}

class PaymentPendingState implements IState {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log('Cancelling your unpaid order...')
    this.order.setState(this.order.cancelledOrderState)
  }

  shipOrder(): void {
    console.log('Cannot ship order when payment is pending')
  }

  verifyOrder(): void {
    console.log('Payment verified...Shipping soon')
    this.order.setState(this.order.orderBeenPreparedState)
  }
}

class CanceledOrderState implements IState {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log('Your order has already been cancelled')
  }

  shipOrder(): void {
    console.log('Your order has already been cancelled, you cannot ship order')
  }

  verifyOrder(): void {
    console.log('Order has already been cancelled, you cannot verify payment')
  }
}

class OrderBeenPreparedState implements IState {
  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log('Cancelling your order')
    this.order.setState(this.order.cancelledOrderState)
  }

  shipOrder(): void {
    console.log('Shipping your order now')
  }

  verifyOrder(): void {
    console.log('Already verified your payment')
    this.order.setState(this.order.orderShippedState)
  }
}

class OrderShippedState implements IState {

  public order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log('Your cannot cancel already shipped')
  }

  shipOrder(): void {
    console.log('Your cannot ship it again, already shipped')
  }

  verifyOrder(): void {
    console.log('Your cannot verify already shipped')
  }
}

const order = new Order();
order.getState().verifyOrder()
order.getState().shipOrder()
console.log('Order state: ' + (<any>order.getState()).constructor.name)