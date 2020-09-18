//typeof -> null -> object
// boolean number string null -> null, undefined
// void -> not return after brackets

//Array<number> -> generic type
// number[]
// tuple type [string, number]

// any -> Array<any>, any[],

//enum  задание понятных имен набору численных значений -> набор именованных числовых констант
// like object and array
const enum links {
    vk = 'http',
    fc = 'http',
    yt = 'http',
}

enum links1 {
    vk = 'http',
    fc = 'http',
    yt = 'http',
}


// never -> function return error or with endless cycle -> infinite loop in function

//object -> obj or not primitive

// type -> custom type creation
type Name = string; //define alias for custom type
let idd: Name;

//functions
const createSkills = (name: string = '', ...skills: string[]): void => {};
//type of function
let myFunction: (f?: string) => void;

//Object type
type Person_ = {
    fn: string,
    ln: string,
    age: number,
    getPass?: () => void
}
const user_:Person_  = {
    fn: 'Dz',
    ln: 'Ml',
    age: 22
};
const admin_:Person_  = {
    fn: 'Dz',
    ln: 'Ml',
    age: 22
};

// classes -> mixture object and func

class User_ {

    static secret = 12345

    // modifiers
    public name: string;
    protected age: number = 20; // inaccessible out of class not object not class inherit
    private nickName: string = 'web'; // access to element only class inherit
    readonly pass: number; // element only for reading

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

class User__ {
    constructor(
        public name: string,
        //protected age: number,
        //private nickName: string = 'web',
        //readonly pass: number
        public nickName: string = 'wev',
        public pass: number = 123,
    ) {}
    setNick(nick: string) {
        this.nickName = nick;
    }
    set myNick(nick: string) {
        this.nickName = nick;
    }
    get myNick() {
        return this.nickName;
    }
}


class UserBase {
    static secret = 123;
    constructor(
        public name: string = 'SuperName',
        public age: number,
    ) {
        //this.name = name;
        //this.age = age;
    }
   getPass(): string {
        return `${this.name}${this.age}`
   }
}

class Yaren extends UserBase{
    name: string = 'Yaren';

    constructor(name: string, age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.name}${this.age}${UserBase.secret}`
    }
}
const bases = new UserBase('', 3);
//const yaren = new Yaren('', 24 );
/*console.log(yaren.age);
console.log(yaren.name);
console.log(yaren.getPass());*/

//const ya_ = new User__('Ya', 31, 'web', 123);
//console.log(ya_.name);
//ya_.setNick('changed');
//ya_.myNick = 'doubleChanged';
//console.log(ya_.myNick);
//console.log(ya_.age);
//ya_.nickName;
//ya_.pass = 43;

//Abstract classes -> base classes from which others inherited consist of realization details it's elements
// cannot create instance

abstract class _User {
    constructor(public name: string, public age: number) {
    }
    greet(): void {
        console.log(this.name)
    }
    abstract getPass(): string
}

class _Yauhen extends _User{
    name: string = 'Yaaa';
    constructor(name: string, age: number) {
        super(name, age);
    }
    getPass(): string {
        return "";
    }
}
const yau = new _Yauhen('', 34);
console.log(yau.name);

namespace Ut {
    export let pis: number = 3
}
console.log(Ut.pis);
// Import
// <reference path="Ut.ts" />

// import - export every methods and properties
//______________________________________________________________________________________________
// type interface -> function of type naming
// проверка типов основанная на форме значений - структурное подтипирование или утиная типизация

// help show us the form of object or how it looks like in the future
// can be used in extends and implements
interface User {
    readonly name: string,
    age?: number,
    [propName: string]: any
}
interface Pass extends User {
    getPath(): string,
}
const _yaya: User = {
    name: 'Yaya',
    age: 55,
    nickName: '',
    suck: ''
}
class _Y implements /*User,*/ Pass {
    name: string = 'Y';
    age: number = 22;
    nickName: string = 'Weee';
    getPath(): string {
        return `${this.name}${this.age}`
    }
}

// Generic -> to create components have ability to work with different types but not only one -> it helps to use your own types
const getter = <T>(data: T): T => data;
//getter(10).length;
//getter<number>(10).length;

class UserBaseWG<T, K extends number> {
    constructor(
        public name: T,
        public age: K,
    ) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
    public getSecret(): number {
        return this.age**2
    }
}
const yyy = new UserBaseWG('11', 22);
console.log(yyy.getPass())

// decorators -> decorate of instance and behaviour
// class   property method accessor
const logClass = (constructor: Function): void => {
    console.log(constructor)
}
const logProperty = (target: Object, propertyKey: string | symbol): void => console.log(propertyKey);
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): void => console.log(propertyKey);
const logSet = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): void => console.log(propertyKey);

//Factory Decorator
const enumerable = (value: boolean): Function => {
    return(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = value;
    }
}

//@logClass
class _Yan {
    //@logProperty
    secret: number;

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret;
    }
    //@logMethod
    @enumerable(false)
    getPass(): string {
        return `${this.name}${this.age}`;
    }
    //@logSet
    set myAge(age: number) {
        this.age = age;
    }
}

//Factory Decorator






