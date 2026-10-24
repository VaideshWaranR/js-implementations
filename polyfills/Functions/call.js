const greet = function (msg1, msg2) {
  "use strict";
  return msg1 + " " + this.name + " " + msg2;
};
const user = { name: "Vaidesh" };
Object.defineProperty(Function.prototype, "myCall", {
  value: function (thisArg, ...args) {
    const context = thisArg == null ? globalThis : Object(thisArg);
    const uniqueId = Symbol("id");
    context[uniqueId] = this;
    try {
      return context[uniqueId](...args);
    } finally {
      delete context[uniqueId];
    }
  },
  writable: true,
  configurable: true,
});
console.log(greet.myCall(null, "hello"));
console.log(null == undefined); //important catch to handle null and undefined values
