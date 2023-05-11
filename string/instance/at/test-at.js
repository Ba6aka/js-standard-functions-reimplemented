require('./at.js')

function testAt() {
  {// Test case 1: standard case
    const str = 'hello'
    const result = str.at(1)

    if (result !== 'e') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2:out range index
    const str = 'test'
    const result = str.at(10)

    if (result !== undefined) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 3: negative index
    const str = 'hello'
    const result = str.at(-2)

    if (result !== 'l') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 4: fractional index
    const str = 'world'
    const result = str.at(4.5)

    if (result !== 'd') {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
  
}

testAt()