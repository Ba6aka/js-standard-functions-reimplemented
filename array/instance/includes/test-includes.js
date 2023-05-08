require('./includes.js')

function testIncludes() {
  {  // Test case 1
    const arr1 = [1, 2, 3, 4, 5]

    if (arr1.includes(3) !== true) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = ['apple', 'banana', 'orange']

    if (arr2.includes('banana') !== true) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const arr3 = ['apple', 'banana', 'orange']

    if (arr3.includes('kiwi') !== false) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const arr4 = ['apple', 'banana', 'orange']

    if (arr4.includes('banana', 2) !== false) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 5
    const arr5 = ['apple', 'banana', 'orange']

    if (arr5.includes('banana', -1) !== false) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }

}

testIncludes()