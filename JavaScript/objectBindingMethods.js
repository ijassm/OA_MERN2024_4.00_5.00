// console.log(this);

const obj1 = {
  firstName: "AAA",
  lastName: "PQR",
};

const obj2 = {
  firstName: "BBB",
  lastName: "PQR",
};

const getFullName = function (city = "puducherry") {
  console.log(`${this.firstName} ${this.lastName}. I am from ${city}`);
};

// call
// console.log(getFullName.call(obj1, "cuddalore"));
// console.log(getFullName.call(obj2));

// apply
// console.log(getFullName.apply(obj1, ["cuddalore"]));
// console.log(getFullName.apply(obj2));

// bind
// console.log(getFullName.bind(obj1, "cuddalore"));
// console.log(getFullName.call(obj2));

document
  .querySelector("button")
  .addEventListener("click", getFullName.bind(obj1, "cuddalore"));

// access
// console.log(obj["getFullName"]);
// console.log(obj.getFullName);

// console.log(obj.getFullName());

// function trigger(e) {
//   if (e.style.backgroundColor === "red") {
//     e.style.backgroundColor = "blue";
//     return;
//   }
//   e.style.backgroundColor = "red";
// }
