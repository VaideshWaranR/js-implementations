function throttle(fn, delay) {
  let isThrottled = false;
  return function (...args) {
    if (isThrottled) return;
    fn.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

function throttleLeadingAndTrailing(
  fn,
  delay,
  option = { leading: true, trailing: true },
) {
  let isThrottled = false;
  let context
  return function (...args) {
    if (!isThrottled) {
      isThrottled = true;
      if (option.leading) fn.apply(this, args);
      else context = fn.bind(this, ...args);
      setTimeout(() => {
        if (option.trailing && context) context();
        isThrottled = false;
      }, delay);
    } else context = fn.bind(this, ...args);
  };
}

thFn = throttleLeadingAndTrailing((text) => console.log(text), 300);
thFn("Hello1");
setTimeout(()=>thFn("Hello2"),100);
setTimeout(()=>thFn("Hello3"),200);
setTimeout(()=>thFn("Hello4"),300);
setTimeout(()=>thFn("Hello5"),400);
setTimeout(()=>thFn("Hello6"),500);
