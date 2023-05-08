Array.prototype.reduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0]

  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }

  return accumulator
}