type A<T> = T //type A обобщен T
type B = A<string>


type C = A<'hello'>
type D = A<number>

type MyArray<T> = T[]
const arr: MyArray<string> = ['h', 'b'] //the same as string[]
/*___________________________________________________________________________________*/
/*function echo<T>(x: T):T {
    return x
}*/
const echo: <T>(x: T) => T = <T>(x: T): T => x;
//const result: string = echo('common types');
const result = echo<string>('common types');

/*generic with classes*/

/*class List<T> {
    constructor(
        public elements: T[] = []) {
    }
    add(element: T){
        this.elements.push(element)
    }
}
const list = new List<string>(['hello']);*/

interface IList<T> {
    elements: T[],
    add(element: T): void
    //new ():
}
class List implements IList<string> {
    constructor(public elements: string[] = []) {
    }
    add(element: string): void {
        this.elements.push(element);
    }
}
const list = new List(['hello']);

//type Z<T extends string> = T;
type Z<T> = T extends string ? string : never;
type W = Z<string>;
type Y = A<'hello'>;
type X  = Z<number>

/*function printName<T extends {name: string}>(person: T): void {
    console.log(person.name)
}*/

interface IName {
    name: string
}

function printName<T extends IName>(person: T): void {
    console.log(person.name)
}
printName({name: 'Ihar', age: 30})

interface ZZ {
    a: string,
    b: string,
    c: string
}
type BB = keyof ZZ

function getProperty<ObjectType, KeyType extends keyof ObjectType>(object: ObjectType, key: KeyType) {
    return object[key];
}
getProperty({name: 'ihar', age: 20}, 'name');

const arr1 = [1, 'hell', false];
type AA<T> = T extends (infer U)[] ? U : never;
type BZ = typeof arr1
type Bc = AA<BZ>

const pers = {name: 'ihar', age: 20};
type AB<T> = T extends {
    [key: string]: infer U
} ? U : never
type BA = typeof pers;
type CB = AB<BA>

class Cat {
    say(): string{
        return 'Miay'
    }
}
class Dog {
    say(): string{
        return 'Gau'
    }
}

interface IClass<T> {
    new (): T
}
function createObject<T>(c: IClass<T>): T {
  return new c()
}
const doggy = createObject(Dog);
console.log(doggy.say());
