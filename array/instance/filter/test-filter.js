require('./filter.js')

testFilter()

function testFilter() {
  const { stringify } = JSON

  { // Test case 1: even case
    const arr = [1, 2, 3, 4, 5]
    const expected = [2, 4]
    const actual = arr.filter((num) => num % 2 === 0)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 1, even case: failed, expected: ${stringify(expected)}, actual: ${stringify(actual)}`)
    } else {
      console.log('Test 1, even case: passed')
    }
  }

  { // Test case 2: odd case
    const arr = [1, 2, 3, 4, 5]
    const expected = [1, 3, 5]
    const actual = arr.filter((num) => num % 2 !== 0)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 2, odd case: failed, expected: ${stringify(expected)}, actual: ${stringify(actual)}`)
    } else {
      console.log('Test 2, odd case: passed')
    }
  }

  { //Test case 3: none passing
    const arr = [1, 2, 3, 4, 5]
    const expected = []
    const actual = arr.filter((num) => num > 10)

    if (stringify(expected) !== stringify(actual)) {
      console.error(`Test 3, none passing: failed, expected: ${stringify(expected)}, actual: ${stringify(actual)}`)
    } else {
      console.log('Test 3, none passing: passed')
    }
  }

  { //Test case 4: wrong argument
    const arr = [1, 2, 3, 4, 5]
    const expected = undefined

    let actual
    try {
      actual = arr.filter()
    } catch (err) {
      if (actual !== expected) {
        console.error(`Test 4, wrong argument: failed, expected: ${expected},but got: ${actual}`)
      } else {
        console.log('Test 4, wrong argument: passed')
      }
    }
  }

  try { //Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expert = {
      values: [1, 2, 3],
      check(item) {
        return this.values.includes(item)
      }
    }

    if (arr.filter(expert.check, expert).toString() !== [1, 2, 3].toString()) {
      console.error(`Test 5, thisArg: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 5, thisArg: passed')
    }
  } catch (err) {
    console.error('Test case 5 throws')
    console.log(err)
  }
}
