require('./shift.js')

function testShift() {
  {// Test case 1
    const arr1 = ['a', 'b', 'c']
    const result = arr1.shift()

    if (result !== 'a' || arr1.length !== 2 || arr1[0] !== 'b' || arr1[1] !== 'c') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = ['a']
    const result = arr2.shift()

    if (result !== 'a' || arr2.length !== 0) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const arr3 = []
    const result = arr3.shift()

    if (result !== undefined || arr3.length !== 0) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testShift()