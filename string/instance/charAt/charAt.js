String.prototype.charAt = function charAt(index) {
  // Check if index is within bounds
  if (index >= this.length || index < 0) {
    return ""
  }
  
  // Convert string to array of characters
  const chars = []
  for (let i = 0; i < this.length; i++) {
    chars.push(this[i])
  }
  
  // Return character at index
  return chars[index]
}