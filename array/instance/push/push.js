Array.prototype.push = function(...items) {
  const originalLength = this.length
  for (let i = 0; i < items.length; i++) {
    this[originalLength + i] = items[i]
  }
  return this.length
}