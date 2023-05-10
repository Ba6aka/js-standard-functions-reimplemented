require('./push.js')

function testPush() {
  {// Test case 1
    const arr1 = ['a', 'b', 'c']
    const newLength = arr1.push('d', 'e')
    if (newLength !== 5 || arr1[3] !== 'd' || arr1[4] !== 'e') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = [1, 2, 3]
    const newLength = arr2.push(4)
    if (newLength !== 4 || arr2[3] !== 4) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const arr3 = []
    const newLength = arr3.push(true, false)
    if (newLength !== 2 || arr3[0] !== true || arr3[1] !== false) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4: pushing to empty array
    const arr4 = []
    const newLength = arr4.push('a')
    if (newLength !== 1 || arr4[0] !== 'a') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 5: pushing multiple items to empty array
    const arr5 = []
    const newLength = arr5.push(1, 2, 3)
    if (newLength !== 3 || arr5[0] !== 1 || arr5[1] !== 2 || arr5[2] !== 3) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testPush()