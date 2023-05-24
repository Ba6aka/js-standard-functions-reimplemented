require('./values.js')

function testArrayValues() {
  const { stringify } = JSON

  { // Test case 1: array of strings
    const arr = ['a', 'b', 'c']
    const expectedLength = 3
    const values = arr.values()
    const actual = Array.from(values)

    if (actual.length !== expectedLength || stringify(actual) !== stringify(arr)) {
      console.error(`Test 1, array of strings:failed, expected length: ${actual.length},but got length: ${actualLength}, expected array: ${stringify(actual)}, but got array: ${stringify(arr)}`)
    } else {
      console.log('Test 1, array of strings: passed')
    }
  }

  { // Test case 2: array of numbers
    const arr = [1, 2, 3, 4, 5]
    const expectedLength = 5
    const values = arr.values()
    const actual = Array.from(values)

    if (actual.length !== expectedLength || stringify(actual) !== stringify(arr)) {
      console.error(`Test 2, array of numbers: failed, expected length: ${actual.length},but got length: ${actualLength}, expected array: ${stringify(actual)}, but got array: ${stringify(arr)}`)
    } else {
      console.log('Test 2, array of numbers: passed')
    }
  }

  { //Test case 3: empty array
    const arr = []
    const expectedLength = 0
    const values = arr.values()
    const actual = Array.from(values)

    if (actual.length !== expectedLength) {
      console.error(`Test 3, empty array: failded, expected length: ${actual.length},but got length: ${actualLength}`)
    } else {
      console.log('Test 3, empty array: passed')
    }
  }
}

testArrayValues()
