Array.prototype.sort = function (callback) {
  
  callback = callback || function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (callback(this[i], this[j]) > 0) {
        [this[i], this[j]] = [this[j], this[i]]
      }
    }
  }

  return this
}