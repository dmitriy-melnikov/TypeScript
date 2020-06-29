console.log('hello tsc');
console.log('hello second');
let a = null;
let b: null = null;
let c: undefined = undefined;
let f: object = {};
let g: {text: string} = {text: 'hello'};

function f1(x: number, y: number): number {
    return x + y;
}
const f2 = (x: number, y: number): number => x + y;
//signature
let f3: (a: number, b: number) => number;
/*f3 = function (a: number, b: string) {
    return a + b;
}*/
let f4: (x: number) => void

function f5(s: string): never {
    throw new Error(s);
}

function f6(x: any, y: any): any {
    if(typeof x === 'number') {
        return x + y
    } else {
        return ''
    }
}
//console.log(f6(1, 2));

//reloaded fn
function f7(x: number, y: number): number;
function f7(x: string, y: number): string;
function f7(x: any, y: any): any {
    if(typeof x === 'number') {
        return x + y
    } else {
        return ''
    }
}

//console.log(f7(1, 2));
//console.log(f7('d', 1));

//____________________________приведение типов
let z: any = 1;
let y: number = z;
let h: unknown = 1
//let i: number = h; //error
let i: number = <number>h;
let k: any = 'hello';
let l: number = (<string>k).length;

//____________________________unite types
type I = number | string;
let m: I = 1;

type J = 1 | 2 | 3;
type L = true;

type JKL = J | L;
let o: JKL = true;

type M = {a: string | boolean} | {b: string};
let p: M = { a: true, b: 'true' };

//пересечение_________________________
type N = {a: string} & {b: string};
let q: N = {a: '', b: 'hell'};
type O = {a: string, b?: string};
let r: O = {a: ''};

if('a' in r) {
    console.log('cool');
}





