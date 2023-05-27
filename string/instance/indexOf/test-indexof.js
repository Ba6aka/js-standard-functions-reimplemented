require('./indexOf.js')

testIndexOf()

function testIndexOf() {
  { // Test case 1: normal case
    const str = "Hello, world!"
    const expected = 7
    const actual = str.indexOf("world")

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: wrong start position
    const str = "Hello, world!"
    const expected = -1
    const actual = str.indexOf("world", 8)

    if (actual !== expected) {
      console.error(`Test 2, wrong start position: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, wrong start position: passed')
    }
  }

  { // Test case 3: wrong argument
    const str = "Hello, world!"
    const expected = -1
    const actual = str.indexOf("foo")

    if (actual !== expected) {
      console.error(`Test 3, wrong argument: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, wrong argument: passed')
    }
  }
}
