const fs = require('fs')
const path = require('path')

function getAllArrayMethods() {
  let methodsString = ''
  const methods = Object.getOwnPropertyNames(Array.prototype).filter(function (prop) {
    return typeof Array.prototype[prop] === 'function'
  })

  methods.forEach((method) => {
    methodsString += `- .${method}\n`
  })

  return methods
}

function createFoldersAndFiles(folderNames) {
  folderNames.forEach(folderName => {
    const folderPath = `array/instance/${folderName}`

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }

    fs.writeFileSync(path.join(folderPath, `${folderName}.js`), '')
  })
}


createFoldersAndFiles(getAllArrayMethods())