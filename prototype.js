const arr = [2, 4, 5, 6, 3];
let double;

// polyfill function for map
if (!Array.prototype.map) {
  Array.prototype.map = function (cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb) arr.push(cb(this[i], i, this));
      else throw new Error("must provide a callback");
    }
    return arr;
  };
}
// console.log(Array.prototype.map);
// console.log(typeof Array.prototype.map);
// console.log(Boolean(Array.prototype.map));

double = arr.map((value) => value * 2);
console.log(double);

// console.log(arr.myMap((value) => value * 2));
