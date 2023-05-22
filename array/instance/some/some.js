Array.prototype.some = function some(callback) {
  for (let i = 0; i < this.length; i++) {
   if (callback(this[i], i, this)) return true
  }

  return false
}