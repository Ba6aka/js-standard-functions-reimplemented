String.prototype.matchAll = function matchAll(regexp) {
  const matches = [];

  let result = null;

  const lastIndexBackup = regexp.lastIndex;
  
  regexp.lastIndex = 0;
  
  while (result = regexp.exec(this)) {
    matches.push(result);
    
    if (result.index === regexp.lastIndex) {
      regexp.lastIndex++;
    }
  }
  
  regexp.lastIndex = lastIndexBackup;
  return matches;
}