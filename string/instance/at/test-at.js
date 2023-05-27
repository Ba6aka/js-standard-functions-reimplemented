require('./at.js')

testAt()

function testAt() {
  { // Test case 1: normal case
    const str = 'hello'
    const expected = 'e'
    const actual = str.at(1)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2:out range index
    const str = 'test'
    const expected = undefined
    const actual = str.at(10)

    if (actual !== expected) {
      console.error(`Test 2, out range index: failed, expected: ${expected}, but got ${actual}`)
    }  {
      console.log['Test 2, out range index: passed']
    }
  }

  { // Test case 3: negative index
    const str = 'hello'
    const expected = 'l'
    const actual = str.at(-2)

    if (actual !== expected) {
      console.error(`Test 3, negative index: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, negative index:  passed')
    }
  }

  { // Test case 4: fractional index
    const str = 'world'
    const expected = 'd'
    const actual = str.at(4.5)

    if (actual !== expected) {
      console.error('Test 4, fractional index: failed')
    } else {
      console.log('Teste 4, fractional index: passed')
    }
  }
}

