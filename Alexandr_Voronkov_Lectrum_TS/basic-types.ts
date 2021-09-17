// let list: number[] = [1,2,3];
let list: [number, number, 10] = [1,2,10];
// let list1: Array<number> = [1,2,3]
let list2: typeof list = [1,2,10];
console.log(list2[0].toFixed())
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Blue
// let c: string = Color[2]
console.log(c)

let unusable: void = void 0;
// let unusable: void = undefined;
console.log(unusable)
// let n1: undefined = undefined
let n2: null = null;

/*let core: never = (() => {
  console.log(true);
  throw new Error('Some Error')
})()*/

// type assertions
let something: any = 'Some string'
let l: number = (something as string).length
console.log(l)