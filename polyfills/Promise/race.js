function myPromiseRace(args) {
  args = Array.from(args);
  const len = args.length;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(args[i]).then(resolve, reject);
    }
  });
}
// Promise.race([]).then(console.log, console.log);
// myPromiseRace([]).then(console.log, console.log);
myPromiseRace([
  new Promise((res) => setTimeout(() => res("later"), 0)),
  42,
]).then(console.log);
