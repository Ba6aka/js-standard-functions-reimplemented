require('./indexOf.js')


function testIndexOf() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [1, 2, 3, 4, 5]
    const expected = 2
    const actual = arr.indexOf(3)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  {  // Test case 2: out range argument
    const arr = [1, 2, 3, 4, 5]
    const expected = -1
    const actual = arr.indexOf(6)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, out range argument: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 2, out range argument: passed')
    }
  }

  {  // Test case 3: array of string
    const arr = ['apple', 'banana', 'orange']
    const expected = 1
    const actual = arr.indexOf('banana')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, array of string: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 3, array of string: passed')
    }
  }

  { // Test case 4: wrong argument
    const arr = ['apple', 'banana', 'orange']
    const expected = -1
    const actual = arr.indexOf('grape')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, wrong argument: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 4, wrong argument: passed')
    }
  }

  { // Test case 5: array of string normal case
    const arr = ['apple', 'banana', 'orange', 'banana']
    const expected = 1
    const actual = arr.indexOf('banana')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test case 5, array of string normal case: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 5, array of string normal case: passed')
    }
  }
}

testIndexOf()
