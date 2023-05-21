require('./reduce.js')

function testReduce() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = [1, 2, 3]
    const expected = 6
    const actual = arr.reduce((accumulator, currentValue) => accumulator + currentValue)

    if (actual !== expected) {
      console.error(`Test 1, array of numbers: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: inital value
    const arr = [1, 2, 3]
    const expected = 16
    const actual = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10)

    if (actual !== expected) {
      console.error(`Test 2, initial value: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 2, initial value: passed')
    }
  }

  { //Test case 3:  multiply
    const arr = [1, 2, 3]
    const expected = 6
    const actual = arr.reduce((accumulator, currentValue) => accumulator * currentValue)

    if (actual !== expected) {
      console.error(`Test 3, multiply: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 3, multiply: passed')
    }
  }

  { //Test case 4: empty array
    const arr = []
    const expected = 10
    const actual = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10)

    if (actual !== expected) {
      console.error(`Test 4, empty array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 4, empty array: passed')
    }
  }

  { //Test case 5: objects array
    const arr = [{ name: 'John', age: 20 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 40 }]
    const expected = 90
    const actual = arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0)

    if (actual !== expected) {
      console.error(`Test 5, objects array: failed, expected ${expected},but got ${actual}`)
    } else {
      console.log('Test 5, objects array: passed')
    }
  }
}

testReduce()
