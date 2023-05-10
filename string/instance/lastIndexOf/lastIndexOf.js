String.prototype.lastIndexOf = function lastIndexOf(searchValue, fromIndex) {
  let index = -1
  const str = this.valueOf()

  if (typeof searchValue !== 'string') {
    searchValue = String(searchValue)
  }

  if (typeof fromIndex !== 'number') {
    fromIndex = str.length - 1
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (str[i] === searchValue[searchValue.length - 1]) {
      let found = true
      for (let j = searchValue.length - 2; j >= 0; j--) {
        if (str[i - (searchValue.length - j - 1)] !== searchValue[j]) {
          found = false
          break
        }
      }
      if (found) {
        index = i - searchValue.length + 1
        break
      }
    }
  }

  return index
}