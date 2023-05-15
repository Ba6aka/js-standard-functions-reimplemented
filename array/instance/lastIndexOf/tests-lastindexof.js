require('./lastIndexOf.js')

function testLastIndexOf() {

  { // Test case 1
    const arr1 = [1, 2, 3, 4, 5, 4]
    const searchElement1 = 4
    const result1 = arr1.lastIndexOf(searchElement1)

    if (result1 !== 5) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = ['a', 'b', 'c', 'a']
    const searchElement2 = 'a'
    const fromIndex2 = 2
    const result2 = arr2.lastIndexOf(searchElement2, fromIndex2)

    if (result2 !== 0) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { //Test case 3
    const arr3 = ['a', 'b', 'c']
    const searchElement3 = 'd'
    const result3 = arr3.lastIndexOf(searchElement3)

    if (result3 !== -1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { //Test case 4: empty array
    const arr4 = []
    const searchElement4 = 1
    const result4 = arr4.lastIndexOf(searchElement4)

    if (result4 !== -1) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }

  { //Test case 5: numbers array
    const arr5 = [1, 2, 3, 4, 5]
    const searchElement5 = 0
    const fromIndex5 = 2
    const result5 = arr5.lastIndexOf(searchElement5, fromIndex5)

    if (result5 !== -1) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5: passed')
    }
  }
}

testLastIndexOf()
