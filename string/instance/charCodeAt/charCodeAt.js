function charCodeAt(str, index) {
  // Ensure that the index is within the range of the string
  if (index < 0 || index >= str.length) {
    return NaN;
  }

  // Convert the character at the index to its Unicode code point
  const code = str.charCodeAt(index);

  // Ensure that the code is a valid number
  if (isNaN(code)) {
    return NaN;
  }

  return code;
}