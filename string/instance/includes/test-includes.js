require('./includes.js')

testIncludes()

function testIncludes() {
  { // Test case 1: normal case
    const str = "Hello, world!"
    const expected = true
    const actual = str.includes("world")

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: with start position
    const str = "Hello, world!"
    const expected = true
    const actual = str.includes("world", 7)

    if (actual !== expected) {
      console.error('Test 2, with start position: failed')
    } else {
      console.log('Test 2, with start position: passed')
    }
  }
}
