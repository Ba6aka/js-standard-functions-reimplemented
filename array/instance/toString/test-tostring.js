require('./toString.js')

testToString()

function testToString() {
  const { stringify } = JSON

  { // Test case 1: non-empty array
    const arr = [1, 'hello', true]
    const expected = '1,hello,true'
    const actual = arr.toString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, non-empty array: failed, expected ${stringify(expected)},but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, non-empty array: passed')
    }
  }


  { // Test case 2: empty array
    const arr = []
    const expected = ''
    const actual = arr.toString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, empty array: failed, expected ${stringify(expected)},but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, empty array: passed')
    }
  }

  { // Test case 3: array with undefined values
    const arr = [undefined, 1, 'hello']
    const expected = ',1,hello'
    const actual = arr.toString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, array with undefined values: failed, expected ${stringify(expected)},but got ${stringify(actual)}`)
    }  else {
      console.log('Test 3, array with undefined values: passed')
    }
  }

 
  { // Test case 4: array with null values
    const arr = [null, 1, 'hello']
    const expected = ',1,hello'
    const actual = arr.toString()

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, array with null values: failed, expected ${stringify(expected)},but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, array with null values: passed')
    }
  }
}


