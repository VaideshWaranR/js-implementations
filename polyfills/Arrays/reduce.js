const arr = [1, 2, 3, , 4, ,];
Object.defineProperty(Array.prototype, "myReduce", {
  value: function (callback, intialValue) {
    if (typeof callback !== "function")
      throw new TypeError("Callback is not a function");
    let hasInitialValue = arguments.length >= 2;
    let res = intialValue;
    let startIndex = 0;
    const len = this.length;
    if (!hasInitialValue) {
      for (let i = 0; i < len; i++) {
        if (i in this) {
          res = this[i];
          startIndex = i + 1;
          break;
        }
      }
    }
    if (!hasInitialValue && startIndex == 0)
      throw new TypeError("Empty array passed");
    for (let i = startIndex; i < len; i++) {
      if (i in this) {
        res = callback(this, res, this[i], i, this);
      }
    }
    return res;
  },
  enumerable: false,
  configurable: true,
});
const res = arr.myReduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(res);
// console.log(
//   arr.reduce((acc, cur) => {
//     return acc + cur;
//   }),
// );
