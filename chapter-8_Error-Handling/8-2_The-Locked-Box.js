const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  // Your code here.
  const boxLockedOnEntry = box.locked;
  if (boxLockedOnEntry) {
    box.unlock();
  }
  try {
    body();
  } catch (err) {
    throw err;
  } finally {
    if (boxLockedOnEntry) {
      box.lock();
    }
  }
}

withBoxUnlocked(() => {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(() => {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (err) {
  console.log(`Error raised: ${err}`);
}
console.log(box.locked);
// → true
