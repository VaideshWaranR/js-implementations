const user = { name: "Vaidesh" };
const greet = function (greeting, punctuation) {
  console.log(`${greeting} ${this.name} ${punctuation}`);
};
Object.defineProperty(Function.prototype, "myBind", {
  value: function (thisArg, ...args) {
    const temp = this;
    return function (...tempArgs) {
      const key = Symbol("id");
      const context =
        thisArg == null ? globalThis : new.target ? this : Object(thisArg);
      context[key] = temp;
      try {
        return context[key](...args, ...tempArgs);
      } finally {
        delete context[key];
      }
    };
  },
  enumerable: false,
  configurable: true,
  writable: true,
});
// const fn = greet.myBind(user, "Hello");
// const fn1 = fn.myBind({ name: "temp" }, "!");
// fn1();

function Person(name) {
  this.name = name;
  return { name: "Returned object" };
}

const BoundPerson = Person.myBind(user, "Vaidesh");
const person = new BoundPerson();

console.log(person.name);
