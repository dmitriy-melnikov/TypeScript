//Object methods
// .entries()

const showResult = (res: any): void => console.log(res);

const user: object = {
    fn: 'Dz',
    ln: 'Ml',
    age: 22
};

const simpleArray: (string | number | null)[] = [1, 'hello', 'word', NaN];

let res: [string, any][] = Object.entries(user);
showResult(res);
showResult(Object.entries(simpleArray));

//.fromEntries()
showResult(Object.fromEntries(res));

// .values
showResult(Object.values(user));

//.keys
showResult(Object.keys(user))

// getOwnPropertyDescriptors();
/*type Person = {
    name: string,
    age: number,
    personName: (name: any) => void,
    password: string
}*/
class Person33  {
    static age = 30;
    constructor(public name = 'Max') {
    }

    set personName(name: string) {
        this.name = name
    };
    get personName() {
        return this.name;
    };
    get password() {
        return `${this.name}${Person33.age}`
    }
}

const person: Person33 = new Person33();
//const clonePerson = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person));
const clonePerson = Object.assign(person);
console.log('_______', clonePerson.password);
console.dir(Object.getOwnPropertyDescriptors(clonePerson));
//debugger;
showResult(person.personName);
person.personName = 'Vlad';
showResult(person.password);

// Math.pow()

console.log('((((', (7**2) + (5**2));//no need Math.pow()

// async functions

const fetchText = () => new Promise(resolve => {setTimeout(() => resolve('es-8'), 2000)});
const fetchText2 = () => new Promise(resolve => {setTimeout(() => resolve('feature'), 2000)});
/*const showText = async () => {
    const fetchedText = await fetchText().catch(e => console.log(e)); // new catch ability
    return`this is a feature of ${fetchedText}`
};
showText().then(data => console.log(data));*/

//Parallel execute
// @ts-ignore
//async error handling

//async iterators


const showParallel = async () => {
    try {
        const [fetchedText, fetchedText2] = await Promise.all([fetchText(), fetchText2()]);
        return `${fetchedText} ${fetchedText2}`
    } catch { // not adding e in catch
        console.log('something wrong')
    }
}
showParallel()
    .then(data => console.log(data))
    .catch(e => console.log(e));//not in function

// using finally as 3-rd step of try/catch
let showSpinner: boolean;
const showParallelWithFinally = async (): Promise<any> => {
    try {
        showSpinner = true;
        const [fetchedText, fetchedText2] = await Promise.all([fetchText(), fetchText2()]);
        return `${fetchedText} ${fetchedText2}`
    } catch { // not adding e in catch
        console.log('something wrong')
    } finally {
        //callback function for correct operation
        showSpinner = true;
    }
}
showParallelWithFinally().then(data => console.log(data));

// array methods
// includes
showResult(simpleArray.includes('hello'));
showResult(simpleArray.includes(NaN));

//.flat()
const arr2323: (number | any)[] = [1, , , 2, [3,4, [5,6, [7, 8]]]];
console.log('##############', arr2323.flat());
console.log('##############', arr2323.flat(2));
console.log('##############', arr2323.flat(Infinity));

// .flatMap()
const arr2424: [number][] = [[1], [2], [3]];
// @ts-ignore
console.log('^^^^^^^', arr2424.flatMap<number>((x: number[]): number[] => [x * 2]));

// async iterators

const names: Promise<any>[] = [
    new Promise(resolve => resolve('jack')),
    new Promise(resolve => resolve('max')),
    new Promise(resolve => resolve('leo')),
    ];


const showNames = async () => {
    for await (let name of names) {
        console.log(name)
    }
}
showNames().then(e => e).catch(() => console.log('error'));

//string methods
const str: string = 'test';
console.log(str.padEnd(10, '~'));
console.log(str.padEnd(10));
console.log(str.padStart(10, '~'));
console.log(str.padStart(10));

const strTest: string = 'Hello, my name is Dzmitry';
console.log(strTest.startsWith('Hello'));
console.log(strTest.endsWith('Dzmitry'));

console.log(strTest.startsWith('my', 7));
//.trimStart()  .trimEnd()

//RegExp
console.log(/one.two/s.test('one\ntwo'));
//named groups <name>

const mySymbol = Symbol('Symbol description');
console.log(mySymbol.description);



