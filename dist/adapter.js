"use strict";
/**
 * Целевой класс объявляет интерфейс, с которым может работать клиентский код.
 */
class Target {
    request() {
        return 'Target: The default target\'s behavior.';
    }
}
/**
 * Адаптируемый класс содержит некоторое полезное поведение, но его интерфейс
 * несовместим с существующим клиентским кодом. Адаптируемый класс нуждается в
 * некоторой доработке, прежде чем клиентский код сможет его использовать.
 */
// tslint:disable-next-line:max-classes-per-file
class Adaptee {
    specificRequest() {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}
/**
 * Адаптер делает интерфейс Адаптируемого класса совместимым с целевым
 * интерфейсом.
 */
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
/**
 * Клиентский код поддерживает все классы, использующие целевой интерфейс.
 */
function clientCode(target) {
    console.log(target.request());
}
console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);
console.log('');
const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');
console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);
//# sourceMappingURL=adapter.js.map