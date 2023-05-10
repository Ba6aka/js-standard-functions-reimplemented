Array.prototype.at = function at(index) {
  const array = Object(this)
  const length = array.length >>> 0
  const intIndex = index >> 0

  if (intIndex !== index || intIndex < 0 || intIndex >= length) {
    return undefined
  }

  let currentIndex = 0
  let result

  while (currentIndex < length) {
    const current = array[currentIndex]
    if (currentIndex === intIndex) {
      result = current
      break
    }
    currentIndex++
  }

  return result
}