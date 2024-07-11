console.log("Start");

setTimeout(function a() {
  console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

// Added 10 sec timer
setTimeout(() => {
  while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
    console.log("--");
  }
});

console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
console.log("While expires");
