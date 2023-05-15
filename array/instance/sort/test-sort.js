require('./sort.js')

function testSort() {

  { // Test case 1
    const arr1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const result = arr1.sort()

    if (!arraysEqual(result, [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = ['banana', 'apple', 'orange', 'pear']
    const result = arr2.sort()

    if (!arraysEqual(result, ['apple', 'banana', 'orange', 'pear'])) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { //Test case 3: empty array
    const arr3 = []
    const result = arr3.sort()

    if (!arraysEqual(result, [])) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

testSort()
