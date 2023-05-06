function getAllArrayMethods() {
  let methodsString = ''
  const methods = Object.getOwnPropertyNames(Array.prototype).filter(function (prop) {
    return typeof Array.prototype[prop] === 'function';
  }).map(function (prop) {
    return prop + '()';
  });

  methods.forEach((method) => {
    methodsString += `- .${method}\n`
  })

  return methodsString
}
