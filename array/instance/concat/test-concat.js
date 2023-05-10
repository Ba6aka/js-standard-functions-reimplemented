require('./test-concat.js')

function testConcat() {
  {// Test case 1
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = arr1.concat(arr2)

    if (arr3.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr4 = [1, 2, 3]
    const arr5 = [4, 5, 6]
    const arr6 = [7, 8, 9]
    const arr7 = arr4.concat(arr5, arr6)

    if (arr7.toString() !== [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const arr8 = [1, 2, 3]
    const arr9 = arr8.concat(4, 5, 6)

    if (arr9.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const arr10 = [1, 2, 3]
    const arr11 = arr10.concat([4, 5, 6])

    if (arr11.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 5
    const arr12 = [1, 2, 3]
    const arr13 = arr12.concat(4, [5, 6])

    if (arr13.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
  
}

testConcat()