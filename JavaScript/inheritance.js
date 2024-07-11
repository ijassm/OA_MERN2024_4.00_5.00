class Person {
  constructor(name) {
    this.name = name;
  }
  talk() {
    return "taking....";
  }
}

class SuperHuman extends Person {
  fly() {
    return "flying....";
  }
}

const obj1 = new SuperHuman("XYZ");
const obj2 = new SuperHuman("ABC");
const obj3 = new SuperHuman("BCS");

console.log(obj1.fly());
console.log(obj1.talk());
console.log(obj2);
console.log(obj3);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.talk = function talk() {
//   return "Myself taking....";
// };

// const obj1 = new Person("XYZ");
// const obj2 = new Person("ABC");
// const obj3 = new Person("BCS");

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
