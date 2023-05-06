// list of array methods:
/*
- .push()
- .pop()
- .shift()
- .unshift()
- .indexOf()
- .join()
- .reverse()
- .slice()
- .splice()
- .concat()
- .sort()   
- .map()
- .filter()
- .reduce()
- .includes()
...
a function to get a list of all the methods in format above:
*/

function getAllArrayMethods() {
  let methodsString = ''
  const methods = Object.getOwnPropertyNames(Array.prototype).filter(function(prop) {
    return typeof Array.prototype[prop] === 'function';
  }).map(function(prop) {
    return prop + '()';
  });
  
  methods.forEach((method) => {
    methodsString += `- .${method}\n`
  })

  return methodsString
}



