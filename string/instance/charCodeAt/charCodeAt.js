function charCodeAt(str, index) {
  if (index < 0 || index >= str.length) {
    return NaN
  }

  const code = str.charCodeAt(index)

  if (isNaN(code)) {
    return NaN
  }

  return code
}