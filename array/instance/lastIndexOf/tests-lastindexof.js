require('./lastIndexOf.js')

function testLastIndexOf() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [1, 2, 3, 4, 5, 4]
    const searchItem = 5
    const expected = 4
    const actual = arr.lastIndexOf(searchItem)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: from index
    const arr = ['a', 'b', 'c', 'a']
    const searchItem = 'a'
    const expected = 0
    const fromIndex = 2
    const actual = arr.lastIndexOf(searchItem, fromIndex)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, from index: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 2, from index: passed')
    }
  }

  { //Test case 3: wrong argument
    const arr3 = ['a', 'b', 'c']
    const searchElement = 'd'
    const expected = -1
    const actual = arr3.lastIndexOf(searchElement)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, wrong argument: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 3, wrong argument: passed')
    }
  }

  { //Test case 4: empty array
    const arr = []
    const searchElement = 1
    const expected = -1
    const actual = arr.lastIndexOf(searchElement)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { //Test case 5: numbers array
    const arr = [1, 2, 3, 4, 5]
    const searchElement = 0
    const expected = -1
    const fromIndex = 2
    const actual = arr.lastIndexOf(searchElement, fromIndex)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, numbers array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 5, numbers array: passed')
    }
  }
}

testLastIndexOf()
