const fs = require('fs')
const path = require('path')

function getAllArrayMethods() {
  let methodsString = ''
  const methods = Object.getOwnPropertyNames(String.prototype).filter(function (prop) {
    return typeof String.prototype[prop] === 'function'
  })

  methods.forEach((method) => {
    methodsString += `- .${method}\n`
  })
  console.log(methods)
  return methods
}

function createFoldersAndFiles(folderNames) {
  folderNames.forEach(folderName => {
    const folderPath = `string/instance/${folderName}`

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }

    fs.writeFileSync(path.join(folderPath, `${folderName}.js`), '')
  })
}


createFoldersAndFiles(getAllArrayMethods())