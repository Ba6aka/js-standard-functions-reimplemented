require('./pop.js')

function testPop() {
  const { stringify } = JSON

  { // Test case 1: array of strings
    const arr = ['a', 'b', 'c']
    const expected = 'c'
    const expectedArrayLength = 2
    const actual = arr.pop()
    const actualArrayValue = arr.length

    if ((stringify(actual) !== stringify(expected)) || (stringify(actualArrayValue) !== stringify(expectedArrayLength))) {
      console.error(`Test 1, array of strings failed, expected ${expected} and expected array length ${expectedArrayLength} but got ${actual} and ${actualArrayValue}`)
    } else {
      console.log('Test 1, array of strings: passed')
    }
  }

  { // Test case 2: normal
    const arr = [1, 2, 3]
    const expected = 3
    const expectedArrayLength = 2
    const actual = arr.pop()
    const actualArrayLength = arr.length

    if ((stringify(actual) !== stringify(expected)) || (stringify(actualArrayLength) !== stringify(expectedArrayLength))) {
      console.error(`Test 2, normal case: failed, expected ${expected} and expected array length ${expectedArrayLength} but got ${actual} and ${actualArrayLength}`)
    } else {
      console.log('Test 2 normal case: passed')
    }
  }

  { // Test case 3: array of boolean values
    const arr = [true, false]
    const expected = false
    const expectedArrayLength = 1
    const actual = arr.pop()
    const actualArrayLength = arr.length

    if ((stringify(actual) !== stringify(expected)) || (stringify(actualArrayLength) !== stringify(expectedArrayLength))) {
      console.error(`Test 3, array of boolean values: failed, expected ${expected} and expected array length ${expectedArrayLength} but got ${actual} and ${actualArrayLength}`)
    } else {
      console.log('Test 3, array of boolean: passed')
    }
  }

  { // Test case 4: empty array
    const arr = []
    const expected = undefined
    const expectedArrayLength = 0
    const actual = arr.pop()
    const actualArrayLength = arr.length

    if ((stringify(actual) !== stringify(expected)) || (stringify(actualArrayLength) !== stringify(expectedArrayLength))) {
      console.error(`Test 4, empty array: failed, expected ${expected} and expected array length ${expectedArrayLength} but got ${actual} and ${actualArrayLength}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }
}

testPop()
