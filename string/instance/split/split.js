String.prototype.split = function split(separator) {
  const str = this
  const result = []

  let currentIndex = 0
  let nextIndex = str.indexOf(separator)

  while (nextIndex !== -1) {
    const substring = str.substring(currentIndex, nextIndex)
    result.push(substring)
    
    currentIndex = nextIndex + separator.length
    nextIndex = str.indexOf(separator, currentIndex)
  }

  result.push(str.substring(currentIndex))
  
  return result
}