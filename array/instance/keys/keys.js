Array.prototype.keys = function keys() {
  let index = 0

  return {
    [Symbol.iterator]:keys.bind(this),
    next: () => {
      if (index < this.length) {
        return { value: index++, done: false }
      } else {
        return { done: true }
      }
    },
  }
}