Array.prototype.concat = function concat(...args) {
  let result = [...this]

  for (const arg of args) {
    if (Array.isArray(arg)) result = [...result, ...arg]
    else result[result.length] = arg
  }

  return result
}
