require('./fontsize.js')

testFontsize()

function testFontsize() {
  { // Test case 1: normal case
    const str = "Hello, world!"
    const expected = `<font size="4">Hello, world!</font>`
    const actual = str.fontsize(4)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty string
    const str = ""
    const expected = `<font size="2"></font>`
    const actual = str.fontsize(2)

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}