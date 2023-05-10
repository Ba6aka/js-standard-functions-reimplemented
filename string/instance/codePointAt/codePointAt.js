String.prototype.codePointAt = function codePointAt(index) {
  const code = this.charCodeAt(index)

  if (code >= 0xD800 && code <= 0xDBFF) {
    const hi = code - 0xD800
    const low = this.charCodeAt(index + 1) - 0xDC00
    return (hi << 10) + low + 0x10000
  }

  return code
}