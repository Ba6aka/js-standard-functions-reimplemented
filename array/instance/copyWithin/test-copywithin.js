require('./copyWithin.js')
function testCopyWithin() {

  { // Test case 1
    const arr1 = [1, 2, 3, 4, 5]
    let result = arr1.copyWithin(-1)
    if (result.toString() !== [1, 2, 3, 4, 1].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = [1, 2, 3, 4, 5]
    let result = arr2.copyWithin(0, 3)
    if (result.toString() !== [4, 5, 3, 4, 5].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { // Test case 3
    const arr3 = [1, 2, 3, 4, 5]
    let result = arr3.copyWithin(1, 3, 4)
    if (result.toString() !== [1, 4, 3, 4, 5].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { // Test case 4
    const arr5 = [1, 2, 3, 4, 5]
    let result = arr5.copyWithin(2, 0, 2)
    if (result.toString() !== [1, 2, 1, 2, 5].toString()) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }

}

testCopyWithin()
