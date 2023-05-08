require('./join.js')

function testJoin() {

  {// Test case 1
    const arr1 = ['a', 'b', 'c']
    const result = arr1.join()

    if (result !== 'a,b,c') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = ['a', 'b', 'c']
    const result = arr2.join('')

    if (result !== 'abc') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3
    const arr3 = ['a', 'b', 'c']
    const result = arr3.join('-')

    if (result !== 'a-b-c') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: empty array
    const arr4 = []
    const result = arr4.join()

    if (result !== '') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {//Test case 5: numbers array
    const arr5 = [1, 2, 3]
    const result = arr5.join('|')

    if (result !== '1|2|3') {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testJoin()