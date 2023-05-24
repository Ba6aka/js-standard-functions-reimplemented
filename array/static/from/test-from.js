require('./from.js')

function testFrom() {
  const { stringify } = JSON

  { // Test case 1: array-like object
    const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
    const expected = ['a', 'b', 'c']
    const actual = Array.from(arrayLike)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, array-like object: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 1, array-like object: passed')
    }
  }

  { // Test case 2: iterable object with mapping function
    const iterable = new Set([1, 2, 3])
    const mapFn = (item) => item * 2
    const expected = [2, 4, 6]
    const actual = Array.from(iterable, mapFn)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, iterable object with mapping function: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 2, iterable object with mapping function: passed')
    }
  }

  { // Test case 3: array-like object with "this" binding
    const arrayLike = [1, 2, 3]
    const thisArg = { multiplier: 2 }
    const mapFn = function(item) {
      return item * this.multiplier
    }
    const expected = [2, 4, 6]
    const actual = Array.from(arrayLike, mapFn, thisArg)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, array-like object with "this" binding: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 3, array-like object with "this" binding: passed')
    }
  }

  { // Test case 4: invalid array-like object
    const arrayLike = { name: 'John', age: 30 }
    const expected = []
    const actual = Array.from(arrayLike)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 4, invalid array-like object: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
    } else {
      console.log('Test 4, invalid array-like object: passed')
    }
  }
}

testFrom()