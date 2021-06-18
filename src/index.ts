interface Human {
  name: string;
  age: number;
  gender?: string;
}

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

const sayHi = (person: Human): string => {
  const gender = person.gender || 'not open';
  return `Hello, ${person.name}. (${person.age}, ${gender})`;
};

console.log(sayHi(person));
export {}
