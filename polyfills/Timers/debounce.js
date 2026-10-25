function debounce(callback, time) {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => callback.apply(this, args), time);
  };
}

function debounceLeadingAndTrailing(
  callback,
  time,
  options = { leading: false, trailing: false },
) {
  let id;
  let isLeadingInvoked = false;
  //execute once at first then wait for the delay to finish
  return function (...args) {
    if (id) clearTimeout(id); //if id is there clear it
    if (!id && options.leading) {
      //if first time and leadin gset to true
      callback.apply(this, args);
      isLeadingInvoked = true; //wont run the trailing
    } else isLeadingInvoked = false; //making this false so trailing can run at last
    id = setTimeout(() => {
      if (options.trailing && !isLeadingInvoked) {
        callback.apply(this, args);
        isLeadingInvoked = false; //making this false so trailing can run at last
      }
      id = null; //when last call executes the id may still exists so making it expllicitly null
      //it's outside because if trailing is false it never gets cleared for leading to be invoked
    }, time);
  };
}
search = (text) => console.log(text);
dbSearch = debounceLeadingAndTrailing(search, 300);

dbSearch("A");
dbSearch("B");
dbSearch("C");
