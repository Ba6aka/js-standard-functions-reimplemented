String.prototype.localeCompare = function localeCompare(other) {
  for (let i = 0; i < this.length && i < other.length; i++) {
    if (this.charCodeAt(i) !== other.charCodeAt(i)) {
      return this.charCodeAt(i) - other.charCodeAt(i)
    }
  }
  return this.length - other.length
}