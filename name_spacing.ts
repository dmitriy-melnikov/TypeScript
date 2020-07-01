namespace Utils {
    export function logers(text: string, color: string, ): void;
    export function logers(text: string, color: string, fontSize: number): void;
    export function logers(text: string, color: string, fontSize?: number) {
        if(fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
        } else {
            console.log(`%${text}`, `color: ${color}`);
        }
    }
    //logers('Text inside', '#d9494f', 40);
}
//Utils.logers('Text inside', '#d9494f', 40);

namespace Animals {
    export abstract class Animal {
         constructor(
            protected name: string
            //private name: string
        ) {}
        abstract say(): void
    }

    export namespace Pets {
        export class Cat extends Animal{
            say() {
                Utils.logers(`${this.name}:  miu`, '#d9494f', 50)
            }
        }
        export class Dog extends Animal {
            constructor(name: string) {
                super(name);
            }
            say() {
                Utils.logers(`${this.name}:  gau`, '#d9ffdd', 50)
            }
        }
    }
}

namespace Animals {
    export class Tiger extends Animals.Animal{
        #text: string

        constructor(
            name: string,
            private text: string,
            //#text: string
        ) {
            super(name);
            this.#text = text
        }
        say(){
            Utils.logers(`${this.name}, ${this.text}, ${this.#text}`, '#d9494f', 50)
        }
    }
}

const tiger = new Animals.Tiger('Kitty', 'boy');
//tiger.say();
//console.log(tiger.#text); //code don't compiling

const dog = new Animals.Pets.Dog('doggy');
const cat = new Animals.Pets.Cat('catty');
cat.say();
dog.say();
