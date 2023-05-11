require('./endsWith.js')

function testEndsWith() {
  {// Test case 1: standard
    const str = "Hello, world!"
    
    if (str.endsWith("world!") !== true) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str = ""

    if (str.endsWith("") !== true) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: endPosistion
    const str = "The quick brown fox jumps over the lazy dog"

    if (str.endsWith("quick", 9) !== true) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4: wrong endPosistion
    const str = "The quick brown fox jumps over the lazy dog"
    
    if (str.endsWith("brown", 13) !== false) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testEndsWith()