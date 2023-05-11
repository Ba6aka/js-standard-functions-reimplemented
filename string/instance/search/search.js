String.prototype.search = function search(pattern) {
  const str = this;
  const len = str.length;
  const patternLen = pattern.length;
  
  for (let i = 0; i <= len - patternLen; i++) {
    let j;
    
    for (j = 0; j < patternLen; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
    }
    
    if (j === patternLen) {
      return i;
    }
  }
  
  return -1;
}