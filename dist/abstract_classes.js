"use strict";
/*interface IPersonal {
    name?: string,
    age: number,
    sayHi(): string
}*/
class Personal /*implements IPersonal*/ {
    constructor(
    //public name: string = 'Vasili',
    //private name: string = 'Vasili',
    name = 'Vasili', 
    //public readonly name: string = 'Vasili',//можно присваивать заначение только в конструкторе
    age = 40) {
        this.name = name;
        this.age = age;
    }
    static description() {
        return 'Men';
    }
    sayHi() { return `hello ${this.name}  ${this.age}`; }
}
Personal.isFlying = false;
class Studentic extends Personal {
    constructor(name, age, group, course) {
        //super(name, age);
        super();
        this.group = group;
        this.course = course;
    }
    sayHi() {
        const person = super.sayHi();
        return `Return Person - ${person}  and group-course ${this.group} - ${this.course}`;
    }
    description() {
        //return `Abstract method description ${this.name}, ${this.age}, ${this.group}, ${this.course}`;
        return `Abstract method description with private name, ${this.age}, ${this.group}, ${this.course}`;
    }
}
const studentic = new Studentic('Udi', 22, 'first', 2);
//console.log(studentic.description());
console.log(studentic.sayHi()); // name -> Vasili when protected
const newDenisic = studentic;
//console.log(newDenisic.description());
const Lizic = new Studentic('Liza', 18, 'second', 3);
//console.log(Lizic.description())
//console.log(Lizic.name) // -> error when private name
//console.log(Lizic.name) // -> error when protected name
console.log(Lizic.sayHi());
//console.log(Lizic.name = 'Error')
//# sourceMappingURL=abstract_classes.js.map