Array.prototype.toString = function toSrting() {
  let result = ''

  for (let i = 0; i < this.length; i++) {
    const value = this[i]

    result += value === undefined || value === null ? '' : value.toString()
    
    if (i < this.length - 1) {
      result += ','
    }
  }
  return result
}