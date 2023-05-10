String.prototype.concat = function concat(...strings) {
  let result = ''

  // Add the current string to the result
  for (let i = 0; i < this.length; i++) {
    result += this[i]
  }

  // Add each additional string to the result
  for (let i = 0; i < strings.length; i++) {
    const str = strings[i]
    for (let j = 0; j < str.length; j++) {
      result += str[j]
    }
  }

  return result
}