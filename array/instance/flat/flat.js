Array.prototype.flat = function(depth = 1) {
  if (depth < 1) {
    return this.slice()
  }

  const result = []

  for (let i = 0; i < this.length; i++) {
    const item = this[i]

    if (Array.isArray(item)) {
      const flatItems = item.flat(depth - 1)
      for (let j = 0; j < flatItems.length; j++) {
        result.push(flatItems[j])
      }
    } else {
      result.push(item)
    }
  }

  return result
}