require('./endsWith.js')

testEndsWith()

function testEndsWith() {
  { // Test case 1: normal case
    const str = "Hello, world!"
    const expected = true
    const actual = str.endsWith("world!")

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty string
    const str = ""
    const expected = true
    const actual = str.endsWith("")

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }

  { // Test case 3: endPosistion
    const str = "The quick brown fox jumps over the lazy dog"
    const expected = true
    const actual = str.endsWith("quick", 9)

    if (actual !== expected) {
      console.error(`Test 3, endPosistion: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, endPosistion: passed')
    }
  }

  { // Test case 4: wrong endPosistion
    const str = "The quick brown fox jumps over the lazy dog"
    const expected = false
    const actual = str.endsWith("brown", 13)
    
    if (actual !== expected) {
      console.error(`Test 4, wrong endPosistion: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 4, wrong endPosistion: passed')
    }
  }
}
