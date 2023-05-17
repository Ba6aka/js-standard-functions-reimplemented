require('./includes.js')

function testIncludes() {
  const { stringify } = JSON

  {  // Test case 1: array of numbers
    const arr = [1, 2, 3, 4, 5]
    const expected = true
    const actual = arr.includes(3)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, array of numbers: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 1, array of numbers: passed')
    }
  }

  { // Test case 2: array of string
    const arr = ['apple', 'banana', 'orange']
    const expected = true
    const actual = arr.includes('banana')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, array of string: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 2, array of string: passed')
    }
  }

  { // Test case 3: wrong argument
    const arr = ['apple', 'banana', 'orange']
    const expected = false
    const actual = arr.includes('kiwi')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, wrong argument: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 3, wrong argument: passed')
    }
  }

  { // Test case 4: wrong index
    const arr = ['apple', 'banana', 'orange']
    const expected = false
    const actual = arr.includes('banana', 2)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, wrong index: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 4, wrong index: passed')
    }
  }

  { // Test case 5: negative index
    const arr = ['apple', 'banana', 'orange']
    const expected = false
    const actual = arr.includes('banana', -1)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, negative index: failed, expected: ${expected},but got actual: ${actual}`)
    } else {
      console.log('Test 4, negative index: passed')
    }
  }

}

testIncludes()
