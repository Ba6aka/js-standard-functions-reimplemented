require('./filter.js')

testFilter()

function testFilter() {

  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]
    let evenNumbers = arr1.filter((num) => num % 2 === 0)
    if (evenNumbers.toString() !== [2, 4].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2 
    const arr2 = [1, 2, 3, 4, 5]
    let oddNumbers = arr2.filter((num) => num % 2 !== 0)
    if (oddNumbers.toString() !== [1, 3, 5].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3: none passing
    const arr3 = [1, 2, 3, 4, 5]
    let numbers = arr3.filter((num) => num > 10)
    if (numbers.toString() !== [].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: wrong argument
    const arr4 = [1, 2, 3, 4, 5]
    try {
      arr4.filter()
    } catch (err) {
      if (err.message !== 'undefined is not a function') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4 passed')
      }
    }
  }

 try {//Test case 5: thisArg
    const arr = [1, 2, 3, 4, 5]
    const expert = {
      values: [1, 2, 3],
      check(item) {
        return this.values.includes(item)
      }
    }
  
    if (arr.filter(expert.check, expert).toString() !== [1, 2, 3].toString()) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  } catch (err) {
    console.error('Test case 5 throws')
    console.log(err)
  }
}
