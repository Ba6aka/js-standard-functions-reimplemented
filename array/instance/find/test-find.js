require('./find.js')

function testFind() {
  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]
    const found = arr1.find((num) => num === 3)
    if (found !== 3) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2 
    const arr2 = ['apple', 'banana', 'orange']
    const found = arr2.find((fruit) => fruit.startsWith('b'))
    if (found !== 'banana') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3: none passing
    const arr3 = [1, 2, 3, 4, 5]
    const found = arr3.find((num) => num > 10)
    if (found !== undefined) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: wrong argument
    const arr4 = [1, 2, 3, 4, 5]
    try {
      arr4.find()
    } catch (err) {
      if (err.message !== 'undefined is not a function') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4 passed')
      }
    }
  }

  {//Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expert = {
      values: [3, 4, 5],
      check(item) {
        return this.values.includes(item)
      }
    }

    const found = arr.find(expert.check, expert)
    if (found !== 3) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testFind()