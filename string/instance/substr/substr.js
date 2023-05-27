String.prototype.substr = function (start, length) {
  const strLength = this.length
  start = start < 0 ? Math.max(strLength + start, 0) : start
  const end = length !== undefined ? Math.min(start + length, strLength) : strLength
  
  let result = ''
  
  for (let i = start; i < end; i++) {
    result += this[i]
  }
  return result
}