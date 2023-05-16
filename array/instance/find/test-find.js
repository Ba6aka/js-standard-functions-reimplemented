require('./find.js')

function testFind() {
  const { stringify } = JSON

  { // Test case 1: find number
    const arr = [1, 2, 3, 4, 5]
    const expected = 3
    const actual = arr.find((num) => num === 3)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 1, find number: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, find number: passed')
    }
  }

  { // Test case 2 : find letter
    const arr = ['apple', 'banana', 'orange']
    const expected = 'banana'
    const actual = arr.find((fruit) => fruit.startsWith('b'))

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 2, find letter: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, find letter: passed')
    }
  }

  { //Test case 3: none passing
    const arr = [1, 2, 3, 4, 5]
    const expected = undefined
    const actual = arr.find((num) => num > 10)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 3, none passing: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, none passing: passed')
    }
  }

  { //Test case 4: wrong argument
    const arr = [1, 2, 3, 4, 5]
    const expected = undefined

    let actual
    try {
      actual = arr.find()
    } catch (err) {
      if (stringify(actual) !== stringify(expected)) {
        console.error(`Test 4, wrong argument: failed, expected ${expected}, bu got ${actual}`)
      } else {
        console.log('Test 4, wrong argument: passed')
      }
    }
  }

  { //Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expected = 3
    const expert = {
      values: [3, 4, 5],
      check(item) {
        return this.values.includes(item)
      }
    }

    const actual = arr.find(expert.check, expert)
    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, thisArg: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 5, thisArg: passed')
    }
  }
}

testFind()
