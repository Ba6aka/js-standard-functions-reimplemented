String.prototype.concat = function (...strings) {
  let result = this

  for (const str of strings) {
    result += str
  }

  return result
}