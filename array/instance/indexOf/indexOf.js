Array.prototype.indexOf = function indexOf(item, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === item) {
      return i
    }
  }
  return -1
}