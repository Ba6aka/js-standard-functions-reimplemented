require('./push.js')

testPush()

function testPush() {
  const { stringify } = JSON

  { // Test case 1: array of strings
    const arr = ['a', 'b', 'c']
    const expected = 5 
    const actual = arr.push('d', 'e')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, array of strings: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 1, array of strings: passed')
    }
  }

  { // Test case 2: array of numbers
    const arr = [1, 2, 3]
    const expected = 4
    const actual = arr.push(4)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, array of numbers: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 2, array of numbers: passed')
    }
  }

  { // Test case 3: pushed boolean values to empty array
    const arr = []
    const expected = 2  
    const actual = arr.push(true, false)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, pushed boolean values to empty array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 3, pushed boolean values to empty array: passed')
    }
  }

  { // Test case 4: pushing to empty array
    const arr = []
    const expected = 1
    const actual = arr.push('a')

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, pushing to empty array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 4, pushing to empty array: passed')
    }
  }

  { // Test case 5: pushing multiple items to empty array
    const arr = []
    const expected = 3
    const actual = arr.push(1, 2, 3)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, pushing multiple items to empty array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 5, pushing multiple items to empty array: passed')
    }
  }
}


