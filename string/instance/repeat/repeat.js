String.prototype.repeat = function repeat(count) {
  if (count < 0 || count === Infinity) {
    throw new RangeError('Invalid count value')
  }

  let repeatedString = ''

  for (let i = 0; i < count; i++) {
    repeatedString += this
  }

  return repeatedString
}