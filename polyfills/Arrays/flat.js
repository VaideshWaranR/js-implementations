const arr = [1, [2], , , , 3, [4, 5, , [6, 7]]];
Object.defineProperty(Array.prototype, "myFlat", {
  value: function (depth = 1) {
    const result = [];
    depth = Math.max(0, Math.floor(depth)) || 0;
    function flat(arr, deep) {
      if (deep > depth) {
        result.push(arr);
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) flat(arr[i], deep + 1);
        else if (i in arr) result.push(arr[i]);
      }
    }
    flat(this, 0);
    return result;
  },
  writable: true,
  enumerable: true,
  configurable: true,
});

// console.log(arr.myFlat(Infinity));
// console.log(arr.myFlat(NaN));
// console.log(arr.myFlat(0));
// console.log(arr.myFlat(-1));
// console.log(arr.flat(0.8))
