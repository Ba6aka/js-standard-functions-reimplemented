String.prototype.at = function at(index) {
  index |= 0
  
  return index < 0 ? this[this.length + index] : this[index]
}