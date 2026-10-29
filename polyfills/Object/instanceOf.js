// console.log("hello" instanceof String);

const myInstanceOf = function recur(first, second) {
  if (
    first == null ||
    (typeof first !== "object" && typeof first !== "function")
  )
    return false;
  if (first.__proto__ === second.prototype) return true;
  return recur(first.__proto__, second);
};
class Cell {
  hi = () => {
    console.log("Cell");
  };
}
const SingleCell = new Cell();
const DoubleCell = Object.create(SingleCell);
// console.log(myInstanceOf(DoubleCell, Cell));
// console.log(myInstanceOf([], Array));
// console.log(myInstanceOf([], Object));
// console.log(myInstanceOf({}, Array));
// console.log(myInstanceOf(Object.create(null), Object));
// console.log(myInstanceOf("hello", Object));
// console.log(myInstanceOf(5, Number));
// console.log(typeof "hello");
// console.log(typeof 5);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {});
// console.log(typeof null);

console.log(myInstanceOf("hello", String)); // false
console.log(myInstanceOf("hello", Object)); // false
console.log(myInstanceOf([], Object)); // true
console.log(myInstanceOf(function () {}, Function)); // true
console.log(myInstanceOf(Object.create(null), Object)); // false
