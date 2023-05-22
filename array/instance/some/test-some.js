require('./some.js')

function testSome() {
  { // Test case 1: more then 2
    const arr = [1, 2, 3]
    const expected = true
    const actual = arr.some((item) => item > 2)

    if (actual !== expected) {
      console.error(`Test 1, more then 2: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 1, more then: passed')
    }
  }

  {  // Test case 2: more then 3
    const arr = [1, 2, 3]
    const expected = false
    const actual = arr.some((item) => item > 3)

    if (actual !== expected) {
      console.error(`Test 2, more then 3: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 2, more then 3: passed')
    }
  }

  {  // Test case 3: equal 2
    const arr = [1, 2, 3]
    const expected = true
    const actual = arr.some((elem) => elem === 2)

    if (actual !== expected) {
      console.error(`Test 3, equal 2: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 3, equal 2: passed')
    }
  }

  {  // Test case 4: empty array
    const arr = []
    const expected = false
    const actual = arr.some((elem) => elem > 0)

    if (actual !== expected) {
      console.error(`Test 4, empty array: failed, expected: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }
}

testSome()
