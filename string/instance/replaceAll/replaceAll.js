String.prototype.replace = function replace(searchValue, replaceValue) {
  let result = '';
  let startIndex = 0;
  let matchIndex = this.indexOf(searchValue);

  while (matchIndex !== -1) {
    result += this.slice(startIndex, matchIndex) + replaceValue;
    startIndex = matchIndex + searchValue.length;
    matchIndex = this.indexOf(searchValue, startIndex);
  }

  result += this.slice(startIndex);

  return result;
}