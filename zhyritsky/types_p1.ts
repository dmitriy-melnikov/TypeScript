console.log('hello');
const id: symbol = Symbol('New Symbol');
console.log(id);
const arr33: string | any [] = ['a', 'b', 1];
const arr3333: Array<string | number> = ['a', 'b']//дженерик массив

let num: Array<number> = [1,2,3,4,5,6];

let roNum: ReadonlyArray<number> = [...num];
let roNum1: readonly number[] = [...num];
console.log(roNum1);

//num = roNum as Array<number>;
num = roNum as number[];
num.push(7);
console.log(num);

//tuple - spec array every element with own type

let myT: readonly [number, string?, boolean?] = [24, 'a'];
let [fist, lst] = myT;
let ourTuple: [number, ...string[]] = [2, 'a', 'b'];
console.log(fist);

//enum -> numbers and strings  add names number values
enum Category {'a', 'b', 'c'}
let favorite: Category = Category.a;
console.log(favorite);
let favorite2 = Category[favorite];
console.log(favorite2);

//subtype of undefined

function warn(name: void): void {
    console.log('&&&&&&&&&&&&&&&')
}
warn();
warn(undefined);
warn(void 2);
//warn(null);
let usable: void;
usable = undefined;
//usable = null;

//bigint
//let a: bigint = 100n; es2020

function create(o: object | null): void {}
create({prop: 0});
create(null);

//never -> usually in func throw error ur return infinitive cycle while(true){}
function error(mes: string): never {
    throw new Error(mes)
}

// unknown - like safe any use in === or !==
let x: unknown;
//x === 5;

// type aliases -> pseudonym for type

//type assertions - <>angle-brackets or as syntax
let someVal: any = 'str';
//let sL: number = (<string>someVal).length;
let sL: number = (someVal as string).length;

//const assertions
let xx = 'hello' as const; // type 'hello'
//let yy = [10, 20] as const;
let yy = <const>[10, 20];





