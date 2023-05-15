require('./flatMap.js')

function testFlatMap() {

  { // Test case 1
    const arr1 = [1, 2, 3]
    const mappedValues1 = arr1.flatMap((num) => [num * 2])

    if (mappedValues1.toString() !== [2, 4, 6].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2 
    const arr2 = ['hello', 'world']
    const mappedValues2 = arr2.flatMap((str) => str.split(''))

    if (mappedValues2.toString() !== ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { //Test case 3
    const arr3 = [1, 2, 3]
    const mappedValues3 = arr3.flatMap((num) => [[num, num * 2]])

    if (mappedValues3.toString() !== [[1, 2], [2, 4], [3, 6]].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { //Test case 4: empty array
    const arr4 = []
    const mappedValues4 = arr4.flatMap((num) => [num * 2])

    if (mappedValues4.toString() !== [].toString()) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }

  { //Test case 5: wrong argument
    const arr5 = [1, 2, 3]

    try {
      arr5.flatMap()
    } catch (err) {
      if (err.message !== 'flatMap mapper function is not callable') {
        console.error('Test case 5 failed')
      } else {
        console.log('Test case 5: passed')
      }
    }
  }

  { //Test case 6: thisArg
    const arr6 = [1, 2, 3]
    const expert = {
      multiplyBy: 2,
      mapFunc(num) {
        return num * this.multiplyBy
      }
    }
    const mappedValues6 = arr6.flatMap(expert.mapFunc, expert)
    
    if (mappedValues6.toString() !== [2, 4, 6].toString()) {
      console.error('Test case 6 failed')
    } else {
      console.log('Test case 6: passed')
    }
  }
}

testFlatMap()
