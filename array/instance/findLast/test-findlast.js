require('./findLast.js')

function testFindLast() {

  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]

    let lastEvenNumber = arr1.findLast((num) => num % 2 === 0)

    if (lastEvenNumber !== 4) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2 
    const arr2 = [1, 2, 3, 4, 5]

    let lastOddNumber = arr2.findLast((num) => num % 2 !== 0)

    if (lastOddNumber !== 5) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3: none passing
    const arr3 = [1, 2, 3, 4, 5]

    let greaterThanTen = arr3.findLast((num) => num > 10)
    
    if (greaterThanTen !== undefined) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: wrong argument
    const arr4 = [1, 2, 3, 4, 5]
    try {
      arr4.findLast()
    } catch (err) {
      if (err.message !== 'undefined is not a function') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4 passed')
      }
    }
  }

  try {//Test case 5: thisArg
    const arr5 = [1, 2, 3, 4, 5]
    const expert = {
      values: [1, 2, 3],
      check(item) {
        return this.values.includes(item)
      }
    }
  
    if (arr5.findLast(expert.check, expert) !== 3) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  } catch (err) {
    console.error('Test case 5 throws')
    console.log(err)
  }
}

testFindLast()