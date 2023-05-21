Array.prototype.pop = function pop() {
  if (this.length === 0) {
    return undefined
  }

  const lastItem = this[this.length - 1]

  this.length--
  
  return lastItem
}