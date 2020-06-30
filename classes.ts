/*interface IPerson {
    name?: string,
    age: number,
     //sayHi(): string
}

/!*type IPerson =  {
    name?: string,
    age: number,
    //sayHi(): string
    sayHi: () => string
}*!/

interface IPerson {
    sayHi: () => string
}*/

/*interface IPersonProps {
    name?: string,
    age: number,
}

interface ITest {

}

interface IPerson extends IPersonProps, ITest{
    sayHi: () => string
}*/

type IPersonProps =  {
    name?: string,
    age: number
}

type ITest = {

}

// оператор пересечения типов
type IPerson = IPersonProps & ITest & {
    sayHi: () => string
}

class Person implements IPerson{
    constructor(public name: string = 'Vasili', public age: number = 40) {
    }
    static isFlying = false;
    static description(): string {
        return 'Men';
    }
    sayHi(): string {return `hello ${this.name}  ${this.age}`}
    get namePerson(): string {
        return this.name;
    }
    set namePerson(name) {
        this.name = name;
    }
}

const igor: Person = new Person('Ihar', 25);
//console.log(igor.sayHi());
//console.log(Person.isFlying);
//console.log(Person.description());

igor.namePerson = 'Vlad';
//console.log(igor.namePerson);

/*if(igor instanceof Person) {
    console.log('instanceof')
}*/

class Student extends Person{
    constructor(name: string, age: number, public group: string, public course: number) {
        super(name, age);
    }
    sayHi(): string {
        const person = super.sayHi();
        return `Return Person - ${person}  and group-course ${this.group} - ${this.course}`;
    }
}

const student: Student = new Student('Udi', 22, 'first', 2);
//console.log(student.age);
//console.log(student.namePerson);

const newDenis: Person = <Person>student;//взяли класс Student и обрезали до класса Person
//console.log(newDenis.namePerson);
//console.log(newDenis);//has everything
const Liza: Person = new Student('Liza', 18, 'second', 3);

console.log(igor.sayHi())
console.log(student.sayHi())
console.log(newDenis.sayHi())
console.log(Liza.sayHi());

// interface realization




