Array.from = function (arrayLike, mapFn, thisArg) {
  if (typeof mapFn !== 'function') {
    mapFn = function (item) {
      return item
    }
  }

  if (thisArg) {
    mapFn = mapFn.bind(thisArg)
  }

  const result = []

  if (typeof arrayLike[Symbol.iterator] === 'function') {
    const iterator = arrayLike[Symbol.iterator]()
    let next = iterator.next()

    while (!next.done) {
      result.push(mapFn(next.value))
      next = iterator.next()
    }
  } else {
    for (let i = 0; i < arrayLike.length; i++) {
      result.push(mapFn(arrayLike[i]))
    }
  }

  return result
}