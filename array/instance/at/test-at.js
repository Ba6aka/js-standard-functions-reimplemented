require('./at.js')

function testAt() {
  const { stringify } = JSON

  {// Test case 1: normal case
    const arr = [1, 2, 3, 4, 5]
    const index = 2
    const expected = 3
    const actual = arr.at(index)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  {// Test case 2: index out of range
    const arr = [1, 2, 3, 4, 5]
    const index = 5
    const expected = undefined
    const actual = arr.at(index)

    if (actual !== expected) {
      console.error(`Test 2, index out of range: failed expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, index out of range: passed')
    }
  }

  {//Test case 3: array of strings
    const arr = ['a', 'b', 'c']
    const index = 1
    const expected = 'b'
    const actual = arr.at(index)

    if (actual !== expected) {
      console.error(`Test 3, array of strings failed: expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, array of strings: passed')
    }
  }

  {//Test case 4: negative index
    const arr = [1, 2, 3, 4, 5]
    const index = -1
    const expected = undefined
    const actual = arr.at(index)

    if (actual !== expected) {
      console.error(`Test 4, negative index: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 4, negative index: passed')
    }
  }

  {//Test case 5: index out of range
    const arr = ['a', 'b', 'c']
    const index = 3
    const expected = undefined
    const actual = arr.at(index)

    if (actual !== expected) {
      console.error(`Test 5, index out of range: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 5, index out of range: passed')
    }
  }

  {//Test case 6: zero index
    const arr = [1, 2, 3, 4, 5]
    const index = 0
    const expected = 1
    const actual = arr.at(index)

    if (actual !== expected) {
      console.error(`Test 6, zero index: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 6, zero index: passed')
    }
  }

}

testAt()