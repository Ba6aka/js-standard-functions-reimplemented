require('./concat.js')

testConcat()

function testConcat() {
  const { stringify } = JSON

  { // Test case 1: two arrays
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const expected = [1, 2, 3, 4, 5, 6]
    const actual = arr1.concat(arr2)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 1, two arrays: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, two arrays: passed')
    }
  }

  { // Test case 2: more than two arrays
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = [7, 8, 9]
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const actual = arr1.concat(arr2, arr3)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 2, more than two arrays: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, more than two arrays: passed')
    }
  }

  { // Test case 3: non-array values
    const arr = [1, 2, 3]
    const expected = [1, 2, 3, 4, 5, 6]
    const actual = arr.concat(4, 5, 6)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 3, non-array values: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, non-array values: passed')
    }
  }

  { // Test case 4: empty arguments
    const arr = [1, 2, 3]
    const expected = [1, 2, 3, null, undefined]
    const actual = arr.concat(null, undefined)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 4, empty arguments: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, empty arguments: passed')
    }
  }

  { // Test case 4: mix of arrays and non-array values
    const arr1 = [1, 2, 3]
    const arr2 = [5, 6]
    const expected = [1, 2, 3, 4, null, 5, 6, undefined]
    const actual = arr1.concat(4, null, arr2, undefined)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 4, mix of arrays and non-array values: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, mix of arrays and non-array values: passed')
    }
  }
}
