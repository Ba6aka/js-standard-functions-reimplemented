require('./lastIndexOf.js')

function testLastIndexOf() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const index = str.lastIndexOf("o")

    if (index !== 8) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str = ""
    const index = str.lastIndexOf("o", 5)

    if (index !== -1) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: wrong argument
    const str = "Hello, world!"
    const index = str.lastIndexOf("z")
    
    if (index !== -1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testLastIndexOf()