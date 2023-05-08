Array.prototype.entries = function entries() {
  let index = 0

  return {
    [Symbol.iterator]:entries.bind(this),
    next: () => {
      if (index < this.length) {
        const entry = [index, this[index]]
        index++
        return { value: entry, done: false }
      } else {
        return { done: true }
      }
    },
  }
}