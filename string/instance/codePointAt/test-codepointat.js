require('./codePointAt.js')

function testCodePointAt() {
  {// Test case 1: standard
    const str = 'Hello, world!'
    const code = str.codePointAt(1)

    if (code !== 101) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: Unicode 
    const str = '\uD83D\uDCA9\uD83D\uDC51'
    const code = str.codePointAt(0)

    if (code !== 0x1F4A9) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testCodePointAt()