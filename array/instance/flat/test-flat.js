require('./flat.js')

function testFlat() {
  {// Test case 1
    const arr1 = [1, [2, 3], [4, [5, 6]]]
    let result = arr1.flat()
    if (result.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = [1, [2, [3, [4, [5]]]]]
    let result = arr2.flat()
    if (result.toString() !== [1, 2, 3, 4, 5].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3: depth
    const arr3 = [1, [2, [3, [4, [5]]]]]
    let result = arr3.flat(2)
    if (result.toString() !== [1, 2, 3, 4, 5].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: empty array
    const arr4 = []
    let result = arr4.flat()
    if (result.toString() !== [].toString()) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {//Test case 5: non-array values
    const arr5 = [1, 2, 'hello', [3, 4], { prop: 'value' }]
    let result = arr5.flat()
    if (result.toString() !== [1, 2, 'hello', 3, 4, { prop: 'value' }].toString()) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }

}

testFlat()