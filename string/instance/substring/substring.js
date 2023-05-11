String.prototype.substring = function substring(start, end) {
  if (start === undefined) {
    start = 0
  } else if (start < 0) {
    start = Math.max(this.length + start, 0)
  } else {
    start = Math.min(start, this.length)
  }

  if (end === undefined || end > this.length) {
    end = this.length
  } else if (end < 0) {
    end = Math.max(this.length + end, 0)
  } else {
    end = Math.min(end, this.length)
  }

  let result = ''
  for (let i = start; i < end; i++) {
    result += this[i]
  }

  return result
}
