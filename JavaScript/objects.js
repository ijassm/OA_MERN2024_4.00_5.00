// contructor functions

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "Tamil";
Person.prototype.getFullname = function () {
  return this.firstName + " " + this.lastName;
};

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

// mySelf.nationality = "French";
// mySelf.voteEligibility = true;

console.log(myFather);
console.log(myMother);
console.log(mySister);
console.log(mySelf.nationality);
console.log(mySelf.getFullname());

// General Methods
// console.log(Object.keys(mySelf));
// console.log(Object.values(mySelf));
// console.log(Object.entries(mySelf));

console.log(Object.getPrototypeOf(myFather));
