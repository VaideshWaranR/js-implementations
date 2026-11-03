function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("caching");
      return cache.get(key)
    }
    const result = fn.apply(this, args);
    console.log("calculating...");
    cache.set(key, result);
    return result;
  };
}
const obj = {
  base: 10,
  add: memoize(function (x) { return this.base + x; }),
};
console.log(obj.add(5)); // 15