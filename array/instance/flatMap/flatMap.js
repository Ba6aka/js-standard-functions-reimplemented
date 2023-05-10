Array.prototype.flatMap = function flatMap(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError('flatMap mapper function is not callable')
  }

  const result = []
  let index = 0

  for (let i = 0; i < this.length; i++) {
    const mappedValues = callback.call(thisArg, this[i], i, this)
    if (Array.isArray(mappedValues)) {
      for (let j = 0; j < mappedValues.length; j++) {
        result[index++] = mappedValues[j]
      }
    } else {
      result[index++] = mappedValues
    }
  }

  return result
}