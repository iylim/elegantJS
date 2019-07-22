class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure('Klunk');
}

function reliableMultiply(a, b) {
  // Your code here.
  try {
    return primitiveMultiply(a, b);
  } catch (err) {
    if (err instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    }
    throw err;
  }
}

console.log(reliableMultiply(8, 8));
// → 64
