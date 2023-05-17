require('./flatMap.js')

function testFlatMap() {
  const { stringify } = JSON

  { // Test case 1: array of numbers
    const arr = [1, 2, 3]
    const expected = [2, 4, 6]
    const actual = arr.flatMap((num) => [num * 2])

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, array of numbers: failed, expexted: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 1, array of numbers: passed')
    }
  }

  { // Test case 2 : array of strings
    const arr = ['hello', 'world']
    const expected = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
    const actual = arr.flatMap((str) => str.split(''))

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, array of strings: failed, expexted: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 2, array of strings: passed')
    }
  }

  { //Test case 3: nested array
    const arr = [1, 2, 3]
    const expected = [[1, 2], [2, 4], [3, 6]]
    const actual = arr.flatMap((num) => [[num, num * 2]])

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, nested array: failed, expexted: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 3, nested array: passed')
    }
  }

  { //Test case 4: empty array
    const arr = []
    const expected = []
    const actual = arr.flatMap((num) => [num * 2])

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expexted: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { //Test case 5: wrong argument
    const arr = [1, 2, 3]
    const expected = 'flatMap mapper function is not callable'

    let actual

    try {
      arr.flatMap()
    } catch (err) {
      actual = err.message

      if (stringify(actual) !== stringify(expected)) {
        console.error(`Test 5, wrong argument: failed, expected: ${expected}, but got actual: ${actual}`)
      } else {
        console.log('Test 5, wrong argument: passed')
      }
    }
  }

  { //Test case 6: thisArg
    const arr = [1, 2, 3]
    const expert = {
      multiplyBy: 2,
      mapFunc(num) {
        return num * this.multiplyBy
      }
    }
    const expected = [2, 4, 6]
    const actual = arr.flatMap(expert.mapFunc, expert)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 6, thisArg: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 6, thisArg: passed')
    }
  }
}

testFlatMap()
