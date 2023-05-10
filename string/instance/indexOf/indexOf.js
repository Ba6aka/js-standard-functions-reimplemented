String.prototype.indexOf = function indexOf(searchValue, fromIndex) {
  if (searchValue === undefined || searchValue === null) {
    throw new TypeError("searchValue is null or undefined");
  }

  const str = this;
  const len = str.length;

  if (len === 0) {
    return -1;
  }

  const startIndex = fromIndex || 0;

  for (let i = startIndex; i < len; i++) {
    let found = true;

    for (let j = 0; j < searchValue.length; j++) {
      if (str[i + j] !== searchValue[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
}