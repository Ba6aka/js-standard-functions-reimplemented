require('./toLocaleString.js')

testToLocaleString()

function testToLocaleString() {
  const { stringify } = JSON

  { // Test case 1: array of numbers
    const arr = [1, 2, 3]
    const expected = '1,2,3'
    const actual = arr.toLocaleString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, array of numbers failed: expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, array of numbers: passed')
    }
  }

  { // Test case 2: array of srings
    const arr = ['one', 'two', 'three']
    const expected = 'one,two,three'
    const actual = arr.toLocaleString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, array of strings failed: expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, array of strings: passed')
    }
  }

  { // Test case 3: empty array
    const arr = []
    const expected = ''
    const actual = arr.toLocaleString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, empty array failed: expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, empty array: passed')
    }
  }

  { // Test case 4: array with null values
    const arr = [1, null, 'two', undefined, 3]
    const expected = '1,,two,,3'
    const actual = arr.toLocaleString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, array with null values failed: expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else{
      console.log('Test 4,ararray with null values : passed')
    }
  }
}


