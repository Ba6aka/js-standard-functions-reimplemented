require('./lastIndexOf.js')

testLastIndexOf()

function testLastIndexOf() {
  { // Test case 1: standard
    const str = "Hello, world!"
    const expected = 8
    const actual = str.lastIndexOf("o")

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty string
    const str = ""
    const expected = -1
    const actual = str.lastIndexOf("o", 5)

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }

  { // Test case 3: wrong argument
    const str = "Hello, world!"
    const expected = -1
    const actual = str.lastIndexOf("z")

    if (actual !== expected) {
      console.error(`Test 3, wrong argument: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, wrong argument: passed')
    }
  }
}
