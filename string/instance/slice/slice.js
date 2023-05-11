String.prototype.slice = function slice(start, end) {
  let slicedString = '';
  const stringLength = this.length;
  
  // Normalize start and end values
  const startIndex = (start < 0) ? Math.max(stringLength + start, 0) : Math.min(start, stringLength);
  const endIndex = (end === undefined) ? stringLength : ((end < 0) ? Math.max(stringLength + end, 0) : Math.min(end, stringLength));
  
  // Construct the sliced string
  for (let i = startIndex; i < endIndex; i++) {
    slicedString += this[i];
  }
  
  return slicedString;
}