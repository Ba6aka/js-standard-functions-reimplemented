Array.prototype.values = function values() {
  let i = 0
  const array = this
  return {
    [Symbol.iterator]:values.bind(this),
    next: function() {
      if (i < array.length) {
        return { value: array[i++], done: false }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}