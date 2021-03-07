"use strict";
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
class Person {
    constructor(name = 'Vasili', age = 40) {
        this.name = name;
        this.age = age;
    }
    static description() {
        return 'Men';
    }
    sayHi() { return `hello ${this.name}  ${this.age}`; }
    get namePerson() {
        return this.name;
    }
    set namePerson(name) {
        this.name = name;
    }
}
Person.isFlying = false;
const igor = new Person('Ihar', 25);
//console.log(igor.sayHi());
//console.log(Person.isFlying);
//console.log(Person.description());
igor.namePerson = 'Vlad';
//console.log(igor.namePerson);
/*if(igor instanceof Person) {
    console.log('instanceof')
}*/
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this.group = group;
        this.course = course;
    }
    sayHi() {
        const person = super.sayHi();
        return `Return Person - ${person}  and group-course ${this.group} - ${this.course}`;
    }
}
const student = new Student('Udi', 22, 'first', 2);
//console.log(student.age);
//console.log(student.namePerson);
const newDenis = student; //взяли класс Student и обрезали до класса Person
//console.log(newDenis.namePerson);
//console.log(newDenis);//has everything
const Liza = new Student('Liza', 18, 'second', 3);
console.log(igor.sayHi());
console.log(student.sayHi());
console.log(newDenis.sayHi());
console.log(Liza.sayHi());
// interface realization
//# sourceMappingURL=classes.js.map