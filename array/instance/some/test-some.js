require('./some.js')

function testSome() {
  {  // Test case 1
    const arr1 = [1, 2, 3]
    const result1 = arr1.some((elem) => elem > 2)

    if (!result1) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }
  // Test case 2
  const arr2 = [1, 2, 3]
  const result2 = arr2.some((elem) => elem > 3)

  if (result2) {
    console.error('Test case 2 failed')
  } else {
    console.log('Test case 2 passed')
  }

  {  // Test case 3
    const arr3 = [1, 2, 3]
    const result3 = arr3.some((elem) => elem === 2)

    if (!result3) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
  {  // Test case 4: empty array
    const arr4 = []
    const result4 = arr4.some((elem) => elem > 0)
    
    if (result4) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testSome()