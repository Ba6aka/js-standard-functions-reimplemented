Array.prototype.sort = function sort(callback) {
  // If no callback is provided, sort the array in ascending order
  if (!callback) {
    callback = function(a, b) {
      if (a < b) {
        return -1
      } else if (a > b) {
        return 1
      } else {
        return 0
      }
    }
  }

  // Perform the sort
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (callback(this[i], this[j]) > 0) {
        const temp = this[i]
        this[i] = this[j]
        this[j] = temp
      }
    }
  }

  // Return the sorted array
  return this
}