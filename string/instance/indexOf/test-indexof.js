require('./indexOf.js')

function testIndexOf() {
  {// Test case 1
    const str1 = "Hello, world!"
    const index1 = str1.indexOf("world")

    if (index1 !== 7) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Hello, world!"
    const index2 = str2.indexOf("world", 8)

    if (index2 !== -1) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "Hello, world!"
    const index3 = str3.indexOf("foo")

    if (index3 !== -1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testIndexOf()