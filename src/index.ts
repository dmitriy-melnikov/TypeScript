const {log} = console;
let x = {
  a() {
    return this
  }
}
log(x.a());

let a = x.a
log(a.call(x));

// console.log(a()));

function* createFibonacciGenerator(): IterableIterator<number> {
  let a = 0
  let b = 1
  let c = 0
  while (true) {
    yield a;
    // [a, b] = [b, a + b]
    c = b;
    b = a + b;
    a = c;
  }
}

let fibonacciGenerator = createFibonacciGenerator()
// IterableIterator<number>
/*log(fibonacciGenerator.next());

log(fibonacciGenerator.next());
log(fibonacciGenerator.next());
log(fibonacciGenerator.next());
log(fibonacciGenerator.next());
log(fibonacciGenerator.next());*/

function* createNumbers(): IterableIterator<number> {
  let n = 0
  while (true) {
    yield n++
  }
}

let numbers = createNumbers()
/*log(numbers.next())
log(numbers.next())
log(numbers.next())*/

let numbersGen = {
  *[Symbol.iterator](): IterableIterator<number> {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}
log(numbersGen[Symbol.iterator]().next())

function fancyDate(this: Date): any {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

// log(fancyDate()); -> error
// tslint:disable-next-line:new-parens
/*log(fancyDate.call(new Date()))
log(fancyDate.bind(new Date())())*/

type Reservation = {

}

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}
let reserve: Reserve = (
  from: Date,
  toOrDestionation: Date | string,
  destination?: string
) => ``

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

const fn: WarnUser =  (warning: string) => {

  if (fn.wasCalled) {
    return
  }
  fn.wasCalled = true
  log(warning)
}
fn.wasCalled = false

fn('warning')


type Filter = <T>(array: T[], f: (item: T) => boolean) => T[]
type FilterU<T> = (array: T[], f: (item: T) => boolean) => (T | undefined)[]

const filterU: FilterU<number> = (array, f) => { return array.map(_ => {
  if(f(_)) return _}
)}

function fl<T>(array: T[], f: (item: T) => boolean): T[] {
      return []
}

const filter: Filter = (array, f) => {
  const result = []
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

type FN = {
  firstName: string
}

let names: FN[] = [
  {firstName: 'beth'},
  {firstName: 'caitlyn'},
  {firstName: 'xin'}
]


let res: FN[] = filter(names, el => el.firstName.startsWith('b'));
log(res);
log(filter([1, 2, 3], _ => _ > 2))

type A = {
  good(x: number): string
  bad(x: number): string
}
type B = A & {
  good(x: string | number): string
  bad(x: string): string
}

/*interface User {
  name: string
}
*/
interface User {
  age: number
}
/*interface User<Age extends number> {
  age: Age
}*/
/*interface User<T, U> {
  name: T
  age: U
}*/
/*const unit: User = {
  name: 'Ashley',
  age: 30
}*/
