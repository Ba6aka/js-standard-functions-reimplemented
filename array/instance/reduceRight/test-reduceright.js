require('./reduceRight.js')

function testReduceRight() {

  { // Test case 1: normal case
    const arr = [1, 2, 3, 4]
    const expected = 10
    const actual = arr.reduceRight((acc, val) => acc + val)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected ${expected},but got ${actual} `)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: string accumulator
    const arr = ['a', 'b', 'c']
    const expected = 'c2b1a0'
    const actual = arr.reduceRight((acc, val, index) => acc + val + index, '')

    if (actual !== expected) {
      console.error(`Test 2, string accumulator: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test case 2: passed')
    }
  }

  { // Test case 3: with initial value
    const arr = [1, 2, 3, 4]
    const expected = 10
    const actual = arr.reduceRight((acc, val) => acc - val, 20)

    if (actual !== expected) {
      console.error(`Test 3, with initial value: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test 3, with initial value: passed')
    }
  }

  { // Test case 4: empty array 
    const arr = []
    let errorThrown = false
    try {
      arr.reduceRight((acc, val) => acc + val)
    } catch (e) {
      errorThrown = true
      if (e.message !== 'Reduce of empty array with no initial value') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4: passed')
      }
    }
    if (!errorThrown) {
      console.error('Test case 4: failed, exception thrown')
    }
  }

  { // Test case 5: empty array with initial value
    const arr = []
    const expected = 100
    const actual = arr.reduceRight((acc, val) => acc + val, 100)

    if (actual !== expected) {
      console.error(`Test case 5, empty array with initial value: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log('Test case 5, empty array with initial value: passed')
    }
  }
}

testReduceRight()
