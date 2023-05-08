require('./slice.js')

function testSlice() {
  { // Test case 1: slice with no arguments
    const arr1 = [1, 2, 3, 4, 5]
    const result1 = arr1.slice()

    if (JSON.stringify(result1) !== JSON.stringify([1, 2, 3, 4, 5])) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {  // Test case 2: slice with start argument
    const arr2 = [1, 2, 3, 4, 5]
    const result2 = arr2.slice(2)

    if (JSON.stringify(result2) !== JSON.stringify([3, 4, 5])) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {  // Test case 3: slice with start and end arguments
    const arr3 = [1, 2, 3, 4, 5]
    const result3 = arr3.slice(1, 4)

    if (JSON.stringify(result3) !== JSON.stringify([2, 3, 4])) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
  {  // Test case 4: slice with negative start argument
    const arr4 = [1, 2, 3, 4, 5]
    const result4 = arr4.slice(-3)

    if (JSON.stringify(result4) !== JSON.stringify([3, 4, 5])) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 5: slice with negative end argument
    const arr5 = [1, 2, 3, 4, 5]
    const result5 = arr5.slice(1, -1)

    if (JSON.stringify(result5) !== JSON.stringify([2, 3, 4])) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testSlice()