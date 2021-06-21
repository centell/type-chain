"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
const person = {
    name: 'Centell',
    // gender: 'male',
    age: 32,
};
// const person = new Human("Ciel", 17, "female");
const sayHi = (person) => {
    const gender = person.gender || 'not open';
    return `Hello, ${person.name}. (${person.age}, ${gender})`;
};
console.log(sayHi(person));
//# sourceMappingURL=demo.js.map