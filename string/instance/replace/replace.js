String.prototype.replace = function replace(searchValue, replaceValue) {
  const matchIndex = this.indexOf(searchValue);
  
  if (matchIndex === -1) {
    return this;
  }
  
  return this.slice(0, matchIndex) + replaceValue + this.slice(matchIndex + searchValue.length);
}