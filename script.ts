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
    throw new Error(x);
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

console.log(f7(1, 2));
console.log(f7('d', 1));
