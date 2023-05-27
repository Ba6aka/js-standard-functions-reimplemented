require('./concat.js')

testConcat()

function testConcat() {
  { // Test case 1: normal case
    const str1 = "Hello, "
    const str2 = "world!"
    const expected = "Hello, world!"
    const actual = str1.concat(str2)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: three strings
    const str1 = "foo"
    const str2 = "bar"
    const str3 = "baz"
    const expected = "foobarbaz"
    const actual = str1.concat(str2, str3)

    if (actual !== expected) {
      console.error(`Test 2, three strings: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, three strings: passed')
    }
  }

  { // Test case 3: empty string
    const str1 = ""
    const str2 = "Hello, world!"
    const expected = "Hello, world!"
    const actual = str1.concat(str2)

    if (actual !== expected) {
      console.error(`Test 3, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, empty string: passed')
    }
  }

}

