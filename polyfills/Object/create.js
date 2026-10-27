let res 
// res= Object.create(
//   {},
//   {
//     id: {
//       value: 12,
//       writable: true,
//       enumerable: true,
//     },
//   },
// );

Object.myCreate = function (prototype, properties) {
  if (typeof prototype !== "object" && typeof prototype !== "function") {
    throw new TypeError("Object params should be object prototype");
  }
  let result;
  if (prototype == null) {
    result = Object.setPrototypeOf({}, null);
  } else {
    function F() {}
    F.prototype = prototype;
    result = new F();
  }
  if (properties !== undefined) {
    Object.defineProperties(result, properties);
  }
  return result;
};
const base = {
  id: 123,
  hi() {
    console.log("HI");
  },
};
res = Object.myCreate(base);
console.log(res.hi());
