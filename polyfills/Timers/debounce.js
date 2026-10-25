function debounce(callback, time) {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => callback.apply(this, args), time);
  };
}

function debounceLeadingAndTrailing(
  fn,
  delay,
  options = { leading: true, trailing: true },
) {
  let id = null;
  return function (...args) {
    const isFirstCall = id === null;
    clearTimeout(id);
    const calledFirst = options.leading && isFirstCall;
    if (calledFirst) fn.apply(this, args);
    id = setTimeout(() => {
      id = null;
      if (options.trailing && !calledFirst) fn.apply(this, args);
    }, delay);
  };
}
search = (text) => console.log(text);
dbSearch = debounceLeadingAndTrailing(search, 300);

dbSearch("A");
dbSearch("B");
dbSearch("C");
