require('./sort.js')

function testSort() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    const actual = arr.sort()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2:  string array
    const arr = ['banana', 'apple', 'orange', 'pear']
    const expected = ['apple', 'banana', 'orange', 'pear']
    const actual = arr.sort()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, string array: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, string array: passed')
    }
  }

  { //Test case 3: empty array
    const arr = []
    const expected = []
    const actual = arr.sort()

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 3, empty array: failed, epxpected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, empty array: passed')
    }
  }
}

testSort()
