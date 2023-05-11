require('./includes.js')

function testIncludes() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const result = str.includes("world")

    if (result !== true) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: with start position
    const str = "Hello, world!"
    const result = str.includes("world", 7)

    if (result !== true) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testIncludes()