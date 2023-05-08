Array.prototype.findIndex = function findIndex(predicate, thisArg) {
  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`)
  }

  const array = Object(this)
  const length = array.length >>> 0 // explanation: 
  let value

  for (let i = 0; i < length; i++) {
    if (i in array) {
      value = array[i]
      if (predicate.call(thisArg, value, i, array)) {
        return i
      }
    }
  }

  return -1
}