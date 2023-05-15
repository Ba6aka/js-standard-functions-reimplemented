require('./every.js')

function testEvery() {
  const { stringify } = JSON

  { // Test case 1: even case
    const arr = [2, 4, 6, 8, 10]
    const expected = true
    const actual = arr.every((num) => num % 2 === 0)

    if (!actual) {
      console.error(`Test 2, even case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log(`Test 2, even case: passed,`)
    }
  }

  { // Test case 2: odd case
    const arr = [1, 3, 5, 7, 9]
    const expected = true
    const actual = arr.every((num) => num % 2 !== 0)

    if (actual !== expected) {
      console.error(`Test 2, odd case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test , odd case: passed')
    }
  }

  { // Test case 3: even reverse case
    const arr = [2, 4, 5, 6, 8]
    const expected = false
    const actual = arr.every((num) => num % 2 === 0)

    if (!expected === actual) {
      console.error(`Test 3, even reverse case: failed, expected: ${!expected}, but got ${actual}`)
    } else {
      console.log('Test 3, even reverse case: passed')
    }
  }

  { // Test case 4: wrong argument
    const arr = [1, 2, 3, 4, 5]
    const expected = undefined

    let actual

    try {
      actual = arr.every()
    } catch (err) {
      if (stringify(actual) !== stringify(expected)) {
        console.error(`Test 4, wrong argumet: failed, expected: ${expected}, but got ${actual}`)
      } else {
        console.log('Test 4, wrong argument: passed')
      }
    }
  }
}

testEvery()
