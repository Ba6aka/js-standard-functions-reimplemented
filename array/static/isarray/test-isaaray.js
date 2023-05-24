function testIsArray() {
  { // Test case 1: Array instance
    const arr = [1, 2, 3]
    const expected = true
    const actual = Array.isArray(arr)

    if (actual !== expected) {
      console.error(`Test 1, Array instance: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, Array instance: passed')
    }
  }

  { // Test case 2: Non-array object
    const obj = { a: 1, b: 2, c: 3 }
    const expected = false
    const actual = Array.isArray(obj)

    if (actual !== expected) {
      console.error(`Test 2, Non-array object: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, Non-array object: passed')
    }
  }

  { // Test case 3: String
    const str = 'Hello, World!'
    const expected = false
    const actual = Array.isArray(str)

    if (actual !== expected) {
      console.error(`Test 3, String: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, String: passed')
    }
  }

  { // Test case 4: Number
    const num = 42
    const expected = false
    const actual = Array.isArray(num)

    if (actual !== expected) {
      console.error(`Test 4, Number: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 4, Number: passed')
    }
  }

  { // Test case 5: Null
    const value = null
    const expected = false
    const actual = Array.isArray(value)

    if (actual !== expected) {
      console.error(`Test 5, Null: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 5, Null: passed')
    }
  }
}

testIsArray()