require('./codePointAt.js')

function testCodePointAt() {
  {// Test case 1
    const str1 = 'Hello, world!'
    const code1 = str1.codePointAt(1)

    if (code1 !== 101) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = '\uD83D\uDCA9\uD83D\uDC51'
    const code2 = str2.codePointAt(0)

    if (code2 !== 0x1F4A9) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

}

testCodePointAt()