require('./bold.js')

testBold()

function testBold() {
  { // Test case 1: normal case
    const str = "hello"
    const expected = "<b>hello</b>"
    const actual = str.bold()

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log(`Test 1, normal case: passed`)
    }
  }

  { // Test case 2: empty string
    const str = ""
    const expected = "<b></b>"
    const actual = str.bold()

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}