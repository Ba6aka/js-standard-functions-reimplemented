Array.prototype.splice = function splice(start, deleteCount, ...items) {
  const deleted = []
  const len = this.length

  let count = deleteCount
  let i, j

  if (start < 0) {
    i = len + start
  } else {
    i = start
  }

  if (count === undefined) {
    count = len - i
  }

  if (count > len - i) {
    count = len - i
  }

  for (j = 0; j < count; j++) {
    deleted[deleted.length] = (this[i + j])
  }
  
  for (; j < len - i; j++) {
    this[i + j - count] = this[i + j]
  }
  this.length = len - count

  const itemCount = items.length
  for (j = len - 1; j >= i; j--) {
    this[j + itemCount] = this[j]
  }

  for (j = 0; j < itemCount; j++) {
    this[i + j] = items[j]
  }
  this.length = len - count + itemCount

  return deleted
}