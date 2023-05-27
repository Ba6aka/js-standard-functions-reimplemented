require('./codePointAt.js')

testCodePointAt()

function testCodePointAt() {
  { // Test case 1: normal case
    const str = 'Hello, world!'
    const expected = 101
    const actual = str.codePointAt(1)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: Unicode 
    const str = '\uD83D\uDCA9\uD83D\uDC51'
    const expected = 0x1F4A9
    const actual = str.codePointAt(0)

    if (actual !== expected) {
      console.error(`Test 2, Unicode: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, Unicode: passed')
    }
  }
}