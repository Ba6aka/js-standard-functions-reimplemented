String.prototype.endsWith = function endsWith(searchString, position) {
  position = position === undefined ? this.length : position;
  
  const searchLength = searchString.length;
  const endPosition = position - searchLength;

  let i = endPosition < 0 ? 0 : endPosition;

  while (i < position) {
    if (this.charAt(i) !== searchString.charAt(i - endPosition)) {
      return false;
    }
    i++;
  }
  return true;
}