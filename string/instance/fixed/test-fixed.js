require('./fixed.js')

testFixed()

function testFixed() {
  { // Test case 1: standard
    const str = "Hello, world!"
    const expected = "<tt>Hello, world!</tt>"
    const actual = str.fixed()

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 3: empty string
    const str = "   "
    const expected = "<tt>   </tt>"
    const actual = str.fixed()

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}

