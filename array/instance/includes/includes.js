Array.prototype.includes = function includes(searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) return false

  if (fromIndex < 0) fromIndex = Math.max(this.length + fromIndex, 0)

  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) return true
  }

  return false
}