require('./at.js')

function testAt() {
  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]
    const index1 = 2
    const expected1 = 3
    const actual1 = arr1.at(index1)
    if (actual1 !== expected1) {
      console.error(`Test case 1 failed: expected ${expected1}, but got ${actual1}`)
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = [1, 2, 3, 4, 5]
    const index2 = 5
    const expected2 = undefined
    const actual2 = arr2.at(index2)
    if (actual2 !== expected2) {
      console.error(`Test case 2 failed: expected ${expected2}, but got ${actual2}`)
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3
    const arr3 = ['a', 'b', 'c']
    const index3 = 1
    const expected3 = 'b'
    const actual3 = arr3.at(index3)
    if (actual3 !== expected3) {
      console.error(`Test case 3 failed: expected ${expected3}, but got ${actual3}`)
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4
    const arr4 = [1, 2, 3, 4, 5]
    const index4 = -1
    const expected4 = undefined
    const actual4 = arr4.at(index4)
    if (actual4 !== expected4) {
      console.error(`Test case 4 failed: expected ${expected4}, but got ${actual4}`)
    } else {
      console.log('Test case 4 passed')
    }
  }

  {//Test case 5
    const arr5 = ['a', 'b', 'c']
    const index5 = 3
    const expected5 = undefined
    const actual5 = arr5.at(index5)
    if (actual5 !== expected5) {
      console.error(`Test case 5 failed: expected ${expected5}, but got ${actual5}`)
    } else {
      console.log('Test case 5 passed')
    }
  }

  {//Test case 6
    const arr6 = [1, 2, 3, 4, 5]
    const index6 = 0
    const expected6 = 1
    const actual6 = arr6.at(index6)
    if (actual6 !== expected6) {
      console.error(`Test case 6 failed: expected ${expected6}, but got ${actual6}`)
    } else {
      console.log('Test case 6 passed')
    }
  }

}

testAt()