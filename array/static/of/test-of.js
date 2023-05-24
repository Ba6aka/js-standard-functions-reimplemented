require('./of.js')

function testArrayof() {
  const { stringify } = JSON

  // Test case 1: Array of strings
  const expected1 = ["a", "b", "c"]
  const actual1 = Array.of("a", "b", "c")

  if (stringify(actual1) !== stringify(expected1)) {
    console.error(`Test 1, array of strings: failed, expected ${stringify(expected1)}, but got ${stringify(actual1)}`)
  } else {
    console.log('Test 1, array of strings: passed')
  }

  // Test case 2: Array of numbers
  const expected2 = [1, 2, 3]
  const actual2 = Array.of(1, 2, 3)

  if (stringify(actual2) !== stringify(expected2)) {
    console.error(`Test 2, array of numbers: failed, expected ${stringify(expected2)}, but got ${stringify(actual2)}`)
  } else {
    console.log('Test 2, array of numbers: passed')
  }

  // Test case 3: Array of booleans
  const expected3 = [true, false]
  const actual3 = Array.of(true, false)

  if (stringify(actual3) !== stringify(expected3)) {
    console.error(`Test 3, array of booleans: failed, expected ${stringify(expected3)}, but got ${stringify(actual3)}`)
  } else {
    console.log('Test 3, array of booleans: passed')
  }

  // Test case 4: Array with a single item
  const expected4 = ["single"]
  const actual4 = Array.of("single")

  if (stringify(actual4) !== stringify(expected4)) {
    console.error(`Test 4, array with a single item: failed, expected ${stringify(expected4)}, but got ${stringify(actual4)}`)
  } else {
    console.log('Test 4, array with a single item: passed')
  }

  // Test case 5: Array with multiple items of different types
  const expected5 = [1, "two", true]
  const actual5 = Array.of(1, "two", true)

  if (stringify(actual5) !== stringify(expected5)) {
    console.error(`Test 5, array with multiple items of different types: failed, expected ${stringify(expected5)}, but got ${stringify(actual5)}`)
  } else {
    console.log('Test 5, array with multiple items of different types: passed')
  }
}

testArrayof()