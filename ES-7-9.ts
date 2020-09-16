//Object methods
// .entries()

const showResult = (res: any): void => console.log(res);

const user: object = {
    fn: 'Dz',
    ln: 'Ml',
    age: 22
};

const simpleArray: (string | number)[] = [1, 'hello', 'word'];

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
    const fetchedText = await fetchText();
    return`this is a feature of ${fetchedText}`
};
showText().then(data => console.log(data));*/

//Parallel execute
//@ts-ignore
const showParallel = async () => {
    const [fetchedText, fetchedText2] = await Promise.all([fetchText(), fetchText2()]);
    return `${fetchedText} ${fetchedText2}`
}
showParallel().then(data => console.log(data));



