require('./toLocaleString.js')

function testToLocaleString() {
  {// Test case 1
    const arr1 = [1, 2, 3]
    const result = arr1.toLocaleString()

    if (result !== '1,2,3') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }



  {// Test case 2
    const arr2 = ['one', 'two', 'three']
    const result = arr2.toLocaleString()

    if (result !== 'one,two,three') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: empty array
    const arr3 = []
    const result = arr3.toLocaleString()

    if (result !== '') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4: array with null values
    const arr4 = [1, null, 'two', undefined, 3]
    const result = arr4.toLocaleString()

    if (result !== '1,,two,,3') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testToLocaleString()