const arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
arrays.reduce((acc, val) => acc.concat(val), []);