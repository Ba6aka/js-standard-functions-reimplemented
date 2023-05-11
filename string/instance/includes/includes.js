String.prototype.includes = function includes(searchString, position = 0) {
  const len = this.length
  const searchLen = searchString.length

  for (let i = position; i <= len - searchLen; i++) {
    let j
    for (j = 0; j < searchLen; j++) {
      if (this[i + j] !== searchString[j]) {
        break
      }
    }
    if (j === searchLen) {
      return true
    }
  }
  return false
}