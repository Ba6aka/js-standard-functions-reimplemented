require('./every.js')

function testEvery() {
  {// Test case 1
    const arr = [2, 4, 6, 8, 10]

    let areAllEven = arr.every((num) => num % 2 === 0)

    if (!areAllEven) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr = [1, 3, 5, 7, 9]

    let areAllOdd = arr.every((num) => num % 2 !== 0)

    if (!areAllOdd) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const arr = [2, 4, 5, 6, 8]

    let areAllEven = arr.every((num) => num % 2 === 0)

    if (areAllEven) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4: wrong argument
    const arr = [1, 2, 3, 4, 5]
    
    try {
      arr.every()
    } catch (err) {
      if (err.message !== 'undefined is not a function') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4 passed')
      }
    }
  }

 }

testEvery()