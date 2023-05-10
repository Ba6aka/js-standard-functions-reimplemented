const fs = require('fs')
const path = require('path')
const rootDir = path.join(__dirname, '..')

readFilesRecursively(rootDir, refactorFile)

function readFilesRecursively(dir, callback) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
      readFilesRecursively(filePath, callback)
    } else {
      const content = fs.readFileSync(filePath, 'utf8')
      callback(filePath, content)
    }
  })
}

function refactorFile(filePath, content){
  const a =  typeof filePath
  const b = filePath.includes('git')
  if (b == false){
    const lines = content.split('\n')
    const newContent = lines.map(line => line.replace(/;\s*$/, '')).join('\n')
  
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent)
      console.log(`Removed trailing semicolons from: ${filePath}`)
    }
  }
 
}

