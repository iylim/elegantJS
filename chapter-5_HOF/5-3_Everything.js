function every(array, test) {
  // Your code here.
  for (const elem of array) {
    if (!test(elem)) return false;
  }
  return true;
  
  // some
  // return !array.some(element => !test(element));
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
