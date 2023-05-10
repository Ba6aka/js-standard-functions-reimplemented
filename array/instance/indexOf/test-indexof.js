require('./indexOf.js')

function testIndexOf() {
  { // Test case 1
    const arr1 = [1, 2, 3, 4, 5]

    if (arr1.indexOf(3) !== 2) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {  // Test case 2
    const arr2 = [1, 2, 3, 4, 5]

    if (arr2.indexOf(6) !== -1) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
  {  // Test case 3
    const arr3 = ['apple', 'banana', 'orange']

    if (arr3.indexOf('banana') !== 1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const arr4 = ['apple', 'banana', 'orange']

    if (arr4.indexOf('grape') !== -1) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  { // Test case 5
    const arr5 = ['apple', 'banana', 'orange', 'banana']

    if (arr5.indexOf('banana') !== 1) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testIndexOf()