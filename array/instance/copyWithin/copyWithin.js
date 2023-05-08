Array.prototype.copyWithin = function copyWithin(target, start = 0, end = this.length) {
  const len = this.length

  target = target < 0 ? Math.max(len + target, 0) : Math.min(target, len)
  start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len)
  end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len)

  let count = Math.min(end - start, len - target)

  const direction = target < start && start < target + count
  const step = direction ? -1 : 1

  let i = start
  let j = target

  while (count > 0) {
    this[j] = this[i]
    i += step
    j += step
    count--
  }
  return this
}