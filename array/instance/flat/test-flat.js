require('./flat.js')

testFlat()

function testFlat() {
  const { stringify } = JSON

  { // Test case 1: two lvl of nested
    const arr = [1, [2, 3], [4, [5, 6]]]
    const expected = [1, 2, 3, 4, 5, 6]
    const actual = arr.flat(2)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, three lvl of nested: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 1, three lvl of nested: passed')
    }
  }

  { // Test case 2: four lvl of nested
    const arr = [1, [2, [3, [4, [5]]]]]
    const expected = [1, 2, 3, 4, 5]
    const actual = arr.flat(4)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, five lvl of nested: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 2, five lvl of nested: passed')
    }
  }

  { //Test case 3: depth
    const arr = [1, [2, [3, [4, [5]]]]]
    const expected = [1, 2, 3, 4, 5]
    const actual = arr.flat(4)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, depth: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 3, depth: passed')
    }
  }

  { //Test case 4: empty array
    const arr = []
    const expected = []
    const actual = arr.flat()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { //Test case 5: non-array values
    const arr = [1, 2, 'hello', [3, 4], { prop: 'value' }]
    const expected = [1, 2, 'hello', 3, 4, { prop: 'value' }]
    const actual = arr.flat()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, non-array values: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 5, non-array values: passed')
    }
  }
}


