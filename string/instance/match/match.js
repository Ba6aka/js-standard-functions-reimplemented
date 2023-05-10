String.prototype.match = function match(regexp) {
  const matches = []
  let matchIndex = 0
  let lastIndex = -1

  while (matchIndex >= 0) {
    matchIndex = this.indexOf(regexp.source, lastIndex + 1)
    if (matchIndex >= 0) {
      matches.push(this.slice(matchIndex, matchIndex + regexp.source.length))
      lastIndex = matchIndex
    }
  }

  return matches.length > 0 ? matches : null
}