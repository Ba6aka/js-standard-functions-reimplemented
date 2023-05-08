require('./fill.js')

function testFill() {
  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]

    let filledArr = arr1.fill(0)

    if (filledArr.toString() !== [0, 0, 0, 0, 0].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = [1, 2, 3, 4, 5]

    let filledArr = arr2.fill(0, 1, 4)

    if (filledArr.toString() !== [1, 0, 0, 0, 5].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3
    const arr3 = [1, 2, 3, 4, 5]

    let filledArr = arr3.fill(0, 0, -1)

    if (filledArr.toString() !== [0, 0, 0, 0, 5].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4
    const arr4 = [1, 2, 3, 4, 5]

    let filledArr = arr4.fill(0, 1, -2)

    if (filledArr.toString() !== [1, 0, 0, 4, 5].toString()) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {//Test case 5
    const arr5 = []

    let filledArr = arr5.fill(0)
    
    if (filledArr.toString() !== [].toString()) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testFill()