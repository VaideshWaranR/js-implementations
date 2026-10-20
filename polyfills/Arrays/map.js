const temp = [1, 2, 3, , 4];
const obj = { 0: 10, 1: 20, length: 2 };

//normal Array.prototype - fun Implementation will include it in enumerable so we went
// with object define prop
//this enumerable will be seen in for ... in loop
// also should handle sparse arrays
Object.defineProperty(Array.prototype, "myMap", {
  value: function (callBack, thisArg) {
    if (typeof callBack !== "function") {
      throw new TypeError("Not a function");
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) result[i] = callBack.call(thisArg, this[i], i, this);
    }
    return result;
  },
  writable: true,
  enumerable: false,
  configurable: true,
});
// console.log(Array.prototype.myMap.call(obj,num=>num*2))
console.log(
  temp.myMap(function (num) {
    return num * this.length;
  }, obj),
);
// for (const key in temp) {
//   console.log(key);
// }
