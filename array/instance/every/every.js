Array.prototype.every = function every(predicate, thisArg = null) {
  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`)
  }

  for (let i = 0; i < this.length; i++) {
    if (!predicate.call(thisArg, this[i], i, this)) {
      return false
    }
  }

  return true
}