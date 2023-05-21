require('./shift.js')

function testShift() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const expectedOutput = 'a'
    const expectedArr = ['b', 'c']
    const ActualArr = ['a', 'b', 'c']
    const actualOutput = ActualArr.shift()

    if ((stringify(actualOutput) !== stringify(expectedOutput)) || (stringify(ActualArr) !== stringify(expectedArr))) {
      console.error(`Test 1, normal case: failed, expected output ${expectedOutput}, but got actual ${actualOutput}, expected arr ${expectedArr}, but got ${ActualArr}`)
    } else {
      console.log('Tesе 1, normal case: passed')
    }
  }

  { // Test case 2: one item
    const expectedOutput = 'a'
    const expectedArr = []
    const actualArr = ['a']
    const actualOutput = actualArr.shift()

    if ((stringify(actualOutput) !== stringify(expectedOutput)) || (stringify(actualArr) !== stringify(expectedArr))) {
      console.error(`Test 2, one item: failed, expected output ${expectedOutput}, but got actual ${actualOutput}, expected arr ${expectedArr}, but got ${actualArr}`)
    } else {
      console.log('Test 2, one item: passed')
    }
  }

  { // Test case 3: empty array
    const expectedArr = []
    const expectedOutput = undefined
    const actualArray = []
    const actualOutput = actualArray.shift()

    if ((stringify(actualOutput) !== stringify(expectedOutput)) || (stringify(actualArray) !== stringify(expectedArr))) {
      console.error(`Test 3, empty array: failed, expected output ${expectedOutput}, but got actual ${actualOutput}, expected arr ${expectedArr}, but got ${actualArray}`)
    } else {
      console.log('Test 3, empty array: passed')
    }
  }
}

testShift()
