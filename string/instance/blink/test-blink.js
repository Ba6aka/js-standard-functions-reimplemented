require('./blink.js')

testBlink()

function testBlink() {
  {// Test case 1: normal case 
    const str = 'hello'
    const expected = '<blink>hello</blink>'
    const actual = str.blink()

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log(`Test 1, normal case: passed`)
    }
  }

  {// Test case 2: empty string
    const str = ' '
    const actual = str.blink()

    if (actual !== expected) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}