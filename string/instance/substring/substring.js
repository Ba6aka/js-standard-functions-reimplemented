String.prototype.substring = function (start = 0, end = this.length) {
  start = start < 0 ? Math.max(this.length + start, 0) : Math.min(start, this.length);
  end = end > this.length ? this.length : (end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length))

  let result = ''
  
  for (let i = start; i < end; i++) {
    result += this[i]
  }
  return result
}