function getFinalPrice(price: number, discount: number): number {
  return price - price / discount;
}
console.log(getFinalPrice(20, 2))
const ord: symbol = Symbol('orderID');
const myOrder = {
  ord: "123"
};
let someVal: undefined | null;
let customerName: string | null = null;

console.log(myOrder.ord);
console.log(someVal)
let productId;
productId = null;
productId = undefined;
productId = 'undefined';
productId = 25;
productId = null;
let productIds = 25;
// ошибка компилятора productIds = null;
// ошибка компилятора productIds = undefined;
// unknown — аналог any, с которым.нельзя.производить.никаких.действий,.не.
//  утвердив.или.сузив.его.до.более.конкретного.типа;

let unn: unknown;
unn = 25

class FormControl {
  constructor (initialValue: string, validator: ValidatorFn | null) {
    console.log(initialValue)
  };
}

type ValidatorFn =
  (c: FormControl) => { [key: string]: any }| null
