const greet = function (msg1, msg2) {
  "use strict";
  return msg1 + " " + this.name + " " + msg2;
};
const user = { name: "Vaidesh" };
Object.defineProperty(Function.prototype, "myApply", {
  value: function (thisArg,args) {
    const context = thisArg == null ? globalThis : Object(thisArg);
    const uniqueId = Symbol("id");
    context[uniqueId] = this;
    const normalisedArgs=args==null?[]:Array.from(args);
    //normalize this before passing to handle null.undef and array object like
    try {
      return context[uniqueId](...normalisedArgs);
    } finally {
      delete context[uniqueId];
    }
  },
  writable: true,
  configurable: true,
});
console.log(greet.myApply(user, {0:1,1:2,length:2}));
