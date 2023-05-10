Array.prototype.find = function find(callback, thisArg = null) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }

  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    const found = callback.call(thisArg, element, i, this)
    if (found) {
      return element
    }
  }

  return undefined
}