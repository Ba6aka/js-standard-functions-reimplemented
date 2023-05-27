require('./findLastIndex.js')

testFindLastIndex()

function testFindLastIndex() {
  const { stringify } = JSON

  { // Test case 1: even case
    const arr = [1, 2, 3, 4, 5]
    const expected = 4
    const actual = arr.findLast((num) => num % 2 === 0)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, even case: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, even case: passed')
    }
  }

  { // Test case 2 
    const arr = [1, 2, 3, 4, 5]
    const expected = 5
    const actual = arr.findLast((num) => num % 2 !== 0)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, odd case: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, odd case: passed')
    }
  }

  { //Test case 3: none passing
    const arr = [1, 2, 3, 4, 5]
    const expected = undefined
    const actual = arr.findLast((num) => num > 10)

    if (stringify(actual) !== stringify(expected)) {
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
      actual = arr.findLast()
    } catch (err) {
      if (stringify(actual) !== stringify(expected)) {
        console.error(`Test 4, wrong arument: failed, expected ${expected}, but got ${actual}`)
      } else {
        console.log('Test 4, wrong argument: passed')
      }
    }
  }

  { //Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expert = {
      values: [1, 2, 3],
      check(item) {
        return this.values.includes(item)
      }
    }

    const expected = 3
    const actual = arr.findLast(expert.check, expert)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, thisArg: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 5, thisArg: passed')
    }
  }
}
