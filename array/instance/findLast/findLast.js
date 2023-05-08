Array.prototype.findLast = function findLast(predicate, thisArg = null) {
  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`)
  }

  for (let i = this.length - 1; i >= 0; i--) {
    const item = this[i]
    const isMatch = predicate.call(thisArg, item, i, this)
    
    if (isMatch) {
      return item
    }
  }
  
  return undefined
}