require('./join.js')

function testJoin() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = ['a', 'b', 'c']
    const expected = 'a,b,c'
    const actual = arr.join()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got actual: ${actual} `)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: string without comma
    const arr = ['a', 'b', 'c']
    const expected = 'abc'
    const actual = arr.join('')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, string without comma: failed, expected: ${expected}, but got actual: ${actual} `)
    } else {
      console.log('Test 2, string without comma: passed')
    }
  }

  { //Test case 3: dash argument
    const arr = ['a', 'b', 'c']
    const expected = 'a-b-c'
    const actual = arr.join('-')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, dash argument: failed, expected: ${expected}, but got actual: ${actual} `)
    } else {
      console.log('Test 3, dash argument: passed')
    }
  }

  { //Test case 4: empty array
    const arr = []
    const expected = ''
    const actual = arr.join()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expected: ${expected}, but got actual: ${actual} `)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { //Test case 5: numbers array
    const arr = [1, 2, 3]
    const expected = '1|2|3'
    const actual = arr.join('|')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, numbers array: failed, expected: ${expected}, but got actual: ${actual} `)
    } else {
      console.log('Test 5, numbers array: passed')
    }
  }
}

testJoin()
