function testSplice() {
  {    // Test case 1
    const arr1 = [1, 2, 3, 4, 5]
    const deleted1 = arr1.splice(2, 2, 'a', 'b')

    if (JSON.stringify(arr1) !== JSON.stringify([1, 2, 'a', 'b', 5]) || JSON.stringify(deleted1) !== JSON.stringify([3, 4])) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = ['a', 'b', 'c']
    const deleted2 = arr2.splice(0, 1)
    
    if (JSON.stringify(arr2) !== JSON.stringify(['b', 'c']) || JSON.stringify(deleted2) !== JSON.stringify(['a'])) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { // Test case 3
    const arr3 = ['a', 'b', 'c']
    const deleted3 = arr3.splice(1, 0, 'x', 'y')

    if (JSON.stringify(arr3) !== JSON.stringify(['a', 'x', 'y', 'b', 'c']) || JSON.stringify(deleted3) !== JSON.stringify([])) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { // Test case 4: empty array
    const arr4 = []
    const deleted4 = arr4.splice(0, 0, 'a', 'b', 'c')

    if (JSON.stringify(arr4) !== JSON.stringify(['a', 'b', 'c']) || JSON.stringify(deleted4) !== JSON.stringify([])) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }
  { // Test case 5: negative start index
    const arr5 = ['a', 'b', 'c', 'd']
    const deleted5 = arr5.splice(-2, 2, 'x', 'y')

    if (JSON.stringify(arr5) !== JSON.stringify(['a', 'b', 'x', 'y']) || JSON.stringify(deleted5) !== JSON.stringify(['c', 'd'])) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5: passed')
    }
  }
}

testSplice()
