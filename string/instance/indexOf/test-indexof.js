require('./indexOf.js')

function testIndexOf() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const index = str.indexOf("world")

    if (index !== 7) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: with wrong start position
    const str = "Hello, world!"
    const index = str.indexOf("world", 8)

    if (index !== -1) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: with wrong argument
    const str = "Hello, world!"
    const index = str.indexOf("foo")

    if (index !== -1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testIndexOf()