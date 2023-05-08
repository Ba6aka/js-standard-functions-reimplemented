Array.prototype.join = function join(separator = ',') {
  let result = ''
  for (let i = 0; i < this.length; i++) {
    result += this[i]
    if (i < this.length - 1) {
      result += separator
    }
  }
  return result
}