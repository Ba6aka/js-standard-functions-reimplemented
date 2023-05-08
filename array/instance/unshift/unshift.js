Array.prototype.unshift = function (...args) {
  const length = this.length
  const argsLength = args.length

  for (let i = length - 1; i >= 0; i--) {
    this[i + argsLength] = this[i]
  }

  for (let i = 0; i < argsLength; i++) {
    this[i] = args[i]
  }

  return this.length
}