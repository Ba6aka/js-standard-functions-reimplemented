String.prototype.substr = function substr(start, length) {
  let result = ''
  let str = this
  const strLength = str.length

  // Normalize negative start value
  if (start < 0) {
    start = Math.max(strLength + start, 0);
  }

  // Calculate end index
  const end = length !== undefined ? Math.min(start + length, strLength) : strLength

  // Build the resulting string
  for (let i = start; i < end; i++) {
    result += str[i]
  }

  return result
}