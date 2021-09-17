type f = (bv: number, i: number) => number
// tslint:disable-next-line:only-arrow-functions
let increase = function (x: number, y: number): number { return x + y} as f
// let increase = <f>function (x: number, y: number): number { return x + y}
{
  const f = (a: number, b: number): number => a + b;

  type FType = (a: number, b: number) => number;
  const sum: FType = f;
}

// tslint:disable-next-line:only-arrow-functions
const run: (this: void, n: number) => void = function (n) {
  // this.n = n;
  console.log(n)
}
run(1)