Array.prototype.concat = function concat(...arrays) {
  const result = [...this]

  let resultIndex = result.length

  for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i]
    
    if (Array.isArray(arr)) {
      for (let j = 0; j < arr.length; j++) {
        result[resultIndex] = arr[j]
        resultIndex++
      }
    } else {
      result[resultIndex] = arr
      resultIndex++
    }
  }

  return result
}
