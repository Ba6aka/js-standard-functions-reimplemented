function testSplice() {
  const { stringify } = JSON

  { // Test case 1: splice 2 item from 2 index
    const arr = [1, 2, 3, 4, 5]
    const expected = [3, 4]
    const actual = arr.splice(2, 2, 'a', 'b')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1,splice 2 item from 2 index: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, splice 2 item from 2 index: passed')
    }
  }

  { // Test case 2: splice 1 item from 0 index
    const arr = ['a', 'b', 'c']
    const expected = ['a']
    const actual = arr.splice(0, 1)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, splice 1 item from 0 index: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, splice 1 item from 0 index: passed')
    }
  }

  { // Test case 3, splice 0 item from 1 index
    const arr = ['a', 'b', 'c']
    const expected = ['a', 'x', 'y', 'b', 'c']
    const actual = arr.splice(1, 0, 'x', 'y')

    if (stringify(arr) !== stringify(expected)) {
      console.error(`Test 3, splice 0 item from 1 index: failed, expected ${stringify(expected)}, but got ${stringify(arr)}`)
    } else {
      console.log('Test 3, splice 0 item from 1 index: passed')
    }
  }

  { // Test case 4: empty array
    const arr = []
    const expected = []
    const actual = arr.splice(0, 0, 'a', 'b', 'c')

    if (stringify(actual) !== stringify(expected)){
      console.error(`Test 4, empty array: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    }
     else {
      console.log('Test 4, empty array: passed')
    }
  }

  { // Test case 5: negative start index
    const arr = ['a', 'b', 'c', 'd']
    const expected = ['c', 'd']
    const actual = arr.splice(-2, 2, 'x', 'y')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, negative start index:tive start index: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 5, negative start index: passed')
    }
  }
}

testSplice()
