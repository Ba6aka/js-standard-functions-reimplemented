require('./keys.js')

function testKeys() {
  // Test case 1
  const arr1 = ['a', 'b', 'c']
  const keys1 = arr1.keys()
  const result1 = Array.from(keys1)
  const expected1 = [0, 1, 2]

  if (!arraysEqual(result1, expected1)) {
    console.error('Test case 1 failed')
  } else {
    console.log('Test case 1: passed')
  }

  // Test case 2
  const arr2 = []
  const keys2 = arr2.keys()
  const result2 = Array.from(keys2)
  const expected2 = []

  if (!arraysEqual(result2, expected2)) {
    console.error('Test case 2 failed')
  } else {
    console.log('Test case 2: passed')
  }

  // Test case 3
  const arr3 = ['hello', 'world']
  const keys3 = arr3.keys()
  const result3 = Array.from(keys3)
  const expected3 = [0, 1]

  if (!arraysEqual(result3, expected3)) {
    console.error('Test case 3 failed')
  } else {
    console.log('Test case 3: passed')
  }

  // Test case 4
  const arr4 = [undefined, null, '', 0, false]
  const keys4 = arr4.keys()
  const result4 = Array.from(keys4)
  const expected4 = [0, 1, 2, 3, 4]

  if (!arraysEqual(result4, expected4)) {
    console.error('Test case 4 failed')
  } else {
    console.log('Test case 4: passed')
  }

  // Test case 5
  const arr5 = [1, 2, 3]
  const keys5 = arr5.keys()
  const result5 = Array.from(keys5)
  const expected5 = [0, 1, 2]

  if (!arraysEqual(result5, expected5)) {
    console.error('Test case 5 failed')
  } else {
    console.log('Test case 5: passed')
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

testKeys()
