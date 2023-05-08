Array.prototype.filter = function filter(predicate, thisArg = null) {
  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`)
  }

  const results = []

  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    const shouldInclude = predicate.call(thisArg, item, i, this)

    if (shouldInclude) {
      results[results.length] = item
    }
  }

  return results
}

const arr = [1, 2, 3, 4, 5]

