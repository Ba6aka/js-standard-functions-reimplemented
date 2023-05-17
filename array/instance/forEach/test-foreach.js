require('./forEach.js')

function testForEach() {
  const { stringify } = JSON

  { // Test case 1: array of numbers
    const arr = [1, 2, 3, 4, 5]
    const expected = 15

    let actual = 0

    arr.forEach((num) => {
      actual += num
    })
    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, array of numbers: failed, expeted: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 1, array of numbers: passed')
    }
  }

  { // Test case 2: array of strings
    const arr = ['foo', 'bar', 'baz']
    const expeted = 'foo,bar,baz'

    let actual = ''

    arr.forEach((str, index) => {
      actual += `${str}${index === arr.length - 1 ? '' : ','}`
    })

    if (stringify(actual) !== stringify(expeted)) {
      console.error(`Test 2, array of strings: failed, expeted: ${expeted}, but got actual: ${actual}`)
    } else {
      console.log('Test 2, array of strings: passed')
    }
  }

  { //Test case 3: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expected = 15
    const obj = {
      sum: 0,
      add(num) {
        this.sum += num
      }
    }
    arr.forEach(obj.add, obj)

    const actual = obj.sum


    if (stringify(actual) !== stringify(actual)) {
      console.error(`Test 3, thisArg: failed, expeted: ${expected}, but got actual: ${actual}`)
    } else {
      console.log('Test 3, thisArg: passed')
    }
  }

  { //Test case 4: wrong argument
    const arr = [1, 2, 3, 4, 5]
    const expected = 'undefined is not a function'

    let actual

    try {
      arr.forEach()
    } catch (err) {
      actual = err.message

      if (stringify(actual) !== stringify(expected)) {
        console.error(`Test 4, wrong argument: failed, expeted: ${expected}, but got actual: ${actual}`)
      } else {
        console.log('Test 4, wrong argument: passed')
      }
    }
  }
}

testForEach()
