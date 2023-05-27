require('./copyWithin.js')

testCopyWithin()

function testCopyWithin() {
  const { stringify } = JSON

  { // Test case 1: negative argument
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 1]
    const actual = arr.copyWithin(-1)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, negative argument: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, negative argument: passed')
    }
  }

  { // Test case 2: two argument
    const arr = [1, 2, 3, 4, 5]
    const expected = [4, 5, 3, 4, 5]
    const actual = arr.copyWithin(0, 3)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, two argument: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    }
    else {
      console.log('Test 2, two argument: passed')
    }
  }

  { // Test case 3: three argument
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 4, 3, 4, 5]
    const actual = arr.copyWithin(1, 3, 4)

    if (stringify(actual) !== stringify(expected)) {
      console.log(`Test 3, three argument: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, three argument: passed')
    }
  }

  { // Test case 4:  three argument with 0
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 2, 1, 2, 5]
    const actual = arr.copyWithin(2, 0, 2)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, three arrays: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    }
    else {
      console.log('Test 4, three argument with 0: passed')
    }
  }
}


