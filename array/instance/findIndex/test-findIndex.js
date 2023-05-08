require('./findIndex.js')

function testFindIndex() {

  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]

    let foundIndex = arr1.findIndex((num) => num % 2 === 0)
    if (foundIndex !== 1) {
      console.error('Test case 1 failed')

    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2 
    const arr2 = [1, 3, 5]

    let foundIndex = arr2.findIndex((num) => num % 2 === 0)

    if (foundIndex !== -1) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3: finding an object
    const arr3 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Bob' }
    ]

    let foundIndex = arr3.findIndex((person) => person.name === 'Mary')
    if (foundIndex !== 1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: empty array
    const arr4 = []

    let foundIndex = arr4.findIndex((num) => num > 10)
    
    if (foundIndex !== -1) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {//Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expert = {
      value: 3,
      check(item) {
        return item === this.value
      }
    }
  
    if (arr.findIndex(expert.check, expert) !== 2) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testFindIndex()