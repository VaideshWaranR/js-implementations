function myPromiseAny(args) {
  args = Array.from(args);
  const len = args.length;
  const errors = [];
  let cnt = 0;
  return new Promise((resolve, reject) => {
    if (len === 0) reject(new AggregateError([]));
    for (let i = 0; i < len; i++) {
      Promise.resolve(args[i]).then(resolve, (err) => {
        errors[i] = err;
        cnt++;
        if (cnt === len) reject(new AggregateError(errors));
      });
    }
  });
}

// Promise.any([Promise.reject(1), Promise.reject(2)]).catch((e) => {
//   console.log(e instanceof AggregateError, e.errors);
// });

myPromiseAny([Promise.reject(1), Promise.reject(2)]).catch((e) => {
  console.log(e instanceof AggregateError, e.errors);
});
