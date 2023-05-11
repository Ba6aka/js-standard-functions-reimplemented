String.prototype.startsWith = function startsWith(searchString) {
  const stringLength = this.length
  const searchLength = searchString.length

  if (searchLength > stringLength) {
    return false
  }

  for (let i = 0; i < searchLength; i++) {
    if (this[i] !== searchString[i]) {
      return false
    }
  }

  return true
}