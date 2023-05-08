Array.prototype.findLastIndex = function findLastIndex(predicate, thisArg = null) {
  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`)
  }

  for (let i = this.length - 1; i >= 0; i--) {
    const item = this[i]
    const shouldFind = predicate.call(thisArg, item, i, this)

    if (shouldFind) {
      return i
    }
  }

  return -1
}