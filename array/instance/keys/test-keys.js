require('./keys.js')

function testKeys() {
  const { stringify } = JSON

  {  // Test case 1: normal case
    const arr = ['a', 'b', 'c']
    const keys = arr.keys()
    const actual = Array.from(keys)
    const expected = [0, 1, 2]

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty array
    const arr = []
    const keys = arr.keys()
    const actual = Array.from(keys)
    const expected = []

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, empty array failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 2, normal case: passed')
    }
  }

  {  // Test case 3: array of strings
    const arr = ['hello', 'world']
    const keys = arr.keys()
    const actual = Array.from(keys)
    const expected = [0, 1]

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, arrray of strings: failed, expected ${expected},but got ${actual}` )
    } else {
      console.log('Test 3, array of string: passed')
    }
  }

  {  // Test case 4: array with false values
    const arr = [undefined, null, '', 0, false]
    const keys = arr.keys()
    const actual = Array.from(keys)
    const expected = [0, 1, 2, 3, 4]

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, array with false values: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 4, array with false values: passed')
    }
  }

  {  // Test case 5: normal case
    const arr = [1, 2, 3]
    const keys = arr.keys()
    const actual = Array.from(keys)
    const expected = [0, 1, 2]

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5,  normal case failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 5, normal case: passed')
    }
  }
}

testKeys()
