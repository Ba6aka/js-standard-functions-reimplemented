require('./forEach.js')

function testForEach() {
  {// Test case 1
    const arr1 = [1, 2, 3, 4, 5]

    let sum = 0

    arr1.forEach((num) => {
      sum += num
    })
    if (sum !== 15) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const arr2 = ['foo', 'bar', 'baz']

    let result = ''

    arr2.forEach((str, index) => {
      result += `${str}${index === arr2.length - 1 ? '' : ','}`
    })
    if (result !== 'foo,bar,baz') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {//Test case 3: thisArg
    const arr3 = [1, 2, 3, 4, 5]
    const obj = {
      sum: 0,
      add(num) {
        this.sum += num
      }
    }

    arr3.forEach(obj.add, obj)

    if (obj.sum !== 15) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {//Test case 4: wrong argument
    const arr4 = [1, 2, 3, 4, 5]

    try {
      arr4.forEach()
    } catch (err) {
      if (err.message !== 'undefined is not a function') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4 passed')
      }
    }
  }
}

testForEach()