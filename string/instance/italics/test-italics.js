require('./italics.js')

testItalics()

function testItalics() {
  { // Test case 1: normal case
    const str = "This is a test"
    const expected = '<i>This is a test</i>'
    const actual = str.italics()

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: string with other tag
    const str = "<b>This is bold text</b>"
    const expected = '<i><b>This is bold text</b></i>'
    const actual = str.italics()

    if (actual !== expected) {
      console.error(`Test 2, string with other tag: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, string with other tag:  passed')
    }
  }

  { // Test case 3: empty string
    const str = ""
    const expected = '<i></i>'
    const actual = str.italics()

    if (actual !== expected) {
      console.error(`Test 3, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, empty string: passed')
    }
  }
}
