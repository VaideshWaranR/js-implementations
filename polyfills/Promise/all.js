function networkCall(data, delay) {
  return new Promise((res) => {
    setTimeout(() => res(data), delay);
  });
}

function myPromiseAll(args) {
  return new Promise((resolve, reject) => {
    args = Array.from(args);
    const len = args.length;
    const result = [];
    if (len === 0) resolve(result);
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(args[i]).then(
        (data) => {
          result[i] = data;
          cnt++;
          if (cnt === len) resolve(result);
        },
        (err) => {
          reject(err);
        },
      );
    }
  });
}
let res = myPromiseAll([
  networkCall("Maja", 400),
  networkCall("Vanakam", 100),
  networkCall("Vandhanam", 200),
  //   Promise.reject(new Error("x")),
  1,
  2,
  3,
]);
res
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
