Array.prototype.toLocaleString = function toLacaleString() {
  let result = ''

  const separator = ','
  
  for (let i = 0; i < this.length; i++) {
    if (i !== 0) {
      result += separator
    }
    if (this[i] === null || this[i] === undefined) {
      result += ''
    } else {
      result += this[i].toLocaleString()
    }
  }
  return result
}