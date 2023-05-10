Array.prototype.map = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    const item = this[i]

    result[i] = (callback(item, i, this))
  }

  return result
}