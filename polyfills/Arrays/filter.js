const arr = [1, 2, 3,, 5];
// console.log(arr.filter(num=>num%2==0))

Object.defineProperty(Array.prototype, "myFilter", {
  value: function (callback, thisArg) {
    const result = [];
    if (typeof callback !== "function")
      throw new TypeError("Callback is not a function");
    for (let i = 0; i < this.length; i++) {
      if (i in this && callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  },
  enumerable:false,
  writable:true,
  configurable:true
});

console.log(arr.myFilter((num,ind) => ind>=2));
