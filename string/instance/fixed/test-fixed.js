require('./fixed.js')

function testFixed() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const strFixed = str.fixed()

    if (strFixed !== "<tt>Hello, world!</tt>") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 3: empty string
    const str = "   "
    const strFixed = str.fixed()

    if (strFixed !== "<tt>   </tt>") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testFixed()