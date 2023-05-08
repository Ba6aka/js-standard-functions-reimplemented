Array.prototype.forEach = function forEach(callbackFn, thisArg = null) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`)
  }

  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    callbackFn.call(thisArg, item, i, this)
  }
}
