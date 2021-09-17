// tslint:disable-next-line:only-arrow-functions
const fn = function <T>(arg: T): T {
  return arg
}
const txt: string = fn<string>('some');
const txtInference: string = fn('some');
const num: number = fn<number>(1);
console.log(typeof txtInference)


// tslint:disable-next-line:only-arrow-functions
const guard = function <T>(arg: T[]): T[] {
  const n = arg[0];
  if (n instanceof Number) {
    console.log(n.toFixed())
  }
  return arg
}
const z: string[] = guard<string>(['not number'])
console.log(z)
// tslint:disable-next-line:only-arrow-functions
// const gn = function <T>(arg: Array<T>): Array<T> {return  arg}

const issueTArray = <T>(arg: T[]): T[] => arg
const y: string[][] = issueTArray<string[]>([['1'], ['2']])

type Mix = <T, U>(n1: T, n2: T, text: U) => void
// const mix: Mix = <T, U>(n1: T, n2: T, text: U): void => console.log(`${text}: ${n1}, ${n2}`)
const mix: Mix = (n1, n2, text) => console.log(`${text}: ${n1}, ${n2}`)
mix<number, string>(1,2,'some text');

// strange behaviour of generic
{
  const g = <T, U>(n: T, n2: U): number => 1

  const anotherG: <T, U>(n1: T, n2: T, text: U) => void = g
  anotherG(void 0, 1, 'some text')
  anotherG<number, string>(1, 1, 'some text')
}
