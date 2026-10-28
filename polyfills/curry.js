const curryN = function (fn, arity) {
    if(arity === undefined) return fn();
    if(!arity){
        throw new Error("pass the arity for curryN function")
    }
  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }
    return function (...passed) {
      return curried(...args, ...passed);
    };
  };
};
const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);
// console.log(curryN(sumAll,3)(10, 20, 40)(30));
console.log(curryN(()=>{console.log("test")})());
