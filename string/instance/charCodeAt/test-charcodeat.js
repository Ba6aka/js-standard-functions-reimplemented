require('./charCodeAt.js')

function testCharCodeAt() {
  {// Test case 1: standard
    const str = 'ABC'
    const expected = 65
    const actual = str.charCodeAt(0)

    if (actual !== expected) {
      console.error(`Test case 1 failed: expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty stirng
    const str = ''
    const expected = NaN
    const actual = str.charCodeAt(1)

    if (actual == expected) {
      console.error(`Test case 2 failed: expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testCharCodeAt()