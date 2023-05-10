Array.prototype.splice = function splice(start, deleteCount, ...items) {
  const deleted = []
  const len = this.length

  let count = deleteCount
  let i, j

  // Determine start index
  if (start < 0) {
    i = len + start
  } else {
    i = start
  }

  // Determine delete count
  if (count === undefined) {
    count = len - i
  }

  // Clamp delete count
  if (count > len - i) {
    count = len - i
  }

  // Delete items
  for (j = 0; j < count; j++) {
    deleted.push(this[i + j])
  }
  
  for (; j < len - i; j++) {
    this[i + j - count] = this[i + j]
  }
  this.length = len - count

  // Insert items
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