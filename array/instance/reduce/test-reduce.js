require('./reduce.js')

function testReduce() {
  { // Test case 1
    const arr1 = [1, 2, 3]
    const result = arr1.reduce((accumulator, currentValue) => accumulator + currentValue)

    if (result !== 6) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = [1, 2, 3]
    const result = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 10)

    if (result !== 16) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { //Test case 3
    const arr3 = [1, 2, 3]
    const result = arr3.reduce((accumulator, currentValue) => accumulator * currentValue)

    if (result !== 6) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { //Test case 4: empty array
    const arr4 = []
    const result = arr4.reduce((accumulator, currentValue) => accumulator + currentValue, 10)

    if (result !== 10) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4: passed')
    }
  }

  { //Test case 5: objects array
    const arr5 = [{name: 'John', age: 20}, {name: 'Alice', age: 30}, {name: 'Bob', age: 40}]
    const result = arr5.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0)

    if (result !== 90) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5: passed')
    }
  }
}

testReduce()
