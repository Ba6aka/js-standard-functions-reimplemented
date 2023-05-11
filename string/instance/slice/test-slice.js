require('./slice.js')

function testSlice() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const slicedStr = str.slice(7)

    if (slicedStr !== "world!") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: with end argument
    const str = "Hello, world!"
    const slicedStr = str.slice(0, 5)

    if (slicedStr !== "Hello") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: with negative end argument
    const str = "Hello, world!"
    const slicedStr = str.slice(7, -1)

    if (slicedStr !== "world") {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testSlice()