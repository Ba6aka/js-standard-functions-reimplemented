function testArrayValues() {
  { // Test case 1
    const arr1 = ['a', 'b', 'c']
    const values1 = arr1.values()
    const result1 = Array.from(values1)

    if (result1.length !== 3 || result1[0] !== 'a' || result1[1] !== 'b' || result1[2] !== 'c') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = [1, 2, 3, 4, 5]
    const values2 = arr2.values()
    const result2 = Array.from(values2)

    if (result2.length !== 5 || result2[0] !== 1 || result2[1] !== 2 || result2[2] !== 3 || result2[3] !== 4 || result2[4] !== 5) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { //Test case 3: empty array
    const arr3 = []
    const values3 = arr3.values()
    const result3 = Array.from(values3)

    if (result3.length !== 0) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }
}

testArrayValues()
