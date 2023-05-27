require('./fill.js')

testFill()

function testFill() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [1, 2, 3, 4, 5]
    const expected = [0, 0, 0, 0, 0]
    const actual = arr.fill(0)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, normal case passed')
    }
  }

  { // Test case 2: start and end index
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 0, 0, 0, 5]
    const actual = arr.fill(0, 1, 4)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, start and end index: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, start and end index: passed')
    }
  }

  { //Test case 3: negative end index
    const arr = [1, 2, 3, 4, 5]
    const expected = [0, 0, 0, 0, 5]
    const actual = arr.fill(0, 0, -1)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 3, negative end index: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, negative end index: passed')
    }
  }

  { //Test case 4: negative end index
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 0, 0, 4, 5]
    const actual = arr.fill(0, 1, -2)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 4, negative end index: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, negative end index: passed')
    }
  }

  { //Test case 5: empty array
    const arr5 = []
    const expected = []
    const actual = arr5.fill(0)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 5, empty array: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 5, empty array: passed')
    }
  }
}

