Array.prototype.reduceRight = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue
  for (let i = this.length - 1; i >= 0; i--) {
    accumulator = accumulator === undefined ? this[i] : callback(accumulator, this[i], i, this)
  }
  if (accumulator === undefined) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  return accumulator
}