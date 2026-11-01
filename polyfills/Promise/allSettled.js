function myPromiseAllSettled(args) {
  args = Array.from(args);
  const len = args.length;
  const result = [];
  let cnt = 0;
  return new Promise((resolve, reject) => {
    if (len === 0) resolve(result);
    for (let i = 0; i < len; i++) {
      Promise.resolve(args[i])
        .then(
          (data) => {
            result[i] = { status: "fulfilled", value: data };
          },
          (err) => {
            result[i] = { status: "rejected", reason: err };
          },
        )
        .finally(() => {
          cnt++;
          if (cnt === len) resolve(result);
        });
    }
  });
}

// const input = [Promise.resolve("Maja"), Promise.reject("Maja")];
// myPromiseAllSettled(input).then(console.log);
// Promise.allSettled(input).then(console.log);
// myPromiseAllSettled([1, Promise.reject("x")]).then(console.log);
// myPromiseAllSettled([]).then(console.log); // should print []
// myPromiseAllSettled([]).then((r) => console.log("got:", r));

// Test A: only yours
myPromiseAllSettled([1, Promise.reject("x")]).then(console.log);

// Test B: only the real one
Promise.allSettled([1, Promise.reject("x")]).then(console.log);
