require('./pop.js')

function testPop() {
  { // Test case 1
    const arr1 = ['a', 'b', 'c']
    const poppedItem = arr1.pop()
    if (poppedItem !== 'c' || arr1.length !== 2) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = [1, 2, 3]
    const poppedItem = arr2.pop()
    if (poppedItem !== 3 || arr2.length !== 2) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { // Test case 3
    const arr3 = [true, false]
    const poppedItem = arr3.pop()
    if (poppedItem !== false || arr3.length !== 1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { // Test case 4: empty array
    const arr4 = []
    const poppedItem = arr4.pop()
    if (poppedItem !== undefined || arr4.length !== 0) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }
}

testPop()
