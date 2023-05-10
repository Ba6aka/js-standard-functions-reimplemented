String.prototype.padEnd = function padEnd(targetLength, padString) {
  const str = this.valueOf();
  const padStr = padString ? padString : " ";

  let paddedStr = "";
  let remainingLength = targetLength - str.length;

  while (remainingLength > 0) {
    if (remainingLength % padStr.length == 0) {
      paddedStr += padStr.repeat(remainingLength / padStr.length);
      remainingLength = 0;
    } else {
      paddedStr += padStr.slice(0, remainingLength % padStr.length);
      remainingLength -= remainingLength % padStr.length;
    }
  }

  return str + paddedStr;
}