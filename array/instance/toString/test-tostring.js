require('./toString.js')

function testToString() {
  // Test case 1: non-empty array
  {
    const arr1 = [1, 'hello', true]
    const result = arr1.toString()

    if (result !== '1,hello,true') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  // Test case 2: empty array
  {
    const arr2 = []
    const result = arr2.toString()

    if (result !== '') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  // Test case 3: array with undefined values
  {
    const arr3 = [undefined, 1, 'hello']
    const result = arr3.toString()

    if (result !== ',1,hello') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  // Test case 4: array with null values
  {
    const arr4 = [null, 1, 'hello']
    const result = arr4.toString()
    
    if (result !== ',1,hello') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }
}

testToString()
