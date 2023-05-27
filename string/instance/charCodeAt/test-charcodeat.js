require('./charCodeAt.js')

testCharCodeAt()

function testCharCodeAt() {
  { // Test case 1: normal case
    const str = 'ABC'
    const expected = 65
    const actual = str.charCodeAt(0)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed: expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty stirng
    const str = ''
    const expected = NaN
    const actual = str.charCodeAt(1)

    if (actual == expected) {
      console.error(`Test 2, empty string: failed: expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}

