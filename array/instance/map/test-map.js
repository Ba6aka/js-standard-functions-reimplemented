require('./map.js')

function testMap() {

  { // Test case 1
    const arr1 = [1, 2, 3]
    const result = arr1.map(x => x * 2)

    if (result.toString() !== '2,4,6') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = ['apple', 'banana', 'orange']
    const result = arr2.map(fruit => fruit.toUpperCase())

    if (result.toString() !== 'APPLE,BANANA,ORANGE') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { // Test case 3
    const arr3 = ['1', '2', '3']
    const result = arr3.map(str => parseInt(str))

    if (result.toString() !== '1,2,3') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { // Test case 4: empty array
    const arr4 = []
    const result = arr4.map(x => x * 2)

    if (result.toString() !== '') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }

  { // Test case 5: mixed array
    const arr5 = ['1', 2, '3']
    const result = arr5.map(x => parseInt(x))

    if (result.toString() !== '1,2,3') {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5: passed')
    }
  }
}

testMap()
