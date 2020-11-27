/*interface IPersonal {
    name?: string,
    age: number,
    sayHi(): string
}*/

abstract class Personal /*implements IPersonal*/{
    protected constructor(
        //public name: string = 'Vasili',
        //private name: string = 'Vasili',
        protected name: string = 'Vasili',
        //public readonly name: string = 'Vasili',//можно присваивать заначение только в конструкторе
        public age: number = 40
    ) {}

    static isFlying = false;
    static description(): string {
        return 'Men';
    }
    sayHi(): string {return `hello ${this.name}  ${this.age}`}

    abstract description(): string
}

class Studentic extends Personal{
    constructor(name: string, age: number, public group: string, public course: number) {
        //super(name, age);
        super();
    }
    sayHi(): string {
        const person = super.sayHi();
        return `Return Person - ${person}  and group-course ${this.group} - ${this.course}`;
    }
    description(): string {
        //return `Abstract method description ${this.name}, ${this.age}, ${this.group}, ${this.course}`;
        return `Abstract method description with private name, ${this.age}, ${this.group}, ${this.course}`;
    }
}

const studentic: Studentic = new Studentic('Udi', 22, 'first', 2);
//console.log(studentic.description());
console.log(studentic.sayHi()) // name -> Vasili when protected

const newDenisic: Personal = <Personal>studentic;
//console.log(newDenisic.description());

const Lizic: Personal = new Studentic('Liza', 18, 'second', 3);
//console.log(Lizic.description())
//console.log(Lizic.name) // -> error when private name
//console.log(Lizic.name) // -> error when protected name
console.log(Lizic.sayHi())
//console.log(Lizic.name = 'Error')

