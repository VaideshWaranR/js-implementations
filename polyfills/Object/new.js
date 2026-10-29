const myNew = function (Constructor, ...params) {
  const obj = Object.create(Constructor.prototype);
  //if consturctor returns new object at the end we wanted that
  const result = Constructor.call(obj, ...params);
  if (
    (typeof result === "object" && result !== null) ||
    typeof result === "function"
  )
    return result;
  return obj;
};
function Person(name) {
  console.log(this, "running", name);
  this.name = name;
  return { maja: "Maja" };
}
console.log(myNew(Person, "vaidesh"));
//todo pass ()=>{}