String.prototype.at = function at(index) {
  const str = this.toString()
  const length = str.length >>> 0

  if (index < 0 || index >= length) {
    return undefined
  }

  const charCode = str.charCodeAt(index)
  const first = charCode & 0xfc00

  if (first === 0xd800) {
    const second = str.charCodeAt(index + 1) & 0x3ff

    return String.fromCharCode(((charCode & 0x3ff) << 10) + second + 0x10000)
  } else {
    return str.charAt(index)
  }
}