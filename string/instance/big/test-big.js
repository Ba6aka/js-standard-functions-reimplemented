require('./big.js')

testBig()

function testBig() {
  { // Test case 1: normal case 
    const str = 'Hello'
    const expected = '<big>Hello</big>'
    const actual = str.big()

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty string 
    const str = ''
    const expected = '<big></big>'
    const actual = str.big()

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}