require('./map.js')

testMap()

function testMap() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [1, 2, 3]
    const expected = '2,4,6'
    const actual = arr.map(x => x * 2)

    if (actual.toString() !== '2,4,6') {
      console.error(`Test 1, normal case: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: to upper case
    const arr = ['apple', 'banana', 'orange']
    const expected = ['APPLE', 'BANANA', 'ORANGE']
    const actual = arr.map(fruit => fruit.toUpperCase())

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, to upper case: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 2, to upper case: passed')
    }
  }

  { // Test case 3: parse integer
    const arr = ['1', '2', '3']
    const expected = [1, 2, 3]
    const actual = arr.map(str => parseInt(str))

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, parse integer: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 3, parse integer: passed')
    }
  }

  { // Test case 4: empty array
    const arr = []
    const expected = []
    const actual = arr.map(x => x * 2)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, empty array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { // Test case 5: mixed array
    const arr = ['1', 2, '3']
    const expected = [1, 2, 3]
    const actual = arr.map(x => parseInt(x))

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 5, mixed array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 5, mixed array: passed')
    }
  }
}

