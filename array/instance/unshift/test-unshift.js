require('./unshift.js')

function testUnshift() {
  { // Test case 1
    const arr1 = ['a', 'b', 'c']
    const result1 = arr1.unshift('d')

    if (result1 !== 4 || arr1[0] !== 'd' || arr1[1] !== 'a' || arr1[2] !== 'b' || arr1[3] !== 'c') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  { // Test case 2
    const arr2 = []
    const result2 = arr2.unshift('a', 'b', 'c')

    if (result2 !== 3 || arr2[0] !== 'a' || arr2[1] !== 'b' || arr2[2] !== 'c') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  { // Test case 3: adding non-primitive values
    const arr3 = [{ name: 'John' }, { name: 'Jane' }]
    const result3 = arr3.unshift({ name: 'Alice' })

    if (result3 !== 3 || arr3[0].name !== 'Alice' || arr3[1].name !== 'John' || arr3[2].name !== 'Jane') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testUnshift()