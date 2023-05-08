Array.prototype.slice = function slice(start, end) {
  const length = this.length

  let relativeStart = start == null ? 0 : start < 0 ? Math.max(length + start, 0) : Math.min(start, length)
  let relativeEnd = end == null || end > length ? length : end < 0 ? Math.max(length + end, 0) : Math.min(end, length)

  const result = []

  while (relativeStart < relativeEnd) {
    result.push(this[relativeStart])
    relativeStart++
  }

  return result
}
