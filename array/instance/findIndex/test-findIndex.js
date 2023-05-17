require('./findIndex.js')

function testFindIndex() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [1, 2, 3, 4, 5]
    const expected = 1
    const actual = arr.findIndex((num) => num % 2 === 0)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case: failed, expected: ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: negative index
    const arr = [1, 3, 5]
    const expected = -1
    const actual = arr.findIndex((num) => num % 2 === 0)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, negative index: failed, expected: ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, negative index: passed')
    }
  }

  { //Test case 3: finding an object
    const arr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Bob' }
    ]
    const expected = 1
    const actual = arr.findIndex((person) => person.name === 'Mary')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, finding an object: failed, expected: ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, finding an object: passed')
    }
  }

  { //Test case 4: empty array
    const arr = []
    const expected = -1
    const actual = arr.findIndex((num) => num > 10)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expected: ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { //Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expert = {
      value: 3,
      check(item) {
        return item === this.value
      }
    }
    const expected = 2
    const actual = arr.findIndex(expert.check, expert)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, thisArg: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 5, thisArg: passed')
    }
  }
}

testFindIndex()
