require('./slice.js')

function testSlice() {
  const { stringify } = JSON

  { // Test case 1: slice with no arguments
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 5]
    const actual = arr.slice()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, slice with no arguments: failed, expected ${stringify(expected)}, but got ${stringify(actual)} `)
    } else {
      console.log('Test 1, slice with no arguments: passed')
    }
  }

  { // Test case 2: slice with start argument
    const arr = [1, 2, 3, 4, 5]
    const expected = [3, 4, 5]
    const actual = arr.slice(2)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, slice with start argument: failed, expected ${stringify(expected)}, but got ${stringify(actual)} `)
    } else {
      console.log('Test 2, slice with start argument: passed')
    }
  }

  { // Test case 3: slice with start and end arguments
    const arr = [1, 2, 3, 4, 5]
    const expected = [2, 3, 4]
    const actual = arr.slice(1, 4)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, slice with start and end arguments: failed, expected ${stringify(expected)}, but got ${stringify(actual)} `)
    } else {
      console.log('Test 3, slice with start and end arguments: passed')
    }
  }

  { // Test case 4: slice with negative start argument
    const arr = [1, 2, 3, 4, 5]
    const expected = [3, 4, 5]
    const actual = arr.slice(-3)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, slice with negative start argument: failed, expected ${stringify(expected)}, but got ${stringify(actual)} `)
    } else {
      console.log('Test 4, slice with negative start argument: passed')
    }
  }

  { // Test case 5: slice with negative end argument
    const arr = [1, 2, 3, 4, 5]
    const expected = [2, 3, 4]
    const actual = arr.slice(1, -1)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, slice with negative end argument: failed, expected ${stringify(expected)}, but got ${stringify(actual)} `)
    } else {
      console.log('Test 5, slice with negative end argument: passed')
    }
  }
}

testSlice()
