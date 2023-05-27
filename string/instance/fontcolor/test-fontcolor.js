require('./fontcolor.js')

testFontcolor()

function testFontcolor() {
  { // Test case 1: normal case
    const str = "Hello, world!"
    const expected = '<font color="red">Hello, world!</font>'
    const actual = str.fontcolor("red")

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty string
    const str = ""
    const expected = '<font color="blue"></font>'
    const actual = str.fontcolor("blue")

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}