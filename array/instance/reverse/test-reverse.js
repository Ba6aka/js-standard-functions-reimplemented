function testReverse() {
  const { stringify } = JSON

  { // Test case 1: number case
    const arr = [1, 2, 3]
    const expected = [3, 2, 1]
    const actual = arr.reverse()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, number case: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, number case: passed')
    }
  }

  { // Test case 2: string case
    const arr = ["a", "b", "c", "d"]
    const expected = ["d", "c", "b", "a"]
    const actual = arr.reverse()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, string case: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, string case: passed')
    }
  }

  { // Test case 3: one element case
    const arr = [1]
    const expected = [1]
    const actual = arr.reverse()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, one element case: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, one element case: passed')
    }
  }

  { // Test case 4: empty array
    const arr = []
    const expected = []
    const actual = arr.reverse()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }
}

testReverse()
