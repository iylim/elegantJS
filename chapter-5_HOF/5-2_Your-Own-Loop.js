// Your code here.
const loop = (value, test, update, execute) => {
  if (test(value)) {
    execute(value);
    return loop(update(value), test, update, execute);
  } // else stop
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
