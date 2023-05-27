require('./localeCompare.js')

testLocaleCompare()

function testLocaleCompare() {
  { // Test case 1: normal case
    const str1 = "abc"
    const str2 = "def"
    const actual = str1.localeCompare(str2)
    const expected = -3

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

{ // Test case 2: more than 0
  const str1 = "xyz"
  const str2 = "abc"
  const expected = 23
  const actual = str1.localeCompare(str2)

  if (actual !== expected) {
    console.error(`Test 2, more than 0: failed, expected: ${expected}, but got ${actual}`)
  } else {
    console.log('Test 2, more than 0: passed')
  }
}

  { // Test case 3: equal 0
    const str1 = "foo"
    const str2 = "foo"
    const expected = 0
    const actual = str1.localeCompare(str2)

    if (actual !== expected) {
      console.error(`Test 3, equal 0: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, equal 0: passed')
    }
  }


}
