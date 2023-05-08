Array.prototype.lastIndexOf = function(searchElement, fromIndex = this.length - 1) {
  let index = -1
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      index = i
      break
    }
  }
  return index
}